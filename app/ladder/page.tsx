import type { Metadata } from 'next';
import Link from 'next/link';
import { FigureCard } from '@/components/figures/figure-card';
import { Heatmap } from '@/components/figures/heatmap';
import { LadderRail } from '@/components/ladder-rail';
import { JsonLd } from '@/components/json-ld';
import { Shell } from '@/components/layout/shell';
import { Band } from '@/components/sections/band';
import { PageHead, PageLede } from '@/components/sections/page-head';
import { Badge } from '@/components/ui/badge';
import { getLevel, levels } from '@/lib/content';
import {
  articleLd,
  graph,
  ladderLd,
  openGraphDefaults,
  pageBreadcrumbLd,
} from '@/lib/seo';

const description =
  'The six-level AI maturity ladder: from Shadow AI to orchestrated, agent-first operations. Where companies actually are, what breaks at each level, and the one move that gets you up a rung.';

export const metadata: Metadata = {
  title: 'The Ladder',
  description,
  alternates: { canonical: '/ladder/' },
  openGraph: {
    ...openGraphDefaults,
    type: 'article',
    url: '/ladder/',
    title: 'The AI Maturity Ladder',
    description:
      'Six levels, from Shadow AI to orchestrated operations. The methodology behind every engagement we take.',
  },
};

/** Code, title and epigraph for one rung, from the shared ladder data. */
function levelProps(id: string) {
  const level = getLevel(id);
  return {
    id: level.id,
    code: level.code,
    title: level.name,
    epigraph: `“${level.quote}”`,
  };
}

function Level({
  id,
  code,
  title,
  epigraph,
  children,
}: {
  id?: string;
  code: string;
  title: string;
  epigraph?: string;
  children: React.ReactNode;
}) {
  return (
    <article
      id={id}
      className="prose-entry scroll-mt-28 max-lg:scroll-mt-36 border-t border-border py-[clamp(48px,6vw,88px)] first:border-t-0 first:pt-0"
    >
      <Badge className="mb-5">{code}</Badge>
      <h2>{title}</h2>
      {epigraph && (
        <p className="mt-3 mb-8! max-w-[40ch]! font-serif text-subtle!">
          {epigraph}
        </p>
      )}
      {children}
    </article>
  );
}

function H3({ children }: { children: React.ReactNode }) {
  return <h3 className="label-sm mt-8 mb-2.5">{children}</h3>;
}

