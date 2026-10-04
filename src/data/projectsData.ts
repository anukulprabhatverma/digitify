/**
 * Digitify Agency — Work Projects Data
 * 
 * Local Asset-Grounded Portfolio System:
 * - Projects 01-03 use local multi-page PDF presentation decks
 * - First page of each PDF is utilized as the crisp contained preview thumbnail
 * - Clicking any card opens the complete multi-page PDF deck inside the local Digitify modal
 * - 100% offline-reliable, zero external iframes, zero redirect dependencies
 */

export type ProjectCategory = 'Website' | 'Social Media' | 'Digital Marketing';

export type PreviewType = 'image' | 'pdf';

export interface ProjectItem {
  id: string | number;
  number: string;
  name: string;
  category: string;
  categories: ProjectCategory[];
  previewType: PreviewType;
  previewUrl: string;
  previewImage: string;
  domain?: string;
  description: string;
  tag?: string;
  fallbackMessage?: string;
  image?: string;
  pdfUrl?: string;
  pdfPages?: string[];
  totalPages?: number;
}

export const projectsData: ProjectItem[] = [
  {
    id: 'atlas-paints',
    number: '01',
    name: 'Atlas Paints',
    category: 'WEBSITE / E-COMMERCE',
    categories: ['Website'],
    previewType: 'pdf',
    previewUrl: '/projects/atlas-paints.pdf',
    previewImage: '/images/projects/atlas-paints.webp',
    pdfUrl: '/projects/atlas-paints.pdf',
    pdfPages: [
      '/projects/pages/atlas-paints/page-1.webp',
      '/projects/pages/atlas-paints/page-2.webp',
      '/projects/pages/atlas-paints/page-3.webp',
      '/projects/pages/atlas-paints/page-4.webp',
    ],
    totalPages: 4,
    domain: 'atlaspaints.co.uk',
    description:
      'Specialist architectural coatings and designer paint collections engineered for interior decorators and modern residential spaces.',
    tag: 'WEBSITE / E-COMMERCE',
    fallbackMessage: 'Local PDF presentation · Click to explore deck',
  },
  {
    id: 'carrot-stick',
    number: '02',
    name: 'Carrot & Stick',
    category: 'E-COMMERCE WEBSITE',
    categories: ['Website'],
    previewType: 'pdf',
    previewUrl: '/projects/carrot-and-stick.pdf',
    previewImage: '/images/projects/carrot-and-stick.webp',
    pdfUrl: '/projects/carrot-and-stick.pdf',
    pdfPages: [
      '/projects/pages/carrot-and-stick/page-1.webp',
      '/projects/pages/carrot-and-stick/page-2.webp',
      '/projects/pages/carrot-and-stick/page-3.webp',
      '/projects/pages/carrot-and-stick/page-4.webp',
    ],
    totalPages: 4,
    domain: 'carrotandstick.com',
    description:
      'Clean skincare formulations and plant-powered dermatology engineered with active botanical science and pure ingredients.',
    tag: 'E-COMMERCE WEBSITE',
    fallbackMessage: 'Local PDF presentation · Click to explore deck',
  },
  {
    id: 'coolbee',
    number: '03',
    name: 'CoolBee',
    category: 'FASHION E-COMMERCE',
    categories: ['Website', 'Social Media', 'Digital Marketing'],
    previewType: 'pdf',
    previewUrl: '/projects/coolbee.pdf',
    previewImage: '/images/projects/coolbee-p1.webp',
    pdfUrl: '/projects/coolbee.pdf',
    pdfPages: [
      '/projects/pages/coolbee/page-1.webp',
      '/projects/pages/coolbee/page-2.webp',
      '/projects/pages/coolbee/page-3.webp',
      '/projects/pages/coolbee/page-4.webp',
      '/projects/pages/coolbee/page-5.webp',
    ],
    totalPages: 5,
    domain: 'coolbeestore.com',
    description:
      'Youth streetwear, curated graphic tees, and contemporary fashion e-commerce storefront for men, women, and kids.',
    tag: 'FASHION E-COMMERCE',
    fallbackMessage: 'Local PDF presentation · Click to explore deck',
  },
  {
    id: 'homecraft-textiles',
    number: '04',
    name: 'Homecraft Textiles',
    category: 'Website',
    categories: ['Website'],
    previewType: 'image',
    previewUrl: '/images/projects/homecraft.png',
    previewImage: '/images/projects/homecraft.png',
    domain: 'homecrafttextiles.com.au',
    description:
      'Curated textile commerce experience showcasing tactile fabrics, custom textures, and interior design materials.',
    tag: 'WEBSITE',
    fallbackMessage: 'Contained visual snapshot · Click to explore',
  },
  {
    id: 'sign-of-the-times-london',
    number: '05',
    name: 'Sign of the Times London',
    category: 'Website',
    categories: ['Website'],
    previewType: 'image',
    previewUrl: '/images/projects/signofthetimes.png',
    previewImage: '/images/projects/signofthetimes.png',
    domain: 'signofthetimeslondon.com',
    description:
      'Curated luxury resale and fashion e-commerce storefront delivering a high-end editorial shopping experience.',
    tag: 'WEBSITE',
    fallbackMessage: 'Contained visual snapshot · Click to explore',
  },
  {
    id: 'urban-platter',
    number: '06',
    name: 'Urban Platter',
    category: 'Website',
    categories: ['Website'],
    previewType: 'image',
    previewUrl: '/images/projects/urbanplatter.png',
    previewImage: '/images/projects/urbanplatter.png',
    domain: 'urbanplatter.com',
    description:
      'Specialty culinary and gourmet food online storefront connecting food lovers with premium ingredients.',
    tag: 'WEBSITE',
    fallbackMessage: 'Contained visual snapshot · Click to explore',
  },
  {
    id: 'divas-entertainment-awards',
    number: '07',
    name: 'Divas Entertainment Awards',
    category: 'Digital Marketing · Social Media',
    categories: ['Digital Marketing', 'Social Media'],
    previewType: 'pdf',
    previewUrl: '/projects/divas-awards.pdf',
    previewImage: '/images/projects/divas-awards.png',
    pdfUrl: '/projects/divas-awards.pdf',
    domain: 'divasentertainment.com',
    description:
      'Comprehensive digital marketing campaign architecture and social media storytelling for premier entertainment honors.',
    tag: 'DIGITAL MARKETING / SOCIAL',
    fallbackMessage: 'Contained PDF deck preview · Click to explore',
  },
];
