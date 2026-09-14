#!/usr/bin/env node
import { readFileSync, writeFileSync, copyFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const dist = join(__dirname, "..", "dist");

const { routeMeta } = await import("../src/data/seoMeta.js");

const indexHtml = readFileSync(join(dist, "index.html"), "utf-8");

function injectTags(html, meta) {
  const desc = meta.name?.description || "";
  const keywords = meta.name?.keywords || "";
  const canonical = meta.canonical || "";
  const siteUrl = "https://headedu.com";
  const ogImage = `${siteUrl}/og-image.jpg`;
  const fullTitle = meta.title || "";

  // Build all extra tags
  const tags = [
    `    <meta name="description" content="${desc.replace(/"/g, "&quot;")}" />`,
    keywords ? `    <meta name="keywords" content="${keywords.replace(/"/g, "&quot;")}" />` : "",
    `    <meta name="author" content="Head Educare" />`,
    `    <meta name="robots" content="index, follow" />`,
    canonical ? `    <link rel="canonical" href="${canonical}" />` : "",
    `    <meta property="og:type" content="website" />`,
    canonical ? `    <meta property="og:url" content="${canonical}" />` : "",
    `    <meta property="og:title" content="${fullTitle.replace(/"/g, "&quot;")}" />`,
    `    <meta property="og:description" content="${desc.replace(/"/g, "&quot;")}" />`,
    `    <meta property="og:image" content="${ogImage}" />`,
    `    <meta property="og:image:width" content="1200" />`,
    `    <meta property="og:image:height" content="630" />`,
    `    <meta property="og:site_name" content="Head Educare" />`,
    `    <meta name="twitter:card" content="summary_large_image" />`,
    `    <meta name="twitter:title" content="${fullTitle.replace(/"/g, "&quot;")}" />`,
    `    <meta name="twitter:description" content="${desc.replace(/"/g, "&quot;")}" />`,
  ].filter(Boolean).join("\n");

  // Schema
  const schemaTags = [];
  if (meta.schema) {
    const schemas = Array.isArray(meta.schema) ? meta.schema : [meta.schema];
    schemas.forEach((s) => {
      schemaTags.push(`    <script type="application/ld+json">${JSON.stringify(s)}</script>`);
    });
  }

  let result = html
    .replace(/<title>.*?<\/title>/, `<title>${fullTitle}</title>`);

  // Remove old description tag
  result = result.replace(/<meta name="description"[^>]*\/?>\s*\n?/, "");
  // Remove old theme-color & og tags to avoid duplicates
  result = result.replace(/<meta property="og:[^>]*\/?>\s*\n?/g, "");
  result = result.replace(/<link rel="canonical"[^>]*\/?>\s*\n?/g, "");

  // Inject tags after viewport
  const viewport = '<meta name="viewport" content="width=device-width, initial-scale=1.0" />';
  const insertAfter = viewport + "\n" + tags;
  if (schemaTags.length) {
    result = result.replace(viewport, insertAfter + "\n" + schemaTags.join("\n"));
  } else {
    result = result.replace(viewport, insertAfter);
  }

  return result;
}

for (const meta of routeMeta) {
  const filename = meta.path === "/" ? "index.html" : meta.path.replace(/^\//, "").replace(/\//g, "-") + ".html";
  const html = injectTags(indexHtml, meta);
  writeFileSync(join(dist, filename), html);
  console.log(`  ✓ ${meta.path} → ${filename}`);
}

// Copy index.html as 404.html for SPA fallback
copyFileSync(join(dist, "index.html"), join(dist, "404.html"));
console.log(`  ✓ 404.html → SPA fallback`);

console.log(`\n✅ Generated ${routeMeta.length} SEO HTML files + 404.html in dist/`);