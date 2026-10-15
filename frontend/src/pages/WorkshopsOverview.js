import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, MapPin, Zap } from 'lucide-react';
import SEO from '../components/SEO';
import { WORKSHOPS } from '../data/workshops';
import { Reveal } from '../components/Reveal';
import WorkshopMockup from '../components/mockups/WorkshopMockup';

export default function WorkshopsOverview() {
  return (
    <>
      <SEO
        title="Growth Marketing and eCommerce Workshops"
        description="Practical workshops for businesses ready to build better systems. Two to three-day working sessions focused on real business challenges and implementation — not theory."
        canonical="https://rekisa.co.za/workshops"
      />
      <section className="page-hero">
        <div className="container-wide page-hero__inner">
          <div className="breadcrumbs"><Link to="/">Home</Link> ‹› Workshops</div>
          <div className="split" style={{ alignItems: 'center', marginTop: 16 }}>
            <Reveal>
              <div>
                <span className="eyebrow on-dark"><Zap size={14} /> Workshops</span>
                <h1>Practical workshops for teams building <span className="h-accent">better systems</span>.</h1>
                <p>Two to three-day working sessions on your real challenges. Your team leaves with a plan they can actually execute.</p>
              </div>
            </Reveal>
            <Reveal delay={2}>
              <div className="split__vis"><WorkshopMockup /></div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid--3">
            {WORKSHOPS.map((w, i) => (
              <Reveal key={w.slug} delay={i + 1}>
                <div className="card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <div style={{ display: 'flex', gap: 8, marginBottom: 16, flexWrap: 'wrap' }}>
                    <span className="tag"><Clock size={12} /> {w.duration}</span>
                    <span className="tag tag--teal"><MapPin size={12} /> {w.delivery}</span>
                  </div>
                  <h3 style={{ fontSize: '1.5rem' }}>{w.name}</h3>
                  <p style={{ flex: 1, marginTop: 12 }}>{w.tagline}</p>
                  <Link to={`/workshops/${w.slug}`} className="btn btn--outline" style={{ alignSelf: 'flex-start', marginTop: 12 }}>
                    View workshop <ArrowRight size={16} />
                  </Link>
                </div>
              </Reveal>
            ))}
            <Reveal delay={4}>
              <div className="card" style={{ display: 'flex', flexDirection: 'column', height: '100%', background: 'var(--gray-50)', borderStyle: 'dashed' }}>
                <span className="tag tag--coral">Coming soon</span>
                <h3 style={{ marginTop: 16, fontSize: '1.5rem' }}>Future Workshops</h3>
                <p style={{ flex: 1 }}>New workshops are added regularly. Get notified when we release the next round of dates.</p>
                <Link to="/contact" className="btn btn--ghost" style={{ alignSelf: 'flex-start' }}>Get notified <ArrowRight size={16} /></Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container">
          <Reveal>
            <div style={{ textAlign: 'center', maxWidth: 900, margin: '0 auto' }}>
              <span className="eyebrow on-dark">How we run workshops</span>
              <h2 className="display-lg" style={{ color: '#fff' }}>
                Real work. Real teams. <span className="h-accent">Real outputs.</span>
              </h2>
              <p style={{ color: '#CBD5E1', fontSize: '1.15rem', marginTop: 24 }}>
                Every workshop is designed around your business, not a template. We start with pre-work to focus on your actual challenges. We work through the session with your team. You leave with concrete outputs — not just a set of slides.
              </p>
              <div style={{ marginTop: 40 }}>
                <Link to="/contact" className="btn btn--spark btn--lg">Enquire about a workshop <ArrowRight size={18} /></Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
