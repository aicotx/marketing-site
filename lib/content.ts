/**
 * The site's core entities — the six ladder levels, the service catalog, the
 * products, and the working principles — as plain data. Pages render from
 * this, and so do /llms.txt and the JSON-LD in lib/seo.ts, so the
 * machine-readable descriptions never drift from what visitors see.
 */

export type Level = {
  id: string;
  code: string;
  name: string;
  /** Compact label for the ladder page's sticky index. */
  short: string;
  /** One-line description (home page level grid). */
  summary: string;
  /** What a company at this level says about itself (ladder page epigraph). */
  quote: string;
};

export const levels: Level[] = [
  {
    id: 'l0',
    code: 'L0',
    name: 'Shadow AI',
    short: 'Shadow AI',
    summary: 'Some people use chatgpt.com. Nobody sanctioned it.',
    quote: 'Some people use chatgpt.com. Nobody sanctioned it.',
  },
  {
    id: 'l1',
    code: 'L1',
    name: 'Sanctioned chat',
    short: 'Sanctioned chat',
    summary:
      'Everyone has a license — and the license is treated as the finish line.',
    quote: 'We gave everyone a license.',
  },
  {
    id: 'l2',
    code: 'L2',
    name: 'Assisted workflows',
    short: 'Assisted workflows',
    summary:
      'Real gains, all personal. The workflow leaves when its owner does.',
    quote: 'Our best people have built themselves something remarkable.',
  },
  {
    id: 'l3',
    code: 'L3',
    name: 'Standardized capability',
    short: 'Standardized',
    summary:
      'Vetted tooling, versioned and distributed. AI becomes an asset of the company.',
    quote: 'How we use AI is an asset of the company now.',
  },
  {
    id: 'l4',
    code: 'L4',
    name: 'Autonomous operations',
    short: 'Autonomous ops',
    summary: 'Agents do whole tasks unattended, gated where it counts.',
    quote: 'The question became which exceptions need humans.',
  },
  {
    id: 'l5',
    code: 'L5',
    name: 'Orchestrated',
    short: 'Orchestrated',
    summary:
      'Fleets of agents own processes end to end. Humans govern by exception.',
    quote: 'Humans set policy and handle the edge cases.',
  },
];

export function getLevel(id: string): Level {
  const level = levels.find((l) => l.id === id);
  if (!level) throw new Error(`Unknown level: ${id}`);
  return level;
}

export type Service = {
  /** Anchor on /services/. */
  id: string;
  title: string;
  /** The rung of the ladder this engagement climbs. */
  climb: string;
  flag?: string;
  /** Pricing and duration line. */
  shape: string;
  /** One-paragraph description for /llms.txt and structured data. */
  summary: string;
};

