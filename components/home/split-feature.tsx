'use client';

import { useId, useState } from 'react';
import { Shell } from '@/components/layout/shell';
import { Kicker } from '@/components/sections/kicker';
import { cn } from '@/lib/utils';

export type SplitItem = {
  id: string;
  title: string;
  /** Short right-aligned tag on the row, e.g. a climb like "Rung 2 → 3". */
  tag?: string;
  body: string;
  /** What the dark panel shows while this item is open. */
  visual: React.ReactNode;
};

/**
 * Half dark visual panel, half text: an eyebrow, a lede, a row of pills, and
 * a ruled list where one item is open at a time and drives the panel.
 */
export function SplitFeature({
  eyebrow,
  lede,
  actions,
  items,
  visualSide = 'left',
}: {
  eyebrow: string;
  lede: React.ReactNode;
  actions?: React.ReactNode;
  items: SplitItem[];
  visualSide?: 'left' | 'right';
}) {
  const [active, setActive] = useState(0);
  const uid = useId();

  return (
    <section className="py-[clamp(72px,9vw,128px)]">
      <Shell
        className={cn(
          'grid items-center gap-x-[clamp(40px,6vw,104px)] gap-y-12',
          visualSide === 'left'
            ? 'lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]'
            : 'lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)]',
        )}
      >
        <div
          className={cn(
            'surface-dark relative min-h-[380px] overflow-hidden max-lg:order-last lg:aspect-[6/5]',
            visualSide === 'right' && 'lg:order-last',
          )}
        >
          {items.map((item, i) => (
            <div
              key={item.id}
              aria-hidden={i !== active}
              className={cn(
                'absolute inset-0 grid place-items-center p-[clamp(24px,4vw,56px)] transition-opacity duration-300 motion-reduce:transition-none',
                i === active ? 'opacity-100' : 'pointer-events-none opacity-0',
              )}
            >
              {item.visual}
            </div>
          ))}
        </div>

        <div>
          <Kicker rule={false} className="mb-4">
            {eyebrow}
          </Kicker>
          <p className="lede max-w-[24ch]">{lede}</p>
          {actions && (
            <div className="mt-8 flex flex-wrap gap-3">{actions}</div>
          )}

          <ul className="mt-[clamp(40px,5vw,64px)]">
            {items.map((item, i) => {
              const open = i === active;
              const panel = `${uid}-${item.id}`;
              return (
                <li
                  key={item.id}
                  className={cn(
                    'relative border-t border-border',
                    open &&
                      'before:absolute before:inset-x-0 before:-top-px before:h-[3px] before:bg-ink',
                  )}
                >
                  <button
                    type="button"
                    aria-expanded={open}
                    aria-controls={panel}
                    onClick={() => setActive(i)}
                    className={cn(
                      'flex w-full items-baseline justify-between gap-6 py-5 text-left text-h3-sm transition-colors duration-150',
                      open ? 'text-ink' : 'text-subtle hover:text-foreground',
                    )}
                  >
                    <span>{item.title}</span>
                    {item.tag && (
                      <span className="shrink-0 text-fine font-medium tabular-nums text-muted-foreground">
                        {item.tag}
                      </span>
                    )}
                  </button>
                  <div
                    id={panel}
                    inert={!open}
                    className={cn(
                      'grid transition-[grid-template-rows] duration-300 motion-reduce:transition-none',
                      open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-[48ch] pb-7 text-muted-foreground">
                        {item.body}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </Shell>
    </section>
  );
}
