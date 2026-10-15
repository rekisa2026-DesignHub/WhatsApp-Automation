from fastapi import FastAPI, APIRouter, HTTPException, Request, BackgroundTasks
from fastapi.responses import Response
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional, Literal, Dict, Any
import uuid
from datetime import datetime, timezone
from html import escape as html_escape


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

app = FastAPI(title="Rekisa API")
api_router = APIRouter(prefix="/api")


def now_iso() -> str:
    return datetime.now(timezone.utc).isoformat()


def _serialize(doc: Dict[str, Any]) -> Dict[str, Any]:
    if not doc:
        return doc
    doc.pop('_id', None)
    return doc


# ==================== AWS SES Adapter ====================
# Sends transactional notifications for every form submission. If SES is not
# configured (env missing) or a delivery fails, the DB write is unaffected —
# submissions are always persisted first so nothing is ever lost.
AWS_REGION = os.environ.get('AWS_REGION')
AWS_ACCESS_KEY_ID = os.environ.get('AWS_ACCESS_KEY_ID')
AWS_SECRET_ACCESS_KEY = os.environ.get('AWS_SECRET_ACCESS_KEY')
AWS_SES_FROM = os.environ.get('AWS_SES_FROM')
AWS_SES_FROM_NAME = os.environ.get('AWS_SES_FROM_NAME', 'Rekisa Website')
AWS_SES_TO = os.environ.get('AWS_SES_TO')  # comma-separated
AWS_SNS_TOPIC_ARN = os.environ.get('AWS_SNS_TOPIC_ARN')

_ses_client = None


def _get_ses_client():
    """Lazy singleton for the SES client so we don't pay init on every call."""
    global _ses_client
    if _ses_client is None and AWS_REGION and AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY:
        import boto3  # type: ignore
        _ses_client = boto3.client(
            'ses',
            region_name=AWS_REGION,
            aws_access_key_id=AWS_ACCESS_KEY_ID,
            aws_secret_access_key=AWS_SECRET_ACCESS_KEY,
        )
    return _ses_client


def _fields_to_html(fields: Dict[str, Any]) -> str:
    """Render a simple styled HTML table from a dict of {label: value}."""
    rows = []
    for label, value in fields.items():
        if value is None or value == '':
            continue
        v = html_escape(str(value)).replace('\n', '<br/>')
        rows.append(
            f'<tr>'
            f'<td style="padding:10px 14px;border-bottom:1px solid #EEE;color:#64748B;font-family:Inter,Arial,sans-serif;font-size:13px;font-weight:600;width:180px;vertical-align:top;">{html_escape(label)}</td>'
            f'<td style="padding:10px 14px;border-bottom:1px solid #EEE;color:#0F172A;font-family:Inter,Arial,sans-serif;font-size:14px;">{v}</td>'
            f'</tr>'
        )
    return '<table style="border-collapse:collapse;width:100%;max-width:640px;background:#fff;border:1px solid #EEE;border-radius:12px;overflow:hidden;">' + ''.join(rows) + '</table>'


def _wrap_html(title: str, intro: str, table_html: str) -> str:
    return (
        '<!DOCTYPE html><html><body style="margin:0;padding:32px;background:#F8FAFC;font-family:Inter,Arial,sans-serif;">'
        '<div style="max-width:680px;margin:0 auto;">'
        f'<div style="padding:0 4px 24px;">'
        f'<div style="font-size:12px;letter-spacing:0.14em;text-transform:uppercase;color:#64748B;font-weight:600;">Rekisa · New Submission</div>'
        f'<h1 style="margin:8px 0 6px;font-family:Poppins,Arial,sans-serif;font-size:22px;color:#0A0E27;">{html_escape(title)}</h1>'
        f'<p style="margin:0;color:#475569;font-size:14px;line-height:1.55;">{html_escape(intro)}</p>'
        f'</div>'
        f'{table_html}'
        '<div style="margin-top:24px;color:#94A3B8;font-size:12px;font-family:Inter,Arial,sans-serif;">'
        'Sent by Rekisa forms · <a href="https://rekisa.co.za" style="color:#7C3AED;">rekisa.co.za</a>'
        '</div>'
        '</div></body></html>'
    )


