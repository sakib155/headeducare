import { Link } from "react-router-dom";
import { Compass } from "lucide-react";

/**
 * 404 — Catch-all page for any unmatched URL.
 * Rendered by the `path="*"` route in App.jsx. server.cjs also serves this
 * page (pre-rendered as dist/pages/404.html) with a real HTTP 404 status.
 * Page title + noindex are handled by AutoSeo via props from App.jsx.
 */
export default function NotFound() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-white">
        {/* Soft radial glow behind the graphic — matches the site's blob decor */}
        <div
          className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[640px] h-[640px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(32,66,118,0.07) 0%, transparent 70%)" }}
        />

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Icon badge — navy square, consistent with section icon boxes */}
          <div className="mx-auto mb-10 w-20 h-20 bg-[#204276] flex items-center justify-center text-white shadow-lg">
            <Compass className="w-10 h-10" />
          </div>

          {/* Oversized status code */}
          <p
            className="text-7xl sm:text-8xl font-bold leading-none tracking-tight text-[#204276] select-none"
            style={{ fontFamily: '"Roboto Slab", serif' }}
          >
            404
          </p>
          <p className="sol-eyebrow text-sm mt-5">Error 404 · Page Not Found</p>

          <h1 className="mt-4 text-3xl sm:text-4xl font-semibold text-[#1a1a1a]">
            Oops! This page took a detour.
          </h1>
          <p className="mt-5 text-gray-500 text-lg leading-relaxed max-w-xl mx-auto">
            The link may be broken, outdated, or the address might be mistyped.
            Let&apos;s get you back on track toward your global journey.
          </p>

          {/* CTAs — primary (solid navy) + secondary (brand outline) */}
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/" className="sol-btn justify-center text-lg">
              Back to Homepage
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 border-2 border-[#204276] text-[#204276] px-8 font-bold text-lg hover:bg-[#204276] hover:text-white transition-colors dark:border-[#7fb2dd] dark:text-[#7fb2dd] dark:hover:bg-[#7fb2dd] dark:hover:text-[#0f203c]"
              style={{ fontFamily: '"Roboto", "Lexend", sans-serif', borderRadius: 3 }}
            >
              Explore Our Services
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>

          {/* Direct contact fallback */}
          <p className="mt-10 text-sm text-gray-500">
            Need help right away? Call us at{" "}
            <a
              href="tel:+8801910833888"
              className="font-bold text-[#204276] hover:underline"
            >
              +8801910 833 888
            </a>{" "}
            or{" "}
            <Link
              to="/freeconsulation#consultation-form"
              className="font-bold text-[#204276] hover:underline"
            >
              book a free consultation
            </Link>
            .
          </p>
        </div>
      </section>
  );
}
