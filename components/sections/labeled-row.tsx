import { Shell } from '@/components/layout/shell';
import { cn } from '@/lib/utils';

/**
 * A heading in a narrow left column and the content in a wide right one,
 * both under a hairline. The heading sticks while its content scrolls.
 */
export function LabeledRow({
  id,
  label,
  heading,
  children,
  className,
}: {
  id?: string;
  /** Small mark above the heading, e.g. a level code. */
  label?: React.ReactNode;
  heading: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={cn('scroll-mt-24 py-[clamp(40px,5vw,72px)]', className)}
    >
      <Shell className="grid gap-x-[clamp(40px,6vw,104px)] gap-y-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,2.1fr)]">
        <div className="self-start border-t border-border pt-8 lg:sticky lg:top-28">
          {label && <div className="mb-4">{label}</div>}
          <h2 className="max-w-[12ch]">{heading}</h2>
        </div>
        <div className="border-t border-border pt-8 max-lg:border-t-0 max-lg:pt-0">
          {children}
        </div>
      </Shell>
    </section>
  );
}

/** A flat gray square card: a title, then gray body copy, with room to breathe. */
export function FeatureCard({
  id,
  title,
  children,
  footer,
  top,
  className,
}: {
  id?: string;
  title: React.ReactNode;
  children: React.ReactNode;
  footer?: React.ReactNode;
  /** Optional row above the title, e.g. badges. */
  top?: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      id={id}
      className={cn(
        'flex min-h-[220px] scroll-mt-28 flex-col bg-muted p-[clamp(20px,2.4vw,28px)]',
        className,
      )}
    >
      {top && <div className="mb-5 flex flex-wrap gap-2">{top}</div>}
      <h3 className="text-[17px] leading-6 text-ink">{title}</h3>
      <div className="mt-3 max-w-[52ch] text-muted-foreground">{children}</div>
      {footer && (
        <div className="mt-auto pt-8 text-fine text-muted-foreground">
          {footer}
        </div>
      )}
    </div>
  );
}
