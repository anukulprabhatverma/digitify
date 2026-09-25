import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const targetId = hash.replace('#', '');
      const prefersReducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches;
      const behavior: ScrollBehavior = prefersReducedMotion ? 'auto' : 'smooth';

      const scrollToTarget = () => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior, block: 'start' });
          return true;
        }
        return false;
      };

      // Attempt immediate scroll and retry with delays for layout stabilization
      scrollToTarget();
      const t1 = setTimeout(scrollToTarget, 100);
      const t2 = setTimeout(scrollToTarget, 300);
      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
      };
    } else {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant' as ScrollBehavior,
      });
    }
  }, [pathname, hash]);

  return null;
};
