import {
  founders,
  levels,
  principles,
  products,
  services,
} from '@/lib/content';
import { absoluteUrl } from '@/lib/seo';
import { site } from '@/lib/site';

/**
 * /llms.txt — a curated, machine-readable map of the site for answer engines,
 * following the llmstxt.org convention (H1 title, blockquote summary, then
 * H2 sections of annotated links). Generated from the same level, service,
 * and product data as the rest of the site, so it never drifts out of sync.
 */
export const dynamic = 'force-static';

/** One-line definitions of the core entities, for quick extraction. */
const concepts: { term: string; definition: string }[] = [
  {
    term: 'AI maturity ladder',
    definition:
      'The firm’s six-level model of how a company uses AI, from Shadow AI (L0) to orchestrated, agent-first operations (L5). Each level is the prerequisite for the one above it.',
  },
  {
    term: 'Per-function assessment',
    definition:
      'Companies are assessed function by function, never as a single number. Engineering at Level 2 while operations sits at Level 0 is the normal case; the audit deliverable is a heatmap of function × level.',
  },
  {
    term: 'One rung at a time',
    definition:
      'Every engagement moves a company exactly one level up the ladder. The firm deliberately sells nothing bigger than the next level, because skipping rungs is how AI initiatives fail.',
  },
  {
    term: 'Evaluation harness',
    definition:
      'A repeatable measurement of a workflow against the client’s data and definition of “works.” Every build ships with one; it is the definition of done.',
  },
];

export function GET() {
  const lines: string[] = [];

  lines.push(`# ${site.name}`);
  lines.push('');
  lines.push(`> ${site.description}`);
  lines.push('');
  lines.push(
    `${site.name} (${site.legalName}) is an applied-AI consultancy organized as a Texas limited liability company. It places companies on a six-level AI maturity ladder, function by function, and sells exactly one rung of climb at a time: fixed-scope engagements that end with a working system deployed in the client’s environment and an evaluation that proves it. The firm runs its own operations on the agentic infrastructure it deploys for clients. This file maps the site’s primary content for language models and answer engines.`,
  );
  lines.push('');

  lines.push('## Core concepts');
  lines.push('');
  for (const { term, definition } of concepts) {
    lines.push(`- **${term}**: ${definition}`);
  }
  lines.push('');

  lines.push('## The ladder');
  lines.push('');
  for (const level of levels) {
    lines.push(
      `- [${level.code} · ${level.name}](${absoluteUrl(`/ladder/#${level.id}`)}): ${level.summary}`,
    );
  }
  lines.push('');

  lines.push('## Services');
  lines.push('');
  for (const service of services) {
    lines.push(
      `- [${service.title}](${absoluteUrl(`/services/#${service.id}`)}) — climb ${service.climb}; ${service.shape}: ${service.summary}`,
    );
  }
  lines.push('');

  lines.push('## Products');
  lines.push('');
  for (const product of products) {
    lines.push(
      `- [${product.name}](${absoluteUrl(`/products/#${product.id}`)}): ${product.summary}`,
    );
  }
  lines.push('');

  lines.push('## How we work');
  lines.push('');
  for (const principle of principles) {
    lines.push(`- **${principle.title}** ${principle.body}`);
  }
  lines.push('');

  lines.push('## Company');
  lines.push('');
  lines.push(
    `- [The Ladder](${absoluteUrl('/ladder/')}): the full methodology — what each level looks like, what breaks if you stay, and the exit to the next rung.`,
  );
  lines.push(
    `- [Approach](${absoluteUrl('/approach/')}): how the firm works — one rung at a time, evidence over demos, fixed scope priced on value, and what it won’t do.`,
  );
  lines.push(
    `- [Company](${absoluteUrl('/company/')}): the founders — ${founders.map((f) => `${f.name} (${f.role})`).join('; ')}.`,
  );
  lines.push(
    `- Contact: write to ${site.email} with a few paragraphs about how work gets done at your company; replies come from an engineer within two business days.`,
  );
  lines.push('');

  lines.push('## Optional');
  lines.push('');
  lines.push(`- [Sitemap](${absoluteUrl('/sitemap.xml')})`);
  lines.push('');

  return new Response(lines.join('\n'), {
    headers: {
      'content-type': 'text/plain; charset=utf-8',
      'cache-control': 'public, max-age=3600',
    },
  });
}
