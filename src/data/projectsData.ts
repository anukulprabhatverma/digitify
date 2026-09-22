export type ProjectCategory =
  | 'Branding'
  | 'Social Media'
  | 'Digital Marketing'
  | 'Graphic Design'
  | 'Web Design';

export type PreviewType = 'pdf' | 'website';

export interface ProjectItem {
  id: number | string;
  name: string;
  category: ProjectCategory;
  previewType: PreviewType;
  previewUrl: string;
  domain?: string;
  caseStudyUrl: string | null;
  // Optional metadata
  number: string;
  description?: string;
  year?: string;
  tag?: string;
  image?: string;
  externalLink?: string;
  fallbackMessage?: string;
  title?: string; // backwards compatibility
}

export const projectsData: ProjectItem[] = [
  {
    id: 1,
    number: '01',
    name: 'Brand Campaign Strategy',
    title: 'Brand Campaign Strategy',
    category: 'Digital Marketing',
    previewType: 'pdf',
    previewUrl: '/projects/project-01.pdf',
    domain: 'campaign.digitify.agency',
    caseStudyUrl: null,
    description:
      'Multi-channel strategic campaign presentation deck detailing brand positioning, audience frameworks, creative direction, and media rollout.',
    year: '2025',
    tag: 'CAMPAIGN / EDITORIAL',
    image: '/images/projects/project-01.svg',
    externalLink: '/projects/project-01.pdf',
  },
  {
    id: 2,
    number: '02',
    name: 'Awards Performance Platform',
    title: 'Awards Performance Platform',
    category: 'Web Design',
    previewType: 'website',
    previewUrl: 'https://example.com',
    domain: 'awards.digitify.agency',
    caseStudyUrl: null,
    description:
      'Precision-led performance marketing web experience pairing high-impact art direction with strategic conversion architecture and responsive interface layouts.',
    year: '2025',
    tag: 'PERFORMANCE / WEB',
    image: '/images/projects/project-02.svg',
    externalLink: 'https://example.com',
    fallbackMessage: 'Live website preview · If external site restricts framing, use direct link',
  },
  {
    id: 3,
    number: '03',
    name: 'Brand Identity System & Guidelines',
    title: 'Brand Identity System & Guidelines',
    category: 'Branding',
    previewType: 'pdf',
    previewUrl: '/projects/project-03.pdf',
    domain: 'identity.digitify.agency',
    caseStudyUrl: null,
    description:
      'Comprehensive brand identity deck outlining bespoke monogram architecture, typography guidelines, and design system tokens for cross-platform coherence.',
    year: '2025',
    tag: 'BRANDING / SYSTEM',
    image: '/images/projects/project-03.svg',
    externalLink: '/projects/project-03.pdf',
  },
  {
    id: 4,
    number: '04',
    name: 'Digital Flagship Experience',
    title: 'Digital Flagship Experience',
    category: 'Web Design',
    previewType: 'website',
    previewUrl: 'https://example.com',
    domain: 'flagship.digitify.agency',
    caseStudyUrl: null,
    description:
      'Editorial digital flagship combining refined typography, fluid micro-interactions, and accessible frontend engineering.',
    year: '2025',
    tag: 'WEB / INTERACTION',
    image: '/images/projects/project-04.svg',
    externalLink: 'https://example.com',
  },
  {
    id: 5,
    number: '05',
    name: 'Visual Identity & Collateral',
    title: 'Visual Identity & Collateral',
    category: 'Graphic Design',
    previewType: 'pdf',
    previewUrl: '/projects/placeholder-project.pdf',
    domain: 'collateral.digitify.agency',
    caseStudyUrl: null,
    description:
      'Editorial presentation assets, digital marketing materials, and high-fidelity collateral structured for consistent brand expression.',
    year: '2025',
    tag: 'CREATIVE / GRAPHICS',
    image: '/images/projects/project-05.svg',
    externalLink: '/projects/placeholder-project.pdf',
  },
  {
    id: 6,
    number: '06',
    name: 'Social Narrative Framework',
    title: 'Social Narrative Framework',
    category: 'Social Media',
    previewType: 'pdf',
    previewUrl: '/projects/placeholder-project.pdf',
    domain: 'social.digitify.agency',
    caseStudyUrl: null,
    description:
      'A curated social media ecosystem blending brand storytelling, structured editorial calendars, and community engagement guidelines.',
    year: '2025',
    tag: 'SOCIAL / NARRATIVE',
    image: '/images/projects/project-06.svg',
    externalLink: '/projects/placeholder-project.pdf',
  },
];
