import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, MapPin, Target, ShoppingBag, Cloud, ChevronRight, Zap } from 'lucide-react';
import SEO from '../components/SEO';
import WebGLHero from '../components/WebGLHero';
import DOSFlow from '../components/DOSFlow';
import { Reveal } from '../components/Reveal';
import GrowthMockup from '../components/mockups/GrowthMockup';
import CommerceMockup from '../components/mockups/CommerceMockup';
import CloudMockup from '../components/mockups/CloudMockup';
import AuditMockup from '../components/mockups/AuditMockup';
import WorkshopMockup from '../components/mockups/WorkshopMockup';

export default function Home() {
  return (
    <>
      <SEO
        title="Build a stronger digital operating system for growth"
        description="Rekisa helps businesses sell better, operate better and scale better through growth marketing, eCommerce, AWS cloud enablement and practical workshops."
        canonical="https://rekisa.co.za/"
        jsonLd={{ '@context': 'https://schema.org', '@type': 'WebSite', 'name': 'Rekisa', 'url': 'https://rekisa.co.za' }}
      />

      {/* ============ HERO ============ */}
      <section className="hero-wgl">
        <WebGLHero />
        <div className="hero-wgl__grid" />
        <div className="hero-wgl__vignette" />
        <div className="container hero-wgl__inner animate-in">
          <div className="hero-wgl__badge">
            <span className="hero-wgl__badge-dot"><Sparkles size={10} color="#fff" /></span>
            <span>Digital enablement partner · South Africa</span>
          </div>
          <h1>
            Build a <span className="h-accent">stronger</span> digital operating system for growth.
          </h1>
          <p className="hero-wgl__lede">
            Rekisa helps you sell better, operate better, and scale better. Growth marketing, eCommerce, AWS cloud enablement and practical workshops — in one connected system.
          </p>
          <div className="hero-wgl__cta">
            <Link to="/audit" className="btn btn--spark btn--lg btn__pulse" data-testid="hero-cta-audit">
              Book a System Audit <ArrowRight size={18} />
            </Link>
            <Link to="/services" className="btn btn--outline-light btn--lg" data-testid="hero-cta-services">
              Explore services
            </Link>
          </div>
          <div className="hero-wgl__trust">
            <MapPin size={14} /> Sandton · Johannesburg
          </div>
        </div>
      </section>

      {/* ============ PROBLEM (huge type moment) ============ */}
      <section className="section">
        <div className="container">
          <Reveal>
            <div style={{ maxWidth: 1000 }}>
              <span className="eyebrow coral">The Problem</span>
              <h2 className="display-lg">
                Growth slows down when your <span className="h-accent">systems</span> don&rsquo;t work together.
              </h2>
            </div>
          </Reveal>
          <Reveal delay={1}>
            <div style={{ maxWidth: 720, marginTop: 32 }}>
              <p style={{ fontSize: 'clamp(1.1rem, 1.4vw, 1.35rem)', color: 'var(--gray-600)', lineHeight: 1.55 }}>
                Most businesses use separate tools for marketing, sales, ecommerce, customer service, operations and reporting. The result: manual work, missed opportunities, weak follow-up and no clear view of what is actually working.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ DOS FRAMEWORK ============ */}
      <section className="section section--dark">
        <div className="container-wide">
          <Reveal>
            <div style={{ maxWidth: 820 }}>
              <span className="eyebrow on-dark">The Framework</span>
              <h2 className="display-lg" style={{ color: '#fff' }}>
                The <span className="h-accent">five stages</span> your business needs to grow.
              </h2>
              <p style={{ color: '#CBD5E1', maxWidth: 640, marginTop: 24, fontSize: 'clamp(1rem, 1.2vw, 1.15rem)' }}>
                Attract, Sell, Serve, Operate, Scale. Each stage maps to real systems, tools and workflows — not slides.
              </p>
            </div>
          </Reveal>
          <Reveal delay={2}>
            <DOSFlow />
          </Reveal>
        </div>
      </section>

      {/* ============ THREE WAYS ============ */}
      <section className="section">
        <div className="container">
          <Reveal>
            <div style={{ textAlign: 'center', maxWidth: 820, margin: '0 auto 64px' }}>
              <span className="eyebrow">Three ways to work with us</span>
              <h2 className="display-lg">
                Choose the pathway that fits <span className="h-accent-lime">where you are</span> right now.
              </h2>
            </div>
          </Reveal>
          <div className="pathway-cards">
            <Reveal delay={1}>
              <div className="pathway-card is-coral">
                <span className="badge">Done-for-you</span>
                <h3>Enablement Services</h3>
                <p>We design, build and roll out the system — across growth marketing, eCommerce or AWS cloud. You end up with a working operating system, not another deck.</p>
                <Link to="/services" className="btn btn--outline">Explore services <ArrowRight size={16} /></Link>
              </div>
            </Reveal>
            <Reveal delay={2}>
              <div className="pathway-card is-teal">
                <span className="badge">Done-with-you</span>
                <h3>Practical Workshops</h3>
                <p>Two-to-three-day working sessions on your real challenges. Your team leaves with a plan they can actually execute on Monday morning.</p>
                <Link to="/workshops" className="btn btn--outline">Explore workshops <ArrowRight size={16} /></Link>
              </div>
            </Reveal>
            <Reveal delay={3}>
              <div className="pathway-card is-lime">
                <span className="badge">Self-serve</span>
                <h3>Digital Operating System Audit</h3>
                <p>A structured questionnaire that helps you see where your growth, commerce and operations system is strong — and where it&rsquo;s leaking value.</p>
                <Link to="/audit" className="btn btn--outline">Start the audit <ArrowRight size={16} /></Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ GROWTH SERVICE ============ */}
      <section className="section section--tint">
        <div className="container-wide">
          <div className="split">
            <Reveal>
              <div>
                <span className="eyebrow"><Target size={14} /> Growth Marketing Enablement</span>
                <h2 className="display-lg">A more <span className="h-accent">predictable</span> growth system.</h2>
                <p style={{ fontSize: '1.125rem', color: 'var(--gray-600)', marginTop: 20 }}>
                  Build the system behind your lead generation, outbound, paid acquisition, conversion and follow-up. Stop running disconnected campaigns.
                </p>
                <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginTop: 32 }}>
                  {['ICP + ABM', 'Outbound sequences', 'Paid + retargeting', 'Landing pages', 'CAC visibility', 'CRM workflows'].map((t) => (
                    <span key={t} className="tag" style={{ background: '#fff', border: '1px solid var(--gray-200)', color: 'var(--navy-800)', textTransform: 'none', fontSize: '0.85rem', fontFamily: 'Inter', letterSpacing: 0, padding: '8px 14px' }}>{t}</span>
                  ))}
                </div>
                <div style={{ marginTop: 40 }}>
                  <Link to="/services/growth-marketing-enablement" className="btn btn--primary">Explore Growth Marketing <ArrowRight size={16} /></Link>
                </div>
              </div>
            </Reveal>
            <Reveal delay={2}>
              <div className="split__vis"><GrowthMockup /></div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ COMMERCE SERVICE (flipped) ============ */}
      <section className="section">
        <div className="container-wide">
          <div className="split split--flip">
            <Reveal>
              <div className="split__vis"><CommerceMockup /></div>
            </Reveal>
            <Reveal delay={2}>
              <div>
                <span className="eyebrow coral"><ShoppingBag size={14} /> eCommerce Enablement</span>
                <h2 className="display-lg">Storefront, marketplaces and <span className="h-accent">journeys</span> — connected.</h2>
                <p style={{ fontSize: '1.125rem', color: 'var(--gray-600)', marginTop: 20 }}>
                  Discovery, sales, service and follow-up shouldn&rsquo;t live in separate tools. We connect your online store, marketplaces and customer journeys into one commerce system.
                </p>
                <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginTop: 32 }}>
                  {['Store + payments', 'Marketplace-ready', 'Customer journeys', 'Conversion optimisation', 'Lead capture'].map((t) => (
                    <span key={t} className="tag" style={{ background: '#fff', border: '1px solid var(--gray-200)', color: 'var(--navy-800)', textTransform: 'none', fontSize: '0.85rem', fontFamily: 'Inter', letterSpacing: 0, padding: '8px 14px' }}>{t}</span>
                  ))}
                </div>
                <div style={{ marginTop: 40 }}>
                  <Link to="/services/digital-commerce-enablement" className="btn btn--primary">Explore eCommerce <ArrowRight size={16} /></Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ CLOUD SERVICE ============ */}
      <section className="section section--dark">
        <div className="container-wide">
          <div className="split">
            <Reveal>
              <div>
                <span className="eyebrow on-dark"><Cloud size={14} /> AWS Cloud Enablement</span>
                <h2 className="display-lg" style={{ color: '#fff' }}>The <span className="h-accent-cool">foundation</span> behind everything that scales.</h2>
                <p style={{ fontSize: '1.125rem', color: '#CBD5E1', marginTop: 20 }}>
                  Cloud strategy, migration, application hosting, Amazon Connect for customer contact, cost and security optimisation — built for how you actually operate.
                </p>
                <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 32 }}>
                  {['Cloud readiness', 'AWS migration', 'Amazon Connect', 'Cost optimisation', 'AI-ready infra'].map((t) => (
                    <span key={t} className="tag tag--dark">{t}</span>
                  ))}
                </div>
                <div style={{ marginTop: 40 }}>
                  <Link to="/services/aws-cloud-enablement" className="btn btn--gradient">Explore AWS Cloud <ArrowRight size={16} /></Link>
                </div>
              </div>
            </Reveal>
            <Reveal delay={2}>
              <div className="split__vis"><CloudMockup /></div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ WORKSHOPS ============ */}
      <section className="section">
        <div className="container-wide">
          <div className="split split--flip">
            <Reveal>
              <div className="split__vis"><WorkshopMockup /></div>
            </Reveal>
            <Reveal delay={2}>
              <div>
                <span className="eyebrow"><Zap size={14} /> Workshops</span>
                <h2 className="display-lg">Strategy turned into <span className="h-accent">action</span> in 2–3 days.</h2>
                <p style={{ fontSize: '1.125rem', color: 'var(--gray-600)', marginTop: 20 }}>
                  Intensive working sessions with your team. Real challenges. Real outputs. No slides for slides&rsquo; sake.
                </p>
                <div style={{ display: 'grid', gap: 12, marginTop: 32 }}>
                  {[
                    { name: 'Growth Marketing', desc: 'Targeting, paid, outbound, measurement', to: '/workshops/growth-marketing' },
                    { name: 'eCommerce Accelerator', desc: 'Products, pricing, storefront, marketplaces', to: '/workshops/ecommerce-accelerator' },
                    { name: 'Digital Business Model', desc: 'Value prop, offer, revenue logic', to: '/workshops/digital-business-model' },
                  ].map((w) => (
                    <Link key={w.name} to={w.to} className="card" style={{ padding: '18px 22px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', textDecoration: 'none' }}>
                      <div>
                        <div style={{ fontWeight: 700, color: 'var(--navy-900)' }}>{w.name}</div>
                        <div style={{ fontSize: '0.9rem', color: 'var(--gray-500)' }}>{w.desc}</div>
                      </div>
                      <ChevronRight size={18} style={{ color: 'var(--purple-500)' }} />
                    </Link>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ STATS ============ */}
      <section className="section">
        <div className="container">
          <Reveal>
            <div style={{ maxWidth: 720 }}>
              <span className="eyebrow">Why systems, not software</span>
              <h2 className="display-lg">Small changes to your system, <span className="h-accent">compound</span>.</h2>
            </div>
          </Reveal>
          <Reveal delay={2}>
            <div className="stat-grid" style={{ marginTop: 48 }}>
              <div className="stat">
                <div className="stat__num">5×</div>
                <div className="stat__label">faster follow-up when leads land in one CRM instead of five inboxes.</div>
              </div>
              <div className="stat">
                <div className="stat__num">30%</div>
                <div className="stat__label">of ecommerce revenue that WhatsApp workflows recover after cart abandonment.</div>
              </div>
              <div className="stat">
                <div className="stat__num">40%</div>
                <div className="stat__label">infrastructure cost reduction we&rsquo;ve seen after cloud right-sizing.</div>
              </div>
              <div className="stat">
                <div className="stat__num">100%</div>
                <div className="stat__label">of engagements start with a Digital Operating System Audit — no exceptions.</div>
              </div>
            </div>
            <p style={{ fontSize: '0.8rem', color: 'var(--gray-500)', marginTop: 24, fontFamily: 'var(--font-mono)' }}>
              Ranges informed by industry benchmarks and Rekisa engagements. Individual outcomes vary.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ============ AUDIT CTA (with mockup) ============ */}
      <section className="section section--dark">
        <div className="container-wide">
          <div className="split">
            <Reveal>
              <div>
                <span className="eyebrow on-dark">Where to start</span>
                <h2 className="display-lg" style={{ color: '#fff' }}>
                  Not sure where the biggest <span className="h-accent">gaps</span> sit?
                </h2>
                <p style={{ color: '#CBD5E1', fontSize: '1.15rem', marginTop: 20 }}>
                  The Digital Operating System Audit gives you a clear, prioritised view of what to fix next — across attract, sell, serve, operate and scale.
                </p>
                <div style={{ marginTop: 40, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                  <Link to="/audit" className="btn btn--spark btn--lg">Book Your Audit <ArrowRight size={18} /></Link>
                  <Link to="/services" className="btn btn--outline-light">Or explore services</Link>
                </div>
              </div>
            </Reveal>
            <Reveal delay={2}>
              <div className="split__vis"><AuditMockup /></div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ RESOURCES ============ */}
      <section className="section">
        <div className="container">
          <Reveal>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48, flexWrap: 'wrap', gap: 20 }}>
              <div style={{ maxWidth: 720 }}>
                <span className="eyebrow">Resources</span>
                <h2 className="display-lg">Practical insights, no <span className="h-accent">fluff</span>.</h2>
              </div>
              <Link to="/resources" className="btn btn--outline">All resources <ArrowRight size={16} /></Link>
            </div>
          </Reveal>
          <div className="grid grid--3">
            {[
              { tag: 'Strategy', title: 'Strategic Planning Tools & Models: A Practical Guide', image: 'https://images.unsplash.com/photo-1739298061766-e2751d92e9db?w=800&q=80', to: '/resources/strategic-planning-tools-and-models' },
              { tag: 'B2B Sales', title: 'Modern Sales Tactics & Strategies for Growth', image: 'https://images.unsplash.com/photo-1758873269317-51888e824b28?w=800&q=80', to: '/resources/modern-b2b-sales-tactics-and-strategies' },
              { tag: 'eCommerce', title: '10 Actionable Ways to Increase Your Ecommerce Revenue', image: 'https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?w=800&q=80', to: '/resources/actionable-ways-increase-ecommerce-revenue' },
            ].map((p, i) => (
              <Reveal delay={i + 1} key={p.to}>
                <Link to={p.to} className="card" style={{ padding: 0, overflow: 'hidden', display: 'block', textDecoration: 'none' }}>
                  <div style={{ aspectRatio: '16/9', overflow: 'hidden' }}>
                    <img src={p.image} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div style={{ padding: 28 }}>
                    <span className="tag">{p.tag}</span>
                    <h3 style={{ margin: '14px 0 12px', fontSize: '1.35rem' }}>{p.title}</h3>
                    <span style={{ color: 'var(--purple-500)', fontWeight: 600, fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: 4 }}>Read article <ArrowRight size={14} /></span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FINAL BIG STATEMENT ============ */}
      <section className="section section--dark">
        <div className="container">
          <Reveal>
            <div style={{ textAlign: 'center', maxWidth: 1100, margin: '0 auto' }}>
              <span className="eyebrow on-dark">Ready when you are</span>
              <h2 className="display-xl" style={{ color: '#fff' }}>
                Sell better. <br />
                <span className="h-accent">Operate</span> better. <br />
                <span className="h-accent-cool">Scale</span> better.
              </h2>
              <div style={{ marginTop: 56, display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link to="/audit" className="btn btn--spark btn--lg btn__pulse">Book a System Audit <ArrowRight size={18} /></Link>
                <Link to="/contact" className="btn btn--outline-light btn--lg">Talk to us</Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
