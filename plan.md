# plan.md — Rekisa Website Repositioning (V2)

## 1) Objectives (Updated)
- Launch a new Rekisa marketing site that positions Rekisa as a **strategic digital enablement partner** (“digital operating system for growth”) with outcome language: **Sell better. Operate better. Scale better.**
- Deliver **all required pages** with consistent information architecture, design system, SEO, and responsive UX.
- Implement working **form capture APIs** with **MongoDB persistence** and an **AWS SES/SNS integration hook** ready for credentials injection.
- Expand the Services architecture to include a standalone **WhatsApp Automation** service page (separate from eCommerce Enablement) and ensure navigation, SEO, and audit prefill flows work end-to-end.
- Publish a working **Resources hub + 8 articles** to seed content and internal linking.
- Add analytics/tracking **placeholders** (GA4/GTM/Meta Pixel/LinkedIn Insight) for quick ID swap later.
- Provide a clear path to next phase: **end-to-end verification** + **SES/SNS wiring** + final technical hardening.

## 2) Implementation Steps (Phased)

### Phase 1 — Core Integration POC (Forms → DB → Email Hook)
**Status: COMPLETE (implemented as part of the build).**
1. Backend endpoints implemented and validated:
   - `POST /api/contact`
   - `POST /api/audit`
2. MongoDB persistence confirmed.
3. Anti-spam: honeypot field added.
4. Email notifications: **AWS SES/SNS adapter stub** implemented; currently logs when credentials are not set.
5. End-to-end smoke check performed:
   - `/api/health` returns `{ ok: true, db: "up" }`
   - test submission to `/api/contact` returns `{ ok: true, id: ... }`

**Phase 1 user stories (met)**
1. As a visitor, I can submit the audit form and see a confirmation message.
2. As a visitor, I can submit the contact form and get validation feedback.
3. As an admin, I can confirm submissions persist to MongoDB.
4. As a developer, I can enable email delivery later by providing SES/SNS env vars.
5. As a visitor, duplicate submissions are prevented via loading/disabled submit state.

---

### Phase 2 — V1 App Development (All Pages + Content + SEO)
**Status: COMPLETE.**

1. **Project setup (single pass)**
   - Frontend: React + React Router + shared layout + design tokens.
   - Backend: FastAPI + Motor (MongoDB).

2. **Design system (implemented)**
   - Palette: deep navy + electric purple + teal; limited gradients.
   - Typography: Space Grotesk (display) + Inter (body).
   - Core components: sticky nav + dropdowns, cards, buttons, forms, section layouts.
   - Custom **Digital Operating System** diagram: **Attract → Sell → Serve → Operate → Scale**.

3. **Routing + pages (all required implemented)**
   - Home
   - Services Overview + service pillar pages:
     - Growth Marketing Enablement
     - eCommerce Enablement
     - AWS Cloud Enablement
     - **WhatsApp Automation (NEW — standalone service page)**
   - Workshops Overview + 3 workshop pages:
     - Growth Marketing Workshop
     - eCommerce Accelerator Workshop
     - Digital Business Model Workshop
   - Digital Tools Overview + 8 tool detail pages:
     - Ecwid, Emergent, Zoho One, Apollo.io, Chatfuel, VideoAsk, Afrihost, Google Workspace
   - Digital Operating System Audit (form)
   - Resources hub + 8 article pages
   - About, Contact
   - Legal: Privacy, Terms, Partner Disclosure
   - 404 page

4. **Forms (complete set implemented)**
   - Backend endpoints:
     - `POST /api/audit`
     - `POST /api/contact`
     - `POST /api/workshop-enquiry`
     - `POST /api/tool-help`
     - `POST /api/newsletter`
   - All submissions persisted to MongoDB.
   - UX: idle/loading/success/error states; basic client-side required fields.

5. **Content implementation (implemented)**
   - Structured, hardcoded page content in the frontend.
   - Resources hub seeded with 8 articles (published pages + internal linking).
   - Positioning and tone enforced:
     - Uses master positioning (“Build a stronger digital operating system for growth”)
     - Avoids “#1”, “cutting-edge”, “revolutionary” claims
     - Includes Sandton/Johannesburg trust line

6. **SEO + technical (implemented)**
   - Per-page meta via `react-helmet-async`.
   - JSON-LD included (Organization/WebSite + Service + Article + Event where relevant).
   - `sitemap.xml` + `robots.txt` in `/public`.
   - Analytics placeholders in `index.html`:
     - GTM, GA4, Meta Pixel, LinkedIn Insight (guarded by placeholder detection).

7. **Internal linking + navigation (implemented)**
   - Consistent top nav/footer.
   - Cross-links across Services, Workshops, Tools, Resources, Audit.

8. **One round testing (end-to-end)**
   - **Next step:** run testing_agent_v3 for routes, responsive checks, forms, DB persistence, error states, broken links, SEO tags.

**Phase 2 user stories (met)**
1. As a business buyer, I can understand Rekisa’s DOS framework quickly on the Home page.
2. As a prospect, I can compare services and find the right audit CTA.
3. As a visitor, I can browse tools by category and request setup help per tool.
4. As a learner, I can browse Resources and read each article with clean formatting.
5. As a prospect, I can enquire about workshops and receive confirmation.

---

### Phase 2.1 — WhatsApp Automation Service Extraction (From eCommerce → Standalone)
**Status: COMPLETE.**

**Goal:** Decouple WhatsApp Automation from eCommerce Enablement and launch it as a dedicated service page under Services.

1. **New page built**
   - Added new route: `/services/whatsapp-automation`.
   - Created `/app/frontend/src/pages/WhatsAppAutomation.js` using existing premium design patterns.
   - Content sourced from: `https://campaigns.rekisa.co.za/whatsapp-automation`.

