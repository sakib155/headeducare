import { useState } from "react";

/* Reusable FAQ accordion — self-contained styles (no page CSS dependency),
   brand palette only. JSON-LD is emitted by AutoSeo (home) / Helmet
   (country pages); this component renders the visible UI. */

const FAQ_STYLES = `
  .faq-section { padding: clamp(56px, 7vw, 88px) clamp(20px, 4vw, 32px); }
  .faq-inner { max-width: 768px; margin: 0 auto; }
  .faq-eyebrow {
    font-size: .78rem; font-weight: 700; letter-spacing: .14em;
    text-transform: uppercase; margin-bottom: 10px;
    font-family: "Oswald", sans-serif;
  }
  .faq-title {
    font-family: "Roboto Slab", serif;
    font-size: clamp(1.7rem, 3.4vw, 2.6rem);
    font-weight: 600; line-height: 1.15;
    letter-spacing: -.02em; margin-bottom: 12px;
  }
  .faq-sub {
    font-size: 1rem; line-height: 1.7;
    margin-bottom: clamp(28px, 4vw, 40px);
  }

  .faq-section--deep { background: #0f203c; }
  .faq-section--deep .faq-eyebrow { color: #7fb2dd; }
  .faq-section--deep .faq-title { color: #ffffff; }
  .faq-section--deep .faq-title span { color: #7fb2dd; }
  .faq-section--deep .faq-sub { color: rgba(255,255,255,0.75); }
  .faq-section--deep .faq-item { border-bottom: 1px solid rgba(255,255,255,0.15); }
  .faq-section--deep .faq-q { color: #ffffff; }
  .faq-section--deep .faq-toggle { color: #7fb2dd; }
  .faq-section--deep .faq-a { color: rgba(255,255,255,0.75); }

  .faq-section--light { background: #F8F9FA; }
  .faq-section--light .faq-eyebrow { color: #204276; }
  .faq-section--light .faq-title { color: #0f203c; }
  .faq-section--light .faq-title span { color: #204276; }
  .faq-section--light .faq-sub { color: #565F75; }
  .faq-section--light .faq-item { border-bottom: 1px solid #0f203c; }
  .faq-section--light .faq-q { color: #0f203c; }
  .faq-section--light .faq-toggle { color: #204276; }
  .faq-section--light .faq-a { color: #565F75; }
  .faq-section--light .faq-item:hover .faq-q { color: #204276; }

  .dark .faq-section--light { background: #01081a; }
  .dark .faq-section--light .faq-eyebrow { color: #7fb2dd; }
  .dark .faq-section--light .faq-title { color: #f1f5f9; }
  .dark .faq-section--light .faq-title span { color: #7fb2dd; }
  .dark .faq-section--light .faq-sub { color: #94a3b8; }
  .dark .faq-section--light .faq-item { border-bottom-color: rgba(255,255,255,0.18); }
  .dark .faq-section--light .faq-q { color: #f1f5f9; }
  .dark .faq-section--light .faq-toggle { color: #7fb2dd; }
  .dark .faq-section--light .faq-a { color: #94a3b8; }
  .dark .faq-section--light .faq-item:hover .faq-q { color: #7fb2dd; }

  .faq-item { border-bottom: 1px solid transparent; }
  .faq-q {
    font-family: "Roboto Slab", serif; font-weight: 600;
    font-size: 1.05rem; line-height: 1.35; text-align: left;
  }
  .faq-toggle {
    flex-shrink: 0; width: 32px; height: 32px;
    display: flex; align-items: center; justify-content: center;
    font-size: 1.4rem; font-weight: 300; line-height: 1;
    transition: transform .2s ease;
  }
  .faq-a { padding: 0 40px 20px 0; font-size: .95rem; line-height: 1.75; }
`;

export default function FaqSection({
  items,
  variant = "light",
  eyebrow = "FAQs",
  title,
  titleAccent,
  subtitle,
}) {
  const [open, setOpen] = useState(0);

  if (!items?.length) return null;

  return (
    <>
      <style>{FAQ_STYLES}</style>
      <section className={`faq-section faq-section--${variant}`}>
        <div className="faq-inner">
          <p className="faq-eyebrow">{eyebrow}</p>
          <h2 className="faq-title">
            {title} {titleAccent && <span>{titleAccent}</span>}
          </h2>
          {subtitle && <p className="faq-sub">{subtitle}</p>}

          <div>
            {items.map((item, i) => {
              const isOpen = open === i;
              return (
                <div key={i} className="faq-item">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className="w-full flex items-center justify-between gap-4 py-5 text-left cursor-pointer bg-transparent border-none"
                    aria-expanded={isOpen}
                  >
                    <span className="faq-q">{item.q}</span>
                    <span
                      className="faq-toggle"
                      style={{ transform: isOpen ? "rotate(45deg)" : "none" }}
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </button>
                  {isOpen && <p className="faq-a">{item.a}</p>}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
