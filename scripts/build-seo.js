#!/usr/bin/env node
import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const dist = join(__dirname, "..", "dist");

const { routeMeta, siteConfig } = await import("../src/data/seoMeta.js");

const indexHtml = readFileSync(join(dist, "index.html"), "utf-8");

for (const meta of routeMeta) {
  let html = indexHtml
    .replace(/<title>.*?<\/title>/, `<title>${meta.title}</title>`)
    .replace(
      /<meta name="description" content="[^"]*"/,
      `<meta name="description" content="${meta.name.description}"`
    );

  const folder = join(dist, meta.path === "/" ? "" : meta.path);
  mkdirSync(folder, { recursive: true });
  writeFileSync(join(folder, "index.html"), html);
  console.log(`  ✓ ${meta.path} → ${meta.title}`);
}

console.log(`\n✅ Generated SEO HTML for ${routeMeta.length} routes`);