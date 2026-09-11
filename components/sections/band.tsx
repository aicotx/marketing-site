import { Shell } from "@/components/layout/shell";
import { Kicker } from "@/components/sections/kicker";
import { Button } from "@/components/ui/button";

/** Espresso call-to-action band that closes every page. */
export function Band({
  kicker,
  title,
  children,
  cta,
}: {
  kicker: React.ReactNode;
  title: React.ReactNode;
  children: React.ReactNode;
  cta: { href: string; label: React.ReactNode };
}) {
  return (
    <section className="relative overflow-hidden bg-secondary py-[clamp(64px,9vw,130px)] text-secondary-foreground before:pointer-events-none before:absolute before:inset-0 before:bg-[radial-gradient(rgba(255,255,255,.12)_1px,transparent_1px)] before:bg-[length:22px_22px] before:content-['']">
      <Shell>
        <Kicker className="border-band-rule text-espresso-soft [&_em]:text-gold">{kicker}</Kicker>
        <h2 className="max-w-[18ch] text-band text-secondary-foreground">{title}</h2>
        <p className="mt-6 max-w-[56ch] text-band-body text-espresso-soft">{children}</p>
        <Button variant="light" size="pill-lg" nativeButton={false} render={<a href={cta.href} />} className="mt-9">
          {cta.label}
        </Button>
      </Shell>
    </section>
  );
}
