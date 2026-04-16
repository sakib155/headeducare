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
   BASE STYLES injected once
───────────────────────────────────────────── */
export const BASE_STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;600;700;900&display=swap');

  /* ── CSS variables: light mode defaults ── */
  :root {
    --srv-text-primary: #0d121b;
    --srv-text-body: #6b7280;
    --srv-text-muted: #4b5563;
    --srv-bg-page: #ffffff;
    --srv-bg-card: #ffffff;
    --srv-bg-alt: #f6f6f8;
    --srv-border: rgba(0,0,0,0.06);
    --srv-border-faq: rgba(0,0,0,0.07);
    --srv-faq-border-open: rgba(0,91,143,0.25);
    --srv-hero-bg: linear-gradient(135deg,rgba(0,91,143,0.06) 0%,rgba(74,131,243,0.04) 100%);
    --srv-badge-bg: rgba(0,91,143,0.1);
    --srv-checklist-color: #4b5563;
    --srv-country-tag-bg: #ffffff;
    --srv-country-tag-border: rgba(0,91,143,0.15);
    --srv-country-tag-color: #005B8F;
    --srv-icon-bg-opacity: 15;
  }

  /* ── CSS variables: dark mode overrides ── */
  .dark {
    --srv-text-primary: #f1f1f1;
    --srv-text-body: #9ca3af;
    --srv-text-muted: #9ca3af;
    --srv-bg-page: #01091c;
    --srv-bg-card: #0d1f35;
    --srv-bg-alt: #02182a;
    --srv-border: rgba(255,255,255,0.08);
    --srv-border-faq: rgba(255,255,255,0.08);
    --srv-faq-border-open: rgba(74,131,243,0.35);
    --srv-hero-bg: linear-gradient(135deg,rgba(0,91,143,0.12) 0%,rgba(74,131,243,0.08) 100%);
    --srv-badge-bg: rgba(74,131,243,0.15);
    --srv-checklist-color: #9ca3af;
    --srv-country-tag-bg: #0d1f35;
    --srv-country-tag-border: rgba(74,131,243,0.25);
    --srv-country-tag-color: #4A83F3;
  }

  .srv-reveal { opacity:0; transform:translateY(20px); transition:opacity .7s ease,transform .7s ease; }
  .srv-reveal.srv-visible { opacity:1; transform:none; }
  .srv-reveal:nth-child(2){transition-delay:.08s}
  .srv-reveal:nth-child(3){transition-delay:.16s}
  .srv-reveal:nth-child(4){transition-delay:.24s}
  .srv-reveal:nth-child(5){transition-delay:.32s}
  .srv-reveal:nth-child(6){transition-delay:.40s}
  .srv-page { font-family:"Lexend",sans-serif; color:var(--srv-text-primary); background:var(--srv-bg-page); }
  .srv-hero { position:relative; padding:96px 0 80px; overflow:hidden; }
  .srv-hero-bg { position:absolute; inset:0; background:var(--srv-hero-bg); }
  .srv-hero-blob { position:absolute; border-radius:50%; filter:blur(80px); pointer-events:none; }
  .srv-badge { display:inline-flex; align-items:center; gap:8px; padding:5px 14px; border-radius:40px; background:var(--srv-badge-bg); color:#005B8F; font-size:11px; font-weight:700; letter-spacing:.08em; text-transform:uppercase; margin-bottom:20px; }
  .dark .srv-badge { color:#4A83F3; }
  .srv-badge-dot { width:6px; height:6px; border-radius:50%; background:#005B8F; flex-shrink:0; }
  .dark .srv-badge-dot { background:#4A83F3; }
  .srv-h1 { font-size:clamp(36px,5vw,64px); font-weight:900; line-height:1.08; color:var(--srv-text-primary); margin-bottom:20px; font-family:"Lexend",sans-serif; }
  .srv-h1 span { color:#005B8F; }
  .dark .srv-h1 span { color:#4A83F3; }
  .srv-lead { font-size:17px; color:var(--srv-text-body); line-height:1.75; font-weight:300; max-width:580px; }
  .srv-section { padding:88px 0; }
  .srv-section-alt { padding:88px 0; background:var(--srv-bg-alt); }
  .srv-h2 { font-size:clamp(24px,3vw,40px); font-weight:900; color:var(--srv-text-primary); margin-bottom:12px; font-family:"Lexend",sans-serif; }
  .srv-h2 span { color:#005B8F; }
  .dark .srv-h2 span { color:#4A83F3; }
  .srv-subtitle { font-size:11px; font-weight:700; letter-spacing:.1em; text-transform:uppercase; color:#005B8F; margin-bottom:10px; font-family:"Lexend",sans-serif; }
  .dark .srv-subtitle { color:#4A83F3; }
  .srv-body { font-size:15px; color:var(--srv-text-body); line-height:1.8; font-weight:300; }
  .srv-container { max-width:1200px; margin:0 auto; padding:0 20px; }
  .srv-cta-btn { display:inline-flex; align-items:center; gap:8px; background:#005B8F; color:#fff; padding:14px 28px; border-radius:12px; font-weight:700; font-size:15px; text-decoration:none; transition:all .2s; font-family:"Lexend",sans-serif; border:none; cursor:pointer; }
  .srv-cta-btn:hover { background:#004a78; transform:translateY(-2px); box-shadow:0 8px 24px rgba(0,91,143,0.25); }
  .srv-cta-btn-ghost { display:inline-flex; align-items:center; gap:8px; background:transparent; color:#005B8F; padding:14px 28px; border-radius:12px; font-weight:700; font-size:15px; text-decoration:none; transition:all .2s; font-family:"Lexend",sans-serif; border:2px solid rgba(0,91,143,0.25); cursor:pointer; }
  .dark .srv-cta-btn-ghost { color:#4A83F3; border-color:rgba(74,131,243,0.3); }
  .srv-cta-btn-ghost:hover { background:rgba(0,91,143,0.06); transform:translateY(-2px); }
  .dark .srv-cta-btn-ghost:hover { background:rgba(74,131,243,0.1); }
  .srv-divider { height:1px; background:rgba(0,91,143,0.08); margin:0; }
  .dark .srv-divider { background:rgba(74,131,243,0.12); }
  @media(max-width:768px){ .srv-hero{ padding:72px 0 60px; } .srv-section,.srv-section-alt{ padding:60px 0; } }
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
  blobTop,
  blobRight,
}) {
  return (
    <section className="srv-hero">
      <div className="srv-hero-bg" />
      <div
        className="srv-hero-blob"
        style={{
          width: 400,
          height: 400,
          background: "rgba(0,91,143,0.07)",
          top: blobTop ?? -80,
          right: blobRight ?? -80,
        }}
      />
      <div
        className="srv-container"
        style={{ position: "relative", zIndex: 1 }}
      >
        <div className="srv-reveal" style={{ maxWidth: 680 }}>
          <span className="srv-badge">
            <span className="srv-badge-dot" />
            {badge}
          </span>
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
  accent = "#005B8F",
  style = {},
}) {
  const Icon = icon;
  return (
    <div
      className="srv-reveal"
      style={{
        background: "var(--srv-bg-card)",
        border: "1px solid var(--srv-border)",
        borderRadius: 20,
        padding: "32px 28px",
        transition: "all .25s",
        ...style,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,91,143,0.1)";
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
          background: `${accent}15`,
          borderRadius: 14,
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
          fontWeight: 700,
          fontSize: 16,
          color: "var(--srv-text-primary)",
          marginBottom: 8,
          fontFamily: "Lexend,sans-serif",
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
        borderRadius: 20,
        padding: "32px 28px",
        position: "relative",
        transition: "all .25s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,91,143,0.1)";
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
          background: "#005B8F",
          color: "#fff",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: 900,
          fontSize: 14,
          fontFamily: "Lexend,sans-serif",
        }}
      >
        {step}
      </div>
      <div style={{ marginTop: 8 }}>
        <span style={{ display: "block", marginBottom: 12 }}>
          <Icon size={28} />
        </span>
        <h4
          style={{
            fontWeight: 700,
            fontSize: 15,
            color: "var(--srv-text-primary)",
            marginBottom: 8,
            fontFamily: "Lexend,sans-serif",
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
            borderRadius: 16,
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
                fontWeight: 700,
                fontSize: 15,
                color: "var(--srv-text-primary)",
                fontFamily: "Lexend,sans-serif",
                lineHeight: 1.4,
              }}
            >
              {item.q}
            </span>
            <span
              style={{
                fontSize: 20,
                color: "#005B8F",
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
    <section style={{ background: "#005B8F", padding: "56px 0" }}>
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
                  fontWeight: 900,
                  color: "#fff",
                  fontFamily: "Lexend,sans-serif",
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
                  letterSpacing: ".08em",
                  marginTop: 8,
                  fontFamily: "Lexend,sans-serif",
                  fontWeight: 600,
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
        background: "linear-gradient(135deg,#005B8F 0%,#004270 100%)",
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
              fontWeight: 900,
              color: "#fff",
              fontFamily: "Lexend,sans-serif",
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
              fontFamily: "Lexend,sans-serif",
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
              background: "#fff",
              color: "#005B8F",
              padding: "14px 32px",
              borderRadius: 12,
              fontWeight: 700,
              fontSize: 15,
              textDecoration: "none",
              transition: "all .2s",
              fontFamily: "Lexend,sans-serif",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 8px 28px rgba(0,0,0,0.15)";
            }}
            onMouseLeave={(e) => {
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
            fontFamily: "Lexend,sans-serif",
            fontWeight: 400,
          }}
        >
          <span
            style={{
              width: 20,
              height: 20,
              borderRadius: "50%",
              background: "rgba(0,91,143,0.1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              marginTop: 1,
              fontSize: 11,
              color: "#005B8F",
            }}
          >
            ✓
          </span>
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
      bg: isDark ? "rgba(0,91,143,0.18)" : "rgba(0,91,143,0.05)",
      border: isDark ? "rgba(74,131,243,0.25)" : "rgba(0,91,143,0.15)",
      title: isDark ? "#4A83F3" : "#005B8F",
    },
    green: {
      bg: isDark ? "rgba(22,163,74,0.18)" : "rgba(22,163,74,0.05)",
      border: isDark ? "rgba(22,163,74,0.3)" : "rgba(22,163,74,0.15)",
      title: isDark ? "#4ade80" : "#166534",
    },
    amber: {
      bg: isDark ? "rgba(245,158,11,0.15)" : "rgba(245,158,11,0.06)",
      border: isDark ? "rgba(245,158,11,0.3)" : "rgba(245,158,11,0.2)",
      title: isDark ? "#fbbf24" : "#92400e",
    },
  };

  const v = variants[variant];

  return (
    <div
      className="srv-reveal"
      style={{
        background: v.bg,
        border: `1px solid ${v.border}`,
        borderRadius: 20,
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
            fontWeight: 700,
            fontSize: 16,
            color: v.title,
            fontFamily: "Lexend,sans-serif",
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
            borderRadius: 40,
            background: "var(--srv-country-tag-bg)",
            border: "1px solid var(--srv-country-tag-border)",
            fontSize: 13,
            fontWeight: 600,
            color: "var(--srv-country-tag-color, #005B8F)",
            fontFamily: "Lexend,sans-serif",
          }}
        >
          {c.flag} {c.name}
        </span>
      ))}
    </div>
  );
}
