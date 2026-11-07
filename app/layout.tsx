import type { Metadata } from 'next';
import { Archivo, Lora } from 'next/font/google';
import { JsonLd } from '@/components/json-ld';
import { SiteFooter } from '@/components/layout/site-footer';
import { SiteHeader } from '@/components/layout/site-header';
import { RevealObserver } from '@/components/reveal-observer';
import { SmoothScroll } from '@/components/smooth-scroll';
import { ThemeProvider } from '@/components/theme-provider';
import { ThemeToggle } from '@/components/theme-toggle';
import {
  graph,
  openGraphDefaults,
  organizationLd,
  pageTitle,
  websiteLd,
} from '@/lib/seo';
import { site } from '@/lib/site';
import './globals.css';

const archivo = Archivo({
  variable: '--font-archivo',
  subsets: ['latin'],
});

const lora = Lora({
  variable: '--font-lora',
  subsets: ['latin'],
});

/** The home page leads with the name; every other page ends with it (pageTitle). */
const homeTitle = `${site.name} • ${site.titleTagline}`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: homeTitle,
    template: pageTitle('%s'),
  },
  description: site.description,
  openGraph: {
    ...openGraphDefaults,
    type: 'website',
    url: '/',
    title: homeTitle,
    description: site.description,
  },
  // title, description and image fill in from each page's openGraph
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${lora.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col">
        <JsonLd data={graph([organizationLd(), websiteLd()])} />
        <ThemeProvider>
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
          <ThemeToggle />
        </ThemeProvider>
        <RevealObserver />
        <SmoothScroll />
      </body>
    </html>
  );
}
