# Dynamic SEO System Architecture — Click Digim Platform

## Overview

Three PHP-based websites (cd-frontend, cd-blog, cd-whistleblower) share an identical SEO architecture pattern: **PHP SSR (Server-Side Rendering) + SPA Enhancement**. There is no React, Next.js, Vue, or build step. Every page is rendered server-side on each request, then optionally enhanced by a vanilla JS SPA layer for soft navigation.

```
                         ┌─────────────────────────────┐
                         │     Browser / Crawler        │
                         │  (Full Page Load | SPA Nav)  │
                         └──────────┬──────────────────┘
                                    │
                         ┌──────────▼──────────────────┐
                         │       .htaccess Rewrites      │
                         │  Root → public/              │
                         │  Non-file → index.php        │
                         └──────────┬──────────────────┘
                                    │
                         ┌──────────▼──────────────────┐
                         │   Front Controller           │
                         │   public/index.php           │
                         │                              │
                         │   1. Sitemap route? → API    │
                         │   2. Legacy 301 redirects    │
                         │   3. Route → page file       │
                         │   4. Execute page (ob_start) │
                         │   5. Extract #page-meta JSON │
                         │   6. SPA? → raw fragment     │
                         │   7. Full? → layout/page.php │
                         └──────┬───────────────────────┘
                                │
                 ┌──────────────┼──────────────┐
                 │              │              │
        ┌────────▼────┐  ┌─────▼──────┐  ┌───▼────────┐
        │ pages/      │  │ pages/     │  │ pages/     │
        │ home.php    │  │ post.php   │  │ about.php  │
        │             │  │            │  │            │
        │ Meta block  │  │ Dynamic    │  │ Static     │
        │ JSON inside │  │ API-driven │  │ meta block │
        └─────────────┘  │ meta block │  └────────────┘
                          └────────────┘
                                │
                    ┌───────────▼────────────┐
                    │  layout/page.php        │
                    │  Master HTML Shell      │
                    │                         │
                    │  <title>                │
                    │  <link canonical>       │
                    │  <meta name="">*        │
                    │  <meta property="">*    │
                    │  <script ld+json>       │
                    │  <link preload>         │
                    │  GA / reCAPTCHA         │
                    └───────┬─────────────────┘
                            │
                    ┌───────▼─────────────────┐
                    │  spa.js (deferred)       │
                    │  Intercepts .spa-link    │
                    │  X-SPA-Request fetch     │
                    │  updateMeta():           │
                    │    - document.title      │
                    │    - meta name=""        │
                    │    - meta property=""    │
                    │    - script ld+json      │
                    └─────────────────────────┘
```

## Core Components (in order of execution)

### 1. Routing Layer — `.htaccess`

**Files:**

- `/.htaccess` — Rewrites all requests into `public/`, blocks `lib/|pages/|layout/|config/|logs/`
- `/public/.htaccess` — Front controller: non-file/non-directory → `/index.php`

### 2. Front Controller — `public/index.php`

The central router that handles every request. Responsibilities:

| Responsibility           | Description                                                      |
| ------------------------ | ---------------------------------------------------------------- |
| **Sitemap Proxy**        | If `$path === '/sitemap.xml'`, cURL to backend API, return XML   |
| **301 Legacy Redirects** | Map old URLs to new (preserve link equity)                       |
| **Route Resolution**     | Map path to page file in `pages/`                                |
| **Page Execution**       | `ob_start()` + `require $pageFile` + `ob_get_clean()`            |
| **Meta Extraction**      | Regex `#page-meta` JSON from page output                         |
| **Layout Rendering**     | Non-SPA → strip meta JSON, pass `$pageMeta` to `layout/page.php` |
| **SPA Response**         | SPA requests → return raw fragment (no layout)                   |

### 3. Per-Page Meta Block — `pages/*.php`

Every page file embeds a JSON script tag. The meta block contains:

