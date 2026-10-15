import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import SEO from '../components/SEO';
import { Reveal } from '../components/Reveal';
import PricingTiers from '../components/PricingTiers';
import GrowthModules from '../components/GrowthModules';
import CommerceServiceCarousel from '../components/CommerceServiceCarousel';
import { getServiceBySlug } from '../data/services';

function ServiceTemplate({ slug, description, seoTitle, Mockup, accent = 'purple', showPricing = false, showModules = false, showCarousel = false }) {
  const s = getServiceBySlug(slug);
  if (!s) return null;

  const heroAccent = accent === 'coral' ? 'h-accent' : accent === 'lime' ? 'h-accent-lime' : 'h-accent-cool';
  const eyebrowClass = accent === 'coral' ? 'coral' : accent === 'lime' ? '' : '';

  return (
    <>
      <SEO
        title={seoTitle}
        description={description}
        canonical={`https://rekisa.co.za/services/${slug}`}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          'name': s.name,
          'description': description,
          'provider': { '@type': 'Organization', 'name': 'Rekisa' },
          'areaServed': ['South Africa', 'Africa'],
        }}
      />

      {/* HERO with mockup */}
      <section className="page-hero">
        <div className="container-wide page-hero__inner">
          <div className="breadcrumbs"><Link to="/">Home</Link> ‹› <Link to="/services">Services</Link> ‹› {s.name}</div>
          <div className="split" style={{ alignItems: 'center', marginTop: 16 }}>
            <Reveal>
              <div>
                <span className={`eyebrow on-dark ${eyebrowClass}`}>{s.name}</span>
                <h1>{s.tagline.split(' ').slice(0, -2).join(' ')} <span className={heroAccent}>{s.tagline.split(' ').slice(-2).join(' ')}</span></h1>
                <p>{description}</p>
                <div style={{ marginTop: 32, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                  <Link to={s.ctaUrl} className="btn btn--spark btn--lg btn__pulse">{s.cta} <ArrowRight size={18} /></Link>
                  <Link to="/contact" className="btn btn--outline-light btn--lg">Talk to us</Link>
                </div>
              </div>
            </Reveal>
            {Mockup && (
              <Reveal delay={2}>
                <div className="split__vis"><Mockup /></div>
              </Reveal>
            )}
          </div>
        </div>
      </section>

      {/* Problem + outcome side by side */}
      <section className="section">
        <div className="container">
          <div className="service-twocol">
            <Reveal>
              <div>
                <span className="eyebrow coral">The Problem</span>
                <h2 className="display-lg">Fragmented systems <span className="h-accent">stall growth</span>.</h2>
                <p style={{ fontSize: '1.1rem', color: 'var(--gray-600)', marginTop: 20 }}>{s.problem}</p>
                {s.note && (
                  <div style={{ background: 'var(--gray-50)', border: '1px solid var(--gray-200)', padding: 22, borderRadius: 14, marginTop: 24, fontSize: '0.925rem', color: 'var(--gray-700)' }}>
                    <strong style={{ color: 'var(--navy-900)' }}>A note on how we use WhatsApp:</strong> {s.note}
                  </div>
                )}
              </div>
            </Reveal>
            <Reveal delay={2}>
              <div>
                <span className="eyebrow">The Outcome</span>
                <h2 className="display-lg">A working system — <span className="h-accent-cool">not a slide deck</span>.</h2>
                <p style={{ fontSize: '1.1rem', color: 'var(--gray-600)', marginTop: 20 }}>{s.outcome}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Modules (Growth Marketing only) */}
      {showModules && (
        <section className="section">
          <div className="container-wide">
            <Reveal>
              <div style={{ maxWidth: 820, margin: '0 auto 56px', textAlign: 'center' }}>
                <span className="eyebrow coral">The Complete System</span>
                <h2 className="display-lg">Complete <span className="h-accent">Growth Marketing</span> System</h2>
                <p style={{ fontSize: '1.1rem', color: 'var(--gray-600)', marginTop: 20, maxWidth: 720, marginLeft: 'auto', marginRight: 'auto' }}>
                  Six comprehensive modules covering every aspect of growth marketing — from strategy to execution to optimisation.
                </p>
              </div>
            </Reveal>
            <GrowthModules />
          </div>
        </section>
      )}

      {/* Solutions carousel (eCommerce only) */}
      {showCarousel && (
        <section className="section">
          <div className="container-wide">
            <Reveal>
              <div style={{ maxWidth: 820, margin: '0 auto 48px', textAlign: 'center' }}>
                <span className="eyebrow coral">Our Solutions</span>
                <h2 className="display-lg">Every part of a <span className="h-accent">commerce system</span>, connected.</h2>
                <p style={{ fontSize: '1.1rem', color: 'var(--gray-600)', marginTop: 20, maxWidth: 720, marginLeft: 'auto', marginRight: 'auto' }}>
                  Nine focused solutions — from strategy to service workflows — working together as one operating system for your store.
                </p>
              </div>
            </Reveal>
            <CommerceServiceCarousel />
          </div>
        </section>
      )}

      {/* Components / packages */}
      {!showCarousel && (
      <section className={`section ${showModules ? 'section--tint' : 'section--tint'}`}>
        <div className="container">
          {!showCarousel && (
            <>
              <Reveal>
            <div style={{ maxWidth: 900, marginBottom: 48, textAlign: showPricing ? 'center' : 'left', marginLeft: showPricing ? 'auto' : 0, marginRight: showPricing ? 'auto' : 0 }}>
              <span className="eyebrow">{showPricing ? 'Packages & Pricing' : 'Core Components'}</span>
              <h2 className="display-lg">
                {showPricing ? (
                  <>What&rsquo;s inside a <span className="h-accent">{s.name}</span> engagement.</>
                ) : (
                  <>What&rsquo;s inside a <span className="h-accent">{s.name}</span> engagement.</>
                )}
              </h2>
              {showPricing && (
                <p style={{ fontSize: '1.1rem', color: 'var(--gray-600)', marginTop: 20, maxWidth: 720, marginLeft: 'auto', marginRight: 'auto' }}>
                  Choose the level of support that fits your team. Every engagement starts with a Digital Operating System Audit so we can match the right level to your business.
                </p>
              )}
            </div>
          </Reveal>

          {showPricing ? (
            <PricingTiers serviceSlug={s.slug} />
          ) : (
            <Reveal delay={2}>
              <ul className="check-list service-components">
                {s.components.map((c) => (
                  <li key={c}><span className="check"><Check size={14} /></span>{c}</li>
                ))}
              </ul>
            </Reveal>
          )}

          {showPricing && (
            <Reveal delay={3}>
              <div style={{ marginTop: 56, padding: 28, borderRadius: 20, background: '#fff', border: '1px solid var(--gray-200)', maxWidth: 900, margin: '56px auto 0', display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap', justifyContent: 'space-between' }}>
                <div style={{ flex: '1 1 300px' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--coral-500)', fontWeight: 600 }}>Not sure which fits?</div>
                  <div style={{ marginTop: 8, fontSize: '1.05rem', color: 'var(--navy-900)', fontWeight: 600 }}>
                    Book a free audit and we&rsquo;ll recommend the right package based on where your growth system is today.
                  </div>
                </div>
                <Link to="/audit" className="btn btn--outline">Book a free audit <ArrowRight size={16} /></Link>
              </div>
            </Reveal>
          )}
            </>
          )}
        </div>
      </section>
      )}

      {/* Big CTA */}
      <section className="section">
        <div className="container">
          <div className="split-cta">
            <div>
              <span className="eyebrow on-dark">Next step</span>
              <h2 className="display-lg" style={{ color: '#fff' }}>Let&rsquo;s look at your <span className="h-accent">current system</span> together.</h2>
              <p style={{ color: '#CBD5E1', fontSize: '1.1rem', marginTop: 16 }}>
                A short audit is the fastest way to see where the highest-impact improvements sit. No pressure. No generic report.
              </p>
              <div style={{ marginTop: 32 }}>
                <Link to={s.ctaUrl} className="btn btn--spark btn--lg">{s.cta} <ArrowRight size={18} /></Link>
              </div>
            </div>
            <div style={{ display: 'grid', gap: 12, color: '#fff' }}>
              <div style={{ padding: 24, background: 'rgba(255,255,255,0.06)', borderRadius: 16, border: '1px solid rgba(255,255,255,0.08)' }}>
                <div style={{ color: 'var(--teal-400)', fontSize: '0.7rem', letterSpacing: '0.16em', fontWeight: 500, fontFamily: 'var(--font-mono)' }}>WHAT YOU GET</div>
                <ul style={{ margin: '14px 0 0', padding: '0 0 0 20px', color: '#CBD5E1', lineHeight: 1.9 }}>
                  <li>A current-state review</li>
                  <li>Priority gaps and quick wins</li>
                  <li>Recommended next steps</li>
                  <li>A clear implementation option</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ServiceTemplate;
