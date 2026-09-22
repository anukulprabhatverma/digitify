import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import { Testimonial } from '../../data/testimonialsData';

interface TestimonialSliderProps {
  testimonials: Testimonial[];
}

export const TestimonialSlider: React.FC<TestimonialSliderProps> = ({
  testimonials,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<number | null>(null);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsPaused(true);
    touchStartX.current = e.targetTouches[0].clientX;
    touchEndX.current = null;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    setIsPaused(false);
    if (touchStartX.current !== null && touchEndX.current !== null) {
      const distance = touchStartX.current - touchEndX.current;
      const minSwipeDistance = 40;
      if (distance > minSwipeDistance) {
        nextSlide();
      } else if (distance < -minSwipeDistance) {
        prevSlide();
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  // Auto-rotation every 6 seconds with interaction pause and prefers-reduced-motion check
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion || isPaused) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = window.setInterval(() => {
      setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 6000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, testimonials.length]);

  const current = testimonials[currentIndex];

  return (
    <div
      className="w-full touch-pan-y select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      role="region"
      aria-label="Client Testimonials Carousel"
    >
      <div className="p-4 xs:p-6 sm:p-10 md:p-14 rounded-2xl border border-day-border dark:border-agency-border bg-day-surface/60 dark:bg-agency-surface/40 relative overflow-hidden">
        {/* Subtle background quotation mark - sized appropriately for mobile */}
        <Quote
          className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 w-16 h-16 sm:w-28 sm:h-28 text-day-border/40 dark:text-agency-border/30 pointer-events-none stroke-[0.8]"
        />

        <div className="flex flex-col justify-between space-y-6 sm:space-y-8 min-h-[200px]">
          {/* Top metadata & navigation controls */}
          <div className="flex items-center justify-between border-b border-day-border/60 dark:border-agency-border/60 pb-3 sm:pb-4">
            <div className="flex items-center gap-2 sm:gap-3 min-w-0">
              <span className="h-1.5 w-1.5 rounded-full bg-digitify-purple shrink-0" />
              <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-day-muted dark:text-agency-muted truncate">
                {current.category}
              </span>
            </div>

            {/* Pagination Controls */}
            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              <span className="text-[11px] sm:text-xs font-mono text-day-muted dark:text-agency-muted">
                {String(currentIndex + 1).padStart(2, '0')} /{' '}
                {String(testimonials.length).padStart(2, '0')}
              </span>
              <div className="flex items-center gap-1 sm:gap-1.5">
                <button
                  type="button"
                  onClick={prevSlide}
                  aria-label="Previous testimonial"
                  className="w-9 h-9 sm:w-8 sm:h-8 rounded-full border border-day-border dark:border-agency-border flex items-center justify-center text-day-subtext dark:text-agency-subtext hover:border-black dark:hover:border-white hover:text-black dark:hover:text-white active:scale-95 transition-all"
                >
                  <ArrowLeft size={14} />
                </button>
                <button
                  type="button"
                  onClick={nextSlide}
                  aria-label="Next testimonial"
                  className="w-9 h-9 sm:w-8 sm:h-8 rounded-full border border-day-border dark:border-agency-border flex items-center justify-center text-day-subtext dark:text-agency-subtext hover:border-black dark:hover:border-white hover:text-black dark:hover:text-white active:scale-95 transition-all"
                >
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>

          {/* Testimonial Quote */}
          <div key={current.id} className="transition-opacity duration-300 ease-out py-1">
            <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-day-muted dark:text-agency-muted block mb-2">
              CLIENT TESTIMONIAL
            </span>
            <blockquote className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-display font-medium text-black dark:text-white leading-snug tracking-tight">
              &ldquo;{current.quote}&rdquo;
            </blockquote>
          </div>

          {/* Attribution & Placeholder Verification */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 pt-4 border-t border-day-border/60 dark:border-agency-border/60">
            <div>
              <div className="text-xs sm:text-base font-mono uppercase tracking-wider font-semibold text-black dark:text-white">
                — {current.clientName}
              </div>
              <div className="text-[11px] sm:text-xs font-mono text-day-muted dark:text-agency-muted mt-0.5">
                {current.companyRole}
              </div>
            </div>

            <div className="inline-flex items-center gap-2 px-2.5 sm:px-3 py-1 rounded-full border border-day-border dark:border-agency-border bg-day-surface dark:bg-agency-surface text-[9px] sm:text-[10px] font-mono uppercase tracking-widest text-day-muted dark:text-agency-muted w-fit">
              <span>Verified Testimonial Placeholder</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
