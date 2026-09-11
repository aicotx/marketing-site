import Link from "next/link";
import { FigureCard } from "@/components/figures/figure-card";
import { Heatmap } from "@/components/figures/heatmap";
import { Shell } from "@/components/layout/shell";
import { Band } from "@/components/sections/band";
import { PageHead, PageLede } from "@/components/sections/page-head";
import { pageMetadata, site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "The Ladder",
  description: "The six-level AI maturity ladder: from Shadow AI to orchestrated, agent-first operations. Where companies actually are, what breaks at each level, and the one move that gets you up a rung.",
  path: "/ladder/",
  ogTitle: "The AI Maturity Ladder",
  ogDescription: "Six levels, from Shadow AI to orchestrated operations. The methodology behind every engagement we take.",
  type: "article",
});

const levels = [
  { id: "l0", code: "L0", name: "Shadow AI", short: "Shadow AI" },
  { id: "l1", code: "L1", name: "Sanctioned chat", short: "Sanctioned chat" },
  { id: "l2", code: "L2", name: "Assisted workflows", short: "Assisted workflows" },
  { id: "l3", code: "L3", name: "Standardized capability", short: "Standardized" },
  { id: "l4", code: "L4", name: "Autonomous operations", short: "Autonomous ops" },
  { id: "l5", code: "L5", name: "Orchestrated", short: "Orchestrated" },
];

function Level({ id, code, title, epigraph, children }: { id?: string; code: string; title: string; epigraph?: string; children: React.ReactNode }) {
  return (
    <article
      id={id}
      className="scroll-mt-24 border-t border-border py-[clamp(36px,5vw,64px)] first:border-t-0 first:pt-0 [&_a]:text-primary [&_a]:underline-offset-[3px] [&_p]:mb-[1.1em] [&_p]:max-w-[66ch] [&_p]:text-foreground [&_p:last-child]:mb-0"
    >
      <div className="mb-2 flex items-baseline gap-4">
        <span className="font-mono text-base tracking-[-0.02em] text-primary">{code}</span>
        <h2 className="text-subtitle">{title}</h2>
      </div>
      {epigraph && <p className="mt-2.5 mb-[26px]! max-w-[58ch]! font-mono text-[clamp(14px,1.4vw,16px)] tracking-[-0.02em] text-muted-foreground">{epigraph}</p>}
      {children}
    </article>
  );
}

function H3({ children }: { children: React.ReactNode }) {
  return <h3 className="mt-[26px] mb-2.5 font-mono text-[12.5px] font-normal tracking-[0.04em] text-muted-foreground uppercase">{children}</h3>;
}

