import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Star } from 'lucide-react';
import { Reveal } from './Reveal';

const TIERS = [
  {
    id: 'dwy',
    slug: 'DWY',
    name: 'Done With You',
    abbr: 'DWY',
    price: 'R4,850',
    period: 'per month',
    pill: 'For hands-on teams',
    tagline:
      'We guide you through setting up and executing your growth strategy with hands-on support.',
    features: [
      'Growth Strategy Development',
      'ABM List Creation & Setup',
      'Apollo.io Outreach Configuration',
      'Paid Ads Strategy Design',
      'Content Marketing Blueprint',
      'Weekly Strategy Calls',
      'Email & Slack Support',
      'Templates & Frameworks',
    ],
    ctaLabel: 'Start with Done With You',
    accent: 'purple',
    featured: false,
  },
  {
    id: 'dfy',
    slug: 'DFY',
    name: 'Done For You',
    abbr: 'DFY',
    price: 'R13,500',
    period: 'per month',
    pill: 'Most popular',
    tagline:
      'We handle everything while you focus on closing deals. Complete hands-off growth system execution.',
    features: [
      'Complete Strategy Implementation',
      'Full Campaign Management',
      'Outreach Execution & Follow-ups',
      'Paid Ads Management & Optimization',
      'Content Creation & Publishing',
      'Lead Qualification & Handoff',
      'Monthly Performance Reports',
      'Dedicated Account Manager',
    ],
    ctaLabel: 'Start with Done For You',
    accent: 'coral',
    featured: true,
  },
];

export default function PricingTiers({ serviceSlug = 'growth-marketing-enablement' }) {
  return (
    <div className="pricing-tiers">
      {TIERS.map((t, i) => (
        <Reveal delay={i + 1} key={t.id}>
          <div className={`pricing-card${t.featured ? ' pricing-card--featured' : ''} pricing-card--${t.accent}`}>
            {t.featured && (
              <div className="pricing-card__badge">
                <Star size={12} fill="currentColor" strokeWidth={0} /> {t.pill}
              </div>
            )}
            {!t.featured && <div className="pricing-card__pill">{t.pill}</div>}

            <div className="pricing-card__head">
              <div className="pricing-card__abbr">{t.abbr}</div>
              <h3 className="pricing-card__name">{t.name}</h3>
              <p className="pricing-card__tag">{t.tagline}</p>
            </div>

            <div className="pricing-card__price">
              <span className="pricing-card__amount">{t.price}</span>
              <span className="pricing-card__period">{t.period}</span>
            </div>

            <div className="pricing-card__divider" />

            <div className="pricing-card__included">What&rsquo;s included</div>
            <ul className="pricing-card__features">
              {t.features.map((f) => (
                <li key={f}>
                  <span className="pricing-card__check"><Check size={12} strokeWidth={3} /></span>
                  {f}
                </li>
              ))}
            </ul>

            <Link
              to={`/audit?plan=${t.slug}&service=${serviceSlug}`}
              className={t.featured ? 'btn btn--spark pricing-card__cta' : 'btn btn--primary pricing-card__cta'}
              data-testid={`pricing-cta-${t.id}`}
            >
              {t.ctaLabel} <ArrowRight size={16} />
            </Link>

            <div className="pricing-card__note">
              Continue on the audit form to share your details — we&rsquo;ll come back with next steps.
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
