import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/seo';

/**
 * Everything is public and we want to be cited, so all crawlers — including the
 * answer-engine bots (GPTBot, ClaudeBot, PerplexityBot, Google-Extended, etc.)
 * — are allowed. They're covered by the `*` rule; naming them just makes the
 * intent explicit and survives any future tightening of the wildcard.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
