import Link from "next/link";
import { Shell } from "@/components/layout/shell";
import { Columns } from "@/components/sections/columns";
import { PageHead, PageLede } from "@/components/sections/page-head";
import { pageMetadata, site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Contact",
  description: "Write to hello@aicotx.com. Three paragraphs beat a deck. We reply within two business days.",
  path: "/contact/",
  ogDescription: "Write to hello@aicotx.com. Three paragraphs beat a deck.",
});

export default function ContactPage() {
  return (
    <>
      <PageHead kicker={<>Contact · <em>a plain email</em></>}>
        <Columns layout="seal">
          <div>
            <h1 className="max-w-[18ch] text-headline">Three paragraphs beat a deck.</h1>
            <PageLede>
              There is no form, no calendar link, and no qualification funnel. A considered email, read by a person, answered by a person.
            </PageLede>
            <a
              href={`mailto:${site.email}`}
              className="my-[clamp(24px,4vw,40px)] inline-block text-[clamp(24px,3.6vw,44px)] tracking-[-0.035em] break-all text-primary no-underline transition-colors duration-150 hover:text-rust-deep"
            >
              {site.email}
            </a>
          </div>
        </Columns>
      </PageHead>

      <Shell className="pb-[clamp(56px,8vw,110px)]">
        <Columns className="mt-[clamp(32px,5vw,56px)]">
          <div className="prose-site">
            <h3 className="label-caps mb-3">What to write</h3>
            <p>
              Tell us how work actually gets done at your company today — what tools people reach for, where the hours go, what everyone quietly complains about, and what prompted the email. If you already suspect where you sit on <Link href="/ladder/">the ladder</Link>, say so; if not, that’s our job.
            </p>
          </div>
          <div className="prose-site">
            <h3 className="label-caps mb-3">What to expect</h3>
            <p>
              A reply within two business days, from an engineer, with a real opinion in it — where we’d place you, what one rung up would look like, and whether it’s worth either of our time. If we’re not the right firm for the problem, we’ll say that too.
            </p>
          </div>
        </Columns>
      </Shell>
    </>
  );
}
