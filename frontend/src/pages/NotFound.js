import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';

export default function NotFound() {
  return (
    <>
      <SEO title="Page not found" description="The page you&rsquo;re looking for doesn&rsquo;t exist." />
      <section className="page-hero">
        <div className="container page-hero__inner" style={{ textAlign: 'center' }}>
          <span className="eyebrow on-dark">404</span>
          <h1>This page has taken a wrong turn.</h1>
          <p>The page you&rsquo;re looking for doesn&rsquo;t exist — or has moved.</p>
          <div style={{ marginTop: 24, display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/" className="btn btn--gradient btn--lg">Back to home <ArrowRight size={18} /></Link>
            <Link to="/services" className="btn btn--outline-light btn--lg">Explore services</Link>
          </div>
        </div>
      </section>
    </>
  );
}