export const services: Service[] = [
  {
    id: 'audit',
    title: 'AI Readiness Audit',
    climb: 'any → next',
    flag: 'the wedge',
    shape: 'Fixed fee · one to two weeks',
    summary:
      'A function-by-function maturity heatmap of your company, the highest-ROI candidate workflows, honest build-versus-buy calls, and a roadmap priced as specific engagements — not a strategy deck.',
  },
  {
    id: 'setup',
    title: 'Sanctioned-AI Setup',
    climb: '0 → 1',
    shape: 'Small fixed fee · fast · often bundled into the audit',
    summary:
      'For companies where AI usage is real but unsanctioned: a usage policy that fits how people already work, organizational licenses with single sign-on and managed settings, and an amnesty inventory of existing shadow usage.',
  },
  {
    id: 'pilot',
    title: 'Pilot Build',
    climb: '1 → 2',
    shape: 'Fixed fee · four to eight weeks',
    summary:
      'One named workflow, end to end: connectors into your data, the working tooling, and an evaluation harness that proves it — deployed in your environment, not ours.',
  },
  {
    id: 'marketplace',
    title: 'Private Plugin Marketplace',
    climb: '2 → 3',
    flag: 'flagship',
    shape:
      'Setup fee + subscription · the subscription carries every level above this one',
    summary:
      'Your proven workflows, packaged as versioned plugins in a private managed catalog. Every relevant employee gets the same vetted tooling on day one; updates propagate automatically; IT knows exactly what runs where.',
  },
  {
    id: 'agents',
    title: 'Agent Deployment',
    climb: '3 → 4',
    shape: 'Scoped builds · delivered into your marketplace subscription',
    summary:
      'Long-running agents on the workflows your marketplace already standardized — with trust gates (draft, then approve, then act), observability, and cost tracking treated as seriously as any production system.',
  },
  {
    id: 'retainer',
    title: 'AI Operations Retainer',
    climb: '4 → 5',
    shape: 'Monthly retainer · three-month minimum',
    summary:
      'For companies whose agents already work and whose question has become orchestration: agents composed into supervised systems that own processes end to end, verified adversarially, and measured for quality and cost.',
  },
  {
    id: 'fractional',
    title: 'Fractional AI Engineer',
    climb: 'any level',
    flag: 'ongoing',
    shape:
      'Fixed days per month · three-month minimum · pairs with any level of the ladder',
    summary:
      'A senior AI engineer on your team for a fixed number of days each month — embedded, in your environment, under your priorities.',
  },
];

export function getService(id: string): Service {
  const service = services.find((s) => s.id === id);
  if (!service) throw new Error(`Unknown service: ${id}`);
  return service;
}

export type Product = {
  /** Anchor on /products/. */
  id: string;
  code: string;
  name: string;
  summary: string;
};

export const products: Product[] = [
  {
    id: 'clearance',
    code: 'P1',
    name: 'Clearance',
    summary:
      "Retrieval over SharePoint, Google Drive, and Document360 that respects every document's existing permissions.",
  },
];

export const principles: { title: string; body: string }[] = [
  {
    title: 'One rung at a time.',
    body: 'A Level-1 company asking for agent swarms gets told no, and why, with the ladder as the explanation. Everyone else is selling the teleporter; declining to is the most valuable thing we do.',
  },
  {
    title: 'Evidence over demos.',
    body: 'Every build ships with an evaluation harness. If we can’t measure that the workflow works — on your data, against your definition of “works” — we don’t call it done.',
  },
  {
    title: 'Your environment, your data.',
    body: 'Work is deployed inside your infrastructure and wired to your systems. Nothing valuable about how your company operates should live on a consultant’s laptop.',
  },
  {
    title: 'We run on what we sell.',
    body: 'The firm’s own operations run at Levels 4 and 5: long-running agents triage our mail, watch our infrastructure, and ship our software daily. When we demo autonomous operations, we demo our own.',
  },
];

export type Founder = {
  id: string;
  name: string;
  role: string;
  image: string;
  linkedin: string;
};

/** The founders, by last name. Headshots live in public/assets/img/headshots. */
export const founders: Founder[] = [
  {
    id: 'hunter-chemelli',
    name: 'Hunter Chemelli',
    role: 'Co-Founder, Principal Agent',
    image: '/assets/img/headshots/hunter-chemelli.png',
    linkedin: 'https://www.linkedin.com/in/hunterchemelli/',
  },
  {
    id: 'justin-rudi',
    name: 'Justin Rudi',
    role: 'Co-Founder, Principal Agent',
    image: '/assets/img/headshots/justin-rudi.jpg',
    linkedin: 'https://www.linkedin.com/in/justinrudi/',
  },
  // {
  //   id: 'thatcher-thornberry',
  //   name: 'Thatcher Thornberry',
  //   role: 'Co-Founder, Principal Agent',
  //   image: '/assets/img/headshots/thatcher-thornberry.jpg',
  //   linkedin: 'https://www.linkedin.com/in/thatcher-thornberry-a7222a17b/',
  // },
];
