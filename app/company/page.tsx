import type { Metadata } from 'next';
import Image from 'next/image';
import { JsonLd } from '@/components/json-ld';
import { LinkedinIcon } from '@/components/linkedin-icon';
import { Closing } from '@/components/sections/closing';
import { LabeledRow } from '@/components/sections/labeled-row';
import { PageHead } from '@/components/sections/page-head';
import { Statement } from '@/components/sections/statement';
import { founders } from '@/lib/content';
import {
  companyPageLd,
  graph,
  openGraphDefaults,
  pageBreadcrumbLd,
  pageTitle,
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
    title: pageTitle('Company'),
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
      <PageHead kicker="Company" title="The people behind the agency." />

      <Statement eyebrow="What we do" className="pt-0">
        The AI Company of Texas is an applied-AI agency in Austin. We are
        engineers, the kind who would rather show you a working system than a
        slide about one.
      </Statement>

      <LabeledRow heading="Founders">
        <ul className="grid gap-x-6 gap-y-12 sm:grid-cols-2">
          {founders.map((f) => (
            <li key={f.id} id={f.id} className="scroll-mt-28">
              {/* grayscale ties the mixed source photos to the monochrome palette */}
              <div className="relative aspect-square overflow-hidden bg-muted">
                <Image
                  src={f.image}
                  alt={`Headshot of ${f.name}`}
                  fill
                  sizes="(width >= 64rem) 30vw, (width >= 40rem) 45vw, 100vw"
                  className="object-cover grayscale"
                />
              </div>
              <p className="mt-5 text-fine text-muted-foreground">{f.role}</p>
              <div className="mt-1.5 flex items-center gap-3">
                <h3 className="text-h3-sm text-ink">{f.name}</h3>
                <a
                  href={f.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${f.name} on LinkedIn`}
                  className="-m-2 inline-flex p-2 text-ink transition-opacity duration-150 hover:opacity-60"
                >
                  <LinkedinIcon className="size-4" />
                </a>
              </div>
            </li>
          ))}
        </ul>
      </LabeledRow>

      <Closing title="Find your level.">
        Hop on a discovery call and tell us how your company uses AI today.
        We’ll tell you where we’d place you on the ladder and what the next rung
        would take.
      </Closing>
    </>
  );
}
