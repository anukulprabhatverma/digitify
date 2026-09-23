import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const FloatingCta: React.FC = () => {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  const isContactPage = location.pathname === '/contact';
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    if (isContactPage) {
      setIsVisible(false);
      return;
    }

    // On non-home pages, show the floating CTA across the site
    if (!isHomePage) {
      setIsVisible(true);
      return;
    }

    // On Home page, coordinate with hero CTA visibility
    let observer: IntersectionObserver | null = null;
    const heroCta = document.getElementById('hero-cta-container');

    const checkVisibility = () => {
      const el = document.getElementById('hero-cta-container');
      if (!el) {
        setIsVisible(window.scrollY > 350);
        return;
      }

      const rect = el.getBoundingClientRect();
      // If hero CTA is currently visible in viewport, hide floating CTA
      const inView = rect.top < window.innerHeight && rect.bottom > 0;
      // Also ensure we've scrolled a bit past hero before showing
      setIsVisible(!inView && window.scrollY > 200);
    };

    if (heroCta && 'IntersectionObserver' in window) {
      observer = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          if (entry.isIntersecting) {
            setIsVisible(false);
          } else {
            const rect = entry.boundingClientRect;
            // Scrolled past hero CTA downwards
            if (rect.bottom < window.innerHeight && window.scrollY > 200) {
              setIsVisible(true);
            } else {
              setIsVisible(false);
            }
          }
        },
        {
          rootMargin: '0px 0px -40px 0px',
          threshold: [0, 0.2, 0.5, 0.8, 1],
        }
      );
      observer.observe(heroCta);
    }

    const handleScroll = () => {
      checkVisibility();
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    checkVisibility();

    return () => {
      if (observer) observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location.pathname, isContactPage, isHomePage]);

  if (isContactPage) {
    return null;
  }

  return (
    <div
      className={`fixed z-40 right-4 sm:right-6 md:right-8 transition-all duration-300 ease-out ${
        isVisible
          ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto'
          : 'opacity-0 translate-y-4 scale-95 pointer-events-none'
      }`}
      style={{
        bottom: 'max(1.25rem, calc(env(safe-area-inset-bottom, 0px) + 0.75rem))',
      }}
    >
      <Link
        to="/contact"
        aria-label="Start a project with Digitify"
        className="flex items-center gap-2 sm:gap-2.5 px-4 sm:px-5 py-2.5 sm:py-3 rounded-full bg-black text-white dark:bg-white dark:text-black text-[11px] sm:text-xs uppercase tracking-wider sm:tracking-widest font-semibold shadow-2xl hover:bg-neutral-800 dark:hover:bg-neutral-200 active:scale-95 transition-all border border-black/10 dark:border-white/10 group"
      >
        <span>Start a Project</span>
        <ArrowRight
          size={14}
          className="shrink-0 transition-transform duration-200 group-hover:translate-x-0.5"
        />
      </Link>
    </div>
  );
};
