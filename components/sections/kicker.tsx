import { cn } from "@/lib/utils";

/** Mono eyebrow. Wrap the rust highlight in <em>. `rule` draws the hairline underneath. */
export function Kicker({ rule = true, className, ...props }: React.ComponentProps<"p"> & { rule?: boolean }) {
  return (
    <p
      className={cn("kicker", rule && "mb-[clamp(24px,4vw,40px)] border-b border-border pb-3.5", className)}
      {...props}
    />
  );
}
