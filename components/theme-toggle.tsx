'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useSyncExternalStore } from 'react';
import { cn } from '@/lib/utils';

const subscribe = () => () => {};

/**
 * Floating light/dark pill, bottom-right on every page. The theme is unknown
 * during SSR, so until hydration it renders an empty pill of the same size.
 */
export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );
  const isDark = mounted && resolvedTheme === 'dark';

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label={
        mounted ? `Switch to ${isDark ? 'light' : 'dark'} mode` : 'Toggle theme'
      }
      className="fixed right-5 bottom-5 z-40 flex h-6 w-11 items-center rounded-full border border-border bg-background shadow-[0_4px_16px_-6px_rgba(0,0,0,.25)] transition-colors hover:bg-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
    >
      {mounted && (
        <span
          className={cn(
            'absolute top-[2px] flex size-[18px] items-center justify-center rounded-full bg-ink text-background transition-transform duration-200',
            isDark ? 'translate-x-[22px]' : 'translate-x-[2px]',
          )}
        >
          {isDark ? (
            <Moon className="size-2.5" aria-hidden="true" />
          ) : (
            <Sun className="size-3" aria-hidden="true" />
          )}
        </span>
      )}
    </button>
  );
}
