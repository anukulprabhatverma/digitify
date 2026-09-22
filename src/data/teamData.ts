export interface TeamMember {
  id: string;
  name: string;
  role: string;
  specialisation: string;
  category: string;
  number: string;
  initials: string;
  shortIntro: string;
  experience?: string;
  image?: string;
  isFounder?: boolean;
  responsibilities: string[];
  expertise: string[];
  projectFocus: string;
}

export const teamMembers: TeamMember[] = [
  /* ━━━━━━━━━━━━━━━━━━━━
     01 — ANUKUL PRABHAT VERMA
     ━━━━━━━━━━━━━━━━━━━━ */
  {
    id: 'anukul-prabhat-verma',
    name: 'Anukul Prabhat Verma',
    role: 'FOUNDER & CEO',
    specialisation: 'Strategy & Digital Growth',
    category: 'Agency Leadership',
    number: '01',
    initials: 'AV',
    isFounder: true,
    experience: '6+ Years',
    image: '/images/team/anukul.jpg',
    shortIntro:
      "Leads Digitify's overall direction, strategy and digital growth. Focuses on building strong digital presence, connecting creative execution with business objectives, and turning ideas into practical growth systems.",
    responsibilities: [
      'Agency Direction, Strategic Vision & Brand Positioning',
      'Branding, Digital Strategy & Creative Execution Architecture',
      'Client Growth Systems & Commercial Strategy Alignment',
      'Executive Quality Oversight Across All Agency Deliverables',
    ],
    expertise: [
      'Digital Strategy',
      'Brand Architecture',
      'Digital Growth Systems',
      'Creative Execution',
      'Executive Advisory',
    ],
    projectFocus:
      'Directs overall brand strategy and digital roadmaps, helping businesses establish a commanding presence and move towards measurable growth.',
  },

  /* ━━━━━━━━━━━━━━━━━━━━
     02 — AARTI KUMARI
     ━━━━━━━━━━━━━━━━━━━━ */
  {
    id: 'aarti-kumari',
    name: 'Aarti Kumari',
    role: 'CO-FOUNDER & OPERATIONS',
    specialisation: 'Leadership & Operations',
    category: 'Agency Leadership',
    number: '02',
    initials: 'AK',
    isFounder: true,
    image: '/images/team/aarti.png',
    shortIntro:
      "Leads the internal operations and keeps projects, people and execution aligned. She works across the team to maintain consistency, coordination and smooth delivery from planning to completion.",
    responsibilities: [
      'Day-to-Day Agency Operations & Delivery Governance',
      'Cross-Disciplinary Team Coordination & Project Planning',
      'Workflow Discipline from Planning to Completion',
      'Internal Resource Scheduling & Operational Standards',
    ],
    expertise: [
      'Agency Leadership',
      'Operations Management',
      'Project Planning',
      'Team Coordination',
      'Delivery Alignment',
    ],
    projectFocus:
      'Orchestrates operational workflows and cross-team choreography to ensure complex initiatives execute smoothly and stay aligned.',
  },

  /* ━━━━━━━━━━━━━━━━━━━━
     03 — NISHU KUMAR
     ━━━━━━━━━━━━━━━━━━━━ */
  {
    id: 'nishu-kumar',
    name: 'Nishu Kumar',
    role: 'UI/UX EXPERT',
    specialisation: 'Product Experience & Interface Design',
    category: 'Digital Experience & Design',
    number: '03',
    initials: 'NK',
    experience: '6–7 Years',
    image: '/images/team/nishu.png',
    shortIntro:
      "Brings extensive experience in UI/UX design, creating intuitive digital experiences that balance usability, visual clarity and business goals.",
    responsibilities: [
      'Digital Product & Web Experience Architecture',
      'Translating Complex Requirements into Intuitive Interfaces',
      'Information Hierarchy, Wireframing & Design Systems',
      'Interaction Design, Usability & Responsive Clarity',
    ],
    expertise: [
      'UI/UX Design',
      'Interface Architecture',
      'Design Systems',
      'User Flows',
      'Usability Optimization',
    ],
    projectFocus:
      'Designs purposeful digital experiences that balance structural discipline, intuitive usability, and visual clarity across web platforms.',
  },

  /* ━━━━━━━━━━━━━━━━━━━━
     04 — RAVNEET SINGH
     ━━━━━━━━━━━━━━━━━━━━ */
  {
    id: 'ravneet-singh',
    name: 'Ravneet Singh',
    role: 'ADVISORY & CONSULTATION',
    specialisation: 'Strategic Advisory',
    category: 'Strategic Advisory',
    number: '04',
    initials: 'RS',
    image: '/images/team/ravneet.jpg',
    shortIntro:
      "Supports Digitify with strategic consultation and an outside perspective, helping shape decisions, refine direction and approach projects with greater clarity.",
    responsibilities: [
      'External Strategic Consultation & Decision Perspective',
      'Evaluating Business Opportunities & Strategic Roadmaps',
      'Advising on Commercial & Project Conversations',
      'Independent Sounding Board for Agency Leadership',
    ],
    expertise: [
      'Strategic Consultation',
      'Decision Advisory',
      'Opportunity Evaluation',
      'Commercial Perspective',
    ],
    projectFocus:
      'Brings an objective outside view to strategic conversations, helping leadership evaluate opportunities and make high-clarity decisions.',
  },

  /* ━━━━━━━━━━━━━━━━━━━━
     05 — RAHUL VERMA
     ━━━━━━━━━━━━━━━━━━━━ */
  {
    id: 'rahul-verma',
    name: 'Rahul Verma',
    role: 'DIGITAL MARKETING CONSULTANT',
    specialisation: 'Performance & Growth',
    category: 'Growth & Marketing',
    number: '05',
    initials: 'RV',
    image: '/images/team/rahul.png',
    shortIntro:
      "Works across digital marketing and growth strategy, helping brands identify the right channels, campaigns and opportunities to build a stronger digital presence.",
    responsibilities: [
      'Digital Marketing Direction & Campaign Thinking',
      'Connecting Business Objectives with Practical Strategy',
      'Growth-Focused Marketing Execution Frameworks',
      'Audience Acquisition & Performance Strategy',
    ],
    expertise: [
      'Digital Marketing',
      'Marketing Strategy',
      'Campaign Thinking',
      'Performance & Growth',
      'Channel Alignment',
    ],
    projectFocus:
      'Contributes to strategic marketing initiatives, campaign ideation, and growth-focused execution aligned with commercial objectives.',
  },

  /* ━━━━━━━━━━━━━━━━━━━━
     06 — SHIVANSH BORA
     ━━━━━━━━━━━━━━━━━━━━ */
  {
    id: 'shivansh-bora',
    name: 'Shivansh Bora',
    role: 'CREATIVE LEAD',
    specialisation: 'Creative Direction · Visuals',
    category: 'Creative Leadership',
    number: '06',
    initials: 'SB',
    shortIntro:
      'Manages the creative side of projects and helps maintain consistency across visual communication. Shivansh works across ideas, creative direction and execution to turn strategic thinking into engaging visual work.',
    responsibilities: [
      'Creative Project Management & Direction',
      'Visual Consistency Across Brand Communications',
      'Concept Ideation & Creative Direction Alignment',
      'Transforming Strategic Thinking into Engaging Visuals',
    ],
    expertise: [
      'Creative Leadership',
      'Creative Direction',
      'Visual Communication',
      'Concept Ideation',
    ],
    projectFocus:
      'Oversees creative delivery across projects, ensuring visual consistency and turning strategic concepts into striking creative work.',
  },

  /* ━━━━━━━━━━━━━━━━━━━━
     07 — NIKHIL NAUTIYAL
     ━━━━━━━━━━━━━━━━━━━━ */
  {
    id: 'nikhil-nautiyal',
    name: 'Nikhil Nautiyal',
    role: 'GRAPHIC DESIGNER',
    specialisation: 'Visual Design · Communication',
    category: 'Visual Design',
    number: '07',
    initials: 'NN',
    shortIntro:
      'Creates visual communication across brand and digital touchpoints, translating ideas into clean, purposeful and engaging graphic design.',
    responsibilities: [
      'Brand & Digital Touchpoint Visual Design',
      'Translating Ideas into Clean Graphic Compositions',
      'Typography, Palette Alignment & Asset Layouts',
      'Marketing & Brand Collateral Creation',
    ],
    expertise: [
      'Graphic Design',
      'Visual Communication',
      'Brand Assets',
      'Layout Composition',
    ],
    projectFocus:
      'Crafts clean, purposeful visual communication across brand materials, digital touchpoints, and marketing assets.',
  },

  /* ━━━━━━━━━━━━━━━━━━━━
     08 — ROSHAN SHARMA
     ━━━━━━━━━━━━━━━━━━━━ */
  {
    id: 'roshan-sharma',
    name: 'Roshan Sharma',
    role: 'GRAPHIC DESIGNER',
    specialisation: 'Visual Design · Creative Execution',
    category: 'Visual Design',
    number: '08',
    initials: 'RS',
    shortIntro:
      'Works across graphic design and creative production, helping transform concepts into polished visual assets for digital and brand communication.',
    responsibilities: [
      'Graphic Design & Creative Asset Production',
      'Transforming Concepts into Polished Visuals',
      'Digital Asset Sizing & Multi-Channel Adaptation',
      'Visual Execution for Campaigns & Brands',
    ],
    expertise: [
      'Graphic Design',
      'Creative Production',
      'Asset Execution',
      'Visual Production',
    ],
    projectFocus:
      'Executes high-polish visual assets for brand and digital communication, ensuring every deliverable meets sharp aesthetic standards.',
  },

  /* ━━━━━━━━━━━━━━━━━━━━
     09 — AASHISH GULSHAN
     ━━━━━━━━━━━━━━━━━━━━ */
  {
    id: 'aashish-gulshan',
    name: 'Aashish Gulshan',
    role: 'WEB DEVELOPER',
    specialisation: 'Development · Technology',
    category: 'Engineering & Technology',
    number: '09',
    initials: 'AG',
    shortIntro:
      'Translates creative and UX directions into functional digital experiences. Aashish focuses on web development, implementation and the technical side of bringing Digitify’s digital work to life.',
    responsibilities: [
      'Frontend Web Development & Implementation',
      'Translating Creative & UX Directions into Code',
      'Responsive Web Performance & Modern Standards',
      'Interactive Component Engineering & Delivery',
    ],
    expertise: [
      'Web Development',
      'Frontend Implementation',
      'Responsive Engineering',
      'Digital Production',
    ],
    projectFocus:
      'Focuses on the technical side of bringing Digitify’s digital work to life with precision implementation and fluid responsiveness.',
  },

  /* ━━━━━━━━━━━━━━━━━━━━
     10 — HARISH SHARMA
     ━━━━━━━━━━━━━━━━━━━━ */
  {
    id: 'harish-sharma',
    name: 'Harish Sharma',
    role: 'MARKET RESEARCH',
    specialisation: 'Research · Insights',
    category: 'Research & Intelligence',
    number: '10',
    initials: 'HS',
    shortIntro:
      'Focuses on market research and gathering useful insights that help inform strategy, audience understanding and project decisions.',
    responsibilities: [
      'Market Research & Landscape Discovery',
      'Audience Understanding & Behavioral Insights',
      'Informing Strategic & Creative Decisions with Data',
      'Synthesizing Market Intelligence for Project Briefs',
    ],
    expertise: [
      'Market Research',
      'Audience Insights',
      'Discovery & Intelligence',
      'Strategic Synthesis',
    ],
    projectFocus:
      'Gathers audience and market insights that ground agency strategy and creative direction in verified real-world understanding.',
  },
];
