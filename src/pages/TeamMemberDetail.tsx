import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { teamMembers } from '../data/teamData';

export const TeamMemberDetail: React.FC = () => {
  const { memberId } = useParams<{ memberId: string }>();

  const memberIndex = teamMembers.findIndex(
    (m) => m.id === memberId || (memberId === 'aarti' && m.id === 'aarti-kumari')
  );
  const member = teamMembers[memberIndex];

  if (!member) {
    return <Navigate to="/about" replace />;
  }

  const prevMember =
    memberIndex > 0
      ? teamMembers[memberIndex - 1]
      : teamMembers[teamMembers.length - 1];
  const nextMember =
    memberIndex < teamMembers.length - 1
      ? teamMembers[memberIndex + 1]
      : teamMembers[0];

  return (
    <div className="w-full max-w-7xl mx-auto px-3.5 xs:px-4 sm:px-8 md:px-12 py-5 xs:py-8 sm:py-12 flex flex-col space-y-8 xs:space-y-12 sm:space-y-16 animate-fadeIn">
      {/* Top Breadcrumb / Back Navigation */}
      <div className="flex items-center justify-between border-b border-day-border dark:border-agency-border pb-3.5 sm:pb-4">
        <Link
          to="/about"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-day-subtext dark:text-agency-subtext hover:text-black dark:hover:text-white transition-colors py-1"
        >
          <ArrowLeft size={14} />
          <span>Back to Team</span>
        </Link>

        <div className="flex items-center gap-2 text-[11px] xs:text-xs font-mono text-day-muted dark:text-agency-muted">
          <span>MEMBER {member.number} OF {String(teamMembers.length).padStart(2, '0')}</span>
        </div>
      </div>

      {/* Main Profile Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 xs:gap-8 lg:gap-14 items-start">
        {/* Left Column: Editorial Photo Card */}
        <div className="lg:col-span-5 flex flex-col space-y-4">
          <div className="relative aspect-square xs:aspect-[4/5] w-full rounded-xl sm:rounded-2xl border border-day-border dark:border-agency-border bg-day-surface dark:bg-agency-surface overflow-hidden group shadow-sm">
            {member.image ? (
              <>
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                {/* Subtle gradient vignette at top and bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30 pointer-events-none" />

                {/* Top Badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold backdrop-blur-md bg-black/50 text-white border border-white/20">
                    {member.number}
                  </span>
                  {member.experience ? (
                    <span className="px-3 py-1 rounded-full text-[11px] font-mono tracking-wider backdrop-blur-md bg-digitify-purple/90 text-white border border-digitify-purple/40 font-medium">
                      {member.experience}
                    </span>
                  ) : (
                    <span className="px-3 py-1 rounded-full text-[10px] font-mono tracking-widest uppercase backdrop-blur-md bg-black/40 text-white/90 border border-white/10">
                      CORE TEAM
                    </span>
                  )}
                </div>

                {/* Bottom Details Overlay */}
                <div className="absolute bottom-4 left-4 right-4 pointer-events-none space-y-0.5">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-white/80 block">
                    {member.role}
                  </span>
                  <span className="text-base sm:text-lg font-display font-medium text-white block">
                    {member.name}
                  </span>
                </div>
              </>
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-between p-4 xs:p-6 sm:p-8">
                {/* Top Badge */}
                <div className="w-full flex items-center justify-between">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-day-muted dark:text-agency-muted">
                    {member.number}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-full border border-day-border dark:border-agency-border bg-white dark:bg-black text-day-subtext dark:text-agency-subtext">
                    PHOTO PLACEHOLDER
                  </span>
                </div>

                {/* Central Monogram Placeholder Graphic */}
                <div className="flex flex-col items-center justify-center text-center my-auto">
                  <div className="w-20 h-20 xs:w-24 xs:h-24 sm:w-28 sm:h-28 rounded-full border border-day-border dark:border-agency-border bg-white dark:bg-[#08080a] flex items-center justify-center mb-3 sm:mb-4 shadow-sm">
                    <span className="text-2xl xs:text-3xl sm:text-4xl font-display font-medium tracking-tight text-black dark:text-white">
                      {member.initials}
                    </span>
                  </div>
                  <span className="text-sm font-mono uppercase tracking-widest text-black dark:text-white font-medium">
                    {member.name}
                  </span>
                  <span className="text-xs font-mono text-day-muted dark:text-agency-muted mt-1">
                    Verified team photo coming soon
                  </span>
                </div>

                {/* Bottom Guide Note */}
                <div className="w-full border-t border-day-border/60 dark:border-agency-border/60 pt-3 text-center">
                  <span className="text-[10px] font-mono text-day-muted dark:text-agency-muted block">
                    RECOMMENDED: 800 × 1000PX (PORTRAIT JPG/PNG)
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Quick Connect Pill */}
          <div className="p-3.5 xs:p-4 rounded-xl border border-day-border dark:border-agency-border bg-day-surface/60 dark:bg-agency-surface/40 flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-mono text-day-subtext dark:text-agency-subtext">
              <span className="h-1.5 w-1.5 rounded-full bg-digitify-purple animate-pulse" />
              <span>DIGITIFY CORE TEAM</span>
            </div>
            <Link
              to="/contact"
              className="text-xs font-mono uppercase tracking-wider text-black dark:text-white hover:text-digitify-purple flex items-center gap-1 transition-colors py-1"
            >
              <span>Connect</span>
              <ArrowUpRight size={12} />
            </Link>
          </div>
        </div>

        {/* Right Column: Name, Role, Intro, Responsibilities & Work Info */}
        <div className="lg:col-span-7 flex flex-col space-y-6 xs:space-y-8">
          {/* Header Identity */}
          <div className="space-y-2.5 xs:space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-day-muted dark:text-agency-muted uppercase tracking-widest">
              <span className="h-1.5 w-1.5 rounded-full bg-digitify-purple" />
              <span>{member.category}</span>
            </div>

            <h1 className="text-2xl xs:text-4xl sm:text-5xl md:text-6xl font-display font-medium tracking-tightest text-black dark:text-white leading-[1.05]">
              {member.name}
            </h1>

            <p className="text-xs xs:text-sm sm:text-base font-mono uppercase tracking-widest text-day-subtext dark:text-agency-subtext flex flex-wrap items-center gap-2">
              <span className="text-black dark:text-white font-semibold">{member.role}</span>
              <span className="text-day-border dark:text-agency-border">·</span>
              <span className="text-day-muted dark:text-agency-muted">{member.specialisation}</span>
              {member.experience && (
                <>
                  <span className="text-day-border dark:text-agency-border">·</span>
                  <span className="text-digitify-purple font-semibold">{member.experience}</span>
                </>
              )}
            </p>
          </div>

          {/* Short Professional Introduction */}
          <div className="border-t border-day-border dark:border-agency-border pt-5 xs:pt-6">
            <span className="text-xs font-mono uppercase tracking-widest text-day-muted dark:text-agency-muted block mb-2">
              OVERVIEW
            </span>
            <p className="text-sm xs:text-base sm:text-lg md:text-xl text-black dark:text-white font-normal leading-relaxed">
              {member.shortIntro}
            </p>
          </div>

          {/* Key Responsibilities */}
          <div className="border-t border-day-border dark:border-agency-border pt-5 xs:pt-6">
            <span className="text-xs font-mono uppercase tracking-widest text-day-muted dark:text-agency-muted block mb-3">
              PRIMARY RESPONSIBILITIES
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
              {member.responsibilities.map((resp, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-lg border border-day-border dark:border-agency-border bg-day-surface/40 dark:bg-agency-surface/30"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-digitify-purple mt-2 shrink-0" />
                  <span className="text-xs sm:text-sm text-day-subtext dark:text-agency-subtext leading-relaxed">
                    {resp}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Expertise Tags */}
          <div className="border-t border-day-border dark:border-agency-border pt-5 xs:pt-6">
            <span className="text-xs font-mono uppercase tracking-widest text-day-muted dark:text-agency-muted block mb-3">
              DISCIPLINARY EXPERTISE
            </span>
            <div className="flex flex-wrap gap-2">
              {member.expertise.map((skill, idx) => (
                <span
                  key={idx}
                  className="text-[11px] xs:text-xs font-mono uppercase tracking-wider px-2.5 xs:px-3 py-1.5 rounded-full border border-day-border dark:border-agency-border bg-day-surface dark:bg-agency-surface text-black dark:text-white"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Minimal Project / Work-Related Information Section */}
          <div className="border-t border-day-border dark:border-agency-border pt-5 xs:pt-6">
            <span className="text-xs font-mono uppercase tracking-widest text-day-muted dark:text-agency-muted block mb-2">
              PROJECT & CLIENT ENGAGEMENT
            </span>
            <div className="p-4 xs:p-5 sm:p-6 rounded-xl border border-day-border dark:border-agency-border bg-day-surface/50 dark:bg-agency-surface/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h4 className="text-sm sm:text-base font-display font-medium text-black dark:text-white mb-1">
                  Cross-Discipline Project Involvement
                </h4>
                <p className="text-xs sm:text-sm text-day-subtext dark:text-agency-subtext leading-relaxed max-w-lg">
                  {member.projectFocus}
                </p>
              </div>
              <Link
                to="/work"
                className="w-full sm:w-auto justify-center inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-day-border dark:border-agency-border text-xs font-mono uppercase tracking-wider hover:border-black dark:hover:border-white transition-colors shrink-0"
              >
                <span>View Work</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Peer Navigation */}
      <div className="border-t border-day-border dark:border-agency-border pt-6 sm:pt-8 flex items-center justify-between gap-2">
        <Link
          to={`/team/${prevMember.id}`}
          className="group flex items-center gap-2.5 sm:gap-3 text-left py-2"
        >
          <div className="w-10 h-10 sm:w-9 sm:h-9 rounded-full border border-day-border dark:border-agency-border flex items-center justify-center text-day-muted dark:text-agency-muted group-hover:border-black dark:group-hover:border-white group-hover:text-black dark:group-hover:text-white transition-all shrink-0">
            <ArrowLeft size={15} />
          </div>
          <div className="hidden sm:block">
            <span className="text-[10px] font-mono text-day-muted dark:text-agency-muted block">
              PREVIOUS MEMBER
            </span>
            <span className="text-xs sm:text-sm font-display font-medium text-black dark:text-white group-hover:text-digitify-purple transition-colors">
              {prevMember.name}
            </span>
          </div>
        </Link>

        <Link
          to="/about"
          className="text-xs font-mono uppercase tracking-widest text-day-muted dark:text-agency-muted hover:text-black dark:hover:text-white transition-colors py-2 px-1 text-center"
        >
          All Members
        </Link>

        <Link
          to={`/team/${nextMember.id}`}
          className="group flex items-center gap-2.5 sm:gap-3 text-right py-2"
        >
          <div className="hidden sm:block">
            <span className="text-[10px] font-mono text-day-muted dark:text-agency-muted block">
              NEXT MEMBER
            </span>
            <span className="text-xs sm:text-sm font-display font-medium text-black dark:text-white group-hover:text-digitify-purple transition-colors">
              {nextMember.name}
            </span>
          </div>
          <div className="w-10 h-10 sm:w-9 sm:h-9 rounded-full border border-day-border dark:border-agency-border flex items-center justify-center text-day-muted dark:text-agency-muted group-hover:border-black dark:group-hover:border-white group-hover:text-black dark:group-hover:text-white transition-all shrink-0">
            <ArrowRight size={15} />
          </div>
        </Link>
      </div>
    </div>
  );
};
