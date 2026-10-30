'use client';

import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

/** Sticky level index for the ladder page; highlights the level currently in view. */
export function LadderRail({
  levels,
}: {
  levels: { id: string; label: string }[];
}) {
  const [active, setActive] = useState<string | null>(null);
  const nav = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return;
    const spy = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id);
      },
      { rootMargin: '-20% 0px -65% 0px' },
    );
    levels.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) spy.observe(el);
    });
    return () => spy.disconnect();
  }, [levels]);

  // On the horizontal strip, keep the active level scrolled into view.
  useEffect(() => {
    const strip = nav.current;
    const link = strip?.querySelector<HTMLElement>(`a[href="#${active}"]`);
    if (!strip || !link || strip.scrollWidth <= strip.clientWidth) return;
    strip.scrollTo({
      left: link.offsetLeft - (strip.clientWidth - link.offsetWidth) / 2,
      behavior: 'smooth',
    });
  }, [active]);

  return (
    <nav
      ref={nav}
      aria-label="Levels"
      className={cn(
        'sticky z-20 flex',
        // phone/tablet: a solid scrolling strip pinned under the header
        'max-lg:top-[72px] max-lg:-mx-gutter max-lg:gap-6 max-lg:overflow-x-auto max-lg:border-b max-lg:border-border max-lg:bg-background max-lg:px-gutter max-lg:[scrollbar-width:none]',
        // desktop: a sidebar in its own column
        'lg:top-[104px] lg:flex-col lg:border-l lg:border-border',
      )}
    >
      <span className="label-sm pb-3 pl-[18px] max-lg:hidden">Levels</span>
      {levels.map((l) => (
        <a
          key={l.id}
          href={`#${l.id}`}
          className={cn(
            'border-transparent text-link whitespace-nowrap text-muted-foreground no-underline transition-colors duration-150 hover:text-ink',
            'max-lg:-mb-px max-lg:border-b-2 max-lg:py-3.5',
            'lg:-ml-[1.5px] lg:border-l-2 lg:py-2 lg:pl-[18px]',
            active === l.id && 'border-ink font-medium text-ink',
          )}
        >
          {l.label}
        </a>
      ))}
    </nav>
  );
}
