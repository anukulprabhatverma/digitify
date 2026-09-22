export interface CaseStudy {
  id: string;
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  clientPlaceholder: string;
  disciplines: string[];
  timeline: string;
  overviewImage: string;
  galleryImages: string[];
  nextSlug: string;
  nextTitle: string;
  // 8 required sections
  sections: {
    intro: {
      headline: string;
      description: string;
      metaItems: { label: string; value: string }[];
    };
    challenge: {
      headline: string;
      description: string;
      keyObstacles: string[];
    };
    strategy: {
      headline: string;
      description: string;
      strategicPillars: string[];
    };
    creativeDirection: {
      headline: string;
      description: string;
      artDirectionNotes: string[];
    };
    execution: {
      headline: string;
      description: string;
      deliverablesList: string[];
    };
    outcome: {
      headline: string;
      description: string;
      keyTakeaways: string[];
    };
  };
}

export const caseStudiesData: CaseStudy[] = [
  {
    id: 'case-01',
    slug: 'brand-campaign',
    number: '01',
    title: 'Brand Campaign Framework',
    subtitle: 'Integrated Digital Strategy & Social Communication',
    clientPlaceholder: '[Client Name Placeholder — Replace with Real Project]',
    disciplines: ['Digital Strategy', 'Creative Direction', 'Social Media'],
    timeline: '[Timeline Placeholder — e.g. 10 Weeks]',
    overviewImage: '/images/projects/project-01.svg',
    galleryImages: [
      '/images/projects/project-01.svg',
      '/images/projects/project-05.svg',
      '/images/projects/project-03.svg',
    ],
    nextSlug: 'awards-campaign',
    nextTitle: 'Awards Campaign Direction',
    sections: {
      intro: {
        headline: 'Unified Brand Presence Across Channels',
        description:
          '[Project Introduction Placeholder] A structured multi-channel campaign designed to align digital narrative, visual assets, and targeted audience outreach. This placeholder demonstrates the editorial layout and section hierarchy, ready to be populated with your verified client brief and scope.',
        metaItems: [
          { label: 'Role', value: 'Strategy & Creative Direction' },
          { label: 'Scope', value: 'Campaign Blueprint & Media Rollout' },
          { label: 'Format', value: 'Digital & Social Channels' },
          { label: 'Status', value: 'Editable Project Template' },
        ],
      },
      challenge: {
        headline: 'Bridging Brand Voice and Multi-Platform Execution',
        description:
          '[Challenge Description Placeholder] Outline the fundamental problem the client faced before partnering with Digitify. Highlight market competition, message fragmentation, or inconsistent brand expression across distribution touchpoints.',
        keyObstacles: [
          '[Challenge Point 01 Placeholder] Lack of unified aesthetic guidelines across campaign collateral',
          '[Challenge Point 02 Placeholder] Disconnected messaging between organic social and paid media touchpoints',
          '[Challenge Point 03 Placeholder] Need for structured asset workflows to maintain high production frequency',
        ],
      },
      strategy: {
        headline: 'Cohesive Narrative and Structured Phasing',
        description:
          '[Strategy Description Placeholder] Detail the strategic roadmap developed to resolve the challenge. Explain how research, target audience positioning, and channel-specific nuances guided the project architecture.',
        strategicPillars: [
          'Audience Persona Mapping — Defining core cultural touchpoints and communication preferences',
          'Narrative Phasing — Structuring the campaign arc into teaser, flagship launch, and sustained dialogue',
          'Channel Prioritization — Concentrating creative resources on high-relevance platforms',
        ],
      },
      creativeDirection: {
        headline: 'Restrained Typography and Confident Visual Weight',
        description:
          '[Creative Direction Placeholder] Explain the visual language established for the project. Highlight choices in typography, editorial pacing, spatial composition, and aesthetic mood.',
        artDirectionNotes: [
          'High-contrast typography utilizing strong visual hierarchy',
          'Generous negative space to emphasize key campaign statements',
          'Consistent editorial photography treatments and monochromatic restraint',
        ],
      },
      execution: {
        headline: 'Cross-Disciplinary Production and Delivery',
        description:
          '[Execution Description Placeholder] Document the deliverables built and launched during the project lifecycle, showcasing the collaborative transition from concept to finalized assets.',
        deliverablesList: [
          'Comprehensive campaign guideline deck and creative playbooks',
          'Static and motion design asset suite formatted for multi-channel release',
          'Copywriting frameworks for headline statements, captions, and outreach',
          'Implementation timeline and asset handoff specifications',
        ],
      },
      outcome: {
        headline: 'Structured Brand Impact and Long-Term Value',
        description:
          '[Outcome Description Placeholder] Summarize the qualitative and strategic value delivered to the client. When verified data is available, replace this section with your confirmed outcomes and brand progression.',
        keyTakeaways: [
          '[Takeaway 01 Placeholder] Established an enduring visual foundation for subsequent seasonal campaigns',
          '[Takeaway 02 Placeholder] Streamlined production workflow for internal marketing teams',
          '[Takeaway 03 Placeholder] Enhanced brand consistency across organic and paid customer touchpoints',
        ],
      },
    },
  },
  {
    id: 'case-02',
    slug: 'awards-campaign',
    number: '02',
    title: 'Awards Campaign Direction',
    subtitle: 'Performance Marketing & Creative Direction',
    clientPlaceholder: '[Client Name Placeholder — Replace with Real Project]',
    disciplines: ['Performance Marketing', 'Creative Direction', 'Conversion Design'],
    timeline: '[Timeline Placeholder — e.g. 8 Weeks]',
    overviewImage: '/images/projects/project-02.svg',
    galleryImages: [
      '/images/projects/project-02.svg',
      '/images/projects/project-04.svg',
      '/images/projects/project-06.svg',
    ],
    nextSlug: 'brand-identity',
    nextTitle: 'Brand Identity System',
    sections: {
      intro: {
        headline: 'Performance Meets Editorial Craftsmanship',
        description:
          '[Project Introduction Placeholder] A high-precision initiative engineered to marry conversion-focused marketing with refined visual art direction. Designed as a flexible showcase for your verified client campaigns.',
        metaItems: [
          { label: 'Role', value: 'Performance Strategy & Design' },
          { label: 'Scope', value: 'Ad Systems & Conversion Funnel' },
          { label: 'Format', value: 'Paid Channels & Landing Pages' },
          { label: 'Status', value: 'Editable Project Template' },
        ],
      },
      challenge: {
        headline: 'Elevating Conversion Assets Above Commodity Advertising',
        description:
          '[Challenge Description Placeholder] Detail how traditional performance ads often sacrifice brand equity for clicks, and why the client required a solution that maintained high aesthetic standards while achieving commercial objectives.',
        keyObstacles: [
          '[Challenge Point 01 Placeholder] Ad fatigue caused by generic promotional templates',
          '[Challenge Point 02 Placeholder] Disconnect between ad impressions and landing page conversion rates',
          '[Challenge Point 03 Placeholder] Need for disciplined budget allocation across competing target segments',
        ],
      },
      strategy: {
        headline: 'Analytical Segmentation Paired with Creative Testing',
        description:
          '[Strategy Description Placeholder] Explain the testing methodology implemented to identify high-affinity audiences and optimize creative variants systematically.',
        strategicPillars: [
          'Systematic Creative Matrix — Testing distinct visual angles without diluting brand prestige',
          'Frictionless Funnel Architecture — Aligning ad messaging with dedicated landing experiences',
          'Data-Guided Pacing — Adjusting daily budget deployment based on conversion signals',
        ],
      },
      creativeDirection: {
        headline: 'Clarity, Motion, and Focused Messaging',
        description:
          '[Creative Direction Placeholder] Describe the visual grammar applied to the performance creative, emphasizing clear value propositions, dynamic kinetic typography, and minimal distraction.',
        artDirectionNotes: [
          'Crisp, high-impact headline cards engineered for quick comprehension',
          'Restrained color palette utilizing the signature purple accent on primary CTAs',
          'Deliberate rhythm between brand storytelling and direct-response prompts',
        ],
      },
      execution: {
        headline: 'Iterative Deployment Across Ad Channels',
        description:
          '[Execution Description Placeholder] Outline the production pipeline and weekly optimization routines utilized throughout the campaign period.',
        deliverablesList: [
          'Dynamic ad creative suite across aspect ratios (1:1, 9:16, 16:9)',
          'High-converting landing page layout and modular UI components',
          'Tagging, tracking, and attribution integration specifications',
          'Post-campaign analytical debrief and playbook documentation',
        ],
      },
      outcome: {
        headline: 'Demonstrated Efficiency and Brand Elevation',
        description:
          '[Outcome Description Placeholder] Conclude with the strategic improvements in customer engagement and conversion quality realized by the project.',
        keyTakeaways: [
          '[Takeaway 01 Placeholder] Validated that premium art direction outperforms commoditized ad creative',
          '[Takeaway 02 Placeholder] Created a repeatable testing playbook for client media teams',
          '[Takeaway 03 Placeholder] Delivered an elevated brand impression to prospective customers',
        ],
      },
    },
  },
  {
    id: 'case-03',
    slug: 'brand-identity',
    number: '03',
    title: 'Brand Identity System',
    subtitle: 'Branding & Visual Identity System',
    clientPlaceholder: '[Client Name Placeholder — Replace with Real Project]',
    disciplines: ['Brand Identity', 'Typography', 'Design Systems'],
    timeline: '[Timeline Placeholder — e.g. 12 Weeks]',
    overviewImage: '/images/projects/project-03.svg',
    galleryImages: [
      '/images/projects/project-03.svg',
      '/images/projects/project-01.svg',
      '/images/projects/project-05.svg',
    ],
    nextSlug: 'brand-campaign',
    nextTitle: 'Brand Campaign Framework',
    sections: {
      intro: {
        headline: 'Foundational Identity for Modern Scale',
        description:
          '[Project Introduction Placeholder] A complete ground-up visual identity system designed for long-term versatility across print, digital, and environmental touchpoints. Built as a comprehensive editorial framework for your branding case studies.',
        metaItems: [
          { label: 'Role', value: 'Brand Identity & Design System' },
          { label: 'Scope', value: 'Logo, Typography & Brand Guidelines' },
          { label: 'Format', value: 'Multi-Format Brand Manual' },
          { label: 'Status', value: 'Editable Project Template' },
        ],
      },
      challenge: {
        headline: 'Defining Distinctiveness in an Over-Saturated Market',
        description:
          '[Challenge Description Placeholder] Outline the client’s need for an unmistakable brand presence that communicates sophistication, clarity, and authority without relying on short-lived design trends.',
        keyObstacles: [
          '[Challenge Point 01 Placeholder] Outdated visual language that no longer reflected company capability',
          '[Challenge Point 02 Placeholder] Inconsistent asset usage across international operating units',
          '[Challenge Point 03 Placeholder] Lack of technical specifications for digital UI applications',
        ],
      },
      strategy: {
        headline: 'Timeless Monochromatic Foundation with Precise Accents',
        description:
          '[Strategy Description Placeholder] Explain the conceptual foundation that anchored the identity. Detail how timeless design principles were paired with modern digital-first adaptability.',
        strategicPillars: [
          'Essence Distillation — Boiling brand values down to essential visual expressions',
          'Modular Scalability — Ensuring the mark functions at 16px favicon up to monumental signage',
          'Systemic Governance — Creating unambiguous rules for internal teams and agency partners',
        ],
      },
      creativeDirection: {
        headline: 'Geometric Harmony and Editorial Pacing',
        description:
          '[Creative Direction Placeholder] Document the typographical anatomy, grid systems, and structural proportions that give the brand its character.',
        artDirectionNotes: [
          'Custom geometric letterforms with optical kerning and balanced weights',
          'Strict monochromatic core palette supported by restrained purple accentuation',
          'Grid-based editorial layouts celebrating generous negative space',
        ],
      },
      execution: {
        headline: 'Comprehensive System Documentation',
        description:
          '[Execution Description Placeholder] List the tangible identity collateral and digital component systems delivered upon project completion.',
        deliverablesList: [
          'Primary logo suite, monograms, and responsive icon variations',
          '100+ page comprehensive brand identity specification manual',
          'Stationery, presentation decks, and corporate collateral templates',
          'Digital design token library formatted for web and mobile engineers',
        ],
      },
      outcome: {
        headline: 'A Unified Platform for Future Expansion',
        description:
          '[Outcome Description Placeholder] Reflect on the clarity, organizational alignment, and market presence achieved through the newly instituted identity system.',
        keyTakeaways: [
          '[Takeaway 01 Placeholder] Cohesive brand perception recognized across industry stakeholders',
          '[Takeaway 02 Placeholder] Reduced brand implementation overhead across internal teams',
          '[Takeaway 03 Placeholder] Future-proofed design architecture capable of evolving with the enterprise',
        ],
      },
    },
  },
];
