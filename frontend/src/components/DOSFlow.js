import React from 'react';
import { Radio, ShoppingBag, MessageCircle, Settings2, Cloud } from 'lucide-react';

const STAGES = [
  { num: '01', name: 'Attract', Icon: Radio, desc: 'Growth marketing, paid, outbound, content, lead generation' },
  { num: '02', name: 'Sell', Icon: ShoppingBag, desc: 'Ecommerce, conversion, CRM, sales workflows, marketplaces' },
  { num: '03', name: 'Serve', Icon: MessageCircle, desc: 'WhatsApp, customer communication, support, contact centres' },
  { num: '04', name: 'Operate', Icon: Settings2, desc: 'Tools, collaboration, process automation, reporting' },
  { num: '05', name: 'Scale', Icon: Cloud, desc: 'AWS cloud, infrastructure, migration, security, AI-ready' },
];

export default function DOSFlow() {
  return (
    <div className="dos-flow">
      {/* Animated connecting line */}
      <svg className="dos-flow__svg" viewBox="0 0 1200 220" preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <linearGradient id="dos-line" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#FF6B47" />
            <stop offset="25%" stopColor="#7C3AED" />
            <stop offset="55%" stopColor="#14B8A6" />
            <stop offset="85%" stopColor="#2DD4BF" />
            <stop offset="100%" stopColor="#BEF264" />
          </linearGradient>
          <filter id="dos-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="6" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Main flow line — curves gently through 5 stages */}
        <path
          d="M60,110 C220,60 260,160 420,110 C580,60 620,160 780,110 C940,60 980,160 1140,110"
          fill="none"
          stroke="url(#dos-line)"
          strokeWidth="2.5"
          opacity="0.7"
          filter="url(#dos-glow)"
        />

        {/* Traveling particles */}
        {[0, 1, 2, 3].map((i) => (
          <circle key={i} r="5" fill="#fff" filter="url(#dos-glow)">
            <animateMotion
              dur="6s"
              begin={`${i * 1.5}s`}
              repeatCount="indefinite"
              path="M60,110 C220,60 260,160 420,110 C580,60 620,160 780,110 C940,60 980,160 1140,110"
            />
          </circle>
        ))}

        {/* Stage anchor dots */}
        {[60, 330, 600, 870, 1140].map((x, i) => (
          <g key={i}>
            <circle cx={x} cy="110" r="10" fill="#06081F" stroke="url(#dos-line)" strokeWidth="2" />
            <circle cx={x} cy="110" r="3.5" fill="#fff">
              <animate attributeName="opacity" values="0.4;1;0.4" dur={`${2 + i * 0.3}s`} repeatCount="indefinite" />
            </circle>
          </g>
        ))}
      </svg>

      <div className="dos-flow__stages">
        {STAGES.map((s) => (
          <div key={s.num} className="dos-stage-card">
            <div className="dos-stage-card__icon"><s.Icon size={22} /></div>
            <div className="dos-stage-card__num">STAGE {s.num}</div>
            <h3>{s.name}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
