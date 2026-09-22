import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export const MobileStickyCta: React.FC = () => {
  const location = useLocation();

  // Do not show on the contact page itself
  if (location.pathname === '/contact') {
    return null;
  }

  return (
    <div
      className="fixed z-30 right-4 md:hidden pointer-events-auto animate-fadeIn"
      style={{
        bottom: 'max(1.25rem, calc(env(safe-area-inset-bottom, 0px) + 0.75rem))',
      }}
    >
      <Link
        to="/contact"
        aria-label="Start a project with Digitify"
        className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-black/90 dark:bg-white/95 text-white dark:text-black text-[11px] font-mono uppercase tracking-wider font-semibold shadow-xl backdrop-blur-md border border-white/20 dark:border-black/10 active:scale-95 hover:scale-105 transition-transform"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-digitify-purple opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-digitify-purple" />
        </span>
        <span>Start a Project</span>
        <ArrowUpRight size={13} className="shrink-0" />
      </Link>
    </div>
  );
};
