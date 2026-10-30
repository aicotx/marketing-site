import type { Metadata } from 'next';
import Link from 'next/link';
import {
  AgentGates,
  AuditGrid,
  FractionalCalendar,
  MarketplaceTree,
  PilotBars,
  RetainerOrchestration,
  SetupPolicy,
} from '@/components/figures/diagrams';
import { JsonLd } from '@/components/json-ld';
import { Shell } from '@/components/layout/shell';
import { Band } from '@/components/sections/band';
import { CatalogEntry } from '@/components/sections/catalog-entry';
import { PageHead, PageLede } from '@/components/sections/page-head';
import { getService, services } from '@/lib/content';
import {
  graph,
  openGraphDefaults,
  pageBreadcrumbLd,
  serviceCatalogLd,
} from '@/lib/seo';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Our catalog: Readiness Audit, Sanctioned-AI Setup, Pilot Build, Private Plugin Marketplace, Agent Deployment, the AI Operations Retainer, and the Fractional AI Engineer. One offer per rung of the maturity ladder.',
  alternates: { canonical: '/services/' },
  openGraph: {
    ...openGraphDefaults,
    type: 'website',
    url: '/services/',
    title: `Services — ${site.name}`,
    description:
      'One offer per rung of the AI maturity ladder — from the Readiness Audit to the AI Operations Retainer.',
  },
};

/** Title, climb, flag and shape for one engagement, from the shared catalog. */
function catalogProps(id: string) {
  const { title, climb, flag, shape } = getService(id);
  return { id, title, climb, flag, shape };
}

