import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { TeamMember } from '../../data/teamData';

interface TeamMemberRowProps {
  member: TeamMember;
}

export const TeamMemberRow: React.FC<TeamMemberRowProps> = ({ member }) => {
  return (
    <Link
      to={`/team/${member.id}`}
      tabIndex={0}
      aria-label={`View profile for ${member.name}, ${member.role}`}
      className="group relative block w-full py-3.5 xs:py-4 sm:py-5 px-2 xs:px-3 sm:px-5 border-b border-day-border dark:border-agency-border transition-all duration-400 ease-out hover:bg-day-surface/60 dark:hover:bg-agency-surface/50 active:bg-day-surface/80 dark:active:bg-agency-surface/70 focus:outline-none min-h-[58px]"
    >
      <div className="flex items-center justify-between gap-2.5 xs:gap-3 sm:gap-6 transition-transform duration-400 ease-out group-hover:translate-x-2 sm:group-hover:translate-x-3">
        {/* Left: Index, Profile Photo Placeholder & Name */}
        <div className="flex items-center gap-2.5 xs:gap-3 sm:gap-5 min-w-0">
          {/* Index Number */}
          <span className="text-xs sm:text-sm font-mono text-day-muted dark:text-agency-muted group-hover:text-digitify-purple transition-colors duration-300 w-4 xs:w-5 shrink-0">
            {member.number}
          </span>

          {/* Profile Photo Placeholder Area */}
          <div
            className="relative w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg border border-day-border dark:border-agency-border bg-day-surface dark:bg-agency-surface shrink-0 flex flex-col items-center justify-center overflow-hidden transition-all duration-400 group-hover:border-black/40 dark:group-hover:border-white/40"
            title={`Editable photo placeholder for ${member.name}`}
          >
            {/* Minimalist Monogram / Placeholder Graphic */}
            <div className="flex flex-col items-center justify-center select-none text-center p-0.5 xs:p-1">
              <span className="text-[11px] xs:text-xs sm:text-sm font-mono font-semibold tracking-wider text-black dark:text-white group-hover:text-digitify-purple transition-colors duration-300">
                {member.initials}
              </span>
              <span className="text-[7px] xs:text-[8px] font-mono uppercase tracking-tighter text-day-muted dark:text-agency-muted">
                PHOTO
              </span>
            </div>

            {/* Subtle overlay indicator on hover */}
            <div className="absolute inset-0 bg-black/5 dark:bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          </div>

          {/* Name & Role */}
          <div className="flex flex-col min-w-0">
            <div className="flex items-center gap-1.5 xs:gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-digitify-purple opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300 shrink-0" />
              <h3 className="text-sm xs:text-base sm:text-lg md:text-xl font-display font-medium text-black dark:text-white tracking-tight truncate group-hover:text-black dark:group-hover:text-white transition-colors duration-300">
                {member.name}
              </h3>
            </div>
            <span className="text-[11px] xs:text-xs font-mono uppercase tracking-wider text-day-subtext dark:text-agency-subtext block sm:hidden mt-0.5 truncate">
              {member.role}
            </span>
          </div>
        </div>

        {/* Right: Role, Category & Indicator Arrow */}
        <div className="flex items-center gap-3 sm:gap-4 shrink-0">
          <div className="hidden sm:block text-right">
            <span className="text-xs sm:text-sm font-mono uppercase tracking-widest text-day-subtext dark:text-agency-subtext group-hover:text-black dark:group-hover:text-white transition-colors duration-300 block">
              {member.role}
            </span>
            <span className="text-[11px] font-mono text-day-muted dark:text-agency-muted mt-0.5 block">
              {member.category}
            </span>
          </div>

          {/* Arrow Indicator */}
          <div className="w-8 h-8 rounded-full border border-day-border dark:border-agency-border flex items-center justify-center text-day-muted dark:text-agency-muted opacity-60 sm:opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 group-focus:opacity-100 group-focus:translate-x-0 transition-all duration-300 ease-out shrink-0 group-hover:border-black dark:group-hover:border-white group-hover:text-black dark:group-hover:text-white">
            <ArrowUpRight size={14} />
          </div>
        </div>
      </div>

      {/* Expanding underline hover effect */}
      <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-black dark:bg-white group-hover:w-full transition-all duration-500 ease-out" />
    </Link>
  );
};
