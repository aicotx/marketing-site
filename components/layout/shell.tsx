import { cn } from '@/lib/utils';

/** Centered content well. `rail` widens to the outer 1400px frame (header, footer). */
export function Shell({
  rail = false,
  className,
  ...props
}: React.ComponentProps<'div'> & { rail?: boolean }) {
  return (
    <div
      className={cn(
        'relative z-[2] mx-auto px-gutter',
        rail ? 'max-w-rail' : 'max-w-shell',
        className,
      )}
      {...props}
    />
  );
}
