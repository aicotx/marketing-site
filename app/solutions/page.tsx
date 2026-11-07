import type { Metadata } from 'next';
import Link from 'next/link';
import { JsonLd } from '@/components/json-ld';
import { Shell } from '@/components/layout/shell';
import { Closing } from '@/components/sections/closing';
import {
  PageActions,
  PageHead,
  PageLede,
} from '@/components/sections/page-head';
import { Button } from '@/components/ui/button';
import { climbUsing, getLevel, type Solution, solutions } from '@/lib/content';
import {
  graph,
  openGraphDefaults,
  pageBreadcrumbLd,
  pageTitle,
  solutionLd,
} from '@/lib/seo';
import { cn } from '@/lib/utils';

const description =
  'What The AI Company of Texas offers: strategic AI consulting and long-running agent provisioning, plus software we build and run, including Knowledge Base, Install Guard, and Costlens.';

export const metadata: Metadata = {
  title: 'Solutions',
  description,
  alternates: { canonical: '/solutions/' },
  openGraph: {
    ...openGraphDefaults,
    type: 'website',
    url: '/solutions/',
    title: pageTitle('Solutions'),
    description,
  },
};

const groups: { heading: string; items: Solution[] }[] = [
  { heading: 'Services', items: solutions.filter((s) => s.kind === 'service') },
  { heading: 'Products', items: solutions.filter((s) => s.kind === 'product') },
];

const inlineLink =
  'text-ink underline decoration-subtle underline-offset-4 hover:decoration-ink';

/** Where on the ladder a solution is put to work, as the card's closing line. */
function Fit({ id, everyClimb }: Solution) {
  if (everyClimb) {
    return (
      <>
        Put to work at every climb of{' '}
        <Link href="/ladder/" className={inlineLink}>
          the ladder
        </Link>
      </>
    );
  }
  const climb = climbUsing(id);
  if (!climb) return null;
  const rung = getLevel(climb.from);
  return (
    <>
      Put to work at {climb.climb}, climbing out of{' '}
      <Link href={`/ladder/#${rung.id}`} className={inlineLink}>
        {rung.name}
      </Link>
    </>
  );
}

/**
 * One solution as a dark card: the name where a logo would sit, the summary
 * set large toward the bottom, and where it fits on the ladder beneath it.
 */
function SolutionCard({
  solution,
  wide,
}: {
  solution: Solution;
  wide: boolean;
}) {
  return (
    <li
      id={solution.id}
      className={cn('scroll-mt-28', wide && 'sm:col-span-2')}
    >
      <article
        className={cn(
          'flex h-full flex-col bg-card p-[clamp(24px,2.4vw,32px)]',
          // a full-width card is shorter, so its wider text doesn't float in empty space
          wide
            ? 'min-h-[clamp(240px,20vw,300px)]'
            : 'min-h-[clamp(300px,28vw,400px)]',
        )}
      >
        {/* a non-breaking hyphen keeps "Long-running" from splitting at the hyphen */}
        <h3 className="font-sans text-[clamp(22px,2vw,26px)] leading-[1.15] font-medium tracking-[-0.01em] text-ink">
          {solution.name.replaceAll('-', '‑')}
        </h3>
        <p
          className={cn(
            'mt-auto pt-12 text-[clamp(17px,1.4vw,19px)] leading-[1.4] text-ink',
            wide && 'max-w-[58ch]',
          )}
        >
          {solution.summary}
        </p>
        <p className="mt-6 text-fine text-muted-foreground">
          <Fit {...solution} />
        </p>
      </article>
    </li>
  );
}

export default function SolutionsPage() {
  return (
    <>
      <JsonLd
        data={graph([
          ...solutions.map(solutionLd),
          pageBreadcrumbLd('Solutions', '/solutions/'),
        ])}
      />
      <PageHead kicker="Solutions" title="Services and software for each rung.">
        <PageLede>
          Consulting and agent work from our team, and software we build and run
          ourselves. Most are put to work at a specific rung of the ladder.
        </PageLede>
        <PageActions>
          <Button
            variant="dark"
            size="pill-sm"
            nativeButton={false}
            render={<Link href="/ladder/" />}
            className="h-11 text-[15px]"
          >
            See the ladder
          </Button>
        </PageActions>
      </PageHead>

      {/* one dark band; each group is a heading on the left and cards on the right */}
      <section className="px-2">
        <div className="surface-dark py-[clamp(64px,8vw,112px)]">
          {groups.map(({ heading, items }, g) => (
            <Shell
              key={heading}
              className={cn(
                'grid gap-x-[clamp(40px,6vw,96px)] gap-y-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.6fr)]',
                g > 0 && 'mt-[clamp(64px,8vw,112px)]',
              )}
            >
              <h2 className="self-start lg:sticky lg:top-28">{heading}</h2>
              <ul className="grid gap-4 sm:grid-cols-2">
                {items.map((s, i) => (
                  <SolutionCard
                    key={s.id}
                    solution={s}
                    wide={items.length % 2 === 1 && i === items.length - 1}
                  />
                ))}
              </ul>
            </Shell>
          ))}
        </div>
      </section>

      <Closing title="Find your level.">
        Hop on a discovery call and tell us how your company uses AI today.
        We’ll tell you where we’d place you on the ladder and what the next rung
        would take.
      </Closing>
    </>
  );
}