```html
<script type="application/json" id="page-meta">
  {
    "title": "Page Title | Site Name",
    "canonical": "https://example.com/page-path",
    "name": {
      "title": "Page Title",
      "description": "Meta description, 150-160 chars",
      "keywords": "keyword1, keyword2",
      "author": "Author Name",
      "robots": "index, follow",
      "twitter:card": "summary_large_image",
      "twitter:title": "...",
      "twitter:description": "...",
      "twitter:image": "https://...",
      "twitter:site": "@handle",
      "google-site-verification": "...",
      "p:domain_verify": "...",
      "content-language": "en"
    },
    "property": {
      "og:type": "website | article",
      "og:url": "https://...",
      "og:title": "...",
      "og:description": "...",
      "og:image": "https://...",
      "og:image:width": "1200",
      "og:image:height": "630",
      "og:author": "...",
      "og:site_name": "...",
      "article:published_time": "2026-01-01T00:00:00Z",
      "article:author": "...",
      "article:section": "..."
    },
    "schema": {
      /* JSON-LD object, see below */
    },
    "nav": "none" /* optional: hides global navbar */
  }
</script>
```

**For dynamic pages (posts, products):** The meta block is generated with PHP variables from API responses. Example from post pages:

```php
$metaDesc = mb_strimwidth(trim(preg_replace('/\s+/', ' ', $post['body'])), 0, 157, '...');
?>
<script type="application/json" id="page-meta">
{
    "title": <?= json_encode($post['title'] . ' | Site Name', JSON_UNESCAPED_SLASHES) ?>,
    "canonical": <?= json_encode('https://.../' . $slug, JSON_UNESCAPED_SLASHES) ?>,
    "name": {
        "description": <?= json_encode($metaDesc, JSON_UNESCAPED_SLASHES) ?>,
        "author": <?= json_encode($post['author'], JSON_UNESCAPED_SLASHES) ?>,
        "robots": "index, follow"
    },
    "property": {
        "og:type": "article",
        "og:url": <?= json_encode('https://.../' . $slug, JSON_UNESCAPED_SLASHES) ?>,
        "og:title": <?= json_encode($post['title'], JSON_UNESCAPED_SLASHES) ?>,
        "og:description": <?= json_encode($metaDesc, JSON_UNESCAPED_SLASHES) ?>
    },
    "schema": {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": <?= json_encode($post['title'], JSON_UNESCAPED_SLASHES) ?>,
        "description": <?= json_encode($metaDesc, JSON_UNESCAPED_SLASHES) ?>,
        "datePublished": <?= json_encode($post['created_at'], JSON_UNESCAPED_SLASHES) ?>,
        "author": { "@type": "Person", "name": <?= json_encode($post['author'], JSON_UNESCAPED_SLASHES) ?> },
        "publisher": { "@type": "Organization", "name": "Site Name", "url": "https://..." },
        "image": <?= json_encode($post['image'], JSON_UNESCAPED_SLASHES) ?>,
        "url": <?= json_encode('https://.../' . $slug, JSON_UNESCAPED_SLASHES) ?>
    }
}
</script>
```

### 4. Master Layout — `layout/page.php`

The HTML shell that renders all SEO tags server-side from `$pageMeta`:

```php
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" type="image/png" href="/favicon.png">

    <!-- Title -->
    <title><?= htmlspecialchars($pageMeta['title'] ?? 'Default Title', ENT_QUOTES) ?></title>

    <!-- Canonical -->
    <?php if (!empty($pageMeta['canonical'])): ?>
    <link rel="canonical" href="<?= htmlspecialchars($pageMeta['canonical'], ENT_QUOTES) ?>">
    <?php endif; ?>

    <!-- Standard Meta Tags (name=) -->
    <?php foreach ($pageMeta['name'] ?? [] as $k => $v): ?>
    <meta name="<?= htmlspecialchars($k, ENT_QUOTES) ?>" content="<?= htmlspecialchars($v, ENT_QUOTES) ?>">
    <?php endforeach; ?>

    <!-- Open Graph / Property Meta Tags (property=) -->
    <?php foreach ($pageMeta['property'] ?? [] as $k => $v): ?>
    <meta property="<?= htmlspecialchars($k, ENT_QUOTES) ?>" content="<?= htmlspecialchars($v, ENT_QUOTES) ?>">
    <?php endforeach; ?>

    <!-- JSON-LD Structured Data -->
    <?php if (!empty($pageMeta['schema'])): ?>
    <script type="application/ld+json"><?= json_encode($pageMeta['schema'], JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE) ?></script>
    <?php endif; ?>

    <!-- Static SEO elements -->
    <meta name="theme-color" content="#f1af1d">
    <link rel="preload" as="image" fetchpriority="high" href="/assets/navbar-bg.webp">
    <link rel="alternate" type="application/rss+xml" title="RSS Feed" href="/feed.xml">

    <!-- Google Analytics (production only) -->
    <script> /* gtag.js init with GA4 + Ads IDs */ </script>
</head>
```

