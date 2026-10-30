import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Shell } from '@/components/layout/shell';
import { cn } from '@/lib/utils';

/**
 * Numbered content section. Consecutive sections collapse their top padding; `reveal` fades it in on scroll.
 * `dark` makes it a full-bleed ink band (tokens invert via .surface-dark).
 */
export function Section({
  reveal = true,
  dark = false,
  className,
  children,
  ...props
}: React.ComponentProps<'section'> & { reveal?: boolean; dark?: boolean }) {
  return (
    <section
      className={cn(dark ? 'surface-dark py-28' : 'section-block', className)}
      {...props}
    >
      <Shell className={cn(reveal && 'reveal')}>{children}</Shell>
    </section>
  );
}

/**
 * Centered section header: a small eyebrow label, the h2, then an optional
 * lede and link. Without a `title`, the label itself becomes the h2.
 */
export function SectionHead({
  label,
  title,
  link,
  children,
}: {
  label: React.ReactNode;
  title?: React.ReactNode;
  link?: { href: string; label: React.ReactNode };
  children?: React.ReactNode;
}) {
  return (
    <div className="mx-auto max-w-[780px] pb-16 text-center">
      {title && <p className="mb-2 text-muted-foreground">{label}</p>}
      <h2>{title ?? label}</h2>
      {children && (
        <div className="prose-site mx-auto mt-4 max-w-[64ch]">{children}</div>
      )}
      {link && (
        <Link
          href={link.href}
          className="group mt-4 inline-flex items-center gap-1.5 text-caption text-ink no-underline"
        >
          {link.label}
          <ArrowRight className="size-3.5 transition-transform duration-150 group-hover:translate-x-0.5" />
        </Link>
      )}
    </div>
  );
}
