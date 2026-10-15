import React from 'react';

/** AWS Cloud mockup: infrastructure architecture diagram with animated data flow. */
export default function CloudMockup() {
  return (
    <div className="mockup mockup--dark" style={{ aspectRatio: '4/3.2' }}>
      <div className="mockup__glow" aria-hidden style={{ background: 'radial-gradient(circle at 50% 50%, rgba(20,184,166,0.35), transparent 60%)' }} />
      <svg viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', display: 'block' }}>
        <defs>
          <linearGradient id="cl-line" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#14B8A6" />
            <stop offset="100%" stopColor="#7C3AED" />
          </linearGradient>
        </defs>

        <rect x="0" y="0" width="640" height="512" fill="#0A0E27" />

        {/* window chrome */}
        <rect x="0" y="0" width="640" height="38" fill="#131A3F" />
        <circle cx="20" cy="19" r="5" fill="#FF6B47" />
        <circle cx="40" cy="19" r="5" fill="#FBBF24" />
        <circle cx="60" cy="19" r="5" fill="#2DD4BF" />
        <text x="334" y="22" textAnchor="middle" fill="#94A3B8" fontSize="10" fontFamily="'JetBrains Mono', monospace">aws.rekisa.co.za/architecture</text>

        <g fontFamily="Inter" fontSize="9">
          {/* title */}
          <text x="32" y="72" fill="#fff" fontSize="14" fontFamily="'Space Grotesk', sans-serif" fontWeight="700" letterSpacing="-0.02em">Production architecture</text>
          <text x="32" y="90" fill="#94A3B8" fontSize="10">af-south-1 · 3 AZs · multi-region backup</text>

          {/* region containers */}
          <g stroke="rgba(255,255,255,0.08)" strokeDasharray="4 4" fill="none">
            <rect x="32" y="106" width="576" height="378" rx="16" />
          </g>

          {/* Cloudfront */}
          <g transform="translate(58,140)">
            <rect x="0" y="0" width="128" height="60" rx="10" fill="#131A3F" stroke="rgba(255,255,255,0.1)" />
            <rect x="12" y="12" width="22" height="22" rx="6" fill="rgba(255,107,71,0.15)" />
            <text x="23" y="27" textAnchor="middle" fill="#FF6B47" fontSize="10" fontWeight="700">CF</text>
            <text x="44" y="22" fill="#fff" fontWeight="600">CloudFront</text>
            <text x="44" y="36" fill="#94A3B8">Global CDN</text>
            <circle cx="116" cy="14" r="3" fill="#2DD4BF" />
          </g>

          {/* ALB */}
          <g transform="translate(214,140)">
            <rect x="0" y="0" width="128" height="60" rx="10" fill="#131A3F" stroke="rgba(255,255,255,0.1)" />
            <rect x="12" y="12" width="22" height="22" rx="6" fill="rgba(124,58,237,0.15)" />
            <text x="23" y="27" textAnchor="middle" fill="#A78BFA" fontSize="10" fontWeight="700">LB</text>
            <text x="44" y="22" fill="#fff" fontWeight="600">Load Balancer</text>
            <text x="44" y="36" fill="#94A3B8">Application</text>
            <circle cx="116" cy="14" r="3" fill="#2DD4BF" />
          </g>

          {/* WAF */}
          <g transform="translate(370,140)">
            <rect x="0" y="0" width="128" height="60" rx="10" fill="#131A3F" stroke="rgba(255,255,255,0.1)" />
            <rect x="12" y="12" width="22" height="22" rx="6" fill="rgba(20,184,166,0.15)" />
            <text x="23" y="27" textAnchor="middle" fill="#2DD4BF" fontSize="10" fontWeight="700">WAF</text>
            <text x="44" y="22" fill="#fff" fontWeight="600">Web Firewall</text>
            <text x="44" y="36" fill="#94A3B8">Security</text>
            <circle cx="116" cy="14" r="3" fill="#2DD4BF" />
          </g>

          {/* Cognito */}
          <g transform="translate(526,140)">
            <rect x="-58" y="0" width="128" height="60" rx="10" fill="#131A3F" stroke="rgba(255,255,255,0.1)" />
            <rect x="-46" y="12" width="22" height="22" rx="6" fill="rgba(251,191,36,0.15)" />
            <text x="-35" y="27" textAnchor="middle" fill="#FBBF24" fontSize="10" fontWeight="700">ID</text>
            <text x="-14" y="22" fill="#fff" fontWeight="600">Cognito</text>
            <text x="-14" y="36" fill="#94A3B8">Identity</text>
            <circle cx="58" cy="14" r="3" fill="#2DD4BF" />
          </g>

          {/* Middle row: compute + Connect */}
          <g transform="translate(58,232)">
            <rect x="0" y="0" width="282" height="116" rx="12" fill="#0D1230" stroke="rgba(255,255,255,0.06)" />
            <text x="14" y="22" fill="#94A3B8" fontSize="9" fontFamily="'JetBrains Mono', monospace" letterSpacing="1">ECS FARGATE · 3 SERVICES</text>
            {/* pods */}
            {[0, 1, 2].map((i) => (
              <g key={i} transform={`translate(${16 + i * 88},40)`}>
                <rect x="0" y="0" width="78" height="64" rx="9" fill="#131A3F" stroke="rgba(20,184,166,0.2)" />
                <rect x="10" y="10" width="58" height="6" rx="3" fill="rgba(45,212,191,0.4)" />
                <rect x="10" y="22" width="40" height="6" rx="3" fill="rgba(124,58,237,0.4)" />
                <circle cx="14" cy="48" r="3" fill="#2DD4BF">
                  <animate attributeName="opacity" values="0.3;1;0.3" dur="1.5s" begin={`${i * 0.4}s`} repeatCount="indefinite" />
                </circle>
                <text x="24" y="52" fill="#94A3B8" fontSize="8">running</text>
              </g>
            ))}
          </g>

          {/* Amazon Connect */}
          <g transform="translate(370,232)">
            <rect x="0" y="0" width="212" height="116" rx="12" fill="#0D1230" stroke="rgba(255,255,255,0.06)" />
            <text x="14" y="22" fill="#94A3B8" fontSize="9" fontFamily="'JetBrains Mono', monospace" letterSpacing="1">AMAZON CONNECT</text>
            <text x="14" y="46" fill="#fff" fontSize="14" fontFamily="'Space Grotesk', sans-serif" fontWeight="600">Contact centre</text>
            {/* channels */}
            <g transform="translate(14,58)">
              {['Voice', 'Chat', 'WhatsApp'].map((c, i) => (
                <g key={c} transform={`translate(${i * 60},0)`}>
                  <rect x="0" y="0" width="52" height="22" rx="11" fill="rgba(124,58,237,0.15)" stroke="rgba(124,58,237,0.4)" />
                  <text x="26" y="14" textAnchor="middle" fill="#A78BFA" fontSize="9" fontWeight="600">{c}</text>
                </g>
              ))}
            </g>
            <text x="14" y="104" fill="#2DD4BF" fontSize="9" fontFamily="'JetBrains Mono', monospace">● live · 12 agents online</text>
          </g>

          {/* Bottom row: RDS + S3 + Bedrock */}
          <g transform="translate(58,368)">
            <rect x="0" y="0" width="166" height="96" rx="12" fill="#131A3F" stroke="rgba(255,255,255,0.08)" />
            <text x="14" y="22" fill="#94A3B8" fontSize="9" fontFamily="'JetBrains Mono', monospace" letterSpacing="1">RDS · POSTGRES</text>
            <text x="14" y="48" fill="#fff" fontSize="20" fontFamily="'Space Grotesk', sans-serif" fontWeight="700">Multi-AZ</text>
            <text x="14" y="78" fill="#2DD4BF" fontSize="9">● Encrypted · 7-day PITR</text>
          </g>
          <g transform="translate(238,368)">
            <rect x="0" y="0" width="166" height="96" rx="12" fill="#131A3F" stroke="rgba(255,255,255,0.08)" />
            <text x="14" y="22" fill="#94A3B8" fontSize="9" fontFamily="'JetBrains Mono', monospace" letterSpacing="1">S3 · OBJECT STORE</text>
            <text x="14" y="48" fill="#fff" fontSize="20" fontFamily="'Space Grotesk', sans-serif" fontWeight="700">2.4 TB</text>
            <text x="14" y="78" fill="#FBBF24" fontSize="9">● Versioned · IA tier</text>
          </g>
          <g transform="translate(418,368)">
            <rect x="0" y="0" width="166" height="96" rx="12" fill="#131A3F" stroke="rgba(255,255,255,0.08)" />
            <text x="14" y="22" fill="#94A3B8" fontSize="9" fontFamily="'JetBrains Mono', monospace" letterSpacing="1">BEDROCK · AI</text>
            <text x="14" y="48" fill="#fff" fontSize="20" fontFamily="'Space Grotesk', sans-serif" fontWeight="700">Ready</text>
            <text x="14" y="78" fill="#FF6B47" fontSize="9">● Foundation models</text>
          </g>

          {/* Connecting lines with animated dashes */}
          <g fill="none" stroke="url(#cl-line)" strokeWidth="1.5" opacity="0.6">
            <path d="M186,170 L214,170" strokeDasharray="4 4">
              <animate attributeName="stroke-dashoffset" values="8;0" dur="0.8s" repeatCount="indefinite" />
            </path>
            <path d="M342,170 L370,170" strokeDasharray="4 4">
              <animate attributeName="stroke-dashoffset" values="8;0" dur="0.8s" repeatCount="indefinite" />
            </path>
            <path d="M198,200 L198,232" strokeDasharray="4 4">
              <animate attributeName="stroke-dashoffset" values="8;0" dur="0.8s" repeatCount="indefinite" />
            </path>
            <path d="M198,348 L141,368" strokeDasharray="4 4">
              <animate attributeName="stroke-dashoffset" values="8;0" dur="0.8s" repeatCount="indefinite" />
            </path>
            <path d="M198,348 L321,368" strokeDasharray="4 4">
              <animate attributeName="stroke-dashoffset" values="8;0" dur="0.8s" repeatCount="indefinite" />
            </path>
            <path d="M476,348 L501,368" strokeDasharray="4 4">
              <animate attributeName="stroke-dashoffset" values="8;0" dur="0.8s" repeatCount="indefinite" />
            </path>
          </g>
        </g>
      </svg>
    </div>
  );
}
