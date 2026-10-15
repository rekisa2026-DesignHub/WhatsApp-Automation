import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import { BLOG_POSTS } from '../data/blogPosts';
import { Field, Honeypot, useSubmit } from '../components/Form';

const CATEGORIES = ['All', 'Strategy & Planning', 'B2B Sales', 'eCommerce', 'eCommerce Growth', 'eCommerce Promotions', 'eCommerce Optimisation', 'Customer Success', 'Digital Transformation'];

export default function Resources() {
  const [filter, setFilter] = useState('All');
  const posts = useMemo(() => {
    if (filter === 'All') return BLOG_POSTS;
    return BLOG_POSTS.filter((p) => p.category === filter);
  }, [filter]);

  const [email, setEmail] = useState('');
  const [hp, setHp] = useState('');
  const { submit, status } = useSubmit('newsletter');
  const onSubscribe = async (e) => { e.preventDefault(); await submit({ email, honeypot: hp }); if (email) setEmail(''); };

  return (
    <>
      <SEO
        title="Business Growth Resources"
        description="Practical insights, guides and articles for building a stronger digital operating system for growth."
        canonical="https://rekisa.co.za/resources"
      />

      <section className="page-hero">
        <div className="container page-hero__inner">
          <div className="breadcrumbs"><Link to="/">Home</Link> / Resources</div>
          <span className="eyebrow on-dark">Resources</span>
          <h1>Practical insights for building a stronger business system.</h1>
          <p>
            Guides and articles across growth marketing, eCommerce, customer success, workshops and cloud enablement — focused on what actually works.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 32 }}>
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className="btn btn--sm"
                style={{
                  background: filter === c ? 'var(--navy-900)' : '#fff',
                  color: filter === c ? '#fff' : 'var(--navy-900)',
                  borderColor: 'var(--gray-200)',
                }}
                data-testid={`filter-${c}`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="grid grid--3">
            {posts.map((p) => (
              <Link key={p.slug} to={`/resources/${p.slug}`} className="card" style={{ padding: 0, overflow: 'hidden', textDecoration: 'none', display: 'flex', flexDirection: 'column' }}>
                <div style={{ aspectRatio: '16/9', overflow: 'hidden', background: 'var(--gray-100)' }}>
                  <img src={p.image} alt="" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: 24, display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
                    <span className="tag">{p.category}</span>
                    <span style={{ color: 'var(--gray-500)', fontSize: '0.8rem' }}>{p.readTime}</span>
                  </div>
                  <h3 style={{ fontSize: '1.15rem', margin: '0 0 8px' }}>{p.title}</h3>
                  <p style={{ flex: 1, fontSize: '0.925rem' }}>{p.excerpt}</p>
                  <span style={{ color: 'var(--purple-500)', fontWeight: 600, marginTop: 12, display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                    Read article <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {posts.length === 0 && (
            <div style={{ textAlign: 'center', padding: 60, color: 'var(--gray-500)' }}>
              No articles in this category yet.
            </div>
          )}
        </div>
      </section>

      <section className="section section--tint">
        <div className="container">
          <div className="split-cta">
            <div>
              <span className="eyebrow on-dark">Stay updated</span>
              <h2>Get new resources in your inbox.</h2>
              <p>Occasional emails with new guides, workshop recaps, and tool insights. Unsubscribe anytime.</p>
            </div>
            <div>
              {status === 'success' ? (
                <div className="form-success">Thanks — you&rsquo;re subscribed.</div>
              ) : (
                <form className="form" onSubmit={onSubscribe} data-testid="newsletter-form">
                  <Field label="Email" name="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="you@example.com" />
                  <Honeypot value={hp} onChange={(e) => setHp(e.target.value)} />
                  <button className="btn btn--gradient" type="submit" disabled={status === 'loading'}>
                    {status === 'loading' ? 'Subscribing…' : 'Subscribe'} <ArrowRight size={16} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
