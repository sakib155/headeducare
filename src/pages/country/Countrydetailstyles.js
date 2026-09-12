export const countryDetailStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,700;0,900;1,700&family=Outfit:wght@400;500;600;700&display=swap');

  .cd-root *, .cd-root *::before, .cd-root *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  .cd-root {
    --ink:         #0b1120;
    --ink-soft:    #475569;
    --ink-xsoft:   #94a3b8;
    --surface:     #f8fafc;
    --surface-2:   #f1f5f9;
    --card:        #ffffff;
    --border:      #e2e8f0;
    --border-soft: #f1f5f9;
    --accent:      #1e40af;
    --accent-mid:  #2563eb;
    --accent-bg:   #eef2ff;
    --accent-glow: rgba(30,64,175,.12);
    --green:       #16a34a;
    --radius-sm:   8px;
    --radius:      14px;
    --radius-lg:   20px;
    --shadow-sm:   0 1px 3px rgba(0,0,0,.06);
    --shadow:      0 4px 20px rgba(0,0,0,.07);
    --shadow-lg:   0 8px 32px rgba(0,0,0,.1);
    --transition:  .25s cubic-bezier(.4,0,.2,1);
    font-family: 'Outfit', sans-serif;
    background: var(--surface);
    color: var(--ink);
    min-height: 100vh;
    -webkit-font-smoothing: antialiased;
  }

  /* ── loading ── */
  .loading-screen {
    display: flex; align-items: center; justify-content: center;
    height: 60vh; font-size: 1rem; color: var(--ink-soft);
  }

  /* ═══════════════════════════════════════════════
     HERO — modern panoramic
  ═══════════════════════════════════════════════ */
  .hero {
    position: relative;
    height: clamp(340px, 54vw, 500px);
    overflow: hidden;
    background: #0b1120;
  }
  .hero-img {
    width: 100%; height: 100%;
    object-fit: cover; opacity: .4;
    transform: scale(1.05);
    transition: opacity 1.2s ease, transform 8s ease;
    filter: saturate(1.05) brightness(.85);
  }
  .hero-img.loaded { opacity: .48; transform: scale(1); }
  .hero-placeholder {
    position: absolute; inset: 0;
    background: linear-gradient(135deg, #0f1a30 0%, #0b1120 100%);
  }
  .hero-overlay {
    position: absolute; inset: 0; z-index: 2;
    background: linear-gradient(to top, rgba(0,0,0,.88) 0%, rgba(0,0,0,.28) 50%, transparent 100%);
  }
  .hero-content {
    position: absolute; bottom: 0; left: 0; right: 0; z-index: 3;
    padding: clamp(32px, 5vw, 64px) clamp(24px, 6vw, 64px);
    animation: heroUp .6s cubic-bezier(.22,1,.36,1) both;
  }
  @keyframes heroUp {
    from { opacity: 0; transform: translateY(24px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .hero-badge {
    display: inline-flex; align-items: center; gap: 10px;
    background: rgba(255,255,255,.1);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(255,255,255,.12);
    border-radius: 99px;
    padding: 6px 16px 6px 6px;
    margin-bottom: 16px;
  }
  .hero-flag {
    font-size: 1.4rem; line-height: 1;
    width: 34px; height: 34px;
    display: flex; align-items: center; justify-content: center;
    background: rgba(255,255,255,.15);
    border-radius: 50%;
  }
  .hero-badge-text {
    font-size: .75rem; font-weight: 600; text-transform: uppercase;
    letter-spacing: .12em; color: rgba(255,255,255,.8);
  }
  .hero-title {
    font-family: 'Fraunces', serif;
    font-size: clamp(2.4rem, 5.8vw, 3.8rem);
    font-weight: 900;
    color: #fff; line-height: 1.06;
    letter-spacing: -.025em;
    margin-bottom: 14px;
    text-shadow: 0 2px 28px rgba(0,0,0,.45);
  }
  .hero-desc {
    color: rgba(255,255,255,.7);
    font-size: clamp(.9rem, 1.6vw, 1.05rem);
    max-width: 640px; line-height: 1.75;
    text-shadow: 0 1px 10px rgba(0,0,0,.3);
  }
  .hero-accent {
    display: block;
    width: 60px; height: 4px;
    background: linear-gradient(90deg, var(--accent-mid), #60a5fa);
    border-radius: 99px;
    margin-top: 18px;
  }

  /* ═══════════════════════════════════════════════
     SECTIONS
  ═══════════════════════════════════════════════ */
  .sections {
    max-width: 1200px;
    margin: 0 auto;
    padding: clamp(32px, 5vw, 56px) clamp(16px, 4vw, 32px) clamp(64px, 8vw, 100px);
    display: flex; flex-direction: column;
    gap: 28px;
  }

  .section-card {
    background: var(--card);
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    overflow: hidden;
    box-shadow: var(--shadow-sm);
    animation: fadeUp .5s cubic-bezier(.22,1,.36,1) both;
    transition: box-shadow var(--transition);
  }
  .section-card:hover { box-shadow: var(--shadow); }
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(14px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  .section-header {
    display: flex; align-items: center;
    padding: 16px 24px;
    border-bottom: 1px solid var(--border-soft);
  }
  .section-title {
    font-family: 'Fraunces', serif;
    font-size: 1rem; font-weight: 700;
    color: var(--ink); letter-spacing: -.01em;
  }
  .section-body {
    padding: clamp(16px, 2.5vw, 24px) clamp(16px, 2.5vw, 24px);
  }
  .empty {
    color: var(--ink-xsoft); font-size: .85rem; font-style: italic;
  }

  /* ═══════════════════════════════════════════════
     TABLES — Google Docs style
  ═══════════════════════════════════════════════ */
  .table-wrap {
    overflow-x: auto;
    border: 1px solid var(--border);
    -webkit-overflow-scrolling: touch;
  }
  .table-wrap table { margin: 0; }
  .data-table {
    width: 100%;
    border-collapse: collapse;
    font-size: .875rem;
    min-width: 360px;
  }
  .data-table th {
    text-align: left;
    padding: 10px 14px;
    background: var(--surface-2);
    color: var(--ink);
    font-size: .8rem;
    font-weight: 600;
    border: 1px solid var(--border);
    white-space: nowrap;
  }
  .data-table td {
    padding: 10px 14px;
    border: 1px solid var(--border);
    color: var(--ink);
    vertical-align: middle;
  }

  .badge {
    display: inline-block;
    background: var(--accent);
    color: #fff;
    font-size: .65rem; font-weight: 700;
    padding: 3px 10px; border-radius: 99px;
    letter-spacing: .04em; white-space: nowrap;
  }

  .score {
    font-weight: 600;
    color: var(--accent);
  }

  .fee-note-inline {
    font-size: .6rem; color: var(--ink-xsoft);
    font-weight: 400; margin-top: 1px;
  }

  .tuition-table th:not(:first-child),
  .lang-table th:not(:first-child) { text-align: center; }
  .tuition-table td:not(:first-child),
  .lang-table td:not(:first-child) { text-align: center; }
  .tuition-table td:first-child,
  .lang-table td:first-child { font-weight: 600; }
  .tuition-table { min-width: 480px; }
  .lang-table { min-width: 480px; }

  /* ═══════════════════════════════════════════════
     INTAKES — card grid
  ═══════════════════════════════════════════════ */
  .intakes-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 12px;
  }
  .intake-card {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: 16px;
    transition: border-color var(--transition), box-shadow var(--transition), transform var(--transition);
    display: flex; flex-direction: column; gap: 4px;
    animation: fadeUp .45s cubic-bezier(.22,1,.36,1) var(--delay, 0s) both;
  }
  .intake-card:hover {
    border-color: var(--accent);
    transform: translateY(-2px);
    box-shadow: 0 6px 20px var(--accent-glow);
  }
  .intake-name {
    font-family: 'Fraunces', serif;
    font-size: 1.05rem; font-weight: 700;
    color: var(--ink);
  }
  .intake-term {
    font-size: .65rem; font-weight: 700;
    text-transform: uppercase; letter-spacing: .1em;
    color: var(--accent); margin-bottom: 2px;
  }
  .intake-window {
    display: flex; align-items: center; gap: 5px;
    font-size: .78rem; color: var(--ink-soft);
    margin-top: 4px;
  }
  .intake-start {
    font-size: .72rem; color: var(--ink-xsoft);
    margin-top: 2px;
  }

  /* ═══════════════════════════════════════════════
     TOP COURSES
  ═══════════════════════════════════════════════ */
  .courses-wrap {
    display: flex; flex-wrap: wrap; gap: 8px;
  }
  .course-chip {
    display: inline-flex; align-items: center; gap: 6px;
    background: var(--accent-bg);
    color: var(--accent);
    border: 1px solid rgba(30,64,175,.12);
    font-size: .8rem; font-weight: 600;
    padding: 6px 14px;
    border-radius: 99px;
    transition: background var(--transition), color var(--transition),
                border-color var(--transition), transform var(--transition),
                box-shadow var(--transition);
    animation: fadeUp .4s cubic-bezier(.22,1,.36,1) var(--delay, 0s) both;
    cursor: default; line-height: 1;
  }
  .course-chip:hover {
    background: var(--accent);
    color: #fff;
    border-color: var(--accent);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px var(--accent-glow);
  }

  /* ═══════════════════════════════════════════════
     RESPONSIVE
  ═══════════════════════════════════════════════ */
  @media (max-width: 640px) {
    .intakes-grid { grid-template-columns: 1fr 1fr; }
    .section-header { padding: 14px 18px; }
    .section-body   { padding: 14px; }
    .data-table { font-size: .8rem; }
  }
  @media (max-width: 400px) {
    .intakes-grid { grid-template-columns: 1fr; }
  }

  /* ═══════════════════════════════════════════════
     DARK MODE
  ═══════════════════════════════════════════════ */
  .dark .cd-root {
    --ink:         #e2e8f0;
    --ink-soft:    #94a3b8;
    --ink-xsoft:   #64748b;
    --surface:     #01081a;
    --surface-2:   #0a1628;
    --card:        #0d1e30;
    --border:      #1e3050;
    --border-soft: #162840;
    --accent:      #60a5fa;
    --accent-mid:  #3b82f6;
    --accent-bg:   #0d1e40;
    --accent-glow: rgba(96,165,250,.15);
    --green:       #4ade80;
  }
  .dark .cd-root .hero { background: #000; }
  
  .dark .cd-root .data-table th { background: var(--surface); color: var(--ink); }
  .dark .cd-root .badge { background: var(--accent); color: #fff; }
  .dark .cd-root .intake-card { background: var(--surface); }
`;