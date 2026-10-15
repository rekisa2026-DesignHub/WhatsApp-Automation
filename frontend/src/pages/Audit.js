import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ArrowRight, Check, X } from 'lucide-react';
import SEO from '../components/SEO';
import { Reveal } from '../components/Reveal';
import AuditMockup from '../components/mockups/AuditMockup';
import { Field, Honeypot, useSubmit } from '../components/Form';

const ENGAGEMENT = [
  'DIY tools',
  'Workshop',
  'Done-with-you (DWY) growth marketing',
  'Done-for-you (DFY) growth marketing',
  'Done-for-you implementation',
  'AWS cloud support',
  'Not sure yet',
];

const PLAN_MAP = {
  DWY: {
    name: 'Done With You (DWY)',
    price: 'R4,850 / month',
    engagement: 'Done-with-you (DWY) growth marketing',
    color: 'purple',
  },
  DFY: {
    name: 'Done For You (DFY)',
    price: 'R13,500 / month',
    engagement: 'Done-for-you (DFY) growth marketing',
    color: 'coral',
  },
};

// Service-specific plan overrides (name/price/engagement)
const PLAN_OVERRIDES = {
  'whatsapp-automation': {
    DWY: {
      name: 'DWY WhatsApp Automation Enablement',
      price: 'From R4,850 / month',
      engagement: 'Done-with-you (DWY) implementation',
    },
    DFY: {
      name: 'DFY WhatsApp Automation Setup',
      price: 'From R8,500 once-off',
      engagement: 'Done-for-you implementation',
    },
  },
};

const SERVICE_MAP = {
  'growth-marketing-enablement': 'Growth Marketing Enablement',
  'digital-commerce-enablement': 'eCommerce Enablement',
  'whatsapp-automation': 'WhatsApp Automation',
  'aws-cloud-enablement': 'AWS Cloud Enablement',
};

