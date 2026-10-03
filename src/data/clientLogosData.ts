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
    darkInvert: true,
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
    darkInvert: true,
  },
  {
    id: 'kardor',
    name: 'KarDor',
    number: '05',
    lightLogo: '/images/clients/kardor-clean.png',
    darkInvert: true,
  },
];

export const clientLogosRow2: ClientLogoItem[] = [
  {
    id: 'decorme-r2',
    name: 'DecorMe',
    number: '04',
    lightLogo: '/images/clients/decorme-clean.png',
    darkInvert: true,
  },
  {
    id: 'kardor-r2',
    name: 'KarDor',
    number: '05',
    lightLogo: '/images/clients/kardor-clean.png',
    darkInvert: true,
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
    darkInvert: true,
  },
  {
    id: 'adblink-r2',
    name: 'Adblink',
    number: '03',
    lightLogo: '/images/clients/adblink-clean.png',
    darkLogo: '/images/clients/adblink-darkmode.png',
  },
];
