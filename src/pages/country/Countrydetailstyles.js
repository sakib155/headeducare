// ─────────────────────────────────────────────────────────────────────────────
// Countrydetailstyles.js  — fully responsive, scoped, upgraded UI
// ─────────────────────────────────────────────────────────────────────────────

export const countryDetailStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,700;0,900;1,700&family=Outfit:wght@400;500;600;700&display=swap');

  /* ── scoped reset (does NOT leak to header/navbar) ── */
  .cd-root *, .cd-root *::before, .cd-root *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  /* ── design tokens ── */
  .cd-root {
    --ink:         #0d1117;
    --ink-soft:    #4b5263;
    --ink-xsoft:   #9099ad;
    --surface:     #f4f6fb;
    --surface-2:   #eaecf4;
    --card:        #ffffff;
    --border:      #e2e6f0;
    --accent:      #19399b;
--accent-mid:  #2a4ccf;
--accent-bg:   #eef2ff;
--accent-glow: rgba(25,57,155,.14);
    --green:       #16a34a;
    --green-bg:    #dcfce7;
    --radius-sm:   8px;
    --radius:      16px;
    --radius-lg:   22px;
    --shadow-sm:   0 1px 4px rgba(0,0,0,.06);
    --shadow:      0 4px 24px rgba(0,0,0,.08);
    --shadow-lg:   0 8px 40px rgba(0,0,0,.12);
    --transition:  .22s cubic-bezier(.4,0,.2,1);

    font-family: 'Outfit', sans-serif;
    background: var(--surface);
    color: var(--ink);
    min-height: 100vh;
    -webkit-font-smoothing: antialiased;
  }

  /* ═══════════════════════════════════════════
     LOADING / NOT-FOUND
  ═══════════════════════════════════════════ */
  .loading-screen {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px;
    height: 60vh;
    font-family: 'Outfit', sans-serif;
    color: var(--ink-soft);
    font-size: 1rem;
  }
  .spinner {
    width: 38px; height: 38px;
    border: 3px solid var(--border);
    border-top-color: var(--accent);
    border-radius: 50%;
    animation: cd-spin .7s linear infinite;
  }
  @keyframes cd-spin { to { transform: rotate(360deg); } }

  /* ═══════════════════════════════════════════
     HERO
  ═══════════════════════════════════════════ */
  .hero {
    position: relative;
    height: clamp(300px, 50vw, 460px);
    overflow: hidden;
    background: #0d1117;
  }
  .hero-img {
    width: 100%; height: 100%;
    object-fit: cover;
    opacity: .5;
    transform: scale(1.04);
    transition: opacity 1s ease, transform 6s ease;
  }
  .hero-img.loaded { opacity: .52; transform: scale(1); }
  .hero-placeholder {
    position: absolute; inset: 0;
    background: linear-gradient(135deg, #1a2035 0%, #0d1117 100%);
  }
  .hero-overlay {
    position: absolute; inset: 0;
    background: linear-gradient(
      to top,
      rgba(0,0,0,.82) 0%,
      rgba(0,0,0,.3)  50%,
      transparent     100%
    );
  }
  /* decorative grain */
  .hero-overlay::after {
    content: '';
    position: absolute; inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.04'/%3E%3C/svg%3E");
    opacity: .35;
    pointer-events: none;
  }
  .hero-content {
    position: absolute; bottom: 0; left: 0; right: 0;
    padding: clamp(24px, 5vw, 56px) clamp(20px, 6vw, 64px);
    animation: cd-slideUp .55s cubic-bezier(.22,1,.36,1) both;
  }
  @keyframes cd-slideUp {
    from { opacity: 0; transform: translateY(22px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .hero-flag {
    font-size: clamp(2.2rem, 5vw, 3.2rem);
    margin-bottom: 10px;
    display: block;
    filter: drop-shadow(0 2px 8px rgba(0,0,0,.4));
  }
  .hero-title {
    font-family: 'Fraunces', serif;
    font-size: clamp(2rem, 5.5vw, 3.4rem);
    font-weight: 900;
    color: #fff;
    line-height: 1.08;
    letter-spacing: -.02em;
    margin-bottom: 12px;
    text-shadow: 0 2px 20px rgba(0,0,0,.35);
  }
  .hero-desc {
    color: rgba(255,255,255,.72);
    font-size: clamp(.88rem, 1.8vw, 1rem);
    max-width: 560px;
    line-height: 1.65;
  }
  /* accent line under title */
  .hero-title::after {
    content: '';
    display: block;
    width: 52px; height: 3px;
    background: var(--accent-mid);
    border-radius: 99px;
    margin-top: 14px;
  }

  /* ═══════════════════════════════════════════
     SECTIONS CONTAINER
  ═══════════════════════════════════════════ */
  .sections {
    max-width: 1280px;
    margin: 0 auto;
    padding: clamp(28px, 5vw, 56px) clamp(16px, 4vw, 32px) clamp(56px, 8vw, 100px);
    display: flex;
    flex-direction: column;
  gap: 40px; /* or increase if needed */

  }

  /* ═══════════════════════════════════════════
     SECTION CARD
  ═══════════════════════════════════════════ */
  .section-card {
    background: var(--card);
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    overflow: hidden;
    box-shadow: var(--shadow);
    animation: cd-fadeIn .5s cubic-bezier(.22,1,.36,1) both;
    transition: box-shadow var(--transition), transform var(--transition);
  }
  .section-card:hover {
    box-shadow: var(--shadow-lg);
    transform: translateY(-2px);
  }
  @keyframes cd-fadeIn {
    from { opacity: 0; transform: translateY(16px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .section-header {
    display: flex;
    align-items: center;
    gap: 14px;
    padding: 20px 28px;
    border-bottom: 1px solid var(--border);
    background: linear-gradient(to right, var(--accent-bg), #fff);
  }
  .section-icon {
    width: 40px; height: 40px;
    border-radius: 10px;
    background: linear-gradient(135deg, var(--accent) 0%, var(--accent-mid) 100%);
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    box-shadow: 0 3px 12px var(--accent-glow);
  }
  .section-title {
    font-family: 'Fraunces', serif;
    font-size: clamp(1rem, 2.2vw, 1.2rem);
    font-weight: 700;
    color: var(--ink);
    letter-spacing: -.01em;
  }
  .section-body {
    padding: clamp(18px, 3vw, 28px) clamp(16px, 3vw, 28px);
  }
  .empty {
    color: var(--ink-xsoft);
    font-size: .9rem;
    font-style: italic;
  }

  /* ═══════════════════════════════════════════
     TUITION FEES
  ═══════════════════════════════════════════ */
 .fees-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
  gap: 14px;
}
  .fee-card {
   display: flex;
  flex-direction: column;
  justify-content: space-between;
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: 18px 16px;
    transition: box-shadow var(--transition), border-color var(--transition), transform var(--transition);
    position: relative;
    overflow: hidden;
  }
  .fee-card::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 3px;
    background: linear-gradient(90deg, var(--accent), var(--accent-mid));
    transform: scaleX(0);
    transform-origin: left;
    transition: transform var(--transition);
  }
  .fee-card:hover {
    box-shadow: 0 6px 24px var(--accent-glow);
    border-color: var(--accent-mid);
    transform: translateY(-2px);
  }
  .fee-card:hover::before { transform: scaleX(1); }
  .fee-label {
    font-size: .7rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: .1em;
    color: var(--accent);
    margin-bottom: 8px;
  }
  .fee-range {
    font-size: clamp(.88rem, 1.6vw, 1rem);
    font-weight: 600;
    color: var(--ink);
    line-height: 1.35;
  }
  .fee-note {
    font-size: .72rem;
    color: var(--ink-xsoft);
    margin-top: 6px;
  }

  /* ═══════════════════════════════════════════
     LANGUAGE REQUIREMENTS
  ═══════════════════════════════════════════ */
  .table-wrap {
    overflow-x: auto;
    border-radius: var(--radius-sm);
    border: 1px solid var(--border);
    -webkit-overflow-scrolling: touch;
  }
  .data-table {
    width: 100%;
    border-collapse: collapse;
    font-size: clamp(.8rem, 1.5vw, .92rem);
    min-width: 320px;
  }
  .data-table th {
    text-align: left;
    padding: 12px 16px;
    background: var(--surface);
    color: var(--ink-soft);
    font-size: .7rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: .08em;
    border-bottom: 2px solid var(--border);
    white-space: nowrap;
  }
  .data-table td {
    padding: 13px 16px;
    border-bottom: 1px solid var(--border);
    color: var(--ink);
    vertical-align: middle;
  }
  .data-table tr:last-child td { border-bottom: none; }
  .data-table tbody tr {
    transition: background var(--transition);
  }
  .data-table tbody tr:hover td { background: var(--accent-bg); }
  .badge {
    display: inline-block;
    background: var(--ink);
    color: #fff;
    font-size: .7rem;
    font-weight: 700;
    padding: 3px 10px;
    border-radius: 99px;
    letter-spacing: .05em;
    white-space: nowrap;
  }
  .score {
    font-weight: 700;
    color: var(--accent);
    font-size: .95rem;
  }

  /* ═══════════════════════════════════════════
     INTAKES
  ═══════════════════════════════════════════ */
 .intakes-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
  gap: 14px;
}
  .intake-card {
    background: var(--surface);
    border: 1.5px solid var(--border);
    border-radius: var(--radius);
    padding: 18px 16px;
    animation: cd-fadeIn .45s cubic-bezier(.22,1,.36,1) var(--delay, 0s) both;
    transition: border-color var(--transition), box-shadow var(--transition), transform var(--transition);
    position: relative;
     display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  }
  .intake-card::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: var(--radius);
    box-shadow: 0 0 0 0 var(--accent-glow);
    transition: box-shadow var(--transition);
  }
  .intake-card:hover {
    border-color: var(--accent);
    transform: translateY(-3px);
    box-shadow: 0 8px 28px var(--accent-glow);
  }
  .intake-name {
    font-family: 'Fraunces', serif;
    font-size: 1.15rem;
    font-weight: 700;
    color: var(--ink);
    margin-bottom: 3px;
  }
  .intake-term {
    font-size: .68rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: .1em;
    color: var(--accent);
    margin-bottom: 10px;
  }
  .intake-window {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: .78rem;
    color: var(--ink-soft);
  }
  .intake-start {
    font-size: .75rem;
    color: var(--ink-xsoft);
    margin-top: 7px;
  }

  /* ═══════════════════════════════════════════
     SALARIES
  ═══════════════════════════════════════════ */
  .salary-list {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  .salary-row {
    display: grid;
    grid-template-columns: 1fr;
    gap: 8px;
  }
  @media (min-width: 540px) {
    .salary-row {
      grid-template-columns: minmax(180px, 240px) 1fr;
      align-items: center;
      gap: 16px;
    }
  }
  .salary-field {
    font-size: clamp(.82rem, 1.5vw, .92rem);
    font-weight: 600;
    color: var(--ink);
    line-height: 1.4;
  }
  .salary-right {
    display: flex;
    align-items: center;
    gap: 12px;
    min-width: 0;
  }
  .salary-bar-wrap {
    flex: 1;
    height: 7px;
    background: var(--surface-2);
    border-radius: 99px;
    overflow: hidden;
  }
  .salary-bar {
    height: 100%;
    background: linear-gradient(90deg, var(--accent), var(--accent-mid));
    border-radius: 99px;
    transition: width .9s cubic-bezier(.22,1,.36,1);
  }
  .salary-value {
    font-size: .82rem;
    font-weight: 700;
    color: var(--accent);
    white-space: nowrap;
    flex-shrink: 0;
  }
  .salary-note {
    font-size: .82rem;
    color: var(--ink-xsoft);
    font-style: italic;
  }

  /* ═══════════════════════════════════════════
     TOP COURSES
  ═══════════════════════════════════════════ */
  .courses-wrap {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }
  .course-chip {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: var(--accent-bg);
    color: var(--accent);
    border: 1.5px solid rgba(37,99,235,.18);
    font-size: clamp(.75rem, 1.4vw, .84rem);
    font-weight: 600;
    padding: 7px 14px;
    border-radius: 99px;
    transition: background var(--transition), color var(--transition),
                border-color var(--transition), transform var(--transition),
                box-shadow var(--transition);
    animation: cd-fadeIn .4s cubic-bezier(.22,1,.36,1) var(--delay, 0s) both;
    cursor: default;
    line-height: 1;
  }
  .course-chip:hover {
    background: var(--accent);
    color: #fff;
    border-color: var(--accent);
    transform: translateY(-2px);
    box-shadow: 0 4px 14px var(--accent-glow);
  }

  /* ═══════════════════════════════════════════
     VISA DOCUMENTS
  ═══════════════════════════════════════════ */
  .visa-list {
    list-style: none;
    display: grid;
    grid-template-columns: 1fr;
    gap: 10px;
  }
  @media (min-width: 580px) {
    .visa-list { grid-template-columns: 1fr 1fr; }
  }
  .visa-item {
    display: flex;
    align-items: flex-start;
    gap: 11px;
    font-size: clamp(.82rem, 1.5vw, .92rem);
    color: var(--ink);
    animation: cd-fadeIn .4s cubic-bezier(.22,1,.36,1) var(--delay, 0s) both;
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius-sm);
    padding: 12px 14px;
    transition: border-color var(--transition), box-shadow var(--transition);
  }
  .visa-item:hover {
    border-color: var(--green);
    box-shadow: 0 2px 12px rgba(22,163,74,.1);
  }
  .visa-check {
    flex-shrink: 0;
    width: 22px; height: 22px;
    border-radius: 50%;
    background: var(--green-bg);
    color: var(--green);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1px;
  }

  /* ═══════════════════════════════════════════
     RESPONSIVE — MOBILE FINE-TUNING
  ═══════════════════════════════════════════ */
  @media (max-width: 480px) {
    .hero-title::after { width: 38px; height: 2.5px; }
    .fees-grid { grid-template-columns: 1fr 1fr; }
    .intakes-grid { grid-template-columns: 1fr 1fr; }
    .visa-list { grid-template-columns: 1fr; }
    .section-header { padding: 16px 18px; }
    .section-body   { padding: 16px 14px; }
  }

  @media (max-width: 360px) {
    .fees-grid    { grid-template-columns: 1fr; }
    .intakes-grid { grid-template-columns: 1fr; }
  }
`;
