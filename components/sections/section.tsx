import Link from "next/link";
import { Shell } from "@/components/layout/shell";
import { cn } from "@/lib/utils";

/** Numbered content section. Consecutive sections collapse their top padding. */
export function Section({ className, children, ...props }: React.ComponentProps<"section">) {
  return (
    <section className={cn("section-block", className)} {...props}>
      <Shell>{children}</Shell>
    </section>
  );
}

export function SectionHead({
  num,
  title,
  link,
}: {
  num: string;
  title: React.ReactNode;
  link?: { href: string; label: React.ReactNode };
}) {
  return (
    <div className="mb-[clamp(28px,4vw,48px)] flex items-baseline gap-3.5 border-b border-border pb-3.5 font-mono text-sm tracking-[-0.04em] text-muted-foreground">
      <span>{num}</span>
      <h2 className="text-sm font-normal tracking-[-0.04em] text-muted-foreground">{title}</h2>
      {link && (
        <Link href={link.href} className="ml-auto whitespace-nowrap font-sans text-[14.5px] font-medium tracking-normal text-primary no-underline hover:text-rust-deep">
          {link.label}
        </Link>
      )}
    </div>
  );
}

export function SectionTitle({ className, ...props }: React.ComponentProps<"p">) {
  return <p className={cn("mb-[clamp(20px,3vw,32px)] max-w-[24ch] text-title text-ink text-balance", className)} {...props} />;
}
