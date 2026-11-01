import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

/* ─────────────────────────────────────────────
   SCROLL REVEAL HOOK
───────────────────────────────────────────── */
export function useReveal(cls = "srv-visible") {
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && e.target.classList.add(cls)),
      { threshold: 0.08 },
    );
    const el = ref.current;
    if (el)
      el.querySelectorAll(".srv-reveal").forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, [cls]);
  return ref;
}

/* ─────────────────────────────────────────────
   BASE STYLES injected once - Solomon design system
───────────────────────────────────────────── */
export const BASE_STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500;600;700&family=Oswald:wght@400;500;600;700&family=Roboto+Slab:wght@400;500;600;700&display=swap');

  /* ── CSS variables: light mode defaults ── */
  :root {
    --srv-text-primary: #1a1a1a;
    --srv-text-body: #6b7280;
    --srv-text-muted: #4b5563;
    --srv-bg-page: #ffffff;
    --srv-bg-card: #ffffff;
    --srv-bg-alt: #f2f2f2;
    --srv-border: #e3e6eb;
    --srv-border-faq: #e3e6eb;
    --srv-faq-border-open: rgba(32,66,118,0.45);
    --srv-hero-bg: linear-gradient(rgba(15,32,60,0.82), rgba(20,42,78,0.78));
    --srv-badge-bg: rgba(43,123,185,0.12);
    --srv-checklist-color: #4b5563;
    --srv-country-tag-bg: #ffffff;
    --srv-country-tag-border: rgba(32,66,118,0.25);
    --srv-country-tag-color: #204276;
    --srv-icon-bg-opacity: 15;
  }

  /* ── CSS variables: dark mode overrides ── */
  .dark {
    --srv-text-primary: #f1f1f1;
    --srv-text-body: #9ca3af;
    --srv-text-muted: #9ca3af;
    --srv-bg-page: #0d1626;
    --srv-bg-card: #13203a;
    --srv-bg-alt: #0a1220;
    --srv-border: rgba(255,255,255,0.08);
    --srv-border-faq: rgba(255,255,255,0.08);
    --srv-faq-border-open: rgba(127,178,221,0.45);
    --srv-hero-bg: linear-gradient(rgba(10,20,38,0.9), rgba(13,26,48,0.88));
    --srv-badge-bg: rgba(127,178,221,0.15);
    --srv-checklist-color: #9ca3af;
    --srv-country-tag-bg: #13203a;
    --srv-country-tag-border: rgba(127,178,221,0.3);
    --srv-country-tag-color: #7fb2dd;
  }

  .srv-reveal { opacity:0; transform:translateY(20px); transition:opacity .7s ease,transform .7s ease; }
  .srv-reveal.srv-visible { opacity:1; transform:none; }
  .srv-reveal:nth-child(2){transition-delay:.08s}
  .srv-reveal:nth-child(3){transition-delay:.16s}
  .srv-reveal:nth-child(4){transition-delay:.24s}
  .srv-reveal:nth-child(5){transition-delay:.32s}
  .srv-reveal:nth-child(6){transition-delay:.40s}
  .srv-page { font-family:"IBM Plex Sans",sans-serif; color:var(--srv-text-primary); background:var(--srv-bg-page); }
  .srv-page h1, .srv-page h2, .srv-page h3, .srv-page h4 { font-family:"Roboto Slab",serif; }
  .srv-hero { position:relative; padding:150px 0 64px; min-height:620px; display:flex; align-items:center; overflow:hidden; background-size:cover; background-position:center; }
  .srv-hero > .srv-container { width:100%; }
  .srv-hero::before { content:''; position:absolute; inset:0; background:var(--srv-hero-bg); }
  .srv-hero > * { position:relative; z-index:1; }
  .srv-badge { display:inline-flex; align-items:center; gap:8px; padding:5px 14px; background:var(--srv-badge-bg); color:#7fb2dd; border:1px solid rgba(127,178,221,0.35); font-size:11px; font-weight:600; letter-spacing:.14em; text-transform:uppercase; margin-bottom:20px; font-family:"Oswald",sans-serif; }
  .dark .srv-badge { color:#7fb2dd; }
  .srv-badge-dot { width:6px; height:6px; border-radius:50%; background:#7fb2dd; flex-shrink:0; }
  .srv-h1 { font-size:clamp(34px,4.5vw,56px); font-weight:600; line-height:1.12; color:#ffffff; margin-bottom:20px; font-family:"Roboto Slab",serif; }
  .srv-h1 span { color:#7fb2dd; }
  .srv-lead { font-size:17px; color:rgba(255,255,255,0.88); line-height:1.75; font-weight:300; max-width:580px; }
  .srv-section { padding:88px 0; }
  .srv-section-alt { padding:88px 0; background:var(--srv-bg-alt); }
  .srv-h2 { font-size:clamp(24px,3vw,38px); font-weight:600; color:var(--srv-text-primary); margin-bottom:12px; font-family:"Roboto Slab",serif; }
  .srv-h2 span { color:#204276; }
  .dark .srv-h2 span { color:#7fb2dd; }
  .srv-subtitle { font-size:12px; font-weight:500; letter-spacing:.14em; text-transform:uppercase; color:#2b7bb9; margin-bottom:10px; font-family:"Oswald",sans-serif; }
  .dark .srv-subtitle { color:#7fb2dd; }
  .srv-body { font-size:15px; color:var(--srv-text-body); line-height:1.8; font-weight:300; }
  .srv-container { max-width:1200px; margin:0 auto; padding:0 20px; }
  .srv-cta-btn { display:inline-flex; align-items:center; gap:8px; background:#204276; color:#fff; padding:14px 28px; border-radius:3px; font-weight:700; font-size:15px; text-decoration:none; transition:all .25s; font-family:"Roboto",sans-serif; border:none; cursor:pointer; }
  .srv-cta-btn:hover { background:#000000; transform:translateY(-1px); box-shadow:0 10px 24px -10px rgba(0,0,0,0.5); }
  .srv-cta-btn-ghost { display:inline-flex; align-items:center; gap:8px; background:transparent; color:#204276; padding:14px 28px; border-radius:3px; font-weight:700; font-size:15px; text-decoration:none; transition:all .25s; font-family:"Roboto",sans-serif; border:2px solid rgba(32,66,118,0.4); cursor:pointer; }
  .dark .srv-cta-btn-ghost { color:#7fb2dd; border-color:rgba(127,178,221,0.4); }
  .srv-cta-btn-ghost:hover { background:rgba(32,66,118,0.06); transform:translateY(-2px); }
  .dark .srv-cta-btn-ghost:hover { background:rgba(127,178,221,0.1); }
  .srv-divider { height:1px; background:rgba(32,66,118,0.12); margin:0; }
  .dark .srv-divider { background:rgba(127,178,221,0.15); }
  @media(max-width:768px){ .srv-hero{ padding:120px 0 48px; min-height:460px; } .srv-section,.srv-section-alt{ padding:60px 0; } }
`;

/* ─────────────────────────────────────────────
   PAGE HERO
───────────────────────────────────────────── */
export function PageHero({
  badge,
  title,
  highlight,
  subtitle,
  desc,
  ctaLabel = "Book a Free Consultation",
  ctaLink = "/freeconsulation",
}) {
  return (
    <section className="srv-hero">
      <div
        className="srv-container"
        style={{ position: "relative", zIndex: 1 }}
      >
        <div className="srv-reveal" style={{ maxWidth: 680 }}>
          {badge && (
            <span className="srv-badge">
              <span className="srv-badge-dot" />
              {badge}
            </span>
          )}
          <h1 className="srv-h1">
            {title} <span>{highlight}</span>
            {subtitle ? (
              <>
                <br />
                {subtitle}
              </>
            ) : null}
          </h1>
          <p className="srv-lead" style={{ marginBottom: 32 }}>
            {desc}
          </p>
          <Link to={ctaLink} className="srv-cta-btn">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M8 6l6 6-6 6" />
            </svg>
            {ctaLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   SECTION HEADER (label + h2 + optional body)
───────────────────────────────────────────── */
export function SectionHeader({
  label,
  title,
  highlight,
  body,
  centered = false,
}) {
  return (
    <div
      className={`srv-reveal ${centered ? "text-center" : ""}`}
      style={{
        marginBottom: 48,
        maxWidth: centered ? 680 : 560,
        margin: centered ? "0 auto 48px" : "0 0 48px",
      }}
    >
      <p className="srv-subtitle">{label}</p>
      <h2 className="srv-h2">
        {title} {highlight && <span>{highlight}</span>}
      </h2>
      {centered && <hr className="sol-separator" style={{ marginTop: 14 }} />}
      {body && (
        <p className="srv-body" style={{ marginTop: 12 }}>
          {body}
        </p>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────────
   ICON CARD (service feature card)
───────────────────────────────────────────── */
export function IconCard({
  icon,
  title,
  desc,
  accent = "#204276",
  style = {},
}) {
  const Icon = icon;
  return (
    <div
      className="srv-reveal"
      style={{
        background: "var(--srv-bg-card)",
        border: "1px solid var(--srv-border)",
        borderTop: `3px solid ${accent}`,
        borderRadius: 3,
        padding: "32px 28px",
        transition: "all .25s",
        ...style,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = "0 14px 34px -18px rgba(32,66,118,0.35)";
        e.currentTarget.style.transform = "translateY(-4px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "none";
        e.currentTarget.style.transform = "none";
      }}
    >
      <div
        style={{
          width: 52,
          height: 52,
          background: accent,
          color: "#ffffff",
          borderRadius: 3,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 20,
          fontSize: 24,
        }}
      >
        <Icon size={24} />
      </div>
      <h4
        style={{
          fontWeight: 600,
          fontSize: 16,
          color: "var(--srv-text-primary)",
          marginBottom: 8,
          fontFamily: '"Roboto Slab",serif',
        }}
      >
        {title}
      </h4>
      <p className="srv-body" style={{ fontSize: 14 }}>
        {desc}
      </p>
    </div>
  );
}

/* ─────────────────────────────────────────────
   STEP CARD  (numbered process step)
───────────────────────────────────────────── */
export function StepCard({ step, icon, title, desc }) {
  const Icon = icon;
  return (
    <div
      className="srv-reveal"
      style={{
        background: "var(--srv-bg-card)",
        border: "1px solid var(--srv-border)",
        borderRadius: 3,
        padding: "32px 28px",
        position: "relative",
        transition: "all .25s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = "0 14px 34px -18px rgba(32,66,118,0.35)";
        e.currentTarget.style.transform = "translateY(-4px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "none";
        e.currentTarget.style.transform = "none";
      }}
    >
      <div
        style={{
          position: "absolute",
          top: -14,
          left: 20,
          width: 36,
          height: 36,
          background: "#204276",
          color: "#fff",
          borderRadius: 3,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: 600,
          fontSize: 15,
          fontFamily: '"Oswald",sans-serif',
        }}
      >
        {step}
      </div>
      <div style={{ marginTop: 8 }}>
        <span style={{ display: "block", marginBottom: 12, color: "#204276" }}>
          <Icon size={28} />
        </span>
        <h4
          style={{
            fontWeight: 600,
            fontSize: 15,
            color: "var(--srv-text-primary)",
            marginBottom: 8,
            fontFamily: '"Roboto Slab",serif',
          }}
        >
          {title}
        </h4>
        <p className="srv-body" style={{ fontSize: 14 }}>
          {desc}
        </p>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   FAQ ACCORDION
───────────────────────────────────────────── */
export function FAQ({ items }) {
  const [open, setOpen] = useState(null);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      {items.map((item, i) => (
        <div
          key={i}
          className="srv-reveal"
          style={{
            border: `1px solid ${open === i ? "var(--srv-faq-border-open)" : "var(--srv-border-faq)"}`,
            borderRadius: 3,
            overflow: "hidden",
            transition: "border .2s",
            background: "var(--srv-bg-card)",
          }}
        >
          <button
            onClick={() => setOpen(open === i ? null : i)}
            style={{
              width: "100%",
              padding: "20px 24px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              background: "none",
              border: "none",
              cursor: "pointer",
              textAlign: "left",
              gap: 16,
            }}
          >
            <span
              style={{
                fontWeight: 600,
                fontSize: 15,
                color: "var(--srv-text-primary)",
                fontFamily: '"Roboto Slab",serif',
                lineHeight: 1.4,
              }}
            >
              {item.q}
            </span>
            <span
              style={{
                fontSize: 20,
                color: "#204276",
                flexShrink: 0,
                transform: open === i ? "rotate(45deg)" : "none",
                transition: "transform .2s",
                fontWeight: 300,
              }}
            >
              +
            </span>
          </button>
          {open === i && (
            <div style={{ padding: "0 24px 20px" }}>
              <p className="srv-body" style={{ fontSize: 14 }}>
                {item.a}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────
   STATS STRIP
───────────────────────────────────────────── */
export function StatsStrip({ stats }) {
  return (
    <section style={{ background: "linear-gradient(135deg,#0f203c 0%,#16325c 100%)", padding: "56px 0" }}>
      <div className="srv-container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${stats.length},1fr)`,
            gap: 0,
          }}
        >
          {stats.map((s, i) => (
            <div
              key={i}
              className="srv-reveal"
              style={{
                textAlign: "center",
                borderRight:
                  i < stats.length - 1
                    ? "1px solid rgba(255,255,255,0.15)"
                    : "none",
                padding: "0 20px",
              }}
            >
              <p
                style={{
                  fontSize: 44,
                  fontWeight: 600,
                  color: "#fff",
                  fontFamily: '"Oswald",sans-serif',
                  lineHeight: 1,
                }}
              >
                {s.value}
              </p>
              <p
                style={{
                  fontSize: 12,
                  color: "rgba(255,255,255,0.75)",
                  textTransform: "uppercase",
                  letterSpacing: ".12em",
                  marginTop: 8,
                  fontFamily: '"Oswald",sans-serif',
                  fontWeight: 500,
                }}
              >
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   CTA BANNER (full-width bottom section)
───────────────────────────────────────────── */
export function CtaBanner({
  title,
  desc,
  label = "Book a Free Consultation",
  link = "/freeconsulation",
}) {
  return (
    <section
      style={{
        padding: "80px 0",
        background: "linear-gradient(135deg,#204276 0%,#0f203c 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: -80,
          right: -80,
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: "rgba(255,255,255,0.04)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: -60,
          left: -60,
          width: 300,
          height: 300,
          borderRadius: "50%",
          background: "rgba(255,255,255,0.03)",
        }}
      />
      <div
        className="srv-container"
        style={{ position: "relative", zIndex: 1, textAlign: "center" }}
      >
        <div className="srv-reveal">
          <h2
            style={{
              fontSize: 36,
              fontWeight: 600,
              color: "#fff",
              fontFamily: '"Roboto Slab",serif',
              marginBottom: 14,
              lineHeight: 1.15,
            }}
          >
            {title}
          </h2>
          <p
            style={{
              fontSize: 16,
              color: "rgba(255,255,255,0.8)",
              marginBottom: 32,
              fontWeight: 300,
              maxWidth: 520,
              margin: "0 auto 32px",
              fontFamily: '"IBM Plex Sans",sans-serif',
            }}
          >
            {desc}
          </p>
          <Link
            to={link}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "#ffffff",
              color: "#204276",
              padding: "14px 32px",
              borderRadius: 3,
              fontWeight: 700,
              fontSize: 15,
              textDecoration: "none",
              transition: "all .25s",
              fontFamily: '"Roboto",sans-serif',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#000000";
              e.currentTarget.style.color = "#ffffff";
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 8px 28px rgba(0,0,0,0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#ffffff";
              e.currentTarget.style.color = "#204276";
              e.currentTarget.style.transform = "none";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            {label} →
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   CHECK LIST (bullet list with checkmarks)
───────────────────────────────────────────── */
export function CheckList({ items, columns = 1 }) {
  return (
    <ul
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${columns},1fr)`,
        gap: "10px 24px",
        listStyle: "none",
        padding: 0,
        margin: 0,
      }}
    >
      {items.map((item, i) => (
        <li
          key={i}
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: 10,
            fontSize: 14,
            color: "var(--srv-checklist-color)",
            fontFamily: '"IBM Plex Sans",sans-serif',
            fontWeight: 400,
          }}
        >
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: "#204276",
              flexShrink: 0,
              marginTop: 7,
            }}
          />
          {item}
        </li>
      ))}
    </ul>
  );
}

/* ─────────────────────────────────────────────
   INFO BOX (highlight card with icon)
───────────────────────────────────────────── */
export function InfoBox({ icon: Icon, title, children, variant = "blue" }) {
  const isDark =
    typeof document !== "undefined" &&
    document.documentElement.classList.contains("dark");

  const variants = {
    blue: {
      bg: isDark ? "rgba(32,66,118,0.3)" : "rgba(32,66,118,0.05)",
      border: isDark ? "rgba(127,178,221,0.3)" : "rgba(32,66,118,0.2)",
      title: isDark ? "#7fb2dd" : "#204276",
    },
    green: {
      bg: isDark ? "rgba(43,123,185,0.18)" : "rgba(43,123,185,0.05)",
      border: isDark ? "rgba(43,123,185,0.3)" : "rgba(43,123,185,0.15)",
      title: isDark ? "#7fb2dd" : "#2b7bb9",
    },
    amber: {
      bg: isDark ? "rgba(43,123,185,0.15)" : "rgba(43,123,185,0.06)",
      border: isDark ? "rgba(43,123,185,0.3)" : "rgba(43,123,185,0.2)",
      title: isDark ? "#7fb2dd" : "#16325c",
    },
  };

  const v = variants[variant];

  return (
    <div
      className="srv-reveal"
      style={{
        background: v.bg,
        border: `1px solid ${v.border}`,
        borderRadius: 3,
        padding: "28px 32px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          marginBottom: 14,
        }}
      >
        {Icon && <Icon size={24} color={v.title} />}

        <h4
          style={{
            fontWeight: 600,
            fontSize: 16,
            color: v.title,
            fontFamily: '"Roboto Slab",serif',
            textDecoration: "underline",
            textUnderlineOffset: 4,
            textDecorationColor: v.title,
            textDecorationThickness: 2,
          }}
        >
          {title}
        </h4>
      </div>

      {children}
    </div>
  );
}

/* ─────────────────────────────────────────────
   COUNTRY TAG LIST
───────────────────────────────────────────── */
export function CountryTags({ countries }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
      {countries.map((c, i) => (
        <span
          key={i}
          style={{
            padding: "7px 16px",
            borderRadius: 3,
            background: "var(--srv-country-tag-bg)",
            border: "1px solid var(--srv-country-tag-border)",
            fontSize: 13,
            fontWeight: 600,
            color: "var(--srv-country-tag-color, #204276)",
            fontFamily: '"Oswald",sans-serif',
            letterSpacing: ".03em",
          }}
        >
          {c.flag} {c.name}
        </span>
      ))}
    </div>
  );
}
