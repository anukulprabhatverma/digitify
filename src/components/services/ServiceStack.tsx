import React, { useEffect, useRef } from 'react';
import { ServiceItem } from '../../data/servicesData';
import { ServiceCard } from './ServiceCard';

interface ServiceStackProps {
  services: ServiceItem[];
}

/**
 * ServiceStack
 *
 * Coordinates the 6-card sticky stacking experience.
 * High-performance compositor-driven transforms (requestAnimationFrame):
 * - Checks each card's position relative to its viewport sticky point
 * - When subsequent cards rise and overlay previous cards:
 *   Subtle scale reduction: 1.0 -> 0.985
 *   Subtle depth shadow and opacity easing
 *   Zero feedback loops on geometry measurements
 * - Zero React re-renders on scroll events
 */
export const ServiceStack: React.FC<ServiceStackProps> = ({ services }) => {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Respect user's motion preferences
    if (
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return;
    }

    let rafId: number | null = null;
    let ticking = false;

    const updateStackingDepths = () => {
      ticking = false;
      const cards = cardRefs.current;
      const isMobile = window.innerWidth < 1024;
      const baseTop = isMobile ? 68 : 88;
      const stepTop = isMobile ? 4 : 12;
      const isDark = document.documentElement.classList.contains('dark');

      for (let i = 0; i < cards.length; i++) {
        const card = cards[i];
        if (!card) continue;

        const scrim = card.querySelector<HTMLDivElement>('.service-card-scrim');
        const cardHeight = card.offsetHeight;
        const iStickyTop = baseTop + i * stepTop;
        const iBottom = iStickyTop + cardHeight;

        // Accumulate coverage depth from cards that rise over this card
        let totalCoverage = 0;

        for (let k = i + 1; k < cards.length; k++) {
          const incomingCard = cards[k];
          if (!incomingCard) continue;

          const kStickyTop = baseTop + k * stepTop;
          const incomingRect = incomingCard.getBoundingClientRect();

          // Incoming card starts affecting card i when it begins physically overlapping card i
          const overlapDistance = iBottom - kStickyTop;

          if (overlapDistance > 0 && incomingRect.top < iBottom) {
            const rawP = Math.max(
              0,
              Math.min(1, (iBottom - incomingRect.top) / overlapDistance)
            );
            // Cubic Hermite smoothstep for continuous fluid motion with 0 initial/final jerk
            const smoothP = rawP * rawP * (3 - 2 * rawP);
            totalCoverage += smoothP;
          }
        }

        if (totalCoverage <= 0.001) {
          // ACTIVE FRONT CARD:
          // 100% sharp, zero blur, solid brightness, scale 1.0, scrim completely invisible
          card.style.transform = 'translate3d(0, 0, 0) scale(1)';
          card.style.filter = 'blur(0px)';
          card.style.opacity = '1';
          if (scrim) scrim.style.opacity = '0';
        } else {
          // CARD UNDERNEATH:
          // Smooth progressive blur: 0px -> ~4.5px
          // In Light Mode: delicate contrast shadow, never dirty or muddy
          // In Dark Mode: rich obsidian dimming into the background
          const blurPx = Math.min(5.0, totalCoverage * 3.8);
          const maxDim = isDark ? 0.45 : 0.18;
          const dimStep = isDark ? 0.32 : 0.12;
          const dimOpacity = Math.min(maxDim, totalCoverage * dimStep);
          const scale = Math.max(0.978, 1 - totalCoverage * 0.012);

          card.style.transform = `translate3d(0, 0, 0) scale(${scale.toFixed(4)})`;
          card.style.filter = `blur(${blurPx.toFixed(2)}px)`;
          card.style.opacity = '1';
          if (scrim) scrim.style.opacity = `${dimOpacity.toFixed(3)}`;
        }
      }
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        rafId = requestAnimationFrame(updateStackingDepths);
      }
    };

    // Initial pass
    updateStackingDepths();

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [services.length]);

  return (
    <section className="service-stack relative w-full">
      {services.map((service, index) => (
        <React.Fragment key={service.id}>
          <div
            id={`anchor-${service.id}`}
            data-service-anchor={service.id}
            className="service-anchor relative w-full h-0 pointer-events-none"
            aria-hidden="true"
          />
          <ServiceCard
            ref={(el) => (cardRefs.current[index] = el)}
            service={service}
            index={index}
            total={services.length}
          />
        </React.Fragment>
      ))}
    </section>
  );
};
