import { ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { BackgroundVideo } from '@/components/background-video';
import { SplitFeature } from '@/components/home/split-feature';
import {
  CostlensVisual,
  InstallGuardVisual,
  KnowledgeBaseVisual,
  LadderClimb,
} from '@/components/visuals';
import { Shell } from '@/components/layout/shell';
import { Closing } from '@/components/sections/closing';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { climbLabel, levels, products, services } from '@/lib/content';
import { site } from '@/lib/site';
import { cn } from '@/lib/utils';
import flag from '@/public/assets/img/flag.jpg';

// The title is the root layout's default: the root page shares the layout's
// segment, so the layout's title template doesn't apply to it.
export const metadata: Metadata = {
  alternates: { canonical: '/' },
};

const productVisuals: Record<string, React.ReactNode> = {
  'knowledge-base': <KnowledgeBaseVisual />,
  'install-guard': <InstallGuardVisual />,
  costlens: <CostlensVisual />,
};

const pill = 'h-11 text-[15px]';

export default function HomePage() {
  return (
    <>
      {/* Hero: the video fills the first screen; headline and pills sit centered on it */}
      <section className="px-2">
        <div className="relative flex h-[calc(100svh-80px)] min-h-[560px] flex-col overflow-hidden bg-[#1c1c1c] text-center">
          <BackgroundVideo
            src="/assets/flag.mp4"
            poster={flag.src}
            className="object-[28%_50%] grayscale"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,.45),rgba(0,0,0,.6)_55%,rgba(0,0,0,.78))]"
          />
          <div className="relative flex flex-1 flex-col items-center justify-center px-gutter py-[clamp(32px,5vw,64px)]">
            <h1 className="max-w-[22ch] text-white">{site.tagline}</h1>
            <div className="mt-[clamp(28px,3.5vw,44px)] flex flex-wrap justify-center gap-3">
              <Button
                variant="photo"
                size="pill-sm"
                nativeButton={false}
                render={<Link href="/solutions/" />}
                className={pill}
              >
                See our solutions
              </Button>
              <Button
                variant="photo-line"
                size="pill-sm"
                nativeButton={false}
                render={<a href={`mailto:${site.email}`} />}
                className={pill}
              >
                Contact us
              </Button>
            </div>
          </div>
        </div>
      </section>

      <SplitFeature
        eyebrow="How we help"
        lede="We find the rung your company is on and help you reach the next one."
        actions={
          <>
            <Button
              variant="dark"
              size="pill-sm"
              nativeButton={false}
              render={<Link href="/ladder/" />}
              className={pill}
            >
              See every rung
            </Button>
            <Button
              variant="line"
              size="pill-sm"
              nativeButton={false}
              render={<a href={`mailto:${site.email}`} />}
              className={cn(pill, 'border-border')}
            >
              Contact us
            </Button>
          </>
        }
        items={services.map((s) => ({
          id: s.id,
          title: s.title,
          tag: s.climb,
          body: s.summary,
          visual: <LadderClimb from={s.from} />,
        }))}
      />

      <SplitFeature
        visualSide="right"
        eyebrow="Products"
        lede="Software we build and run ourselves, and put to work as you climb."
        actions={
          <Button
            variant="dark"
            size="pill-sm"
            nativeButton={false}
            render={<Link href="/solutions/" />}
            className={pill}
          >
            See all solutions
          </Button>
        }
        items={products.map((p) => ({
          id: p.id,
          title: p.name,
          tag: climbLabel(p.id),
          body: p.summary,
          visual: productVisuals[p.id],
        }))}
      />

      {/* The six rungs: heading on the left, a card per rung on the right */}
      <section className="px-2">
        <div className="surface-dark py-[clamp(64px,8vw,112px)]">
          <Shell className="grid gap-x-[clamp(40px,6vw,96px)] gap-y-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.6fr)]">
            <div className="self-start lg:sticky lg:top-28">
              <h2 className="max-w-[12ch]">
                Six rungs. Every company is on one of them.
              </h2>
              <Link
                href="/ladder/"
                className="group mt-6 inline-flex items-center gap-1.5 text-caption text-ink no-underline"
              >
                What each rung looks like
                <ArrowRight className="size-3.5 transition-transform duration-150 group-hover:translate-x-0.5" />
              </Link>
            </div>
            <ul className="grid gap-4 sm:grid-cols-2">
              {levels.map((l) => (
                <li key={l.id}>
                  <Link
                    href={`/ladder/#${l.id}`}
                    className="flex h-full flex-col sm:min-h-[clamp(220px,22vw,300px)] bg-card p-[clamp(24px,2.4vw,32px)] no-underline transition-colors duration-200 hover:bg-accent"
                  >
                    <Badge className="self-start">{l.code}</Badge>
                    <p className="mt-auto pt-10 text-[19px] leading-[1.35] text-ink">
                      {l.summary}
                    </p>
                    <p className="mt-6 text-fine text-muted-foreground">
                      {l.name}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </Shell>
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
