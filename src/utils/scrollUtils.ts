/**
 * Service Hash Aliases
 * Maps user-facing footer hashes to the corresponding DOM element IDs.
 */
export const SERVICE_HASH_ALIASES: Record<string, string> = {
  'social-media-management': 'social-media',
  'social-media': 'social-media',
  'branding-identity': 'branding',
  'branding': 'branding',
  'web-design-experiences': 'web-design',
  'web-design': 'web-design',
  'digital-marketing': 'digital-marketing',
  'performance-marketing': 'performance-marketing',
  'graphic-design': 'graphic-design',
};

/**
 * Robust scroll handler for Services sticky cards and general page anchors.
 * Because the services page utilizes CSS position: sticky for its stacked card deck,
 * native element.scrollIntoView() cannot reliably position sticky elements
 * once they are already active or stacked. This function accurately computes
 * the card's unconstrained static offset within .service-stack and scrolls
 * to place the card in front, sharp, and with intentional clearance below the sticky header.
 */
export const scrollToService = (
  targetId: string,
  smooth: boolean = true
): boolean => {
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return false;
  }

  const cleanId = targetId.replace(/^#/, '');
  if (!cleanId) return false;

  const resolvedId = SERVICE_HASH_ALIASES[cleanId] || cleanId;

  // Check for static anchor first (which never suffers from sticky offset drift)
  const anchor =
    document.getElementById(`anchor-${resolvedId}`) ||
    document.getElementById(`anchor-${cleanId}`);
  let card = document.getElementById(resolvedId);

  if (card && !card.classList.contains('service-card')) {
    card = card.closest<HTMLElement>('.service-card') || card;
  }

  if (anchor || (card && card.classList.contains('service-card'))) {
    const prefersReducedMotion =
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const behavior: ScrollBehavior =
      smooth && !prefersReducedMotion ? 'smooth' : 'auto';

    const indexAttr = card?.getAttribute('data-index');
    const index = indexAttr ? parseInt(indexAttr, 10) : 0;

    const isMobile = window.innerWidth < 1024;
    const baseTop = isMobile ? 68 : 88;
    const stepTop = isMobile ? 4 : 12;
    const stickyTop = baseTop + index * stepTop;

    let targetScrollY: number;

    if (anchor) {
      const anchorDocTop = anchor.getBoundingClientRect().top + window.scrollY;
      targetScrollY = Math.round(anchorDocTop - stickyTop);
    } else if (card) {
      const stack = document.querySelector<HTMLElement>('.service-stack');
      const stackTop = stack
        ? stack.getBoundingClientRect().top + window.scrollY
        : 0;
      targetScrollY = Math.round(stackTop + card.offsetTop - stickyTop);
    } else {
      return false;
    }

    window.scrollTo({
      top: Math.max(0, targetScrollY),
      behavior,
    });

    // Notify listeners (like ServiceStack requestAnimationFrame depth tracker)
    window.dispatchEvent(new Event('scroll'));
    return true;
  }

  // Fallback for general anchors (e.g. on other pages or non-card anchors)
  const targetElement =
    document.getElementById(cleanId) || document.getElementById(resolvedId);
  if (targetElement) {
    const prefersReducedMotion =
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    targetElement.scrollIntoView({
      behavior: smooth && !prefersReducedMotion ? 'smooth' : 'auto',
      block: 'start',
    });
    return true;
  }

  return false;
};
