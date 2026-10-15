import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';

const LOGO_DARK = 'https://customer-assets.emergentagent.com/job_growth-systems-site/artifacts/dkysyjzl_Rekisa%20black.png';
const LOGO_LIGHT = 'https://customer-assets.emergentagent.com/job_growth-systems-site/artifacts/j09dkh8n_Rekisa%20white.png';

const CONTACT = {
  email: 'thato@rekisa.co.za',
  phoneDisplay: '+27 71 467 9642',
  phoneTel: '+27714679642',
  whatsapp: 'https://wa.me/27714679642',
  linkedin: 'https://za.linkedin.com/company/rekisa-sales-marketing-solutions',
  instagram: 'https://www.instagram.com/rekisa_ecommerce/',
  facebook: 'https://www.facebook.com/Getrekisa',
  youtube: 'https://www.youtube.com/@rekisaecommercesolutionsch2329',
};

export default function Layout({ children }) {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <a className="skip-link" href="#main" style={{ position: 'absolute', left: '-9999px' }}>Skip to content</a>
      <header className="site-header">
        <div className="container site-header__inner">
          <Link to="/" className="brand" data-testid="brand-link" aria-label="Rekisa — home">
            <img src={LOGO_DARK} alt="Rekisa" className="brand__logo" />
            <img src={LOGO_LIGHT} alt="Rekisa" className="brand__logo brand__logo--light" />
          </Link>

          <nav className="nav" aria-label="Primary">
            <div className="nav__item">
              <NavLink to="/" end className={({isActive}) => 'nav__link' + (isActive ? ' active' : '')}>Home</NavLink>
            </div>
            <div className="nav__item">
              <NavLink to="/services" className={({isActive}) => 'nav__link' + (isActive ? ' active' : '')}>
                Services <ChevronDown size={14} className="nav__caret" />
              </NavLink>
              <div className="nav__menu" role="menu">
                <Link className="nav__menu-item" to="/services/growth-marketing-enablement"><strong>Growth Marketing Enablement</strong><span>Lead gen, paid, outbound, CRM</span></Link>
                <Link className="nav__menu-item" to="/services/digital-commerce-enablement"><strong>eCommerce Enablement</strong><span>Ecommerce, marketplaces, journeys</span></Link>
                <Link className="nav__menu-item" to="/services/whatsapp-automation"><strong>WhatsApp Automation</strong><span>Chatfuel flows, lead capture, follow-up</span></Link>
                <Link className="nav__menu-item" to="/services/aws-cloud-enablement"><strong>AWS Cloud Enablement</strong><span>Cloud, migration, Amazon Connect</span></Link>
                <Link className="nav__menu-item" to="/audit"><strong>Digital Operating System Audit</strong><span>Where every engagement starts</span></Link>
              </div>
            </div>
            <div className="nav__item">
              <NavLink to="/workshops" className={({isActive}) => 'nav__link' + (isActive ? ' active' : '')}>
                Workshops <ChevronDown size={14} className="nav__caret" />
              </NavLink>
              <div className="nav__menu" role="menu">
                <Link className="nav__menu-item" to="/workshops/growth-marketing"><strong>Growth Marketing Workshop</strong><span>Targeting, paid, outbound, measurement</span></Link>
                <Link className="nav__menu-item" to="/workshops/ecommerce-accelerator"><strong>eCommerce Accelerator Workshop</strong><span>Storefront, marketplaces, conversion</span></Link>
                <Link className="nav__menu-item" to="/workshops/digital-business-model"><strong>Digital Business Model Workshop</strong><span>Value prop, offer, revenue logic</span></Link>
                <Link className="nav__menu-item" to="/workshops"><strong>Future Workshops</strong><span>Upcoming sessions and dates</span></Link>
              </div>
            </div>
            <div className="nav__item">
              <NavLink to="/resources" className={({isActive}) => 'nav__link' + (isActive ? ' active' : '')}>
                Learning <ChevronDown size={14} className="nav__caret" />
              </NavLink>
              <div className="nav__menu" role="menu">
                <Link className="nav__menu-item" to="/resources"><strong>Resources Hub</strong><span>Guides, articles, insights</span></Link>
                <Link className="nav__menu-item" to="/workshops"><strong>Workshops</strong><span>Done-with-you working sessions</span></Link>
                <Link className="nav__menu-item" to="/about"><strong>About Rekisa</strong><span>Who we are &amp; how we work</span></Link>
              </div>
            </div>
            <div className="nav__item">
              <NavLink to="/contact" className={({isActive}) => 'nav__link' + (isActive ? ' active' : '')}>Contact</NavLink>
            </div>
          </nav>

          <div className="nav__actions">
            <Link to="/audit" className="btn btn--primary btn--sm" data-testid="header-cta-audit">
              Book an Audit <ArrowRight size={16} />
            </Link>
            <button className="nav__toggle" onClick={() => setOpen(!open)} aria-label="Toggle menu" data-testid="mobile-toggle">
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        <div className={'mobile-menu' + (open ? ' open' : '')} aria-hidden={!open}>
          <Link to="/">Home</Link>
          <details>
            <summary>Services <ChevronDown size={16} /></summary>
            <Link to="/services">Services Overview</Link>
            <Link to="/services/growth-marketing-enablement">Growth Marketing Enablement</Link>
            <Link to="/services/digital-commerce-enablement">eCommerce Enablement</Link>
            <Link to="/services/whatsapp-automation">WhatsApp Automation</Link>
            <Link to="/services/aws-cloud-enablement">AWS Cloud Enablement</Link>
            <Link to="/audit">Digital Operating System Audit</Link>
          </details>
          <details>
            <summary>Workshops <ChevronDown size={16} /></summary>
            <Link to="/workshops">Workshops Overview</Link>
            <Link to="/workshops/growth-marketing">Growth Marketing Workshop</Link>
            <Link to="/workshops/ecommerce-accelerator">eCommerce Accelerator Workshop</Link>
            <Link to="/workshops/digital-business-model">Digital Business Model Workshop</Link>
          </details>
          <details>
            <summary>Learning <ChevronDown size={16} /></summary>
            <Link to="/resources">Resources Hub</Link>
            <Link to="/workshops">Workshops</Link>
            <Link to="/about">About Rekisa</Link>
          </details>
          <Link to="/contact">Contact</Link>
          <Link to="/audit" className="btn btn--primary">Book an Audit</Link>
        </div>
      </header>

      <main id="main">{children}</main>

      <footer className="site-footer">
        <div className="container">
          <div className="site-footer__grid">
            <div>
              <Link to="/" className="brand" aria-label="Rekisa — home">
                <img src={LOGO_LIGHT} alt="Rekisa" className="brand__logo brand__logo--light" style={{ display: 'block' }} />
              </Link>
              <p style={{ color: '#94A3B8', marginTop: 20, maxWidth: 340, lineHeight: 1.6 }}>
                Rekisa helps businesses build a stronger digital operating system for growth.
              </p>

              <div style={{ display: 'grid', gap: 10, marginTop: 24, fontSize: '0.9rem' }}>
                <a href={`mailto:${CONTACT.email}`} style={{ padding: 0, display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                  <IconMail /> {CONTACT.email}
                </a>
                <a href={`tel:${CONTACT.phoneTel}`} style={{ padding: 0, display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                  <IconPhone /> {CONTACT.phoneDisplay}
                </a>
                <a href={CONTACT.whatsapp} target="_blank" rel="noreferrer noopener" style={{ padding: 0, display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                  <IconWhatsApp /> Chat on WhatsApp
                </a>
                <div style={{ padding: 0, display: 'inline-flex', alignItems: 'center', gap: 8, color: '#94A3B8' }}>
                  <IconMap /> Sandton, Johannesburg
                </div>
                <div style={{ color: '#64748B', fontSize: '0.8rem', paddingTop: 4, fontFamily: 'var(--font-mono)' }}>Mon–Fri · 09:00–18:00 SAST</div>
              </div>

              <div style={{ display: 'flex', gap: 10, marginTop: 24 }}>
                <SocialLink href={CONTACT.linkedin} label="LinkedIn"><IconLinkedIn /></SocialLink>
                <SocialLink href={CONTACT.instagram} label="Instagram"><IconInstagram /></SocialLink>
                <SocialLink href={CONTACT.facebook} label="Facebook"><IconFacebook /></SocialLink>
                <SocialLink href={CONTACT.youtube} label="YouTube"><IconYouTube /></SocialLink>
              </div>
            </div>

            <div>
              <h4>Services</h4>
              <Link to="/services/growth-marketing-enablement">Growth Marketing</Link>
              <Link to="/services/digital-commerce-enablement">eCommerce</Link>
              <Link to="/services/whatsapp-automation">WhatsApp Automation</Link>
              <Link to="/services/aws-cloud-enablement">AWS Cloud</Link>
              <Link to="/audit">System Audit</Link>
            </div>
            <div>
              <h4>Workshops</h4>
              <Link to="/workshops/growth-marketing">Growth Marketing</Link>
              <Link to="/workshops/ecommerce-accelerator">eCommerce Accelerator</Link>
              <Link to="/workshops/digital-business-model">Digital Business Model</Link>
            </div>
            <div>
              <h4>Company</h4>
              <Link to="/about">About</Link>
              <Link to="/resources">Resources</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/privacy">Privacy Policy</Link>
              <Link to="/terms">Terms of Use</Link>
              <Link to="/partner-disclosure">Partner Disclosure</Link>
            </div>
          </div>
          <div className="site-footer__bottom">
            <span>© {new Date().getFullYear()} Rekisa. All rights reserved.</span>
            <span>Sandton, Johannesburg · South Africa</span>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp button */}
      <a
        href={CONTACT.whatsapp}
        target="_blank"
        rel="noreferrer noopener"
        className="wa-fab"
        aria-label="Chat with us on WhatsApp"
      >
        <IconWhatsApp size={22} />
      </a>
    </>
  );
}

function SocialLink({ href, label, children }) {
  return (
    <a href={href} target="_blank" rel="noreferrer noopener" aria-label={label}
      style={{
        width: 38, height: 38, borderRadius: 10,
        background: 'rgba(255,255,255,0.05)',
        border: '1px solid rgba(255,255,255,0.08)',
        display: 'inline-grid', placeItems: 'center',
        color: '#CBD5E1',
        padding: 0,
      }}
    >
      {children}
    </a>
  );
}

/* --- Inline SVG icon set (keeps bundle tiny, no extra deps) --- */
function IconMail() { return (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16v16H4z"/><path d="M4 7l8 6 8-6"/></svg>); }
function IconPhone() { return (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1.9.3 1.8.6 2.6a2 2 0 01-.5 2.1L8 9.5a16 16 0 006 6l1.1-1.1a2 2 0 012.1-.5c.8.3 1.7.5 2.6.6a2 2 0 011.7 2z"/></svg>); }
function IconMap() { return (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>); }
function IconWhatsApp({ size = 16 }) { return (<svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M20.5 3.5A11.9 11.9 0 0012 0C5.4 0 .1 5.4.1 12c0 2.1.5 4.1 1.6 6L0 24l6.2-1.6a11.9 11.9 0 005.7 1.5H12c6.6 0 12-5.4 12-12 0-3.2-1.3-6.2-3.5-8.4zM12 21.8c-1.8 0-3.6-.5-5.2-1.4l-.4-.2-3.7 1 1-3.6-.2-.4a10 10 0 01-1.5-5.3C2 6.6 6.5 2.1 12 2.1s10 4.5 10 9.9-4.5 9.8-10 9.8zm5.5-7.4c-.3-.2-1.8-.9-2-1s-.5-.2-.7.1c-.2.3-.8 1-1 1.2-.2.2-.4.2-.7 0-.3-.2-1.2-.5-2.3-1.4-.8-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.2.3-.4.4-.6.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5s-.7-1.6-.9-2.2c-.2-.6-.5-.5-.7-.5H8c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.7 1.1 2.9c.2.2 2 3.1 5 4.3.7.3 1.3.5 1.7.6.7.2 1.4.2 2 .1.6-.1 1.8-.7 2-1.5.3-.7.3-1.4.2-1.5 0-.1-.2-.2-.5-.3z"/></svg>); }
function IconLinkedIn() { return (<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5V9h3v10zM6.5 7.7a1.7 1.7 0 110-3.5 1.7 1.7 0 010 3.5zM19 19h-3v-5c0-1.2-.4-2-1.5-2s-1.7.8-1.7 2v5h-3V9h3v1.4c.5-.9 1.7-1.4 2.7-1.4 2 0 3.5 1.3 3.5 4V19z"/></svg>); }
function IconX() { return (<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2H21.5l-7.4 8.4L23 22h-6.85l-5.36-6.98L4.6 22H1.34l7.9-9L1 2h6.99l4.84 6.38L18.24 2zm-1.19 18h1.87L7.06 4H5.06l12 16z"/></svg>); }
function IconInstagram() { return (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>); }
function IconFacebook() { return (<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M13 22v-8h3l1-4h-4V7c0-1 .5-2 2-2h2V1.1C16.6 1 15.4 1 14.5 1 11.9 1 10 2.6 10 5.3V10H7v4h3v8h3z"/></svg>); }
function IconYouTube() { return (<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.6 3.6 12 3.6 12 3.6s-7.6 0-9.4.5A3 3 0 00.5 6.2C0 8 0 12 0 12s0 4 .5 5.8a3 3 0 002.1 2.1c1.8.5 9.4.5 9.4.5s7.6 0 9.4-.5a3 3 0 002.1-2.1C24 16 24 12 24 12s0-4-.5-5.8zM9.6 15.6V8.4l6.3 3.6-6.3 3.6z"/></svg>); }
