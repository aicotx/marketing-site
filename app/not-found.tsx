import type { Metadata } from 'next';
import Link from 'next/link';
import {
  PageActions,
  PageHead,
  PageLede,
} from '@/components/sections/page-head';
import { Button } from '@/components/ui/button';
import { openGraphDefaults, pageTitle } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Page Not Found',
  openGraph: { ...openGraphDefaults, title: pageTitle('Page Not Found') },
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <PageHead
      kicker="404"
      title="There’s no page at this address."
      className="pb-[clamp(64px,9vw,136px)]"
    >
      <PageLede>
        It may have moved when we simplified the site. How we help is on the
        ladder page, and our services and software are on the solutions page.
      </PageLede>
      <PageActions>
        <Button
          variant="dark"
          size="pill-sm"
          nativeButton={false}
          render={<Link href="/ladder/" />}
          className="h-11 text-[15px]"
        >
          See the ladder
        </Button>
        <Button
          variant="line"
          size="pill-sm"
          nativeButton={false}
          render={<Link href="/" />}
          className="h-11 border-border text-[15px]"
        >
          Go to the home page
        </Button>
      </PageActions>
    </PageHead>
  );
}