export default function LadderPage() {
  return (
    <>
      <PageHead kicker={<>Methodology · <em>the ladder</em></>} title="Where your company actually is.">
        <PageLede>
          Every engagement we take begins and ends with this ladder. It converts “AI transformation” — a category — into a diagnosis and a prescription: here is your level, per function, and here is the one move that gets you up a rung. Nobody minds being told the company is at Level&nbsp;1 when the honest story is that nearly everyone is, and here is the ladder.
        </PageLede>
        <PageLede>
          One thing before you read: <strong>we assess per function, not per company.</strong> Real organizations are lumpy. Engineering at Level&nbsp;2 while operations sits at Level&nbsp;0 is the normal case, not the exception — which is why the audit deliverable is a heatmap of function&nbsp;×&nbsp;level, never a single number.
        </PageLede>
        <FigureCard
          title="Maturity heatmap"
          tag="audit deliverable · illustrative"
          note="Function × level. The prescription is always the next rung, never the top."
          className="mt-[clamp(28px,4vw,44px)] max-w-[560px]"
        >
          <Heatmap />
        </FigureCard>
      </PageHead>

      <Shell className="section-block grid grid-cols-[200px_1fr] items-start gap-[clamp(32px,5vw,88px)] max-[900px]:grid-cols-1">
        <nav aria-label="Levels" className="sticky top-[104px] flex flex-col border-l border-border">
          <span className="pb-3 pl-[18px] font-mono text-xs tracking-[-0.02em] text-muted-foreground uppercase">Levels</span>
          {levels.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className="-ml-[1.5px] border-l-2 border-transparent py-[9px] pl-[18px] font-mono text-[13px] tracking-[-0.02em] text-muted-foreground no-underline transition-colors duration-150 hover:text-ink"
            >
              {l.code} · {l.short}
            </a>
          ))}
        </nav>
        <div>
          <Level id="l0" code="L0" title="Shadow AI" epigraph="“Some people use chatgpt.com. Nobody sanctioned it.”">
            <H3>You are here if</H3>
            <p>There is no policy and there are no organizational accounts. Employees paste company data into personal consumer chatbots. Management genuinely doesn’t know who uses what — and somewhere in the company a spreadsheet was half-written by a language model nobody can name.</p>
            <H3>What’s actually happening</H3>
            <p>Adoption without governance. The company is already paying the risk cost of AI — data leakage, unvetted output landing in production documents — while capturing almost none of the benefit. Banning it doesn’t work; usage just gets quieter.</p>
            <H3>What breaks if you stay</H3>
            <p>Eventually, a client-data paste into a consumer tool with training enabled by default. Before that: wildly uneven productivity that management can neither see nor explain.</p>
            <H3>The exit</H3>
            <p>Sanctioned tools, a usage policy people can actually follow, and visibility into what’s really being used.</p>
          </Level>
          <Level id="l1" code="L1" title="Sanctioned chat" epigraph="“We gave everyone a license.”">
            <H3>You are here if</H3>
            <p>Organizational licenses exist, single sign-on works, there’s a one-page policy and maybe an #ai-help channel. Usage is chat: questions, drafting, summarizing. The value is real — but it is individual, unmeasured, and capped at what each person thinks to ask.</p>
            <H3>What’s actually happening</H3>
            <p>The license is being treated as the finish line when it is the starting line. Adoption follows personality, not role — the curious fifteen percent capture eighty percent of the value while everyone else’s seat quietly idles.</p>
            <H3>What breaks if you stay</H3>
            <p>Flat renewal conversations: <em>what did we get for two hundred seats?</em> The gap between power users and everyone else keeps widening, and no workflow is actually different than it was before the rollout.</p>
            <H3>The exit</H3>
            <p>AI wired into specific, named workflows, with company data connected.</p>
          </Level>
          <Level id="l2" code="L2" title="Assisted workflows" epigraph="“Our best people have built themselves something remarkable.”">
            <H3>You are here if</H3>
            <p>Individuals have AI meaningfully embedded in their own work — developers with agentic coding tools, operators with projects and knowledge bases, connectors into internal data, prompt collections passed around in chat. Real productivity gains, all of them personal, none of them standardized.</p>
            <H3>What’s actually happening</H3>
            <p>The organization has proven the value exists — but everything is artisanal. When the power user goes on vacation, their workflow goes with them. Every team reinvents the same integration badly. Nothing is versioned, reviewed, or distributable.</p>
            <H3>What breaks if you stay</H3>
            <p>Key-person risk. No way to onboard anyone into “how we use AI here.” Security reviews the same homegrown integration five separate times. The wins never compound.</p>
            <H3>The exit</H3>
            <p>The good stuff becomes shared, versioned, centrally distributed capability.</p>
          </Level>
          <Level id="l3" code="L3" title="Standardized capability" epigraph="“How we use AI is an asset of the company now.”">
            <H3>You are here if</H3>
            <p>The organization’s AI workflows are packaged, versioned, and installed from a managed catalog. Every relevant employee gets the same vetted tooling on day one; updates propagate automatically; IT knows exactly what runs where. “How we use AI” is a durable asset of the company instead of tribal knowledge.</p>
            <H3>What’s actually happening</H3>
            <p>Capability now compounds. A workflow improved once improves for everyone on the next update. New-hire onboarding includes the AI toolkit the way it includes email. And governance is finally real: an approved catalog, permission scoping, provenance for everything that runs on employee machines.</p>
            <H3>What breaks if you stay</H3>
            <p>Nothing — this level is stable, and for many functions it is the right place to stand. Its only limit is that humans still drive every task. The tooling assists; it doesn’t <em>act</em>.</p>
            <H3>The exit</H3>
            <p>Delegating whole tasks rather than keystrokes: agents that run without a human at the keyboard.</p>
          </Level>
          <Level id="l4" code="L4" title="Autonomous operations" epigraph="“The question became which exceptions need humans.”">
            <H3>You are here if</H3>
            <p>Long-running agents do real work unattended — triaging the shared inbox, watching queues and dashboards, drafting responses for approval, running scheduled jobs — with human-in-the-loop gates on anything consequential, and with observability (logs, cost tracking, escalation paths) treated as seriously as for any other production system.</p>
            <H3>What’s actually happening</H3>
            <p>The unit of delegation has changed from “task step” to “task.” Trust is earned incrementally: agents start in draft-only mode and graduate to act-with-approval, then act-and-report, one workflow at a time. Headcount conversations change shape.</p>
            <H3>What breaks if you stay</H3>
            <p>One agent per silo, each hand-built. Agents can’t hand off to each other, and the cost of supervising them grows linearly with their number.</p>
            <H3>The exit</H3>
            <p>Agents composed into supervised systems that own processes end to end.</p>
          </Level>
          <Level id="l5" code="L5" title="Orchestrated" epigraph="“Humans set policy and handle the edge cases.”">
            <H3>You are here if</H3>
            <p>Entire processes run agent-first: fleets of agents fan out over work, verify each other adversarially, and escalate by exception, while humans set policy, review output, and handle the edges. There are evaluations and budgets — agent work is measured for quality and cost the way a team’s would be — and orchestration (routing, retries, verification, synthesis) is infrastructure, not improvisation.</p>
            <H3>What’s actually happening</H3>
            <p>Almost nobody is here. This is the level a board asks about after reading a breathless article — and the honest answer is that Levels&nbsp;1 through&nbsp;4 are the prerequisite, and skipping them is how AI initiatives die. We say that out loud, because it builds more trust than pretending anyone can teleport.</p>
            <H3>The exit</H3>
            <p>There isn’t one. There is only widening: more functions run this way, and the humans spend their time on policy, judgment, and the work that was always too important to delegate.</p>
          </Level>
          <Level code="∎" title="How the ladder becomes a plan">
            <p>
              The <Link href="/services/#audit">Readiness Audit</Link> places every function of your company on this ladder and names the single highest-leverage climb. Each level up is a distinct, fixed piece of work from our <Link href="/services/">catalog</Link> — and we only ever propose the next one. A company that finishes a rung has, by construction, done the qualifying work for the rung above it. That is the whole system: no transformation programs, no teleporters, just the next level, priced.
            </p>
          </Level>
        </div>
      </Shell>

      <Band kicker={<>Begin · <em>no cost</em></>} title="Where would we place you?" cta={{ href: `mailto:${site.email}`, label: site.email }}>
        Write us a paragraph about how work gets done at your company today. We’ll reply with where we’d put you on the ladder, function by function, and what one rung up would look like.
      </Band>
    </>
  );
}