### 5. SPA Client-Side Meta Updater — `public/spa.js`

Applied after the SSR page loads. Intercepts `.spa-link` clicks and updates the DOM without full reload.

```javascript
(function () {
  "use strict";

  function updateMeta(container) {
    var metaEl = container.querySelector("#page-meta");
    if (!metaEl) return;
    var meta;
    try {
      meta = JSON.parse(metaEl.textContent);
    } catch (e) {
      return;
    }

    // 1. Update <title>
    if (meta.title) document.title = meta.title;

    // 2. Update/create <meta name="">
    if (meta.name) {
      Object.keys(meta.name).forEach(function (key) {
        var el = document.querySelector('meta[name="' + key + '"]');
        if (!el) {
          el = document.createElement("meta");
          el.setAttribute("name", key);
          document.head.appendChild(el);
        }
        el.setAttribute("content", meta.name[key]);
      });
    }

    // 3. Update/create <meta property=""> (OG, Twitter, etc.)
    if (meta.property) {
      Object.keys(meta.property).forEach(function (key) {
        var el = document.querySelector('meta[property="' + key + '"]');
        if (!el) {
          el = document.createElement("meta");
          el.setAttribute("property", key);
          document.head.appendChild(el);
        }
        el.setAttribute("content", meta.property[key]);
      });
    }

    // 4. Replace JSON-LD schema
    if (meta.schema) {
      document
        .querySelectorAll('script[type="application/ld+json"]')
        .forEach(function (el) {
          el.remove();
        });
      var schemaEl = document.createElement("script");
      schemaEl.setAttribute("type", "application/ld+json");
      schemaEl.textContent = JSON.stringify(meta.schema);
      document.head.appendChild(schemaEl);
    }
  }

  function navigate(url, pushToHistory) {
    fetch(url, { headers: { "X-SPA-Request": "true" } })
      .then(function (r) {
        return r.text();
      })
      .then(function (html) {
        document.getElementById("content").innerHTML = html;
        var tmp = document.createElement("div");
        tmp.innerHTML = html;
        updateMeta(tmp); // <-- SEO update from fragment
        if (pushToHistory !== false)
          window.history.pushState({ url: url }, "", url);
        window.scrollTo(0, 0);
      })
      .catch(function () {
        window.location.href = url;
      });
  }

  // Intercept .spa-link clicks
  document.addEventListener("click", function (e) {
    var link = e.target.closest("a.spa-link");
    if (!link || link.hostname !== window.location.hostname) return;
    e.preventDefault();
    if (link.href !== window.location.href) navigate(link.href);
  });

  // Handle browser back/forward
  window.addEventListener("popstate", function () {
    navigate(window.location.href, false);
  });

  // Init: apply meta from initial content
  updateMeta(document.getElementById("content"));
})();
```

### 6. Special SEO Routes

| Route            | Handler                    | Description                                          |
| ---------------- | -------------------------- | ---------------------------------------------------- |
| `/sitemap.xml`   | `index.php` (early return) | Proxies to backend API with `X-API-Key`, returns XML |
| `/feed.xml`      | `pages/feed.php`           | Dynamic RSS feed from API                            |
| `/robots.txt`    | Static file                | AI/GEO-aware: allow search, block training           |
| `/llms.txt`      | Static file                | LLM/GEO discovery                                    |
| `/llms-full.txt` | Static file                | Full LLM site brief                                  |

