import { Shell } from '@/components/layout/shell';
import { Kicker } from '@/components/sections/kicker';
import { cn } from '@/lib/utils';

/**
 * Interior page opener: a gray eyebrow, a serif h1, then whatever the page
 * needs under it (a lede, a row of pills). An `aside` sits in a wider right
 * column on large screens, the way a product panel would.
 */
export function PageHead({
  kicker,
  title,
  children,
  aside,
  className,
}: {
  kicker: React.ReactNode;
  title?: React.ReactNode;
  children?: React.ReactNode;
  aside?: React.ReactNode;
  className?: string;
}) {
  const text = (
    <div>
      <Kicker rule={false} className="mb-4">
        {kicker}
      </Kicker>
      {title && (
        <h1 className="max-w-[20ch] text-[clamp(44px,5vw,68px)] leading-[1.02]">
          {title}
        </h1>
      )}
      {children}
    </div>
  );

  return (
    <Shell
      className={cn(
        'pt-[clamp(56px,8vw,128px)] pb-[clamp(48px,6vw,96px)]',
        aside &&
          'grid items-start gap-x-[clamp(40px,6vw,104px)] gap-y-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.8fr)]',
        className,
      )}
    >
      {text}
      {aside}
    </Shell>
  );
}

export function PageLede({ className, ...props }: React.ComponentProps<'p'>) {
  return (
    <p
      className={cn(
        'mt-[clamp(20px,2.5vw,32px)] max-w-[60ch] text-foreground',
        className,
      )}
      {...props}
    />
  );
}

/** A row of pills under a page head or lede. */
export function PageActions({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-[clamp(28px,3vw,40px)] flex flex-wrap gap-3">
      {children}
    </div>
  );
}
