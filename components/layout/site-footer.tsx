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
  'text-ink no-underline transition-opacity duration-150 hover:opacity-60';

/**
 * Site footer, a
 * three-part credit row (the seal, the motto between two pieces of rope, the
 * city), then the page links and small print below a rule.
 */
export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-background pt-[clamp(96px,14vw,200px)] pb-[clamp(64px,8vw,120px)] text-link">
      <Shell rail>
        {/* the name, sized off the container width so it always spans it */}
        <div className="@container">
          <p
            aria-hidden="true"
            className="text-center font-serif text-[13.8cqw] leading-[0.95] tracking-[-0.04em] whitespace-nowrap text-ink md:text-[9.1cqw] md:leading-none"
          >
            The AI Company
            <br className="md:hidden" /> of Texas
          </p>
        </div>

        <div className="mt-[clamp(32px,4vw,56px)] grid grid-cols-1 items-center gap-10 text-center lg:grid-cols-3 lg:gap-6">
          <div className="flex flex-col items-center gap-3 lg:flex-row lg:text-left">
            {/* the seal ships as black and white artwork; show the one for the theme */}
            <HomeLink
              aria-label={`${site.name} home`}
              className="shrink-0 transition-opacity duration-150 hover:opacity-70"
            >
              <Image src={seal} alt="" className="size-16 dark:hidden" />
              <Image
                src={sealDark}
                alt=""
                className="hidden size-16 dark:block"
              />
            </HomeLink>
            <span className="max-w-[34ch] text-balance text-muted-foreground">
              {site.description}
            </span>
          </div>

          <div className="flex items-center justify-center gap-4 lg:gap-6">
            <Rope className="h-28 w-auto shrink-0 text-ink" />
            <span className="max-w-[26ch] font-medium text-balance text-ink">
              Come and make it
            </span>
            <Rope className="h-28 w-auto shrink-0 -scale-x-100 text-ink" />
          </div>

          <p className="text-muted-foreground lg:text-right">
            Austin, Texas
            <br />© {year} {site.legalName}
          </p>
        </div>

        <div className="mt-[clamp(40px,5vw,64px)] flex flex-wrap items-center justify-between gap-x-10 gap-y-4 border-t border-border pt-6 text-fine text-muted-foreground">
          <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2">
            {nav.map((l) => (
              <Link key={l.href} href={l.href} className={smallLinkClass}>
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
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
