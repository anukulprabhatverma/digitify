import React, { useEffect, useState } from 'react';

export const ScrollProgress: React.FC = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    // Check if CSS scroll-timeline is natively supported
    const isScrollTimelineSupported =
      typeof CSS !== 'undefined' &&
      CSS.supports &&
      CSS.supports('animation-timeline', 'scroll()');

    if (isScrollTimelineSupported) {
      return; // Native CSS takes over via .native-scroll-progress
    }

    // Accessible fallback using window scroll listener
    const handleScroll = () => {
      const totalScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll <= 0) {
        setScrollPercentage(0);
        return;
      }
      const currentScroll = window.scrollY;
      const progress = Math.min(1, Math.max(0, currentScroll / totalScroll));
      setScrollPercentage(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Native CSS Scroll Timeline element */}
      <div
        className="native-scroll-progress pointer-events-none"
        aria-hidden="true"
      />
      {/* Fallback for browsers without animation-timeline: scroll() */}
      <div
        className="fixed top-0 left-0 h-[2px] bg-gradient-to-r from-digitify-purple to-white z-50 pointer-events-none transition-transform duration-75 ease-out origin-left md:hidden"
        style={{
          width: '100%',
          transform: `scaleX(${scrollPercentage})`,
        }}
        aria-hidden="true"
      />
    </>
  );
};
