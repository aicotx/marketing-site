import { Seal } from "@/components/brand/seal";
import { cn } from "@/lib/utils";

const layouts = {
  /* two equal columns */
  split: "grid-cols-2 items-start gap-[clamp(28px,4.5vw,72px)]",
  /* content beside the firm seal */
  seal: "grid-cols-[minmax(0,1fr)_240px] items-center gap-[clamp(32px,5vw,88px)]",
};

/** Two-column grid that stacks below `md`. The `seal` layout renders the seal as the second column. */
export function Columns({
  layout = "split",
  className,
  children,
  ...props
}: React.ComponentProps<"div"> & { layout?: keyof typeof layouts }) {
  return (
    <div className={cn("grid max-md:grid-cols-1", layouts[layout], className)} {...props}>
      {children}
      {layout === "seal" && <Seal className="block w-full max-md:max-w-[200px]" />}
    </div>
  );
}
