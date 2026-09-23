import React, { useState } from 'react';
import { clientLogosRow1, clientLogosRow2, ClientLogoPlaceholder } from '../../data/clientLogosData';

interface LogoCardProps {
  logo: ClientLogoPlaceholder;
}

const LogoCard: React.FC<LogoCardProps> = ({ logo }) => {
  return (
    <div className="flex items-center gap-3 px-5 sm:px-6 py-3 sm:py-3.5 rounded-lg border border-day-border dark:border-agency-border bg-day-surface dark:bg-agency-surface shrink-0 transition-colors duration-200 hover:border-black/40 dark:hover:border-white/40">
      <div className="w-2 h-2 rounded-full bg-digitify-purple/70 shrink-0" />
      <div className="flex flex-col">
        <span className="text-xs sm:text-sm font-mono uppercase tracking-widest font-medium text-black dark:text-white whitespace-nowrap">
          {logo.name}
        </span>
        <span className="text-[10px] font-mono text-day-muted dark:text-agency-muted uppercase tracking-wider">
          {logo.category}
        </span>
      </div>
    </div>
  );
};

export const ClientLogoMarquee: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate arrays to guarantee seamless, uninterrupted infinite looping
  const row1Items = [...clientLogosRow1, ...clientLogosRow1, ...clientLogosRow1];
  const row2Items = [...clientLogosRow2, ...clientLogosRow2, ...clientLogosRow2];

  return (
    <div className="w-full flex flex-col space-y-5 sm:space-y-8">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 sm:gap-4">
        <div>
          <h2 className="text-xl xs:text-2xl sm:text-4xl md:text-5xl font-display font-medium tracking-tight text-black dark:text-white">
            CLIENTS & COLLABORATIONS
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-day-subtext dark:text-agency-subtext max-w-md leading-relaxed">
          Collaborating with ambitious brands and forward-thinking teams to engineer distinctive digital impact.
        </p>
      </div>

      {/* Dual Row Marquee Container with Scaled Edge Fades and Touch Pause */}
      <div
        className="relative w-full overflow-hidden py-2 space-y-2.5 sm:space-y-4 select-none group touch-pan-y"
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        {/* Left & Right gradient masks for editorial fade (narrower on mobile to reveal content) */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-6 xs:w-10 sm:w-20 bg-gradient-to-r from-white dark:from-[#08080a] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-6 xs:w-10 sm:w-20 bg-gradient-to-l from-white dark:from-[#08080a] to-transparent z-10" />

        {/* Row 1: Right to Left */}
        <div
          className="flex w-max items-center gap-2.5 sm:gap-4 animate-marquee group-hover:[animation-play-state:paused] motion-reduce:animate-none"
          style={isPaused ? { animationPlayState: 'paused' } : undefined}
        >
          {row1Items.map((logo, index) => (
            <LogoCard key={`r1-${logo.id}-${index}`} logo={logo} />
          ))}
        </div>

        {/* Row 2: Left to Right (Reverse Direction) */}
        <div
          className="flex w-max items-center gap-2.5 sm:gap-4 animate-marquee-reverse group-hover:[animation-play-state:paused] motion-reduce:animate-none"
          style={isPaused ? { animationPlayState: 'paused' } : undefined}
        >
          {row2Items.map((logo, index) => (
            <LogoCard key={`r2-${logo.id}-${index}`} logo={logo} />
          ))}
        </div>
      </div>
    </div>
  );
};
