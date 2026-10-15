import React from 'react';
import { Radio, ShoppingBag, MessageCircle, Settings2, Cloud, ArrowRight } from 'lucide-react';

const stages = [
  { num: '01', name: 'Attract', Icon: Radio, desc: 'Growth marketing, paid media, outbound, content, lead generation' },
  { num: '02', name: 'Sell', Icon: ShoppingBag, desc: 'Ecommerce, conversion journeys, CRM, sales workflows, marketplaces' },
  { num: '03', name: 'Serve', Icon: MessageCircle, desc: 'WhatsApp automation, customer communication, support, contact centres' },
  { num: '04', name: 'Operate', Icon: Settings2, desc: 'Business tools, team collaboration, process automation, reporting' },
  { num: '05', name: 'Scale', Icon: Cloud, desc: 'AWS cloud, infrastructure, migration, security, optimisation, AI readiness' },
];

export default function DOSDiagram() {
  return (
    <div className="dos-diagram" role="list" aria-label="Digital Operating System stages">
      {stages.map((s, i) => (
        <div key={s.num} className="dos-stage" role="listitem">
          <div className="dos-stage__icon"><s.Icon size={22} /></div>
          <div className="dos-stage__num">STAGE {s.num}</div>
          <h3>{s.name}</h3>
          <p>{s.desc}</p>
          {i < stages.length - 1 && (
            <ArrowRight size={22} className="dos-arrow" aria-hidden />
          )}
        </div>
      ))}
    </div>
  );
}
