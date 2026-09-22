import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { TeamMember } from '../../data/teamData';

interface TeamMemberRowProps {
  member: TeamMember;
}

export const TeamMemberRow: React.FC<TeamMemberRowProps> = ({ member }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      onClick={() => setIsExpanded(!isExpanded)}
      className={`group relative block w-full py-4 sm:py-5 px-3 xs:px-4 sm:px-6 border-b border-day-border dark:border-agency-border transition-all duration-300 ease-out hover:bg-day-surface/80 dark:hover:bg-agency-surface/60 cursor-pointer ${
        member.isFounder
          ? 'bg-day-surface/40 dark:bg-agency-surface/30'
          : 'bg-transparent'
      }`}
    >
      <div className="flex flex-col w-full">
        {/* Main Editorial Row */}
        <div className="flex items-center justify-between gap-3 sm:gap-6">
          {/* Left: Number + Photo/Initials + Name */}
          <div className="flex items-center gap-3 sm:gap-5 min-w-0">
            {/* Number */}
            <span
              className={`text-xs sm:text-sm font-mono shrink-0 w-5 sm:w-6 transition-colors duration-300 ${
                member.isFounder
                  ? 'text-digitify-purple font-semibold'
                  : 'text-day-muted dark:text-agency-muted group-hover:text-digitify-purple'
              }`}
            >
              {member.number}
            </span>

            {/* Photo / Initials Monogram */}
            <div
              className={`relative w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl border shrink-0 flex flex-col items-center justify-center overflow-hidden transition-all duration-300 ${
                member.isFounder
                  ? 'border-digitify-purple/40 bg-digitify-purple/5 shadow-sm'
                  : 'border-day-border dark:border-agency-border bg-day-surface dark:bg-agency-surface group-hover:border-black/30 dark:group-hover:border-white/30'
              }`}
            >
              <span
                className={`text-xs sm:text-sm font-mono font-semibold tracking-wider transition-colors duration-300 ${
                  member.isFounder
                    ? 'text-digitify-purple'
                    : 'text-black dark:text-white group-hover:text-digitify-purple'
                }`}
              >
                {member.initials}
              </span>
              <span className="text-[7px] sm:text-[8px] font-mono uppercase tracking-tighter text-day-muted dark:text-agency-muted">
                PHOTO
              </span>
            </div>

            {/* Name (Primary Visual Element) */}
            <div className="flex flex-col min-w-0">
              <div className="flex items-center gap-2">
                <span
                  className={`h-1.5 w-1.5 rounded-full bg-digitify-purple shrink-0 transition-opacity duration-300 ${
                    member.isFounder
                      ? 'opacity-100 animate-pulse'
                      : 'opacity-0 group-hover:opacity-100'
                  }`}
                />
                <h3
                  className={`font-display font-medium tracking-tight text-black dark:text-white truncate transition-colors duration-300 ${
                    member.isFounder
                      ? 'text-base xs:text-lg sm:text-xl md:text-2xl font-semibold'
                      : 'text-sm xs:text-base sm:text-lg md:text-xl'
                  }`}
                >
                  {member.name}
                </h3>
                {member.isFounder && (
                  <span className="hidden md:inline-flex items-center px-2 py-0.5 rounded text-[9px] font-mono uppercase tracking-wider bg-digitify-purple/10 text-digitify-purple border border-digitify-purple/20 shrink-0">
                    FOUNDER
                  </span>
                )}
              </div>

              {/* Mobile Only: Role & Specialisation stacked below name */}
              <div className="sm:hidden mt-1 space-y-0.5">
                <span className="text-xs font-mono uppercase tracking-wider text-black dark:text-white font-semibold block truncate">
                  {member.role}
                </span>
                <span className="text-[11px] font-mono text-day-muted dark:text-agency-muted block truncate">
                  {member.specialisation}
                </span>
              </div>
            </div>
          </div>

          {/* Right: Desktop Role & Specialisation + Profile Link */}
          <div className="flex items-center gap-3 sm:gap-6 shrink-0">
            {/* Desktop Only: Role (smaller but clearly visible) & Specialisation (even more subtle) */}
            <div className="hidden sm:flex flex-col text-right items-end justify-center">
              <span className="text-xs sm:text-sm font-mono uppercase tracking-wider text-black dark:text-white font-semibold block group-hover:text-digitify-purple transition-colors duration-300">
                {member.role}
              </span>
              <span className="text-[11px] xs:text-xs font-mono text-day-muted dark:text-agency-muted mt-0.5 block">
                {member.specialisation}
              </span>
            </div>

            {/* Profile Action Link */}
            <Link
              to={`/team/${member.id}`}
              onClick={(e) => e.stopPropagation()}
              aria-label={`View full profile for ${member.name}`}
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-day-border dark:border-agency-border flex items-center justify-center text-day-muted dark:text-agency-muted hover:text-black dark:hover:text-white hover:border-black dark:hover:border-white transition-all duration-300 shrink-0 group-hover:scale-105 active:scale-95 bg-day-surface dark:bg-agency-surface"
            >
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>

        {/* Expandable Short Description (reveals on desktop hover OR mobile tap) */}
        <div
          className={`overflow-hidden transition-all duration-300 ease-out sm:pl-[72px] md:pl-[84px] ${
            isExpanded
              ? 'max-h-40 opacity-100 pt-3 sm:pt-2.5'
              : 'max-h-0 opacity-0 sm:group-hover:max-h-28 sm:group-hover:opacity-100 sm:group-hover:pt-2.5'
          }`}
        >
          <p className="text-xs sm:text-sm text-day-subtext dark:text-agency-subtext leading-relaxed max-w-3xl">
            {member.shortIntro}
          </p>
          <div className="pt-2 sm:hidden">
            <Link
              to={`/team/${member.id}`}
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-black dark:text-white hover:text-digitify-purple font-medium underline underline-offset-4"
            >
              <span>View Full Profile</span>
              <ArrowUpRight size={12} />
            </Link>
          </div>
        </div>
      </div>

      {/* Subtle bottom line hover effect */}
      <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-black dark:bg-white group-hover:w-full transition-all duration-500 ease-out" />
    </div>
  );
};
