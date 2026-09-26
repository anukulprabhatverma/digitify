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
    // Desktop: 88px base + index * 12px (clears 81px sticky header with intentional breathing room)
    // Mobile: 68px base + index * 4px (clears 61px sticky header with intentional breathing room)
    const desktopStickyTop = 88 + index * 12;
    const mobileStickyTop = 68 + index * 4;

    return (
      <div
        ref={ref}
        id={service.id}
        data-index={index}
        className={`service-card sticky w-full rounded-2xl sm:rounded-3xl border will-change-transform scroll-mt-24 lg:scroll-mt-28 ${
          isLast ? 'mb-8 sm:mb-12 lg:mb-16' : 'mb-[60vh] sm:mb-[70vh] lg:mb-[75vh]'
        } bg-white dark:bg-[#0e0e12] border-black/[0.08] dark:border-white/[0.1] border-t-black/[0.14] dark:border-t-white/20 shadow-[0_-10px_30px_-8px_rgba(0,0,0,0.08)] dark:shadow-[0_-20px_45px_-12px_rgba(0,0,0,0.8)] overflow-hidden`}
        style={{
          top: `var(--sticky-top, ${desktopStickyTop}px)`,
          zIndex: 10 + index * 5,
          transformOrigin: 'center top',
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
        {service.id === 'branding' && <span id="branding-identity" className="sr-only" />}
        {service.id === 'social-media' && <span id="social-media-management" className="sr-only" />}
        {service.id === 'web-design' && <span id="web-design-experiences" className="sr-only" />}

        {/* TOP DECK HEADER BAR (Visual Tab in Layered Deck) */}
        <div className="flex items-center justify-between px-3.5 sm:px-5 lg:px-6 py-1 sm:py-2 border-b border-black/[0.06] dark:border-white/[0.08] bg-black/[0.02] dark:bg-white/[0.02]">
          <div className="flex items-center gap-2 sm:gap-2.5">
            <span className="font-mono text-xs text-digitify-purple font-semibold tracking-wider flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-digitify-purple" />
              {service.number} / 06
            </span>
            <span className="hidden sm:inline-block text-black/20 dark:text-white/20 font-mono text-xs">|</span>
            <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-day-muted dark:text-agency-muted truncate">
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
        <div className="hidden lg:grid lg:grid-cols-12 gap-5 xl:gap-7 p-4 sm:p-5 lg:p-5 xl:p-6 items-stretch min-h-[380px] max-h-[470px]">
          {/* LEFT SIDE: Service Info, Deliverables & CTA */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-between pr-2 space-y-2">
            <div className="space-y-1.5 sm:space-y-2">
              <div>
                <h2 className="text-xl xl:text-2xl font-display font-medium text-black dark:text-white tracking-tight leading-tight">
                  {service.name}
                </h2>
                <p className="text-[11px] xl:text-xs text-day-subtext dark:text-agency-subtext leading-relaxed mt-0.5">
                  {service.shortDesc}
                </p>
              </div>

              {/* Overview */}
              <div className="pt-1.5 border-t border-black/[0.06] dark:border-white/[0.06]">
                <span className="text-[9px] font-mono uppercase tracking-widest text-digitify-purple block mb-0.5 font-semibold">
                  Overview
                </span>
                <p className="text-[11px] xl:text-xs text-day-subtext dark:text-agency-subtext leading-relaxed">
                  {service.fullDesc}
                </p>
              </div>

              {/* What We Deliver */}
              <div className="p-2 sm:p-2.5 rounded-xl border border-black/[0.06] dark:border-white/[0.06] bg-black/[0.02] dark:bg-white/[0.02]">
                <span className="text-[9px] font-mono uppercase tracking-widest text-day-muted dark:text-agency-muted block mb-1 font-semibold">
                  What We Deliver
                </span>
                <ul className="space-y-0.5 sm:space-y-1">
                  {service.deliverables.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-1.5 text-[11px] xl:text-xs text-day-subtext dark:text-agency-subtext"
                    >
                      <CheckCircle2 size={12} className="text-digitify-purple shrink-0 mt-0.5" />
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Best Suited For Tags */}
              <div>
                <span className="text-[9px] font-mono uppercase tracking-widest text-day-muted dark:text-agency-muted block mb-0.5 font-semibold">
                  Best Suited For
                </span>
                <div className="flex flex-wrap gap-1">
                  {service.suitableFor.map((item, idx) => (
                    <span
                      key={idx}
                      className="text-[9px] xl:text-[9.5px] font-mono px-2 py-0.5 rounded-full border border-black/[0.08] dark:border-white/[0.08] bg-black/[0.02] dark:bg-white/[0.02] text-day-subtext dark:text-agency-subtext"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Inquire CTA Button */}
            <div className="pt-2 border-t border-black/[0.06] dark:border-white/[0.06]">
              <Link
                to={`/contact?service=${service.id}`}
                className="inline-flex items-center justify-between w-full px-3.5 py-2 rounded-full border border-black/20 dark:border-white/20 text-[10.5px] xl:text-[11px] font-mono uppercase tracking-widest text-black dark:text-white hover:border-digitify-purple hover:text-digitify-purple active:scale-98 transition-all group"
              >
                <span>Inquire for {service.name}</span>
                <ArrowRight
                  size={12}
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
        {/* MOBILE VIEWPORT LAYOUT (< 1024px): NATURAL FIT WITHOUT CLIPPING */}
        {/* ============================================================== */}
        <div className="lg:hidden flex flex-col p-2.5 xs:p-3 sm:p-4 space-y-1.5 xs:space-y-2">
          {/* 1. MEDIA SHOWCASE BANNER */}
          <div className="w-full">
            <ServiceMediaPlaceholder
              serviceId={service.id}
              serviceName={service.name}
              serviceNumber={service.number}
            />
          </div>

          {/* 2. TITLE & SHORT DESCRIPTION */}
          <div>
            <h2 className="text-sm xs:text-base sm:text-lg font-display font-medium text-black dark:text-white tracking-tight leading-tight">
              {service.name}
            </h2>
            <p className="text-[10px] xs:text-[10.5px] sm:text-[11px] text-day-subtext dark:text-agency-subtext mt-0.5 leading-snug line-clamp-2">
              {service.shortDesc}
            </p>
          </div>

          {/* 3. OVERVIEW */}
          <div className="pt-1 border-t border-black/[0.06] dark:border-white/[0.06]">
            <span className="text-[8.5px] xs:text-[9px] font-mono uppercase tracking-widest text-digitify-purple block mb-0.5 font-semibold">
              Overview
            </span>
            <p className="text-[9.5px] xs:text-[10px] sm:text-[10.5px] text-day-subtext dark:text-agency-subtext leading-snug line-clamp-2">
              {service.fullDesc}
            </p>
          </div>

          {/* 4. WHAT WE DELIVER (ALL 5 DELIVERABLES) */}
          <div className="p-1.5 xs:p-2 rounded-lg border border-black/[0.06] dark:border-white/[0.06] bg-black/[0.02] dark:bg-white/[0.02]">
            <span className="text-[8px] xs:text-[8.5px] font-mono uppercase tracking-widest text-day-muted dark:text-agency-muted block mb-0.5 font-semibold">
              What We Deliver
            </span>
            <ul className="space-y-0.5">
              {service.deliverables.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-1.5 text-[9px] xs:text-[9.5px] sm:text-[10px] text-day-subtext dark:text-agency-subtext leading-tight min-w-0"
                >
                  <CheckCircle2 size={10} className="text-digitify-purple shrink-0" />
                  <span className="truncate min-w-0">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 5. BEST SUITED FOR TAGS */}
          <div>
            <span className="text-[8px] xs:text-[8.5px] font-mono uppercase tracking-widest text-day-muted dark:text-agency-muted block mb-0.5 font-semibold">
              Best Suited For
            </span>
            <div className="flex flex-wrap gap-1">
              {service.suitableFor.map((item, idx) => (
                <span
                  key={idx}
                  className="inline-block truncate max-w-[200px] text-[8px] xs:text-[8.5px] font-mono px-1.5 py-0.5 rounded-full border border-black/[0.08] dark:border-white/[0.08] bg-black/[0.02] dark:bg-white/[0.02] text-day-subtext dark:text-agency-subtext"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* 6. INQUIRE CTA BUTTON */}
          <div className="pt-1 xs:pt-1.5 border-t border-black/[0.06] dark:border-white/[0.06]">
            <Link
              to={`/contact?service=${service.id}`}
              className="flex items-center justify-between w-full py-1.5 px-3 rounded-full border border-black/20 dark:border-white/20 text-[9.5px] xs:text-[10px] font-mono uppercase tracking-widest text-black dark:text-white hover:border-digitify-purple hover:text-digitify-purple active:scale-98 transition-all"
            >
              <span>Inquire for {service.name}</span>
              <ArrowRight size={10} className="text-digitify-purple" />
            </Link>
          </div>
        </div>
      </div>
    );
  }
);

ServiceCard.displayName = 'ServiceCard';
