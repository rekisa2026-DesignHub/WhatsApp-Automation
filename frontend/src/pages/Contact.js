import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail, MapPin, Phone, MessageCircle, Clock } from 'lucide-react';
import SEO from '../components/SEO';
import { Reveal } from '../components/Reveal';
import { Field, Honeypot, useSubmit } from '../components/Form';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', phone: '', subject: '', message: '', honeypot: '' });
  const { submit, status, error } = useSubmit('contact');

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const onSubmit = async (e) => { e.preventDefault(); await submit(form); };

  return (
    <>
      <SEO
        title="Contact Rekisa"
        description="Get in touch with Rekisa. Based in Sandton, Johannesburg. Supporting businesses across South Africa and Africa. Email info@rekisa.co.za or chat with us on WhatsApp."
        canonical="https://rekisa.co.za/contact"
      />

      <section className="page-hero">
        <div className="container page-hero__inner">
          <div className="breadcrumbs"><Link to="/">Home</Link> ‹› Contact</div>
          <span className="eyebrow on-dark">Contact</span>
          <h1>Let&rsquo;s talk about your <span className="h-accent">business</span>.</h1>
          <p>
            Tell us a little about what you&rsquo;re working on. We&rsquo;ll come back to you within one working day.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-wide" style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 64 }}>
          <Reveal>
            <div>
              <span className="eyebrow">Get in touch</span>
              <h2 className="display-lg">Multiple ways to <span className="h-accent">reach us</span>.</h2>
              <p style={{ fontSize: '1.05rem', color: 'var(--gray-600)', marginTop: 16 }}>
                Choose the channel that suits you — email, phone, or WhatsApp. We reply within one working day.
              </p>

              <div style={{ display: 'grid', gap: 12, marginTop: 32 }}>
                <ContactCard
                  Icon={Mail}
                  label="Email"
                  primary={<a href="mailto:thato@rekisa.co.za" style={{ color: 'var(--navy-900)', fontWeight: 600 }}>thato@rekisa.co.za</a>}
                  hint="We respond within 24 hours"
                />
                <ContactCard
                  Icon={Phone}
                  label="Phone"
                  primary={<a href="tel:+27714679642" style={{ color: 'var(--navy-900)', fontWeight: 600 }}>+27 71 467 9642</a>}
                  hint="Mon–Fri · 09:00–18:00 SAST"
                />
                <ContactCard
                  Icon={MessageCircle}
                  label="WhatsApp"
                  primary={<a href="https://wa.me/27714679642" target="_blank" rel="noreferrer noopener" style={{ color: 'var(--navy-900)', fontWeight: 600 }}>+27 71 467 9642 — chat on WhatsApp</a>}
                  hint="Quick questions or informal chats"
                />
                <ContactCard
                  Icon={MapPin}
                  label="Where we are"
                  primary={<span style={{ color: 'var(--navy-900)', fontWeight: 600 }}>Sandton, Johannesburg</span>}
                  hint="Supporting businesses across South Africa and Africa"
                />
              </div>

              <div style={{ marginTop: 32, padding: 24, borderRadius: 16, background: 'var(--gray-50)', border: '1px solid var(--gray-200)' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: 'var(--purple-600)', fontFamily: 'var(--font-mono)', fontSize: '0.7rem', letterSpacing: '0.14em', fontWeight: 600 }}>
                  <Clock size={12} /> NOT SURE WHERE TO START?
                </div>
                <p style={{ margin: '10px 0 12px', color: 'var(--gray-700)' }}>
                  Skip the back-and-forth. Book a Digital Operating System Audit and we&rsquo;ll walk through your current systems together.
                </p>
                <Link to="/audit" className="btn btn--spark">Book an Audit <ArrowRight size={16} /></Link>
              </div>
            </div>
          </Reveal>

          <Reveal delay={2}>
            <div className="card" style={{ padding: 40, boxShadow: 'var(--shadow-lg)' }}>
              <h3 style={{ marginBottom: 8, fontSize: '1.75rem' }}>Send us a message</h3>
              <p style={{ fontSize: '0.925rem', color: 'var(--gray-600)' }}>Fill in the form and we&rsquo;ll come back within one working day.</p>
              {status === 'success' ? (
                <div className="form-success">Thanks — we&rsquo;ve received your message and will be in touch shortly.</div>
              ) : (
                <form className="form" onSubmit={onSubmit} data-testid="contact-form">
                  <div className="form-row">
                    <Field label="Name" name="name" value={form.name} onChange={onChange} required />
                    <Field label="Company" name="company" value={form.company} onChange={onChange} />
                  </div>
                  <div className="form-row">
                    <Field label="Work email" name="email" type="email" value={form.email} onChange={onChange} required />
                    <Field label="Phone" name="phone" value={form.phone} onChange={onChange} />
                  </div>
                  <Field label="Subject" name="subject" value={form.subject} onChange={onChange} placeholder="How can we help?" />
                  <Field label="Message" name="message" value={form.message} onChange={onChange} as="textarea" required />
                  <Honeypot value={form.honeypot} onChange={onChange} />
                  {error && <div className="form-error">{error}</div>}
                  <button className="btn btn--spark btn--lg" type="submit" disabled={status === 'loading'} data-testid="contact-submit">
                    {status === 'loading' ? 'Sending…' : 'Send message'} <ArrowRight size={18} />
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function ContactCard({ Icon, label, primary, hint }) {
  return (
    <div className="card" style={{ padding: 20, display: 'flex', alignItems: 'flex-start', gap: 16 }}>
      <span style={{ flex: '0 0 44px', width: 44, height: 44, borderRadius: 12, background: 'var(--grad-spark)', display: 'grid', placeItems: 'center', color: '#fff' }}>
        <Icon size={18} />
      </span>
      <div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--gray-500)', fontWeight: 500 }}>{label}</div>
        <div style={{ marginTop: 4 }}>{primary}</div>
        <div style={{ marginTop: 4, fontSize: '0.85rem', color: 'var(--gray-500)' }}>{hint}</div>
      </div>
    </div>
  );
}
