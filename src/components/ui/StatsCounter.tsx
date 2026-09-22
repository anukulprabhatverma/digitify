import React, { useState, useEffect, useRef } from 'react';
import { AgencyStat } from '../../data/statsData';

interface StatsCounterProps {
  stats: AgencyStat[];
}

export const StatsCounter: React.FC<StatsCounterProps> = ({ stats }) => {
  const [isInView, setIsInView] = useState(false);
  const [counts, setCounts] = useState<{ [key: string]: number }>({});
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Viewport Intersection Observer with 35% threshold (in 30-40% range)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.35 }
    );

    const currentTarget = containerRef.current;
    if (currentTarget) {
      observer.observe(currentTarget);
    }

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget);
      }
      observer.disconnect();
    };
  }, []);

  // Viewport-triggered, replayable count-up animation
  useEffect(() => {
    // When leaving the viewport, reset counters back to 0
    if (!isInView) {
      const resetCounts: { [key: string]: number } = {};
      stats.forEach((s) => {
        if (s.numericValue !== null) {
          resetCounts[s.id] = 0;
        }
      });
      setCounts(resetCounts);
      return;
    }

    // When entering viewport: check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion) {
      const immediate: { [key: string]: number } = {};
      stats.forEach((s) => {
        if (s.numericValue !== null) {
          immediate[s.id] = s.numericValue;
        }
      });
      setCounts(immediate);
      return;
    }

    // Replay animation from 0 to configured values
    const duration = 1600; // ms
    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Smooth ease-out cubic curve
      const easeOut = 1 - Math.pow(1 - progress, 3);

      const nextCounts: { [key: string]: number } = {};
      stats.forEach((s) => {
        if (s.numericValue !== null) {
          nextCounts[s.id] = Math.round(s.numericValue * easeOut);
        }
      });

      setCounts(nextCounts);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isInView, stats]);

  return (
    <div ref={containerRef} className="w-full">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {stats.map((stat, idx) => {
          const isNumeric = stat.numericValue !== null;
          const currentValue = isNumeric ? (counts[stat.id] ?? 0) : null;
          const displayValue = isNumeric
            ? `${currentValue}${stat.suffix}`
            : stat.displayPlaceholder;

          return (
            <div
              key={stat.id}
              className="p-5 sm:p-7 rounded-xl border border-day-border dark:border-agency-border bg-day-surface/70 dark:bg-agency-surface/50 flex flex-col justify-between space-y-4 transition-all duration-300 hover:border-black/30 dark:hover:border-white/30"
            >
              {/* Top Indicator */}
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase tracking-widest text-day-muted dark:text-agency-muted">
                  0{idx + 1} // METRIC
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-digitify-purple opacity-80" />
              </div>

              {/* Numerical Value with Smooth Deceleration & No Layout Shift */}
              <div>
                <div className="text-3xl sm:text-4xl md:text-5xl font-display font-medium tracking-tight text-black dark:text-white tabular-nums leading-none">
                  {displayValue}
                </div>
                <div className="text-xs sm:text-sm font-mono uppercase tracking-wider text-black dark:text-white mt-2.5 font-medium">
                  {stat.label}
                </div>
              </div>

              {/* Description */}
              <p className="text-[11px] sm:text-xs text-day-muted dark:text-agency-muted leading-relaxed border-t border-day-border/60 dark:border-agency-border/60 pt-2.5">
                {stat.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
