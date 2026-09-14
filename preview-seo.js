import { readFileSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { createServer } from "http";

const __dirname = dirname(fileURLToPath(import.meta.url));
const dist = join(__dirname, "dist");
const PORT = process.env.PORT || 4173;

const MIME = {
  ".html": "text/html",
  ".js": "application/javascript",
  ".css": "text/css",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".avif": "image/avif",
  ".webp": "image/webp",
  ".json": "application/json",
  ".woff2": "font/woff2",
};

createServer((req, res) => {
  let url = req.url.split("?")[0];
  if (url === "/") url = "/index.html";

  // Try route-specific HTML (e.g., /about → dist/about/index.html)
  if (!url.includes(".")) {
    const routeHtml = join(dist, url, "index.html");
    if (existsSync(routeHtml)) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(readFileSync(routeHtml));
      return;
    }
  }

  // Try exact file (e.g., /assets/js/main.js)
  const filePath = join(dist, url);
  if (existsSync(filePath)) {
    const ext = filePath.substring(filePath.lastIndexOf("."));
    res.writeHead(200, { "Content-Type": MIME[ext] || "application/octet-stream" });
    res.end(readFileSync(filePath));
    return;
  }

  // SPA fallback: serve the route-specific HTML if it exists, else root index.html
  const routeHtml = join(dist, url, "index.html");
  if (existsSync(routeHtml)) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(readFileSync(routeHtml));
  } else {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(readFileSync(join(dist, "index.html")));
  }
}).listen(PORT, () => {
  console.log(`\n  SEO Preview: http://localhost:${PORT}`);
  console.log(`  Try: curl -s http://localhost:${PORT}/about | head -8\n`);
});