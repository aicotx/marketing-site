import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return (
    [
      { path: '/', changeFrequency: 'monthly', priority: 1 },
      { path: '/ladder/', changeFrequency: 'monthly', priority: 0.9 },
      { path: '/services/', changeFrequency: 'monthly', priority: 0.9 },
      { path: '/products/', changeFrequency: 'monthly', priority: 0.8 },
      { path: '/approach/', changeFrequency: 'yearly', priority: 0.7 },
      { path: '/company/', changeFrequency: 'yearly', priority: 0.6 },
    ] as const
  ).map(({ path, changeFrequency, priority }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));
}