export default function LadderPage() {
  return (
    <>
      <JsonLd
        data={graph([
          articleLd({
            path: '/ladder/',
            headline: 'The AI Maturity Ladder',
            description,
          }),
          ladderLd(levels),
          pageBreadcrumbLd('The Ladder', '/ladder/'),
        ])}
      />
      <PageHead
        kicker="Methodology · the ladder"
        title="Where your company actually is."
      >
        <div className="grid items-end gap-x-[clamp(40px,5vw,88px)] lg:grid-cols-[minmax(0,1fr)_minmax(0,560px)]">
          <div>
            <PageLede>
              Every engagement we take begins and ends with this ladder. It
              converts “AI transformation” — a category — into a diagnosis and a
              prescription: here is your level, per function, and here is the
              one move that gets you up a rung. Nobody minds being told the
              company is at Level&nbsp;1 when the honest story is that nearly
              everyone is, and here is the ladder.
            </PageLede>
            <PageLede>
              One thing before you read:{' '}
              <strong>we assess per function, not per company.</strong> Real
              organizations are lumpy. Engineering at Level&nbsp;2 while
              operations sits at Level&nbsp;0 is the normal case, not the
              exception — which is why the audit deliverable is a heatmap of
              function&nbsp;×&nbsp;level, never a single number.
            </PageLede>
          </div>
          <FigureCard
            title="Maturity heatmap"
            tag="audit deliverable · illustrative"
            note="Function × level. The prescription is always the next rung, never the top."
            className="mt-[clamp(36px,5vw,64px)]"
          >
            <Heatmap />
          </FigureCard>
        </div>
      </PageHead>

      <Shell className="section-block grid grid-cols-[200px_1fr] items-start gap-[clamp(32px,5vw,88px)] max-lg:grid-cols-1">
        <LadderRail
          levels={levels.map((l) => ({
            id: l.id,
            label: `${l.code} · ${l.short}`,
          }))}
        />
        <div className="max-w-[720px]">
          <Level {...levelProps('l0')}>
            <H3>You are here if</H3>
            <p>
              There is no policy and there are no organizational accounts.
              Employees paste company data into personal consumer chatbots.
              Management genuinely doesn’t know who uses what — and somewhere in
              the company a spreadsheet was half-written by a language model
              nobody can name.
            </p>
            <H3>What’s actually happening</H3>
            <p>
              Adoption without governance. The company is already paying the
              risk cost of AI — data leakage, unvetted output landing in
              production documents — while capturing almost none of the benefit.
              Banning it doesn’t work; usage just gets quieter.
            </p>
            <H3>What breaks if you stay</H3>
            <p>
              Eventually, a client-data paste into a consumer tool with training
              enabled by default. Before that: wildly uneven productivity that
              management can neither see nor explain.
            </p>
            <H3>The exit</H3>
            <p>
              Sanctioned tools, a usage policy people can actually follow, and
              visibility into what’s really being used.
            </p>
          </Level>
          <Level {...levelProps('l1')}>
            <H3>You are here if</H3>
            <p>
              Organizational licenses exist, single sign-on works, there’s a
              one-page policy and maybe an #ai-help channel. Usage is chat:
              questions, drafting, summarizing. The value is real — but it is
              individual, unmeasured, and capped at what each person thinks to
              ask.
            </p>
            <H3>What’s actually happening</H3>
            <p>
              The license is being treated as the finish line when it is the
              starting line. Adoption follows personality, not role — the
              curious fifteen percent capture eighty percent of the value while
              everyone else’s seat quietly idles.
            </p>
            <H3>What breaks if you stay</H3>
            <p>
              Flat renewal conversations:{' '}
              <em>what did we get for two hundred seats?</em> The gap between
              power users and everyone else keeps widening, and no workflow is
              actually different than it was before the rollout.
            </p>
            <H3>The exit</H3>
            <p>
              AI wired into specific, named workflows, with company data
              connected.
            </p>
          </Level>
          <Level {...levelProps('l2')}>
            <H3>You are here if</H3>
            <p>
              Individuals have AI meaningfully embedded in their own work —
              developers with agentic coding tools, operators with projects and
              knowledge bases, connectors into internal data, prompt collections
              passed around in chat. Real productivity gains, all of them
              personal, none of them standardized.
            </p>
            <H3>What’s actually happening</H3>
            <p>
              The organization has proven the value exists — but everything is
              artisanal. When the power user goes on vacation, their workflow
              goes with them. Every team reinvents the same integration badly.
              Nothing is versioned, reviewed, or distributable.
            </p>
            <H3>What breaks if you stay</H3>
            <p>
              Key-person risk. No way to onboard anyone into “how we use AI
              here.” Security reviews the same homegrown integration five
              separate times. The wins never compound.
            </p>
            <H3>The exit</H3>
            <p>
              The good stuff becomes shared, versioned, centrally distributed
              capability.
            </p>
          </Level>
          <Level {...levelProps('l3')}>
            <H3>You are here if</H3>
            <p>
              The organization’s AI workflows are packaged, versioned, and
              installed from a managed catalog. Every relevant employee gets the
              same vetted tooling on day one; updates propagate automatically;
              IT knows exactly what runs where. “How we use AI” is a durable
              asset of the company instead of tribal knowledge.
            </p>
            <H3>What’s actually happening</H3>
            <p>
              Capability now compounds. A workflow improved once improves for
              everyone on the next update. New-hire onboarding includes the AI
              toolkit the way it includes email. And governance is finally real:
              an approved catalog, permission scoping, provenance for everything
              that runs on employee machines.
            </p>
            <H3>What breaks if you stay</H3>
            <p>
              Nothing — this level is stable, and for many functions it is the
              right place to stand. Its only limit is that humans still drive
              every task. The tooling assists; it doesn’t <em>act</em>.
            </p>
            <H3>The exit</H3>
            <p>
              Delegating whole tasks rather than keystrokes: agents that run
              without a human at the keyboard.
            </p>
          </Level>
          <Level {...levelProps('l4')}>
            <H3>You are here if</H3>
            <p>
              Long-running agents do real work unattended — triaging the shared
              inbox, watching queues and dashboards, drafting responses for
              approval, running scheduled jobs — with human-in-the-loop gates on
              anything consequential, and with observability (logs, cost
              tracking, escalation paths) treated as seriously as for any other
              production system.
            </p>
            <H3>What’s actually happening</H3>
            <p>
              The unit of delegation has changed from “task step” to “task.”
              Trust is earned incrementally: agents start in draft-only mode and
              graduate to act-with-approval, then act-and-report, one workflow
              at a time. Headcount conversations change shape.
            </p>
            <H3>What breaks if you stay</H3>
            <p>
              One agent per silo, each hand-built. Agents can’t hand off to each
              other, and the cost of supervising them grows linearly with their
              number.
            </p>
            <H3>The exit</H3>
            <p>
              Agents composed into supervised systems that own processes end to
              end.
            </p>
          </Level>
          <Level {...levelProps('l5')}>
            <H3>You are here if</H3>
            <p>
              Entire processes run agent-first: fleets of agents fan out over
              work, verify each other adversarially, and escalate by exception,
              while humans set policy, review output, and handle the edges.
              There are evaluations and budgets — agent work is measured for
              quality and cost the way a team’s would be — and orchestration
              (routing, retries, verification, synthesis) is infrastructure, not
              improvisation.
            </p>
            <H3>What’s actually happening</H3>
            <p>
              Almost nobody is here. This is the level a board asks about after
              reading a breathless article — and the honest answer is that
              Levels&nbsp;1 through&nbsp;4 are the prerequisite, and skipping
              them is how AI initiatives die. We say that out loud, because it
              builds more trust than pretending anyone can teleport.
            </p>
            <H3>The exit</H3>
            <p>
              There isn’t one. There is only widening: more functions run this
              way, and the humans spend their time on policy, judgment, and the
              work that was always too important to delegate.
            </p>
          </Level>
          <Level code="∎" title="How the ladder becomes a plan">
            <p>
              The <Link href="/services/#audit">Readiness Audit</Link> places
              every function of your company on this ladder and names the single
              highest-leverage climb. Each level up is a distinct, fixed piece
              of work from our <Link href="/services/">catalog</Link> — and we
              only ever propose the next one. A company that finishes a rung
              has, by construction, done the qualifying work for the rung above
              it. That is the whole system: no transformation programs, no
              teleporters, just the next level, priced.
            </p>
          </Level>
        </div>
      </Shell>

      <Band title="Where would we place you?">
        Write us a paragraph about how work gets done at your company today.
        We’ll reply with where we’d put you on the ladder, function by function,
        and what one rung up would look like.
      </Band>
    </>
  );
}
