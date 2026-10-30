'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

/** Adds `in` to every `.reveal` element once it scrolls into view. Re-scans on navigation. */
export function RevealObserver() {
  const pathname = usePathname();
  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>('.reveal:not(.in)');
    if (!('IntersectionObserver' in window)) {
      targets.forEach((el) => el.classList.add('in'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.05 },
    );
    targets.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);
  return null;
}
