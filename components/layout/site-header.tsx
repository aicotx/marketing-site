"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { StarMark } from "@/components/brand/star-mark";
import { Shell } from "@/components/layout/shell";
import { Button } from "@/components/ui/button";
import { nav } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const current = (href: string) => (pathname === href ? "page" : undefined);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b bg-background/92 backdrop-blur-[12px] transition-[border-color] duration-250",
        scrolled ? "border-border" : "border-transparent",
      )}
    >
      <Shell rail className="flex h-[72px] items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-2.5 whitespace-nowrap text-[19px] font-semibold tracking-[-0.03em] text-primary no-underline">
          <StarMark className="size-10 flex-none" />
          <span className="sr-only">The AI Company of Texas</span>
        </Link>
        <nav className="flex items-center gap-[clamp(14px,2.4vw,32px)] max-md:gap-3.5">
          {nav.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              aria-current={current(l.href)}
              className={cn(
                "whitespace-nowrap py-1 text-[14.5px] text-foreground no-underline transition-colors duration-150 hover:text-ink aria-[current=page]:text-primary max-md:text-[13.5px]",
                "hideOnSmall" in l && "max-md:hidden",
              )}
            >
              {l.label}
            </Link>
          ))}
          <Button
            size="pill-sm"
            nativeButton={false}
            render={<Link href="/contact/" aria-current={current("/contact/")} />}
            className="max-md:px-[18px] max-md:py-2"
          >
            Contact
          </Button>
        </nav>
      </Shell>
    </header>
  );
}
