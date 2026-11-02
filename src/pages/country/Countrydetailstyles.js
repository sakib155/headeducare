export const countryDetailStyles = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,700&family=Roboto+Slab:wght@400;500;600;700&family=Oswald:wght@400;500;600&display=swap');

  .cd-root *, .cd-root *::before, .cd-root *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  /* ── gostudyin-style design tokens ── */
  .cd-root {
    --gs-navy:   #0f203c;
    --gs-deep:   #0f203c;
    --gs-cherry: #204276;
    --gs-cherry-h: #000000;
    --gs-cobalt: #204276;
    --gs-cobalt-h: #16325c;
    --gs-ice:    #7fb2dd;
    --gs-mint:   #7fb2dd;
    --gs-lav:    #c9d8ea;
    --gs-pine:   #16325c;
    --gs-charcoal: #475569;

    --ink:         #0f203c;
    --ink-soft:    #565F75;
    --ink-xsoft:   #8a94a6;
    --band-light:  #F8F9FA;
    --band-white:  #ffffff;
    --card:        #ffffff;
    --border:      #DEE2E6;
    --border-soft: #E9ECEF;
    --accent:      #204276;
    --accent-mid:  #2b7bb9;
    --accent-bg:   #eaf1f8;
    --accent-glow: rgba(32,66,118,.12);
    --radius-sm:   8px;
    --radius:      12px;
    --radius-lg:   12px;
    --transition:  .25s cubic-bezier(.4,0,.2,1);
    font-family: 'DM Sans', 'IBM Plex Sans', sans-serif;
    background: var(--band-light);
    color: var(--ink);
    min-height: 100vh;
    -webkit-font-smoothing: antialiased;
  }

  .loading-screen {
    display: flex; align-items: center; justify-content: center;
    height: 60vh; font-size: 1rem; color: var(--ink-soft);
  }

  /* ═══════════════════════════════════════════════
     HERO - full-bleed photo, left-aligned, cherry CTA
  ═══════════════════════════════════════════════ */
  .hero {
    position: relative;
    height: 100vh;
    min-height: 640px;
    overflow: hidden;
    background: #0f203c;
  }
  .hero-img {
    width: 100%; height: 100%;
    object-fit: cover;
    animation: heroFadeIn 1.4s ease forwards;
  }
  @keyframes heroFadeIn {
    from { opacity: 0; transform: scale(1.08); }
    to { opacity: .9; transform: scale(1); }
  }
  .hero-placeholder {
    position: absolute; inset: 0;
    background: linear-gradient(135deg, #16325c 0%, #0f203c 100%);
  }
  .hero-overlay {
    position: absolute; inset: 0; z-index: 2;
    background: linear-gradient(270deg, rgba(1,10,28,0) 0%, rgba(1,10,28,0.55) 55%, rgba(1,10,28,0.78) 100%);
  }
  .hero-content {
    position: absolute; inset: 0; z-index: 3;
    display: flex; flex-direction: column; justify-content: center;
    padding: clamp(96px, 12vw, 128px) clamp(24px, 6vw, 64px) clamp(40px, 5vw, 64px);
    max-width: 1312px; margin: 0 auto; right: 0; left: 0;
    animation: heroUp .6s cubic-bezier(.22,1,.36,1) both;
  }
  @keyframes heroUp {
    from { opacity: 0; transform: translateY(24px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .hero-badge {
    display: inline-flex; align-items: center; gap: 10px;
    background: rgba(255,255,255,.12);
    border: 1px solid rgba(255,255,255,.25);
    border-radius: 99px;
    padding: 6px 16px 6px 6px;
    margin-bottom: 18px;
    width: fit-content;
  }
  .hero-flag {
    font-size: 1.4rem; line-height: 1;
    width: 34px; height: 34px;
    display: flex; align-items: center; justify-content: center;
    background: rgba(255,255,255,.18);
    border-radius: 50%;
  }
  .hero-badge-text {
    font-size: 0.875rem; font-weight: 600; text-transform: uppercase;
    letter-spacing: .12em; color: rgba(255,255,255,.85);
  }
  .hero-title {
    font-family: 'Roboto Slab', serif;
    font-size: clamp(2.6rem, 5.8vw, 4.2rem);
    font-weight: 600;
    color: #fff; line-height: 1.05;
    letter-spacing: -.025em;
    margin-bottom: 16px;
    max-width: 720px;
    text-shadow: 0 2px 28px rgba(0,0,0,.45);
  }
  .hero-title em { font-style: normal; color: var(--gs-mint); }
  .hero-desc {
    color: rgba(255,255,255,.92);
    font-size: clamp(.95rem, 1.6vw, 1.1rem);
    max-width: 620px; line-height: 1.75;
    text-shadow: 0 1px 10px rgba(0,0,0,.45);
    margin-bottom: 28px;
  }
  .hero-actions { display: flex; flex-wrap: wrap; gap: 14px; }
  .gs-btn-cherry {
    display: inline-flex; align-items: center; gap: 8px;
    background: var(--gs-cherry); color: #fff;
    border: 1px solid var(--gs-cherry);
    border-radius: 12px;
    padding: 15px 24px;
    font-family: 'DM Sans', sans-serif; font-size: 1rem; font-weight: 700;
    text-decoration: none; cursor: pointer;
    transition: background var(--transition), border-color var(--transition), transform var(--transition);
  }
  .gs-btn-cherry:hover { background: var(--gs-cherry-h); border-color: var(--gs-cherry-h); transform: translateY(-2px); }
  .gs-btn-cherry svg { transition: transform var(--transition); }
  .gs-btn-cherry:hover svg { transform: translateX(3px); }
  .gs-btn-outline-light {
    display: inline-flex; align-items: center; gap: 8px;
    background: transparent; color: #fff;
    border: 1px solid rgba(255,255,255,.7);
    border-radius: 12px;
    padding: 15px 24px;
    font-family: 'DM Sans', sans-serif; font-size: 1rem; font-weight: 700;
    text-decoration: none; cursor: pointer;
    transition: background var(--transition), color var(--transition);
  }
  .gs-btn-outline-light:hover { background: #fff; color: var(--gs-deep); }

  /* ═══════════════════════════════════════════════
     SECTION BANDS - full-bleed alternating
  ═══════════════════════════════════════════════ */
  .band { padding: clamp(56px, 7vw, 88px) clamp(20px, 4vw, 32px); }
  .band-inner { max-width: 1200px; margin: 0 auto; }
  .band-light { background: var(--band-light); }
  .band-white { background: var(--band-white); }
  .band-deep  { background: var(--gs-deep); }
  .band-navy  { background: var(--gs-navy); }
  .band-mint  { background: #16325c; }

  .band-eyebrow {
    font-size: 0.875rem; font-weight: 700; letter-spacing: .14em;
    text-transform: uppercase; color: var(--accent);
    margin-bottom: 10px;
  }
  .band-deep .band-eyebrow, .band-navy .band-eyebrow { color: var(--gs-mint); }
  .band-title {
    font-family: 'Roboto Slab', serif;
    font-size: clamp(1.7rem, 3.4vw, 2.6rem);
    font-weight: 600; line-height: 1.15;
    color: var(--ink);
    letter-spacing: -.02em;
    margin-bottom: 12px;
  }
  .band-title span { color: var(--accent); }
  .band-deep .band-title span, .band-navy .band-title span { color: var(--gs-mint); }
  .band-deep .band-title, .band-navy .band-title { color: #fff; }
  .band-sub {
    font-size: 1rem; line-height: 1.7; color: var(--ink-soft);
    max-width: 640px; margin-bottom: clamp(28px, 4vw, 44px);
  }
  .band-deep .band-sub, .band-navy .band-sub { color: rgba(255,255,255,.75); }

  /* ═══════════════════════════════════════════════
     WHY STUDY - numbered 2-col grid on deep navy
  ═══════════════════════════════════════════════ */
  .why-grid {
    display: grid; grid-template-columns: 1fr 1fr;
    gap: 0 clamp(28px, 4vw, 56px);
  }
  .why-item {
    display: flex; gap: 18px;
    padding: 26px 0;
    border-bottom: 1px solid rgba(255,255,255,.14);
  }
  .why-item:nth-last-child(-n+2) { border-bottom: none; }
  .why-num {
    flex-shrink: 0;
    width: 44px; height: 44px; border-radius: 12px;
    display: flex; align-items: center; justify-content: center;
    background: rgba(127,178,221,.14);
    border: 1px solid rgba(127,178,221,.4);
    color: var(--gs-mint);
    font-family: 'Roboto Slab', serif; font-weight: 600; font-size: 1.05rem;
  }
  .why-title {
    font-family: 'Roboto Slab', serif;
    font-size: 1.12rem; font-weight: 600;
    color: #fff; margin-bottom: 8px; line-height: 1.3;
  }
  .why-desc { font-size: .92rem; color: rgba(255,255,255,.72); line-height: 1.75; }

  /* ═══════════════════════════════════════════════
     COURSE CHIPS - white cards, cobalt, flat
  ═══════════════════════════════════════════════ */
  .courses-wrap { display: flex; flex-wrap: wrap; gap: 12px; }
  .course-chip {
    display: inline-flex; align-items: center; gap: 8px;
    background: var(--band-white);
    color: var(--gs-cobalt);
    border: 1px solid var(--gs-lav);
    font-size: .92rem; font-weight: 700;
    padding: 10px 18px;
    border-radius: 8px;
    transition: background var(--transition), color var(--transition),
                border-color var(--transition), transform var(--transition);
    animation: fadeUp .4s cubic-bezier(.22,1,.36,1) var(--delay, 0s) both;
    cursor: default; line-height: 1.2;
  }
  .course-chip:hover {
    background: var(--gs-cobalt);
    color: #fff;
    border-color: var(--gs-cobalt);
    transform: translateY(-2px);
  }

  /* ═══════════════════════════════════════════════
     INTAKES - flat lavender-border cards
  ═══════════════════════════════════════════════ */
  .intakes-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 16px;
  }
  .intake-card {
    background: var(--band-white);
    border: 1px solid var(--gs-lav);
    border-radius: var(--radius);
    padding: 22px;
    transition: border-color var(--transition), transform var(--transition);
    display: flex; flex-direction: column; gap: 4px;
    animation: fadeUp .45s cubic-bezier(.22,1,.36,1) var(--delay, 0s) both;
  }
  .intake-card:hover { border-color: var(--gs-cobalt); transform: translateY(-3px); }
  .intake-name {
    font-family: 'Roboto Slab', serif;
    font-size: 1.15rem; font-weight: 600;
    color: var(--ink);
  }
  .intake-term {
    font-size: 0.875rem; font-weight: 700;
    text-transform: uppercase; letter-spacing: .12em;
    color: var(--gs-cobalt); margin-bottom: 2px;
  }
  .intake-window {
    display: flex; align-items: center; gap: 6px;
    font-size: 0.875rem; color: var(--ink-soft);
    margin-top: 6px;
  }
  .intake-start { font-size: 0.875rem; color: var(--ink-xsoft); margin-top: 2px; }

  /* ═══════════════════════════════════════════════
     TABLES - flat, gostudyin editorial style
  ═══════════════════════════════════════════════ */
  .table-wrap { overflow-x: auto; -webkit-overflow-scrolling: touch; }
  .table-wrap table { margin: 0; }
  .data-table {
    width: 100%;
    border-collapse: collapse;
    font-size: .92rem;
    min-width: 420px;
    background: transparent;
  }
  .data-table th {
    text-align: left;
    padding: 14px 16px;
    background: transparent;
    color: var(--ink);
    font-size: 0.875rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: .06em;
    border-bottom: 1px solid var(--gs-deep);
    white-space: nowrap;
  }
  .data-table td {
    padding: 14px 16px;
    border-bottom: 1px solid var(--border-soft);
    color: var(--ink);
    vertical-align: middle;
  }
  .data-table tbody tr:last-child td { border-bottom: none; }
  .data-table tbody tr:hover td { background: rgba(32,23,206,.03); }

  .badge {
    display: inline-block;
    background: transparent;
    color: var(--gs-cobalt);
    border: 1px solid var(--gs-cobalt);
    font-size: 0.875rem; font-weight: 700;
    padding: 4px 12px; border-radius: 8px;
    letter-spacing: .06em; white-space: nowrap;
    text-transform: uppercase;
  }

  .score { font-weight: 700; color: var(--gs-cobalt); }

  .fee-note-inline {
    font-size: 0.875rem; color: var(--ink-xsoft);
    font-weight: 400; margin-top: 2px;
  }

  .tuition-table th:not(:first-child),
  .lang-table th:not(:first-child) { text-align: center; }
  .tuition-table td:not(:first-child),
  .lang-table td:not(:first-child) { text-align: center; }
  .tuition-table td:first-child,
  .lang-table td:first-child { font-weight: 700; }
  .tuition-table { min-width: 520px; }
  .lang-table { min-width: 520px; }

  /* dark band table (salaries) */
  .band-deep .data-table th { color: #fff; border-bottom-color: rgba(255,255,255,.35); }
  .band-deep .data-table td { color: rgba(255,255,255,.85); border-bottom-color: rgba(255,255,255,.12); }
  .band-deep .data-table tbody tr:hover td { background: rgba(255,255,255,.04); }
  .band-deep .data-table .score { color: #7fb2dd; }
  .band-deep .data-table td:first-child { color: #fff; }

  /* ═══════════════════════════════════════════════
     CHECKLIST - mint band, check-squares
  ═══════════════════════════════════════════════ */
  .checklist {
    list-style: none; padding: 0; margin: 0;
    display: grid; grid-template-columns: 1fr 1fr;
    gap: 14px clamp(28px, 4vw, 56px);
  }
  .check-item {
    display: flex; align-items: flex-start; gap: 12px;
    font-size: .98rem; color: #ffffff; line-height: 1.6;
    font-weight: 500;
  }
  .check-item svg { flex-shrink: 0; margin-top: 2px; color: #7fb2dd; }

  /* checklist on light band (visa docs) - cobalt checks */
  .checklist-on-light .check-item { color: var(--ink); }
  .checklist-on-light .check-item svg { color: var(--gs-cobalt); }

  /* ═══════════════════════════════════════════════
     SCHOLARSHIPS - white flat cards, lavender borders
  ═══════════════════════════════════════════════ */
  .scholarship-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 16px;
  }
  .scholarship-card {
    display: flex; flex-direction: column; gap: 14px;
    background: var(--band-white);
    border: 1px solid var(--gs-lav);
    border-radius: var(--radius);
    padding: 24px;
    transition: border-color var(--transition), transform var(--transition);
    animation: fadeUp .45s cubic-bezier(.22,1,.36,1) var(--delay, 0s) both;
  }
  .scholarship-card:hover { border-color: var(--gs-cobalt); transform: translateY(-3px); }
  .scholarship-card-head { display: flex; align-items: center; gap: 12px; }
  .scholarship-icon {
    flex-shrink: 0;
    width: 44px; height: 44px;
    display: flex; align-items: center; justify-content: center;
    background: var(--accent-bg);
    color: var(--gs-cobalt);
    border-radius: 12px;
  }
  .scholarship-name {
    font-family: 'Roboto Slab', serif;
    font-size: 1.02rem; font-weight: 600;
    color: var(--ink);
    letter-spacing: -.01em;
    line-height: 1.3;
  }
  .scholarship-row { display: flex; align-items: center; justify-content: space-between; gap: 10px; }
  .scholarship-amount {
    font-family: 'Roboto Slab', serif;
    font-size: 1.25rem; font-weight: 600;
    color: var(--gs-cobalt);
  }
  .scholarship-level {
    flex-shrink: 0;
    font-size: 0.875rem; font-weight: 700;
    text-transform: uppercase; letter-spacing: .08em;
    color: var(--gs-cobalt);
    border: 1px solid var(--gs-cobalt);
    padding: 4px 10px; border-radius: 8px;
    white-space: nowrap;
  }
  .scholarship-link {
    display: inline-flex; align-items: center; gap: 6px;
    font-size: .85rem; font-weight: 700;
    color: var(--gs-cobalt);
    text-decoration: none;
    border-top: 1px solid var(--border-soft);
    padding-top: 14px;
    margin-top: 2px;
    transition: color var(--transition);
  }
  .scholarship-link svg { transition: transform var(--transition); }
  .scholarship-link:hover { color: var(--gs-cobalt-h); }
  .scholarship-link:hover svg { transform: translateX(3px); }
  .scholarship-link-muted { color: var(--ink-xsoft); cursor: default; }
  .scholarship-link-muted:hover { color: var(--ink-xsoft); }

  /* ═══════════════════════════════════════════════
     FINAL CTA band
  ═══════════════════════════════════════════════ */
  .final-cta { text-align: center; }
  .final-cta .band-sub { margin-left: auto; margin-right: auto; }
  .final-cta .hero-actions { justify-content: center; margin-top: 8px; }

  .empty { color: var(--ink-xsoft); font-size: .9rem; font-style: italic; }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(14px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  /* ═══════════════════════════════════════════════
     RESPONSIVE
  ═══════════════════════════════════════════════ */
  @media (max-width: 768px) {
    .hero { height: 88vh; min-height: 560px; }
    .why-grid { grid-template-columns: 1fr; }
    .why-item:nth-last-child(2) { border-bottom: 1px solid rgba(255,255,255,.14); }
    .why-item:last-child { border-bottom: none; }
    .checklist { grid-template-columns: 1fr; }
    .intakes-grid { grid-template-columns: 1fr 1fr; }
    .scholarship-grid { grid-template-columns: 1fr; }
  }
  @media (max-width: 480px) {
    .intakes-grid { grid-template-columns: 1fr; }
  }

  /* ═══════════════════════════════════════════════
     DARK MODE - light bands flip, saturated stay
  ═══════════════════════════════════════════════ */
  .dark .cd-root {
    --ink:         #e2e8f0;
    --ink-soft:    #94a3b8;
    --ink-xsoft:   #64748b;
    --band-light:  #01081a;
    --band-white:  #0d1e30;
    --card:        #0d1e30;
    --border:      #1e3050;
    --border-soft: #162840;
    --accent:      #7fb2dd;
    --accent-bg:   #0d1e40;
    --accent-glow: rgba(127,178,221,.15);
  }
  .dark .cd-root .band-deep { background: #000; }
  .dark .cd-root .band-navy { background: #01081a; }
  .dark .cd-root .data-table th { color: var(--ink); }
  .dark .cd-root .badge { color: #7fb2dd; border-color: #7fb2dd; }
  .dark .cd-root .score { color: #7fb2dd; }
  .dark .cd-root .intake-card { background: var(--band-white); }
  .dark .cd-root .course-chip { background: var(--band-white); color: #7fb2dd; border-color: var(--border); }
  .dark .cd-root .course-chip:hover { background: #7fb2dd; color: #0f203c; border-color: #7fb2dd; }
  .dark .cd-root .scholarship-card { background: var(--band-white); border-color: var(--border); }
  .dark .cd-root .scholarship-icon { background: rgba(127,178,221,.14); color: #7fb2dd; }
  .dark .cd-root .scholarship-amount { color: #7fb2dd; }
  .dark .cd-root .scholarship-level { color: #7fb2dd; border-color: #7fb2dd; }
  .dark .cd-root .scholarship-link { color: #7fb2dd; }
  .dark .cd-root .intake-term { color: #7fb2dd; }
  .dark .cd-root .checklist-on-light .check-item { color: var(--ink); }
  .dark .cd-root .checklist-on-light .check-item svg { color: #7fb2dd; }
  .dark .cd-root .band-mint { background: #16325c; }
  .dark .cd-root .band-mint .band-title,
  .dark .cd-root .band-mint .band-eyebrow { color: #ffffff !important; }
  .dark .cd-root .band-mint .check-item { color: #ffffff; }
  .dark .cd-root .band-mint .check-item svg { color: #7fb2dd; }
  .dark .cd-root .band-title { color: #f1f5f9; }
  .dark .cd-root .band-title span { color: #7fb2dd; }
  .dark .cd-root .band-light .band-eyebrow { color: #7fb2dd; }
`;
