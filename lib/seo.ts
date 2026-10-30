import type { Metadata } from 'next';
import {
  founders,
  type Founder,
  type Level,
  type Product,
  type Service,
} from './content';
import { site } from './site';

/**
 * SEO / GEO helpers. Everything here produces absolute URLs and JSON-LD graphs
 * so search crawlers and answer engines get an unambiguous, machine-readable
 * description of the site's entities. Nothing here renders visible UI.
 */

export const SITE_URL = site.url;

export function absoluteUrl(path = ''): string {
  if (path.startsWith('http')) return path;
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}

/**
 * Open Graph fields every page shares. A page's `openGraph` replaces the
 * layout's wholesale, so pages spread this in before their own title, url,
 * and description. Twitter cards fill from each page's resolved openGraph.
 */
export const openGraphDefaults = {
  siteName: site.name,
  locale: 'en_US',
  images: [
    { url: '/assets/img/social.png', width: 1200, height: 630, alt: site.name },
  ],
} satisfies Metadata['openGraph'];

/** Stable @id for the one Organization node the whole graph points at. */
const ORG_ID = `${SITE_URL}/#organization`;
const SITE_ID = `${SITE_URL}/#website`;
const LADDER_ID = absoluteUrl('/ladder/#ladder');

export function organizationLd() {
  return {
    '@type': 'Organization',
    '@id': ORG_ID,
    name: site.name,
    legalName: site.legalName,
    alternateName: 'AICOTX',
    url: SITE_URL,
    logo: {
      '@type': 'ImageObject',
      url: absoluteUrl('/assets/img/logo.png'),
    },
    image: absoluteUrl('/assets/img/social.png'),
    description: site.description,
    email: site.email,
    contactPoint: {
      '@type': 'ContactPoint',
      email: site.email,
      contactType: 'sales',
      areaServed: 'US',
      availableLanguage: 'en',
    },
    sameAs: site.social.linkedin,
    founder: founders.map((f) => ({ '@id': personId(f) })),
    address: {
      '@type': 'PostalAddress',
      addressRegion: 'TX',
      addressCountry: 'US',
    },
    areaServed: { '@type': 'State', name: 'Texas' },
    knowsAbout: [
      'AI maturity assessment',
      'AI adoption strategy',
      'AI agents',
      'Agent orchestration',
      'LLM evaluation',
      'Permission-aware retrieval',
    ],
  };
}

export function websiteLd() {
  return {
    '@type': 'WebSite',
    '@id': SITE_ID,
    name: site.name,
    url: SITE_URL,
    description: site.description,
    publisher: { '@id': ORG_ID },
    inLanguage: 'en',
  };
}

/** Wrap one or more nodes in a single @graph so shared @ids resolve. */
export function graph(nodes: object[]) {
  return {
    '@context': 'https://schema.org',
    '@graph': nodes,
  };
}

function breadcrumbLd(items: { name: string; path: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

/** Breadcrumb for a top-level page: Home › {name}. */
const personId = (f: Founder) => absoluteUrl(`/company/#${f.id}`);

/** One founder, as a Person who works for the organization. */
export function personLd(f: Founder) {
  return {
    '@type': 'Person',
    '@id': personId(f),
    name: f.name,
    jobTitle: f.role,
    image: absoluteUrl(f.image),
    sameAs: f.linkedin,
    worksFor: { '@id': ORG_ID },
  };
}

/** The company page: an AboutPage about the organization, listing its founders. */
export function companyPageLd(description: string) {
  const url = absoluteUrl('/company/');
  return {
    '@type': 'AboutPage',
    '@id': `${url}#webpage`,
    url,
    name: `Company • ${site.name}`,
    description,
    isPartOf: { '@id': SITE_ID },
    about: { '@id': ORG_ID },
    mainEntity: founders.map(personLd),
  };
}

export function pageBreadcrumbLd(name: string, path: string) {
  return breadcrumbLd([
    { name: 'Home', path: '/' },
    { name, path },
  ]);
}

/** A long-form page (the ladder methodology, the approach essay). */
export function articleLd({
  path,
  headline,
  description,
}: {
  path: string;
  headline: string;
  description: string;
}) {
  const url = absoluteUrl(path);
  return {
    '@type': 'Article',
    '@id': `${url}#article`,
    mainEntityOfPage: url,
    url,
    headline,
    description,
    image: absoluteUrl('/assets/img/social.png'),
    author: { '@id': ORG_ID },
    publisher: { '@id': ORG_ID },
    inLanguage: 'en',
  };
}

/** The six-level maturity ladder as a set of defined terms. */
export function ladderLd(items: Level[]) {
  return {
    '@type': 'DefinedTermSet',
    '@id': LADDER_ID,
    name: 'The AI Maturity Ladder',
    url: absoluteUrl('/ladder/'),
    description:
      'Six levels of AI maturity, from Shadow AI to orchestrated, agent-first operations, assessed per function rather than per company.',
    hasDefinedTerm: items.map((level) => ({
      '@type': 'DefinedTerm',
      '@id': absoluteUrl(`/ladder/#${level.id}`),
      termCode: level.code,
      name: level.name,
      description: level.summary,
      url: absoluteUrl(`/ladder/#${level.id}`),
      inDefinedTermSet: { '@id': LADDER_ID },
    })),
  };
}

function serviceLd(service: Service) {
  const url = absoluteUrl(`/services/#${service.id}`);
  return {
    '@type': 'Service',
    '@id': url,
    name: service.title,
    url,
    serviceType: 'AI consulting',
    description: service.summary,
    provider: { '@id': ORG_ID },
    areaServed: { '@type': 'State', name: 'Texas' },
  };
}

/** The service catalog as an ItemList of Service nodes, in ladder order. */
export function serviceCatalogLd(items: Service[]) {
  return {
    '@type': 'ItemList',
    '@id': absoluteUrl('/services/#catalog'),
    name: `${site.name} services`,
    itemListElement: items.map((service, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: serviceLd(service),
    })),
  };
}

export function productLd(product: Product) {
  const url = absoluteUrl(`/products/#${product.id}`);
  return {
    '@type': 'SoftwareApplication',
    '@id': url,
    name: product.name,
    url,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    description: product.summary,
    publisher: { '@id': ORG_ID },
    author: { '@id': ORG_ID },
  };
}
