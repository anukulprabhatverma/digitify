import { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { ServiceItem } from '../../data/servicesData';
import { ServiceMediaPlaceholder } from './ServiceMediaPlaceholder';

interface ServiceCardProps {
  service: ServiceItem;
  index: number;
  total: number;
}

export const ServiceCard = forwardRef<HTMLDivElement, ServiceCardProps>(
  ({ service, index, total }, ref) => {
    const isLast = index === total - 1;

    // Staggered sticky top offsets replicate the exact layered deck tab effect in the reference
    // Desktop: 76px base + index * 26px
    // Mobile: 60px base + index * 14px
    const desktopStickyTop = 76 + index * 26;
    const mobileStickyTop = 60 + index * 14;

    return (
      <div
        ref={ref}
        id={service.id}
        data-index={index}
        className={`service-card sticky w-full rounded-2xl sm:rounded-3xl border will-change-transform ${
          isLast ? 'mb-[80vh] sm:mb-[95vh]' : 'mb-[120vh] sm:mb-[135vh] lg:mb-[150vh]'
        } bg-white dark:bg-[#0e0e12] border-black/[0.08] dark:border-white/[0.1] border-t-black/[0.14] dark:border-t-white/20 shadow-[0_-12px_35px_-8px_rgba(0,0,0,0.1)] dark:shadow-[0_-25px_50px_-15px_rgba(0,0,0,0.85)] overflow-hidden`}
        style={{
          top: `var(--sticky-top, ${desktopStickyTop}px)`,
          zIndex: 10 + index * 5,
        }}
      >
        <style>{`
          #${service.id} {
            --sticky-top: ${mobileStickyTop}px;
          }
          @media (min-width: 1024px) {
            #${service.id} {
              --sticky-top: ${desktopStickyTop}px;
            }
          }
        `}</style>

        {/* CINEMATIC DIMMING SCRIM OVERLAY (Driven instantaneously by scroll depth) */}
        <div
          className="service-card-scrim pointer-events-none absolute inset-0 z-30 bg-neutral-950/20 dark:bg-black/75 rounded-2xl sm:rounded-3xl transition-none"
          style={{ opacity: 0 }}
        />

        {/* Anchor targets for backward compatibility */}
        {service.id === 'branding' && <span id="branding-identity" className="absolute -top-28" />}
        {service.id === 'social-media' && <span id="social-media-management" className="absolute -top-28" />}
        {service.id === 'web-design' && <span id="web-design-experiences" className="absolute -top-28" />}

        {/* TOP DECK HEADER BAR (Visual Tab in Layered Deck) */}
        <div className="flex items-center justify-between px-4 sm:px-6 lg:px-7 py-2 sm:py-2.5 border-b border-black/[0.06] dark:border-white/[0.08] bg-black/[0.02] dark:bg-white/[0.02]">
          <div className="flex items-center gap-2.5 sm:gap-3">
            <span className="font-mono text-xs sm:text-sm text-digitify-purple font-semibold tracking-wider flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-digitify-purple" />
              {service.number} / 06
            </span>
            <span className="hidden sm:inline-block text-black/20 dark:text-white/20 font-mono text-xs">|</span>
            <span className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-day-muted dark:text-agency-muted truncate">
              {service.name}
            </span>
          </div>

          <div className="flex items-center gap-2 text-[10px] sm:text-xs font-mono text-day-muted dark:text-agency-muted">
            <span className="hidden md:inline">PRACTICE FILE</span>
            <span className="text-digitify-purple font-semibold">[{service.number}]</span>
          </div>
        </div>

        {/* ============================================================== */}
        {/* DESKTOP VIEWPORT LAYOUT (>= 1024px): LEFT CONTENT + RIGHT MEDIA */}
        {/* ============================================================== */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-6 xl:gap-8 p-5 sm:p-6 lg:p-7 items-stretch min-h-[450px] max-h-[565px]">
          {/* LEFT SIDE: Service Info, Deliverables & CTA */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-between overflow-y-auto pr-2 space-y-3 scrollbar-thin">
            <div className="space-y-2.5">
              <div>
                <h2 className="text-2xl xl:text-3xl font-display font-medium text-black dark:text-white tracking-tight leading-[1.1]">
                  {service.name}
                </h2>
                <p className="text-xs xl:text-[13px] text-day-subtext dark:text-agency-subtext leading-relaxed mt-1">
                  {service.shortDesc}
                </p>
              </div>

              {/* Overview */}
              <div className="pt-2 border-t border-black/[0.06] dark:border-white/[0.06]">
                <span className="text-[10px] font-mono uppercase tracking-widest text-digitify-purple block mb-0.5 font-semibold">
                  Overview
                </span>
                <p className="text-[11px] xl:text-xs text-day-subtext dark:text-agency-subtext leading-relaxed">
                  {service.fullDesc}
                </p>
              </div>

              {/* What We Deliver */}
              <div className="p-2.5 rounded-xl border border-black/[0.06] dark:border-white/[0.06] bg-black/[0.02] dark:bg-white/[0.02]">
                <span className="text-[10px] font-mono uppercase tracking-widest text-day-muted dark:text-agency-muted block mb-1">
                  What We Deliver
                </span>
                <ul className="space-y-1">
                  {service.deliverables.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-[11px] xl:text-xs text-day-subtext dark:text-agency-subtext"
                    >
                      <CheckCircle2 size={12} className="text-digitify-purple shrink-0 mt-0.5" />
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Best Suited For Tags */}
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-day-muted dark:text-agency-muted block mb-1">
                  Best Suited For
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {service.suitableFor.map((item, idx) => (
                    <span
                      key={idx}
                      className="text-[9px] xl:text-[10px] font-mono px-2.5 py-0.5 rounded-full border border-black/[0.08] dark:border-white/[0.08] bg-black/[0.02] dark:bg-white/[0.02] text-day-subtext dark:text-agency-subtext"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Inquire CTA Button */}
            <div className="pt-2.5 pb-0.5 border-t border-black/[0.06] dark:border-white/[0.06]">
              <Link
                to={`/contact?service=${service.id}`}
                className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-full border border-black/20 dark:border-white/20 text-[11px] xl:text-xs font-mono uppercase tracking-widest text-black dark:text-white hover:border-digitify-purple hover:text-digitify-purple active:scale-98 transition-all group"
              >
                <span>Inquire for {service.name}</span>
                <ArrowRight
                  size={13}
                  className="group-hover:translate-x-1 transition-transform text-digitify-purple"
                />
              </Link>
            </div>
          </div>

          {/* RIGHT SIDE: Large Video / Image Placeholder */}
          <div className="lg:col-span-6 xl:col-span-6 flex items-center justify-center">
            <ServiceMediaPlaceholder
              serviceId={service.id}
              serviceName={service.name}
              serviceNumber={service.number}
            />
          </div>
        </div>

        {/* ============================================================== */}
        {/* MOBILE VIEWPORT LAYOUT (< 1024px): MEDIA ON TOP + CONTENT BELOW */}
        {/* ============================================================== */}
        <div className="lg:hidden flex flex-col p-4 xs:p-5 space-y-4 max-h-[82vh] overflow-y-auto">
          {/* 1. MEDIA / VIDEO PLACEHOLDER (Appears ABOVE text on mobile) */}
          <div className="w-full">
            <ServiceMediaPlaceholder
              serviceId={service.id}
              serviceName={service.name}
              serviceNumber={service.number}
            />
          </div>

          {/* 2. SERVICE NUMBER & TITLE */}
          <div className="pt-2">
            <span className="font-mono text-xs text-digitify-purple font-semibold tracking-wider">
              {service.number} / 06
            </span>
            <h2 className="text-xl xs:text-2xl font-display font-medium text-black dark:text-white tracking-tight mt-0.5">
              {service.name}
            </h2>
            <p className="text-xs text-day-subtext dark:text-agency-subtext mt-1 leading-relaxed">
              {service.shortDesc}
            </p>
          </div>

          {/* 3. OVERVIEW */}
          <div className="pt-2 border-t border-black/[0.06] dark:border-white/[0.06]">
            <span className="text-[10px] font-mono uppercase tracking-widest text-digitify-purple block mb-1 font-semibold">
              Overview
            </span>
            <p className="text-xs text-day-subtext dark:text-agency-subtext leading-relaxed">
              {service.fullDesc}
            </p>
          </div>

          {/* 4. DELIVERABLES */}
          <div className="p-3.5 rounded-xl border border-black/[0.06] dark:border-white/[0.06] bg-black/[0.02] dark:bg-white/[0.02]">
            <span className="text-[10px] font-mono uppercase tracking-widest text-day-muted dark:text-agency-muted block mb-2">
              What We Deliver
            </span>
            <ul className="space-y-1.5">
              {service.deliverables.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 text-xs text-day-subtext dark:text-agency-subtext"
                >
                  <CheckCircle2 size={13} className="text-digitify-purple shrink-0 mt-0.5" />
                  <span className="leading-tight">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 5. BEST SUITED FOR TAGS */}
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-day-muted dark:text-agency-muted block mb-1.5">
              Best Suited For
            </span>
            <div className="flex flex-wrap gap-1.5">
              {service.suitableFor.map((item, idx) => (
                <span
                  key={idx}
                  className="text-[10px] font-mono px-2.5 py-0.5 rounded-full border border-black/[0.08] dark:border-white/[0.08] bg-black/[0.02] dark:bg-white/[0.02] text-day-subtext dark:text-agency-subtext"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* 6. INQUIRE CTA BUTTON */}
          <div className="pt-3 pb-1 border-t border-black/[0.06] dark:border-white/[0.06]">
            <Link
              to={`/contact?service=${service.id}`}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-full border border-black/20 dark:border-white/20 text-xs font-mono uppercase tracking-widest text-black dark:text-white hover:border-digitify-purple hover:text-digitify-purple active:scale-98 transition-all"
            >
              <span>Inquire for {service.name}</span>
              <ArrowRight size={13} className="text-digitify-purple" />
            </Link>
          </div>
        </div>
      </div>
    );
  }
);

ServiceCard.displayName = 'ServiceCard';