### 7. SEO Static/Filesystem Assets

| File                | Purpose                                                                                   |
| ------------------- | ----------------------------------------------------------------------------------------- |
| `sitemap_index.xml` | Sitemap index pointing to 3 subsite sitemaps                                              |
| `robots.txt`        | 3-tier bot policy (allow all / allow AI search / block training) + Content-Signals header |
| `og-image.jpg`      | Default Open Graph image (1200×630)                                                       |
| `favicon.png`       | Favicon                                                                                   |

## JSON-LD Schema Types Used

| Schema Type                | Used On                   | Fields                                                                                |
| -------------------------- | ------------------------- | ------------------------------------------------------------------------------------- |
| `Organization`             | Homepage                  | name, url, logo, sameAs (social profiles), areaServed                                 |
| `WebSite`                  | Homepage                  | name, url, publisher                                                                  |
| `WebPage`                  | Homepage, About, etc.     | name, description, author, publisher, isPartOf                                        |
| `BlogPosting`              | Blog posts                | headline, description, datePublished, author, publisher, image, articleSection, video |
| `ProfilePage`              | Author page               | mainEntity → Person (full bio, offers, sameAs, knowsAbout)                            |
| `CollectionPage`           | Category archive          | name, url, description                                                                |
| `FAQPage`                  | White-label, Talk & Write | mainEntity → Question/Answer pairs                                                    |
| `DiscussionForumPosting`   | Whistleblower posts       | headline, description, author, publisher, url                                         |
| `VideoObject`              | Homepage, Blog posts      | name, description, thumbnailUrl, contentUrl, embedUrl, uploadDate, duration           |
| `Service` + `OfferCatalog` | Homepage                  | name, provider, areaServed, hasOfferCatalog → ItemList                                |
| `WebApplication`           | Sandbox                   | name, description, featureList, potentialAction → ConsumeAction                       |
| `SoftwareApplication`      | Sandbox                   | name, operatingSystem, applicationCategory                                            |
| `Person`                   | Author, Multiple          | name, jobTitle, url, image, sameAs, knowsAbout, makesOffer                            |
| `Product`                  | (implicit via Service)    | —                                                                                     |

## Request Flow Diagram

```
                   Full Page Load                          SPA Navigation
                   ──────────────                          ──────────────
Client:            GET /page                                Click .spa-link
                   │                                        │
Server (index.php) │                                        │
                   │                                        │
  Route → page     │                                        │
  Execute page     │                                        │
  Extract meta     │                                        │
                   │                                        │
  SPA request?     │ NO                                     │ YES
                   │                                        │
  ┌──────────────┐ │                                        │
  │ layout/page  │◄┘                                        │
  │ → Full HTML   │                                         │
  │ + SSR meta    │                                         │
  └──────┬───────┘                                          │
         │                                                  │
Client:  │ Full HTML with <head> meta                       │  fetch(/page, {X-SPA-Request})
         │ <title>, canonical, meta*, og*, ld+json           │  ← HTML fragment (no <head>)
         │                                                  │
         │ spa.js loads (deferred)                          │  spa.js extract #page-meta
         │ → intercepts future clicks                       │  → updateMeta():
         │ → runs updateMeta() on initial content            │    · document.title
         │                                                  │    · <meta name="">
         │ SSR SEO visible to crawlers ✓                    │    · <meta property="">
                                                             │    · <script ld+json>
                                                             │
                                                             │ SEO updated client-side ✓
```

## Implementation Blueprint (How to Replicate in Another Website)

### Step 1: Directory Structure

```
project/
├── .htaccess                 # Rewrite to public/, block internals
├── layout/
│   └── page.php              # Master HTML shell (SSR meta tags)
├── lib/                      # Server-side libraries
├── pages/                    # Page files with meta blocks
│   ├── home.php
│   ├── post.php
│   └── ...
└── public/
    ├── .htaccess             # Front controller rewrite
    ├── index.php             # Router + SSR handler
    ├── spa.js                # SPA client-side meta updater
    ├── robots.txt            # Bot policy (AI/GEO aware)
    ├── sitemap.xml           # Static or dynamic sitemap
    ├── og-image.jpg          # Default OG image (1200×630)
    └── favicon.png
```

