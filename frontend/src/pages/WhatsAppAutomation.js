import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Star, MessageCircle, Zap, Users, Bot, Send, Repeat, Bell, Filter, Sparkles, BarChart3 } from 'lucide-react';
import SEO from '../components/SEO';
import { Reveal } from '../components/Reveal';

const AUTOMATIONS = [
  { n: '01', icon: Zap, title: 'Instant Replies', desc: 'Respond automatically the moment a customer messages.' },
  { n: '02', icon: Users, title: 'Lead Capture', desc: 'Collect names, contacts, interests, budgets, and enquiry details.' },
  { n: '03', icon: Filter, title: 'Lead Qualification', desc: 'Ask the right questions so your team focuses on serious enquiries.' },
  { n: '04', icon: MessageCircle, title: 'FAQs', desc: 'Answer common pricing, services, delivery, and availability questions.' },
  { n: '05', icon: Repeat, title: 'Automated Follow-Up', desc: 'Send reminders and follow-ups to leads who haven\u2019t responded.' },
  { n: '06', icon: Send, title: 'Human Handoff', desc: 'Route serious or complex enquiries to the right team member.' },
  { n: '07', icon: Bell, title: 'Broadcasts & Promotions', desc: 'Send approved campaigns, updates, offers, or reminders.' },
  { n: '08', icon: Filter, title: 'Segmentation', desc: 'Group customers by interest, status, product, or buying stage.' },
  { n: '09', icon: Sparkles, title: 'AI Assistance', desc: 'Use AI-powered replies for sales conversations where helpful.' },
  { n: '10', icon: BarChart3, title: 'Reporting', desc: 'Track enquiries, conversations, lead sources, and campaign activity.' },
];

const USE_CASES = [
  { title: 'Quote Requests', desc: 'Capture details, qualify the enquiry, and send to the right person.' },
  { title: 'Paid Ads Lead Follow-Up', desc: 'Send leads from Google, Facebook, Instagram, or LinkedIn straight into WhatsApp for an instant reply.' },
  { title: 'Bookings & Appointments', desc: 'Help customers request appointments, receive reminders, and confirm attendance.' },
  { title: 'eCommerce Support', desc: 'Answer questions on products, delivery, returns, payment, stock, and repeat orders.' },
  { title: 'Customer Support', desc: 'Automate repetitive questions and route complex issues to a human.' },
  { title: 'Promotions & Broadcasts', desc: 'Send approved campaigns, product launches, reminders, and announcements.' },
];

const PROCESS_STEPS = [
  { n: '01', title: 'Map the Customer Journey', desc: 'We map what happens when a customer messages, asks a question, requests a quote, or needs support.' },
  { n: '02', title: 'Define Automation Goals', desc: 'Lead capture, FAQs, qualification, bookings, support, follow-ups, or routing.' },
  { n: '03', title: 'Build the Chatfuel Flow', desc: 'Questions, buttons, replies, routing logic, and follow-up steps.' },
  { n: '04', title: 'Connect Lead Capture', desc: 'Google Sheets, CRM, email notifications, Zapier, API, Kommo, or Shopify.' },
  { n: '05', title: 'Test the Conversation', desc: 'Test on mobile so the flow is clear, fast, and easy to use.' },
  { n: '06', title: 'Launch', desc: 'Connect to website buttons, paid ads, social links, QR codes, and customer touch-points.' },
  { n: '07', title: 'Optimise', desc: 'Review conversations, drop-offs, lead quality, and follow-up performance.' },
];

