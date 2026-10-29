// Plan step 0: capture reference screenshots + button computed styles from a base URL.
//   node scripts/reference-shots.mjs https://aicotx.com docs/reference
//   node scripts/reference-shots.mjs http://localhost:3000 docs/reference-next
import { chromium } from "playwright";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const base = (process.argv[2] ?? "https://aicotx.com").replace(/\/$/, "");
const outDir = process.argv[3] ?? "docs/reference";
const routes = ["/", "/approach/", "/services/", "/products/", "/ladder/", "/contact/"];
const viewports = { desktop: { width: 1440, height: 900 }, phone: { width: 390, height: 844 } };
const buttonSelectors = [".btn-dark", ".site-nav a.nav-contact", ".band a.mail"];
const styleProps = [
  "font-family", "font-size", "font-weight", "line-height", "letter-spacing",
  "padding", "border-radius", "background-color", "color", "border",
];

await mkdir(outDir, { recursive: true });
const browser = await chromium.launch();
const styles = {};

for (const [vpName, viewport] of Object.entries(viewports)) {
  const page = await browser.newPage({ viewport, deviceScaleFactor: 2, reducedMotion: "reduce" });
  for (const route of routes) {
    const url = base + route;
    await page.goto(url, { waitUntil: "networkidle" });
    await page.evaluate(() => document.fonts.ready);
    // force reveal animations to their final state so full-page shots are complete
    await page.addStyleTag({ content: ".reveal, .ladder-figure { opacity: 1 !important; transform: none !important; }" });
    const slug = route === "/" ? "home" : route.replaceAll("/", "");
    await page.screenshot({ path: path.join(outDir, `${slug}-${vpName}.png`), fullPage: true });
    if (vpName === "desktop") {
      for (const sel of buttonSelectors) {
        const el = page.locator(sel).first();
        if ((await el.count()) === 0) continue;
        const computed = await el.evaluate((node, props) => {
          const cs = getComputedStyle(node);
          return Object.fromEntries(props.map((p) => [p, cs.getPropertyValue(p)]));
        }, styleProps);
        const box = await el.boundingBox();
        styles[`${route} ${sel}`] = { ...computed, box };
      }
    }
    console.log(`captured ${slug} @ ${vpName}`);
  }
  await page.close();
}

await browser.close();
await writeFile(path.join(outDir, "button-styles.json"), JSON.stringify(styles, null, 2));
console.log(`wrote ${outDir}/button-styles.json`);
