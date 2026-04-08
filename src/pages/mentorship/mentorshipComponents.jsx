import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

/* ─────────────────────────────────────────────
   SCROLL REVEAL HOOK
───────────────────────────────────────────── */
export function useReveal(cls = "mtr-visible") {
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && e.target.classList.add(cls)),
      { threshold: 0.08 }
    );
    const el = ref.current;
    if (el)
      el.querySelectorAll(".mtr-reveal").forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, [cls]);
  return ref;
}

/* ─────────────────────────────────────────────
   BASE STYLES — injected once per page
───────────────────────────────────────────── */
export const MENTOR_STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;600;700;900&display=swap');

  /* Reveal animation */
  .mtr-reveal { opacity:0; transform:translateY(20px); transition:opacity .7s ease,transform .7s ease; }
  .mtr-reveal.mtr-visible { opacity:1; transform:none; }
  .mtr-reveal:nth-child(2){transition-delay:.08s}
  .mtr-reveal:nth-child(3){transition-delay:.16s}
  .mtr-reveal:nth-child(4){transition-delay:.24s}
  .mtr-reveal:nth-child(5){transition-delay:.32s}
  .mtr-reveal:nth-child(6){transition-delay:.40s}

  /* Page base */
  .mtr-page { font-family:"Lexend",sans-serif; color:#0d121b; }

  /* Hero */
  .mtr-hero { position:relative; padding:96px 0 80px; overflow:hidden; }
  .mtr-hero-bg { position:absolute; inset:0; background:linear-gradient(135deg,rgba(0,91,143,0.06) 0%,rgba(74,131,243,0.04) 100%); }
  .mtr-hero-blob { position:absolute; border-radius:50%; filter:blur(80px); pointer-events:none; }

  /* Badge */
  .mtr-badge { display:inline-flex; align-items:center; gap:8px; padding:5px 14px; border-radius:40px; background:rgba(0,91,143,0.1); color:#005B8F; font-size:11px; font-weight:700; letter-spacing:.08em; text-transform:uppercase; margin-bottom:20px; }
  .mtr-badge-dot { width:6px; height:6px; border-radius:50%; background:#005B8F; flex-shrink:0; }

  /* Typography */
  .mtr-h1 { font-size:clamp(36px,5vw,64px); font-weight:900; line-height:1.08; color:#0d121b; margin-bottom:20px; font-family:"Lexend",sans-serif; }
  .mtr-h1 span { color:#005B8F; }
  .mtr-h2 { font-size:clamp(24px,3vw,40px); font-weight:900; color:#0d121b; margin-bottom:12px; font-family:"Lexend",sans-serif; }
  .mtr-h2 span { color:#005B8F; }
  .mtr-lead { font-size:17px; color:#6b7280; line-height:1.75; font-weight:300; max-width:580px; }
  .mtr-subtitle { font-size:11px; font-weight:700; letter-spacing:.1em; text-transform:uppercase; color:#005B8F; margin-bottom:10px; font-family:"Lexend",sans-serif; }
  .mtr-body { font-size:15px; color:#6b7280; line-height:1.8; font-weight:300; }

  /* Layout */
  .mtr-container { max-width:1200px; margin:0 auto; padding:0 20px; }
  .mtr-section { padding:88px 0; }
  .mtr-section-alt { padding:88px 0; background:#f6f6f8; }
  .mtr-divider { height:1px; background:rgba(0,91,143,0.08); margin:0; }

  /* Buttons */
  .mtr-cta-btn { display:inline-flex; align-items:center; gap:8px; background:#005B8F; color:#fff; padding:14px 28px; border-radius:12px; font-weight:700; font-size:15px; text-decoration:none; transition:all .2s; font-family:"Lexend",sans-serif; border:none; cursor:pointer; }
  .mtr-cta-btn:hover { background:#004a78; transform:translateY(-2px); box-shadow:0 8px 24px rgba(0,91,143,0.25); }
  .mtr-cta-btn-ghost { display:inline-flex; align-items:center; gap:8px; background:transparent; color:#005B8F; padding:14px 28px; border-radius:12px; font-weight:700; font-size:15px; text-decoration:none; transition:all .2s; font-family:"Lexend",sans-serif; border:2px solid rgba(0,91,143,0.25); cursor:pointer; }
  .mtr-cta-btn-ghost:hover { background:rgba(0,91,143,0.06); transform:translateY(-2px); }

  /* Dark mode  */
  .dark .mtr-page { color:#f1f1f1; }
  .dark .mtr-hero-bg { background:linear-gradient(135deg,rgba(0,91,143,0.12) 0%,rgba(74,131,243,0.08) 100%); }
  .dark .mtr-h1 { color:#ffffff; }
  .dark .mtr-h2 { color:#ffffff; }
  .dark .mtr-lead { color:#9ca3af; }
  .dark .mtr-body { color:#9ca3af; }
  .dark .mtr-badge { background:rgba(0,91,143,0.25); color:#60a5fa; }
  .dark .mtr-badge-dot { background:#60a5fa; }
  .dark .mtr-section-alt { background:#02182a; }

  /* FAQ */
  .mtr-faq-q { color:#0d121b; }
  .dark .mtr-faq-q { color:#ffffff; }

  /* Responsive */
  @media(max-width:768px){
    .mtr-hero{ padding:72px 0 60px; }
    .mtr-section,.mtr-section-alt{ padding:60px 0; }
  }
`;

/* ─────────────────────────────────────────────
   PAGE HERO
───────────────────────────────────────────── */
export function MentorHero({
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
    <section className="mtr-hero">
      <div className="mtr-hero-bg" />
      <div
        className="mtr-hero-blob"
        style={{
          width: 400,
          height: 400,
          background: "rgba(0,91,143,0.07)",
          top: blobTop ?? -80,
          right: blobRight ?? -80,
        }}
      />
      <div className="mtr-container" style={{ position: "relative", zIndex: 1 }}>
        <div className="mtr-reveal" style={{ maxWidth: 680 }}>
          <span className="mtr-badge">
            <span className="mtr-badge-dot" />
            {badge}
          </span>
          <h1 className="mtr-h1">
            {title} <span>{highlight}</span>
            {subtitle ? (
              <>
                <br />
                {subtitle}
              </>
            ) : null}
          </h1>
          <p className="mtr-lead" style={{ marginBottom: 32 }}>
            {desc}
          </p>
          <Link to={ctaLink} className="mtr-cta-btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
   SECTION HEADER
───────────────────────────────────────────── */
export function MentorSectionHeader({ label, title, highlight, body, centered = false }) {
  return (
    <div
      className={`mtr-reveal ${centered ? "text-center" : ""}`}
      style={{
        marginBottom: 48,
        maxWidth: centered ? 680 : 560,
        margin: centered ? "0 auto 48px" : "0 0 48px",
      }}
    >
      <p className="mtr-subtitle">{label}</p>
      <h2 className="mtr-h2">
        {title} {highlight && <span>{highlight}</span>}
      </h2>
      {body && (
        <p className="mtr-body" style={{ marginTop: 12 }}>
          {body}
        </p>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────────
   ICON CARD
───────────────────────────────────────────── */
export function MentorIconCard({ icon, title, desc, accent = "#005B8F", style = {} }) {
  const Icon = icon;
  return (
    <div
      className="mtr-reveal"
      style={{
        background: "#fff",
        border: "1px solid rgba(0,0,0,0.06)",
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
          color: accent,
        }}
      >
        <Icon size={24} />
      </div>
      <h4
        style={{
          fontWeight: 700,
          fontSize: 16,
          color: "#0d121b",
          marginBottom: 8,
          fontFamily: "Lexend,sans-serif",
        }}
        className="mtr-card-title"
      >
        {title}
      </h4>
      <p className="mtr-body" style={{ fontSize: 14 }}>
        {desc}
      </p>

      <style>{`.dark .mtr-card-title { color:#ffffff; }`}</style>
    </div>
  );
}

/* ─────────────────────────────────────────────
   STEP CARD
───────────────────────────────────────────── */
export function MentorStepCard({ step, icon, title, desc }) {
  const Icon = icon;
  return (
    <div
      className="mtr-reveal"
      style={{
        background: "#fff",
        border: "1px solid rgba(0,0,0,0.06)",
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
        <span style={{ display: "block", marginBottom: 12, color: "#005B8F" }}>
          <Icon size={28} />
        </span>
        <h4
          style={{
            fontWeight: 700,
            fontSize: 15,
            color: "#0d121b",
            marginBottom: 8,
            fontFamily: "Lexend,sans-serif",
          }}
          className="mtr-card-title"
        >
          {title}
        </h4>
        <p className="mtr-body" style={{ fontSize: 14 }}>
          {desc}
        </p>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   FAQ ACCORDION
───────────────────────────────────────────── */
export function MentorFAQ({ items }) {
  const [open, setOpen] = useState(null);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      {items.map((item, i) => (
        <div
          key={i}
          className="mtr-reveal"
          style={{
            border: `1px solid ${open === i ? "rgba(0,91,143,0.25)" : "rgba(0,0,0,0.07)"}`,
            borderRadius: 16,
            overflow: "hidden",
            transition: "border .2s",
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
                fontFamily: "Lexend,sans-serif",
                lineHeight: 1.4,
              }}
              className="mtr-faq-q"
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
              <p className="mtr-body" style={{ fontSize: 14 }}>
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
export function MentorStatsStrip({ stats }) {
  return (
    <section style={{ background: "#005B8F", padding: "56px 0" }}>
      <div className="mtr-container">
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
              className="mtr-reveal"
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
   CTA BANNER
───────────────────────────────────────────── */
export function MentorCtaBanner({
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
        className="mtr-container"
        style={{ position: "relative", zIndex: 1, textAlign: "center" }}
      >
        <div className="mtr-reveal">
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
   CHECK LIST
───────────────────────────────────────────── */
export function MentorCheckList({ items, columns = 1 }) {
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
            color: "#4b5563",
            fontFamily: "Lexend,sans-serif",
            fontWeight: 400,
          }}
          className="mtr-checklist-item"
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
      <style>{`.dark .mtr-checklist-item { color:#d1d5db; }`}</style>
    </ul>
  );
}

/* ─────────────────────────────────────────────
   INFO BOX
───────────────────────────────────────────── */
export function MentorInfoBox({ icon: Icon, title, children, variant = "blue" }) {
  const variants = {
    blue: { bg: "rgba(0,91,143,0.05)", border: "rgba(0,91,143,0.15)", title: "#005B8F" },
    green: { bg: "rgba(22,163,74,0.05)", border: "rgba(22,163,74,0.15)", title: "#166534" },
    amber: { bg: "rgba(245,158,11,0.06)", border: "rgba(245,158,11,0.2)", title: "#92400e" },
  };
  const v = variants[variant];
  return (
    <div
      className="mtr-reveal"
      style={{
        background: v.bg,
        border: `1px solid ${v.border}`,
        borderRadius: 20,
        padding: "28px 32px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
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
   HIGHLIGHT TAG LIST  (pills/tags)
───────────────────────────────────────────── */
export function MentorTagList({ tags }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
      {tags.map((tag, i) => (
        <span
          key={i}
          className="mtr-tag"
          style={{
            padding: "7px 16px",
            borderRadius: 40,
            background: "#fff",
            border: "1px solid rgba(0,91,143,0.15)",
            fontSize: 13,
            fontWeight: 600,
            color: "#0d121b",
            fontFamily: "Lexend,sans-serif",
          }}
        >
          {tag}
        </span>
      ))}
      <style>{`.dark .mtr-tag { background:#02182a; color:#f1f1f1; border-color:rgba(96,165,250,0.2); }`}</style>
    </div>
  );
}

/* ─────────────────────────────────────────────
   PROGRAM NAV  (sibling page quick links)
───────────────────────────────────────────── */
export function MentorProgramNav({ pages, current }) {
  return (
    <nav
      style={{
        background: "#f6f6f8",
        borderBottom: "1px solid rgba(0,0,0,0.06)",
        padding: "0 20px",
        overflowX: "auto",
      }}
      className="mtr-prog-nav"
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          gap: 4,
          minWidth: "max-content",
        }}
      >
        {pages.map((p) => (
          <Link
            key={p.url}
            to={p.url}
            style={{
              padding: "14px 18px",
              fontSize: 13,
              fontWeight: 600,
              fontFamily: "Lexend,sans-serif",
              textDecoration: "none",
              borderBottom:
                p.url === current
                  ? "2px solid #005B8F"
                  : "2px solid transparent",
              color: p.url === current ? "#005B8F" : "#6b7280",
              whiteSpace: "nowrap",
              transition: "color .2s",
            }}
          >
            {p.name}
          </Link>
        ))}
      </div>
      <style>{`
        .dark .mtr-prog-nav { background:#01091c; border-color:rgba(255,255,255,0.06); }
      `}</style>
    </nav>
  );
}

/* ─────────────────────────────────────────────
   VERTICAL TIMELINE  (numbered steps with connector line)
───────────────────────────────────────────── */
export function MentorVerticalTimeline({ steps }) {
  return (
    <div style={{ position: "relative", paddingLeft: 48 }}>
      {/* connector line */}
      <div style={{
        position: "absolute", left: 17, top: 18, bottom: 18,
        width: 2, background: "rgba(0,91,143,0.15)",
      }} />
      {steps.map((s, i) => (
        <div key={i} className="mtr-reveal" style={{ display: "flex", gap: 24, marginBottom: i < steps.length - 1 ? 40 : 0, position: "relative" }}>
          {/* circle */}
          <div style={{
            position: "absolute", left: -48,
            width: 36, height: 36, borderRadius: "50%",
            background: "#005B8F", color: "#fff",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontWeight: 900, fontSize: 14, fontFamily: "Lexend,sans-serif",
            flexShrink: 0, zIndex: 1,
          }}>{i + 1}</div>
          <div>
            <h4 className="mtr-vtl-title" style={{ fontWeight: 700, fontSize: 16, marginBottom: 6, fontFamily: "Lexend,sans-serif", color: "#0d121b" }}>{s.title}</h4>
            <p className="mtr-body" style={{ fontSize: 14 }}>{s.desc}</p>
          </div>
        </div>
      ))}
      <style>{`.dark .mtr-vtl-title { color:#ffffff; }`}</style>
    </div>
  );
}

/* ─────────────────────────────────────────────
   HORIZONTAL PROCESS ARROWS  (steps with →)
───────────────────────────────────────────── */
export function MentorProcessArrows({ steps }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 0, alignItems: "stretch" }}>
      {steps.map((s, i) => (
        <React.Fragment key={i}>
          <div className="mtr-reveal mtr-proc-card" style={{
            flex: "1 1 160px", minWidth: 140,
            background: "#fff", border: "1px solid rgba(0,91,143,0.1)",
            borderRadius: 16, padding: "24px 20px", textAlign: "center",
            position: "relative",
          }}>
            <div style={{
              width: 36, height: 36, borderRadius: "50%",
              background: "rgba(0,91,143,0.1)", color: "#005B8F",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontWeight: 900, fontSize: 14, fontFamily: "Lexend,sans-serif",
              margin: "0 auto 12px",
            }}>{i + 1}</div>
            <h5 className="mtr-proc-title" style={{ fontWeight: 700, fontSize: 13, color: "#0d121b", fontFamily: "Lexend,sans-serif", lineHeight: 1.4 }}>{s.title}</h5>
            {s.desc && <p className="mtr-body" style={{ fontSize: 12, marginTop: 6 }}>{s.desc}</p>}
          </div>
          {i < steps.length - 1 && (
            <div style={{ display: "flex", alignItems: "center", padding: "0 4px", color: "#005B8F", fontSize: 20, fontWeight: 300, flexShrink: 0 }}>→</div>
          )}
        </React.Fragment>
      ))}
      <style>{`
        .dark .mtr-proc-card { background:#02182a !important; border-color:rgba(255,255,255,0.06) !important; }
        .dark .mtr-proc-title { color:#ffffff; }
      `}</style>
    </div>
  );
}

/* ─────────────────────────────────────────────
   ALTERNATING FEATURE ROWS  (img-like left/right layout)
───────────────────────────────────────────── */
export function MentorAlternatingFeatures({ features, icons }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 56 }}>
      {features.map((f, i) => {
        const Icon = icons?.[i];
        const isReverse = i % 2 !== 0;
        return (
          <div key={i} className="mtr-reveal mtr-alt-row" style={{
            display: "flex", gap: 56, alignItems: "center",
            flexDirection: isReverse ? "row-reverse" : "row",
          }}>
            {/* Icon panel */}
            <div style={{
              flexShrink: 0, width: 240, height: 180,
              background: `rgba(0,91,143,${0.04 + (i * 0.02)})`,
              borderRadius: 24,
              display: "flex", alignItems: "center", justifyContent: "center",
              border: "1px solid rgba(0,91,143,0.08)",
            }}>
              {Icon && <Icon size={56} color="#005B8F" strokeWidth={1.25} />}
              {!Icon && (
                <div style={{ width: 56, height: 56, borderRadius: "50%", background: "#005B8F", opacity: 0.15 }} />
              )}
            </div>
            {/* Text */}
            <div style={{ flex: 1 }}>
              <p className="mtr-subtitle" style={{ marginBottom: 8 }}>0{i + 1}</p>
              <h3 className="mtr-alt-title" style={{ fontWeight: 700, fontSize: 22, color: "#0d121b", fontFamily: "Lexend,sans-serif", marginBottom: 12, lineHeight: 1.3 }}>{f.title}</h3>
              <p className="mtr-body" style={{ fontSize: 15 }}>{f.desc}</p>
            </div>
          </div>
        );
      })}
      <style>{`
        .dark .mtr-alt-title { color:#ffffff; }
        @media(max-width:640px){ .mtr-alt-row { flex-direction:column !important; } }
      `}</style>
    </div>
  );
}

/* ─────────────────────────────────────────────
   COLOR BORDER CARD  (left accent border, for decision types / aid types)
───────────────────────────────────────────── */
export function MentorColorCard({ title, desc, accentColor = "#005B8F", icon, badge }) {
  const Icon = icon;
  return (
    <div className="mtr-reveal mtr-color-card" style={{
      background: "#fff",
      borderRadius: 16,
      borderLeft: `4px solid ${accentColor}`,
      padding: "24px 24px 24px 28px",
      boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
      transition: "box-shadow .2s, transform .2s",
    }}
      onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 8px 28px rgba(0,0,0,0.09)"; e.currentTarget.style.transform = "translateY(-3px)"; }}
      onMouseLeave={e => { e.currentTarget.style.boxShadow = "0 1px 4px rgba(0,0,0,0.05)"; e.currentTarget.style.transform = "none"; }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
        {Icon && <Icon size={18} color={accentColor} />}
        <h4 className="mtr-cc-title" style={{ fontWeight: 700, fontSize: 15, color: "#0d121b", fontFamily: "Lexend,sans-serif" }}>{title}</h4>
        {badge && (
          <span style={{ marginLeft: "auto", fontSize: 10, fontWeight: 700, letterSpacing: ".06em", textTransform: "uppercase", color: accentColor, background: `${accentColor}15`, padding: "3px 8px", borderRadius: 20 }}>{badge}</span>
        )}
      </div>
      <p className="mtr-body" style={{ fontSize: 14 }}>{desc}</p>
      <style>{`.dark .mtr-color-card { background:#02182a !important; } .dark .mtr-cc-title { color:#ffffff; }`}</style>
    </div>
  );
}

/* ─────────────────────────────────────────────
   PULL QUOTE  (large editorial quote block)
───────────────────────────────────────────── */
export function MentorPullQuote({ quote, author, role }) {
  return (
    <div className="mtr-reveal" style={{
      borderLeft: "4px solid #005B8F",
      paddingLeft: 32, margin: "40px 0",
    }}>
      <p style={{
        fontSize: "clamp(18px,2.5vw,26px)", fontWeight: 300, color: "#0d121b",
        fontFamily: "Lexend,sans-serif", lineHeight: 1.6, fontStyle: "italic",
        marginBottom: author ? 16 : 0,
      }} className="mtr-pq-text">
        "{quote}"
      </p>
      {author && (
        <div>
          <span style={{ fontWeight: 700, fontSize: 13, color: "#005B8F", fontFamily: "Lexend,sans-serif" }}>{author}</span>
          {role && <span style={{ fontSize: 13, color: "#9ca3af", fontFamily: "Lexend,sans-serif" }}> — {role}</span>}
        </div>
      )}
      <style>{`.dark .mtr-pq-text { color:#e5e7eb; }`}</style>
    </div>
  );
}

/* ─────────────────────────────────────────────
   DEADLINE / ALERT BANNER
───────────────────────────────────────────── */
export function MentorAlertBanner({ icon: Icon, label, value, sub, color = "#005B8F" }) {
  return (
    <div className="mtr-reveal mtr-alert-banner" style={{
      background: `${color}10`,
      border: `1px solid ${color}30`,
      borderRadius: 16, padding: "24px 32px",
      display: "flex", alignItems: "center", gap: 20, flexWrap: "wrap",
    }}>
      {Icon && <Icon size={36} color={color} />}
      <div>
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase", color, fontFamily: "Lexend,sans-serif" }}>{label}</p>
        <p style={{ fontSize: 24, fontWeight: 900, color, fontFamily: "Lexend,sans-serif", lineHeight: 1.2 }}>{value}</p>
        {sub && <p className="mtr-body" style={{ fontSize: 13, marginTop: 4 }}>{sub}</p>}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   ACCENT TOP CARD  (colored top strip card — for essays / aid)
───────────────────────────────────────────── */
export function MentorAccentCard({ title, desc, accent = "#005B8F", icon }) {
  const Icon = icon;
  return (
    <div className="mtr-reveal mtr-accent-card" style={{
      borderRadius: 20, overflow: "hidden",
      border: "1px solid rgba(0,0,0,0.06)",
      background: "#fff", transition: "all .25s",
    }}
      onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 12px 32px rgba(0,0,0,0.09)"; }}
      onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}
    >
      <div style={{ height: 4, background: accent }} />
      <div style={{ padding: "24px 24px 28px" }}>
        {Icon && (
          <div style={{ width: 44, height: 44, borderRadius: 12, background: `${accent}15`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 14, color: accent }}>
            <Icon size={22} />
          </div>
        )}
        <h4 className="mtr-ac-title" style={{ fontWeight: 700, fontSize: 15, color: "#0d121b", fontFamily: "Lexend,sans-serif", marginBottom: 8 }}>{title}</h4>
        <p className="mtr-body" style={{ fontSize: 14 }}>{desc}</p>
      </div>
      <style>{`.dark .mtr-accent-card { background:#02182a !important; border-color:rgba(255,255,255,0.06) !important; } .dark .mtr-ac-title { color:#ffffff; }`}</style>
    </div>
  );
}

/* ─────────────────────────────────────────────
   TIER VISUAL BARS  (college list tiers comparison)
───────────────────────────────────────────── */
export function MentorTierBars({ tiers }) {
  const colors = ["#ef4444", "#f59e0b", "#22c55e"];
  const widths = ["40%", "65%", "90%"];
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
      {tiers.map((t, i) => (
        <div key={i} className="mtr-reveal">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 10 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <span style={{ width: 12, height: 12, borderRadius: "50%", background: colors[i], display: "inline-block", flexShrink: 0 }} />
              <span className="mtr-tier-title" style={{ fontWeight: 700, fontSize: 17, color: "#0d121b", fontFamily: "Lexend,sans-serif" }}>{t.tier}</span>
              <span style={{ fontSize: 12, color: colors[i], fontWeight: 700, fontFamily: "Lexend,sans-serif", background: `${colors[i]}15`, padding: "2px 10px", borderRadius: 20 }}>{t.count} schools</span>
            </div>
          </div>
          <div style={{ height: 8, background: "rgba(0,0,0,0.06)", borderRadius: 8, overflow: "hidden", marginBottom: 10 }}>
            <div style={{ height: "100%", width: widths[i], background: colors[i], borderRadius: 8, transition: "width 1s ease" }} />
          </div>
          <p className="mtr-body" style={{ fontSize: 14 }}>{t.desc}</p>
        </div>
      ))}
      <style>{`.dark .mtr-tier-title { color:#ffffff; }`}</style>
    </div>
  );
}

/* ─────────────────────────────────────────────
   TWO COLUMN EDITORIAL  (magazine-style text layout)
───────────────────────────────────────────── */
export function MentorEditorial({ header, headerBody, body1, body2 }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64 }} className="mtr-reveal mtr-editorial">
      <div>
        <h2 className="mtr-h2" style={{ marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: header }} />
        <p className="mtr-body" style={{ fontSize: 16 }}>{headerBody}</p>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <p className="mtr-body" style={{ fontSize: 15 }}>{body1}</p>
        {body2 && <p className="mtr-body" style={{ fontSize: 15 }}>{body2}</p>}
      </div>
      <style>{`@media(max-width:768px){ .mtr-editorial { grid-template-columns:1fr !important; gap:24px !important; } }`}</style>
    </div>
  );
}

