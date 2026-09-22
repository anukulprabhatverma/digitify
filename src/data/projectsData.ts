/**
 * Digitify Agency — Work Projects Data
 * 
 * EDITABLE CONFIGURATION:
 * Contained Portfolio Preview System:
 * - Website projects use local homepage snapshots (e.g. '/images/projects/coolbee.png')
 * - PDF projects use local PDF decks (e.g. '/projects/divas-awards.pdf')
 * - Previews are strictly contained and vertically scrollable inside each card
 * - No iframes, no X-Frame/CSP/DNS errors, completely offline-reliable
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
}

export const projectsData: ProjectItem[] = [
  {
    id: 'coolbee-store',
    number: '01',
    name: 'Coolbee Store',
    category: 'Website · Social Media · Digital Marketing',
    categories: ['Website', 'Social Media', 'Digital Marketing'],
    previewType: 'image',
    previewUrl: 'https://coolbeestore.com',
    previewImage: '/images/projects/coolbee.png',
    domain: 'coolbeestore.com',
    description:
      'E-commerce storefront and integrated social media management for modern consumer essentials and lifestyle merchandise.',
    tag: 'WEBSITE / SOCIAL / DIGITAL MARKETING',
    fallbackMessage: 'Contained visual snapshot · Vertically scrollable inside card',
  },
  {
    id: 'homecraft-textiles',
    number: '02',
    name: 'Homecraft Textiles',
    category: 'Website',
    categories: ['Website'],
    previewType: 'image',
    previewUrl: 'https://homecrafttextiles.com.au',
    previewImage: '/images/projects/homecraft.png',
    domain: 'homecrafttextiles.com.au',
    description:
      'Curated textile commerce experience showcasing tactile fabrics, custom textures, and interior design materials.',
    tag: 'WEBSITE',
    fallbackMessage: 'Contained visual snapshot · Vertically scrollable inside card',
  },
  {
    id: 'carrotstick',
    number: '03',
    name: 'Carrotstick',
    category: 'Website',
    categories: ['Website'],
    previewType: 'image',
    previewUrl: 'https://carrotstick.com',
    previewImage: '/images/projects/carrotstick.png',
    domain: 'carrotstick.com',
    description:
      'Interactive digital web platform engineered for seamless navigation, intuitive onboarding, and product discovery.',
    tag: 'WEBSITE',
    fallbackMessage: 'Contained visual snapshot · Vertically scrollable inside card',
  },
  {
    id: 'sign-of-the-times-london',
    number: '04',
    name: 'Sign of the Times London',
    category: 'Website',
    categories: ['Website'],
    previewType: 'image',
    previewUrl: 'https://signofthetimeslondon.com',
    previewImage: '/images/projects/signofthetimes.png',
    domain: 'signofthetimeslondon.com',
    description:
      'Curated luxury resale and fashion e-commerce storefront delivering a high-end editorial shopping experience.',
    tag: 'WEBSITE',
    fallbackMessage: 'Contained visual snapshot · Vertically scrollable inside card',
  },
  {
    id: 'urban-platter',
    number: '05',
    name: 'Urban Platter',
    category: 'Website',
    categories: ['Website'],
    previewType: 'image',
    previewUrl: 'https://urbanplatter.com',
    previewImage: '/images/projects/urbanplatter.png',
    domain: 'urbanplatter.com',
    description:
      'Specialty culinary and gourmet food online storefront connecting food lovers with premium ingredients.',
    tag: 'WEBSITE',
    fallbackMessage: 'Contained visual snapshot · Vertically scrollable inside card',
  },
  {
    id: 'divas-entertainment-awards',
    number: '06',
    name: 'Divas Entertainment Awards',
    category: 'Digital Marketing · Social Media',
    categories: ['Digital Marketing', 'Social Media'],
    previewType: 'pdf',
    previewUrl: '/projects/divas-awards.pdf',
    previewImage: '/images/projects/divas-awards.png',
    domain: 'divasentertainment.com',
    description:
      'Comprehensive digital marketing campaign architecture and social media storytelling for premier entertainment honors.',
    tag: 'DIGITAL MARKETING / SOCIAL',
    fallbackMessage: 'Contained PDF deck preview · Vertically scrollable inside card',
  },
];
