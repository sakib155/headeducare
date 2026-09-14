#!/usr/bin/env node
import { readFileSync, writeFileSync, mkdirSync, unlinkSync, readdirSync, statSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const dist = join(__dirname, "..", "dist");

const { routeMeta } = await import("../src/data/seoMeta.js");

const indexHtml = readFileSync(join(dist, "index.html"), "utf-8");

// Remove any previously generated route subfolders first
for (const entry of readdirSync(dist, { withFileTypes: true })) {
  if (entry.isDirectory() && entry.name !== "assets") {
    const indexPath = join(dist, entry.name, "index.html");
    try {
      unlinkSync(indexPath);
      rmdirSync(join(dist, entry.name));
    } catch {}
  }
}

for (const meta of routeMeta) {
  if (meta.path === "/") continue; // root index.html already exists

  const filename = meta.path.replace(/^\//, "").replace(/\//g, "-") + ".html";
  const outputPath = join(dist, filename);

  const html = indexHtml
    .replace(/<title>.*?<\/title>/, `<title>${meta.title}</title>`)
    .replace(
      /<meta name="description" content="[^"]*"/,
      `<meta name="description" content="${meta.name.description}"`
    );

  writeFileSync(outputPath, html);
  console.log(`  ✓ ${meta.path} → ${filename}`);
}

console.log(`\n✅ Generated ${routeMeta.length - 1} SEO HTML files in dist/`);