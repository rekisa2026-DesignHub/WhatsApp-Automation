export const WORKSHOPS = [
  {
    slug: 'growth-marketing',
    name: 'Growth Marketing Workshop',
    duration: '2–3 days',
    delivery: 'In-person or virtual',
    tagline: 'A practical working session to design a more predictable growth system.',
    for: 'Founders, marketing leads and revenue teams that want a clearer, more measurable growth plan.',
    problems: [
      'Inconsistent lead flow and unclear targeting',
      'Paid channels running without a clear plan',
      'Weak follow-up and poor conversion tracking',
      'Limited visibility over CAC, CPL and pipeline metrics',
    ],
    workOn: [
      'Ideal Customer Profile and priority segments',
      'Channel mix across paid, outbound, content and referrals',
      'Landing page structure and offer design',
      'CRM setup and lead follow-up workflows',
      'Measurement plan and reporting cadence',
    ],
    leaveWith: [
      'A clear 90-day growth plan',
      'A prioritised backlog of experiments',
      'A working measurement framework',
      'A CRM setup checklist',
    ],
  },
  {
    slug: 'ecommerce-accelerator',
    name: 'eCommerce Accelerator Workshop',
    duration: '2–3 days',
    delivery: 'In-person or virtual',
    tagline: 'Sharpen your ecommerce strategy across products, pricing, journeys and marketplaces.',
    for: 'Ecommerce founders and teams launching or scaling an online store, including marketplace-first businesses.',
    problems: [
      'Unclear pricing and offer architecture',
      'Fragmented customer journey across store, WhatsApp and social',
      'Weak product pages and conversion rates',
      'No clear plan for marketplace readiness',
    ],
    workOn: [
      'Product catalogue, pricing and offer structure',
      'Storefront design and product page fundamentals',
      'Payments, delivery and marketplace readiness',
      'WhatsApp for discovery, service and follow-up',
      'Conversion optimisation priorities',
    ],
    leaveWith: [
      'A prioritised ecommerce roadmap',
      'A refined product and pricing plan',
      'A customer journey map',
      'A WhatsApp workflow blueprint',
    ],
  },
  {
    slug: 'digital-business-model',
    name: 'Digital Business Model Workshop',
    duration: '2–3 days',
    delivery: 'In-person or virtual',
    tagline: 'Clarify your customer, value, offer and revenue logic — then map it to the systems that support them.',
    for: 'Leadership teams making decisions about direction, offers, pricing and how their business operates digitally.',
    problems: [
      'Unclear customer or value proposition',
      'Product and service portfolio without a clear architecture',
      'Revenue logic that is hard to grow predictably',
      'Operations and tools that do not match the business model',
    ],
    workOn: [
      'Customer segments and jobs to be done',
      'Value proposition and positioning',
      'Offer architecture and pricing structure',
      'Revenue model and unit economics',
      'The digital operating system needed to support the model',
    ],
    leaveWith: [
      'A clear business model canvas',
      'A refined value proposition',
      'An offer and pricing structure',
      'A prioritised list of systems to build or improve',
    ],
  },
];

export function getWorkshopBySlug(slug) {
  return WORKSHOPS.find((w) => w.slug === slug);
}
