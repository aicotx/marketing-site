import { cn } from "@/lib/utils";

const LEVELS = ["L0", "L1", "L2", "L3", "L4", "L5"];

export const defaultHeatmapRows = [
  { label: "Engineering", level: 2 },
  { label: "Operations", level: 1 },
  { label: "Finance", level: 1 },
  { label: "Sales", level: 0 },
  { label: "Support", level: 1 },
  { label: "Legal", level: 0 },
];

/** Function × level grid. Cells below `level` are tinted, `level` itself is lit. */
export function Heatmap({ rows = defaultHeatmapRows }: { rows?: { label: string; level: number }[] }) {
  return (
    <div
      role="img"
      aria-label="An illustrative audit heatmap showing six company functions placed at different maturity levels."
      className="grid grid-cols-[88px_repeat(6,1fr)] items-center gap-1.5"
    >
      <span />
      {LEVELS.map((l) => (
        <span key={l} className="pb-0.5 text-center font-mono text-[10.5px] text-muted-foreground">{l}</span>
      ))}
      {rows.map((r) => (
        <Row key={r.label} {...r} />
      ))}
    </div>
  );
}

function Row({ label, level }: { label: string; level: number }) {
  return (
    <>
      <span className="whitespace-nowrap pr-1 text-xs text-foreground">{label}</span>
      {LEVELS.map((_, i) => (
        <span
          key={i}
          className={cn(
            "h-6 rounded-[6px] border border-border",
            i < level && "border-accent bg-accent",
            i === level && "border-primary bg-primary",
          )}
        />
      ))}
    </>
  );
}
