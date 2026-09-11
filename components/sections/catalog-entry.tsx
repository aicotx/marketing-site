import Link from "next/link";
import { MiniFig } from "@/components/figures/mini-fig";

/**
 * One engagement in the catalog: climb column, title and body, mono shape line, figure on wide screens.
 * Entries draw a top rule except the first; wrap a list in `border-y` to close it (see the home page).
 */
export function CatalogEntry({
  id,
  climb,
  flag,
  title,
  href,
  shape,
  figure,
  heading: Heading = "h2",
  children,
}: {
  id?: string;
  climb: string;
  flag?: string;
  title: string;
  href?: string;
  shape: string;
  figure: React.ReactNode;
  heading?: "h2" | "h3";
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="grid scroll-mt-24 grid-cols-[150px_1fr] gap-[clamp(20px,4vw,64px)] border-t border-border py-[clamp(24px,3.5vw,44px)] first:border-t-0 max-md:grid-cols-1 max-md:gap-2.5 lg:grid-cols-[150px_minmax(0,1fr)_220px]"
    >
      <div className="pt-2 font-mono text-sm tracking-[-0.02em] whitespace-nowrap text-primary">
        {climb}
        {flag && <span className="mt-1.5 block text-meta text-muted-foreground max-md:ml-2.5 max-md:inline">{flag}</span>}
      </div>
      <div>
        <Heading className="mb-2.5 text-entry font-medium">
          {href ? <Link href={href} className="no-underline hover:text-primary">{title}</Link> : title}
        </Heading>
        <div className="prose-entry">{children}</div>
        <p className="mt-4 font-mono text-meta text-muted-foreground">{shape}</p>
      </div>
      <MiniFig className="hidden self-start justify-self-end pt-2.5 lg:block">{figure}</MiniFig>
    </section>
  );
}
