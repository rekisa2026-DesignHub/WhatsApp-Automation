import React from 'react';

/** Workshop mockup: sticky-note wall / whiteboard visual. */
export default function WorkshopMockup() {
  return (
    <div className="mockup mockup--dark" style={{ aspectRatio: '4/3' }}>
      <div className="mockup__glow" aria-hidden style={{ background: 'radial-gradient(circle at 50% 50%, rgba(251,191,36,0.25), transparent 60%)' }} />
      <svg viewBox="0 0 640 480" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', display: 'block' }}>
        <rect x="0" y="0" width="640" height="480" fill="#0A0E27" />
        {/* whiteboard */}
        <rect x="32" y="32" width="576" height="416" rx="16" fill="#0D1230" stroke="rgba(255,255,255,0.06)" />
        {/* grid */}
        <g stroke="rgba(255,255,255,0.04)">
          {[80, 128, 176, 224, 272, 320, 368, 416].map((y) => <line key={y} x1="32" y1={y} x2="608" y2={y} />)}
          {[80, 128, 176, 224, 272, 320, 368, 416, 464, 512, 560].map((x) => <line key={x} x1={x} y1="32" x2={x} y2="448" />)}
        </g>

        {/* column headers */}
        <g fontFamily="'JetBrains Mono', monospace" fontSize="9" fill="#94A3B8" letterSpacing="1">
          <text x="120" y="64">ATTRACT</text>
          <text x="260" y="64">CONVERT</text>
          <text x="400" y="64">RETAIN</text>
          <text x="520" y="64">GROW</text>
        </g>

        {/* sticky notes */}
        <g fontFamily="Inter" fontSize="10" fill="#06081F" fontWeight="600">
          {[
            { x: 76, y: 96, c: '#FBBF24', t1: 'LinkedIn', t2: 'outreach' },
            { x: 200, y: 96, c: '#FF6B47', t1: 'Storefront', t2: 'redesign' },
            { x: 340, y: 96, c: '#BEF264', t1: 'WhatsApp', t2: 'follow-up' },
            { x: 480, y: 96, c: '#2DD4BF', t1: 'Referral', t2: 'engine' },
            { x: 76, y: 220, c: '#A78BFA', t1: 'Landing', t2: 'pages' },
            { x: 200, y: 220, c: '#FF6B47', t1: 'Product', t2: 'bundles' },
            { x: 340, y: 220, c: '#FBBF24', t1: 'NPS', t2: 'programme' },
            { x: 480, y: 220, c: '#BEF264', t1: 'Case', t2: 'studies' },
            { x: 76, y: 344, c: '#2DD4BF', t1: 'Paid', t2: 'retargeting' },
            { x: 200, y: 344, c: '#A78BFA', t1: 'Cart', t2: 'recovery' },
            { x: 340, y: 344, c: '#FF6B47', t1: 'Loyalty', t2: 'tiers' },
            { x: 480, y: 344, c: '#FBBF24', t1: 'Partner', t2: 'programme' },
          ].map((n, i) => (
            <g key={i} transform={`translate(${n.x},${n.y}) rotate(${(i % 3 - 1) * 3})`}>
              <rect x="0" y="0" width="96" height="96" rx="6" fill={n.c} style={{ filter: 'drop-shadow(0 6px 10px rgba(0,0,0,0.35))' }}>
                <animate attributeName="opacity" from="0" to="1" dur="0.4s" begin={`${i * 0.06}s`} fill="freeze" />
              </rect>
              <text x="12" y="32" fontSize="12" fontWeight="700">{n.t1}</text>
              <text x="12" y="48" fontSize="11">{n.t2}</text>
            </g>
          ))}
        </g>
      </svg>
    </div>
  );
}
