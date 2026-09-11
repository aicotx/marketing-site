import Link from "next/link";
import { AgentGates, AuditGrid, MarketplaceTree, PilotBars } from "@/components/figures/diagrams";
import { FigureCard } from "@/components/figures/figure-card";
import { Heatmap } from "@/components/figures/heatmap";
import { Shell } from "@/components/layout/shell";
import { Band } from "@/components/sections/band";
import { CatalogEntry } from "@/components/sections/catalog-entry";
import { Columns } from "@/components/sections/columns";
import { Kicker } from "@/components/sections/kicker";
import { Section, SectionHead, SectionTitle } from "@/components/sections/section";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

const levels = [
  { code: "L0", name: "Shadow AI", desc: "Some people use chatgpt.com. Nobody sanctioned it." },
  { code: "L1", name: "Sanctioned chat", desc: "Everyone has a license — and the license is treated as the finish line." },
  { code: "L2", name: "Assisted workflows", desc: "Real gains, all personal. The workflow leaves when its owner does." },
  { code: "L3", name: "Standardized capability", desc: "Vetted tooling, versioned and distributed. AI becomes an asset of the company." },
  { code: "L4", name: "Autonomous operations", desc: "Agents do whole tasks unattended, gated where it counts." },
  { code: "L5", name: "Orchestrated", desc: "Fleets of agents own processes end to end. Humans govern by exception." },
];

const engagements = [
  {
    href: "/services/#audit", climb: "any → next", flag: "the wedge", title: "AI Readiness Audit", shape: "Fixed fee · one to two weeks", figure: <AuditGrid />,
    body: "A function-by-function maturity heatmap of your company, the highest-ROI candidate workflows, honest build-versus-buy calls, and a roadmap priced as specific engagements — not a strategy deck.",
  },
  {
    href: "/services/#pilot", climb: "1 → 2", title: "Pilot Build", shape: "Fixed fee · four to eight weeks", figure: <PilotBars />,
    body: "One named workflow, end to end: connectors into your data, the working tooling, and an evaluation harness that proves it — deployed in your environment, not ours.",
  },
  {
    href: "/services/#marketplace", climb: "2 → 3", flag: "flagship", title: "Private Plugin Marketplace", shape: "Setup + subscription", figure: <MarketplaceTree />,
    body: "Your proven workflows, packaged as versioned plugins in a private managed catalog. Every relevant employee gets the same vetted tooling on day one; updates propagate automatically; IT knows exactly what runs where. “How we use AI here” stops being tribal knowledge and becomes a durable asset of the company.",
  },
  {
    href: "/services/#agents", climb: "3 → 4", title: "Agent Deployment", shape: "Scoped builds · fold into the subscription", figure: <AgentGates />,
    body: "Long-running agents on the workflows your marketplace already standardized — with trust gates (draft, then approve, then act), observability, and cost tracking treated as seriously as any production system.",
  },
];

const principles = [
  { title: "One rung at a time.", body: "A Level-1 company asking for agent swarms gets told no, and why, with the ladder as the explanation. Everyone else is selling the teleporter; declining to is the most valuable thing we do." },
  { title: "Evidence over demos.", body: "Every build ships with an evaluation harness. If we can’t measure that the workflow works — on your data, against your definition of “works” — we don’t call it done." },
  { title: "Your environment, your data.", body: "Work is deployed inside your infrastructure and wired to your systems. Nothing valuable about how your company operates should live on a consultant’s laptop." },
  { title: "We run on what we sell.", body: "The firm’s own operations run at Levels 4 and 5: long-running agents triage our mail, watch our infrastructure, and ship our software daily. When we demo autonomous operations, we demo our own." },
];

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  legalName: site.legalName,
  alternateName: "AICOTX",
  url: site.url,
  email: site.email,
  logo: `${site.url}/opengraph-image.png`,
  description: site.description,
  areaServed: { "@type": "State", name: "Texas" },
  address: { "@type": "PostalAddress", addressRegion: "TX", addressCountry: "US" },
};

