import Image from 'next/image';
import { cn } from '@/lib/utils';
import logo from '@/public/assets/img/logo.png';

const layouts = {
  /* two equal columns */
  split: 'grid-cols-2 items-start gap-[clamp(28px,5vw,88px)]',
  /* content beside the firm seal */
  seal: 'grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)] items-center gap-[clamp(32px,5vw,88px)]',
};

/** Two-column grid that stacks below `md`. The `seal` layout adds the logo on a gray panel as the second column (hidden on phones, where it would only repeat the header mark). */
export function Columns({
  layout = 'split',
  className,
  children,
  ...props
}: React.ComponentProps<'div'> & { layout?: keyof typeof layouts }) {
  return (
    <div
      className={cn('grid max-md:grid-cols-1', layouts[layout], className)}
      {...props}
    >
      {children}
      {layout === 'seal' && (
        <div className="grid aspect-[3/2] place-items-center rounded-2xl bg-muted max-md:hidden">
          <Image
            src={logo}
            alt=""
            sizes="200px"
            className="h-auto w-[clamp(110px,14vw,190px)] dark:invert"
          />
        </div>
      )}
    </div>
  );
}
