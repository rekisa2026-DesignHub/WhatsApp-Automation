import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Compass, Users, Target } from 'lucide-react';
import SEO from '../components/SEO';

export default function About() {
  return (
    <>
      <SEO
        title="About Rekisa"
        description="Rekisa is a digital enablement partner based in Sandton, Johannesburg. We help businesses build stronger systems for growth through growth marketing, eCommerce, AWS cloud and practical workshops."
        canonical="https://rekisa.co.za/about"
      />

      <section className="page-hero">
        <div className="container page-hero__inner">
          <div className="breadcrumbs"><Link to="/">Home</Link> / About</div>
          <span className="eyebrow on-dark">About Rekisa</span>
          <h1>We help businesses build stronger systems for growth.</h1>
          <p>
            Rekisa is a digital enablement partner. We help businesses connect marketing, sales, commerce, customer communication, operations and cloud infrastructure into a practical operating system that supports growth.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48 }}>
          <div>
            <span className="eyebrow">Who we are</span>
            <h2>A partner for businesses that want systems, not just software.</h2>
            <p>
              Many businesses use separate tools for marketing, sales, ecommerce, customer service, operations, and reporting. The result is manual work, missed opportunities, weak follow-up, and limited visibility into what is working.
            </p>
            <p>
              Rekisa works with founders, revenue teams and operations leaders across South Africa and Africa to bring those systems together. We combine growth marketing, eCommerce, AWS cloud enablement and practical workshops into a single, coherent approach.
            </p>
          </div>
          <div>
            <span className="eyebrow">How we work</span>
            <h2>Practical. Strategic. Grounded in outcomes.</h2>
            <p>
              We start with an honest look at where your systems are today. We prioritise the changes that will make the biggest difference. We build, roll out and support the implementation with your team. And we stay involved when it helps.
            </p>
            <p>
              We do not sell hype. We do not run generic playbooks. We do the work that actually moves your business.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto 40px' }}>
            <span className="eyebrow">What we believe</span>
            <h2>Four principles that guide our work</h2>
          </div>
          <div className="grid grid--4">
            {[
              { Icon: Compass, title: 'Clarity beats complexity', body: 'The best systems are simple enough for the team to actually use.' },
              { Icon: Target, title: 'Outcomes over activity', body: 'We measure what matters — leads, revenue, retention — not just outputs.' },
              { Icon: Users, title: 'Practical, not theoretical', body: 'Every workshop and engagement ends with something the team can act on.' },
              { Icon: MapPin, title: 'Rooted in this market', body: 'We understand the realities of building a business in South Africa and Africa.' },
            ].map(({ Icon, title, body }) => (
              <div key={title} className="card" style={{ background: '#fff' }}>
                <div style={{ width: 42, height: 42, borderRadius: 12, background: 'var(--grad-primary)', display: 'grid', placeItems: 'center', color: '#fff', marginBottom: 16 }}>
                  <Icon size={20} />
                </div>
                <h4 style={{ marginBottom: 8 }}>{title}</h4>
                <p style={{ margin: 0, fontSize: '0.925rem' }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="split-cta">
            <div>
              <span className="eyebrow on-dark">Work with us</span>
              <h2>Let&rsquo;s start with a conversation.</h2>
              <p>The Digital Operating System Audit is the fastest way to get a shared, practical view of where the biggest improvements sit for your business.</p>
              <Link to="/audit" className="btn btn--gradient btn--lg">Book an Audit <ArrowRight size={18} /></Link>
            </div>
            <div style={{ color: '#fff', fontSize: '0.9rem' }}>
              <div style={{ padding: 20, background: 'rgba(255,255,255,0.06)', borderRadius: 12 }}>
                <div style={{ color: 'var(--teal-400)', letterSpacing: '0.15em', fontSize: '0.75rem', fontWeight: 700 }}>WHERE WE ARE</div>
                <p style={{ margin: '8px 0 0', color: '#CBD5E1' }}>Sandton, Johannesburg</p>
                <p style={{ margin: '4px 0 0', color: '#94A3B8' }}>Supporting businesses across South Africa and Africa.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
