import { cn } from '@/lib/utils';

/** Small solid ink tag for level codes, climbs and flags. `soft` swaps to a gray chip. */
export function Badge({
  soft = false,
  className,
  ...props
}: React.ComponentProps<'span'> & { soft?: boolean }) {
  return (
    <span
      className={cn(
        'inline-flex h-6 items-center rounded-[6px] px-2 font-sans text-fine font-semibold leading-none whitespace-nowrap tabular-nums',
        soft ? 'bg-accent text-ink' : 'bg-ink text-background',
        className,
      )}
      {...props}
    />
  );
}
