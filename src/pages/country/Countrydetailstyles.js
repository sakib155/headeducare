// ─────────────────────────────────────────────────────────────────────────────
// countryDetailStyles.js
// CSS string shared across CountryDetails pages.
// Usage:  import { countryDetailStyles as css } from "./countryDetailStyles";
//         then render: <style>{css}</style>
// ─────────────────────────────────────────────────────────────────────────────

export const countryDetailStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@400;500;600&display=swap');

  :root {
    --ink:        #0f1117;
    --ink-soft:   #4a4f5e;
    --ink-xsoft:  #8a90a0;
    --surface:    #f7f8fc;
    --card:       #ffffff;
    --border:     #e4e7f0;
    --accent:     #1a56e8;
    --accent-bg:  #eef2fd;
    --radius:     14px;
    --shadow:     0 2px 18px rgba(0,0,0,.07);
  }

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  /* ── root ── */
  .cd-root {
    font-family: 'DM Sans', sans-serif;
    background: var(--surface);
    min-height: 100vh;
    color: var(--ink);
  }

  /* ── loading / not-found screen ── */
  .loading-screen {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px;
    height: 60vh;
    font-family: 'DM Sans', sans-serif;
    color: var(--ink-soft);
  }
  .spinner {
    width: 36px; height: 36px;
    border: 3px solid var(--border);
    border-top-color: var(--accent);
    border-radius: 50%;
    animation: spin .7s linear infinite;
  }
  @keyframes spin { to { transform: rotate(360deg); } }

  /* ── hero ── */
  .hero {
    position: relative;
    height: 380px;
    overflow: hidden;
    background: #0f1117;
  }
  .hero-img {
    width: 100%; height: 100%;
    object-fit: cover;
    opacity: .55;
  }
  .hero-placeholder {
    position: absolute; inset: 0;
    background: linear-gradient(135deg, #1a1f35 0%, #0f1117 100%);
  }
  .hero-overlay {
    position: absolute; inset: 0;
    background: linear-gradient(to top, rgba(0,0,0,.75) 0%, transparent 60%);
  }
  .hero-content {
    position: absolute; bottom: 0; left: 0; right: 0;
    padding: 40px 48px;
    animation: slideUp .6s ease both;
  }
  @keyframes slideUp {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .hero-flag   { font-size: 3rem; margin-bottom: 8px; }
  .hero-title  {
    font-family: 'Playfair Display', serif;
    font-size: clamp(2rem, 5vw, 3.2rem);
    font-weight: 900; color: #fff;
    line-height: 1.1; margin-bottom: 10px;
  }
  .hero-desc {
    color: rgba(255,255,255,.75);
    font-size: .95rem;
    max-width: 640px;
    line-height: 1.6;
  }

  /* ── sections container ── */
  .sections {
    max-width: 900px; margin: 0 auto;
    padding: 48px 24px 80px;
    display: flex; flex-direction: column; gap: 28px;
  }

  /* ── section card ── */
  .section-card {
    background: var(--card);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    overflow: hidden;
    box-shadow: var(--shadow);
    animation: fadeIn .5s ease both;
  }
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(12px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .section-header {
    display: flex; align-items: center; gap: 12px;
    padding: 18px 24px;
    border-bottom: 1px solid var(--border);
    background: var(--accent-bg);
  }
  .section-icon {
    width: 36px; height: 36px; border-radius: 8px;
    background: var(--accent); color: #fff;
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0;
  }
  .section-title {
    font-family: 'Playfair Display', serif;
    font-size: 1.15rem; font-weight: 700; color: var(--ink);
  }
  .section-body { padding: 24px; }
  .empty { color: var(--ink-xsoft); font-size: .9rem; }

  /* ── tuition fees ── */
  .fees-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    gap: 14px;
  }
  .fee-card {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 10px; padding: 16px;
    transition: box-shadow .2s;
  }
  .fee-card:hover { box-shadow: 0 4px 20px rgba(26,86,232,.12); }
  .fee-label {
    font-size: .75rem; font-weight: 600;
    text-transform: uppercase; letter-spacing: .08em;
    color: var(--accent); margin-bottom: 6px;
  }
  .fee-range { font-size: .95rem; font-weight: 600; color: var(--ink); }
  .fee-note  { font-size: .75rem; color: var(--ink-xsoft); margin-top: 4px; }

  /* ── language table ── */
  .table-wrap { overflow-x: auto; }
  .data-table {
    width: 100%; border-collapse: collapse; font-size: .9rem;
  }
  .data-table th {
    text-align: left; padding: 10px 14px;
    background: var(--surface); color: var(--ink-soft);
    font-size: .75rem; font-weight: 600;
    text-transform: uppercase; letter-spacing: .06em;
    border-bottom: 2px solid var(--border);
  }
  .data-table td {
    padding: 11px 14px;
    border-bottom: 1px solid var(--border);
    color: var(--ink);
  }
  .data-table tr:last-child td { border-bottom: none; }
  .data-table tr:hover td { background: var(--accent-bg); }
  .badge {
    display: inline-block;
    background: var(--ink); color: #fff;
    font-size: .75rem; font-weight: 600;
    padding: 2px 9px; border-radius: 20px; letter-spacing: .04em;
  }
  .score { font-weight: 600; color: var(--accent); }

  /* ── intakes ── */
  .intakes-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 14px;
  }
  .intake-card {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 10px; padding: 16px;
    animation: fadeIn .45s ease var(--delay, 0s) both;
    transition: border-color .2s, box-shadow .2s;
  }
  .intake-card:hover {
    border-color: var(--accent);
    box-shadow: 0 4px 16px rgba(26,86,232,.12);
  }
  .intake-name {
    font-family: 'Playfair Display', serif;
    font-size: 1.1rem; font-weight: 700;
    color: var(--ink); margin-bottom: 2px;
  }
  .intake-term {
    font-size: .75rem; font-weight: 600;
    text-transform: uppercase; letter-spacing: .07em;
    color: var(--accent); margin-bottom: 8px;
  }
  .intake-window {
    display: flex; align-items: center; gap: 5px;
    font-size: .8rem; color: var(--ink-soft);
  }
  .intake-start { font-size: .78rem; color: var(--ink-xsoft); margin-top: 6px; }

  /* ── salaries ── */
  .salary-list { display: flex; flex-direction: column; gap: 14px; }
  .salary-row  {
    display: flex; align-items: center;
    gap: 12px; flex-wrap: wrap;
  }
  .salary-field {
    flex: 0 0 220px;
    font-size: .9rem; font-weight: 500; color: var(--ink);
  }
  .salary-right {
    flex: 1; display: flex; align-items: center;
    gap: 12px; min-width: 0;
  }
  .salary-bar-wrap {
    flex: 1; height: 8px;
    background: var(--border); border-radius: 99px; overflow: hidden;
  }
  .salary-bar {
    height: 100%; background: var(--accent); border-radius: 99px;
    transition: width .8s cubic-bezier(.22,1,.36,1);
  }
  .salary-value {
    font-size: .85rem; font-weight: 600;
    color: var(--accent); white-space: nowrap;
  }
  .salary-note { font-size: .83rem; color: var(--ink-xsoft); font-style: italic; }

  /* ── top courses ── */
  .courses-wrap { display: flex; flex-wrap: wrap; gap: 10px; }
  .course-chip {
    display: inline-flex; align-items: center; gap: 6px;
    background: var(--accent-bg); color: var(--accent);
    border: 1px solid rgba(26,86,232,.2);
    font-size: .83rem; font-weight: 500;
    padding: 6px 14px; border-radius: 99px;
    transition: background .2s, color .2s;
    animation: fadeIn .4s ease var(--delay, 0s) both;
    cursor: default;
  }
  .course-chip:hover { background: var(--accent); color: #fff; }

  /* ── visa docs ── */
  .visa-list  { list-style: none; display: flex; flex-direction: column; gap: 10px; }
  .visa-item  {
    display: flex; align-items: flex-start; gap: 10px;
    font-size: .9rem; color: var(--ink);
    animation: fadeIn .4s ease var(--delay, 0s) both;
  }
  .visa-check {
    flex-shrink: 0; width: 22px; height: 22px;
    border-radius: 50%; background: #dcfce7; color: #16a34a;
    display: flex; align-items: center; justify-content: center;
    margin-top: 1px;
  }

  /* ── responsive ── */
  @media (max-width: 600px) {
    .hero-content { padding: 24px 20px; }
    .sections     { padding: 28px 16px 60px; }
    .salary-field { flex: 0 0 100%; }
  }
`;
