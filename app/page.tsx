// Temporary token smoke test; replaced by the real home page in plan step 5.
export default function Home() {
  return (
    <main className="max-w-shell mx-auto px-gutter py-16 flex-1">
      <p className="font-mono text-muted-foreground border-b border-border pb-3">
        tokens · <span className="text-primary">smoke test</span>
      </p>
      <h1 className="mt-8 text-6xl text-ink tracking-tight">Instrument Sans, ink.</h1>
      <p className="mt-4 font-seal text-xl text-rust-deep">CINZEL SEAL TEXT · MMXXVI</p>
      <div className="mt-8 flex gap-3 flex-wrap">
        {["bg-background", "bg-muted", "bg-cream-deep", "bg-accent", "bg-primary", "bg-rust-deep", "bg-rust-bright", "bg-gold", "bg-secondary", "bg-espresso-hover", "bg-espresso-soft", "bg-card"].map((c) => (
          <div key={c} className={`${c} w-24 h-16 rounded-lg border border-border font-mono text-[10px] p-1`}>{c}</div>
        ))}
      </div>
      <div className="mt-8 flex gap-3">
        <a className="rounded-full bg-secondary text-secondary-foreground px-8 py-3.5 text-[17px] font-medium leading-none hover:bg-espresso-hover" href="#">Get in touch</a>
        <a className="rounded-full bg-primary text-primary-foreground px-6 py-2.5 text-[14.5px] font-medium hover:bg-rust-deep" href="#">Contact</a>
      </div>
    </main>
  );
}