function LevelRow({ href, code, name, desc }: { href: string; code: string; name: string; desc: string }) {
  return (
    <Link
      href={href}
      className="grid grid-cols-[64px_260px_1fr] items-baseline gap-5 border-b border-border py-5 no-underline transition-colors duration-150 hover:bg-muted max-md:grid-cols-[48px_1fr]"
    >
      <span className="font-mono text-sm tracking-[-0.02em] text-primary">{code}</span>
      <span className="text-xl font-medium tracking-[-0.02em] text-ink">{name}</span>
      <span className="text-base text-muted-foreground max-md:col-start-2">{desc}</span>
    </Link>
  );
}

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />

      <section className="pt-[clamp(40px,7vw,96px)]">
        <Shell className="flex flex-col items-center pb-[clamp(36px,5vw,64px)] text-center">
          <Kicker rule={false} className="mb-[clamp(18px,3vw,28px)]">An applied-AI consultancy · <em>Texas</em></Kicker>
          <h1 className="max-w-[17ch] text-display">Most AI initiatives die of&nbsp;teleportation.</h1>
          <div className="mt-[clamp(28px,4vw,44px)]">
            <Button variant="dark" size="pill" nativeButton={false} render={<Link href="/contact/" />}>Get in touch</Button>
          </div>
        </Shell>
        <Shell>
          <div className="grid min-h-[clamp(340px,44vw,560px)] place-items-center overflow-hidden rounded-xl bg-[radial-gradient(110%_130%_at_10%_-5%,rgba(178,98,60,.95)_0%,rgba(178,98,60,0)_55%),radial-gradient(110%_120%_at_92%_5%,rgba(214,175,106,.95)_0%,rgba(214,175,106,0)_55%),radial-gradient(90%_130%_at_82%_95%,rgba(84,24,13,.9)_0%,rgba(84,24,13,0)_60%),radial-gradient(120%_120%_at_20%_100%,rgba(122,50,24,.95)_0%,rgba(122,50,24,0)_55%),linear-gradient(135deg,#7E3418_0%,#A85E33_55%,#D6AF6A_100%)] p-[clamp(28px,5vw,72px)]">
            <FigureCard
              title="Maturity heatmap"
              tag="audit deliverable · illustrative"
              note="Function × level. The prescription is always the next rung, never the top."
              className="w-full max-w-[660px] shadow-[0_40px_90px_-30px_rgba(70,32,10,.55)]"
            >
              <Heatmap />
            </FigureCard>
          </div>
        </Shell>
      </section>

      <Shell className="reveal pt-[clamp(48px,7vw,96px)]">
        <Columns className="text-lede text-muted-foreground [&_strong]:font-medium [&_strong]:text-ink">
          <p>
            A company that has barely sanctioned its first chatbot buys a story about autonomous agent swarms, tries to skip every step in between, and quietly writes the whole category off eighteen months later. The failure is rarely the technology. <strong>It is the jump.</strong>
          </p>
          <p>
            There is a ladder from <em>“a few people quietly use ChatGPT”</em> to <em>“processes that run themselves, supervised by exception.”</em> We place your company on it, function by function — and we sell exactly <strong>one rung of climb at a time</strong>: scoped, priced, and proven working in your environment before anyone talks about the next.
          </p>
        </Columns>
      </Shell>

      <Section>
        <SectionHead num="01" title="The Ladder" link={{ href: "/ladder/", label: "Read the full methodology →" }} />
        <SectionTitle>Six levels. Every company is on one of them.</SectionTitle>
        <div className="prose-site max-w-[68ch]">
          <p>
            “AI transformation” is a category, not a plan. A maturity ladder converts it into a diagnosis and a prescription: here is your level, per function, and here is the one move that gets you up a rung. Real organizations are lumpy — engineering at Level&nbsp;2 while operations sits at Level&nbsp;0 is normal, which is why we assess per function, never per company.
          </p>
          <p>The audit deliverable is a heatmap like the one above: every function, its level, and the single highest-leverage climb — priced as a specific engagement, not a vision statement.</p>
        </div>
        <div className="mt-[clamp(24px,4vw,40px)] border-t border-border">
          {levels.map((l) => (
            <LevelRow key={l.code} href={`/ladder/#${l.code.toLowerCase()}`} {...l} />
          ))}
        </div>
      </Section>

      <Section>
        <SectionHead num="02" title="Engagements" link={{ href: "/services/", label: "All services →" }} />
        <SectionTitle>One offer per rung of climb.</SectionTitle>
        <div className="prose-site max-w-[68ch]">
          <p>Every engagement ends with your company measurably one level up — and with the evidence in hand. The audit places you; each climb is a fixed, named piece of work; and nothing is proposed until the rung below it is real.</p>
        </div>
        <div className="mt-[clamp(28px,4vw,48px)] border-y border-border">
          {engagements.map(({ body, ...e }) => (
            <CatalogEntry key={e.href} heading="h3" {...e}>
              <p>{body}</p>
            </CatalogEntry>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHead num="03" title="Fractional" link={{ href: "/services/#fractional", label: "The engagement →" }} />
        <SectionTitle>A senior AI engineer on your team — a few days a month.</SectionTitle>
        <Columns>
          <div className="prose-site max-w-[68ch]">
            <p>Most companies on the lower rungs of the ladder don’t have forty hours a week of AI work. They have a steady stream of it — a workflow to build, a vendor pitch to judge, an agent misbehaving, a team that keeps asking the same good questions — and the engineers capable of handling all of that are nearly impossible to hire, because everyone else is trying to hire them too.</p>
            <p>A <strong>fractional AI engineer</strong> is the answer to both problems: a fixed number of days each month, embedded with your team, in your environment, under your priorities. The scope rides the same roadmap the audit produced — nothing freelance about it — and it is how the ladder keeps moving <em>between</em> engagements rather than only during them.</p>
          </div>
          <div>
            <p className="label-caps mb-3">The days go to</p>
            <ul className="ruled-list">
              <li>Building workflows from your roadmap, end to end</li>
              <li>Stewarding your plugin catalog — reviews, updates, provenance</li>
              <li>Keeping evaluations green as models and workflows change</li>
              <li>Supervising deployed agents and tightening their trust gates</li>
              <li>Office hours: your team’s questions, answered by someone who ships</li>
            </ul>
            <p className="mt-4 font-mono text-meta text-muted-foreground">Fixed days per month · three-month minimum · pairs with any level</p>
          </div>
        </Columns>
      </Section>

      <Section id="products">
        <SectionHead num="04" title="Products" link={{ href: "/products/", label: "All products →" }} />
        <SectionTitle>Instruments of the practice.</SectionTitle>
        <div className="prose-site max-w-[68ch]">
          <p>Alongside the client work, the firm builds and operates its own software — the agent infrastructure, evaluation harnesses, and distribution tooling the engagements above run on. Some of it is becoming product: pieces sturdy enough to stand on their own, outside any single engagement. We publish each one when it is ready to be judged, not before.</p>
        </div>
        <div className="mt-[clamp(20px,3vw,32px)] border-t border-border">
          <LevelRow href="/products/#clearance" code="P1" name="Clearance" desc="Retrieval over SharePoint, Google Drive, and Document360 that respects every document's existing permissions." />
        </div>
      </Section>

      <Section>
        <SectionHead num="05" title="How we work" link={{ href: "/approach/", label: "Our approach →" }} />
        <div className="grid grid-cols-2 gap-x-[clamp(32px,4vw,56px)] gap-y-[clamp(32px,5vw,56px)] max-md:grid-cols-1 max-md:gap-7 lg:grid-cols-4">
          {principles.map((p) => (
            <div key={p.title}>
              <h3 className="mb-2.5 border-t border-border pt-4 text-[17.5px] font-semibold tracking-[-0.02em]">{p.title}</h3>
              <p className="text-[15.5px] leading-[1.5] text-muted-foreground">{p.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHead num="06" title="The firm" />
        <Columns layout="seal">
          <div className="prose-site max-w-[68ch]">
            <p>The AI Company of Texas is an applied-AI consultancy organized as a Texas limited liability company. We are engineers — the kind who would rather show you a working system than a slide about one. The firm operates the same agentic infrastructure it deploys for clients, at the top of its own ladder, which is both our proof of capability and our standing rebuke to vaporware.</p>
            <p>
              We keep the client roster short on purpose. Fewer engagements, taken seriously, priced on the value of the outcome rather than the hours consumed. If that sounds like how you prefer to buy, the fastest way to find out whether we can help is a plain email: <a href={`mailto:${site.email}`}>{site.email}</a>.
            </p>
          </div>
        </Columns>
      </Section>

      <Band title="Find your level.">
        Write to us with a paragraph about how work actually gets done at your company today — what tools people reach for, where the hours go, what everyone quietly complains about. We’ll reply with where we’d place you on the ladder and what one rung up would look like. That reply costs nothing.
      </Band>
    </>
  );
}
