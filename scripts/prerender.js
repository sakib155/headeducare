#!/usr/bin/env node
// ─────────────────────────────────────────────────────────────────────────────
// Pre-renderer: builds dist/, then loads every route in headless Chrome and
// saves the FULLY RENDERED HTML (body content baked in) to dist/pages/.
// Output is served by server.cjs (cPanel Node.js app) so "View Page Source"
// contains real content instead of <div id="root"></div>.
// Requires local Chrome; on macOS it is auto-detected, or set
// PUPPETEER_EXECUTABLE_PATH. Run: npm run build:full
// ─────────────────────────────────────────────────────────────────────────────
import { mkdirSync, writeFileSync, rmSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const express = require("express");
const puppeteer = require("puppeteer-core");

const __dirname = dirname(fileURLToPath(import.meta.url));
const dist = join(__dirname, "..", "dist");
const PORT = 4173;

const { routeMeta } = await import("../src/data/seoMeta.js");
const { countriesFallback } = await import("../src/pages/country/countriesFallback.js");

// ── Route list (same sources as build-seo.js) ───────────────────────────────
const routes = routeMeta.map((m) => m.path);
for (const c of countriesFallback) {
  const slug = c.slug || String(c.country || "").toLowerCase();
  if (slug && !routes.includes(`/destination/${slug}`)) routes.push(`/destination/${slug}`);
}
for (const s of ["china", "malaysia", "hungary"]) {
  if (!routes.includes(`/study-mbbs/${s}`)) routes.push(`/study-mbbs/${s}`);
}

// ── Static server for dist/ (what Passenger will do in production) ──────────
const app = express();
app.use(express.static(dist, { index: false }));
app.get("*", (_req, res) => res.sendFile(join(dist, "index.html")));
const server = app.listen(PORT);

// ── Headless Chrome ──────────────────────────────────────────────────────────
const CHROME_PATHS = [
  process.env.PUPPETEER_EXECUTABLE_PATH,
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/Applications/Chromium.app/Contents/MacOS/Chromium",
].filter(Boolean);
const executablePath = CHROME_PATHS.find((p) => {
  try { return require("fs").existsSync(p); } catch { return false; }
});
if (!executablePath) {
  console.error("✗ Chrome not found. Install Google Chrome or set PUPPETEER_EXECUTABLE_PATH.");
  server.close();
  process.exit(1);
}

const browser = await puppeteer.launch({
  executablePath,
  headless: true,
  args: ["--no-sandbox", "--disable-dev-shm-usage"],
});
const page = await browser.newPage();
await page.setViewport({ width: 1366, height: 900 });
page.on("pageerror", (err) => console.log(`  [js] ${err.message.split("\n")[0]}`));

// ── Render every route ───────────────────────────────────────────────────────
const outDir = join(dist, "pages");
rmSync(outDir, { recursive: true, force: true });
mkdirSync(outDir, { recursive: true });
const slug = (p) => (p === "/" ? "index.html" : p.replace(/^\//, "").replace(/\//g, "-") + ".html");
const manifest = {};
let failed = 0;

// ── SEO enforcement (same data as build-seo.js) ─────────────────────────────
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const SITE = "https://headeducare.com";
const metaForRoute = (route) => {
  const m = routeMeta.find((r) => r.path === route);
  if (m) {
    return { title: m.title, desc: m.name?.description || "", canonical: m.canonical || SITE + route };
  }
  return null;
};
// Dynamic fallbacks (destinations + MBBS), mirroring build-seo.js
const dynamicMeta = (route) => {
  let m = route.match(/^\/destination\/([a-z0-9-]+)$/i);
  if (m) {
    const label = m[1].replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
    return {
      title: `Study in ${label} | Head Educare`,
      desc: `Explore universities, tuition fees, intake periods, visa requirements, post-study work options and scholarships for studying in ${label} with Head Educare.`,
      canonical: SITE + route,
    };
  }
  m = route.match(/^\/study-mbbs\/([a-z0-9-]+)$/i);
  if (m) {
    const label = m[1].charAt(0).toUpperCase() + m[1].slice(1);
    return {
      title: `Study MBBS in ${label} | Head Educare`,
      desc: `Study MBBS in ${label} with Head Educare - BM&DC-approved universities, affordable tuition, and complete admission support.`,
      canonical: SITE + route,
    };
  }
  return null;
};
function enforceMeta(html, meta) {
  let out = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(meta.title)}</title>`);
  const viewport = /<meta name="viewport"[^>]*>/.exec(out)?.[0];
  if (meta.desc) {
    if (/<meta name="description" content="[^"]*"/.test(out)) {
      out = out.replace(/<meta name="description" content="[^"]*"/, `<meta name="description" content="${esc(meta.desc)}"`);
    } else if (viewport) {
      out = out.replace(viewport, viewport + `\n    <meta name="description" content="${esc(meta.desc)}" />`);
    }
  }
  if (meta.canonical) {
    if (/<link rel="canonical"[^>]*>/.test(out)) {
      out = out.replace(/<link rel="canonical" href="[^"]*"/, `<link rel="canonical" href="${esc(meta.canonical)}"`);
    } else if (viewport) {
      out = out.replace(viewport, viewport + `\n    <link rel="canonical" href="${esc(meta.canonical)}" />`);
    }
  }
  return out;
}
const seoFor = (route) => metaForRoute(route) || dynamicMeta(route);

for (const route of routes) {
  try {
    await page.goto(`http://127.0.0.1:${PORT}${route}`, { waitUntil: "networkidle2", timeout: 60000 });
    await page.waitForFunction(() => (document.querySelector("#root")?.childElementCount ?? 0) > 0, { timeout: 30000 });
    await new Promise((r) => setTimeout(r, 700)); // let data fetch / helmet settle
    const html = await page.content();
    const seo = seoFor(route);
    const finalHtml = seo ? enforceMeta(html, seo) : html;
    writeFileSync(join(outDir, slug(route)), finalHtml);
    manifest[route] = slug(route);
    console.log(`  ✓ ${route}`);
  } catch (e) {
    failed++;
    console.log(`  ✗ ${route} — ${e.message.split("\n")[0]}`);
  }
}

// ── 404 page (unknown routes) ────────────────────────────────────────────────
try {
  await page.goto(`http://127.0.0.1:${PORT}/route-that-does-not-exist`, { waitUntil: "networkidle2", timeout: 60000 });
  await page.waitForFunction(() => (document.querySelector("#root")?.childElementCount ?? 0) > 0, { timeout: 30000 });
  await new Promise((r) => setTimeout(r, 700));
  writeFileSync(join(outDir, "404.html"), await page.content());
  console.log("  ✓ 404 fallback");
} catch (e) {
  console.log(`  ✗ 404 fallback — ${e.message.split("\n")[0]}`);
}

writeFileSync(join(outDir, "manifest.json"), JSON.stringify(manifest, null, 2));
await browser.close();
server.close();

console.log(`\n✅ Prerendered ${Object.keys(manifest).length}/${routes.length} routes → dist/pages/`);
if (failed > 0) {
  console.log(`⚠ ${failed} route(s) failed — fix above errors before deploying.`);
  process.exitCode = 1;
}
