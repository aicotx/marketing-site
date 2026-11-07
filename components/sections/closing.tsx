import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { site } from '@/lib/site';
import flag from '@/public/assets/img/flag.jpg';

/**
 * Full-bleed closing call to action that ends every page: a blurred photo,
 * a centered serif headline, an optional line of copy, and two pills.
 */
export function Closing({
  title,
  children,
  secondary = { href: '/ladder/', label: 'See the ladder' },
}: {
  title: React.ReactNode;
  children?: React.ReactNode;
  secondary?: { href: string; label: string } | null;
}) {
  return (
    <section className="px-2 pt-[clamp(48px,6vw,96px)]">
      <div className="relative grid min-h-[clamp(480px,72svh,760px)] place-items-center overflow-hidden bg-[#6f6f6f] text-center">
        <Image
          src={flag}
          alt=""
          fill
          sizes="50vw"
          className="scale-110 object-cover object-[70%_30%] blur-2xl grayscale"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-black/30" />
        <div className="relative flex flex-col items-center px-gutter py-20">
          <h2 className="max-w-[16ch] text-[clamp(44px,7vw,88px)] leading-none tracking-[-0.03em] text-white">
            {title}
          </h2>
          {children && (
            <p className="mt-6 max-w-[48ch] text-white/85">{children}</p>
          )}
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Button
              variant="photo"
              size="pill-sm"
              nativeButton={false}
              render={<a href={`mailto:${site.email}`} />}
              className="h-11 text-[15px]"
            >
              Book a discovery call
            </Button>
            {secondary && (
              <Button
                variant="photo-line"
                size="pill-sm"
                nativeButton={false}
                render={<Link href={secondary.href} />}
                className="h-11 text-[15px]"
              >
                {secondary.label}
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
