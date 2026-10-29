import { cn } from "@/lib/utils";

/** Cream card framing an illustrative deliverable excerpt. */
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
    <div className={cn("rounded-lg border border-border bg-card px-[26px] pt-6 pb-5 shadow-[0_24px_60px_-36px_rgba(70,40,15,.25)]", className)}>
      <div className="mb-[18px] flex items-baseline justify-between gap-3">
        <span className="text-sm font-semibold tracking-[-0.01em] text-ink">{title}</span>
        {tag && <span className="whitespace-nowrap font-mono text-meta text-muted-foreground">{tag}</span>}
      </div>
      {children}
      {note && <p className="mt-4 font-mono text-meta text-muted-foreground">{note}</p>}
    </div>
  );
}
