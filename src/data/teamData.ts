export interface TeamMember {
  id: string;
  name: string;
  role: string;
  category: string;
  number: string;
  initials: string;
  shortIntro: string;
  responsibilities: string[];
  expertise: string[];
  projectFocus: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: 'anukul-verma',
    name: 'Anukul Verma',
    role: 'Founder',
    category: 'Leadership & Strategy',
    number: '01',
    initials: 'AV',
    shortIntro:
      'Leads overall strategic vision, agency direction, and high-conviction brand positioning across all client partnerships at Digitify.',
    responsibilities: [
      'Brand & Digital Strategy Direction',
      'Client Partnership & Growth Architecture',
      'Creative Thesis & Commercial Alignment',
      'Agency Standards & Deliverable Quality',
    ],
    expertise: [
      'Brand Architecture',
      'Market Positioning',
      'Digital Strategy',
      'Growth Systems',
    ],
    projectFocus:
      'Guides brand repositioning frameworks, strategic roadmaps, and digital engagement models across enterprise and challenger brand clients.',
  },
  {
    id: 'aarti',
    name: 'Aarti',
    role: 'Co-Founder',
    category: 'Leadership & Operations',
    number: '02',
    initials: 'AA',
    shortIntro:
      'Directs agency operations, workflow choreography, and operational excellence to ensure seamless, high-velocity project execution.',
    responsibilities: [
      'Operational Strategy & Delivery Oversight',
      'Cross-Disciplinary Team Orchestration',
      'Client Engagement & Project Management',
      'Resource Planning & Execution Standards',
    ],
    expertise: [
      'Operations Management',
      'Workflow Optimization',
      'Client Relations',
      'Production Timelines',
    ],
    projectFocus:
      'Coordinates multi-disciplinary delivery pipelines spanning design, technical development, and digital campaign rollouts.',
  },
  {
    id: 'nishu',
    name: 'Nishu',
    role: 'Designing',
    category: 'Creative & Visuals',
    number: '03',
    initials: 'NI',
    shortIntro:
      'Specializes in visual identity craftsmanship, editorial graphic systems, and high-impact art direction designed to stand out.',
    responsibilities: [
      'Brand Identity & Visual System Design',
      'Typography, Color Systems & Art Direction',
      'Digital & Social Creative Asset Production',
      'Campaign Visual Storytelling',
    ],
    expertise: [
      'Graphic Design',
      'Identity Systems',
      'Art Direction',
      'Visual Communication',
    ],
    projectFocus:
      'Crafts distinctive brand marks, typography guidelines, collateral packages, and digital marketing creatives.',
  },
  {
    id: 'ravneet-singh',
    name: 'Ravneet Singh',
    role: 'Consultation',
    category: 'Client Advisory',
    number: '04',
    initials: 'RS',
    shortIntro:
      'Advises clients on strategic alignment, digital touchpoint optimization, and structured market communication frameworks.',
    responsibilities: [
      'Strategic Client Consultation & Roadmapping',
      'Market Requirements & Problem Scoping',
      'Brand Alignment & Channel Opportunity Analysis',
      'Executive Stakeholder Advisory',
    ],
    expertise: [
      'Strategic Advisory',
      'Market Opportunity Analysis',
      'Client Roadmapping',
      'Stakeholder Alignment',
    ],
    projectFocus:
      'Partners with brand founders and marketing leaders to diagnose growth bottlenecks and align creative deliverables with business targets.',
  },
  {
    id: 'rahul-verma',
    name: 'Rahul Verma',
    role: 'Digital Marketing',
    category: 'Performance & Growth',
    number: '05',
    initials: 'RV',
    shortIntro:
      'Orchestrates performance media, digital acquisition campaigns, and measurable audience growth systems across digital channels.',
    responsibilities: [
      'Performance Media Strategy & Media Buying',
      'Paid Search & Social Campaign Optimization',
      'Conversion Rate Optimization & Funnel Design',
      'Analytics, Attribution & Growth Reporting',
    ],
    expertise: [
      'Performance Marketing',
      'Paid Social & Search',
      'Funnel Optimization',
      'Digital Analytics',
    ],
    projectFocus:
      'Engineers paid acquisition pipelines, retargeting funnels, and data-driven campaigns designed to maximize return on ad spend.',
  },
  {
    id: 'ashish',
    name: 'Ashish',
    role: 'Web & Development',
    category: 'Engineering & Tech',
    number: '06',
    initials: 'AS',
    shortIntro:
      'Engineers fast, responsive, and aesthetically uncompromising digital web experiences and modern frontend interfaces.',
    responsibilities: [
      'Frontend Web Architecture & Interactive Builds',
      'Responsive Design & Performance Optimization',
      'Accessibility, SEO & Modern Web Standards',
      'Content Systems & Platform Integrations',
    ],
    expertise: [
      'Web Development',
      'Frontend Engineering',
      'Performance Tuning',
      'Modern Web Standards',
    ],
    projectFocus:
      'Develops bespoke agency websites, interactive flagships, and responsive web products built with precision and speed.',
  },
];
