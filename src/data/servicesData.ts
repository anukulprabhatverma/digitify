export interface ServiceItem {
  id: string;
  number: string;
  name: string;
  shortDesc: string;
  fullDesc: string;
  deliverables: string[];
  suitableFor: string[];
}

export const servicesData: ServiceItem[] = [
  {
    id: 'digital-marketing',
    number: '01',
    name: 'Digital Marketing',
    shortDesc: 'End-to-end digital acquisition and holistic audience engagement strategies built for sustainable market presence.',
    fullDesc: 'We develop structured digital marketing frameworks that connect strategy, creative execution, and targeted distribution. Our approach ensures every channel works cohesively to elevate brand awareness and generate qualified market demand.',
    deliverables: [
      'Multi-channel digital marketing roadmap',
      'Audience segmentation & persona mapping',
      'Search engine optimization (SEO) architecture',
      'Content distribution & omnichannel outreach',
      'Funnel audit & conversion path optimization',
    ],
    suitableFor: [
      'Brands scaling their regional or national footprint',
      'Businesses requiring cohesive multi-channel distribution',
      'Modern teams seeking structured customer acquisition journeys',
    ],
  },
  {
    id: 'performance-marketing',
    number: '02',
    name: 'Performance Marketing',
    shortDesc: 'Data-guided paid advertising and media planning engineered to drive measurable conversions and capital efficiency.',
    fullDesc: 'We architect precision paid media campaigns across search, social, and programmatic channels. By combining analytical testing with compelling creative iterations, we focus on maximizing customer acquisition velocity and return on ad spend.',
    deliverables: [
      'Paid search & paid social campaign architecture',
      'Ad creative production & iterative variant testing',
      'Audience retargeting & lookalike segmentation',
      'Conversion tracking & analytics instrumentation',
      'Budget pacing & cost-per-acquisition optimization',
    ],
    suitableFor: [
      'E-commerce & direct-to-consumer businesses',
      'Startups scaling customer acquisition targets',
      'Established brands seeking improved media efficiency',
    ],
  },
  {
    id: 'social-media',
    number: '03',
    name: 'Social Media Management',
    shortDesc: 'Cultivating resonant community spaces through purposeful visual storytelling, strategic curation, and brand voice.',
    fullDesc: 'Social media is more than posting—it is the living pulse of your brand. We shape distinctive brand identities on social platforms through high-fidelity visual communication, narrative-led content calendars, and community engagement.',
    deliverables: [
      'Social brand positioning & aesthetic direction',
      'Monthly editorial content calendars & copywriting',
      'Static, carousel, and short-form video creative',
      'Community management & audience interaction protocols',
      'Monthly engagement & content performance reporting',
    ],
    suitableFor: [
      'Lifestyle, consumer, and corporate brands building cultural relevance',
      'Companies needing consistent, high-standard social creative',
      'Founders seeking a distinguished personal or corporate brand voice',
    ],
  },
  {
    id: 'branding',
    number: '04',
    name: 'Branding & Visual Identity',
    shortDesc: 'Crafting distinctive visual languages, typographic hierarchies, and brand systems that leave a lasting mark.',
    fullDesc: 'We define the core essence of brands and translate them into timeless visual identity systems. From foundational logo marks and color theory to comprehensive brand guidelines, we give businesses the confidence to stand bold in crowded sectors.',
    deliverables: [
      'Core brand positioning & narrative framework',
      'Primary logo, wordmark, and monogram design',
      'Typographic hierarchy & curated color palettes',
      'Comprehensive brand guidelines & design systems',
      'Stationery, print collateral, and packaging direction',
    ],
    suitableFor: [
      'New ventures launching into the market',
      'Established companies undergoing strategic rebranding',
      'Businesses looking to elevate their market perception',
    ],
  },
  {
    id: 'graphic-design',
    number: '05',
    name: 'Graphic Design',
    shortDesc: 'High-impact visual communication across digital touchpoints, marketing collateral, and editorial media.',
    fullDesc: 'Our graphic design practice balances artful minimalism with commercial clarity. We produce cohesive visual collateral—from pitch decks and marketing assets to editorial publication layouts—that uphold exacting standards of polish.',
    deliverables: [
      'High-impact presentation & investor pitch decks',
      'Marketing campaign creative & display collateral',
      'Editorial layout, reports & digital whitepapers',
      'Print collateral, brochures, and event signage',
      'Custom iconography and graphic asset suites',
    ],
    suitableFor: [
      'Marketing teams requiring dedicated design execution',
      'Corporate teams preparing high-stakes investor materials',
      'Brands needing ongoing creative production support',
    ],
  },
  {
    id: 'web-design',
    number: '06',
    name: 'Web Design & Experiences',
    shortDesc: 'Bespoke, responsive digital flagships engineered with editorial typography, smooth motion, and robust code.',
    fullDesc: 'We design and engineer bespoke web experiences that act as the centerpiece of modern brands. By harmonizing editorial visual pacing, smooth interactions, and performant technical architecture, we create websites that are intuitive and memorable.',
    deliverables: [
      'UX research, wireframing & interaction architecture',
      'Bespoke high-fidelity UI design in Figma',
      'Responsive, accessible frontend engineering',
      'Smooth micro-interactions & scroll-driven motion',
      'Technical SEO, performance optimization & CMS integration',
    ],
    suitableFor: [
      'Forward-thinking companies needing a standout digital flagship',
      'Agencies and creative studios upgrading their portfolio presence',
      'Modern product companies demanding uncompromising design standards',
    ],
  },
];
