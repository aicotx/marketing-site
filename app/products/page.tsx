import { ClearanceConsole } from "@/components/figures/diagrams";
import { FigureCard } from "@/components/figures/figure-card";
import { MiniFig } from "@/components/figures/mini-fig";
import { Band } from "@/components/sections/band";
import { PageHead, PageLede } from "@/components/sections/page-head";
import { Section, SectionHead, SectionTitle } from "@/components/sections/section";
import { pageMetadata, site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Products",
  description: "Software the firm builds and operates. First entry: Clearance — retrieval over SharePoint, Google Drive, and Document360 that respects every document's existing permissions.",
  path: "/products/",
  ogDescription: "Instruments of the practice. Clearance: permission-aware retrieval over your document stores.",
});

export default function ProductsPage() {
  return (
    <>
      <PageHead kicker={<>Products · <em>instruments of the practice</em></>} title="Software we run before we sell.">
        <PageLede>
          The engagements described elsewhere on this site run on infrastructure the firm builds and operates for itself. When a piece of it proves sturdy enough to stand outside any single engagement, it becomes a product and appears here — after it works, not before.
        </PageLede>
      </PageHead>

      <Section id="clearance">
        <SectionHead num="01" title="Clearance" />
        <SectionTitle>Retrieval that respects your permissions.</SectionTitle>

        <div className="grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)] items-start gap-[clamp(28px,4.5vw,72px)] max-[860px]:grid-cols-1">
          <div className="prose-site max-w-[68ch]">
            <p>
              Every company that connects an AI assistant to its document stores discovers the same uncomfortable fact: the assistant does not inherit the permissions. Retrieval systems work by copying documents — SharePoint sites, shared drives, knowledge bases — into a search index, and the index is shared. Ask it the right question and it will quote the compensation spreadsheet to an engineer, or the reorg draft to the people it concerns, even though neither could open the original. The access control your IT department spent years maintaining simply does not make the trip.
            </p>
            <p>
              Clearance makes the trip mandatory. It crawls your documents <em>and their access lists together</em>, and every question is answered inside the asker&apos;s actual permissions — the search itself never scores a document the asker cannot open. Groups, nested groups, domain shares, and public links resolve exactly as the source systems define them.
            </p>
            <p>
              Permissions also change, and an index is always slightly behind. So before any passage reaches an answer, Clearance re-checks it against the source of record. Revoke someone&apos;s access at nine o&apos;clock and their nine-o&apos;-one question comes back empty — no waiting for the next crawl. Every answer cites its sources by link, and the links land on the originals, where your existing access control has the final word.
            </p>
          </div>
          <div>
            <FigureCard
              title="One question, two clearances"
              tag="query console · illustrative"
              note="Same corpus, same question. Each reader's answer is assembled only from documents that reader can open; the rest are never even scored."
            >
              <MiniFig className="px-1.5 py-2.5">
                <ClearanceConsole />
              </MiniFig>
            </FigureCard>
          </div>
        </div>

        <div className="mt-[clamp(28px,4vw,48px)]">
          <p className="label-caps mb-3">What it does</p>
          <ul className="ruled-list">
            <li>Connects to SharePoint, Google Drive, and Document360; further stores by engagement</li>
            <li>Crawls documents and access lists together — users, nested groups, domain and public shares</li>
            <li>Answers every question strictly inside the asker&apos;s permissions, with cited sources</li>
            <li>Re-verifies against the source of record before answering, so revocation is immediate</li>
            <li>
              A management console: connector health, per-document access, and an identity inspector showing exactly what any given person can reach — with side-by-side comparison of what two readers get from the same question
            </li>
          </ul>
        </div>
      </Section>

      <Band
        kicker={<>Clearance · <em>see it refuse</em></>}
        title="The best demo is the answer it won't give."
        cta={{ href: `mailto:${site.email}?subject=Clearance%20demonstration`, label: site.email }}
      >
        Ask for a walkthrough and we&apos;ll show you the same question asked by two employees — one cleared, one not — and then revoke the clearance while you watch. If your retrieval vendor can&apos;t show you that, ask them why.
      </Band>
    </>
  );
}
