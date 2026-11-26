// ─────────────────────────────────────────────────────────────────────────────
// HEAD EDUCARE — Express server for cPanel (Phusion Passenger)
// Serves pre-rendered full HTML pages (dist/pages) + static assets, with SPA
// fallback. Upload layout on the server:
//   ~/nodejsapp/server.cjs      ← startup file
//   ~/nodejsapp/package.json
//   ~/nodejsapp/public/         ← contents of dist/
// ─────────────────────────────────────────────────────────────────────────────
const path = require("path");
const fs = require("fs");
const express = require("express");

const PUBLIC = path.join(__dirname, "public");
const PAGES = path.join(PUBLIC, "pages");
const MANIFEST = path.join(PAGES, "manifest.json");

if (!fs.existsSync(MANIFEST)) {
  console.error("Missing public/pages/manifest.json — run `npm run build:full` locally and re-upload.");
}
const manifest = fs.existsSync(MANIFEST) ? JSON.parse(fs.readFileSync(MANIFEST, "utf8")) : {};

const app = express();
app.disable("x-powered-by");

// Never serve PHP files from Node — Apache/Passenger executes them from public/api.
// If they ever reach Node (host-specific), block instead of leaking source code.
app.all(/^\/api\//, (_req, res) => res.status(503).json({ error: "PHP API unavailable" }));

// Static assets (hashed bundles are immutable)
app.use("/assets", express.static(path.join(PUBLIC, "assets"), { immutable: true, maxAge: "30d" }));
app.use(express.static(PUBLIC, { index: false, maxAge: "1d" }));

// Pre-rendered pages — full content in the HTML source
app.get("*", (req, res) => {
  const route = req.path.replace(/\/+$/, "") || "/";
  const file = manifest[route];
  if (file && fs.existsSync(path.join(PAGES, file))) {
    return res.sendFile(path.join(PAGES, file));
  }
  const notFound = path.join(PAGES, "404.html");
  if (fs.existsSync(notFound)) return res.status(404).sendFile(notFound);
  res.status(404).send("404 — build with `npm run build:full` and upload public/pages/");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} (${Object.keys(manifest).length} prerendered pages)`);
});