const TIERS = [
  {
    id: 'diy',
    slug: 'DIY',
    name: 'DIY with Chatfuel',
    abbr: 'DIY',
    price: 'Start Direct',
    period: 'on Chatfuel',
    pill: 'Do it yourself',
    tagline: 'For businesses that want to set up WhatsApp automation themselves using Chatfuel.',
    features: [
      'Direct access to Chatfuel',
      'Build your own WhatsApp automation flows',
      'Chatfuel templates & broadcasts',
      'Live chat & AI features (where available)',
      'Own setup, testing and billing',
      'Manage your own optimisation',
    ],
    bestFor: 'Founders, marketers and internal teams comfortable setting up tools themselves.',
    ctaLabel: 'Start DIY on Chatfuel',
    ctaHref: 'https://chatfuel.com',
    external: true,
    accent: 'purple',
    featured: false,
  },
  {
    id: 'dwy',
    slug: 'DWY',
    name: 'DWY WhatsApp Enablement',
    abbr: 'DWY',
    price: 'From R4,850',
    period: 'per month',
    pill: 'Most popular',
    tagline: 'For businesses that want to build the automation themselves but need Rekisa to guide the setup, structure and optimisation.',
    features: [
      'WhatsApp automation strategy',
      'Customer journey mapping',
      'Chatfuel setup guidance',
      'Flow structure guidance',
      'Lead capture and qualification guidance',
      'FAQ automation guidance',
      'Monthly review session',
      'Improvement recommendations',
      'Training on managing the flow',
    ],
    bestFor: 'Teams that want to learn, own the system internally and reduce implementation cost.',
    ctaLabel: 'Start with Done With You',
    accent: 'coral',
    featured: true,
  },
  {
    id: 'dfy',
    slug: 'DFY',
    name: 'DFY WhatsApp Setup',
    abbr: 'DFY',
    price: 'From R8,500',
    period: 'once-off',
    pill: 'Done for you',
    tagline: 'For businesses that want Rekisa to set up a working WhatsApp automation flow for enquiries, lead capture, FAQs, qualification and handover.',
    features: [
      'WhatsApp automation planning',
      'Customer journey mapping',
      'Chatfuel flow setup',
      'Lead capture questions',
      'FAQ automation',
      'Basic qualification flow',
      'Human handoff path',
      'Basic testing',
      'Launch support',
    ],
    bestFor: 'Businesses that want a working automation built quickly without managing the technical setup.',
    ctaLabel: 'Start with Done For You',
    accent: 'teal',
    featured: false,
  },
];

const INCLUDED = [
  'WhatsApp automation planning',
  'Customer journey mapping',
  'Chatfuel flow setup',
  'Lead capture structure',
  'FAQ automation',
  'Qualification questions',
  'Human handoff logic',
  'Follow-up logic',
  'Testing',
  'Launch support',
  'Optimisation recommendations',
];

const EXCLUDED = [
  'Chatfuel subscription',
  'WhatsApp conversation charges',
  'Paid ads media budget',
  'Full website rebuild',
  'Product photography',
  'Graphic design',
  'Long-form copywriting',
  'CRM subscription fees',
  'Sales team management',
  'Custom API development (unless quoted)',
];

const FAQS = [
  { q: 'What is WhatsApp automation?', a: 'WhatsApp automation helps a business respond to customer messages, capture details, answer common questions, qualify leads, send follow-ups, and route conversations using automated flows, buttons, AI assistance, and human handoff.' },
  { q: 'Do customers still speak to a human?', a: 'Yes. Automation handles repetitive questions and first-level qualification so your team can focus on serious enquiries and sales conversations.' },
  { q: 'Can this work with paid ads?', a: 'Absolutely. We route leads from Google, Facebook, Instagram or LinkedIn straight into WhatsApp for an instant reply and qualification.' },
  { q: 'Can WhatsApp automation help with customer support?', a: 'Yes. We automate FAQs, order status checks, and route complex issues to the right team member with full context.' },
  { q: 'Can we send promotions on WhatsApp?', a: 'Yes \u2014 approved broadcasts, product launches, reminders, and announcements can be sent to segmented audiences.' },
  { q: 'Do we need Chatfuel?', a: 'Rekisa uses Chatfuel as its WhatsApp automation partner platform. Chatfuel subscription fees are paid separately by you.' },
  { q: 'Can this connect to Google Sheets or a CRM?', a: 'Yes. We connect to Google Sheets, CRMs, Zapier, Kommo, Shopify, email notifications, or via API.' },
  { q: 'Do you guarantee sales?', a: 'No one can guarantee sales. What we do guarantee is a working system that captures more leads, replies faster, qualifies better, and hands serious enquiries to your team.' },
];