def _send_ses_email(subject: str, text_body: str, html_body: str, reply_to: Optional[str] = None) -> bool:
    """Blocking SES send. Called from a background task so it never blocks the API response."""
    ses = _get_ses_client()
    if not ses or not AWS_SES_FROM or not AWS_SES_TO:
        logger.info(f"[NOTIFY:log-only] {subject}\n{text_body}")
        return False
    to_addrs = [a.strip() for a in AWS_SES_TO.split(',') if a.strip()]
    try:
        kwargs = {
            'Source': f'"{AWS_SES_FROM_NAME}" <{AWS_SES_FROM}>' if AWS_SES_FROM_NAME else AWS_SES_FROM,
            'Destination': {'ToAddresses': to_addrs},
            'Message': {
                'Subject': {'Data': subject, 'Charset': 'UTF-8'},
                'Body': {
                    'Text': {'Data': text_body, 'Charset': 'UTF-8'},
                    'Html': {'Data': html_body, 'Charset': 'UTF-8'},
                },
            },
        }
        if reply_to:
            kwargs['ReplyToAddresses'] = [reply_to]
        resp = ses.send_email(**kwargs)
        logger.info(f"[SES:sent] messageId={resp.get('MessageId')} subject={subject!r}")
        return True
    except Exception as exc:  # noqa: BLE001
        logger.exception(f"[SES:failed] subject={subject!r} error={exc}")
        return False


def queue_notification(
    background_tasks: BackgroundTasks,
    subject: str,
    heading: str,
    intro: str,
    fields: Dict[str, Any],
    reply_to: Optional[str] = None,
) -> None:
    """Build text + HTML notification and schedule background delivery."""
    text_lines = [f"{k}: {v}" for k, v in fields.items() if v not in (None, '')]
    text_body = f"{heading}\n\n{intro}\n\n" + "\n".join(text_lines)
    html_body = _wrap_html(heading, intro, _fields_to_html(fields))
    background_tasks.add_task(_send_ses_email, subject, text_body, html_body, reply_to)


