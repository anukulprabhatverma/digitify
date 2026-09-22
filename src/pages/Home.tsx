import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowDown, ArrowUpRight } from 'lucide-react';
import { ServiceRow } from '../components/ui/ServiceRow';
import { StatsCounter } from '../components/ui/StatsCounter';
import { ServiceMarquee } from '../components/ui/ServiceMarquee';
import { ClientLogoMarquee } from '../components/ui/ClientLogoMarquee';
import { TestimonialSlider } from '../components/ui/TestimonialSlider';
import { ApproachSteps } from '../components/ui/ApproachSteps';
import { servicesData } from '../data/servicesData';
import { statsData } from '../data/statsData';
import { testimonialsData } from '../data/testimonialsData';

export const Home: React.FC = () => {
  const [hoveredServiceId, setHoveredServiceId] = useState<string | null>(null);

  return (
    <div className="w-full flex flex-col space-y-12 sm:space-y-16 md:space-y-20 pb-16">
      {/* ━━━━━━━━━━━━━━━━━━━━
          SECTION 01 — HERO
          ━━━━━━━━━━━━━━━━━━━━ */}
      <section className="pt-4 xs:pt-6 sm:pt-8 md:pt-10 px-3.5 xs:px-4 sm:px-8 md:px-12 max-w-7xl mx-auto w-full">
        {/* Massive Editorial Headline with Fluid Clamp */}
        <div className="w-full">
          <h1 className="text-3xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-[6.4vw] font-display font-medium tracking-tightest leading-[1.04] sm:leading-[0.98] text-black dark:text-white select-none">
            WE MAKE BRANDS
            <br />
            <span className="text-black dark:text-white">IMPOSSIBLE </span>
            <span className="text-stroke hover:text-black dark:hover:text-white transition-colors">TO IGNORE</span>
            <span className="text-digitify-purple">.</span>
          </h1>
        </div>

        {/* Tightly aligned split content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center mt-5 xs:mt-6 sm:mt-8 md:mt-10">
          {/* Left Column: Availability, Copy & CTAs */}
          <div className="lg:col-span-6 flex flex-col space-y-3.5 xs:space-y-4">
            <div className="inline-flex items-center gap-2 text-[11px] xs:text-xs font-mono text-day-muted dark:text-agency-muted">
              <span className="h-2 w-2 rounded-full bg-digitify-purple animate-pulse shrink-0" />
              <span className="tracking-wider uppercase text-day-subtext dark:text-agency-subtext font-medium">
                AVAILABLE FOR SELECT PROJECTS
              </span>
            </div>

            <p className="text-sm xs:text-base sm:text-lg md:text-xl text-day-subtext dark:text-agency-subtext font-normal leading-relaxed max-w-xl">
              Digital marketing, branding, design and experiences built to move businesses forward.
            </p>

            <div className="flex flex-col xs:flex-row items-stretch xs:items-center gap-2.5 xs:gap-3 pt-1">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-black text-white dark:bg-white dark:text-black text-xs uppercase tracking-widest font-semibold hover:bg-neutral-800 dark:hover:bg-neutral-200 active:scale-95 transition-all shadow-sm"
              >
                <span>Start a Project</span>
                <ArrowRight size={14} />
              </Link>
              <Link
                to="/work"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-day-border dark:border-agency-border text-black dark:text-white text-xs uppercase tracking-widest font-medium hover:border-black dark:hover:border-white active:scale-95 transition-colors"
              >
                <span>View Our Work</span>
              </Link>
            </div>

            {/* Core agency discipline tags */}
            <div className="pt-1 flex flex-wrap gap-1.5 xs:gap-2 text-[10px] xs:text-[11px] font-mono text-day-muted dark:text-agency-muted">
              <span className="px-2.5 xs:px-3 py-1 rounded-full border border-day-border dark:border-agency-border bg-day-surface dark:bg-agency-surface">
                Branding & Identity
              </span>
              <span className="px-2.5 xs:px-3 py-1 rounded-full border border-day-border dark:border-agency-border bg-day-surface dark:bg-agency-surface">
                Performance Media
              </span>
              <span className="px-2.5 xs:px-3 py-1 rounded-full border border-day-border dark:border-agency-border bg-day-surface dark:bg-agency-surface">
                Web Experiences
              </span>
              <span className="px-2.5 xs:px-3 py-1 rounded-full border border-day-border dark:border-agency-border bg-day-surface dark:bg-agency-surface">
                Social Strategy
              </span>
            </div>
          </div>

          {/* Right Column: Flagship Feature Showcase Card */}
          <div className="lg:col-span-6 w-full">
            <Link
              to="/case-studies/coolbee-store"
              className="group block relative rounded-xl border border-day-border dark:border-agency-border overflow-hidden bg-day-surface dark:bg-agency-surface transition-colors duration-200"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-black">
                <img
                  src="/images/projects/coolbee.png"
                  alt="Featured Case Study - Coolbee Store"
                  className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute top-3 xs:top-4 right-3 xs:right-4">
                  <span className="text-[9px] xs:text-[10px] font-mono tracking-widest uppercase px-2.5 xs:px-3 py-1 rounded-full bg-white text-black font-semibold shadow-md">
                    FEATURED CASE
                  </span>
                </div>
              </div>
              <div className="p-3.5 xs:p-4 sm:p-5 border-t border-day-border dark:border-agency-border flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <h4 className="text-sm xs:text-base sm:text-lg font-display font-medium text-black dark:text-white group-hover:text-digitify-purple transition-colors truncate">
                    Coolbee Store
                  </h4>
                  <p className="text-[11px] xs:text-xs font-mono text-day-muted dark:text-agency-muted mt-0.5 truncate">
                    Website · Social Media · Digital Marketing
                  </p>
                </div>
                <div className="w-8 h-8 rounded-full border border-day-border dark:border-agency-border flex items-center justify-center text-day-muted dark:text-agency-muted group-hover:text-black dark:group-hover:text-white group-hover:border-black dark:group-hover:border-white transition-all shrink-0">
                  <ArrowUpRight size={14} />
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Scroll affordance line */}
        <div className="mt-6 sm:mt-10 pt-3.5 sm:pt-4 border-t border-day-border/60 dark:border-agency-border/40 flex items-center justify-between text-[10px] xs:text-xs font-mono text-day-muted dark:text-agency-muted">
          <span>SCROLL TO DISCOVER</span>
          <ArrowDown size={14} className="animate-bounce" />
          <span className="hidden xs:inline">EST. 2023 · NEW DELHI</span>
          <span className="xs:hidden">EST. 2023</span>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━
          SECTION 02 — SERVICES / WHAT WE DO
          ━━━━━━━━━━━━━━━━━━━━ */}
      <section className="px-3.5 xs:px-4 sm:px-8 md:px-12 max-w-7xl mx-auto w-full">
        <div className="border-t border-day-border dark:border-agency-border pt-8 xs:pt-10 sm:pt-12 md:pt-14">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 sm:mb-10 gap-3 sm:gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-day-muted dark:text-agency-muted block mb-1.5">
                CAPABILITIES
              </span>
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
                <span className="text-xs font-mono uppercase tracking-widest text-day-muted dark:text-agency-muted block mb-1.5">
                  METRICS
                </span>
                <h2 className="text-xl xs:text-2xl sm:text-4xl md:text-5xl font-display font-medium tracking-tight text-black dark:text-white">
                  AGENCY AT A GLANCE
                </h2>
              </div>
              <span className="text-[11px] xs:text-xs font-mono text-day-muted dark:text-agency-muted">
                EDITABLE METRIC CONFIGURATION
              </span>
            </div>

            {/* Viewport intersection animated counters */}
            <StatsCounter stats={statsData} />
          </div>
        </div>

        {/* Continuous infinite marquee near stats */}
        <ServiceMarquee />
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━
          SECTION 05 — ABOUT DIGITIFY
          ━━━━━━━━━━━━━━━━━━━━ */}
      <section className="px-3.5 xs:px-4 sm:px-8 md:px-12 max-w-7xl mx-auto w-full">
        <div className="border-t border-day-border dark:border-agency-border pt-8 xs:pt-10 sm:pt-12 md:pt-14">
          <span className="text-xs font-mono uppercase tracking-widest text-day-muted dark:text-agency-muted block mb-2 sm:mb-3">
            01 — ABOUT
          </span>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12">
            <div className="lg:col-span-8">
              <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-medium tracking-tight leading-[1.08] text-black dark:text-white mb-4 sm:mb-5">
                BUILT FOR BRANDS
                <br />
                THAT WANT TO MOVE<span className="text-digitify-purple">.</span>
              </h2>

              <p className="text-base xs:text-lg sm:text-xl md:text-2xl text-black dark:text-white font-normal leading-relaxed mb-3 sm:mb-4">
                &ldquo;Digitify is a digital agency focused on building brands, digital experiences and growth systems that move businesses forward.&rdquo;
              </p>

              <p className="text-xs xs:text-sm sm:text-base text-day-subtext dark:text-agency-subtext leading-relaxed max-w-2xl">
                We eliminate the unnecessary clutter of traditional marketing and focus on high-conviction creative direction, technical precision, and measurable brand growth.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col justify-between space-y-5 lg:border-l lg:border-day-border dark:lg:border-agency-border lg:pl-8">
              <div className="space-y-3.5 sm:space-y-4">
                <div className="border-b border-day-border/60 dark:border-agency-border/60 pb-3">
                  <span className="text-xs font-mono uppercase tracking-widest text-day-muted dark:text-agency-muted block">
                    Positioning
                  </span>
                  <p className="text-xs xs:text-sm sm:text-base font-display text-black dark:text-white mt-1">
                    Strategy · Creative · Growth Systems
                  </p>
                </div>
                <div className="border-b border-day-border/60 dark:border-agency-border/60 pb-3">
                  <span className="text-xs font-mono uppercase tracking-widest text-day-muted dark:text-agency-muted block">
                    Focus
                  </span>
                  <p className="text-xs xs:text-sm sm:text-base font-display text-black dark:text-white mt-1">
                    Brands that refuse to blend into the noise
                  </p>
                </div>
              </div>

              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-black dark:text-white hover:text-digitify-purple transition-colors pt-1"
              >
                <span>Explore Full Agency & Team</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━
          SECTION 06 — APPROACH ("HOW WE WORK")
          ━━━━━━━━━━━━━━━━━━━━ */}
      <section className="px-3.5 xs:px-4 sm:px-8 md:px-12 max-w-7xl mx-auto w-full">
        <div className="border-t border-day-border dark:border-agency-border pt-8 xs:pt-10 sm:pt-12 md:pt-14">
          <div className="mb-5 sm:mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-day-muted dark:text-agency-muted block mb-1.5">
              02 — METHODOLOGY
            </span>
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
            <span className="text-xs font-mono uppercase tracking-widest text-day-muted dark:text-agency-muted block mb-1.5">
              03 — CLIENT TESTIMONIALS
            </span>
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
          <span className="text-xs font-mono uppercase tracking-widest text-day-muted dark:text-agency-muted block mb-2 sm:mb-3">
            LET’S COLLABORATE
          </span>
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
