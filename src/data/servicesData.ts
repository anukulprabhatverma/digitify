export interface ServiceItem {
  id: string;
  number: string;
  name: string;
  shortDesc: string;
  fullDesc: string;
  deliverables: string[];
  suitableFor: string[];
  ctaText?: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: 'digital-marketing',
    number: '01',
    name: 'Digital Marketing',
    shortDesc: 'We help you get in front of the right people, bring them to your business, and turn attention into action.',
    fullDesc: 'Good marketing starts with knowing who you’re talking to. We look at your audience, your market and what you’re trying to achieve, then build campaigns that make sense for your business — and keep improving them as we learn what works.',
    deliverables: [
      'A clear plan for where and how to market',
      'Finding the people most likely to buy',
      'SEO that helps people find you',
      'Content that reaches the right people',
      'Fixing the gaps between click and customer',
    ],
    suitableFor: [
      'Businesses ready to grow beyond word of mouth',
      'Brands that want more people to find them',
      'Teams tired of spending on ads without knowing what works',
    ],
    ctaText: 'LET’S TALK →',
  },
  {
    id: 'performance-marketing',
    number: '02',
    name: 'Performance Marketing',
    shortDesc: 'We put your ad budget where it has the best chance of bringing in the right customers.',
    fullDesc: 'Running ads is easy. Getting them to work is the real job. We test different audiences, creatives and offers to see what gets results, then put more of your budget behind what’s actually working.',
    deliverables: [
      'Meta & Google ad campaigns',
      'Audience and offer testing',
      'Ad creative testing',
      'Conversion & lead tracking',
      'Budget and campaign optimisation',
    ],
    suitableFor: [
      'Businesses that want more leads or sales from ads',
      'Brands ready to scale their paid campaigns',
      'Teams spending on ads without clear results',
    ],
    ctaText: 'LET’S TALK →',
  },
  {
    id: 'social-media',
    number: '03',
    name: 'Social Media Management',
    shortDesc: 'We keep your social media active, consistent and worth following.',
    fullDesc: 'Your social media should feel like your brand, not a random collection of posts. We plan what to say, create the content and keep everything looking consistent, while learning from what your audience actually likes and responds to.',
    deliverables: [
      'Monthly content planning',
      'Social media posts & reels',
      'Captions and content writing',
      'Page management & publishing',
      'Monthly performance review',
    ],
    suitableFor: [
      'Businesses that struggle to post consistently',
      'Brands that want a stronger social presence',
      'Founders who don\'t have time to manage social media',
    ],
    ctaText: 'LET’S TALK →',
  },
  {
    id: 'branding',
    number: '04',
    name: 'Branding & Visual Identity',
    shortDesc: 'We turn what your business stands for into a brand people can recognise and remember.',
    fullDesc: 'A good brand should feel like your business from the first look. We figure out what makes you different, then turn that into the right logo, colours and style, so everything your business puts out feels like it belongs together.',
    deliverables: [
      'Brand positioning & visual direction',
      'Logo and wordmark design',
      'Colours and typography',
      'Brand guidelines',
      'Packaging & brand collateral',
    ],
    suitableFor: [
      'New businesses building their brand from scratch',
      'Existing brands that have outgrown their current identity',
      'Businesses that want to look more consistent and professional',
    ],
    ctaText: 'LET’S BUILD YOUR BRAND →',
  },
  {
    id: 'graphic-design',
    number: '05',
    name: 'Graphic Design',
    shortDesc: 'We create visuals that make your message clearer, sharper and harder to ignore.',
    fullDesc: 'Sometimes you know what you want to say, but not how to show it. We turn your ideas into designs people can understand quickly and remember, from social media and campaigns to presentations, print and everything in between.',
    deliverables: [
      'Social media & campaign creatives',
      'Presentation & pitch decks',
      'Marketing & promotional designs',
      'Brochures, print & event creatives',
      'Custom visual assets',
    ],
    suitableFor: [
      'Businesses that need regular creative support',
      'Marketing teams with too much design work on their plate',
      'Brands that want better-looking, consistent communication',
    ],
    ctaText: 'LET’S CREATE →',
  },
  {
    id: 'web-design',
    number: '06',
    name: 'Web Design & Experiences',
    shortDesc: 'We design websites that look good, feel easy to use and give your business somewhere worth landing.',
    fullDesc: 'Your website is often the first proper interaction someone has with your business. We bring the structure, design, content and technology together to make it clear and easy to use, while giving it enough personality to feel like your brand — not another template.',
    deliverables: [
      'Website structure & user experience',
      'UI design in Figma',
      'Responsive website development',
      'Interactions & motion',
      'SEO, performance & CMS setup',
    ],
    suitableFor: [
      'Businesses that need a website that actually represents them',
      'Brands redesigning an outdated website',
      'Companies looking for a stronger online presence',
    ],
    ctaText: 'LET’S BUILD IT →',
  },
];
