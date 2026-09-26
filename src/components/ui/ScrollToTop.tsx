import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { scrollToService } from '../../utils/scrollUtils';

export const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const prefersReducedMotion =
        typeof window !== 'undefined' &&
        window.matchMedia &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const smooth = !prefersReducedMotion;

      const performScroll = () => {
        return scrollToService(hash, smooth);
      };

      // Attempt immediate scroll and retry with delays for layout stabilization
      performScroll();
      const t1 = setTimeout(performScroll, 60);
      const t2 = setTimeout(performScroll, 200);
      const t3 = setTimeout(performScroll, 400);

      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
        clearTimeout(t3);
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

