import React from 'react';

/** eCommerce mockup: product page + WhatsApp chat side by side. */
export default function CommerceMockup() {
  return (
    <div className="mockup mockup--dark" style={{ aspectRatio: '4/3.2' }}>
      <div className="mockup__glow" aria-hidden style={{ background: 'radial-gradient(circle at 50% 50%, rgba(255,107,71,0.35), transparent 60%)' }} />
      <svg viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', display: 'block' }}>
        <defs>
          <linearGradient id="c-product" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#7C3AED" />
            <stop offset="100%" stopColor="#FF6B47" />
          </linearGradient>
          <linearGradient id="wa" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#25D366" />
            <stop offset="100%" stopColor="#128C7E" />
          </linearGradient>
        </defs>

        <rect x="0" y="0" width="640" height="512" fill="#0A0E27" />

        {/* Product page card (left) */}
        <g transform="translate(28,32)">
          <rect x="0" y="0" width="340" height="448" rx="18" fill="#fff" />
          {/* product image */}
          <rect x="20" y="20" width="300" height="210" rx="12" fill="url(#c-product)" />
          <circle cx="280" cy="48" r="14" fill="rgba(255,255,255,0.25)" />
          <text x="280" y="52" textAnchor="middle" fill="#fff" fontSize="11" fontFamily="Inter" fontWeight="700">-30%</text>

          {/* title */}
          <text x="20" y="258" fill="#06081F" fontSize="13" fontFamily="'JetBrains Mono', monospace" letterSpacing="1">COLLECTION</text>
          <text x="20" y="288" fill="#06081F" fontSize="22" fontFamily="'Space Grotesk', sans-serif" fontWeight="700" letterSpacing="-0.02em">Premium Series 04</text>

          {/* stars */}
          <g transform="translate(20,300)">
            {[0,1,2,3,4].map((i) => (
              <polygon key={i} transform={`translate(${i*16},0)`} points="6,0 7.4,4.3 12,4.5 8.4,7.4 9.7,12 6,9.1 2.3,12 3.6,7.4 0,4.5 4.6,4.3" fill="#FBBF24" />
            ))}
            <text x="92" y="10" fill="#64748B" fontSize="10" fontFamily="Inter">4.8 • 214 reviews</text>
          </g>

          {/* price */}
          <text x="20" y="346" fill="#06081F" fontSize="26" fontFamily="'Space Grotesk', sans-serif" fontWeight="700">R 1,249</text>
          <text x="110" y="346" fill="#94A3B8" fontSize="14" fontFamily="Inter" textDecoration="line-through">R 1,799</text>

          {/* CTA */}
          <rect x="20" y="366" width="300" height="48" rx="12" fill="#06081F" />
          <text x="170" y="396" textAnchor="middle" fill="#fff" fontSize="13" fontFamily="Inter" fontWeight="600">Add to cart</text>

          {/* micro trust row */}
          <rect x="20" y="424" width="88" height="12" rx="6" fill="#F1F5F9" />
          <rect x="116" y="424" width="88" height="12" rx="6" fill="#F1F5F9" />
          <rect x="212" y="424" width="108" height="12" rx="6" fill="#F1F5F9" />
        </g>

        {/* WhatsApp chat (right) */}
        <g transform="translate(400,64)">
          <rect x="0" y="0" width="212" height="384" rx="22" fill="#0D1230" stroke="rgba(255,255,255,0.08)" />
          {/* header */}
          <rect x="0" y="0" width="212" height="52" rx="22" fill="url(#wa)" />
          <rect x="0" y="22" width="212" height="30" fill="url(#wa)" />
          <circle cx="26" cy="26" r="14" fill="rgba(255,255,255,0.2)" />
          <text x="26" y="31" textAnchor="middle" fill="#fff" fontSize="12" fontFamily="'Space Grotesk', sans-serif" fontWeight="700">R</text>
          <text x="48" y="22" fill="#fff" fontSize="11" fontFamily="Inter" fontWeight="600">Rekisa Support</text>
          <text x="48" y="37" fill="rgba(255,255,255,0.7)" fontSize="9" fontFamily="Inter">online • replies instantly</text>

          {/* messages */}
          <g fontFamily="Inter" fontSize="10">
            {/* customer */}
            <g transform="translate(12,68)">
              <rect x="0" y="0" width="120" height="32" rx="12" fill="#1E2757" />
              <text x="10" y="20" fill="#E2E8F0">Do you have this in Small?</text>
            </g>
            {/* bot */}
            <g transform="translate(58,110)">
              <rect x="0" y="0" width="142" height="46" rx="12" fill="#075E54" />
              <text x="10" y="18" fill="#fff">Yes! Small is in stock.</text>
              <text x="10" y="34" fill="#fff">Reserve now for R 1,249?</text>
            </g>
            {/* quick replies */}
            <g transform="translate(58,166)">
              <rect x="0" y="0" width="66" height="24" rx="12" fill="rgba(45,212,191,0.15)" stroke="#2DD4BF" />
              <text x="33" y="16" textAnchor="middle" fill="#2DD4BF" fontWeight="600">Yes, reserve</text>
              <rect x="74" y="0" width="68" height="24" rx="12" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.15)" />
              <text x="108" y="16" textAnchor="middle" fill="#94A3B8">Send options</text>
            </g>
            {/* customer */}
            <g transform="translate(12,204)">
              <rect x="0" y="0" width="86" height="28" rx="12" fill="#1E2757" />
              <text x="10" y="18" fill="#E2E8F0">Yes, reserve.</text>
            </g>
            {/* bot */}
            <g transform="translate(58,242)">
              <rect x="0" y="0" width="142" height="64" rx="12" fill="#075E54" />
              <text x="10" y="18" fill="#fff">Reserved ✅</text>
              <text x="10" y="34" fill="#fff">Order #4823</text>
              <text x="10" y="50" fill="#fff">Pay: rekisa.co/pay/4823</text>
            </g>
            {/* typing indicator */}
            <g transform="translate(58,314)">
              <rect x="0" y="0" width="46" height="22" rx="11" fill="#075E54" />
              <circle cx="15" cy="11" r="2.5" fill="#fff">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="1.2s" begin="0s" repeatCount="indefinite" />
              </circle>
              <circle cx="23" cy="11" r="2.5" fill="#fff">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="1.2s" begin="0.3s" repeatCount="indefinite" />
              </circle>
              <circle cx="31" cy="11" r="2.5" fill="#fff">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="1.2s" begin="0.6s" repeatCount="indefinite" />
              </circle>
            </g>
          </g>

          {/* input */}
          <rect x="12" y="350" width="188" height="24" rx="12" fill="rgba(255,255,255,0.06)" />
        </g>
      </svg>
    </div>
  );
}
