import React from 'react';

/** Audit mockup: checklist / scorecard UI, used on Home hero column + Audit page. */
export default function AuditMockup() {
  return (
    <div className="mockup mockup--dark" style={{ aspectRatio: '4/4.6' }}>
      <div className="mockup__glow" aria-hidden style={{ background: 'radial-gradient(circle at 50% 50%, rgba(190,242,100,0.25), transparent 60%)' }} />
      <svg viewBox="0 0 480 552" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', display: 'block' }}>
        <defs>
          <linearGradient id="a-ring" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#BEF264" />
            <stop offset="50%" stopColor="#2DD4BF" />
            <stop offset="100%" stopColor="#7C3AED" />
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="480" height="552" fill="#0A0E27" />

        {/* window chrome */}
        <rect x="0" y="0" width="480" height="36" fill="#131A3F" />
        <circle cx="18" cy="18" r="4" fill="#FF6B47" />
        <circle cx="34" cy="18" r="4" fill="#FBBF24" />
        <circle cx="50" cy="18" r="4" fill="#2DD4BF" />
        <text x="240" y="21" textAnchor="middle" fill="#94A3B8" fontSize="9" fontFamily="'JetBrains Mono', monospace">audit report — Acme Trading</text>

        <g fontFamily="Inter">
          {/* header */}
          <text x="26" y="70" fill="#94A3B8" fontSize="9" fontFamily="'JetBrains Mono', monospace" letterSpacing="1">DIGITAL OPERATING SYSTEM AUDIT</text>
          <text x="26" y="96" fill="#fff" fontSize="20" fontFamily="'Space Grotesk', sans-serif" fontWeight="700" letterSpacing="-0.02em">System Score</text>

          {/* Score ring */}
          <g transform="translate(240,196)">
            <circle r="70" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="12" />
            <circle
              r="70"
              fill="none"
              stroke="url(#a-ring)"
              strokeWidth="12"
              strokeLinecap="round"
              strokeDasharray="440"
              strokeDashoffset="170"
              transform="rotate(-90)"
            >
              <animate attributeName="stroke-dashoffset" from="440" to="170" dur="1.6s" fill="freeze" />
            </circle>
            <text x="0" y="-6" textAnchor="middle" fill="#fff" fontFamily="'Space Grotesk', sans-serif" fontSize="36" fontWeight="700" letterSpacing="-0.03em">62</text>
            <text x="0" y="18" textAnchor="middle" fill="#94A3B8" fontSize="10" fontFamily="'JetBrains Mono', monospace">out of 100</text>
          </g>

          {/* dimension scores */}
          <g transform="translate(26,306)">
            <text x="0" y="0" fill="#94A3B8" fontSize="9" fontFamily="'JetBrains Mono', monospace" letterSpacing="1">BY DIMENSION</text>
            {[
              { l: 'Attract', v: 78, c: '#FF6B47' },
              { l: 'Sell', v: 54, c: '#A78BFA' },
              { l: 'Serve', v: 42, c: '#7C3AED' },
              { l: 'Operate', v: 68, c: '#14B8A6' },
              { l: 'Scale', v: 71, c: '#BEF264' },
            ].map((d, i) => (
              <g key={d.l} transform={`translate(0, ${18 + i * 32})`}>
                <text x="0" y="10" fill="#fff" fontSize="11" fontWeight="600">{d.l}</text>
                <rect x="90" y="2" width="288" height="10" rx="5" fill="rgba(255,255,255,0.06)" />
                <rect x="90" y="2" width={(288 * d.v) / 100} height="10" rx="5" fill={d.c}>
                  <animate attributeName="width" from="0" to={(288 * d.v) / 100} dur="1.2s" begin={`${0.3 + i * 0.15}s`} fill="freeze" />
                </rect>
                <text x="390" y="10" fill="#94A3B8" fontSize="10" fontFamily="'JetBrains Mono', monospace">{d.v}</text>
              </g>
            ))}
          </g>

          {/* recommendations */}
          <g transform="translate(26,496)">
            <rect x="0" y="0" width="430" height="44" rx="10" fill="rgba(255,107,71,0.08)" stroke="rgba(255,107,71,0.3)" />
            <circle cx="22" cy="22" r="10" fill="rgba(255,107,71,0.2)" />
            <text x="22" y="27" textAnchor="middle" fill="#FF6B47" fontSize="11" fontWeight="700">1</text>
            <text x="46" y="20" fill="#fff" fontSize="11" fontWeight="600">Priority: WhatsApp automation for post-sale service</text>
            <text x="46" y="34" fill="#94A3B8" fontSize="9">Est. impact: +18% CSAT · 4-week rollout</text>
          </g>
        </g>
      </svg>
    </div>
  );
}
