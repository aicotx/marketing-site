import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return (
    [
      { path: '/', changeFrequency: 'monthly', priority: 1 },
      { path: '/solutions/', changeFrequency: 'monthly', priority: 0.9 },
      { path: '/ladder/', changeFrequency: 'monthly', priority: 0.9 },
      { path: '/company/', changeFrequency: 'yearly', priority: 0.6 },
    ] as const
  ).map(({ path, changeFrequency, priority }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));
}