function Leaves({ children }: { children: React.ReactNode }) {
  return <h3 className="label-sm mt-7 mb-2">{children}</h3>;
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="ruled-list max-w-[64ch]">
      {items.map((t) => (
        <li key={t}>{t}</li>
      ))}
    </ul>
  );
}

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={graph([
          serviceCatalogLd(services),
          pageBreadcrumbLd('Services', '/services/'),
        ])}
      />
      <PageHead
        kicker="Catalog · one offer per rung"
        title="The catalog is the ladder."
      >
        <PageLede>
          Each engagement below moves a company exactly one level up the{' '}
          <Link
            href="/ladder/"
            className="text-ink underline decoration-subtle underline-offset-4 hover:decoration-ink"
          >
            maturity ladder
          </Link>
          , and each one ends with evidence — a working system, an evaluation
          that proves it, and the qualification for the rung above. We
          deliberately sell nothing bigger than the next level.
        </PageLede>
      </PageHead>

      <Shell className="flex flex-col gap-[clamp(12px,1.5vw,20px)] pb-[clamp(64px,9vw,136px)]">
        <CatalogEntry {...catalogProps('audit')} figure={<AuditGrid />}>
          <p>
            The engagement that places you. We inventory how work actually gets
            done — the workflows, the data, the tools, and the shadow usage
            nobody has admitted to yet — and assess every function against the
            ladder.
          </p>
          <Leaves>You leave with</Leaves>
          <List
            items={[
              'A maturity heatmap: every function, its level, and why',
              'The highest-ROI candidate workflows, ranked',
              'Honest build-versus-buy calls — including “don’t build this”',
              'A roadmap priced as specific engagements from this catalog, not a vision statement',
            ]}
          />
        </CatalogEntry>

        <CatalogEntry {...catalogProps('setup')} figure={<SetupPolicy />}>
          <p>
            For companies where AI usage is real but unsanctioned. We write a
            usage policy that fits how your people already work, roll out
            organizational licenses with single sign-on and managed settings,
            and run an amnesty inventory of existing shadow usage — which
            doubles as a free requirements document for everything that follows.
            Ends with an all-hands working session, not a memo.
          </p>
        </CatalogEntry>

        <CatalogEntry {...catalogProps('pilot')} figure={<PilotBars />}>
          <p>
            One named workflow, automated end to end and deployed{' '}
            <strong>in your environment</strong>: connectors into your data, the
            working tooling, and an evaluation harness that proves the workflow
            performs against your definition of “works.” The pilot is how a
            company earns its first real evidence — and how we earn the right to
            propose anything larger.
          </p>
          <Leaves>You leave with</Leaves>
          <List
            items={[
              'A production workflow your team runs without us in the room',
              'Connectors into your systems, documented',
              'An eval harness that keeps proving it after we leave',
            ]}
          />
        </CatalogEntry>

        <CatalogEntry
          {...catalogProps('marketplace')}
          figure={<MarketplaceTree />}
        >
          <p>
            The centerpiece of the catalog. Your proven workflows — the pilot,
            the power users’ private toolkits, the integrations every team keeps
            rebuilding — packaged as versioned plugins in a private, managed
            catalog for your organization.
          </p>
          <p>
            Every relevant employee gets the same vetted tooling on day one.
            Updates propagate automatically. IT gets what it has been asking for
            all along: an approved catalog, permission scoping, and provenance
            for everything that runs on employee machines. “How we use AI here”
            stops being tribal knowledge and becomes a durable, compounding
            asset of the company.
          </p>
          <Leaves>You leave with</Leaves>
          <List
            items={[
              'A private plugin catalog, installed org-wide in one command',
              'An update pipeline — a workflow improved once improves for everyone',
              'A governance story your security team signs off on',
            ]}
          />
        </CatalogEntry>

        <CatalogEntry {...catalogProps('agents')} figure={<AgentGates />}>
          <p>
            Long-running agents on the workflows your marketplace already
            standardized — inbox triage, queue watching, scheduled jobs,
            drafting for approval. Trust is engineered, not assumed: every agent
            starts in draft-only mode and graduates to act-with-approval, then
            act-and-report, one workflow at a time.
          </p>
          <p>
            Observability comes with it — logs, cost tracking, and escalation
            paths treated as seriously as for any other production system. New
            agents ship as plugins into the marketplace you already run, so
            capability keeps compounding in one place.
          </p>
        </CatalogEntry>

        <CatalogEntry
          {...catalogProps('retainer')}
          figure={<RetainerOrchestration />}
        >
          <p>
            For companies whose agents already work and whose question has
            become orchestration: agents composed into supervised systems that
            own processes end to end, verified adversarially, measured for
            quality and cost the way a team would be. We act as your fractional
            AI-operations lead — orchestration design, evaluations, cost
            governance, fleet supervision.
          </p>
          <p>
            This is the level we run the firm at ourselves, which is why we’re
            comfortable telling you most companies shouldn’t buy this yet.
          </p>
        </CatalogEntry>

        <CatalogEntry
          {...catalogProps('fractional')}
          figure={<FractionalCalendar />}
        >
          <p>
            A senior AI engineer on your team for a fixed number of days each
            month — embedded, in your environment, under your priorities. For
            companies that have real AI work most months but not forty hours a
            week of it, and no appetite for a recruiting war over a hire the
            market has already priced out of reach.
          </p>
          <p>
            This is how the ladder keeps moving <strong>between</strong>{' '}
            engagements: pilots get built, the catalog stays healthy, agents
            stay supervised, and your team levels up by working next to someone
            who ships. Scope rides the roadmap the audit produced — nothing
            freelance about it — and when a climb is big enough to deserve its
            own fixed scope, it becomes one of the engagements above instead of
            quietly eating the days.
          </p>
          <Leaves>The days go to</Leaves>
          <List
            items={[
              'Building workflows from your roadmap, end to end',
              'Stewarding your plugin catalog — reviews, updates, provenance',
              'Keeping evaluations green as models and workflows change',
              'Supervising deployed agents and tightening their trust gates',
              'Office hours: your team’s questions, answered by someone who ships',
              'An engineer in the room when vendors pitch you',
            ]}
          />
        </CatalogEntry>
      </Shell>

      <Band title="Start with the audit.">
        Nearly every engagement begins there: it is cheap to buy, fast to
        deliver, and it prices everything that follows. Write to us and we’ll
        tell you honestly whether it’s worth running one.
      </Band>
    </>
  );
}
