import Link from "next/link";
import { StarMark } from "@/components/brand/star-mark";
import { Shell } from "@/components/layout/shell";
import { nav } from "@/lib/site";

const links = [...nav, { href: "/contact/", label: "Contact" }];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background pt-[clamp(48px,6vw,80px)] pb-12 text-sm text-muted-foreground">
      <Shell rail>
        <div className="flex flex-wrap items-start justify-between gap-x-[72px] gap-y-10">
          <div className="flex items-center gap-2.5 text-[17px] font-semibold tracking-[-0.03em] text-primary">
            <StarMark className="size-6" />
            The AI Company of Texas
          </div>
          <nav aria-label="Footer" className="flex flex-col gap-2.5">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="text-foreground no-underline hover:text-primary">
                {l.label}
              </Link>
            ))}
          </nav>
          <div>
            <a href="mailto:hello@aicotx.com" className="text-foreground no-underline hover:text-primary">
              hello@aicotx.com
            </a>
          </div>
        </div>
        <div className="mt-12 flex flex-wrap justify-between gap-x-8 gap-y-3 border-t border-border pt-5 font-mono text-meta text-muted-foreground">
          <span>© {new Date().getFullYear()} AICOTX LLC</span>
          <span>Texas, USA</span>
        </div>
      </Shell>
    </footer>
  );
}
