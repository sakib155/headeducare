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
// Lazy-load + hot-reload the manifest: re-read whenever the file's mtime
// changes, so FTP content deploys take effect without restarting the app.
let manifestCache = null;
let manifestMtime = 0;
function getManifest() {
  try {
    const m = fs.statSync(MANIFEST).mtimeMs;
    if (m !== manifestMtime) {
      manifestCache = JSON.parse(fs.readFileSync(MANIFEST, "utf8"));
      manifestMtime = m;
      console.log(`Manifest reloaded (${Object.keys(manifestCache).length} pages)`);
    }
  } catch (e) {
    /* keep the previous manifest on transient read errors */
  }
  return manifestCache || {};
}

const app = express();
app.disable("x-powered-by");

// Force HTTPS when the proxy explicitly reports plain http (loop-safe)
app.use((req, res, next) => {
  const proto = String(req.headers["x-forwarded-proto"] || "").split(",")[0].trim();
  if (proto === "http") {
    return res.redirect(301, "https://" + req.headers.host + req.originalUrl);
  }
  next();
});

// Never serve PHP files from Node — Apache/Passenger executes them from public/api.
// If they ever reach Node (host-specific), block instead of leaking source code.
app.all(/^\/api\//, (_req, res) => res.status(503).json({ error: "PHP API unavailable" }));

// Static assets (hashed bundles are immutable)
app.use("/assets", express.static(path.join(PUBLIC, "assets"), { immutable: true, maxAge: "30d" }));
app.use(express.static(PUBLIC, { index: false, maxAge: "1d" }));

// /contact retired — permanent redirect to the consultation page
app.get(["/contact", "/contact/"], (req, res) => res.redirect(301, "/freeconsulation#consultation-form"));

// Pre-rendered pages — full content in the HTML source
app.get("*", (req, res) => {
  const route = req.path.replace(/\/+$/, "") || "/";
  const manifest = getManifest();
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
  console.log(`Server running on port ${PORT} (${Object.keys(getManifest()).length} prerendered pages)`);
});
