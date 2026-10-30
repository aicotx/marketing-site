import { cn } from '@/lib/utils';

/** White card framing an illustrative deliverable excerpt, styled like a piece of product UI. */
export function FigureCard({
  title,
  tag,
  note,
  className,
  children,
}: {
  title: React.ReactNode;
  tag?: React.ReactNode;
  note?: React.ReactNode;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        'rounded-xl border border-border bg-card px-7 pt-6 pb-6 text-card-foreground shadow-[0_1px_2px_rgba(0,0,0,.04),0_24px_60px_-32px_rgba(0,0,0,.22)]',
        className,
      )}
    >
      <div className="mb-5 flex items-baseline justify-between gap-3 border-b border-border pb-4">
        <span className="text-ui font-semibold text-ink">{title}</span>
        {tag && (
          <span className="whitespace-nowrap text-fine text-muted-foreground">
            {tag}
          </span>
        )}
      </div>
      {children}
      {note && <p className="mt-5 text-fine text-muted-foreground">{note}</p>}
    </div>
  );
}
