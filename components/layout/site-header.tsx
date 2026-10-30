'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Shell } from '@/components/layout/shell';
import { Button } from '@/components/ui/button';
import { nav, site } from '@/lib/site';
import { cn } from '@/lib/utils';
import logo from '@/public/assets/img/logo.png';
import wordmark from '@/public/assets/img/wordmark.png';

const menuLinks = nav;

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // While the phone menu is open: lock page scroll, close on Escape, and
  // close if the viewport grows past md (where the overlay is hidden).
  useEffect(() => {
    if (!menuOpen) return;
    const close = () => setMenuOpen(false);
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && close();
    const wide = window.matchMedia('(width >= 48rem)');
    document.documentElement.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    wide.addEventListener('change', close);
    return () => {
      document.documentElement.style.overflow = '';
      window.removeEventListener('keydown', onKey);
      wide.removeEventListener('change', close);
    };
  }, [menuOpen]);

  const current = (href: string) => (pathname === href ? 'page' : undefined);
  const close = () => setMenuOpen(false);

  return (
    <>
      <header
        className={cn(
          'sticky top-0 z-40 border-b bg-background/90 backdrop-blur-[14px] transition-[border-color] duration-250',
          scrolled || menuOpen ? 'border-border' : 'border-transparent',
        )}
      >
        <Shell
          rail
          className="grid h-[72px] grid-cols-[1fr_auto_1fr] items-center gap-6 max-md:flex max-md:justify-between"
        >
          <Link
            href="/"
            onClick={close}
            className="flex shrink-0 items-center no-underline"
          >
            <Image
              src={wordmark}
              alt=""
              priority
              className="h-[22px] w-auto max-lg:hidden dark:invert"
            />
            <Image
              src={logo}
              alt=""
              priority
              className="h-8 w-auto lg:hidden dark:invert"
            />
            <span className="sr-only">The AI Company of Texas</span>
          </Link>
          <nav className="flex items-center gap-[clamp(18px,2.6vw,40px)] max-md:hidden">
            {nav.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                aria-current={current(l.href)}
                className={cn(
                  'relative whitespace-nowrap py-1 text-tight font-medium text-ink no-underline transition-opacity duration-150 hover:opacity-60',
                  'after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-ink after:transition-transform after:duration-200 aria-[current=page]:after:scale-x-100',
                )}
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center justify-end gap-4">
            <Button
              variant="dark"
              size="pill-sm"
              nativeButton={false}
              render={<a href={`mailto:${site.email}`} onClick={close} />}
              className="max-md:h-9 max-md:px-3.5"
            >
              Contact
            </Button>

            {/* Hamburger: three lines that fold into an X */}
            <button
              type="button"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen((v) => !v)}
              className="relative -mr-2 flex size-9 items-center justify-center md:hidden"
            >
              <span
                className={cn(
                  'absolute block h-px w-4 origin-center bg-ink transition-all duration-300',
                  menuOpen ? 'translate-y-0 rotate-45' : '-translate-y-[5px]',
                )}
              />
              <span
                className={cn(
                  'absolute block h-px w-4 bg-ink transition-all duration-300',
                  menuOpen ? 'scale-x-0 opacity-0' : 'translate-y-0',
                )}
              />
              <span
                className={cn(
                  'absolute block h-px w-4 origin-center bg-ink transition-all duration-300',
                  menuOpen ? 'translate-y-0 -rotate-45' : 'translate-y-[5px]',
                )}
              />
            </button>
          </div>
        </Shell>
      </header>

      {/* Full-screen phone menu, sitting under the sticky header */}
      <div
        id="mobile-menu"
        inert={!menuOpen}
        className={cn(
          'fixed inset-0 z-30 flex flex-col bg-background transition-opacity duration-500 ease-in-out md:hidden',
          menuOpen
            ? 'pointer-events-auto opacity-100'
            : 'pointer-events-none opacity-0',
        )}
      >
        <div className="h-[72px] shrink-0" />
        <Shell rail className="w-full overflow-y-auto py-6">
          <nav className="flex flex-col">
            {menuLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                aria-current={current(l.href)}
                onClick={close}
                className="flex items-center border-b border-border py-6 font-serif text-h3 text-ink/80 no-underline transition-colors hover:text-ink aria-[current=page]:text-ink"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </Shell>
      </div>
    </>
  );
}
