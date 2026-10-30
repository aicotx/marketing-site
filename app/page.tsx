import { ArrowRight, ArrowUpRight } from 'lucide-react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  AgentGates,
  AuditGrid,
  MarketplaceTree,
  PilotBars,
} from '@/components/figures/diagrams';
import { MiniFig } from '@/components/figures/mini-fig';
import { Shell } from '@/components/layout/shell';
import { Band } from '@/components/sections/band';
import { Columns } from '@/components/sections/columns';
import { Section, SectionHead } from '@/components/sections/section';
import { Badge } from '@/components/ui/badge';
import { type Level, levels, principles, products } from '@/lib/content';
import { site } from '@/lib/site';
import flag from '@/public/assets/img/flag.jpg';

export const metadata: Metadata = {
  alternates: { canonical: '/' },
};

const engagements = [
  {
    href: '/services/#audit',
    climb: 'any → next',
    flag: 'the wedge',
    title: 'AI Readiness Audit',
    shape: 'Fixed fee · one to two weeks',
    figure: <AuditGrid />,
    body: 'A function-by-function maturity heatmap of your company, the highest-ROI candidate workflows, honest build-versus-buy calls, and a roadmap priced as specific engagements — not a strategy deck.',
  },
  {
    href: '/services/#pilot',
    climb: '1 → 2',
    title: 'Pilot Build',
    shape: 'Fixed fee · four to eight weeks',
    figure: <PilotBars />,
    body: 'One named workflow, end to end: connectors into your data, the working tooling, and an evaluation harness that proves it — deployed in your environment, not ours.',
  },
  {
    href: '/services/#marketplace',
    climb: '2 → 3',
    flag: 'flagship',
    title: 'Private Plugin Marketplace',
    shape: 'Setup + subscription',
    figure: <MarketplaceTree />,
    body: 'Your proven workflows, packaged as versioned plugins in a private managed catalog. Every relevant employee gets the same vetted tooling on day one; updates propagate automatically; IT knows exactly what runs where. “How we use AI here” stops being tribal knowledge and becomes a durable asset of the company.',
  },
  {
    href: '/services/#agents',
    climb: '3 → 4',
    title: 'Agent Deployment',
    shape: 'Scoped builds · fold into the subscription',
    figure: <AgentGates />,
    body: 'Long-running agents on the workflows your marketplace already standardized — with trust gates (draft, then approve, then act), observability, and cost tracking treated as seriously as any production system.',
  },
];

/** Round ink arrow used as the affordance on clickable cards. */
function ArrowDisc() {
  return (
    <span
      aria-hidden="true"
      className="grid size-10 flex-none place-items-center rounded-full bg-ink text-background transition-transform duration-200 group-hover:translate-x-0.5"
    >
      <ArrowRight className="size-[18px]" />
    </span>
  );
}

function LevelCell({ id, code, name, summary }: Level) {
  return (
    <Link
      href={`/ladder/#${id}`}
      className="group flex flex-col bg-background p-[clamp(24px,2.6vw,36px)] no-underline transition-colors duration-200 hover:bg-muted"
    >
      <div className="flex items-start justify-between">
        <Badge>{code}</Badge>
        <ArrowUpRight className="size-5 text-ink opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
      </div>
      <h3 className="mt-8 max-md:mt-5">{name}</h3>
      <p className="mt-2.5 text-p-sm text-foreground">{summary}</p>
    </Link>
  );
}

