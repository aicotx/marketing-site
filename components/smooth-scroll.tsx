'use client';

import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import { useEffect } from 'react';

/**
 * Eased wheel scrolling (Lenis, same settings as grav-web). Touch stays
 * native, in-page #anchor links are eased too and honor scroll-margin-top,
 * and visitors who prefer reduced motion keep plain browser scrolling.
 */

/**
 * Lenis eases same-page #anchor clicks but leaves the browser's own jump in
 * place, so the page flashes at the target for a frame before easing there.
 * Cancel that jump and record the hash ourselves; Lenis still does the scroll.
 */
function onAnchorClick(event: MouseEvent) {
  if (event.defaultPrevented || event.button !== 0) return;
  if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
  const link = (event.target as Element | null)?.closest('a[href]');
  if (!(link instanceof HTMLAnchorElement) || link.target === '_blank') return;
  const url = new URL(link.href);
  if (!url.hash || url.origin !== location.origin) return;
  if (url.pathname !== location.pathname) return;
  event.preventDefault();
  if (url.hash !== location.hash) history.pushState(null, '', url.hash);
}
export function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const lenis = new Lenis({
      lerp: 0.08,
      wheelMultiplier: 1,
      smoothWheel: true,
      syncTouch: false,
      infinite: false,
      anchors: true,
      autoRaf: true,
    });

    document.addEventListener('click', onAnchorClick);

    return () => {
      document.removeEventListener('click', onAnchorClick);
      lenis.destroy();
    };
  }, []);

  return null;
}
