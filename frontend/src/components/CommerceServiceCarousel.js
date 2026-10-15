import React from 'react';
import { Reveal } from './Reveal';

/**
 * Right-to-left marquee slider showing each eCommerce solution
 * with a bespoke SVG graphic and a short focus blurb. Pauses on hover.
 */

const SOLUTIONS = [
  {
    key: 'strategy',
    title: 'Ecommerce Strategy',
    focus:
      'We look at your store through the Business Model Canvas — so we can position your brand in a way that helps you win with your ideal customer.',
    accent: 'coral',
    Illustration: BMCIllustration,
  },
  {
    key: 'store',
    title: 'Store Design & Setup',
    focus:
      'A storefront that reflects your brand and removes friction — clean structure, fast pages, and a checkout that gets out of the way.',
    accent: 'purple',
    Illustration: StoreIllustration,
  },
  {
    key: 'products',
    title: 'Product Setup',
    focus:
      'We structure your catalogue, imagery, copy and variants so shoppers know what they’re buying — and search engines can find it.',
    accent: 'teal',
    Illustration: ProductIllustration,
  },
  {
    key: 'payments',
    title: 'Payments & Delivery',
    focus:
      'We connect the payment methods your customers actually use and set up delivery options built for South African shipping realities.',
    accent: 'amber',
    Illustration: PaymentIllustration,
  },
  {
    key: 'marketplace',
    title: 'Marketplace Readiness',
    focus:
      'We prepare your catalogue and fulfilment to compete on Takealot, Amazon and other marketplaces without losing your brand equity.',
    accent: 'lime',
    Illustration: MarketplaceIllustration,
  },
  {
    key: 'conversion',
    title: 'Conversion Optimisation',
    focus:
      'Structured tests on the moments that matter — hero, product page, cart, checkout — so more traffic turns into real revenue.',
    accent: 'coral',
    Illustration: ConversionIllustration,
  },
  {
    key: 'journey',
    title: 'Customer Journey Design',
    focus:
      'We map every touchpoint from first click to repeat purchase and remove the friction, gaps and dead ends costing you sales.',
    accent: 'purple',
    Illustration: JourneyIllustration,
  },
  {
    key: 'service',
    title: 'Customer Service Workflows',
    focus:
      'Systems that route enquiries to the right person, follow up automatically, and give your team the context they need to help.',
    accent: 'amber',
    Illustration: SupportIllustration,
  },
  {
    key: 'leads',
    title: 'Lead Capture & Follow-up',
    focus:
      'We turn interested visitors into contactable leads — with well-placed capture points and follow-up flows that actually convert.',
    accent: 'lime',
    Illustration: LeadIllustration,
  },
];

