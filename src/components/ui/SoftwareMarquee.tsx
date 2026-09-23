import React from 'react';

interface SoftwareItem {
  name: string;
  icon: React.ReactNode;
}

const softwareItems: SoftwareItem[] = [
  {
    name: 'Adobe',
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="#FA0F00" aria-label="Adobe">
        <path d="M13.966 2H22v20h-5.078l-2.956-7.808zM10.034 2H2v20h5.078l2.956-7.808zM12 9.176l3.708 9.824H12.63l-1.282-3.496H8.652z" />
      </svg>
    ),
  },
  {
    name: 'Photoshop',
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="none" aria-label="Photoshop">
        <rect width="24" height="24" rx="4.5" fill="#001E36" />
        <path
          d="M6.5 7h4c1.8 0 3 1 3 2.6 0 1.7-1.2 2.7-3 2.7H8.5V17H6.5V7zm2 3.6h1.8c.8 0 1.3-.4 1.3-1s-.5-1-1.3-1H8.5v2z"
          fill="#31A8FF"
        />
        <path
          d="M17.5 11.5c-.4-.3-1-.5-1.7-.5-.9 0-1.5.4-1.5 1 0 .7.6.9 1.6 1.2 1.5.4 2.4 1 2.4 2.2 0 1.5-1.2 2.4-2.8 2.4-1 0-1.9-.3-2.5-.8l.7-1.4c.5.4 1.2.7 1.8.7.9 0 1.3-.4 1.3-.9 0-.6-.6-.9-1.6-1.2-1.4-.4-2.3-1-2.3-2.2 0-1.4 1.1-2.3 2.6-2.3.9 0 1.7.3 2.2.6l-.6 1.4z"
          fill="#31A8FF"
        />
      </svg>
    ),
  },
  {
    name: 'Illustrator',
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="none" aria-label="Illustrator">
        <rect width="24" height="24" rx="4.5" fill="#330000" />
        <path
          d="M9.8 7L6 17h1.9l.9-2.5h3.6l.8 2.5h2L11.4 7H9.8zm-.5 6l1.3-3.8L12 13H9.3z"
          fill="#FF9A00"
        />
        <path
          d="M16.5 7.5a1.1 1.1 0 11-2.2 0 1.1 1.1 0 012.2 0zm-.2 2.7v6.8h-1.8v-6.8h1.8z"
          fill="#FF9A00"
        />
      </svg>
    ),
  },
  {
    name: 'Figma',
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="none" aria-label="Figma">
        <path d="M8 24c2.2 0 4-1.8 4-4v-4H8c-2.2 0-4 1.8-4 4s1.8 4 4 4z" fill="#0ACF83" />
        <path d="M4 12c0-2.2 1.8-4 4-4h4v8H8c-2.2 0-4-1.8-4-4z" fill="#A259FF" />
        <path d="M4 4c0-2.2 1.8-4 4-4h4v8H8C5.8 8 4 6.2 4 4z" fill="#F24E1E" />
        <path d="M12 0h4c2.2 0 4 1.8 4 4s-1.8 4-4 4h-4V0z" fill="#FF7262" />
        <path d="M20 12c0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4 4 1.8 4 4z" fill="#1ABCFE" />
      </svg>
    ),
  },
  {
    name: 'Canva',
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="none" aria-label="Canva">
        <circle cx="12" cy="12" r="11" fill="url(#canva-grad)" />
        <path
          d="M12.8 15.5c-2.4 0-4-1.7-4-4.2 0-2.6 1.8-4.3 4.2-4.3 1.5 0 2.5.6 3.1 1.4l-1.3 1.2c-.4-.5-1-1-1.8-1-1.4 0-2.4 1.1-2.4 2.7 0 1.5 1 2.6 2.4 2.6.9 0 1.5-.4 2-1l1.2 1.1c-.8 1-1.9 1.5-3.4 1.5z"
          fill="#FFFFFF"
        />
        <defs>
          <linearGradient id="canva-grad" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
            <stop stopColor="#00C4CC" />
            <stop offset="1" stopColor="#7D2AE8" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    name: 'Meta',
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="none" aria-label="Meta">
        <path
          d="M16.6 5.5c-2 0-3.5 1.1-4.6 2.7C10.9 6.6 9.4 5.5 7.4 5.5 3.9 5.5 1.5 8.5 1.5 12.2c0 4.1 2.8 7.3 6.3 7.3 2.1 0 3.8-1.2 4.2-2.9.4 1.7 2.1 2.9 4.2 2.9 3.5 0 6.3-3.2 6.3-7.3 0-3.7-2.4-6.7-5.9-6.7zm-.2 11.7c-2 0-3.6-1.7-4.1-4.2.5-2.5 2.1-4.2 4.1-4.2 2.1 0 3.7 1.8 3.7 4.2 0 2.4-1.6 4.2-3.7 4.2zm-8.8 0c-2.1 0-3.7-1.8-3.7-4.2 0-2.4 1.6-4.2 3.7-4.2 2 0 3.6 1.7 4.1 4.2-.5 2.5-2.1 4.2-4.1 4.2z"
          fill="#0081FB"
        />
      </svg>
    ),
  },
  {
    name: 'Shopify',
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="none" aria-label="Shopify">
        <path
          d="M18.8 6.4l-1.3-.4c-.1 0-.1-.1-.1-.2 0-.2-.1-.5-.2-.9-.3-1.6-1.5-2.3-2.6-2.3h-.2c-.3 0-.6.1-.8.2-.3-.5-.8-.8-1.4-.8-.9 0-1.6.6-2.1 1.7-.5 1-1.3 3.6-1.4 3.9l-2.4.7c-.7.2-.9.8-.7 1.4l2.5 10.9c.2.7.8 1.1 1.5.9l10-3c.7-.2 1.1-.8.9-1.5L19.5 7.1c-.1-.4-.4-.7-.7-.7zm-4.7-2c.4 0 .9.4 1.1 1.2.2.7.2 1.2.2 1.4l-2.6.8c.2-.7.7-3.4 1.3-3.4zm-.9 6.7c0-.2.1-.3.2-.4.4-.3 1.1-.3 1.4.3.4.6.2 1.6-.4 2.1-.5.4-1.2.6-1.7.9l-.6-.8c.7-.4 1.1-.6 1.3-1 .2-.3.1-.7-.1-.9-.2-.2-.6-.2-.8 0-.3.2-.4.7-.6 1.2l-.7-.4c.2-.7.5-1.5 1.4-1.9z"
          fill="#95BF47"
        />
      </svg>
    ),
  },
  {
    name: 'WordPress',
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="none" aria-label="WordPress">
        <circle cx="12" cy="12" r="10" fill="#21759B" />
        <path
          d="M3.5 12c0 3.7 2.4 6.8 5.7 7.9L5.3 9.4C4.2 10.1 3.5 11 3.5 12zm13.1-.4c0-1.3-.5-2.2-1-2.9-.6-.9-1.2-1.6-1.2-2.5 0-1 .7-1.9 1.8-1.9.1 0 .2 0 .3.1C15 3.5 13.6 3 12 3c-3 0-5.6 1.6-7 4 .2 0 .4.1.7.1 1.1 0 2.8-.1 2.8-.1.6 0 .6.8 0 .9 0 0-.6.1-1.2.1l3.9 11.6 2.3-7-1.7-4.6c-.6 0-1.1-.1-1.1-.1-.6 0-.6-.9 0-.9 0 0 1.7.1 2.7.1 1.1 0 2.8-.1 2.8-.1.6 0 .6.8 0 .9 0 0-.6.1-1.2.1l3.9 11.5c1.4-1 2.3-2.6 2.3-4.4z"
          fill="#FFFFFF"
        />
      </svg>
    ),
  },
  {
    name: 'Webflow',
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="none" aria-label="Webflow">
        <path
          d="M22 6.5l-3.3 11h-3.6l1.9-6.3h-.1l-2.4 6.3h-2.9l-2-6.3h-.1l1.6 6.3H7.5L4 6.5h3.6l1.8 6.3h.1l2.2-6.3h2.9l1.8 6.3h.1l2-6.3H22z"
          fill="#146EF5"
        />
      </svg>
    ),
  },
  {
    name: 'Google',
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="none" aria-label="Google">
        <path
          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
          fill="#4285F4"
        />
        <path
          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
          fill="#34A853"
        />
        <path
          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
          fill="#FBBC05"
        />
        <path
          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
          fill="#EA4335"
        />
      </svg>
    ),
  },
];

