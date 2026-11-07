/**
 * The site's core entities — the six ladder levels, how we help at each rung,
 * and the products — as plain data. Pages render from this, and so do
 * /llms.txt and the JSON-LD in lib/seo.ts, so the machine-readable
 * descriptions never drift from what visitors see.
 */

export type Level = {
  id: string;
  code: string;
  name: string;
  /** One-line description (home page level grid). */
  summary: string;
  /** What a company at this level says about itself (ladder page epigraph). */
  quote: string;
  /** What this rung looks like from the inside (ladder page). */
  detail: string;
  /** What the next rung up requires. The top rung has none. */
  exit?: string;
};

export const levels: Level[] = [
  {
    id: 'rung-1',
    code: 'Rung 1',
    name: 'Experimenting',
    summary: 'A few people use ChatGPT. Nobody sanctioned it.',
    quote: 'Some people use ChatGPT. Nobody sanctioned it.',
    detail:
      'There is no policy and there are no company accounts. A few people paste company data into personal chatbots, and nobody knows who uses what. The company already carries the risk of AI while capturing almost none of the benefit.',
    exit: 'Sanctioned tools, set up for how your people actually work, and a policy they can follow.',
  },
  {
    id: 'rung-2',
    code: 'Rung 2',
    name: 'Licensed',
    summary: 'Everyone has a chat account. Nothing about the work has changed.',
    quote: 'We gave everyone a license.',
    detail:
      'Everyone has a company account, single sign-on works, and there is a one-page policy. People use it to ask questions, draft, and summarize. The value is real, but it is individual and capped at what each person thinks to ask.',
    exit: 'AI connected to company knowledge and wired into specific workflows.',
  },
  {
    id: 'rung-3',
    code: 'Rung 3',
    name: 'Assisted',
    summary: 'Individuals build their own workflows. The gains stay personal.',
    quote: 'Our best people have built themselves something remarkable.',
    detail:
      'Individuals build AI into their own work, person by person: developers with agentic coding tools, operators with projects, connectors, and prompts passed around in chat. The gains are real but unshared. When the person who built a workflow goes on vacation, the workflow goes with them.',
    exit: 'The workflows that work become shared, versioned, and safe to hand to everyone.',
  },
  {
    id: 'rung-4',
    code: 'Rung 4',
    name: 'Standardized',
    summary:
      'Vetted tooling, versioned and distributed to everyone who needs it.',
    quote: 'How we use AI is an asset of the company now.',
    detail:
      'Workflows are packaged and installed from a managed catalog. Everyone gets the same vetted tooling on day one, an improvement reaches everyone on the next update, and IT knows what runs where. People still drive every task; the tooling assists but does not act.',
    exit: 'Delegating whole tasks to agents that run without a person at the keyboard.',
  },
  {
    id: 'rung-5',
    code: 'Rung 5',
    name: 'Systemic',
    summary:
      'Long-running agents do whole tasks unattended, gated where it counts.',
    quote: 'The question became which exceptions need humans.',
    detail:
      'Long-running agents do real work unattended: triaging inboxes, watching queues, drafting for approval, running scheduled jobs. Anything consequential waits for a person, and every agent is logged and cost-tracked like any other production system.',
    exit: 'Agents composed into supervised systems that own whole processes.',
  },
  {
    id: 'rung-6',
    code: 'Rung 6',
    name: 'Essential',
    summary: 'Agents own processes end to end. Humans govern by exception.',
    quote: 'Humans set policy and handle the edge cases.',
    detail:
      'Whole processes run agent-first. Agents check each other’s work and escalate by exception, while people set policy and handle the edges. Almost nobody is here yet, and every rung below is a prerequisite.',
  },
];

export function getLevel(id: string): Level {
  const level = levels.find((l) => l.id === id);
  if (!level) throw new Error(`Unknown level: ${id}`);
  return level;
}

export type Service = {
  id: string;
  /** The level this service climbs from; it is shown under that rung. */
  from: string;
  /** Display label for the climb, e.g. "Rung 1 → 2". */
  climb: string;
  title: string;
  summary: string;
  /** Solutions (by id) specific to this climb; `everyClimb` solutions are added on top. */
  solutions?: string[];
};