# ==================== Shared Models ====================
class BaseSubmission(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    created_at: str = Field(default_factory=now_iso)
    source_url: Optional[str] = None
    honeypot: Optional[str] = None  # anti-spam


# ==================== Audit Form ====================
class AuditSubmission(BaseSubmission):
    first_name: str
    last_name: str
    business_name: str
    email: EmailStr
    phone: Optional[str] = None
    website: Optional[str] = None
    industry: Optional[str] = None
    team_size: Optional[str] = None
    main_goal: Optional[str] = None
    current_systems: Optional[str] = None
    biggest_challenge: Optional[str] = None
    engagement_type: Optional[str] = None
    selected_plan: Optional[str] = None
    selected_service: Optional[str] = None


@api_router.post("/audit")
async def submit_audit(payload: AuditSubmission, background_tasks: BackgroundTasks):
    if payload.honeypot:
        # Silent success for bots
        return {"ok": True}
    doc = payload.model_dump()
    await db.audit_submissions.insert_one(doc)
    queue_notification(
        background_tasks,
        subject=f"New Audit — {payload.business_name}",
        heading=f"Digital Operating System Audit — {payload.business_name}",
        intro=f"A new Digital Operating System Audit request has been submitted by {payload.first_name} {payload.last_name}.",
        fields={
            "Name": f"{payload.first_name} {payload.last_name}",
            "Business": payload.business_name,
            "Email": payload.email,
            "Phone": payload.phone,
            "Website": payload.website,
            "Industry": payload.industry,
            "Team size": payload.team_size,
            "Main goal": payload.main_goal,
            "Current systems": payload.current_systems,
            "Biggest challenge": payload.biggest_challenge,
            "Preferred engagement": payload.engagement_type,
            "Selected plan": payload.selected_plan,
            "Selected service": payload.selected_service,
            "Submitted at": payload.created_at,
        },
        reply_to=payload.email,
    )
    return {"ok": True, "id": payload.id}


# ==================== Contact ====================
class ContactSubmission(BaseSubmission):
    name: str
    email: EmailStr
    company: Optional[str] = None
    phone: Optional[str] = None
    subject: Optional[str] = None
    message: str


@api_router.post("/contact")
async def submit_contact(payload: ContactSubmission, background_tasks: BackgroundTasks):
    if payload.honeypot:
        return {"ok": True}
    doc = payload.model_dump()
    await db.contact_submissions.insert_one(doc)
    queue_notification(
        background_tasks,
        subject=f"Contact enquiry — {payload.name}",
        heading=f"New contact enquiry — {payload.name}",
        intro=f"{payload.name} has just submitted the contact form on rekisa.co.za.",
        fields={
            "Name": payload.name,
            "Company": payload.company,
            "Email": payload.email,
            "Phone": payload.phone,
            "Subject": payload.subject,
            "Message": payload.message,
            "Submitted at": payload.created_at,
        },
        reply_to=payload.email,
    )
    return {"ok": True, "id": payload.id}


# ==================== Workshop Enquiry ====================
class WorkshopEnquiry(BaseSubmission):
    workshop: str
    name: str
    email: EmailStr
    company: Optional[str] = None
    phone: Optional[str] = None
    team_size: Optional[str] = None
    preferred_dates: Optional[str] = None
    goals: Optional[str] = None


@api_router.post("/workshop-enquiry")
async def submit_workshop_enquiry(payload: WorkshopEnquiry, background_tasks: BackgroundTasks):
    if payload.honeypot:
        return {"ok": True}
    doc = payload.model_dump()
    await db.workshop_enquiries.insert_one(doc)
    queue_notification(
        background_tasks,
        subject=f"Workshop enquiry — {payload.workshop} — {payload.name}",
        heading=f"Workshop enquiry — {payload.workshop}",
        intro=f"{payload.name} is enquiring about the {payload.workshop} workshop.",
        fields={
            "Workshop": payload.workshop,
            "Name": payload.name,
            "Company": payload.company,
            "Email": payload.email,
            "Phone": payload.phone,
            "Team size": payload.team_size,
            "Preferred dates": payload.preferred_dates,
            "Goals": payload.goals,
            "Submitted at": payload.created_at,
        },
        reply_to=payload.email,
    )
    return {"ok": True, "id": payload.id}


# ==================== Tool Setup Help ====================
class ToolHelpEnquiry(BaseSubmission):
    tool: str
    name: str
    email: EmailStr
    company: Optional[str] = None
    phone: Optional[str] = None
    context: Optional[str] = None


@api_router.post("/tool-help")
async def submit_tool_help(payload: ToolHelpEnquiry, background_tasks: BackgroundTasks):
    if payload.honeypot:
        return {"ok": True}
    doc = payload.model_dump()
    await db.tool_help_enquiries.insert_one(doc)
    queue_notification(
        background_tasks,
        subject=f"Tool setup help — {payload.tool} — {payload.name}",
        heading=f"Tool setup help — {payload.tool}",
        intro=f"{payload.name} is requesting setup help for {payload.tool}.",
        fields={
            "Tool": payload.tool,
            "Name": payload.name,
            "Company": payload.company,
            "Email": payload.email,
            "Phone": payload.phone,
            "Context": payload.context,
            "Submitted at": payload.created_at,
        },
        reply_to=payload.email,
    )
    return {"ok": True, "id": payload.id}


# ==================== Newsletter ====================
class NewsletterSignup(BaseSubmission):
    email: EmailStr
    name: Optional[str] = None


@api_router.post("/newsletter")
async def submit_newsletter(payload: NewsletterSignup, background_tasks: BackgroundTasks):
    if payload.honeypot:
        return {"ok": True}
    doc = payload.model_dump()
    result = await db.newsletter_signups.update_one(
        {"email": payload.email},
        {"$setOnInsert": doc},
        upsert=True,
    )
    # Only notify on first-time signup, not re-submissions of the same email
    if getattr(result, 'upserted_id', None):
        queue_notification(
            background_tasks,
            subject=f"Newsletter signup — {payload.email}",
            heading="New newsletter signup",
            intro=f"{payload.email} has just subscribed to the Rekisa newsletter.",
            fields={
                "Name": payload.name,
                "Email": payload.email,
                "Submitted at": payload.created_at,
            },
            reply_to=payload.email,
        )
    return {"ok": True}


# ==================== Health ====================
@api_router.get("/")
async def root():
    return {"service": "Rekisa API", "status": "ok"}


@api_router.get("/health")
async def health():
    try:
        await db.command("ping")
        return {"ok": True, "db": "up"}
    except Exception as exc:  # noqa: BLE001
        return {"ok": False, "error": str(exc)}


# ==================== Robots + Sitemap (frontend also has copies) ====================
@api_router.get("/sitemap-data")
async def sitemap_data():
    # Handy for future dynamic sitemap generation.
    return {"generated_at": now_iso()}


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
)
logger = logging.getLogger("rekisa")


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
