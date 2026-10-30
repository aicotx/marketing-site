/**
 * Renders a JSON-LD structured-data block. The payload is trusted, first-party
 * data built in lib/seo.ts — never anything a visitor supplies — so serialising
 * it into a script tag is safe.
 */
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