/** How we help at each rung, in ladder order. */
export const services: Service[] = [
  {
    id: 'rollout',
    from: 'rung-1',
    climb: 'Rung 1 → 2',
    title: 'Sanctioned AI, set up to fit',
    summary:
      'We roll out sanctioned AI tools matched to each team, such as Claude Code for the people who build things and chat on the web for everyone else, with company accounts, single sign-on, and a usage policy people can follow.',
  },
  {
    id: 'knowledge',
    from: 'rung-2',
    climb: 'Rung 2 → 3',
    title: 'Company knowledge, connected',
    summary:
      'We give your AI tools your company’s knowledge through a shared knowledge base, kept in storage you already use, then help each team build its first real workflows on top of it.',
    solutions: ['knowledge-base'],
  },
  {
    id: 'plugins',
    from: 'rung-3',
    climb: 'Rung 3 → 4',
    title: 'Shared tooling, with guardrails',
    summary:
      'We package the workflows that work into plugins your whole company installs from one private catalog, and add security plugins so IT decides what Claude can and cannot do on company machines.',
    solutions: ['install-guard'],
  },
  {
    id: 'agents',
    from: 'rung-4',
    climb: 'Rung 4 → 5',
    title: 'Long-running agents',
    summary:
      'For companies that are ready, we set up long-running agents on workflows that are already standardized.',
    solutions: ['agent-provisioning'],
  },
  {
    id: 'orchestration',
    from: 'rung-5',
    climb: 'Rung 5 → 6',
    title: 'Agents composed into systems',
    summary:
      'For the few companies already running agents unattended, we help compose them into supervised systems that own whole processes, with people setting policy and handling the exceptions.',
  },
];

export function serviceFor(levelId: string): Service | undefined {
  return services.find((s) => s.from === levelId);
}

/** The one ladder climb a solution is specific to, if any. */
export function climbUsing(solutionId: string): Service | undefined {
  return services.find((s) => s.solutions?.includes(solutionId));
}

/** Every solution put to work at a climb: its own, then the ones used at every climb. */
export function solutionsFor(climb: Service): Solution[] {
  return [
    ...(climb.solutions ?? []).map(getSolution),
    ...solutions.filter((s) => s.everyClimb),
  ];
}

/** Where a solution is put to work, as a short label: "Every climb" or "Rung 2 → 3". */
export function climbLabel(solutionId: string): string | undefined {
  if (getSolution(solutionId).everyClimb) return 'Every climb';
  return climbUsing(solutionId)?.climb;
}

export type Solution = {
  /** Anchor on /solutions/. */
  id: string;
  kind: 'service' | 'product';
  name: string;
  summary: string;
  /** Put to work at every climb of the ladder, not one rung. */
  everyClimb?: boolean;
};

/** What we offer: services from our team, then software we build and run. */
export const solutions: Solution[] = [
  {
    id: 'strategic-consulting',
    kind: 'service',
    everyClimb: true,
    name: 'Strategic AI consulting',
    summary:
      'We find the rung your company is on and plan the climb to the next one. It starts with research: interviews and user studies on how your people work and how you expect them to use AI, so each step fits how your company actually runs.',
  },
  {
    id: 'agent-provisioning',
    kind: 'service',
    name: 'Long-running agent provisioning',
    summary:
      'For companies that are ready, we provision long-running agents on workflows that are already standardized, so whole tasks run without a person at the keyboard.',
  },
  {
    id: 'knowledge-base',
    kind: 'product',
    name: 'Knowledge Base',
    summary:
      'One knowledge base for your team and its AI tools. Notes are plain Markdown kept wherever you already store files, such as SharePoint, Google Drive, or GitHub, and work with whichever AI tool your people use, such as Claude Desktop, ChatGPT Codex, or Hermes Agent.',
  },
  {
    id: 'install-guard',
    kind: 'product',
    name: 'Install Guard',
    summary:
      'Stops Claude from downloading or installing software on company machines. Downloads and installers are blocked, package managers need an explicit yes, and IT owns the exceptions. It holds even when permission prompts are turned off.',
  },
  {
    id: 'costlens',
    kind: 'product',
    everyClimb: true,
    name: 'Costlens',
    summary:
      'Shows where your Claude spend leaks: long carried context, prompt caches that expire between turns, expensive models doing simple work, and agents re-reading what the project already knew. It reads Claude Code’s built-in telemetry and session transcripts, and recommends a fix for each leak.',
  },
];

/** The software half of `solutions`, for the home page's products section. */
export const products = solutions.filter((s) => s.kind === 'product');

export function getSolution(id: string): Solution {
  const solution = solutions.find((s) => s.id === id);
  if (!solution) throw new Error(`Unknown solution: ${id}`);
  return solution;
}

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
