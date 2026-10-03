export interface ClientLogoItem {
  id: string;
  name: string;
  number: string;
  lightLogo: string;
  darkLogo?: string;
  darkInvert?: boolean;
}

// Backwards-compatible alias if imported elsewhere
export type ClientLogoPlaceholder = ClientLogoItem;

export const clientLogosRow1: ClientLogoItem[] = [
  {
    id: 'divas',
    name: 'Divas Entertainment Awards',
    number: '01',
    lightLogo: '/images/clients/divas-clean.png',
    darkLogo: '/images/clients/divas-clean.png',
  },
  {
    id: 'coolbee',
    name: 'CoolBee',
    number: '02',
    lightLogo: '/images/clients/coolbee-clean.png',
    darkLogo: '/images/clients/coolbee-darkmode.png',
  },
  {
    id: 'adblink',
    name: 'Adblink',
    number: '03',
    lightLogo: '/images/clients/adblink-clean.png',
    darkLogo: '/images/clients/adblink-darkmode.png',
  },
  {
    id: 'decorme',
    name: 'DecorMe',
    number: '04',
    lightLogo: '/images/clients/decorme-clean.png',
    darkLogo: '/images/clients/decorme-darkmode.png',
  },
  {
    id: 'kardor',
    name: 'KarDor',
    number: '05',
    lightLogo: '/images/clients/kardor-clean.png',
    darkLogo: '/images/clients/kardor-darkmode.png',
  },
  {
    id: 'homecraft',
    name: 'Homecraft Textiles',
    number: '06',
    lightLogo: '/images/clients/homecraft-clean.png',
    darkLogo: '/images/clients/homecraft-darkmode.png',
  },
  {
    id: 'carrotstick',
    name: 'Carrot & Stick',
    number: '07',
    lightLogo: '/images/clients/carrotstick-clean.png',
    darkLogo: '/images/clients/carrotstick-darkmode.png',
  },
  {
    id: 'signofthetimes',
    name: 'Sign of the Times',
    number: '08',
    lightLogo: '/images/clients/signofthetimes-clean.png',
    darkLogo: '/images/clients/signofthetimes-darkmode.png',
  },
  {
    id: 'urbanplatter',
    name: 'Urban Platter',
    number: '09',
    lightLogo: '/images/clients/urbanplatter-clean.png',
    darkLogo: '/images/clients/urbanplatter-darkmode.png',
  },
];

export const clientLogosRow2: ClientLogoItem[] = [
  {
    id: 'homecraft-r2',
    name: 'Homecraft Textiles',
    number: '06',
    lightLogo: '/images/clients/homecraft-clean.png',
    darkLogo: '/images/clients/homecraft-darkmode.png',
  },
  {
    id: 'carrotstick-r2',
    name: 'Carrot & Stick',
    number: '07',
    lightLogo: '/images/clients/carrotstick-clean.png',
    darkLogo: '/images/clients/carrotstick-darkmode.png',
  },
  {
    id: 'signofthetimes-r2',
    name: 'Sign of the Times',
    number: '08',
    lightLogo: '/images/clients/signofthetimes-clean.png',
    darkLogo: '/images/clients/signofthetimes-darkmode.png',
  },
  {
    id: 'urbanplatter-r2',
    name: 'Urban Platter',
    number: '09',
    lightLogo: '/images/clients/urbanplatter-clean.png',
    darkLogo: '/images/clients/urbanplatter-darkmode.png',
  },
  {
    id: 'divas-r2',
    name: 'Divas Entertainment Awards',
    number: '01',
    lightLogo: '/images/clients/divas-clean.png',
    darkLogo: '/images/clients/divas-clean.png',
  },
  {
    id: 'coolbee-r2',
    name: 'CoolBee',
    number: '02',
    lightLogo: '/images/clients/coolbee-clean.png',
    darkLogo: '/images/clients/coolbee-darkmode.png',
  },
  {
    id: 'adblink-r2',
    name: 'Adblink',
    number: '03',
    lightLogo: '/images/clients/adblink-clean.png',
    darkLogo: '/images/clients/adblink-darkmode.png',
  },
  {
    id: 'decorme-r2',
    name: 'DecorMe',
    number: '04',
    lightLogo: '/images/clients/decorme-clean.png',
    darkLogo: '/images/clients/decorme-darkmode.png',
  },
  {
    id: 'kardor-r2',
    name: 'KarDor',
    number: '05',
    lightLogo: '/images/clients/kardor-clean.png',
    darkLogo: '/images/clients/kardor-darkmode.png',
  },
];
