"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

/** Sticky level index for the ladder page; highlights the level currently in view. */
export function LadderRail({ levels }: { levels: { id: string; label: string }[] }) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const spy = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id);
      },
      { rootMargin: "-20% 0px -65% 0px" },
    );
    levels.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) spy.observe(el);
    });
    return () => spy.disconnect();
  }, [levels]);

  return (
    <nav aria-label="Levels" className="sticky top-[104px] flex flex-col border-l border-border">
      <span className="pb-3 pl-[18px] font-mono text-xs tracking-[-0.02em] text-muted-foreground uppercase">Levels</span>
      {levels.map((l) => (
        <a
          key={l.id}
          href={`#${l.id}`}
          className={cn(
            "-ml-[1.5px] border-l-2 border-transparent py-[9px] pl-[18px] font-mono text-[13px] tracking-[-0.02em] text-muted-foreground no-underline transition-colors duration-150 hover:text-ink",
            active === l.id && "border-primary text-primary",
          )}
        >
          {l.label}
        </a>
      ))}
    </nav>
  );
}