function EngagementCard({
  href,
  climb,
  flag,
  title,
  shape,
  figure,
  body,
}: (typeof engagements)[number]) {
  return (
    <Link
      href={href}
      className="group flex flex-col overflow-hidden rounded-2xl bg-muted text-center no-underline"
    >
      <div className="flex flex-col items-center px-4 pt-8 pb-4 md:px-6 xl:px-14">
        <div className="mb-4 flex flex-wrap justify-center gap-2">
          <Badge>{climb}</Badge>
          {flag && <Badge soft>{flag}</Badge>}
        </div>
        <h3 className="mb-4">{title}</h3>
        <p className="max-w-[52ch] text-p-sm text-foreground">{body}</p>
        <p className="mt-4 text-fine font-medium text-muted-foreground">
          {shape}
        </p>
        <div className="mt-4">
          <ArrowDisc />
        </div>
      </div>
      <div className="mt-auto px-[clamp(28px,6vw,88px)] pt-[clamp(32px,4vw,48px)]">
        <div className="rounded-t-xl bg-card px-8 pt-9 pb-7 shadow-[0_1px_2px_rgba(0,0,0,.04)] transition-transform duration-300 group-hover:-translate-y-1.5">
          <MiniFig className="[&_svg]:mx-auto [&_svg]:max-w-[240px]">
            {figure}
          </MiniFig>
        </div>
      </div>
    </Link>
  );
}

