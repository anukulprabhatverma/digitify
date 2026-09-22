import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { caseStudiesData } from '../data/caseStudiesData';

export const CaseStudies: React.FC = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-12 py-8 sm:py-12 flex flex-col space-y-12 sm:space-y-16">
      {/* Header */}
      <section className="flex flex-col space-y-6">
        <div className="flex items-center gap-2 text-xs font-mono text-day-muted dark:text-agency-muted uppercase tracking-widest">
          <span className="h-1.5 w-1.5 rounded-full bg-digitify-purple" />
          <span>In-Depth Documentation</span>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-medium tracking-tightest leading-[1] text-black dark:text-white">
          CASE STUDIES<span className="text-digitify-purple">.</span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-day-subtext dark:text-agency-subtext leading-relaxed max-w-2xl pt-2 border-t border-day-border dark:border-agency-border">
          Detailed breakdowns covering strategic foundations, creative direction, execution workflows, and long-term brand outcomes. Structured as clean editable templates for your live projects.
        </p>
      </section>

      {/* Case Studies List */}
      <section className="border-t border-day-border dark:border-agency-border divide-y divide-day-border dark:divide-agency-border">
        {caseStudiesData.map((study) => (
          <Link
            key={study.id}
            to={`/case-studies/${study.slug}`}
            className="group py-8 sm:py-12 block transition-all"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
              {/* Left Column: Number, Title, Disciplines */}
              <div className="lg:col-span-6 flex flex-col space-y-3">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-day-muted dark:text-agency-muted group-hover:text-digitify-purple transition-colors">
                    CASE {study.number}
                  </span>
                  <span className="text-xs font-mono uppercase tracking-widest px-2 py-0.5 rounded bg-day-surface dark:bg-agency-surface border border-day-border dark:border-agency-border text-day-subtext dark:text-agency-subtext">
                    {study.timeline}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-display font-medium text-black dark:text-white group-hover:text-digitify-purple transition-colors leading-tight">
                  {study.title}
                </h2>

                <p className="text-xs sm:text-sm font-mono text-day-muted dark:text-agency-muted">
                  {study.subtitle}
                </p>

                <p className="text-xs sm:text-sm text-day-subtext dark:text-agency-subtext line-clamp-2 leading-relaxed">
                  {study.sections.intro.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-1">
                  {study.disciplines.map((disc, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] font-mono px-2.5 py-1 rounded bg-day-surface dark:bg-agency-surface border border-day-border dark:border-agency-border text-day-subtext dark:text-agency-subtext"
                    >
                      {disc}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Column: Visual Preview */}
              <div className="lg:col-span-6">
                <div className="relative aspect-[16/10] rounded-lg overflow-hidden border border-day-border dark:border-agency-border bg-black">
                  <img
                    src={study.overviewImage}
                    alt={study.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-sm px-2.5 py-1 rounded text-xs font-mono text-white flex items-center gap-1.5">
                    <span>Read Case Study</span>
                    <ArrowUpRight size={13} />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
};
