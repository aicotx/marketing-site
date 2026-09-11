import Link from "next/link";
import { OrchestratedOps } from "@/components/figures/diagrams";
import { MiniFig } from "@/components/figures/mini-fig";
import { Shell } from "@/components/layout/shell";
import { Band } from "@/components/sections/band";
import { PageHead, PageLede } from "@/components/sections/page-head";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Approach",
  description: "How we work: one rung at a time, evidence over demos, deployed in your environment, and a firm that runs on the systems it sells.",
  path: "/approach/",
  ogDescription: "One rung at a time. Evidence over demos. Your environment, your data. We run on what we sell.",
  type: "article",
});

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-[clamp(36px,5vw,56px)] mb-4 border-t border-border pt-6 text-essay first:mt-0">{children}</h2>
  );
}

export default function ApproachPage() {
  return (
    <>
      <PageHead kicker={<>Approach · <em>how we work</em></>} title="Consulting, without the theater.">
        <PageLede>
          Most of what follows is unusual for a consultancy to put in writing. We put it in writing because every line of it costs us the wrong kind of client and earns us the right kind.
        </PageLede>
      </PageHead>

      <Shell className="section-block">
        <div className="prose-site max-w-[720px]">
          <H2>We sell one rung at a time.</H2>
          <p>
            Everything we do hangs off the <Link href="/ladder/">maturity ladder</Link>. An engagement moves your company from the level it is actually at to the level directly above — never further. A Level-1 company asking for autonomous agent swarms gets told no, and told why, with the ladder as the explanation.
          </p>
          <p>
            This is not modesty; it is mechanism. Each level is the prerequisite for the one above it. Agents deployed on unstandardized workflows become one more pile of artisanal infrastructure. A marketplace built before any workflow has proven itself distributes nothing worth distributing. Skipping rungs doesn’t accelerate the climb — it is how AI initiatives die, and the wreckage usually poisons the category internally for years. Everyone else is selling the teleporter. Declining to is the most valuable thing we do.
          </p>

          <H2>Evidence over demos.</H2>
          <p>
            A demo shows that something worked once, in front of you, on a good day. We don’t ask anyone to buy on that basis. Every build ships with an <strong>evaluation harness</strong> — a repeatable measurement of the workflow against your data and your definition of “works.” The eval is not a deliverable garnish; it is the definition of done, and it keeps proving the system after we leave. When a model improves or a workflow changes, you rerun the evals and know, rather than hope.
          </p>

          <H2>Your environment, your data.</H2>
          <p>
            Work is deployed inside your infrastructure, wired to your systems, operable by your people. Nothing about how your company runs should live on a consultant’s laptop, and no part of your operation should require our presence to function. The platform underneath — the catalog, the update pipeline — is licensed, versioned, and maintained for as long as you subscribe; everything built specifically for you runs where you can see it.
          </p>

          <H2>Fixed scope, priced on value.</H2>
          <p>
            Audits and pilots are fixed-fee with a named deliverable, because hourly billing puts the consultant’s incentive at war with the client’s: the meter rewards sprawl. We price against what the outcome is worth to you, we say the number before work begins, and scope changes are renegotiations, not surprises on an invoice.
          </p>

          <H2>We run on what we sell.</H2>
          <p>
            The firm’s own operations run at Levels 4 and 5 of our ladder. Long-running agents triage our mail, watch our infrastructure and calendars, draft our correspondence for approval, and ship our software daily — supervised by exception, measured for quality and cost, gated where consequences live. This is not a claim about the future; it is how this firm functioned yesterday and will function tomorrow morning.
          </p>
          <MiniFig
            role="figure"
            aria-label="A diagram of orchestrated agents: a policy hub fanning out to agents that cross-verify each other, with exceptions escalating to a human."
            className="mt-7 mb-9 [&_svg]:max-w-[520px]"
          >
            <OrchestratedOps />
          </MiniFig>
          <p>
            It matters for a simple reason: when we tell you what Level 4 takes — the trust gates, the observability, the boring operational discipline — we are describing our own systems, not summarizing a whitepaper. And when we demo autonomous operations, we demo our own.
          </p>

          <H2>What we won’t do.</H2>
          <p>
            We won’t sell a transformation program. We won’t put a chatbot on your website and call it strategy. We won’t deploy an agent we wouldn’t run on our own operations, and we won’t call anything done that an evaluation hasn’t proven. If the honest answer to your request is “you aren’t ready for that yet, and here is what being ready would take,” that is the answer you will get — in the first meeting, for free.
          </p>
        </div>
      </Shell>

      <Band title="Sound like your kind of firm?">
        Write to us with a paragraph about how work gets done at your company today. We’ll reply with where we’d place you on the ladder and what one rung up would look like.
      </Band>
    </>
  );
}
