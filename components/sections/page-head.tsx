import { Shell } from "@/components/layout/shell";
import { Kicker } from "@/components/sections/kicker";
import { cn } from "@/lib/utils";

/** Interior page opener: kicker, h1, then whatever lede content the page needs. */
export function PageHead({
  kicker,
  title,
  children,
  className,
}: {
  kicker: React.ReactNode;
  title?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <Shell className={cn("pt-[clamp(48px,7vw,100px)] pb-[clamp(32px,5vw,64px)]", className)}>
      <Kicker>{kicker}</Kicker>
      {title && <h1 className="max-w-[18ch] text-headline">{title}</h1>}
      {children}
    </Shell>
  );
}

export function PageLede({ className, ...props }: React.ComponentProps<"p">) {
  return <p className={cn("mt-[clamp(20px,3vw,32px)] max-w-[60ch] text-page-lede", className)} {...props} />;
}