export default function CommerceServiceCarousel() {
  return (
    <div className="cgrid">
      {SOLUTIONS.map((s, i) => (
        <Reveal delay={((i % 3) + 1)} key={s.key}>
          <div className={`cslide cslide--${s.accent}`}>
            <div className="cslide__vis">
              <s.Illustration />
            </div>
            <div className="cslide__body">
              <div className="cslide__num">{`0${i + 1}`.slice(-2)}</div>
              <h3 className="cslide__title">{s.title}</h3>
              <p className="cslide__focus">{s.focus}</p>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

/* ================= Inline illustrations ================= */
function Frame({ children, bg = '#0A0E27' }) {
  return (
    <svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', display: 'block' }}>
      <rect width="320" height="200" fill={bg} />
      {children}
    </svg>
  );
}

function BMCIllustration() {
  // Business Model Canvas grid preview
  return (
    <Frame>
      <defs>
        <linearGradient id="bmc-h" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FF6B47" />
          <stop offset="100%" stopColor="#7C3AED" />
        </linearGradient>
      </defs>
      <g fontFamily="'JetBrains Mono', monospace" fontSize="7" fill="#94A3B8" letterSpacing="0.5">
        {/* BMC 9 blocks approx */}
        <rect x="20" y="28" width="56" height="70" rx="6" fill="#131A3F" stroke="rgba(255,255,255,0.08)" />
        <text x="26" y="42" fill="#FF6B47">PARTNERS</text>
        <rect x="82" y="28" width="56" height="32" rx="6" fill="#131A3F" stroke="rgba(255,255,255,0.08)" />
        <text x="88" y="42" fill="#A78BFA">ACTIVITIES</text>
        <rect x="82" y="66" width="56" height="32" rx="6" fill="#131A3F" stroke="rgba(255,255,255,0.08)" />
        <text x="88" y="80" fill="#A78BFA">RESOURCES</text>
        <rect x="144" y="28" width="56" height="70" rx="6" fill="url(#bmc-h)" opacity="0.85" />
        <text x="150" y="42" fill="#fff">VALUE</text>
        <text x="150" y="52" fill="#fff">PROP</text>
        <rect x="206" y="28" width="56" height="32" rx="6" fill="#131A3F" stroke="rgba(255,255,255,0.08)" />
        <text x="212" y="42" fill="#2DD4BF">RELATIONS</text>
        <rect x="206" y="66" width="56" height="32" rx="6" fill="#131A3F" stroke="rgba(255,255,255,0.08)" />
        <text x="212" y="80" fill="#2DD4BF">CHANNELS</text>
        <rect x="268" y="28" width="32" height="70" rx="6" fill="#131A3F" stroke="rgba(255,255,255,0.08)" />
        <text x="274" y="42" fill="#FBBF24">SEGMENTS</text>
        {/* bottom row cost / revenue */}
        <rect x="20" y="106" width="140" height="32" rx="6" fill="#131A3F" stroke="rgba(255,255,255,0.08)" />
        <text x="26" y="120" fill="#FF6B47">COST STRUCTURE</text>
        <rect x="166" y="106" width="134" height="32" rx="6" fill="#131A3F" stroke="rgba(255,255,255,0.08)" />
        <text x="172" y="120" fill="#BEF264">REVENUE STREAMS</text>

        <text x="20" y="162" fill="#fff" fontSize="11" fontFamily="'Product Sans','Poppins',sans-serif" fontWeight="700">Business Model Canvas</text>
        <text x="20" y="178" fill="#94A3B8" fontSize="9" fontFamily="'Product Sans','Poppins',sans-serif">Position → Fit → Win</text>
      </g>
    </Frame>
  );
}

function StoreIllustration() {
  return (
    <Frame>
      <defs>
        <linearGradient id="st-hero" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#7C3AED" />
          <stop offset="100%" stopColor="#FF6B47" />
        </linearGradient>
      </defs>
      <rect x="20" y="20" width="280" height="160" rx="10" fill="#fff" />
      {/* nav */}
      <rect x="20" y="20" width="280" height="22" fill="#F1F5F9" />
      <rect x="30" y="28" width="36" height="8" rx="3" fill="#7C3AED" />
      <rect x="72" y="28" width="20" height="8" rx="3" fill="#CBD5E1" />
      <rect x="96" y="28" width="20" height="8" rx="3" fill="#CBD5E1" />
      <rect x="268" y="26" width="22" height="12" rx="6" fill="#06081F" />
      {/* hero */}
      <rect x="30" y="52" width="170" height="78" rx="8" fill="url(#st-hero)" />
      <rect x="40" y="66" width="120" height="10" rx="3" fill="rgba(255,255,255,0.85)" />
      <rect x="40" y="82" width="90" height="6" rx="3" fill="rgba(255,255,255,0.6)" />
      <rect x="40" y="106" width="60" height="16" rx="8" fill="#06081F" />
      {/* product tiles */}
      <rect x="210" y="52" width="38" height="38" rx="6" fill="#0EA5E9" />
      <rect x="254" y="52" width="38" height="38" rx="6" fill="#F59E0B" />
      <rect x="210" y="96" width="38" height="38" rx="6" fill="#EC4899" />
      <rect x="254" y="96" width="38" height="38" rx="6" fill="#10B981" />
      {/* trust row */}
      <rect x="30" y="142" width="36" height="6" rx="3" fill="#E2E8F0" />
      <rect x="72" y="142" width="36" height="6" rx="3" fill="#E2E8F0" />
      <rect x="114" y="142" width="36" height="6" rx="3" fill="#E2E8F0" />
      <rect x="156" y="142" width="36" height="6" rx="3" fill="#E2E8F0" />
    </Frame>
  );
}

function ProductIllustration() {
  return (
    <Frame>
      <defs>
        <linearGradient id="pr-hero" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#14B8A6" />
          <stop offset="100%" stopColor="#7C3AED" />
        </linearGradient>
      </defs>
      <rect x="30" y="20" width="140" height="160" rx="10" fill="#fff" />
      <rect x="40" y="30" width="120" height="70" rx="6" fill="url(#pr-hero)" />
      <circle cx="146" cy="42" r="10" fill="rgba(255,255,255,0.35)" />
      <text x="146" y="46" textAnchor="middle" fill="#fff" fontFamily="'Product Sans','Poppins',sans-serif" fontSize="8" fontWeight="700">SALE</text>
      <rect x="40" y="110" width="90" height="8" rx="3" fill="#06081F" />
      <rect x="40" y="124" width="60" height="6" rx="3" fill="#94A3B8" />
      <rect x="40" y="142" width="48" height="14" rx="7" fill="#06081F" />
      {/* attributes column */}
      <g transform="translate(190,20)">
        <rect x="0" y="0" width="110" height="160" rx="10" fill="#131A3F" />
        <text x="12" y="20" fill="#94A3B8" fontFamily="'JetBrains Mono', monospace" fontSize="8" letterSpacing="1">ATTRIBUTES</text>
        {['Title','Slug','SKU','Category','Variants','Price','Stock','SEO'].map((t,i)=>(
          <g key={t} transform={`translate(12, ${34 + i*14})`}>
            <rect x="0" y="0" width="86" height="8" rx="3" fill="rgba(255,255,255,0.06)" />
            <rect x="0" y="0" width={16 + (i * 7) % 60} height="8" rx="3" fill="#2DD4BF" opacity="0.7" />
          </g>
        ))}
      </g>
    </Frame>
  );
}

function PaymentIllustration() {
  return (
    <Frame>
      <defs>
        <linearGradient id="pay-c" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FBBF24" />
          <stop offset="100%" stopColor="#FF6B47" />
        </linearGradient>
      </defs>
      {/* card */}
      <g transform="translate(28,28) rotate(-6)">
        <rect x="0" y="0" width="170" height="104" rx="14" fill="url(#pay-c)" style={{ filter: 'drop-shadow(0 12px 24px rgba(255,107,71,0.35))' }} />
        <rect x="14" y="18" width="32" height="22" rx="5" fill="rgba(255,255,255,0.4)" />
        <rect x="14" y="62" width="110" height="8" rx="3" fill="rgba(255,255,255,0.55)" />
        <rect x="14" y="78" width="48" height="6" rx="3" fill="rgba(255,255,255,0.4)" />
      </g>
      {/* payment icons */}
      <g transform="translate(210,44)" fontFamily="'Product Sans','Poppins',sans-serif" fontWeight="700" fontSize="9">
        {[
          { l: 'PayFast', c: '#10B981' },
          { l: 'Yoco', c: '#7C3AED' },
          { l: 'PEACH', c: '#F59E0B' },
          { l: 'EFT', c: '#2DD4BF' },
        ].map((p, i) => (
          <g key={p.l} transform={`translate(${(i % 2) * 44}, ${Math.floor(i / 2) * 34})`}>
            <rect x="0" y="0" width="40" height="28" rx="6" fill="#131A3F" stroke="rgba(255,255,255,0.08)" />
            <text x="20" y="17" textAnchor="middle" fill={p.c}>{p.l}</text>
          </g>
        ))}
      </g>
      {/* delivery route */}
      <g transform="translate(20,150)">
        <path d="M0,14 C60,-2 140,30 200,14 C240,4 280,20 300,14" stroke="#2DD4BF" strokeWidth="1.5" fill="none" strokeDasharray="3 4" />
        <circle cx="0" cy="14" r="5" fill="#FBBF24" />
        <g transform="translate(292,4)"><circle r="7" fill="#FF6B47" /><circle r="3" fill="#fff" cy="0" cx="0" /></g>
      </g>
    </Frame>
  );
}

function MarketplaceIllustration() {
  return (
    <Frame>
      <g>
        {[
          { x: 30, l: 'takealot', c: '#0EA5E9' },
          { x: 122, l: 'amazon', c: '#F59E0B' },
          { x: 214, l: 'bidorbuy', c: '#EC4899' },
        ].map((m) => (
          <g key={m.l} transform={`translate(${m.x}, 40)`}>
            <rect x="0" y="0" width="76" height="120" rx="12" fill="#131A3F" stroke="rgba(255,255,255,0.08)" />
            <rect x="12" y="14" width="52" height="52" rx="8" fill={m.c} opacity="0.18" />
            <text x="38" y="46" textAnchor="middle" fill={m.c} fontFamily="'Product Sans','Poppins',sans-serif" fontWeight="700" fontSize="20">{m.l[0].toUpperCase()}</text>
            <rect x="12" y="78" width="52" height="6" rx="3" fill="rgba(255,255,255,0.1)" />
            <rect x="12" y="90" width="38" height="6" rx="3" fill="rgba(255,255,255,0.1)" />
            <circle cx="18" cy="106" r="3" fill="#BEF264" />
            <text x="26" y="110" fill="#BEF264" fontFamily="'JetBrains Mono', monospace" fontSize="7" letterSpacing="1">SYNCED</text>
          </g>
        ))}
      </g>
    </Frame>
  );
}

function ConversionIllustration() {
  return (
    <Frame>
      <defs>
        <linearGradient id="cv-b" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#7C3AED" />
          <stop offset="100%" stopColor="#FF6B47" />
        </linearGradient>
      </defs>
      <text x="20" y="36" fill="#94A3B8" fontFamily="'JetBrains Mono', monospace" fontSize="8" letterSpacing="1">CONVERSION RATE</text>
      <text x="20" y="64" fill="#fff" fontFamily="'Product Sans','Poppins',sans-serif" fontSize="28" fontWeight="700" letterSpacing="-0.03em">3.8%</text>
      <rect x="90" y="48" width="38" height="18" rx="9" fill="rgba(190,242,100,0.15)" stroke="#BEF264" />
      <text x="109" y="60" textAnchor="middle" fill="#BEF264" fontFamily="'JetBrains Mono', monospace" fontSize="9">+62%</text>
      {/* bars */}
      {[0.32, 0.5, 0.42, 0.65, 0.55, 0.82, 0.7, 0.95].map((h, i) => (
        <rect key={i} x={20 + i * 34} y={180 - h * 90} width="22" height={h * 90} rx="4" fill="url(#cv-b)" opacity="0.85" />
      ))}
      {/* target line */}
      <line x1="12" y1="110" x2="304" y2="110" stroke="#2DD4BF" strokeDasharray="3 3" opacity="0.7" />
    </Frame>
  );
}

function JourneyIllustration() {
  const nodes = [
    { x: 30, y: 50, l: 'Ad', c: '#FF6B47' },
    { x: 100, y: 90, l: 'Store', c: '#A78BFA' },
    { x: 170, y: 60, l: 'PDP', c: '#7C3AED' },
    { x: 240, y: 100, l: 'Cart', c: '#14B8A6' },
    { x: 290, y: 50, l: 'Buy', c: '#BEF264' },
  ];
  return (
    <Frame>
      <path d="M30,50 L100,90 L170,60 L240,100 L290,50" stroke="url(#bmc-h)" strokeWidth="1.5" fill="none" strokeDasharray="4 3" />
      {nodes.map((n) => (
        <g key={n.l}>
          <circle cx={n.x} cy={n.y} r="14" fill="#131A3F" stroke={n.c} strokeWidth="2" />
          <circle cx={n.x} cy={n.y} r="5" fill={n.c}>
            <animate attributeName="opacity" values="0.5;1;0.5" dur="1.8s" repeatCount="indefinite" />
          </circle>
          <text x={n.x} y={n.y + 32} textAnchor="middle" fill="#fff" fontFamily="'Product Sans','Poppins',sans-serif" fontSize="11" fontWeight="600">{n.l}</text>
        </g>
      ))}
      <text x="20" y="180" fill="#94A3B8" fontFamily="'JetBrains Mono', monospace" fontSize="8" letterSpacing="1">TOUCHPOINT MAP</text>
    </Frame>
  );
}

function WhatsAppIllustration() {
  return (
    <Frame>
      <defs>
        <linearGradient id="wa-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#25D366" />
          <stop offset="100%" stopColor="#128C7E" />
        </linearGradient>
      </defs>
      <circle cx="56" cy="56" r="28" fill="url(#wa-g)" style={{ filter: 'drop-shadow(0 8px 20px rgba(37,211,102,0.5))' }} />
      <path d="M46 68 L46 44 L66 44 L66 60 L60 60 L54 68 Z" fill="#fff" opacity="0.9" />
      {/* chat bubbles */}
      <g transform="translate(96,32)">
        <rect x="0" y="0" width="180" height="22" rx="11" fill="#131A3F" stroke="rgba(255,255,255,0.08)" />
        <rect x="10" y="7" width="70" height="8" rx="3" fill="rgba(255,255,255,0.4)" />
        <rect x="20" y="30" width="160" height="22" rx="11" fill="#075E54" />
        <rect x="30" y="37" width="120" height="8" rx="3" fill="rgba(255,255,255,0.7)" />
        <rect x="0" y="60" width="110" height="22" rx="11" fill="#131A3F" stroke="rgba(255,255,255,0.08)" />
        <rect x="10" y="67" width="70" height="8" rx="3" fill="rgba(255,255,255,0.4)" />
        <rect x="20" y="90" width="140" height="22" rx="11" fill="#075E54" />
        <rect x="30" y="97" width="100" height="8" rx="3" fill="rgba(255,255,255,0.7)" />
      </g>
      <g transform="translate(20,160)" fontFamily="'JetBrains Mono', monospace" fontSize="8" letterSpacing="1" fill="#94A3B8">
        <circle cx="4" cy="6" r="3" fill="#25D366" />
        <text x="14" y="10">AUTOMATED · HUMAN HANDOFF</text>
      </g>
    </Frame>
  );
}

function SupportIllustration() {
  return (
    <Frame>
      <rect x="20" y="24" width="280" height="152" rx="12" fill="#131A3F" stroke="rgba(255,255,255,0.08)" />
      {/* header */}
      <text x="32" y="46" fill="#94A3B8" fontFamily="'JetBrains Mono', monospace" fontSize="8" letterSpacing="1">INBOX</text>
      <text x="32" y="66" fill="#fff" fontFamily="'Product Sans','Poppins',sans-serif" fontSize="14" fontWeight="700">Support workflow</text>
      {/* tickets */}
      {[
        { c: '#FF6B47', s: 'URGENT', l: 'Payment issue' },
        { c: '#A78BFA', s: 'NEW', l: 'Delivery ETA' },
        { c: '#2DD4BF', s: 'RESOLVED', l: 'Sizing question' },
      ].map((t, i) => (
        <g key={t.l} transform={`translate(32, ${82 + i * 28})`}>
          <rect x="0" y="0" width="256" height="22" rx="6" fill="rgba(255,255,255,0.04)" />
          <rect x="0" y="0" width="3" height="22" fill={t.c} />
          <rect x="14" y="6" width="44" height="10" rx="5" fill={t.c} opacity="0.15" />
          <text x="36" y="14" textAnchor="middle" fill={t.c} fontFamily="'JetBrains Mono', monospace" fontSize="7">{t.s}</text>
          <text x="70" y="15" fill="#E2E8F0" fontFamily="'Product Sans','Poppins',sans-serif" fontSize="11" fontWeight="500">{t.l}</text>
          <circle cx="238" cy="11" r="6" fill="#7C3AED" />
          <text x="238" y="14" textAnchor="middle" fill="#fff" fontFamily="'Product Sans','Poppins',sans-serif" fontSize="7" fontWeight="700">TR</text>
        </g>
      ))}
    </Frame>
  );
}

function LeadIllustration() {
  return (
    <Frame>
      <rect x="40" y="24" width="240" height="152" rx="12" fill="#fff" />
      <text x="56" y="52" fill="#06081F" fontFamily="'Product Sans','Poppins',sans-serif" fontSize="12" fontWeight="700">Get 10% off your first order</text>
      <text x="56" y="70" fill="#64748B" fontFamily="'Product Sans','Poppins',sans-serif" fontSize="9">Drop your email — we’ll send the code.</text>
      {/* input */}
      <rect x="56" y="84" width="170" height="26" rx="6" fill="#F1F5F9" />
      <text x="64" y="100" fill="#94A3B8" fontFamily="'Product Sans','Poppins',sans-serif" fontSize="9">you@example.com</text>
      <rect x="56" y="118" width="90" height="26" rx="6" fill="url(#bmc-h)" />
      <text x="101" y="134" textAnchor="middle" fill="#fff" fontFamily="'Product Sans','Poppins',sans-serif" fontSize="10" fontWeight="700">Get my code</text>
      {/* follow-up node */}
      <g transform="translate(230,120)">
        <circle r="14" fill="#BEF264" />
        <text y="4" textAnchor="middle" fill="#06081F" fontFamily="'Product Sans','Poppins',sans-serif" fontSize="9" fontWeight="700">+3</text>
      </g>
      <text x="210" y="156" textAnchor="middle" fill="#BEF264" fontFamily="'JetBrains Mono', monospace" fontSize="8" letterSpacing="1">FOLLOW-UP FLOW</text>
    </Frame>
  );
}
