import React, { useState } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowRight, Clock, MapPin, Check } from 'lucide-react';
import SEO from '../components/SEO';
import { getWorkshopBySlug } from '../data/workshops';
import { Field, Honeypot, useSubmit } from '../components/Form';

export default function WorkshopDetail() {
  const { slug } = useParams();
  const w = getWorkshopBySlug(slug);
  const [form, setForm] = useState({ name: '', email: '', company: '', phone: '', team_size: '', preferred_dates: '', goals: '', honeypot: '' });
  const { submit, status, error } = useSubmit('workshop-enquiry');

  if (!w) return <Navigate to="/workshops" replace />;

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const onSubmit = async (e) => {
    e.preventDefault();
    await submit({ ...form, workshop: w.name });
  };

  return (
    <>
      <SEO
        title={w.name}
        description={w.tagline}
        canonical={`https://rekisa.co.za/workshops/${w.slug}`}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Event',
          'name': w.name,
          'description': w.tagline,
          'organizer': { '@type': 'Organization', 'name': 'Rekisa' },
          'eventAttendanceMode': 'https://schema.org/MixedEventAttendanceMode',
        }}
      />
      <section className="page-hero">
        <div className="container page-hero__inner">
          <div className="breadcrumbs"><Link to="/">Home</Link> / <Link to="/workshops">Workshops</Link> / {w.name}</div>
          <span className="eyebrow on-dark">Workshop</span>
          <h1>{w.name}</h1>
          <p>{w.tagline}</p>
          <div style={{ display: 'flex', gap: 12, marginTop: 20, flexWrap: 'wrap' }}>
            <span className="tag" style={{ background: 'rgba(255,255,255,0.1)', color: '#fff' }}><Clock size={12} style={{ verticalAlign: 'middle', marginRight: 4 }} />{w.duration}</span>
            <span className="tag tag--teal"><MapPin size={12} style={{ verticalAlign: 'middle', marginRight: 4 }} />{w.delivery}</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 48 }}>
          <div>
            <span className="eyebrow">Who it&rsquo;s for</span>
            <h2>Who this workshop is designed for</h2>
            <p>{w.for}</p>

            <span className="eyebrow" style={{ marginTop: 32, display: 'inline-flex' }}>Problems it solves</span>
            <h3>What we work on</h3>
            <ul className="check-list">
              {w.problems.map((p) => (
                <li key={p}><span className="check"><Check size={14} /></span>{p}</li>
              ))}
            </ul>

            <span className="eyebrow" style={{ marginTop: 32, display: 'inline-flex' }}>What you&rsquo;ll work on</span>
            <h3>Modules and working sessions</h3>
            <ul className="check-list">
              {w.workOn.map((p) => (
                <li key={p}><span className="check"><Check size={14} /></span>{p}</li>
              ))}
            </ul>

            <span className="eyebrow" style={{ marginTop: 32, display: 'inline-flex' }}>Outputs</span>
            <h3>What you leave with</h3>
            <ul className="check-list">
              {w.leaveWith.map((p) => (
                <li key={p}><span className="check"><Check size={14} /></span>{p}</li>
              ))}
            </ul>
          </div>

          <aside style={{ position: 'sticky', top: 100, alignSelf: 'start' }}>
            <div className="card" style={{ padding: 28 }}>
              <h3 style={{ marginBottom: 12 }}>Enquire about this workshop</h3>
              <p style={{ fontSize: '0.9rem' }}>Tell us a little about your team and we&rsquo;ll come back with dates and next steps.</p>
              {status === 'success' ? (
                <div className="form-success">Thanks — we&rsquo;ll be in touch with details shortly.</div>
              ) : (
                <form className="form" onSubmit={onSubmit} data-testid="workshop-form">
                  <Field label="Name" name="name" value={form.name} onChange={onChange} required />
                  <Field label="Work email" name="email" type="email" value={form.email} onChange={onChange} required />
                  <Field label="Company" name="company" value={form.company} onChange={onChange} />
                  <Field label="Team size" name="team_size" value={form.team_size} onChange={onChange} as="select" options={['1–5', '6–20', '21–50', '50+']} />
                  <Field label="Preferred dates" name="preferred_dates" value={form.preferred_dates} onChange={onChange} placeholder="e.g. mid February" />
                  <Field label="Goals for the workshop" name="goals" value={form.goals} onChange={onChange} as="textarea" placeholder="What do you want to leave with?" />
                  <Honeypot value={form.honeypot} onChange={onChange} />
                  {error && <div className="form-error">{error}</div>}
                  <button className="btn btn--gradient" type="submit" disabled={status === 'loading'} data-testid="workshop-submit">
                    {status === 'loading' ? 'Sending…' : 'Send enquiry'} <ArrowRight size={16} />
                  </button>
                </form>
              )}
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
