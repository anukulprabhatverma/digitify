import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { servicesData } from '../data/servicesData';

export const Services: React.FC = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-12 py-8 sm:py-12 flex flex-col space-y-14 sm:space-y-18 md:space-y-20">
      {/* Header */}
      <section className="flex flex-col space-y-6">
        <div className="flex items-center gap-2 text-xs font-mono text-day-muted dark:text-agency-muted uppercase tracking-widest">
          <span className="h-1.5 w-1.5 rounded-full bg-digitify-purple" />
          <span>Services & Practices</span>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-medium tracking-tightest leading-[1] text-black dark:text-white">
          EXPERTISE ENGINEERED
          <br />
          FOR IMPACT<span className="text-digitify-purple">.</span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-day-subtext dark:text-agency-subtext leading-relaxed max-w-3xl pt-2 border-t border-day-border dark:border-agency-border">
          We bring disciplined strategy, striking visual craft, and rigorous technical execution across six core creative and digital practices.
        </p>
      </section>

      {/* 6 In-Depth Service Sections */}
      <section className="border-t border-day-border dark:border-agency-border divide-y divide-day-border dark:divide-agency-border">
        {servicesData.map((service) => (
          <div
            key={service.id}
            id={service.id}
            className="scroll-mt-24 sm:scroll-mt-28 py-10 sm:py-14 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start relative"
          >
            {service.id === 'branding' && <span id="branding-identity" className="absolute -top-24 sm:-top-28" />}
            {service.id === 'social-media' && <span id="social-media-management" className="absolute -top-24 sm:-top-28" />}
            {service.id === 'web-design' && <span id="web-design-experiences" className="absolute -top-24 sm:-top-28" />}
            {/* Left Column: Number & Large Title */}
            <div className="lg:col-span-5 flex flex-col space-y-3">
              <span className="font-mono text-xs text-digitify-purple font-semibold tracking-wider">
                {service.number} / 06
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-medium text-black dark:text-white tracking-tight leading-tight">
                {service.name}
              </h2>
              <p className="text-xs sm:text-sm text-day-subtext dark:text-agency-subtext leading-relaxed pt-1">
                {service.shortDesc}
              </p>

              <div className="pt-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-day-border dark:border-agency-border text-xs uppercase tracking-widest text-black dark:text-white hover:border-black dark:hover:border-white transition-colors"
                >
                  <span>Inquire for {service.name}</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </div>

            {/* Right Column: Full description, What we deliver, Suitable For */}
            <div className="lg:col-span-7 flex flex-col space-y-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-day-muted dark:text-agency-muted block mb-2">
                  Overview
                </span>
                <p className="text-xs sm:text-sm text-day-subtext dark:text-agency-subtext leading-relaxed">
                  {service.fullDesc}
                </p>
              </div>

              {/* What We Deliver */}
              <div className="p-5 rounded-lg border border-day-border dark:border-agency-border bg-day-surface/60 dark:bg-agency-surface/50">
                <span className="text-xs font-mono uppercase tracking-widest text-day-muted dark:text-agency-muted block mb-3">
                  What We Deliver
                </span>
                <ul className="space-y-2.5">
                  {service.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-day-subtext dark:text-agency-subtext">
                      <CheckCircle2 size={15} className="text-digitify-purple shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Suitable Business Types */}
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-day-muted dark:text-agency-muted block mb-2">
                  Best Suited For
                </span>
                <div className="flex flex-wrap gap-2">
                  {service.suitableFor.map((item, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-mono px-3 py-1 rounded-full border border-day-border dark:border-agency-border bg-day-surface dark:bg-agency-surface text-day-subtext dark:text-agency-subtext"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-day-border dark:border-agency-border pt-12 text-center">
        <h3 className="text-2xl sm:text-4xl font-display font-medium text-black dark:text-white mb-4">
          Require a tailored multi-discipline engagement?
        </h3>
        <p className="text-xs sm:text-sm text-day-subtext dark:text-agency-subtext max-w-xl mx-auto mb-6">
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
