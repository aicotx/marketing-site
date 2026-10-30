import Link from 'next/link';
import { MiniFig } from '@/components/figures/mini-fig';
import { Badge } from '@/components/ui/badge';

/** One engagement in the catalog: a soft gray card with the climb, title and body, shape line, and its figure on wide screens. */
export function CatalogEntry({
  id,
  climb,
  flag,
  title,
  href,
  shape,
  figure,
  heading: Heading = 'h2',
  children,
}: {
  id?: string;
  climb: string;
  flag?: string;
  title: string;
  href?: string;
  shape: string;
  figure: React.ReactNode;
  heading?: 'h2' | 'h3';
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="grid scroll-mt-28 grid-cols-1 gap-[clamp(28px,4vw,64px)] rounded-2xl bg-muted p-[clamp(24px,4vw,56px)] lg:grid-cols-[minmax(0,1fr)_300px]"
    >
      <div>
        <div className="mb-5 flex flex-wrap items-center gap-2">
          <Badge>{climb}</Badge>
          {flag && <Badge soft>{flag}</Badge>}
        </div>
        <Heading className="mb-4 font-sans text-h3">
          {href ? (
            <Link href={href} className="no-underline hover:opacity-70">
              {title}
            </Link>
          ) : (
            title
          )}
        </Heading>
        <div className="prose-entry text-p-sm">{children}</div>
        <p className="mt-6 text-fine font-medium text-muted-foreground">
          {shape}
        </p>
      </div>
      <div className="hidden self-start rounded-xl bg-card p-8 shadow-[0_1px_2px_rgba(0,0,0,.04)] lg:block">
        <MiniFig className="[&_svg]:mx-auto [&_svg]:max-w-[220px]">
          {figure}
        </MiniFig>
      </div>
    </section>
  );
}
