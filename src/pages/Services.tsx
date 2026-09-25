import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { servicesData } from '../data/servicesData';
import { ServiceStack } from '../components/services/ServiceStack';

export const Services: React.FC = () => {
  return (
    <div className="w-full max-w-[1360px] mx-auto px-3.5 xs:px-4 sm:px-6 md:px-8 py-6 xs:py-8 sm:py-10 flex flex-col space-y-10 sm:space-y-14">
      {/* Header */}
      <section className="flex flex-col space-y-3 sm:space-y-6">
        <div className="flex items-center gap-2 text-xs font-mono text-day-muted dark:text-agency-muted uppercase tracking-widest">
          <span className="h-1.5 w-1.5 rounded-full bg-digitify-purple" />
          <span>Services & Practices</span>
        </div>

        <h1 className="text-2xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-medium tracking-tightest leading-[1] text-black dark:text-white">
          EXPERTISE ENGINEERED
          <br />
          FOR IMPACT<span className="text-digitify-purple">.</span>
        </h1>

        <p className="text-sm xs:text-base sm:text-lg md:text-xl text-day-subtext dark:text-agency-subtext leading-relaxed max-w-3xl pt-2 border-t border-day-border dark:border-agency-border">
          We bring disciplined strategy, striking visual craft, and rigorous technical execution across six core creative and digital practices.
        </p>

        {/* Scroll Exploration Cue */}
        <div className="flex items-center justify-between pt-4 border-t border-day-border/60 dark:border-agency-border/60 text-xs font-mono text-day-muted dark:text-agency-muted">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-digitify-purple animate-ping" />
            <span className="uppercase tracking-wider">Scroll to explore stacked service cases</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span>01 – 06 ARCHIVE</span>
            <ChevronDown size={14} className="animate-bounce" />
          </div>
        </div>
      </section>

      {/* 6 Scroll-Driven Stacked Cards Showcase */}
      <ServiceStack services={servicesData} />

      {/* Bottom CTA */}
      <section className="border-t border-day-border dark:border-agency-border pt-14 pb-8 text-center">
        <h3 className="text-2xl sm:text-4xl font-display font-medium text-black dark:text-white mb-4">
          Require a tailored multi-discipline engagement?
        </h3>
        <p className="text-xs sm:text-sm text-day-subtext dark:text-agency-subtext max-w-xl mx-auto mb-6 leading-relaxed">
          Most client partnerships span multiple disciplines—integrating brand identity, digital marketing, and web design for cohesive brand elevation.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-black text-white dark:bg-white dark:text-black text-xs uppercase tracking-widest font-semibold hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors shadow-md"
        >
          <span>Start a Project Consultation</span>
          <ArrowRight size={14} />
        </Link>
      </section>
    </div>
  );
};
