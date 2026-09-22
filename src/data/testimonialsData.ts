export interface Testimonial {
  id: string;
  quote: string;
  clientName: string;
  companyRole: string;
  category: string;
  number: string;
}

// EDITABLE PLACEHOLDERS: Replace with genuine client testimonials as they become available.
export const testimonialsData: Testimonial[] = [
  {
    id: 'testimonial-01',
    quote: 'CLIENT TESTIMONIAL WILL BE ADDED HERE.',
    clientName: 'CLIENT NAME',
    companyRole: 'COMPANY / ROLE',
    category: 'Brand Strategy & Identity',
    number: '01',
  },
  {
    id: 'testimonial-02',
    quote: 'CLIENT TESTIMONIAL WILL BE ADDED HERE.',
    clientName: 'CLIENT NAME',
    companyRole: 'COMPANY / ROLE',
    category: 'Performance Marketing',
    number: '02',
  },
  {
    id: 'testimonial-03',
    quote: 'CLIENT TESTIMONIAL WILL BE ADDED HERE.',
    clientName: 'CLIENT NAME',
    companyRole: 'COMPANY / ROLE',
    category: 'Web Experience & UI/UX',
    number: '03',
  },
];
