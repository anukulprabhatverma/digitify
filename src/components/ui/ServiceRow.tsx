import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { ServiceItem } from '../../data/servicesData';

interface ServiceRowProps {
  service: ServiceItem;
  isHovered: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export const ServiceRow: React.FC<ServiceRowProps> = ({
  service,
  isHovered,
  onMouseEnter,
  onMouseLeave,
}) => {
  return (
    <Link
      to="/services"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`group block w-full border-b border-day-border dark:border-agency-border py-5 sm:py-8 md:py-10 transition-all duration-200 active:bg-black/[0.03] dark:active:bg-white/[0.03] ${
        isHovered ? 'bg-black/[0.02] dark:bg-white/[0.02] pl-2 sm:pl-4' : ''
      }`}
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-4">
        {/* Left: Number & Service Name */}
        <div className="flex items-baseline gap-3 xs:gap-5 sm:gap-10">
          <span className="font-mono text-xs sm:text-sm text-day-muted dark:text-agency-muted group-hover:text-digitify-purple transition-colors shrink-0">
            {service.number}
          </span>
          <h3 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-display font-medium tracking-tight text-black dark:text-white transition-colors">
            {service.name}
          </h3>
        </div>

        {/* Right: Short description & Arrow */}
        <div className="flex items-center justify-between md:justify-end gap-4 sm:gap-6 md:max-w-md pl-6 xs:pl-8 sm:pl-0">
          <p className="text-xs sm:text-sm text-day-subtext dark:text-agency-subtext leading-relaxed line-clamp-2 md:line-clamp-none">
            {service.shortDesc}
          </p>
          <div className="shrink-0 w-8 h-8 xs:w-9 xs:h-9 rounded-full border border-day-border dark:border-agency-border flex items-center justify-center text-day-muted dark:text-agency-muted group-hover:text-black dark:group-hover:text-white group-hover:border-black dark:group-hover:border-white group-hover:bg-black/5 dark:group-hover:bg-white/10 transition-all">
            <ArrowUpRight size={15} className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>
        </div>
      </div>

      {/* Expanded context / Deliverables chips (visible on mobile, enhanced on hover for desktop) */}
      <div className={`mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-day-border/40 dark:border-agency-border/30 flex items-center gap-1.5 xs:gap-2 flex-wrap pl-6 xs:pl-8 sm:pl-0 ${isHovered ? 'md:flex' : 'flex md:hidden'}`}>
        <span className="text-[10px] sm:text-[11px] font-mono text-day-muted dark:text-agency-muted uppercase tracking-wider mr-1">
          Key Scope:
        </span>
        {service.deliverables.slice(0, 3).map((item, idx) => (
          <span
            key={idx}
            className="text-[10px] sm:text-[11px] font-mono px-2 py-0.5 rounded bg-day-surface dark:bg-agency-surface border border-day-border dark:border-agency-border text-day-subtext dark:text-agency-subtext"
          >
            {item}
          </span>
        ))}
      </div>
    </Link>
  );
};
