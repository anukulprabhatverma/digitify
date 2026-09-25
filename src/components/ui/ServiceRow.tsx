import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { ServiceItem } from '../../data/servicesData';

interface ServiceRowProps {
  service: ServiceItem;
  isHovered: boolean;
  isMobileExpanded: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onToggleMobile: () => void;
}

export const ServiceRow: React.FC<ServiceRowProps> = ({
  service,
  isHovered,
  isMobileExpanded,
  onMouseEnter,
  onMouseLeave,
  onToggleMobile,
}) => {
  const navigate = useNavigate();

  // Guard mouseEnter and mouseLeave to desktop viewports (>= 768px), avoiding synthetic touch hover on mobile
  const handleMouseEnter = () => {
    if (typeof window !== 'undefined' && window.innerWidth >= 768) {
      onMouseEnter();
    }
  };

  const handleMouseLeave = () => {
    if (typeof window !== 'undefined' && window.innerWidth >= 768) {
      onMouseLeave();
    }
  };

  const handleRowClick = () => {
    // If on mobile / compact viewport (< 768px), toggle expand/collapse
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      onToggleMobile();
    } else {
      // On desktop, keep existing link navigation to corresponding service section
      navigate(`/services#${service.id}`);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleRowClick();
    }
  };

  const isActive = isHovered || isMobileExpanded;

  return (
    <div
      role="button"
      tabIndex={0}
      aria-expanded={isMobileExpanded}
      onClick={handleRowClick}
      onKeyDown={handleKeyDown}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`group block w-full border-b border-day-border dark:border-agency-border py-5 sm:py-8 md:py-10 transition-all duration-200 cursor-pointer select-none active:bg-black/[0.03] dark:active:bg-white/[0.03] ${
        isActive ? 'bg-black/[0.02] dark:bg-white/[0.02] pl-2 sm:pl-4' : ''
      }`}
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-4">
        {/* Left: Number & Service Name */}
        <div className="flex items-baseline gap-3 xs:gap-5 sm:gap-10">
          <span
            className={`font-mono text-xs sm:text-sm transition-colors shrink-0 ${
              isActive
                ? 'text-digitify-purple'
                : 'text-day-muted dark:text-agency-muted group-hover:text-digitify-purple'
            }`}
          >
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
          <Link
            to={`/services#${service.id}`}
            onClick={(e) => {
              e.stopPropagation();
            }}
            aria-label={`View ${service.name} section on Services page`}
            className={`shrink-0 w-8 h-8 xs:w-9 xs:h-9 rounded-full border flex items-center justify-center transition-all ${
              isActive
                ? 'text-black dark:text-white border-black dark:border-white bg-black/5 dark:bg-white/10'
                : 'border-day-border dark:border-agency-border text-day-muted dark:text-agency-muted group-hover:text-black dark:group-hover:text-white group-hover:border-black dark:group-hover:border-white group-hover:bg-black/5 dark:group-hover:bg-white/10'
            }`}
          >
            <ArrowUpRight
              size={15}
              className={`transform transition-transform duration-200 ${
                isActive
                  ? 'translate-x-0.5 -translate-y-0.5'
                  : 'group-hover:translate-x-0.5 group-hover:-translate-y-0.5'
              }`}
            />
          </Link>
        </div>
      </div>

      {/* Expanded context / Deliverables chips (smooth animated accordion with zero sudden height jumps) */}
      <div
        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isActive
            ? 'grid-rows-[1fr] opacity-100'
            : 'grid-rows-[0fr] opacity-0 pointer-events-none'
        }`}
      >
        <div className="overflow-hidden">
          <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-day-border/40 dark:border-agency-border/30 flex items-center gap-1.5 xs:gap-2 flex-wrap pl-6 xs:pl-8 sm:pl-0">
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
        </div>
      </div>
    </div>
  );
};
