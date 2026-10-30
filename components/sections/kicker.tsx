import { cn } from '@/lib/utils';

/** Small eyebrow above a heading. `rule` adds the bottom spacing used above an h1. */
export function Kicker({
  rule = true,
  className,
  ...props
}: React.ComponentProps<'p'> & { rule?: boolean }) {
  return (
    <p
      className={cn('kicker', rule && 'mb-[clamp(18px,2.5vw,28px)]', className)}
      {...props}
    />
  );
}
