'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

/**
 * A link to the top of the home page. Next treats a link to the page you're
 * already on as a no-op, so on the home page this scrolls back up instead.
 */
export function HomeLink(
  props: Omit<React.ComponentProps<typeof Link>, 'href'>,
) {
  const pathname = usePathname();

  return (
    <Link
      {...props}
      href="/"
      onClick={(event) => {
        props.onClick?.(event);
        if (event.defaultPrevented || pathname !== '/') return;
        event.preventDefault();
        const reduce = window.matchMedia(
          '(prefers-reduced-motion: reduce)',
        ).matches;
        window.scrollTo({ top: 0, behavior: reduce ? 'instant' : 'smooth' });
      }}
    />
  );
}