export default function Audit() {
  const [params, setParams] = useSearchParams();
  const planKey = params.get('plan');
  const serviceKey = params.get('service');
  const basePlan = planKey ? PLAN_MAP[planKey] : null;
  const override = serviceKey && PLAN_OVERRIDES[serviceKey] && planKey ? PLAN_OVERRIDES[serviceKey][planKey] : null;
  const plan = basePlan ? { ...basePlan, ...(override || {}) } : null;
  const service = serviceKey ? SERVICE_MAP[serviceKey] : null;

  const [form, setForm] = useState({
    first_name: '', last_name: '', business_name: '', email: '', phone: '',
    website: '', industry: '', team_size: '', main_goal: '',
    current_systems: '', biggest_challenge: '', engagement_type: '', honeypot: '',
  });
  const { submit, status, error } = useSubmit('audit');

  // Prefill engagement + main_goal when a plan is selected via URL
  useEffect(() => {
    if (plan) {
      setForm((f) => ({
        ...f,
        engagement_type: f.engagement_type || plan.engagement,
        main_goal: f.main_goal || `Interested in the ${plan.name} package${service ? ` for ${service}` : ''}.`,
      }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [planKey]);

  const clearPlan = () => {
    const next = new URLSearchParams(params);
    next.delete('plan');
    next.delete('service');
    setParams(next, { replace: true });
  };

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const onSubmit = async (e) => {
    e.preventDefault();
    await submit({
      ...form,
      selected_plan: plan ? plan.name : undefined,
      selected_service: service || undefined,
    });
  };

  return (
    <>
      <SEO
        title="Digital Operating System Audit for SMEs"
        description="Find the gaps slowing down your business growth. A structured audit of your growth, commerce, customer communication, operations and cloud systems — with clear next steps."
        canonical="https://rekisa.co.za/audit"
      />

      <section className="page-hero">
        <div className="container-wide page-hero__inner">
          <div className="breadcrumbs"><Link to="/">Home</Link> &#8250; Audit</div>
          <div className="split" style={{ alignItems: 'center', marginTop: 16 }}>
            <Reveal>
              <div>
                <span className="eyebrow on-dark coral">Digital Operating System Audit</span>
                <h1>Find the <span className="h-accent">gaps</span> slowing down your business growth.</h1>
                <p>A structured, honest review of your systems — across attract, sell, serve, operate and scale. You&rsquo;ll leave with a prioritised plan, not a generic report.</p>
              </div>
            </Reveal>
            <Reveal delay={2}>
              <div className="split__vis"><AuditMockup /></div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-wide">
          <div className="split">
            <Reveal>
              <div>
                <span className="eyebrow">What we review</span>
                <h2 className="display-lg">A structured look at your <span className="h-accent">current system</span>.</h2>
                <p style={{ fontSize: '1.075rem', color: 'var(--gray-600)', marginTop: 16 }}>
                  Nine practical dimensions, scored and prioritised. Then we tell you what to fix next — and how.
                </p>
                <ul className="check-list" style={{ marginTop: 32 }}>
                  {[
                    'Lead generation',
                    'Sales workflows',
                    'Ecommerce',
                    'Customer communication',
                    'WhatsApp usage',
                    'Operations tools',
                    'Team collaboration',
                    'Reporting',
                    'Cloud and infrastructure readiness',
                  ].map((c) => (
                    <li key={c}><span className="check"><Check size={14} /></span>{c}</li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={2}>
              <div className="card" style={{ padding: 40, boxShadow: 'var(--shadow-lg)' }}>
                {plan ? (
                  <div style={{
                    marginBottom: 20, padding: '16px 18px', borderRadius: 14,
                    background: plan.color === 'coral' ? 'linear-gradient(135deg, rgba(255,107,71,0.08), rgba(124,58,237,0.06))' : 'linear-gradient(135deg, rgba(124,58,237,0.08), rgba(20,184,166,0.06))',
                    border: `1px solid ${plan.color === 'coral' ? 'rgba(255,107,71,0.25)' : 'rgba(124,58,237,0.25)'}`,
                    display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12,
                  }}>
                    <div>
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: plan.color === 'coral' ? 'var(--coral-500)' : 'var(--purple-600)', fontWeight: 600 }}>
                        Selected package
                      </div>
                      <div style={{ marginTop: 6, fontWeight: 700, fontSize: '1.05rem', color: 'var(--navy-900)' }}>
                        {plan.name}
                      </div>
                      <div style={{ marginTop: 2, fontSize: '0.85rem', color: 'var(--gray-600)' }}>
                        {plan.price}{service ? ` · ${service}` : ''}
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={clearPlan}
                      aria-label="Clear selection"
                      style={{ background: 'transparent', border: 0, color: 'var(--gray-500)', cursor: 'pointer', padding: 4, borderRadius: 6 }}
                      data-testid="clear-plan"
                    >
                      <X size={16} />
                    </button>
                  </div>
                ) : (
                  <span className="tag tag--coral">Free · 30 min call to walk through it</span>
                )}
                <h3 style={{ marginTop: 12, fontSize: '1.75rem' }}>
                  {plan ? `Continue with ${plan.name}` : 'Book your audit'}
                </h3>
                <p style={{ fontSize: '0.925rem', color: 'var(--gray-600)' }}>
                  Tell us a little about your business. We&rsquo;ll come back within one working day.
                </p>
                {status === 'success' ? (
                  <div className="form-success">
                    Thanks — we&rsquo;ve received your {plan ? `${plan.name} enquiry` : 'audit request'} and will be in touch shortly.
                  </div>
                ) : (
                  <form className="form" onSubmit={onSubmit} data-testid="audit-form">
                    <div className="form-row">
                      <Field label="First name" name="first_name" value={form.first_name} onChange={onChange} required />
                      <Field label="Last name" name="last_name" value={form.last_name} onChange={onChange} required />
                    </div>
                    <Field label="Business name" name="business_name" value={form.business_name} onChange={onChange} required />
                    <div className="form-row">
                      <Field label="Work email" name="email" type="email" value={form.email} onChange={onChange} required />
                      <Field label="Phone number" name="phone" value={form.phone} onChange={onChange} />
                    </div>
                    <div className="form-row">
                      <Field label="Website" name="website" value={form.website} onChange={onChange} placeholder="https://" />
                      <Field label="Industry" name="industry" value={form.industry} onChange={onChange} />
                    </div>
                    <Field label="Team size" name="team_size" value={form.team_size} onChange={onChange} as="select" options={['1', '2–5', '6–20', '21–50', '51–200', '200+']} />
                    <Field label="Main business goal" name="main_goal" value={form.main_goal} onChange={onChange} placeholder="e.g. Generate 20 qualified leads a month" />
                    <Field label="Current systems or tools you use" name="current_systems" value={form.current_systems} onChange={onChange} as="textarea" placeholder="CRM, ecommerce, WhatsApp, etc." />
                    <Field label="Biggest current challenge" name="biggest_challenge" value={form.biggest_challenge} onChange={onChange} as="textarea" placeholder="What's slowing you down?" />
                    <Field label="Preferred engagement type" name="engagement_type" value={form.engagement_type} onChange={onChange} as="select" options={ENGAGEMENT} />
                    <Honeypot value={form.honeypot} onChange={onChange} />
                    {error && <div className="form-error">{error}</div>}
                    <button className="btn btn--spark btn--lg" type="submit" disabled={status === 'loading'} data-testid="audit-submit">
                      {status === 'loading' ? 'Sending…' : plan ? `Submit ${plan.name} enquiry` : 'Book my audit'} <ArrowRight size={18} />
                    </button>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
