import { routesLookup } from "./src/data/seoMeta";

function esc(s) {
  return String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

export default function seoDevPlugin() {
  return {
    name: "seo-dev",
    transformIndexHtml: {
      order: "pre",
      handler(html, ctx) {
        const url = ctx?.originalUrl || ctx?.path || ctx?.filename || "";
        const cleanPath = url.replace(/\/$/, "") || "/";
        const meta = routesLookup[cleanPath];
        if (!meta) { console.log("[SEO-DEV] no meta for", cleanPath); return html; }
        console.log("[SEO-DEV] meta for", cleanPath, "hasSchema:", !!meta.schema, "schemaType:", meta.schema?.["@type"] || meta.schema?.type);

        let result = html.replace(/<title>.*?<\/title>/, `<title>${esc(meta.title)}</title>`);

        // Replace or insert description
        const desc = meta.name?.description || "";
        const descTag = `<meta name="description" content="${esc(desc)}" />`;
        if (/<meta name="description"/.test(result)) {
          result = result.replace(/<meta name="description" content="[^"]*"\s*\/?>/g, descTag);
        }

        // Collect all SEO tags
        const tags = [];
        tags.push(descTag);

        if (meta.name) {
          Object.entries(meta.name).filter(([k]) => k !== "description").forEach(([k, v]) => {
            if (v) tags.push(`<meta name="${esc(k)}" content="${esc(v)}" />`);
          });
        }
        if (meta.property) {
          Object.entries(meta.property).forEach(([k, v]) => {
            if (v) tags.push(`<meta property="${esc(k)}" content="${esc(v)}" />`);
          });
        }
        if (meta.canonical) {
          tags.push(`<link rel="canonical" href="${esc(meta.canonical)}" />`);
        }
        if (meta.schema) {
          const schemas = Array.isArray(meta.schema) ? meta.schema : [meta.schema];
          schemas.forEach((s) => {
            tags.push(`<script type="application/ld+json">${JSON.stringify(s)}</script>`);
          });
        }

        // Remove existing meta tags that we'll re-inject, then inject all after viewport
        const removePatterns = [
          /<meta name="description"[^>]*\/?>/g,
          /<meta name="keywords"[^>]*\/?>/g,
          /<meta name="author"[^>]*\/?>/g,
          /<meta name="robots"[^>]*\/?>/g,
          /<meta property="og:[^>]*\/?>/g,
          /<meta name="twitter:[^>]*\/?>/g,
          /<meta name="theme-color"[^>]*\/?>/g,
          /<link rel="canonical"[^>]*\/?>/g,
          /<script type="application\/ld\+json">.*?<\/script>/gs,
        ];
        removePatterns.forEach((p) => { result = result.replace(p, ""); });

        const viewport = '<meta name="viewport" content="width=device-width, initial-scale=1.0" />';
        const insert = viewport + "\n    " + tags.join("\n    ");
        result = result.replace(viewport, insert);

        return result;
      },
    },
  };
}