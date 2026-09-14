#!/usr/bin/env node
import { readFileSync, writeFileSync, copyFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const dist = join(__dirname, "..", "dist");

const { routeMeta } = await import("../src/data/seoMeta.js");

const indexHtml = readFileSync(join(dist, "index.html"), "utf-8");

for (const meta of routeMeta) {
  if (meta.path === "/") continue;
  const filename = meta.path.replace(/^\//, "").replace(/\//g, "-") + ".html";
  const html = indexHtml
    .replace(/<title>.*?<\/title>/, `<title>${meta.title}</title>`)
    .replace(
      /<meta name="description" content="[^"]*"/,
      `<meta name="description" content="${meta.name.description}"`
    );
  writeFileSync(join(dist, filename), html);
  console.log(`  ✓ ${meta.path} → ${filename}`);
}

// Copy index.html as 404.html for SPA fallback on unknown routes
copyFileSync(join(dist, "index.html"), join(dist, "404.html"));
console.log(`  ✓ 404.html → SPA fallback`);

console.log(`\n✅ Generated ${routeMeta.length - 1} SEO HTML files + 404.html in dist/`);