const STATS = [
  { v: '32%', l: 'faster response times with auto-replies that never sleep' },
  { v: '28%', l: 'increase in qualified leads from paid ads going to WhatsApp' },
  { v: '21%', l: 'more bookings with reminders and smart follow-ups' },
];

export default function WhatsAppAutomation() {
  return (
    <>
      <SEO
        title="WhatsApp Automation South Africa | Chatbots & Lead Follow-Up"
        description="Automate WhatsApp sales, support, lead capture, follow-ups and customer communication. Rekisa sets up WhatsApp automation using Chatfuel for South African businesses."
        canonical="https://rekisa.co.za/services/whatsapp-automation"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          'name': 'WhatsApp Automation',
          'description': 'WhatsApp automation setup using Chatfuel for lead capture, FAQs, qualification, follow-up and human handoff.',
          'provider': { '@type': 'Organization', 'name': 'Rekisa' },
          'areaServed': ['South Africa', 'Africa'],
        }}
      />

      {/* HERO */}
      <section className="page-hero">
        <div className="container-wide page-hero__inner">
          <div className="breadcrumbs">
            <Link to="/">Home</Link> ‹› <Link to="/services">Services</Link> ‹› WhatsApp Automation
          </div>
          <div className="split" style={{ alignItems: 'center', marginTop: 16 }}>
            <Reveal>
              <div>
                <span className="eyebrow on-dark coral">
                  <MessageCircle size={14} /> Powered by Chatfuel · Built for SA Businesses
                </span>
                <h1>
                  Automate your WhatsApp sales<br/>and <span className="h-accent">enquiries.</span>
                </h1>
                <p>
                  We set up WhatsApp automation that replies faster, captures customer details,
                  answers common questions, follows up with leads, and hands serious enquiries to your team.
                </p>
                <div style={{ marginTop: 32, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                  <Link to="/audit?service=whatsapp-automation" className="btn btn--spark btn--lg btn__pulse" data-testid="whatsapp-hero-cta">
                    Request a Quote <ArrowRight size={18} />
                  </Link>
                  <Link to="/contact" className="btn btn--outline-light btn--lg">Talk to us</Link>
                </div>
                <div style={{ marginTop: 40, display: 'flex', gap: 24, flexWrap: 'wrap', fontFamily: 'var(--font-mono)', fontSize: '0.72rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: '#94A3B8' }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}><span style={{ width: 6, height: 6, borderRadius: 999, background: '#25D366' }} /> Instant replies</span>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}><span style={{ width: 6, height: 6, borderRadius: 999, background: '#7C3AED' }} /> Lead capture</span>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}><span style={{ width: 6, height: 6, borderRadius: 999, background: '#2DD4BF' }} /> Human handoff</span>
                </div>
              </div>
            </Reveal>
            <Reveal delay={2}>
              <div className="split__vis"><WhatsAppPhoneMockup /></div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PROBLEM + OUTCOME */}
      <section className="section">
        <div className="container">
          <div className="service-twocol">
            <Reveal>
              <div>
                <span className="eyebrow coral">The Real Problem</span>
                <h2 className="display-lg">Most businesses lose leads because they <span className="h-accent">reply too slowly</span>.</h2>
                <p style={{ fontSize: '1.1rem', color: 'var(--gray-600)', marginTop: 20 }}>
                  Customers expect fast answers. If your team misses messages, replies late, forgets to
                  follow up, or keeps answering the same questions manually, sales opportunities get lost.
                </p>
              </div>
            </Reveal>
            <Reveal delay={2}>
              <div>
                <span className="eyebrow">The Outcome</span>
                <h2 className="display-lg">A WhatsApp sales journey — <span className="h-accent-cool">not just a chatbot</span>.</h2>
                <p style={{ fontSize: '1.1rem', color: 'var(--gray-600)', marginTop: 20 }}>
                  Respond faster, capture useful information, answer common questions, and keep leads
                  moving until a human needs to step in. Every serious enquiry goes to the right person.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* WHAT WE AUTOMATE */}
      <section className="section section--tint">
        <div className="container-wide">
          <Reveal>
            <div style={{ maxWidth: 820, margin: '0 auto 56px', textAlign: 'center' }}>
              <span className="eyebrow coral">What we automate</span>
              <h2 className="display-lg">What we help you <span className="h-accent">automate</span>.</h2>
              <p style={{ fontSize: '1.1rem', color: 'var(--gray-600)', marginTop: 20, maxWidth: 720, marginLeft: 'auto', marginRight: 'auto' }}>
                Ten focused capabilities — from instant replies to reporting — working together
                as one WhatsApp operating system.
              </p>
            </div>
          </Reveal>
          <div className="wa-grid">
            {AUTOMATIONS.map((a, i) => (
              <Reveal delay={((i % 3) + 1)} key={a.title}>
                <div className="wa-card">
                  <div className="wa-card__num">{a.n}</div>
                  <div className="wa-card__icon"><a.icon size={20} /></div>
                  <h3 className="wa-card__title">{a.title}</h3>
                  <p className="wa-card__desc">{a.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="section section--dark">
        <div className="container">
          <div className="wa-stats">
            {STATS.map((s, i) => (
              <Reveal delay={i + 1} key={s.v}>
                <div className="wa-stat">
                  <div className="wa-stat__value">{s.v}</div>
                  <div className="wa-stat__label">{s.l}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="section">
        <div className="container-wide">
          <Reveal>
            <div style={{ maxWidth: 820, margin: '0 auto 56px', textAlign: 'center' }}>
              <span className="eyebrow">Use cases</span>
              <h2 className="display-lg">Popular WhatsApp automation <span className="h-accent-cool">use cases</span>.</h2>
            </div>
          </Reveal>
          <div className="wa-usecases">
            {USE_CASES.map((u, i) => (
              <Reveal delay={((i % 3) + 1)} key={u.title}>
                <div className="wa-usecase">
                  <h3>{u.title}</h3>
                  <p>{u.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section section--tint">
        <div className="container">
          <Reveal>
            <div style={{ maxWidth: 820, marginBottom: 56 }}>
              <span className="eyebrow coral">Our process</span>
              <h2 className="display-lg">Our WhatsApp automation <span className="h-accent">process</span>.</h2>
            </div>
          </Reveal>
          <div className="wa-process">
            {PROCESS_STEPS.map((step, i) => (
              <Reveal delay={((i % 3) + 1)} key={step.title}>
                <div className="wa-step">
                  <div className="wa-step__num">{step.n}</div>
                  <h3 className="wa-step__title">{step.title}</h3>
                  <p className="wa-step__desc">{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="section">
        <div className="container">
          <Reveal>
            <div style={{ maxWidth: 900, margin: '0 auto 48px', textAlign: 'center' }}>
              <span className="eyebrow">Pricing Plans</span>
              <h2 className="display-lg">Choose how you want to set up <span className="h-accent">WhatsApp automation</span>.</h2>
              <p style={{ fontSize: '1.1rem', color: 'var(--gray-600)', marginTop: 20, maxWidth: 720, marginLeft: 'auto', marginRight: 'auto' }}>
                Start with the option that fits your budget, internal capacity, and speed to market.
                You can set up Chatfuel yourself, get guided support from Rekisa, or let Rekisa build
                the WhatsApp automation for you.
              </p>
            </div>
          </Reveal>

          <div className="pricing-tiers pricing-tiers--three">
            {TIERS.map((t, i) => (
              <Reveal delay={i + 1} key={t.id}>
                <div className={`pricing-card${t.featured ? ' pricing-card--featured' : ''} pricing-card--${t.accent}`}>
                  {t.featured && (
                    <div className="pricing-card__badge">
                      <Star size={12} fill="currentColor" strokeWidth={0} /> {t.pill}
                    </div>
                  )}
                  {!t.featured && <div className="pricing-card__pill">{t.pill}</div>}

                  <div className="pricing-card__head">
                    <div className="pricing-card__abbr">{t.abbr}</div>
                    <h3 className="pricing-card__name">{t.name}</h3>
                    <p className="pricing-card__tag">{t.tagline}</p>
                  </div>

                  <div className="pricing-card__price">
                    <span className="pricing-card__amount">{t.price}</span>
                    <span className="pricing-card__period">{t.period}</span>
                  </div>

                  <div className="pricing-card__divider" />

                  <div className="pricing-card__included">What&rsquo;s included</div>
                  <ul className="pricing-card__features">
                    {t.features.map((f) => (
                      <li key={f}>
                        <span className="pricing-card__check"><Check size={12} strokeWidth={3} /></span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  {t.external ? (
                    <a
                      href={t.ctaHref}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="btn btn--primary pricing-card__cta"
                      data-testid={`whatsapp-pricing-cta-${t.id}`}
                    >
                      {t.ctaLabel} <ArrowRight size={16} />
                    </a>
                  ) : (
                    <Link
                      to={`/audit?plan=${t.slug}&service=whatsapp-automation`}
                      className={t.featured ? 'btn btn--spark pricing-card__cta' : 'btn btn--primary pricing-card__cta'}
                      data-testid={`whatsapp-pricing-cta-${t.id}`}
                    >
                      {t.ctaLabel} <ArrowRight size={16} />
                    </Link>
                  )}

                  <div className="pricing-card__note">
                    <strong>Best for:</strong> {t.bestFor}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={3}>
            <div style={{ marginTop: 56, padding: 24, borderRadius: 16, background: 'var(--gray-50)', border: '1px solid var(--gray-200)', maxWidth: 900, marginLeft: 'auto', marginRight: 'auto', fontSize: '0.925rem', color: 'var(--gray-700)', lineHeight: 1.7 }}>
              <strong style={{ color: 'var(--navy-900)' }}>Important:</strong> Chatfuel subscription fees
              and WhatsApp-related usage costs are paid separately by the client. Rekisa&rsquo;s fees cover
              strategy, setup, enablement, management or optimisation depending on the selected plan.
            </div>
          </Reveal>
        </div>
      </section>

      {/* SCOPE — INCLUDED / EXCLUDED */}
      <section className="section section--tint">
        <div className="container">
          <Reveal>
            <div style={{ maxWidth: 820, marginBottom: 48 }}>
              <span className="eyebrow coral">Clear scope</span>
              <h2 className="display-lg">What&rsquo;s <span className="h-accent">in</span> and what&rsquo;s <span className="h-accent-cool">not</span>.</h2>
            </div>
          </Reveal>
          <div className="wa-scope">
            <Reveal>
              <div className="wa-scope__col">
                <div className="wa-scope__title wa-scope__title--in">Included</div>
                <ul className="check-list">
                  {INCLUDED.map((i) => (
                    <li key={i}><span className="check"><Check size={14} /></span>{i}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={2}>
              <div className="wa-scope__col wa-scope__col--out">
                <div className="wa-scope__title wa-scope__title--out">Excluded</div>
                <ul className="wa-exclude-list">
                  {EXCLUDED.map((i) => (
                    <li key={i}><span className="wa-x">×</span>{i}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* WHY REKISA */}
      <section className="section">
        <div className="container">
          <div className="service-twocol">
            <Reveal>
              <div>
                <span className="eyebrow">Why Rekisa</span>
                <h2 className="display-lg">Not just a chatbot. A WhatsApp <span className="h-accent">sales journey</span>.</h2>
                <p style={{ fontSize: '1.1rem', color: 'var(--gray-600)', marginTop: 20 }}>
                  Faster replies, better information, qualified leads, automated follow-up, and serious
                  enquiries handed to the right person.
                </p>
              </div>
            </Reveal>
            <Reveal delay={2}>
              <ul className="check-list">
                {[
                  'Experience with eCommerce, paid ads, CRM, automation, and customer journeys',
                  'Chatfuel partner-led implementation approach',
                  'Practical setup for SMEs',
                  'Connects WhatsApp automation with paid ads and landing pages',
                  'Focus on lead capture, response speed, follow-up, and sales handoff',
                ].map((c) => (
                  <li key={c}><span className="check"><Check size={14} /></span>{c}</li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section--tint">
        <div className="container">
          <Reveal>
            <div style={{ maxWidth: 820, marginBottom: 48, textAlign: 'left' }}>
              <span className="eyebrow coral">Frequently asked</span>
              <h2 className="display-lg">Questions, <span className="h-accent">answered</span>.</h2>
            </div>
          </Reveal>
          <div className="wa-faq">
            {FAQS.map((f, i) => (
              <Reveal delay={((i % 2) + 1)} key={f.q}>
                <details className="wa-faq__item">
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Big CTA */}
      <section className="section">
        <div className="container">
          <div className="split-cta">
            <div>
              <span className="eyebrow on-dark">Next step</span>
              <h2 className="display-lg" style={{ color: '#fff' }}>Ready to automate your <span className="h-accent">WhatsApp enquiries</span>?</h2>
              <p style={{ color: '#CBD5E1', fontSize: '1.1rem', marginTop: 16 }}>
                Tell us what you want WhatsApp to help with — lead capture, FAQs, bookings, support,
                follow-up, paid ads, or customer campaigns.
              </p>
              <div style={{ marginTop: 32 }}>
                <Link to="/audit?service=whatsapp-automation" className="btn btn--spark btn--lg" data-testid="whatsapp-footer-cta">
                  Request a Quote <ArrowRight size={18} />
                </Link>
              </div>
            </div>
            <div style={{ display: 'grid', gap: 12, color: '#fff' }}>
              <div style={{ padding: 24, background: 'rgba(255,255,255,0.06)', borderRadius: 16, border: '1px solid rgba(255,255,255,0.08)' }}>
                <div style={{ color: 'var(--teal-400)', fontSize: '0.7rem', letterSpacing: '0.16em', fontWeight: 500, fontFamily: 'var(--font-mono)' }}>WHAT YOU GET</div>
                <ul style={{ margin: '14px 0 0', padding: '0 0 0 20px', color: '#CBD5E1', lineHeight: 1.9 }}>
                  <li>A tailored quote for your business</li>
                  <li>Recommended plan (DIY / DWY / DFY)</li>
                  <li>A working flow structure proposal</li>
                  <li>Next steps within 48 hours</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* -------------------- Bespoke WhatsApp phone mockup -------------------- */
function WhatsAppPhoneMockup() {
  return (
    <svg viewBox="0 0 360 440" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto', display: 'block', maxWidth: 460, margin: '0 auto' }} aria-hidden="true">
      <defs>
        <linearGradient id="wa-phone-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0A0E27" />
          <stop offset="100%" stopColor="#131A3F" />
        </linearGradient>
        <linearGradient id="wa-header" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#128C7E" />
          <stop offset="100%" stopColor="#075E54" />
        </linearGradient>
        <linearGradient id="wa-fab-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#25D366" />
          <stop offset="100%" stopColor="#128C7E" />
        </linearGradient>
        <filter id="wa-shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="16" stdDeviation="18" floodColor="#25D366" floodOpacity="0.25" />
        </filter>
      </defs>

      {/* Phone frame */}
      <g filter="url(#wa-shadow)">
        <rect x="30" y="16" width="300" height="408" rx="36" fill="url(#wa-phone-bg)" stroke="rgba(255,255,255,0.08)" />
        <rect x="42" y="28" width="276" height="384" rx="28" fill="#0B141A" />
      </g>

      {/* Header */}
      <rect x="42" y="28" width="276" height="52" rx="28" fill="url(#wa-header)" />
      <rect x="42" y="52" width="276" height="28" fill="url(#wa-header)" />
      <circle cx="70" cy="54" r="14" fill="#25D366" />
      <text x="70" y="58" textAnchor="middle" fill="#fff" fontFamily="'Product Sans','Poppins',sans-serif" fontWeight="700" fontSize="11">R</text>
      <text x="94" y="52" fill="#fff" fontFamily="'Product Sans','Poppins',sans-serif" fontWeight="700" fontSize="13">Rekisa</text>
      <text x="94" y="66" fill="rgba(255,255,255,0.75)" fontFamily="'JetBrains Mono', monospace" fontSize="8" letterSpacing="1">online · replies instantly</text>

      {/* Timestamp */}
      <text x="180" y="98" textAnchor="middle" fill="#64748B" fontFamily="'JetBrains Mono', monospace" fontSize="8" letterSpacing="1.5">TODAY · 9:41</text>

      {/* Incoming bubble 1 */}
      <g>
        <rect x="58" y="108" width="150" height="30" rx="14" fill="#1F2C34" />
        <text x="70" y="127" fill="#E9EDEF" fontFamily="'Product Sans','Poppins',sans-serif" fontSize="10">Hi, I need a quote.</text>
      </g>

      {/* Outgoing bubble 1 */}
      <g>
        <rect x="120" y="146" width="182" height="30" rx="14" fill="#005C4B" />
        <text x="132" y="165" fill="#E9EDEF" fontFamily="'Product Sans','Poppins',sans-serif" fontSize="10">Hi! What service interests you?</text>
      </g>

      {/* Quick reply chips */}
      <g fontFamily="'Product Sans','Poppins',sans-serif" fontSize="9.5" fontWeight="600">
        <g>
          <rect x="120" y="184" width="86" height="24" rx="12" fill="rgba(37,211,102,0.12)" stroke="#25D366" />
          <text x="163" y="200" textAnchor="middle" fill="#25D366">Paid Ads</text>
        </g>
        <g>
          <rect x="212" y="184" width="86" height="24" rx="12" fill="rgba(37,211,102,0.12)" stroke="#25D366" />
          <text x="255" y="200" textAnchor="middle" fill="#25D366">Website</text>
        </g>
        <g>
          <rect x="120" y="214" width="86" height="24" rx="12" fill="rgba(37,211,102,0.12)" stroke="#25D366" />
          <text x="163" y="230" textAnchor="middle" fill="#25D366">Store</text>
        </g>
        <g>
          <rect x="212" y="214" width="86" height="24" rx="12" fill="rgba(37,211,102,0.20)" stroke="#25D366" />
          <text x="255" y="230" textAnchor="middle" fill="#25D366">WhatsApp</text>
        </g>
      </g>

      {/* Incoming bubble - selection */}
      <g>
        <rect x="58" y="248" width="150" height="30" rx="14" fill="#1F2C34" />
        <text x="70" y="267" fill="#E9EDEF" fontFamily="'Product Sans','Poppins',sans-serif" fontSize="10">WhatsApp automation.</text>
      </g>

      {/* Outgoing - qualification */}
      <g>
        <rect x="90" y="286" width="212" height="30" rx="14" fill="#005C4B" />
        <text x="102" y="305" fill="#E9EDEF" fontFamily="'Product Sans','Poppins',sans-serif" fontSize="10">Great. What is your budget range?</text>
      </g>

      {/* Budget chips */}
      <g fontFamily="'Product Sans','Poppins',sans-serif" fontSize="9" fontWeight="600">
        <rect x="90" y="324" width="100" height="22" rx="11" fill="rgba(37,211,102,0.12)" stroke="#25D366" />
        <text x="140" y="339" textAnchor="middle" fill="#25D366">R5k – R10k</text>
        <rect x="196" y="324" width="106" height="22" rx="11" fill="rgba(37,211,102,0.20)" stroke="#25D366" />
        <text x="249" y="339" textAnchor="middle" fill="#25D366">R10k – R25k</text>
      </g>

      {/* Human handoff notice */}
      <g>
        <rect x="58" y="356" width="244" height="36" rx="10" fill="rgba(37,211,102,0.08)" stroke="rgba(37,211,102,0.4)" strokeDasharray="3 3" />
        <circle cx="72" cy="374" r="5" fill="#25D366" />
        <text x="86" y="372" fill="#25D366" fontFamily="'JetBrains Mono', monospace" fontSize="8" letterSpacing="1">QUALIFIED · ASSIGNED TO SALES</text>
        <text x="86" y="386" fill="rgba(255,255,255,0.6)" fontFamily="'Product Sans','Poppins',sans-serif" fontSize="9">A Rekisa consultant will follow up</text>
      </g>

      {/* Bottom compose bar */}
      <rect x="42" y="400" width="276" height="12" rx="6" fill="#0B141A" />
    </svg>
  );
}
