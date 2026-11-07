import { Shell } from '@/components/layout/shell';
import { Kicker } from '@/components/sections/kicker';
import { cn } from '@/lib/utils';

/** A gray eyebrow over one large sans paragraph: the page's point, stated once. */
export function Statement({
  eyebrow,
  children,
  className,
}: {
  eyebrow: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Shell className={cn('py-[clamp(72px,9vw,136px)]', className)}>
      <Kicker rule={false} className="mb-4">
        {eyebrow}
      </Kicker>
      <p className="lede max-w-[34ch]">{children}</p>
    </Shell>
  );
}
