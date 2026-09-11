// Temporary token + typography smoke test; replaced by the real home page in plan step 5.
export default function Home() {
  return (
    <main className="max-w-shell mx-auto px-gutter py-16 flex-1">
      <p className="kicker border-b border-border pb-3.5 mb-8" data-t="kicker">
        Typography · <em>smoke test</em>
      </p>
      <h1 className="text-display max-w-[17ch]" data-t="display">Most AI initiatives die of teleportation.</h1>
      <h1 className="text-headline max-w-[18ch] mt-8" data-t="headline">Three paragraphs beat a deck.</h1>
      <h2 className="text-title max-w-[24ch] mt-8" data-t="title">A ladder with six rungs, sold one at a time.</h2>
      <h2 className="text-band max-w-[18ch] mt-8" data-t="band">Where does your company sit?</h2>
      <h2 className="text-subtitle mt-8" data-t="subtitle">L2 · Sanctioned tools</h2>
      <h2 className="text-essay mt-8" data-t="essay">Why one rung at a time</h2>
      <h3 className="text-entry font-medium mt-8" data-t="entry">Maturity audit</h3>
      <p className="text-lede text-muted-foreground mt-8 max-w-[40ch]" data-t="lede">A company that has barely sanctioned its first chatbot buys a story about <strong className="font-medium">autonomous agent swarms</strong>.</p>
      <p className="text-page-lede mt-8 max-w-[60ch]" data-t="page-lede">There is no form, no calendar link, and no qualification funnel.</p>
      <div className="prose-site mt-8 max-w-[68ch]" data-t="prose">
        <p>The failure is rarely the technology. <strong>It is the distance</strong> between where a company is and where the story says it should be. See <a href="#">the ladder</a>.</p>
        <p>Second paragraph to check rhythm.</p>
      </div>
      <p className="label-caps mt-8" data-t="label">What to write</p>
      <p className="font-mono text-[11.5px] tracking-[-0.02em] text-muted-foreground mt-8" data-t="fig-tag">audit deliverable · illustrative</p>
      <p className="font-seal text-xl text-rust-deep mt-8">CINZEL SEAL TEXT · MMXXVI</p>
      <div className="mt-8 flex gap-3">
        <a className="rounded-full bg-secondary text-secondary-foreground px-8 py-3.5 text-[17px] font-medium leading-none hover:bg-espresso-hover" href="#">Get in touch</a>
        <a className="rounded-full bg-primary text-primary-foreground px-6 py-2.5 text-[14.5px] font-medium hover:bg-rust-deep" href="#">Contact</a>
      </div>
    </main>
  );
}
