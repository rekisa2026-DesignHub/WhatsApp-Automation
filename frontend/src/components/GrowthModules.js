import React from 'react';
import { TrendingUp, Megaphone, Send, Magnet, PenLine, LifeBuoy, Check } from 'lucide-react';
import { Reveal } from './Reveal';

const MODULES = [
  {
    num: '01',
    Icon: TrendingUp,
    accent: 'coral',
    title: 'Growth Marketing Strategy',
    desc: 'Master the fundamentals of scalable business growth with proven frameworks used by businesses that want to grow.',
    items: ['Market Analysis', 'Customer Profiling', 'Competitive Intelligence', 'Growth Roadmap'],
  },
  {
    num: '02',
    Icon: Megaphone,
    accent: 'purple',
    title: 'Paid Ads Strategy',
    desc: 'Generate qualified leads consistently with Google Ads, LinkedIn, and Meta campaigns optimised for lead generation and sales.',
    items: ['Google Ads Setup', 'LinkedIn Targeting', 'Meta Campaigns', 'Budget Optimisation'],
  },
  {
    num: '03',
    Icon: Send,
    accent: 'teal',
    title: 'Cold Outreach System',
    desc: 'Build relationships and book meetings with decision-makers through personalised, high-converting outreach sequences.',
    items: ['Apollo.io Setup', 'Email Sequences', 'LinkedIn Outreach', 'Follow-up Systems'],
  },
  {
    num: '04',
    Icon: Magnet,
    accent: 'amber',
    title: 'Inbound Marketing Engine',
    desc: 'Attract your ideal customers through valuable content, SEO optimisation and thought leadership positioning.',
    items: ['Content Strategy', 'SEO Optimisation', 'Lead Magnets', 'Marketing Automation'],
  },
  {
    num: '05',
    Icon: PenLine,
    accent: 'lime',
    title: 'Content Generation System',
    desc: 'Create compelling content that educates, engages and converts your target audience into paying customers.',
    items: ['Content Calendar', 'Blog Writing', 'Social Media'],
  },
  {
    num: '06',
    Icon: LifeBuoy,
    accent: 'coral',
    title: 'Advanced Support & Optimisation',
    desc: 'Ongoing support, monthly strategy calls and continuous optimisation to ensure sustained growth and success.',
    items: ['Monthly Calls', 'Performance Reviews', 'Strategy Updates', 'Priority Support'],
  },
];

export default function GrowthModules() {
  return (
    <div className="gm-modules">
      {MODULES.map((m, i) => (
        <Reveal delay={(i % 3) + 1} key={m.num}>
          <div className={`gm-module gm-module--${m.accent}`}>
            <div className="gm-module__head">
              <div className="gm-module__icon"><m.Icon size={22} /></div>
              <div className="gm-module__num">MODULE {m.num}</div>
            </div>
            <h3 className="gm-module__title">{m.title}</h3>
            <p className="gm-module__desc">{m.desc}</p>
            <ul className="gm-module__list">
              {m.items.map((item) => (
                <li key={item}>
                  <span className="gm-module__check"><Check size={12} strokeWidth={3} /></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
