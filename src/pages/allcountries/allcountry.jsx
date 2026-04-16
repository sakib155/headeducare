import { countriesFallback } from "../country/countriesFallback";

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Outfit:wght@300;400;500;600&display=swap');

  /* ── design tokens (scoped to .dp-root, not :root) ── */
  .dp-root {
    --cream:         #f6fbfe;
    --ink:           #0f1720;
    --ink-mid:       #4b5b67;
    --ink-soft:      #7b8b97;
    --primary:       #005B8F;
    --primary-light: #e6f3fa;
    --primary-soft:  #cce7f5;
    --card-bg:       #ffffff;
    --border:        #d9e8f2;
    --radius:        16px;

    font-family: 'Outfit', sans-serif;
    background: var(--cream);
    min-height: 100vh;
    padding: 56px 32px 80px;
    position: relative;
  }

  /* subtle dot-grid background */
  .dp-root::before {
    content: '';
    position: fixed; inset: 0; pointer-events: none; z-index: 0;
    background-image: radial-gradient(circle, #c9962a22 1px, transparent 1px);
    background-size: 32px 32px;
  }

  .dp-inner {
    max-width: 1280px;
    margin: 0 auto;
    position: relative; z-index: 1;
  }

  /* ── header ── */
  .dp-header {
    margin-bottom: 56px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .dp-eyebrow {
    font-family: 'Outfit', sans-serif;
    font-size: .72rem; font-weight: 600;
    letter-spacing: .18em; text-transform: uppercase;
    color: var(--primary);
    display: flex; align-items: center; gap: 10px;
  }
  .dp-eyebrow::after {
    content: '';
    flex: 0 0 48px; height: 1px;
    background: var(--primary);
  }
  .dp-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(2.8rem, 6vw, 5rem);
    font-weight: 700; line-height: 1;
    color: var(--ink);
    letter-spacing: -.01em;
  }
  .dp-title em {
    font-style: italic; color: var(--primary);
  }
  .dp-subtitle {
    font-size: .95rem; color: var(--ink-mid);
    font-weight: 300; margin-top: 4px;
    max-width: 480px; line-height: 1.6;
  }

  /* ── grid ── */
  .dp-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 28px;
  }

  /* ── card ── */
  .dp-card {
    position: relative;
    background: var(--card-bg);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    overflow: hidden;
    text-decoration: none;
    display: flex; flex-direction: column;
    transition: transform .32s cubic-bezier(.22,1,.36,1),
                box-shadow .32s cubic-bezier(.22,1,.36,1),
                border-color .2s;
    animation: cardIn .5s ease var(--stagger, 0s) both;
  }
  @keyframes cardIn {
    from { opacity: 0; transform: translateY(22px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .dp-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 20px 56px rgba(22,19,14,.13);
    border-color: var(--primary);
  }

  /* image area */
  .dp-img-wrap {
    position: relative;
    height: 200px;
    overflow: hidden;
    background: #e8e4dc;
  }
  .dp-img {
    width: 100%; height: 100%;
    object-fit: cover;
    transition: transform .5s cubic-bezier(.22,1,.36,1);
    display: block;
  }
  .dp-card:hover .dp-img { transform: scale(1.07); }

  /* gradient scrim */
  .dp-scrim {
    position: absolute; inset: 0;
    background: linear-gradient(
      to bottom,
      transparent 40%,
      rgba(22,19,14,.55) 100%
    );
    opacity: 0;
    transition: opacity .3s;
  }
  .dp-card:hover .dp-scrim { opacity: 1; }

  /* flag badge pinned top-right */
  .dp-flag {
    position: absolute; top: 12px; right: 12px;
    font-size: 1.8rem;
    background: rgba(255,255,255,.88);
    backdrop-filter: blur(6px);
    width: 44px; height: 44px;
    border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    border: 1.5px solid rgba(255,255,255,.6);
    box-shadow: 0 2px 8px rgba(0,0,0,.12);
    transition: transform .25s;
  }
  .dp-card:hover .dp-flag { transform: scale(1.1); }

  /* content */
  .dp-content {
    padding: 20px 22px 22px;
    display: flex; flex-direction: column; gap: 8px;
    flex: 1;
  }
  .dp-name {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.45rem; font-weight: 700;
    color: var(--ink); line-height: 1.1;
    letter-spacing: -.01em;
  }
  .dp-desc {
    font-size: .83rem; color: var(--ink-mid);
    line-height: 1.65; font-weight: 300;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  /* cta row */
  .dp-cta {
    margin-top: auto;
    padding-top: 14px;
    display: flex; align-items: center;
    justify-content: space-between;
    border-top: 1px solid var(--border);
  }
  .dp-cta-text {
    font-size: .75rem; font-weight: 600;
    letter-spacing: .1em; text-transform: uppercase;
    color: var(--primary);
  }
  .dp-arrow {
    width: 28px; height: 28px; border-radius: 50%;
    background: var(--primary-light);
    display: flex; align-items: center; justify-content: center;
    transition: background .2s, transform .2s;
  }
  .dp-card:hover .dp-arrow {
    background: var(--primary);
    transform: translateX(3px);
  }
  .dp-arrow svg { color: var(--primary); transition: color .2s; }
  .dp-card:hover .dp-arrow svg { color: #fff; }

  /* ── empty state ── */
  .dp-empty {
    grid-column: 1 / -1;
    text-align: center;
    padding: 80px 0;
    color: var(--ink-soft);
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.4rem; font-style: italic;
  }

  @media (max-width: 640px) {
    .dp-root { padding: 36px 16px 60px; }
    .dp-grid { gap: 18px; }
  }

  /* ═══════════════════════════════════════════
     DARK MODE  (.dark class on <html>)
  ═══════════════════════════════════════════ */
  .dark .dp-root {
    --cream:         #01091c;
    --ink:           #e2e8f0;
    --ink-mid:       #94a3b8;
    --ink-soft:      #64748b;
    --primary:       #60a5fa;
    --primary-light: #0d1e40;
    --primary-soft:  #1e3a6e;
    --card-bg:       #0d1e30;
    --border:        #1e3050;
    background: var(--cream);
    color: var(--ink);
  }

  .dark .dp-root .dp-title { color: var(--ink); }
  .dark .dp-root .dp-title em { color: var(--primary); }
  .dark .dp-root .dp-subtitle { color: var(--ink-mid); }
  .dark .dp-root .dp-eyebrow { color: var(--primary); }
  .dark .dp-root .dp-eyebrow::after { background: var(--primary); }
  .dark .dp-root .dp-card:hover { box-shadow: 0 20px 56px rgba(0,0,0,.45); }
  .dark .dp-root .dp-name { color: var(--ink); }
  .dark .dp-root .dp-desc { color: var(--ink-mid); }
  .dark .dp-root .dp-flag { background: rgba(13,30,48,.88); border-color: rgba(255,255,255,.15); }
`;

export default function DestinationPage() {
  const countries = countriesFallback ?? [];

  return (
    <>
      <style>{css}</style>
      <div className="dp-root">
        <div className="dp-inner">
          {/* ── header ── */}
          <header className="dp-header">
            <span className="dp-eyebrow">Study Abroad</span>
            <h1 className="dp-title">
              Explore <em>Destinations</em>
            </h1>
            <p className="dp-subtitle">
              Discover the world's best countries to study in — from tuition
              costs to visa requirements, all in one place.
            </p>
          </header>

          {/* ── grid ── */}
          <div className="dp-grid">
            {countries.length === 0 && (
              <div className="dp-empty">No destinations found.</div>
            )}

            {countries.map((country, i) => {
              const name = country.name ?? country.country;
              const slug = country.slug ?? name?.toLowerCase();
              const stagger = `${(i % 8) * 0.07}s`;

              return (
                <a
                  key={country.id ?? slug}
                  href={`/destination/${slug}`}
                  className="dp-card"
                  style={{ "--stagger": stagger }}
                >
                  {/* image */}
                  <div className="dp-img-wrap">
                    {country.image_url ? (
                      <img
                        src={country.image_url}
                        alt={name}
                        className="dp-img"
                      />
                    ) : (
                      <div
                        style={{
                          width: "100%",
                          height: "100%",
                          background: "#e8e4dc",
                        }}
                      />
                    )}
                    <div className="dp-scrim" />
                    {country.flag_url && (
                      <div className="dp-flag">{country.flag_url}</div>
                    )}
                  </div>

                  {/* content */}
                  <div className="dp-content">
                    <div className="dp-name">{name}</div>
                    {country.description && (
                      <p className="dp-desc">{country.description}</p>
                    )}

                    <div className="dp-cta">
                      <span className="dp-cta-text">Explore</span>
                      <span className="dp-arrow">
                        <svg
                          width="13"
                          height="13"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
