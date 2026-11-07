import Image from 'next/image';
import Link from 'next/link';
import { HomeLink } from '@/components/home-link';
import { Shell } from '@/components/layout/shell';
import { LinkedinIcon } from '@/components/linkedin-icon';
import { Rope } from '@/components/rope';
import { nav, site } from '@/lib/site';
import seal from '@/public/assets/img/logo_seal.png';
import sealDark from '@/public/assets/img/logo_seal_dark.png';

const smallLinkClass =
  'no-underline transition-opacity duration-150 hover:opacity-60';

/**
 * Site footer, a
 * three-part credit row (the seal, the motto between two pieces of rope, the
 * city), then the page links and small print below a rule.
 */
export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-background pt-[clamp(96px,14vw,200px)] pb-[clamp(64px,8vw,120px)] text-ink">
      <Shell rail>
        {/* the name, sized off the container width so it always spans it */}
        <div className="@container">
          <p
            aria-hidden="true"
            className="text-center font-serif text-[13.8cqw] leading-[0.95] tracking-[-0.04em] whitespace-nowrap md:text-[9.1cqw] md:leading-none"
          >
            The AI Company
            <br className="md:hidden" /> of Texas
          </p>
        </div>

        {/* lg up: the motto is dead center under the name, and each side holds
            at most two lines, the location stacked and the description balanced */}
        <div className="mt-[clamp(32px,4vw,56px)] grid grid-cols-1 items-center gap-10 text-center font-medium text-link lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:gap-8">
          <div className="flex flex-col items-center gap-3 lg:flex-row lg:justify-self-start">
            {/* the seal ships as black and white artwork; show the one for the theme */}
            <HomeLink
              aria-label={`${site.name} home`}
              className="shrink-0 transition-opacity duration-150"
            >
              <Image src={seal} alt="" className="size-16 dark:hidden" />
              <Image
                src={sealDark}
                alt=""
                className="hidden size-16 dark:block"
              />
            </HomeLink>
            <p className="flex flex-col lg:text-left">
              <span>Austin, Texas</span>
              <span>
                © {year} {site.legalName}
              </span>
            </p>
          </div>

          <div className="flex items-center justify-center gap-4">
            <Rope className="h-28 w-auto shrink-0" />
            <span className="font-serif font-semibold whitespace-nowrap">
              Come and make it
            </span>
            <Rope className="h-28 w-auto shrink-0 -scale-x-100" />
          </div>

          <p className="mx-auto max-w-[34ch] text-balance lg:mx-0 lg:max-w-[46ch] lg:justify-self-end lg:text-right">
            {site.description}
          </p>
        </div>

        <div className="mt-[clamp(40px,5vw,64px)] flex flex-col items-center gap-x-10 gap-y-4 border-t border-border pt-6 text-fine md:flex-row md:flex-wrap md:justify-between">
          <nav
            aria-label="Footer"
            className="flex flex-wrap justify-center gap-x-6 gap-y-2"
          >
            {nav.map((l) => (
              <Link key={l.href} href={l.href} className={smallLinkClass}>
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <a
              href={site.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className={smallLinkClass}
            >
              <LinkedinIcon className="size-4" />
            </a>
            <a href={`mailto:${site.email}`} className={smallLinkClass}>
              {site.email}
            </a>
          </div>
        </div>
      </Shell>
    </footer>
  );
}