export const SoftwareMarquee: React.FC = () => {
  // Exactly 2 sets of items guarantee a mathematically seamless infinite loop with translateX(-50%) to translateX(0%)
  const allItems = [...softwareItems, ...softwareItems];

  return (
    <div className="w-full min-w-0 max-w-full overflow-hidden relative select-none py-1">
      {/* Edge gradient masks for subtle fade */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-8 sm:w-12 bg-gradient-to-r from-white dark:from-[#08080a] to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-8 sm:w-12 bg-gradient-to-l from-white dark:from-[#08080a] to-transparent z-10" />

      {/* Marquee Row: Moving LEFT -> RIGHT continuously */}
      <div className="flex w-max items-center gap-2 xs:gap-2.5 sm:gap-3 animate-marquee-reverse hover:[animation-play-state:paused] motion-reduce:animate-none">
        {allItems.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-2 px-2.5 xs:px-3 py-1.5 rounded-lg border border-day-border/80 dark:border-agency-border/80 bg-day-surface/90 dark:bg-agency-surface/90 shadow-sm shrink-0 transition-all duration-200 hover:border-black/30 dark:hover:border-white/30"
          >
            <div className="w-4 h-4 flex items-center justify-center shrink-0">
              {item.icon}
            </div>
            <span className="text-[11px] xs:text-xs font-mono font-medium text-black dark:text-white whitespace-nowrap">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
