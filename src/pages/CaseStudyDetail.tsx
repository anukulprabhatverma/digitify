import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { caseStudiesData } from '../data/caseStudiesData';

export const CaseStudyDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const study = caseStudiesData.find((s) => s.slug === slug);

  if (!study) {
    return <Navigate to="/case-studies" replace />;
  }

  const { sections } = study;

  return (
    <div className="w-full max-w-7xl mx-auto px-3.5 xs:px-4 sm:px-8 md:px-12 py-5 xs:py-8 sm:py-12 flex flex-col space-y-8 xs:space-y-12 sm:space-y-16">
      {/* Back link */}
      <div>
        <Link
          to="/case-studies"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-day-muted dark:text-agency-muted hover:text-black dark:hover:text-white transition-colors py-1"
        >
          <ArrowLeft size={14} />
          <span>All Case Studies</span>
        </Link>
      </div>

      {/* Hero Header */}
      <section className="space-y-3 sm:space-y-4">
        <div className="flex items-center gap-2.5 sm:gap-3">
          <span className="font-mono text-xs text-digitify-purple font-semibold">
            CASE STUDY {study.number}
          </span>
          <span className="text-day-border dark:text-agency-border">/</span>
          <span className="text-[11px] xs:text-xs font-mono text-day-muted dark:text-agency-muted">
            {study.clientPlaceholder}
          </span>
        </div>

        <h1 className="text-2xl xs:text-4xl sm:text-5xl md:text-6xl font-display font-medium tracking-tight text-black dark:text-white leading-[1.05]">
          {study.title}
        </h1>

        <p className="text-sm xs:text-base sm:text-lg text-day-subtext dark:text-agency-subtext font-mono max-w-2xl">
          {study.subtitle}
        </p>

        {/* Hero Visual Image */}
        <div className="pt-2 sm:pt-4">
          <div className="w-full aspect-[16/9] rounded-lg sm:rounded-xl overflow-hidden border border-day-border dark:border-agency-border bg-black">
            <img
              src={study.overviewImage}
              alt={study.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* 01 — PROJECT INTRODUCTION */}
      <section className="border-t border-day-border dark:border-agency-border pt-6 xs:pt-8 sm:pt-10 md:pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8">
          <div className="lg:col-span-4">
            <span className="text-xs font-mono uppercase tracking-widest text-day-muted dark:text-agency-muted block mb-1.5">
              01 — INTRODUCTION
            </span>
            <h2 className="text-lg xs:text-xl sm:text-2xl font-display font-medium text-black dark:text-white">
              {sections.intro.headline}
            </h2>
          </div>

          <div className="lg:col-span-8 space-y-5 sm:space-y-6">
            <p className="text-xs sm:text-sm md:text-base text-day-subtext dark:text-agency-subtext leading-relaxed">
              {sections.intro.description}
            </p>

            {/* Meta Table */}
            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 p-3.5 xs:p-4 rounded-lg border border-day-border dark:border-agency-border bg-day-surface/60 dark:bg-agency-surface/40">
              {sections.intro.metaItems.map((item, idx) => (
                <div key={idx}>
                  <span className="text-[10px] font-mono text-day-muted dark:text-agency-muted uppercase tracking-wider block">
                    {item.label}
                  </span>
                  <span className="text-xs font-mono text-black dark:text-white mt-0.5 block">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 02 — CHALLENGE */}
      <section className="border-t border-day-border dark:border-agency-border pt-6 xs:pt-8 sm:pt-10 md:pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8">
          <div className="lg:col-span-4">
            <span className="text-xs font-mono uppercase tracking-widest text-day-muted dark:text-agency-muted block mb-1.5">
              02 — CHALLENGE
            </span>
            <h2 className="text-lg xs:text-xl sm:text-2xl font-display font-medium text-black dark:text-white">
              {sections.challenge.headline}
            </h2>
          </div>

          <div className="lg:col-span-8 space-y-4">
            <p className="text-xs sm:text-sm md:text-base text-day-subtext dark:text-agency-subtext leading-relaxed">
              {sections.challenge.description}
            </p>

            <div className="space-y-2.5 pt-1">
              {sections.challenge.keyObstacles.map((obstacle, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 sm:gap-3 p-3 xs:p-3.5 rounded-lg border border-day-border dark:border-agency-border bg-day-surface/50 dark:bg-agency-surface/30"
                >
                  <span className="text-xs font-mono text-digitify-purple shrink-0 mt-0.5">
                    [0{idx + 1}]
                  </span>
                  <p className="text-xs sm:text-sm text-day-subtext dark:text-agency-subtext">{obstacle}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 03 — STRATEGY */}
      <section className="border-t border-day-border dark:border-agency-border pt-6 xs:pt-8 sm:pt-10 md:pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8">
          <div className="lg:col-span-4">
            <span className="text-xs font-mono uppercase tracking-widest text-day-muted dark:text-agency-muted block mb-1.5">
              03 — STRATEGY
            </span>
            <h2 className="text-lg xs:text-xl sm:text-2xl font-display font-medium text-black dark:text-white">
              {sections.strategy.headline}
            </h2>
          </div>

          <div className="lg:col-span-8 space-y-4">
            <p className="text-xs sm:text-sm md:text-base text-day-subtext dark:text-agency-subtext leading-relaxed">
              {sections.strategy.description}
            </p>

            <ul className="space-y-2.5 sm:space-y-3 pt-1">
              {sections.strategy.strategicPillars.map((pillar, idx) => (
                <li
                  key={idx}
                  className="p-3.5 xs:p-4 rounded-lg border border-day-border dark:border-agency-border bg-day-surface/60 dark:bg-agency-surface/40 flex items-start gap-3"
                >
                  <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-digitify-purple mt-2 sm:mt-1.5 shrink-0" />
                  <p className="text-xs sm:text-sm text-day-subtext dark:text-agency-subtext leading-relaxed">
                    {pillar}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 04 — CREATIVE DIRECTION */}
      <section className="border-t border-day-border dark:border-agency-border pt-6 xs:pt-8 sm:pt-10 md:pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8">
          <div className="lg:col-span-4">
            <span className="text-xs font-mono uppercase tracking-widest text-day-muted dark:text-agency-muted block mb-1.5">
              04 — CREATIVE DIRECTION
            </span>
            <h2 className="text-lg xs:text-xl sm:text-2xl font-display font-medium text-black dark:text-white">
              {sections.creativeDirection.headline}
            </h2>
          </div>

          <div className="lg:col-span-8 space-y-4">
            <p className="text-xs sm:text-sm md:text-base text-day-subtext dark:text-agency-subtext leading-relaxed">
              {sections.creativeDirection.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 pt-1">
              {sections.creativeDirection.artDirectionNotes.map((note, idx) => (
                <div
                  key={idx}
                  className="p-3 xs:p-3.5 rounded-lg border border-day-border dark:border-agency-border bg-day-surface/50 dark:bg-agency-surface/30"
                >
                  <span className="text-[10px] font-mono uppercase tracking-widest text-day-muted dark:text-agency-muted block mb-1.5">
                    PRINCIPLE 0{idx + 1}
                  </span>
                  <p className="text-xs text-day-subtext dark:text-agency-subtext leading-relaxed">{note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 05 — EXECUTION */}
      <section className="border-t border-day-border dark:border-agency-border pt-6 xs:pt-8 sm:pt-10 md:pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8">
          <div className="lg:col-span-4">
            <span className="text-xs font-mono uppercase tracking-widest text-day-muted dark:text-agency-muted block mb-1.5">
              05 — EXECUTION
            </span>
            <h2 className="text-lg xs:text-xl sm:text-2xl font-display font-medium text-black dark:text-white">
              {sections.execution.headline}
            </h2>
          </div>

          <div className="lg:col-span-8 space-y-4">
            <p className="text-xs sm:text-sm md:text-base text-day-subtext dark:text-agency-subtext leading-relaxed">
              {sections.execution.description}
            </p>

            <div className="p-3.5 xs:p-4 sm:p-5 rounded-lg border border-day-border dark:border-agency-border bg-day-surface/60 dark:bg-agency-surface/40">
              <span className="text-xs font-mono uppercase tracking-widest text-day-muted dark:text-agency-muted block mb-2.5 sm:mb-3">
                Core Deliverables
              </span>
              <ul className="space-y-2 xs:space-y-2.5">
                {sections.execution.deliverablesList.map((del, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-day-subtext dark:text-agency-subtext">
                    <CheckCircle2 size={15} className="text-digitify-purple shrink-0 mt-0.5" />
                    <span>{del}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 06 — OUTCOME */}
      <section className="border-t border-day-border dark:border-agency-border pt-6 xs:pt-8 sm:pt-10 md:pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8">
          <div className="lg:col-span-4">
            <span className="text-xs font-mono uppercase tracking-widest text-day-muted dark:text-agency-muted block mb-1.5">
              06 — OUTCOME
            </span>
            <h2 className="text-lg xs:text-xl sm:text-2xl font-display font-medium text-black dark:text-white">
              {sections.outcome.headline}
            </h2>
          </div>

          <div className="lg:col-span-8 space-y-4">
            <p className="text-xs sm:text-sm md:text-base text-day-subtext dark:text-agency-subtext leading-relaxed">
              {sections.outcome.description}
            </p>

            <div className="space-y-2 xs:space-y-2.5 pt-1">
              {sections.outcome.keyTakeaways.map((takeaway, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3.5 xs:p-4 rounded-lg border border-day-border dark:border-agency-border bg-day-surface/50 dark:bg-agency-surface/30"
                >
                  <span className="font-mono text-xs text-digitify-purple shrink-0">
                    [0{idx + 1}]
                  </span>
                  <p className="text-xs sm:text-sm text-black dark:text-white font-medium leading-relaxed">
                    {takeaway}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 07 — GALLERY */}
      <section className="border-t border-day-border dark:border-agency-border pt-6 xs:pt-8 sm:pt-10 md:pt-12">
        <div className="mb-5 sm:mb-6">
          <span className="text-xs font-mono uppercase tracking-widest text-day-muted dark:text-agency-muted block mb-1.5">
            07 — GALLERY
          </span>
          <h2 className="text-lg xs:text-xl sm:text-2xl font-display font-medium text-black dark:text-white">
            PROJECT VISUAL SYSTEM
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-6">
          {study.galleryImages.map((img, idx) => (
            <div
              key={idx}
              className={`rounded-lg overflow-hidden border border-day-border dark:border-agency-border bg-black ${
                idx === 0 ? 'md:col-span-2' : ''
              }`}
            >
              <img
                src={img}
                alt={`${study.title} visual ${idx + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* 08 — NEXT PROJECT */}
      <section className="border-t border-day-border dark:border-agency-border pt-6 xs:pt-8 sm:pt-10 md:pt-12">
        <div className="flex flex-col items-center text-center p-5 xs:p-6 sm:p-12 rounded-xl border border-day-border dark:border-agency-border bg-day-surface/80 dark:bg-agency-surface/50">
          <span className="text-xs font-mono uppercase tracking-widest text-day-muted dark:text-agency-muted mb-1.5">
            08 — NEXT CASE STUDY
          </span>
          <h3 className="text-lg xs:text-xl sm:text-3xl md:text-4xl font-display font-medium text-black dark:text-white mb-3 sm:mb-4">
            {study.nextTitle}
          </h3>
          <Link
            to={`/case-studies/${study.nextSlug}`}
            className="w-full sm:w-auto justify-center inline-flex items-center gap-2.5 px-6 py-3.5 sm:py-3 rounded-full bg-black text-white dark:bg-white dark:text-black text-xs uppercase tracking-widest font-semibold hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors shadow-sm"
          >
            <span>View Next Project</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </div>
  );
};
