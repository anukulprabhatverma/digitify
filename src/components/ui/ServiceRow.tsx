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
      className={`group block w-full border-b border-day-border dark:border-agency-border py-8 md:py-10 transition-all duration-200 ${
        isHovered ? 'bg-black/[0.02] dark:bg-white/[0.02] pl-2 sm:pl-4' : ''
      }`}
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Left: Number & Service Name */}
        <div className="flex items-baseline gap-6 sm:gap-10">
          <span className="font-mono text-xs sm:text-sm text-day-muted dark:text-agency-muted group-hover:text-digitify-purple transition-colors">
            {service.number}
          </span>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-medium tracking-tight text-black dark:text-white transition-colors">
            {service.name}
          </h3>
        </div>

        {/* Right: Short description & Arrow */}
        <div className="flex items-center justify-between md:justify-end gap-6 md:max-w-md">
          <p className="text-xs sm:text-sm text-day-subtext dark:text-agency-subtext leading-relaxed line-clamp-2 md:line-clamp-none">
            {service.shortDesc}
          </p>
          <div className="shrink-0 w-9 h-9 rounded-full border border-day-border dark:border-agency-border flex items-center justify-center text-day-muted dark:text-agency-muted group-hover:text-black dark:group-hover:text-white group-hover:border-black dark:group-hover:border-white group-hover:bg-black/5 dark:group-hover:bg-white/10 transition-all">
            <ArrowUpRight size={16} className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>
        </div>
      </div>

      {/* Expanded context shown on hover */}
      {isHovered && (
        <div className="mt-4 pt-4 border-t border-day-border/50 dark:border-agency-border/40 hidden md:flex items-center gap-2 flex-wrap">
          <span className="text-[11px] font-mono text-day-muted dark:text-agency-muted uppercase tracking-wider mr-2">
            Key Scope:
          </span>
          {service.deliverables.slice(0, 3).map((item, idx) => (
            <span
              key={idx}
              className="text-[11px] font-mono px-2.5 py-1 rounded bg-day-surface dark:bg-agency-surface border border-day-border dark:border-agency-border text-day-subtext dark:text-agency-subtext"
            >
              {item}
            </span>
          ))}
        </div>
      )}
    </Link>
  );
};
