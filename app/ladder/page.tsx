import { ArrowDownRight } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { JsonLd } from '@/components/json-ld';
import { Closing } from '@/components/sections/closing';
import { FeatureCard, LabeledRow } from '@/components/sections/labeled-row';
import { PageActions, PageHead } from '@/components/sections/page-head';
import { Statement } from '@/components/sections/statement';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  solutionsFor,
  type Level,
  levels,
  serviceFor,
  services,
} from '@/lib/content';
import {
  articleLd,
  graph,
  ladderLd,
  openGraphDefaults,
  pageBreadcrumbLd,
  pageTitle,
  serviceCatalogLd,
} from '@/lib/seo';
import { site } from '@/lib/site';

const description =
  'The six-rung AI adoption ladder, from Experimenting to Essential: what each rung looks like, what the next one takes, and how we help you climb.';

export const metadata: Metadata = {
  title: 'The Ladder',
  description,
  alternates: { canonical: '/ladder/' },
  openGraph: {
    ...openGraphDefaults,
    type: 'article',
    url: '/ladder/',
    title: pageTitle('The Ladder'),
    description:
      'Six rungs, from Experimenting to Essential, and how we help companies climb them one at a time.',
  },
};

const pill = 'h-11 text-[15px]';

/** Every rung, Rung 1 first, as links into the page: the head's side panel. */
function RungIndex() {
  return (
    <nav
      aria-label="Rungs"
      className="flex flex-col border border-border p-[clamp(20px,3vw,40px)] lg:min-h-[clamp(520px,43vw,640px)]"
    >
      <p className="mb-4 text-fine font-medium text-muted-foreground">
        Six rungs, in climbing order
      </p>
      {/* on large screens the six rows share the panel's height evenly */}
      <ol className="grid flex-1 border-t border-border lg:grid-rows-6">
        {levels.map((l) => (
          <li key={l.id} className="border-b border-border">
            <a
              href={`#${l.id}`}
              className="group flex h-full items-center gap-4 py-3.5 no-underline"
            >
              <Badge soft className="self-start lg:self-center">
                {l.code}
              </Badge>
              <span className="min-w-0">
                <span className="block text-[15px] text-ink">{l.name}</span>
                <span className="mt-0.5 block text-p-sm text-muted-foreground">
                  {l.summary}
                </span>
              </span>
              <ArrowDownRight className="ml-auto size-4 shrink-0 text-subtle transition-colors group-hover:text-ink" />
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

function Rung({ id, code, name, quote, detail, exit }: Level) {
  const service = serviceFor(id);
  return (
    <LabeledRow id={id} label={<Badge>{code}</Badge>} heading={name}>
      <p className="max-w-[34ch] font-serif text-[clamp(22px,2vw,26px)] leading-[1.3] text-subtle">
        “{quote}”
      </p>
      <p className="mt-6 max-w-[60ch] text-foreground">{detail}</p>
      {exit && (
        <>
          <h3 className="label-sm mt-8 mb-2">The next rung</h3>
          <p className="max-w-[60ch] text-foreground">{exit}</p>
        </>
      )}
      {service && (
        <FeatureCard
          className="mt-10 min-h-0"
          top={
            <>
              <Badge>{service.climb}</Badge>
              <Badge soft>How we help</Badge>
            </>
          }
          title={service.title}
          footer={
            <>
              Solutions:{' '}
              {solutionsFor(service).map((s, i) => (
                <span key={s.id}>
                  {i > 0 && ', '}
                  <Link
                    href={`/solutions/#${s.id}`}
                    className="text-ink underline decoration-subtle underline-offset-4 hover:decoration-ink"
                  >
                    {s.name}
                  </Link>
                </span>
              ))}
            </>
          }
        >
          {service.summary}
        </FeatureCard>
      )}
    </LabeledRow>
  );
}

export default function LadderPage() {
  return (
    <>
      <JsonLd
        data={graph([
          articleLd({
            path: '/ladder/',
            headline: 'The AI Adoption Ladder',
            description,
          }),
          ladderLd(levels),
          serviceCatalogLd(services),
          pageBreadcrumbLd('The Ladder', '/ladder/'),
        ])}
      />
      <PageHead
        kicker="The ladder"
        title="Where your company actually is."
        aside={<RungIndex />}
      >
        <PageActions>
          <Button
            variant="dark"
            size="pill-sm"
            nativeButton={false}
            render={<a href={`mailto:${site.email}`} />}
            className={pill}
          >
            Find your level
          </Button>
          <Button
            variant="line"
            size="pill-sm"
            nativeButton={false}
            render={<Link href="/solutions/" />}
            className={`${pill} border-border`}
          >
            See our solutions
          </Button>
        </PageActions>
      </PageHead>

      <Statement eyebrow="How companies adopt AI">
        A few people try chat, then everyone gets an account, then individuals
        build their own workflows, and eventually agents take on whole tasks.
        Each rung builds on the one below it, so we help you climb one at a
        time.
      </Statement>

      {levels.map((level) => (
        <Rung key={level.id} {...level} />
      ))}

      <Closing title="Where would we place you?" secondary={null}>
        Hop on a discovery call and walk us through how your company uses AI
        today. We’ll tell you where we’d put you on the ladder and what the next
        rung would take.
      </Closing>
    </>
  );
}