### Step 2: Front Controller (`public/index.php`) — Core Logic

```php
// 1. Route sitemap
if ($path === '/sitemap.xml') { /* cURL to API, return XML */ exit; }

// 2. Handle 301 redirects for legacy URLs
// 3. Map route to page file
$pages = ['/' => __DIR__ . '/../pages/home.php', ...];
$pageFile = $pages[$path] ?? null;

// 4. Execute page with output buffering
ob_start();
require $pageFile;
$pageContent = ob_get_clean();

// 5. Extract meta JSON
$pageMeta = [];
if (preg_match('/<script type="application\/json" id="page-meta">(.+?)<\/script>/s', $pageContent, $m)) {
    $pageMeta = json_decode(trim($m[1]), true) ?? [];
}

// 6. SPA request → raw fragment. Full → layout wrapper.
if ($isSpaRequest) {
    echo $pageContent;
} else {
    $pageContent = preg_replace('/<script type="application\/json" id="page-meta">.+?<\/script>/s', '', $pageContent);
    require __DIR__ . '/../layout/page.php';
}
```

### Step 3: Master Layout (`layout/page.php`) — Meta Rendering

Copy the layout template above (Section 4). All meta tags are rendered from `$pageMeta`.

### Step 4: Per-Page Meta — Embed JSON in Each Page

```html
<script type="application/json" id="page-meta">
  {
    /* title, canonical, name, property, schema */
  }
</script>
```

### Step 5: SPA Enhancement (`public/spa.js`) — Copy as-is

### Step 6: Static SEO Files

- `robots.txt` — Copy with your domain
- `sitemap.xml` — Static or dynamic via API proxy
- `og-image.jpg` — Default 1200×630 social image
- `favicon.png`

### Step 7: Backend API Contract

For dynamic pages (posts, products), your page file needs to fetch data from an API:

```
GET /api/posts/{slug}
Response: { title, body, excerpt, author, image, created_at, category, youtube_ids[] }
```

### Key Differences Between the Three Sites

| Feature              | cd-frontend                                                                                               | cd-blog                                                               | cd-whistleblower                      |
| -------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- | ------------------------------------- |
| **Pages**            | Home, About, White-label, Contact, Privacy, Terms, Affiliates, Sandbox, Security, Checkout, Estimate, Pay | Home, Post, Author, Category, About, Talk & Write, Checkout, Pay, 404 | Home, Post, Verify Identity           |
| **Sitemap**          | Static `sitemap.xml` + `sitemap_index.xml`                                                                | Dynamic (API proxy)                                                   | Dynamic (API proxy) + static fallback |
| **Twitter Cards**    | Yes (homepage)                                                                                            | Yes (homepage, post, author)                                          | No                                    |
| **LLM/GEO files**    | `llms.txt`, `llms-full.txt`                                                                               | No                                                                    | No                                    |
| **RSS Feed**         | `/feed.xml`                                                                                               | No                                                                    | No                                    |
| **Rich JSON-LD**     | Organization, WebSite, Service, VideoObject, FAQPage                                                      | BlogPosting, ProfilePage, CollectionPage, FAQPage, VideoObject        | DiscussionForumPosting                |
| **Most Complex SEO** | Homepage                                                                                                  | Post page + Author page                                               | Post page                             |

## HTTP Cache & Performance for SEO

- **No static generation** — every page is SSR on request
- **LCP preload** — `<link rel="preload" as="image" fetchpriority="high">` for above-fold hero image
- **CSS** — Compiled Tailwind (`app.css`), inlined in `<head>`
- **JS** — `defer` attribute on all scripts (non-blocking)
- **Fonts** — `preconnect` + `display=swap`
- **Canonical domain** — www→non-www 301 redirect, HTTP→HTTPS redirect
