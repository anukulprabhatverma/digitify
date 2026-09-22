import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { TeamMemberRow } from '../components/ui/TeamMemberRow';
import { teamMembers } from '../data/teamData';

export const About: React.FC = () => {
  const pillars = [
    {
      number: '01',
      title: 'STRATEGY',
      tagline: 'Clarity Before Craft',
      description:
        'Every impactful campaign starts with structural thinking. We deconstruct market dynamics, identify competitive gaps, and establish a distinct brand posture before touching a single pixel.',
    },
    {
      number: '02',
      title: 'CREATIVITY',
      tagline: 'Form That Demands Attention',
      description:
        'Aesthetic excellence is not decorative; it is commercial leverage. We engineer visual identities, typography systems, and art-directed media that elevate client perception.',
    },
    {
      number: '03',
      title: 'EXECUTION',
      tagline: 'Uncompromising Precision',
      description:
        'Great concepts fail when execution falters. We treat technical frontend engineering, campaign production, and media rollout with rigorous, meticulous attention to detail.',
    },
    {
      number: '04',
      title: 'GROWTH',
      tagline: 'Enduring Momentum',
      description:
        'We build enduring systems rather than flash-in-the-pan stunts. Our work is engineered to scale with client ambitions and establish compound brand equity over time.',
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-3.5 xs:px-4 sm:px-8 md:px-12 py-5 xs:py-6 sm:py-10 flex flex-col space-y-8 xs:space-y-10 sm:space-y-14 md:space-y-16">
      {/* Hero Header */}
      <section className="flex flex-col space-y-3 sm:space-y-4">
        <div className="flex items-center gap-2 text-xs font-mono text-day-muted dark:text-agency-muted uppercase tracking-widest">
          <span className="h-1.5 w-1.5 rounded-full bg-digitify-purple" />
          <span>01 — ABOUT DIGITIFY</span>
        </div>

        <h1 className="text-2xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-medium tracking-tightest leading-[1.04] sm:leading-[1] text-black dark:text-white">
          WE BUILD BRANDS
          <br />
          THAT MOVE BUSINESSES FORWARD<span className="text-digitify-purple">.</span>
        </h1>

        <p className="text-sm xs:text-base sm:text-lg md:text-xl text-day-subtext dark:text-agency-subtext font-normal leading-relaxed max-w-2xl pt-1">
          Strategy, design &amp; digital marketing built for ambitious brands.
        </p>
      </section>

      {/* Narrative Section: What We Believe */}
      <section className="border-t border-day-border dark:border-agency-border pt-6 xs:pt-8 sm:pt-10 md:pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 lg:gap-12">
          <div className="lg:col-span-5">
            <span className="text-xs font-mono uppercase tracking-widest text-day-muted dark:text-agency-muted block mb-2 sm:mb-3">
              OUR BELIEF
            </span>
            <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-display font-medium text-black dark:text-white leading-snug sm:leading-tight">
              Design is not merely what it looks like. It is how a brand commands presence.
            </h2>
          </div>

          <div className="lg:col-span-7 space-y-3.5 sm:space-y-4 text-xs sm:text-sm text-day-subtext dark:text-agency-subtext leading-relaxed">
            <p>
              In an attention economy crowded with template-driven homogeny, most brands become invisible noise. We exist to create the antidote: deliberate, confident, and unforgettable digital experiences.
            </p>
            <p>
              Our multidisciplinary team works closely with founders, marketing directors, and ambitious leadership teams. By removing bureaucratic layers and working with high-conviction craftsmanship, we transform complex business challenges into intuitive visual solutions.
            </p>
            <p>
              Whether engineering a comprehensive brand identity from scratch, rolling out high-performance acquisition campaigns, or developing responsive digital flagships, our work is defined by strategic intent and technical excellence.
            </p>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━
          SECTION — THE TEAM (02 — THE TEAM)
          ━━━━━━━━━━━━━━━━━━━━ */}
      <section className="border-t border-day-border dark:border-agency-border pt-6 xs:pt-8 sm:pt-10 md:pt-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-4 sm:mb-6 gap-2 xs:gap-3">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-day-muted dark:text-agency-muted block mb-1.5">
              02 — THE TEAM
            </span>
            <h2 className="text-xl xs:text-2xl sm:text-4xl md:text-5xl font-display font-medium tracking-tight text-black dark:text-white">
              LEADERSHIP & SPECIALISTS
            </h2>
          </div>
          <span className="hidden xs:block text-xs font-mono text-day-muted dark:text-agency-muted">
            HOVER OR TAP TO EXPAND BRIEF · CLICK FOR PROFILE
          </span>
        </div>

        <p className="text-xs sm:text-sm text-day-subtext dark:text-agency-subtext max-w-2xl mb-6 font-mono leading-relaxed">
          Built around strategy, design, technology, marketing, research and execution working together. A focused agency structure engineered for direct collaboration and measurable growth.
        </p>

        {/* Interactive Editorial Team List with Profile Photo Placeholders */}
        <div className="border-t border-day-border dark:border-agency-border divide-y divide-transparent">
          {teamMembers.map((member) => (
            <TeamMemberRow key={member.id} member={member} />
          ))}
        </div>
      </section>

      {/* 4 Core Pillars: STRATEGY, CREATIVITY, EXECUTION, GROWTH */}
      <section className="border-t border-day-border dark:border-agency-border pt-6 xs:pt-8 sm:pt-10 md:pt-12">
        <div className="mb-5 sm:mb-8">
          <span className="text-xs font-mono uppercase tracking-widest text-day-muted dark:text-agency-muted block mb-1.5">
            OUR PILLARS
          </span>
          <h2 className="text-xl xs:text-2xl sm:text-4xl font-display font-medium tracking-tight text-black dark:text-white">
            THE FOUR DISCIPLINARY PILLARS
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.number}
              className="relative overflow-hidden p-4 xs:p-5 sm:p-7 rounded-lg border border-day-border dark:border-agency-border bg-day-surface/60 dark:bg-agency-surface/40 hover:bg-day-surface dark:hover:bg-agency-surface/70 hover:border-digitify-purple/40 dark:hover:border-digitify-purple/40 motion-safe:hover:-translate-y-1.5 transition-all duration-400 ease-out flex flex-col justify-between space-y-4 sm:space-y-5 group cursor-default select-none motion-reduce:transform-none"
            >
              {/* Top Row: Number & Tagline */}
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-day-muted dark:text-agency-muted group-hover:text-digitify-purple group-hover:translate-x-1 transition-all duration-400 ease-out motion-reduce:transform-none">
                  {pillar.number}
                </span>
                <span className="text-[11px] xs:text-xs font-mono uppercase tracking-widest text-day-muted dark:text-agency-muted">
                  {pillar.tagline}
                </span>
              </div>

              {/* Middle: Title with upward shift & Description fading into focus */}
              <div>
                <h3 className="text-lg xs:text-xl sm:text-2xl font-display font-medium text-black dark:text-white mb-1.5 sm:mb-2 transition-transform duration-400 ease-out group-hover:-translate-y-0.5 sm:group-hover:-translate-y-1 motion-reduce:transform-none">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-day-subtext/85 dark:text-agency-subtext/85 group-hover:text-day-subtext dark:group-hover:text-agency-subtext group-hover:opacity-100 transition-all duration-400 ease-out leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              {/* Thin purple accent line revealing from left to right */}
              <div
                className="absolute bottom-0 left-0 h-[2px] w-0 bg-digitify-purple transition-all duration-400 ease-out group-hover:w-full motion-reduce:hidden pointer-events-none"
                aria-hidden="true"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Philosophy Statement & CTA */}
      <section className="border-t border-day-border dark:border-agency-border pt-6 xs:pt-8 sm:pt-10 md:pt-12">
        <div className="bg-day-surface dark:bg-agency-surface border border-day-border dark:border-agency-border rounded-xl p-5 xs:p-6 sm:p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5 sm:gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-digitify-purple block mb-1.5">
              Ready to collaborate?
            </span>
            <h3 className="text-lg xs:text-xl sm:text-3xl font-display font-medium text-black dark:text-white mb-2">
              Let’s build something remarkable together.
            </h3>
            <p className="text-xs sm:text-sm text-day-subtext dark:text-agency-subtext">
              We take on a limited number of select partnerships each quarter to ensure senior attention and uncompromising quality.
            </p>
          </div>

          <Link
            to="/contact"
            className="w-full sm:w-auto justify-center inline-flex items-center gap-2.5 px-6 py-3.5 sm:py-3 rounded-full bg-black text-white dark:bg-white dark:text-black text-xs uppercase tracking-widest font-semibold hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors shrink-0 shadow-sm"
          >
            <span>Start a Project</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </div>
  );
};
