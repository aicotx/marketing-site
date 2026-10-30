import { Shell } from '@/components/layout/shell';
import { Kicker } from '@/components/sections/kicker';
import { cn } from '@/lib/utils';

/** Interior page opener: kicker, h1, then whatever lede content the page needs. */
export function PageHead({
  kicker,
  title,
  children,
  className,
}: {
  kicker: React.ReactNode;
  title?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <Shell
      className={cn(
        'pt-[clamp(56px,8vw,128px)] pb-[clamp(40px,6vw,80px)]',
        className,
      )}
    >
      <Kicker>{kicker}</Kicker>
      {title && <h1 className="max-w-[16ch]">{title}</h1>}
      {children}
    </Shell>
  );
}

export function PageLede({ className, ...props }: React.ComponentProps<'p'>) {
  return (
    <p
      className={cn(
        'mt-[clamp(24px,3vw,36px)] max-w-[60ch] text-foreground',
        className,
      )}
      {...props}
    />
  );
}
