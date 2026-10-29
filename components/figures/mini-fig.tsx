import { cn } from "@/lib/utils";

/** Wrapper for the small inline-SVG diagrams. Child SVG uses the mini-fig stroke classes from globals.css. */
export function MiniFig({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("mini-fig leading-none", className)} {...props} />;
}
