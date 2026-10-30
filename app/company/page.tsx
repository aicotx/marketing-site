import type { Metadata } from 'next';
import Image from 'next/image';
import { JsonLd } from '@/components/json-ld';
import { Shell } from '@/components/layout/shell';
import { LinkedinIcon } from '@/components/linkedin-icon';
import { Band } from '@/components/sections/band';
import { PageHead, PageLede } from '@/components/sections/page-head';
import { founders } from '@/lib/content';
import {
  companyPageLd,
  graph,
  openGraphDefaults,
  pageBreadcrumbLd,
} from '@/lib/seo';
import { site } from '@/lib/site';

const description = `The founders of ${site.name}: ${founders.map((f) => f.name).join(', ')}.`;

export const metadata: Metadata = {
  title: 'Company',
  description,
  alternates: { canonical: '/company/' },
  openGraph: {
    ...openGraphDefaults,
    type: 'website',
    url: '/company/',
    title: `Company — ${site.name}`,
    description,
  },
};

export default function CompanyPage() {
  return (
    <>
      <JsonLd
        data={graph([
          companyPageLd(description),
          pageBreadcrumbLd('Company', '/company/'),
        ])}
      />
      <PageHead
        kicker="Company · the founders"
        title="The people behind the agency."
      >
        <PageLede>
          The AI Company of Texas is an applied-AI consultancy organized as a
          Texas limited liability company. We are engineers — the kind who would
          rather show you a working system than a slide about one.
        </PageLede>
      </PageHead>

      <Shell className="pb-[clamp(64px,9vw,136px)]">
        <ul className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {founders.map((f) => (
            <li key={f.id} id={f.id} className="scroll-mt-28">
              {/* grayscale ties the mixed source photos to the monochrome palette */}
              <div className="relative aspect-square overflow-hidden rounded-2xl bg-muted">
                <Image
                  src={f.image}
                  alt={`Headshot of ${f.name}`}
                  fill
                  sizes="(width >= 48rem) 33vw, 100vw"
                  className="object-cover grayscale"
                />
              </div>
              <h2 className="mt-5 font-sans text-h3">{f.name}</h2>
              <p className="mt-1.5 text-p-sm text-muted-foreground">{f.role}</p>
              <a
                href={f.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${f.name} on LinkedIn`}
                className="mt-1 -ml-2 inline-flex p-2 text-ink transition-opacity duration-150 hover:opacity-60"
              >
                <LinkedinIcon className="size-[18px]" />
              </a>
            </li>
          ))}
        </ul>
      </Shell>

      <Band title="Find your level.">
        Write to us with a paragraph about how work actually gets done at your
        company today — what tools people reach for, where the hours go, what
        everyone quietly complains about. We’ll reply with where we’d place you
        on the ladder and what one rung up would look like. That reply costs
        nothing.
      </Band>
    </>
  );
}
