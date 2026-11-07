import {
  climbLabel,
  founders,
  levels,
  services,
  solutions,
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
    term: 'AI adoption ladder',
    definition:
      'The firm’s six-rung model of how companies adopt AI: Experimenting (Rung 1), Licensed (Rung 2), Assisted (Rung 3), Standardized (Rung 4), Systemic (Rung 5), and Essential (Rung 6). Each rung builds on the one below it.',
  },
  {
    term: 'One rung at a time',
    definition:
      'The firm helps a company climb to the next rung, not the top. Skipping rungs is how AI projects stall.',
  },
];

export function GET() {
  const lines: string[] = [];

  lines.push(`# ${site.name}`);
  lines.push('');
  lines.push(`> ${site.description}`);
  lines.push('');
  lines.push(
    `${site.name} (${site.legalName}) is an applied-AI agency organized as a Texas limited liability company. It places companies on a six-rung AI adoption ladder and helps them climb one rung at a time, with research, setup, and its own software. This file maps the site’s primary content for language models and answer engines.`,
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

  lines.push('## How we help, by rung');
  lines.push('');
  for (const service of services) {
    lines.push(
      `- [${service.title}](${absoluteUrl(`/ladder/#${service.from}`)}) — ${service.climb}: ${service.summary}`,
    );
  }
  lines.push('');

  lines.push('## Solutions');
  lines.push('');
  for (const solution of solutions) {
    lines.push(
      `- [${solution.name}](${absoluteUrl(`/solutions/#${solution.id}`)}) (${[solution.kind, climbLabel(solution.id)].filter(Boolean).join(', ')}): ${solution.summary}`,
    );
  }
  lines.push('');

  lines.push('## Company');
  lines.push('');
  lines.push(
    `- [Solutions](${absoluteUrl('/solutions/')}): the firm’s services and the software it builds and runs, and the rung where each is put to work.`,
  );
  lines.push(
    `- [The Ladder](${absoluteUrl('/ladder/')}): what each rung looks like, what the next one takes, and how the firm helps.`,
  );
  lines.push(
    `- [Company](${absoluteUrl('/company/')}): the founders — ${founders.map((f) => `${f.name} (${f.role})`).join('; ')}.`,
  );
  lines.push(
    `- Contact: book a discovery call by emailing ${site.email}; on the call the firm places your company on the ladder and says what the next rung would take.`,
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
