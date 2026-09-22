import React, { useState } from 'react';

const disciplines = [
  'BRANDING',
  'DIGITAL MARKETING',
  'PERFORMANCE MARKETING',
  'SOCIAL MEDIA',
  'UI/UX DESIGN',
  'WEB DEVELOPMENT',
  'SEO',
];

export const ServiceMarquee: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);
  // Duplicate list to ensure an uninterrupted, seamless infinite loop
  const marqueeItems = [...disciplines, ...disciplines, ...disciplines];

  return (
    <div
      className="w-full overflow-hidden border-y border-day-border dark:border-agency-border bg-day-surface/40 dark:bg-agency-surface/30 py-2.5 sm:py-4 select-none group touch-pan-y"
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      <div
        className="flex w-max items-center animate-marquee group-hover:[animation-play-state:paused] motion-reduce:animate-none"
        style={isPaused ? { animationPlayState: 'paused' } : undefined}
      >
        {marqueeItems.map((item, index) => (
          <div key={index} className="flex items-center space-x-4 sm:space-x-8 px-2.5 sm:px-4 shrink-0">
            <span className="text-[11px] sm:text-sm font-mono tracking-widest uppercase font-medium text-black dark:text-white transition-colors duration-200">
              {item}
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-digitify-purple opacity-75 shrink-0" />
          </div>
        ))}
      </div>
    </div>
  );
};
