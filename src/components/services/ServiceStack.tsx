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
 *   Subtle scale reduction: 1.0 -> 0.98 -> 0.96
 *   Subtle depth shadow and opacity easing
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
      const vh = window.innerHeight;
      const isMobile = window.innerWidth < 1024;
      const baseTop = isMobile ? 60 : 76;
      const stepTop = isMobile ? 14 : 26;
      const isDark = document.documentElement.classList.contains('dark');

      for (let i = 0; i < cards.length; i++) {
        const card = cards[i];
        if (!card) continue;

        const scrim = card.querySelector<HTMLDivElement>('.service-card-scrim');
        const cardRect = card.getBoundingClientRect();

        // Accumulate coverage depth from cards that rise over this card
        let totalCoverage = 0;

        for (let k = i + 1; k < cards.length; k++) {
          const incomingCard = cards[k];
          if (!incomingCard) continue;

          const incomingStickyTop = baseTop + k * stepTop;
          const incomingRect = incomingCard.getBoundingClientRect();

          // Incoming card starts affecting card i when it begins actually covering card i
          const overlapStart = Math.min(vh, cardRect.bottom + 50);
          const overlapEnd = incomingStickyTop;
          const travelDistance = overlapStart - overlapEnd;

          if (travelDistance > 0 && incomingRect.top < overlapStart) {
            const rawP = Math.max(
              0,
              Math.min(1, (overlapStart - incomingRect.top) / travelDistance)
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
          card.style.filter = 'none';
          card.style.opacity = '1';
          if (scrim) scrim.style.opacity = '0';
        } else {
          // CARD UNDERNEATH:
          // Smooth progressive blur: 0px -> ~5.2px on first cover, up to 8.0px for deeper stack
          // In Light Mode: delicate contrast shadow, never dirty or muddy
          // In Dark Mode: rich obsidian dimming into the background
          const blurPx = Math.min(8.0, totalCoverage * 5.2);
          const maxDim = isDark ? 0.55 : 0.20;
          const dimStep = isDark ? 0.38 : 0.14;
          const dimOpacity = Math.min(maxDim, totalCoverage * dimStep);
          const scale = Math.max(0.97, 1 - totalCoverage * 0.015);

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
        <ServiceCard
          key={service.id}
          ref={(el) => (cardRefs.current[index] = el)}
          service={service}
          index={index}
          total={services.length}
        />
      ))}
    </section>
  );
};
