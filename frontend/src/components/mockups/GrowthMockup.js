import React from 'react';

/**
 * Growth Marketing mockup: a live-looking dashboard with animated bar chart,
 * pipeline stages and a KPI ring. Pure SVG so it's crisp and light.
 */
export default function GrowthMockup() {
  return (
    <div className="mockup mockup--dark" style={{ aspectRatio: '4/3.2' }}>
      <div className="mockup__glow" aria-hidden />
      <svg viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', display: 'block' }}>
        <defs>
          <linearGradient id="g-bar" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%" stopColor="#7C3AED" />
            <stop offset="100%" stopColor="#FF6B47" />
          </linearGradient>
          <linearGradient id="g-ring" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#14B8A6" />
            <stop offset="100%" stopColor="#7C3AED" />
          </linearGradient>
        </defs>

        {/* Card background */}
        <rect x="0" y="0" width="640" height="512" fill="#0A0E27" />

        {/* Top bar (window chrome) */}
        <g transform="translate(0,0)">
          <rect x="0" y="0" width="640" height="38" fill="#131A3F" />
          <circle cx="20" cy="19" r="5" fill="#FF6B47" />
          <circle cx="40" cy="19" r="5" fill="#FBBF24" />
          <circle cx="60" cy="19" r="5" fill="#2DD4BF" />
          <rect x="244" y="11" width="180" height="16" rx="8" fill="#1E2757" />
          <text x="334" y="22" textAnchor="middle" fill="#94A3B8" fontSize="10" fontFamily="'JetBrains Mono', monospace">growth.rekisa.co.za</text>
        </g>

        {/* Sidebar */}
        <g>
          <rect x="0" y="38" width="140" height="474" fill="#0D1230" />
          <text x="22" y="70" fill="#94A3B8" fontSize="9" fontFamily="'JetBrains Mono', monospace" letterSpacing="1">GROWTH OS</text>
          {['Overview', 'Pipeline', 'Campaigns', 'Outbound', 'Reports'].map((t, i) => (
            <g key={t}>
              <rect x="14" y={90 + i * 40} width="114" height="30" rx="7" fill={i === 0 ? '#1E2757' : 'transparent'} />
              <circle cx="27" cy={105 + i * 40} r="3" fill={i === 0 ? '#FF6B47' : '#475569'} />
              <text x="40" y={109 + i * 40} fill={i === 0 ? '#fff' : '#94A3B8'} fontSize="11" fontFamily="Inter" fontWeight={i === 0 ? 600 : 400}>{t}</text>
            </g>
          ))}
        </g>

        {/* KPI row */}
        <g transform="translate(160,60)">
          {[
            { l: 'Pipeline', v: 'R 2.4M', c: '#2DD4BF' },
            { l: 'MQLs', v: '284', c: '#A78BFA' },
            { l: 'CAC', v: 'R 1,850', c: '#FF6B47' },
          ].map((k, i) => (
            <g key={k.l} transform={`translate(${i * 155},0)`}>
              <rect x="0" y="0" width="140" height="78" rx="12" fill="#131A3F" stroke="rgba(255,255,255,0.06)" />
              <text x="14" y="22" fill="#94A3B8" fontSize="9" fontFamily="'JetBrains Mono', monospace" letterSpacing="1">{k.l.toUpperCase()}</text>
              <text x="14" y="52" fill="#fff" fontSize="22" fontFamily="'Space Grotesk', sans-serif" fontWeight="700" letterSpacing="-0.02em">{k.v}</text>
              <circle cx="120" cy="20" r="4" fill={k.c} />
            </g>
          ))}
        </g>

        {/* Chart panel */}
        <g transform="translate(160,158)">
          <rect x="0" y="0" width="295" height="330" rx="14" fill="#131A3F" stroke="rgba(255,255,255,0.06)" />
          <text x="18" y="28" fill="#fff" fontSize="13" fontFamily="'Space Grotesk', sans-serif" fontWeight="600">Leads by channel</text>
          <text x="18" y="46" fill="#94A3B8" fontSize="10" fontFamily="Inter">Last 8 weeks</text>
          {/* animated bars */}
          {[0.3, 0.55, 0.4, 0.7, 0.5, 0.85, 0.65, 0.95].map((h, i) => (
            <g key={i}>
              <rect
                x={18 + i * 34}
                y={300 - h * 220}
                width="22"
                height={h * 220}
                rx="5"
                fill="url(#g-bar)"
                opacity="0.9"
              >
                <animate attributeName="height" from="0" to={h * 220} dur="1.2s" begin={`${i * 0.08}s`} fill="freeze" />
                <animate attributeName="y" from="300" to={300 - h * 220} dur="1.2s" begin={`${i * 0.08}s`} fill="freeze" />
              </rect>
            </g>
          ))}
          {/* baseline */}
          <line x1="18" y1="302" x2="278" y2="302" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
        </g>

        {/* Pipeline funnel */}
        <g transform="translate(470,158)">
          <rect x="0" y="0" width="156" height="330" rx="14" fill="#131A3F" stroke="rgba(255,255,255,0.06)" />
          <text x="14" y="26" fill="#fff" fontSize="12" fontFamily="'Space Grotesk', sans-serif" fontWeight="600">Pipeline</text>

          {[
            { l: 'ICP-matched', c: '#FF6B47', w: 128 },
            { l: 'Sequenced', c: '#A78BFA', w: 108 },
            { l: 'Meetings', c: '#7C3AED', w: 82 },
            { l: 'Opportunity', c: '#14B8A6', w: 58 },
            { l: 'Won', c: '#BEF264', w: 34 },
          ].map((s, i) => (
            <g key={s.l} transform={`translate(14, ${50 + i * 54})`}>
              <rect x="0" y="0" width={s.w} height="22" rx="6" fill={s.c} opacity="0.9">
                <animate attributeName="width" from="0" to={s.w} dur="1s" begin={`${0.4 + i * 0.15}s`} fill="freeze" />
              </rect>
              <text x="0" y="38" fill="#94A3B8" fontSize="10" fontFamily="Inter">{s.l}</text>
            </g>
          ))}
        </g>
      </svg>
    </div>
  );
}
