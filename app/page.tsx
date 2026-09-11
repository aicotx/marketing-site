// Temporary component smoke test; replaced by the real home page in plan step 5.
import { Seal } from "@/components/brand/seal";
import { FigureCard } from "@/components/figures/figure-card";
import { Heatmap } from "@/components/figures/heatmap";
import { Band } from "@/components/sections/band";
import { PageHead, PageLede } from "@/components/sections/page-head";
import { Section, SectionHead, SectionTitle } from "@/components/sections/section";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <PageHead kicker={<>Contact · <em>a plain email</em></>} title="Three paragraphs beat a deck.">
        <PageLede>There is no form, no calendar link, and no qualification funnel. A considered email, read by a person, answered by a person.</PageLede>
        <div className="mt-8 flex gap-3">
          <Button variant="dark" size="pill" nativeButton={false} render={<a href="#" data-t="btn-dark" />}>Get in touch</Button>
        </div>
      </PageHead>
      <Section>
        <SectionHead num="01" title="The Ladder" link={{ href: "/ladder/", label: "Read the full methodology →" }} />
        <SectionTitle>Six levels. Every company is on one of them.</SectionTitle>
        <div className="prose-site max-w-[68ch]">
          <p>“AI transformation” is a category, not a plan. A maturity ladder converts it into a <strong>diagnosis and a prescription</strong>. See <a href="#">the ladder</a>.</p>
        </div>
      </Section>
      <Section>
        <SectionHead num="06" title="The firm" />
        <div className="grid grid-cols-[minmax(0,1fr)_240px] items-center gap-[clamp(32px,5vw,88px)] max-[820px]:grid-cols-1">
          <FigureCard title="Maturity heatmap" tag="audit deliverable · illustrative" note="Function × level. The prescription is always the next rung, never the top." className="max-w-[560px]">
            <Heatmap />
          </FigureCard>
          <Seal className="block w-full max-[820px]:max-w-[200px]" />
        </div>
      </Section>
      <Band kicker={<>Begin · <em>no cost</em></>} title="Find your level." cta={{ href: "mailto:hello@aicotx.com", label: "hello@aicotx.com" }}>
        Write to us with a paragraph about how work actually gets done at your company today. We’ll reply with where we’d place you on the ladder and what one rung up would look like. That reply costs nothing.
      </Band>
    </>
  );
}
