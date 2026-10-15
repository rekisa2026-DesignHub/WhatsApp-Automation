import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, ShoppingBag, Cloud } from 'lucide-react';
import SEO from '../components/SEO';
import { SERVICES } from '../data/services';
import { Reveal } from '../components/Reveal';
import GrowthMockup from '../components/mockups/GrowthMockup';
import CommerceMockup from '../components/mockups/CommerceMockup';
import CloudMockup from '../components/mockups/CloudMockup';

const MAP = {
  'growth-marketing-enablement': { Icon: Target, Mockup: GrowthMockup, accent: 'coral' },
  'digital-commerce-enablement': { Icon: ShoppingBag, Mockup: CommerceMockup, accent: 'purple' },
  'aws-cloud-enablement': { Icon: Cloud, Mockup: CloudMockup, accent: 'teal' },
};

export default function ServicesOverview() {
  return (
    <>
      <SEO
        title="Digital enablement services for growth"
        description="Growth marketing, eCommerce and AWS cloud enablement services that help businesses sell better, operate better and scale better."
        canonical="https://rekisa.co.za/services"
      />
      <section className="page-hero">
        <div className="container page-hero__inner">
          <div className="breadcrumbs"><Link to="/">Home</Link> ‹› Services</div>
          <span className="eyebrow on-dark">Enablement Services</span>
          <h1>Three services. <span className="h-accent">One</span> connected system.</h1>
          <p>Each service solves a specific set of business problems — and every service is designed to work alongside the others.</p>
        </div>
      </section>

      {SERVICES.map((s, idx) => {
        const cfg = MAP[s.slug];
        const flip = idx % 2 === 1;
        return (
          <section key={s.slug} className={`section ${idx === 1 ? 'section--tint' : idx === 2 ? 'section--dark' : ''}`}>
            <div className="container-wide">
              <div className={`split ${flip ? 'split--flip' : ''}`}>
                {flip ? (
                  <Reveal>
                    <div className="split__vis"><cfg.Mockup /></div>
                  </Reveal>
                ) : null}
                <Reveal delay={2}>
                  <div>
                    <span className={`eyebrow ${idx === 2 ? 'on-dark' : cfg.accent === 'coral' ? 'coral' : ''}`}>
                      <cfg.Icon size={14} /> {s.name}
                    </span>
                    <h2 className="display-lg" style={idx === 2 ? { color: '#fff' } : {}}>
                      {s.tagline}
                    </h2>
                    <p style={{ fontSize: '1.125rem', color: idx === 2 ? '#CBD5E1' : 'var(--gray-600)', marginTop: 20 }}>
                      {s.problem}
                    </p>
                    <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 32 }}>
                      {s.components.slice(0, 5).map((c) => (
                        <span key={c} className={`tag ${idx === 2 ? 'tag--dark' : ''}`} style={idx !== 2 ? { background: '#fff', border: '1px solid var(--gray-200)', color: 'var(--navy-800)', textTransform: 'none', fontFamily: 'Inter', letterSpacing: 0, padding: '8px 14px' } : { textTransform: 'none', fontFamily: 'Inter', letterSpacing: 0, padding: '8px 14px' }}>{c}</span>
                      ))}
                    </div>
                    <div style={{ marginTop: 40 }}>
                      <Link to={`/services/${s.slug}`} className={idx === 2 ? 'btn btn--gradient' : 'btn btn--primary'}>
                        Explore {s.name.split(' ')[0]} <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                </Reveal>
                {!flip ? (
                  <Reveal delay={2}>
                    <div className="split__vis"><cfg.Mockup /></div>
                  </Reveal>
                ) : null}
              </div>
            </div>
          </section>
        );
      })}

      <section className="section">
        <div className="container">
          <div className="split-cta">
            <div>
              <span className="eyebrow on-dark">How we work</span>
              <h2 className="display-lg" style={{ color: '#fff' }}>Every engagement starts <span className="h-accent">the same way</span>.</h2>
              <p style={{ color: '#CBD5E1', marginTop: 16 }}>A Digital Operating System Audit gives us a shared view of where you are today and where the biggest gaps sit.</p>
              <div style={{ marginTop: 32 }}>
                <Link to="/audit" className="btn btn--spark btn--lg">Book an Audit <ArrowRight size={18} /></Link>
              </div>
            </div>
            <div style={{ display: 'grid', gap: 10 }}>
              {['Audit', 'Design', 'Implement', 'Optimise'].map((step, i) => (
                <div key={step} style={{ padding: '16px 20px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 14, display: 'flex', gap: 16, alignItems: 'center', color: '#fff' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--teal-400)', letterSpacing: '0.12em' }}>0{i + 1}</div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '1rem' }}>{step}</div>
                    <div style={{ fontSize: '0.85rem', color: '#94A3B8' }}>
                      {[
                        'Review your current systems.',
                        'Design the right systems for your business.',
                        'Build, connect and roll out with your team.',
                        'Measure and continuously improve.',
                      ][i]}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