2. **WhatsApp Automation page content blocks (implemented)**
   - Hero with bespoke WhatsApp phone mockup
   - Problem / Outcome section
   - 10-capability automation grid
   - Stats strip
   - 6 use cases
   - 7-step implementation process
   - 3-tier pricing: **DIY / DWY / DFY**
   - Included vs excluded scope
   - Why Rekisa section
   - FAQ accordion
   - Final CTA (Request a quote)

3. **Design/CSS additions (implemented)**
   - Added page-specific styles in `App.css`:
     - `.wa-grid`, `.wa-card`, `.wa-stats`, `.wa-usecases`, `.wa-process`, `.wa-scope`, `.wa-faq`
     - `.pricing-tiers--three`
     - `.pricing-card--teal` accent support

4. **Navigation updates (implemented)**
   - Added WhatsApp Automation under **Services** in:
     - Desktop dropdown
     - Mobile Services menu
     - Footer Services list

5. **Remove WhatsApp Automation from eCommerce (implemented)**
   - Updated `services.js` to remove WhatsApp automation component and WhatsApp note.
   - Updated `CommerceServiceCarousel.js` to remove the WhatsApp solution card.
   - Updated ServiceTemplate carousel copy from **Ten** to **Nine** solutions.
   - Updated `Home.js` eCommerce section tagline and chips (removed WhatsApp mentions).

6. **Audit form linking + pricing correctness (implemented)**
   - Added `whatsapp-automation` to `SERVICE_MAP` in `Audit.js` for prefill.
   - Made `Audit.js` plan display **service-aware** so WhatsApp pricing shows correctly when arriving via:
     - `/audit?plan=DWY&service=whatsapp-automation`
     - `/audit?plan=DFY&service=whatsapp-automation`

7. **Verification (complete)**
   - Screenshot-based verification confirmed:
     - New page renders all sections correctly.
     - Services dropdown includes WhatsApp Automation.
     - eCommerce solutions grid shows 9 items (WhatsApp removed).

---

### Phase 3 — Hardening + AWS SES/SNS Enablement + Content Polish
**Status: IN PROGRESS / NEXT.**

1. **Testing + fixes (immediate next)**
   - Run testing_agent_v3 against:
     - Navigation + all routes (including `/services/whatsapp-automation`)
     - Mobile responsiveness
     - All forms (validation, success/error)
     - MongoDB persistence verification
     - Basic SEO checks (title/meta/canonical/JSON-LD)
     - Broken links
   - Address any defects found.

2. **AWS SES/SNS integration (pending user credentials)**
   - Implement final SES/SNS configuration using user-provided details:
     - Region, from-address/domain, recipients and/or SNS topic ARN
     - Credential/IAM approach
   - Ensure notification failures never block persistence (DB remains source of truth).

3. **Analytics activation (pending real IDs)**
   - Replace placeholders for:
     - GTM ID
     - GA4 measurement ID
     - Meta Pixel ID
     - LinkedIn partner ID
   - Confirm scripts fire only when real IDs are supplied.

4. **Performance + quality**
   - Image optimisation + lazy loading review.
   - Route-based code splitting (optional) if needed.
   - Accessibility spot checks (focus states, headings, contrast).

5. **Copy + compliance final pass**
   - Final tone review for banned/over-claim language.
   - CTA consistency and terminology alignment (including eCommerce vs WhatsApp separation).

**Phase 3 user stories (target)**
1. As the site owner, I receive email/SNS notifications for each new submission.
2. As a developer, I can verify notification failures don’t lose submissions.
3. As a visitor, pages load fast and remain readable on mobile.
4. As a prospect, I can navigate services → audit → submit without confusion.
5. As a marketer, I can drop real tracking IDs in without refactors.

---

### Phase 4 — Future Enhancements (Post-V1)
- CMS/admin + article editor
- Case studies module
- Gated lead magnets
- Calendar booking integration
- Consent management
- Auth + admin dashboards for submission review
- SEO: formal 301 redirect map + long-tail landing pages

## 3) Next Actions (Updated)
1. **Run testing_agent_v3** for end-to-end verification (navigation, forms, SEO, broken links), including the new `/services/whatsapp-automation` route.
2. Share AWS details when ready (SES/SNS):
   - `AWS_REGION`
   - SES: `AWS_SES_FROM` + destination email(s) (`AWS_SES_TO` comma-separated)
   - SNS (optional): `AWS_SNS_TOPIC_ARN`
   - Credential method (IAM user keys vs role)
3. Share analytics IDs to activate tracking:
   - GTM ID, GA4 measurement ID, Meta Pixel ID, LinkedIn partner ID
4. Confirm canonical domain to use in production (for canonical URLs + sitemap).
5. Provide 301 redirect mapping list (old → new URLs) when ready.

## 4) Success Criteria (Updated)
- All required pages are live, routed, responsive, and aligned to design/tone constraints.
- Services information architecture includes a dedicated **WhatsApp Automation** service page under `/services/whatsapp-automation` and it appears in global navigation.
- eCommerce Enablement content no longer positions WhatsApp Automation as an embedded sub-solution; the eCommerce solutions list reflects the updated scope.
- Audit plan prefill works and shows correct WhatsApp Automation pricing when arriving from WhatsApp tiers.
- All form APIs accept submissions, validate inputs, and persist correctly to MongoDB.
- SES/SNS integration can be enabled via env config and delivers notifications reliably once creds are provided.
- Resources hub and all 8 articles render cleanly and support internal linking.
- SEO essentials present: per-page meta, JSON-LD, sitemap/robots, clean nav structure.
- Analytics placeholders present and safely guarded until real IDs are supplied.
- Testing_agent_v3 passes with no critical issues (or issues are documented + fixed).
