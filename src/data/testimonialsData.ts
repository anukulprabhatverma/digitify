export interface Testimonial {
  id: string;
  quote: string;
  clientName: string;
  companyRole: string;
  category: string;
  number: string;
}

export const testimonialsData: Testimonial[] = [
  {
    id: 'testimonial-01',
    quote:
      'Digitify helped us bring our digital presence together—from our website to marketing campaigns. The team understood the brand quickly and executed everything with great clarity.',
    clientName: 'NITIN PRAJAPATI',
    companyRole: 'FOUNDER / ADBLINK',
    category: 'DIGITAL MARKETING',
    number: '01',
  },
  {
    id: 'testimonial-02',
    quote:
      'Digitify has been handling our social media and digital marketing with a clear understanding of our brand. Their creative approach and consistent execution have made the entire process seamless.',
    clientName: 'K.S. NEGI',
    companyRole: 'DIVAS ENTERTAINMENT',
    category: 'SOCIAL MEDIA & DIGITAL MARKETING',
    number: '02',
  },
  {
    id: 'testimonial-03',
    quote:
      'Working with Digitify has made our digital marketing much more structured. From strategy and content to campaign execution, the team has been responsive and focused on delivering meaningful results.',
    clientName: 'KAROBAR TEAM',
    companyRole: 'DIGITAL MARKETING PARTNER',
    category: 'DIGITAL MARKETING',
    number: '03',
  },
];
