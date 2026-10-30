import { ArrowRight } from 'lucide-react';
import { Shell } from '@/components/layout/shell';
import { Kicker } from '@/components/sections/kicker';
import { Button } from '@/components/ui/button';
import { site } from '@/lib/site';

/** Ink call-to-action panel that closes every page. Defaults to the "no cost" kicker and a mailto CTA. */
export function Band({
  kicker = 'Begin · no cost',
  title,
  children,
  cta = { href: `mailto:${site.email}`, label: site.email },
}: {
  kicker?: React.ReactNode;
  title: React.ReactNode;
  children: React.ReactNode;
  cta?: { href: string; label: React.ReactNode };
}) {
  return (
    <section className="pb-[clamp(16px,2vw,24px)]">
      <Shell className="max-sm:px-3">
        <div className="surface-dark bg-glow relative overflow-hidden rounded-2xl px-[clamp(24px,6vw,96px)] py-[clamp(64px,9vw,128px)]">
          <div className="relative grid grid-cols-[minmax(0,1fr)_auto] items-end gap-x-16 gap-y-10 max-lg:grid-cols-1">
            <div>
              <Kicker>{kicker}</Kicker>
              <h2 className="max-w-[16ch] text-h2-band">{title}</h2>
              <p className="mt-7 max-w-[56ch]">{children}</p>
            </div>
            <Button
              variant="dark"
              size="pill"
              nativeButton={false}
              render={<a href={cta.href} />}
              className="justify-self-start"
            >
              {cta.label}
              <ArrowRight />
            </Button>
          </div>
        </div>
      </Shell>
    </section>
  );
}
