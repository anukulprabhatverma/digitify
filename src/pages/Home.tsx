import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { SoftwareMarquee } from '../components/ui/SoftwareMarquee';
import { ServiceRow } from '../components/ui/ServiceRow';
import { StatsCounter } from '../components/ui/StatsCounter';
import { ServiceMarquee } from '../components/ui/ServiceMarquee';
import { ClientLogoMarquee } from '../components/ui/ClientLogoMarquee';
import { TestimonialSlider } from '../components/ui/TestimonialSlider';
import { ApproachSteps } from '../components/ui/ApproachSteps';
import { DigitifyHero3D } from '../components/hero/DigitifyHero3D';
import { servicesData } from '../data/servicesData';
import { statsData } from '../data/statsData';
import { testimonialsData } from '../data/testimonialsData';

export const Home: React.FC = () => {
  const [hoveredServiceId, setHoveredServiceId] = useState<string | null>(null);

  return (
    <div className="w-full flex flex-col space-y-12 sm:space-y-16 md:space-y-20 pb-16">
      {/* ━━━━━━━━━━━━━━━━━━━━
          SECTION 01 — HERO (REDESIGNED EDITORIAL AGENCY HERO)
          ━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative pt-4 xs:pt-6 sm:pt-8 md:pt-10 px-3.5 xs:px-4 sm:px-8 md:px-12 max-w-7xl mx-auto w-full overflow-hidden">
        {/* Subtle Light Grid Background */}
        <div
          className="absolute inset-0 pointer-events-none opacity-40 dark:opacity-10 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_20%,#000_60%,transparent_100%)]"
          aria-hidden="true"
        />

        {/* Two-Column Desktop Composition */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-center w-full min-w-0">
          {/* LEFT SIDE: Software Marquee + Main Positioning + CTAs + Social Links */}
          <div className="lg:col-span-6 xl:col-span-7 flex flex-col space-y-5 sm:space-y-6 md:space-y-7 w-full min-w-0">
            {/* 1. Software / Platform Marquee (Moving LEFT -> RIGHT continuously) */}
            <div className="w-full min-w-0 overflow-hidden">
              <SoftwareMarquee />
            </div>

            {/* 2. Main Positioning Statement */}
            <div className="space-y-3 xs:space-y-3.5 sm:space-y-4">
              <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-[2.85rem] xl:text-[3.35rem] font-display font-medium tracking-tightest leading-[1.08] text-black dark:text-white select-none break-words">
                Building digital presence that drives business growth
                <span className="text-digitify-purple">.</span>
              </h1>

              <p className="text-xs xs:text-sm sm:text-base md:text-lg text-day-subtext dark:text-agency-subtext font-normal leading-relaxed max-w-xl">
                Digitify partners with ambitious brands to engineer strong digital presence and achieve measurable commercial growth through integrated strategy, design, technology, and performance marketing.
              </p>
            </div>

            {/* 3. Primary CTAs */}
            <div id="hero-cta-container" className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 pt-1">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-black text-white dark:bg-white dark:text-black text-xs uppercase tracking-widest font-semibold hover:bg-neutral-800 dark:hover:bg-neutral-200 active:scale-95 transition-all shadow-sm"
              >
                <span>Start a Project</span>
                <ArrowRight size={14} />
              </Link>
              <Link
                to="/work"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-day-border dark:border-agency-border text-black dark:text-white text-xs uppercase tracking-widest font-medium hover:border-black dark:hover:border-white active:scale-95 transition-colors"
              >
                <span>View Our Work</span>
              </Link>
            </div>

            {/* 4. Social / Profile CTA Links */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 text-xs font-mono text-day-muted dark:text-agency-muted pt-1">
              <span className="text-[11px] uppercase tracking-widest text-day-subtext dark:text-agency-subtext font-medium mr-1">
                CONNECT:
              </span>
              <a
                href="https://www.instagram.com/digitify.official/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Digitify on Instagram (opens in new tab)"
                className="inline-flex items-center gap-1 px-3 py-1 rounded-full border border-day-border dark:border-agency-border bg-day-surface/80 dark:bg-agency-surface/80 hover:border-black dark:hover:border-white text-black dark:text-white transition-colors"
              >
                <span>Instagram</span>
                <ArrowUpRight size={11} className="opacity-60" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Digitify on LinkedIn (opens in new tab)"
                className="inline-flex items-center gap-1 px-3 py-1 rounded-full border border-day-border dark:border-agency-border bg-day-surface/80 dark:bg-agency-surface/80 hover:border-black dark:hover:border-white text-black dark:text-white transition-colors"
              >
                <span>LinkedIn</span>
                <ArrowUpRight size={11} className="opacity-60" />
              </a>
              <a
                href="https://behance.net"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Digitify on Behance (opens in new tab)"
                className="inline-flex items-center gap-1 px-3 py-1 rounded-full border border-day-border dark:border-agency-border bg-day-surface/80 dark:bg-agency-surface/80 hover:border-black dark:hover:border-white text-black dark:text-white transition-colors"
              >
                <span>Behance</span>
                <ArrowUpRight size={11} className="opacity-60" />
              </a>
            </div>
          </div>

          {/* RIGHT SIDE: Interactive 3D Digitify AI Robot Character & Brand Experience */}
          <div className="lg:col-span-6 xl:col-span-5 w-full">
            <DigitifyHero3D />
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━
          SECTION 02 — SERVICES / WHAT WE DO
          ━━━━━━━━━━━━━━━━━━━━ */}
      <section className="px-3.5 xs:px-4 sm:px-8 md:px-12 max-w-7xl mx-auto w-full">
        <div className="border-t border-day-border dark:border-agency-border pt-8 xs:pt-10 sm:pt-12 md:pt-14">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 sm:mb-10 gap-3 sm:gap-4">
            <div>
              <h2 className="text-xl xs:text-2xl sm:text-4xl md:text-5xl font-display font-medium tracking-tight text-black dark:text-white">
                WHAT WE DO
              </h2>
            </div>
            <Link
              to="/services"
              className="text-xs font-mono uppercase tracking-widest text-day-subtext dark:text-agency-subtext hover:text-black dark:hover:text-white flex items-center gap-1.5 transition-colors"
            >
              <span>Explore All Services</span>
              <ArrowRight size={13} />
            </Link>
          </div>

          {/* Numbered Services List */}
          <div className="border-t border-day-border dark:border-agency-border divide-y divide-day-border dark:divide-agency-border">
            {servicesData.map((service) => (
              <ServiceRow
                key={service.id}
                service={service}
                isHovered={hoveredServiceId === service.id}
                onMouseEnter={() => setHoveredServiceId(service.id)}
                onMouseLeave={() => setHoveredServiceId(null)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━
          SECTION 03 — CLIENTS & COLLABORATIONS (LOGO MARQUEE)
          ━━━━━━━━━━━━━━━━━━━━ */}
      <section className="px-3.5 xs:px-4 sm:px-8 md:px-12 max-w-7xl mx-auto w-full">
        <div className="border-t border-day-border dark:border-agency-border pt-8 xs:pt-10 sm:pt-12 md:pt-14">
          <ClientLogoMarquee />
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━
          SECTION 04 — AGENCY METRICS & CONTINUOUS SERVICE MARQUEE
          ━━━━━━━━━━━━━━━━━━━━ */}
      <section className="w-full flex flex-col space-y-6 sm:space-y-8">
        <div className="px-3.5 xs:px-4 sm:px-8 md:px-12 max-w-7xl mx-auto w-full">
          <div className="border-t border-day-border dark:border-agency-border pt-8 xs:pt-10 sm:pt-12 md:pt-14">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-5 sm:mb-6 gap-2 sm:gap-3">
              <div>
                <h2 className="text-xl xs:text-2xl sm:text-4xl md:text-5xl font-display font-medium tracking-tight text-black dark:text-white">
                  AGENCY AT A GLANCE
                </h2>
              </div>
            </div>

            {/* Viewport intersection animated counters */}
            <StatsCounter stats={statsData} />
          </div>
        </div>

        {/* Continuous infinite marquee near stats */}
        <ServiceMarquee />
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━
          SECTION 05 — APPROACH ("HOW WE WORK")
          ━━━━━━━━━━━━━━━━━━━━ */}
      <section className="px-3.5 xs:px-4 sm:px-8 md:px-12 max-w-7xl mx-auto w-full">
        <div className="border-t border-day-border dark:border-agency-border pt-8 xs:pt-10 sm:pt-12 md:pt-14">
          <div className="mb-5 sm:mb-8">
            <h2 className="text-xl xs:text-2xl sm:text-4xl md:text-5xl font-display font-medium tracking-tight text-black dark:text-white">
              HOW WE WORK
            </h2>
          </div>

          {/* 4-Step Approach */}
          <ApproachSteps />
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━
          SECTION 07 — CLIENT TESTIMONIALS
          ━━━━━━━━━━━━━━━━━━━━ */}
      <section className="px-3.5 xs:px-4 sm:px-8 md:px-12 max-w-7xl mx-auto w-full">
        <div className="border-t border-day-border dark:border-agency-border pt-8 xs:pt-10 sm:pt-12 md:pt-14">
          <div className="mb-5 sm:mb-8">
            <h2 className="text-xl xs:text-2xl sm:text-4xl md:text-5xl font-display font-medium tracking-tight text-black dark:text-white">
              WHAT PARTNERS SAY
            </h2>
          </div>

          {/* Testimonial Slider with Auto-Rotation & Interaction Pause */}
          <TestimonialSlider testimonials={testimonialsData} />
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━
          SECTION 08 — FINAL CTA
          ━━━━━━━━━━━━━━━━━━━━ */}
      <section className="px-3.5 xs:px-4 sm:px-8 md:px-12 max-w-7xl mx-auto w-full">
        <div className="border-t border-day-border dark:border-agency-border pt-10 xs:pt-14 sm:pt-18 pb-6 text-center flex flex-col items-center">
          <h2 className="text-2xl xs:text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-medium tracking-tightest leading-[1.05] sm:leading-[1] text-black dark:text-white max-w-4xl mb-3 sm:mb-4">
            LET’S BUILD
            <br />
            SOMETHING REMARKABLE<span className="text-digitify-purple">.</span>
          </h2>
          <p className="text-xs xs:text-sm sm:text-base md:text-lg text-day-subtext dark:text-agency-subtext max-w-xl mb-6 sm:mb-8 leading-relaxed">
            Have a brand, campaign or digital idea in mind? Let’s turn it into something people remember.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-3.5 rounded-full bg-black text-white dark:bg-white dark:text-black text-xs uppercase tracking-widest font-semibold hover:bg-neutral-800 dark:hover:bg-neutral-200 active:scale-95 transition-all shadow-md"
          >
            <span>Start a Project</span>
            <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </div>
  );
};
