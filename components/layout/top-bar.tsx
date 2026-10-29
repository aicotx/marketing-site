import Link from "next/link";

export function TopBar() {
  return (
    <div className="relative z-[41] flex flex-wrap items-center justify-center gap-x-4 gap-y-2 bg-secondary bg-dots px-gutter py-3 text-[13.5px] text-white">
      <span>Where does your company sit on the AI maturity ladder?</span>
      <Link
        href="/ladder/"
        className="rounded-full border border-white/45 px-4 py-[5px] text-white no-underline transition-[border-color,background] duration-150 hover:border-white hover:bg-white/8"
      >
        Read the methodology &gt;
      </Link>
    </div>
  );
}
