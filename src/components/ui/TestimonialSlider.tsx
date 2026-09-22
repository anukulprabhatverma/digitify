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

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
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
      className="w-full"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
      role="region"
      aria-label="Client Testimonials Carousel"
    >
      <div className="p-6 sm:p-10 md:p-14 rounded-2xl border border-day-border dark:border-agency-border bg-day-surface/60 dark:bg-agency-surface/40 relative overflow-hidden">
        {/* Subtle background quotation mark */}
        <Quote
          size={120}
          className="absolute -bottom-6 -right-6 text-day-border/40 dark:text-agency-border/30 pointer-events-none stroke-[0.8]"
        />

        <div className="flex flex-col justify-between space-y-8 min-h-[220px]">
          {/* Top metadata & navigation controls */}
          <div className="flex items-center justify-between border-b border-day-border/60 dark:border-agency-border/60 pb-4">
            <div className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-digitify-purple" />
              <span className="text-[11px] font-mono uppercase tracking-widest text-day-muted dark:text-agency-muted">
                {current.category}
              </span>
            </div>

            {/* Pagination Controls */}
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-day-muted dark:text-agency-muted">
                {String(currentIndex + 1).padStart(2, '0')} /{' '}
                {String(testimonials.length).padStart(2, '0')}
              </span>
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={prevSlide}
                  aria-label="Previous testimonial"
                  className="w-8 h-8 rounded-full border border-day-border dark:border-agency-border flex items-center justify-center text-day-subtext dark:text-agency-subtext hover:border-black dark:hover:border-white hover:text-black dark:hover:text-white transition-colors"
                >
                  <ArrowLeft size={14} />
                </button>
                <button
                  type="button"
                  onClick={nextSlide}
                  aria-label="Next testimonial"
                  className="w-8 h-8 rounded-full border border-day-border dark:border-agency-border flex items-center justify-center text-day-subtext dark:text-agency-subtext hover:border-black dark:hover:border-white hover:text-black dark:hover:text-white transition-colors"
                >
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>

          {/* Testimonial Quote */}
          <div key={current.id} className="transition-opacity duration-300 ease-out">
            <span className="text-xs font-mono uppercase tracking-widest text-day-muted dark:text-agency-muted block mb-2">
              CLIENT TESTIMONIAL
            </span>
            <blockquote className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-display font-medium text-black dark:text-white leading-snug tracking-tight">
              &ldquo;{current.quote}&rdquo;
            </blockquote>
          </div>

          {/* Attribution & Placeholder Verification */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pt-4 border-t border-day-border/60 dark:border-agency-border/60">
            <div>
              <div className="text-sm sm:text-base font-mono uppercase tracking-wider font-semibold text-black dark:text-white">
                — {current.clientName}
              </div>
              <div className="text-xs font-mono text-day-muted dark:text-agency-muted mt-0.5">
                {current.companyRole}
              </div>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-day-border dark:border-agency-border bg-day-surface dark:bg-agency-surface text-[10px] font-mono uppercase tracking-widest text-day-muted dark:text-agency-muted">
              <span>Verified Testimonial Placeholder</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