export default function HomePage() {
  return (
    <>
      {/* image + headline fill the first screen under the 72px header; the image takes what the headline leaves */}
      <section className="flex h-[calc(100svh-72px)] min-h-[460px] flex-col gap-[clamp(24px,3.5vw,48px)] pt-[clamp(16px,2.5vw,32px)] pb-[clamp(32px,4vw,56px)]">
        <Shell className="flex min-h-[160px] w-full flex-1">
          <div className="relative w-full overflow-hidden rounded-2xl bg-muted">
            <Image
              src={flag}
              alt="The Texas flag, waving"
              priority
              fill
              sizes="(width >= 1440px) 1280px, 92vw"
              className="object-cover object-[28%_50%] grayscale"
            />
          </div>
        </Shell>
        <Shell className="w-full">
          <h1>{site.tagline}</h1>
        </Shell>
      </section>

      <Shell className="reveal py-[clamp(64px,9vw,136px)]">
        <Columns className="text-muted-foreground [&_strong]:font-medium [&_strong]:text-ink">
          <p>
            A company that has barely sanctioned its first chatbot buys a story
            about autonomous agent swarms, tries to skip every step in between,
            and quietly writes the whole category off eighteen months later. The
            failure is rarely the technology. <strong>It is the jump.</strong>
          </p>
          <p>
            There is a ladder from <em>“a few people quietly use ChatGPT”</em>{' '}
            to{' '}
            <em>“processes that run themselves, supervised by exception.”</em>{' '}
            We place your company on it, function by function — and we sell
            exactly <strong>one rung of climb at a time</strong>: scoped,
            priced, and proven working in your environment before anyone talks
            about the next.
          </p>
        </Columns>
      </Shell>

      <Section dark>
        <SectionHead
          label="The Ladder"
          title="Six levels. Every company is on one of them."
          link={{ href: '/ladder/', label: 'Read the full methodology' }}
        >
          <p>
            “AI transformation” is a category, not a plan. A maturity ladder
            converts it into a diagnosis and a prescription: here is your level,
            per function, and here is the one move that gets you up a rung. Real
            organizations are lumpy — engineering at Level&nbsp;2 while
            operations sits at Level&nbsp;0 is normal, which is why we assess
            per function, never per company.
          </p>
          <p>
            The audit deliverable is a heatmap like the one above: every
            function, its level, and the single highest-leverage climb — priced
            as a specific engagement, not a vision statement.
          </p>
        </SectionHead>
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {levels.map((l) => (
            <LevelCell key={l.id} {...l} />
          ))}
        </div>
      </Section>

      <Section>
        <SectionHead
          label="Engagements"
          title="One offer per rung of climb."
          link={{ href: '/services/', label: 'All services' }}
        >
          <p>
            Every engagement ends with your company measurably one level up —
            and with the evidence in hand. The audit places you; each climb is a
            fixed, named piece of work; and nothing is proposed until the rung
            below it is real.
          </p>
        </SectionHead>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {engagements.map((e) => (
            <EngagementCard key={e.href} {...e} />
          ))}
        </div>
      </Section>

      <Section>
        <SectionHead
          label="Fractional"
          title="A senior AI engineer on your team — a few days a month."
          link={{ href: '/services/#fractional', label: 'The engagement' }}
        />
        <Columns>
          <div className="prose-site max-w-[68ch]">
            <p>
              Most companies on the lower rungs of the ladder don’t have forty
              hours a week of AI work. They have a steady stream of it — a
              workflow to build, a vendor pitch to judge, an agent misbehaving,
              a team that keeps asking the same good questions — and the
              engineers capable of handling all of that are nearly impossible to
              hire, because everyone else is trying to hire them too.
            </p>
            <p>
              A <strong>fractional AI engineer</strong> is the answer to both
              problems: a fixed number of days each month, embedded with your
              team, in your environment, under your priorities. The scope rides
              the same roadmap the audit produced — nothing freelance about it —
              and it is how the ladder keeps moving <em>between</em> engagements
              rather than only during them.
            </p>
          </div>
          <div className="rounded-2xl bg-muted p-[clamp(24px,3vw,40px)]">
            <p className="label-sm mb-4">The days go to</p>
            <ul className="ruled-list [&>li:first-child]:border-t-0 [&>li:last-child]:border-b-0">
              <li>Building workflows from your roadmap, end to end</li>
              <li>
                Stewarding your plugin catalog — reviews, updates, provenance
              </li>
              <li>Keeping evaluations green as models and workflows change</li>
              <li>
                Supervising deployed agents and tightening their trust gates
              </li>
              <li>
                Office hours: your team’s questions, answered by someone who
                ships
              </li>
            </ul>
            <p className="mt-5 border-t border-border pt-5 text-fine font-medium text-muted-foreground">
              Fixed days per month · three-month minimum · pairs with any level
            </p>
          </div>
        </Columns>
      </Section>

      <Section id="products">
        <SectionHead
          label="Products"
          title="Instruments of the practice."
          link={{ href: '/products/', label: 'All products' }}
        >
          <p>
            Alongside the client work, the firm builds and operates its own
            software — the agent infrastructure, evaluation harnesses, and
            distribution tooling the engagements above run on. Some of it is
            becoming product: pieces sturdy enough to stand on their own,
            outside any single engagement. We publish each one when it is ready
            to be judged, not before.
          </p>
        </SectionHead>
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/products/#${product.id}`}
            className="group grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-x-[clamp(20px,3vw,48px)] gap-y-3 rounded-2xl bg-muted p-[clamp(24px,3vw,40px)] no-underline transition-colors duration-200 hover:bg-accent max-md:grid-cols-[minmax(0,1fr)_auto]"
          >
            <Badge className="max-md:col-span-2 max-md:justify-self-start">
              {product.code}
            </Badge>
            <div>
              <h3>{product.name}</h3>
              <p className="mt-1.5 text-p-sm text-foreground">
                {product.summary}
              </p>
            </div>
            <ArrowDisc />
          </Link>
        ))}
      </Section>

      <Section>
        <SectionHead
          label="How we work"
          link={{ href: '/approach/', label: 'Our approach' }}
        />
        <div className="grid grid-cols-1 gap-x-6 gap-y-8 md:grid-cols-2 md:gap-y-12 lg:grid-cols-4">
          {principles.map((p) => (
            <div key={p.title} className="border-t border-ink pt-6">
              <h3 className="mb-3 text-h3-sm">{p.title}</h3>
              <p className="text-p-sm text-foreground">{p.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHead label="The firm" />
        <Columns layout="seal">
          <div className="prose-site max-w-[68ch]">
            <p>
              The AI Company of Texas is an applied-AI consultancy organized as
              a Texas limited liability company. We are engineers — the kind who
              would rather show you a working system than a slide about one. The
              firm operates the same agentic infrastructure it deploys for
              clients, at the top of its own ladder, which is both our proof of
              capability and our standing rebuke to vaporware.
            </p>
            <p>
              We keep the client roster short on purpose. Fewer engagements,
              taken seriously, priced on the value of the outcome rather than
              the hours consumed. If that sounds like how you prefer to buy, the
              fastest way to find out whether we can help is a plain email:{' '}
              <a href={`mailto:${site.email}`}>{site.email}</a>.
            </p>
          </div>
        </Columns>
      </Section>

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
