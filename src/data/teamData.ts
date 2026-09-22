export interface TeamMember {
  id: string;
  name: string;
  role: string;
  specialisation: string;
  category: string;
  number: string;
  initials: string;
  shortIntro: string;
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
    specialisation: 'Strategy · Digital Growth',
    category: 'Agency Leadership',
    number: '01',
    initials: 'AV',
    isFounder: true,
    shortIntro:
      'Leads Digitify’s overall direction, strategy and digital presence. With 6 years of experience, Anukul works across branding, digital strategy and creative execution to help businesses build a stronger presence and move towards measurable growth.',
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
     02 — AARTI
     ━━━━━━━━━━━━━━━━━━━━ */
  {
    id: 'aarti',
    name: 'Aarti',
    role: 'CO-FOUNDER',
    specialisation: 'Operations · Leadership',
    category: 'Agency Leadership',
    number: '02',
    initials: 'AA',
    shortIntro:
      'Leads the day-to-day direction and coordination of Digitify, keeping teams, projects and execution aligned. Aarti works across operations, planning and internal coordination to keep the agency moving smoothly from strategy to delivery.',
    responsibilities: [
      'Day-to-Day Agency Direction & Operational Alignment',
      'Cross-Disciplinary Team Coordination & Project Planning',
      'Workflow Governance from Strategy to Delivery',
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
    role: 'UI/UX DESIGNER',
    specialisation: 'Experience · Interface Design',
    category: 'Digital Experience & Design',
    number: '03',
    initials: 'NK',
    shortIntro:
      'Brings 6–7 years of experience in UI/UX design, creating digital experiences that balance usability, structure and visual clarity. Nishu focuses on turning complex requirements into intuitive and purposeful interfaces.',
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
    role: 'ADVISOR',
    specialisation: 'Consultation · Strategic Guidance',
    category: 'Strategic Advisory',
    number: '04',
    initials: 'RS',
    shortIntro:
      'Supports Digitify with consultation and strategic perspective, helping shape decisions, evaluate opportunities and bring an outside view to important business and project conversations.',
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
     05 — AASHISH GULSHAN
     ━━━━━━━━━━━━━━━━━━━━ */
  {
    id: 'aashish-gulshan',
    name: 'Aashish Gulshan',
    role: 'WEB DEVELOPER',
    specialisation: 'Development · Technology',
    category: 'Engineering & Technology',
    number: '05',
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
     09 — RAHUL VERMA
     ━━━━━━━━━━━━━━━━━━━━ */
  {
    id: 'rahul-verma',
    name: 'Rahul Verma',
    role: 'DIGITAL MARKETER & CONSULTANT',
    specialisation: 'Marketing · Strategy',
    category: 'Growth & Marketing',
    number: '09',
    initials: 'RV',
    shortIntro:
      'Works across digital marketing and consultation, helping connect business objectives with practical marketing direction. Rahul contributes to campaign thinking, digital strategy and growth-focused execution.',
    responsibilities: [
      'Digital Marketing Direction & Campaign Thinking',
      'Connecting Business Objectives with Practical Strategy',
      'Growth-Focused Marketing Execution Frameworks',
      'Marketing Consultation & Channel Alignment',
    ],
    expertise: [
      'Digital Marketing',
      'Marketing Consultation',
      'Campaign Thinking',
      'Growth Execution',
    ],
    projectFocus:
      'Contributes to strategic marketing initiatives, campaign ideation, and growth-focused execution aligned with commercial objectives.',
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
