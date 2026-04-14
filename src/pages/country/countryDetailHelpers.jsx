// ─────────────────────────────────────────────────────────────────────────────
// countryDetailHelpers.jsx
// Shared icons, utility functions, and sub-components for CountryDetails pages.
// ─────────────────────────────────────────────────────────────────────────────

// ── inline SVG icon ──────────────────────────────────────────────────────────
export const Icon = ({ d, size = 18 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d={d} />
  </svg>
);

export const icons = {
  money: "M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",
  language: "M5 8l6 6M4 14l6-6 2-3M2 5h12M7 2h1M22 22l-5-10-5 10M14 18h6",
  calendar:
    "M8 2v4M16 2v4M3 10h18M3 6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6z",
  briefcase: "M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16M2 9h20",
  document:
    "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6",
  book: "M4 19.5A2.5 2.5 0 0 1 6.5 17H20M4 19.5A2.5 2.5 0 0 0 6.5 22H20V2H6.5A2.5 2.5 0 0 0 4 4.5v15z",
  check: "M20 6L9 17l-5-5",
};

// ── helpers ──────────────────────────────────────────────────────────────────
export const fmt = (n, cur) =>
  n != null ? `${cur} ${n.toLocaleString()}` : "—";

export const pct = (min, max, cur) =>
  min && max
    ? `${fmt(min, cur)} – ${fmt(max, cur)}`
    : fmt(min ?? max, cur ?? "");

// ── SectionCard ──────────────────────────────────────────────────────────────
export function SectionCard({ icon, title, children }) {
  return (
    <div className="section-card">
      <div className="section-header">
        <span className="section-icon" style={{ color: '#BBB9BB' }}>
          <Icon d={icons[icon]} size={20} />
        </span>
        <h2 className="section-title">{title}</h2>
      </div>
      <div className="section-body">{children}</div>
    </div>
  );
}

// ── TuitionFees ──────────────────────────────────────────────────────────────
export function TuitionFees({ fees }) {
  if (!fees) return <p className="empty">No tuition data available.</p>;
  return (
    <div className="fees-grid">
      {Object.entries(fees).map(([level, data]) => (
        <div key={level} className="fee-card">
          <div className="textWhite">
            {level.charAt(0).toUpperCase() + level.slice(1)}
          </div>
          <div className="fee-range">
            {pct(data.min, data.max, data.currency)}
          </div>
          {data.note && <div className="fee-note">{data.note}</div>}
        </div>
      ))}
    </div>
  );
}

// ── LanguageRequirements ─────────────────────────────────────────────────────
export function LanguageRequirements({ reqs }) {
  if (!reqs?.length)
    return <p className="empty">No language data available.</p>;
  const hasLevel = reqs.some((r) => r.level);
  const hasMaxScore = reqs.some((r) => r.max_score);
  return (
    <div className="table-wrap">
      <table className="data-table">
        <thead>
          <tr >
            <th className="bgWhite">Test</th>
            {hasLevel && <th className="bgWhite">Level</th>}
            <th className="bgWhite">Min Score</th>
            {hasMaxScore && <th className="bgWhite">Max Score</th>}
          </tr>
        </thead>
        <tbody>
          {reqs.map((r, i) => (
            <tr key={i}>
              <td>
                <span className="badge">{r.test}</span>
              </td>
              {hasLevel && <td className="score">{r.level ?? "—"}</td>}
              <td className="score">{r.min_score}</td>
              {hasMaxScore && <td className="score">{r.max_score ?? "—"}</td>}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ── Intakes ──────────────────────────────────────────────────────────────────
export function Intakes({ intakes }) {
  if (!intakes?.length)
    return <p className="empty">No intake data available.</p>;
  return (
    <div className="intakes-grid">
      {intakes.map((intake, i) => (
        <div
          key={i}
          className="intake-card"
          style={{ "--delay": `${i * 0.08}s` }}
        >
          <div className="intake-name">{intake.name}</div>
          <div className="textWhite">{intake.term}</div>
          <div className="intake-window">
            <Icon d={icons.calendar} size={13} />
            <span>{intake.apply_window}</span>
          </div>
          {intake.start_month && (
            <div className="intake-start">Starts: {intake.start_month}</div>
          )}
        </div>
      ))}
    </div>
  );
}

// ── Salaries ─────────────────────────────────────────────────────────────────
export function Salaries({ salaries }) {
  if (!salaries?.length)
    return <p className="empty">No salary data available.</p>;
  const maxVal = Math.max(
    ...salaries.filter((s) => s.max).map((s) => s.max),
    1,
  );
  return (
    <div className="salary-list">
      {salaries.map((s, i) => {
        const hasRange = s.min && s.max;
        const barPct = hasRange ? Math.round((s.max / maxVal) * 100) : null;
        return (
          <div key={i} className="salary-row">
            <div className="salary-field textWhite">{s.field}</div>
            <div className="salary-right">
              {hasRange ? (
                <>
                  <div className="salary-bar-wrap">
                    <div
                      className="salary-bar"
                      style={{ width: `${barPct}%` }}
                    />
                  </div>
                  <div className="salary-value">
                    {pct(s.min, s.max, s.currency)}
                  </div>
                </>
              ) : (
                <span className="salary-note">
                  {s.note ?? "Data unavailable"}
                </span>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ── TopCourses ───────────────────────────────────────────────────────────────
export function TopCourses({ courses }) {
  if (!courses?.length)
    return <p className="empty">No course data available.</p>;
  return (
    <div className="courses-wrap">
      {courses.map((c, i) => (
        <span
          key={i}
          className="course-chip bgWhite"
          style={{ "--delay": `${i * 0.04}s` }}
        >
          <Icon d={icons.book} size={13} />
          {c}
        </span>
      ))}
    </div>
  );
}

// ── VisaDocs ─────────────────────────────────────────────────────────────────
export function VisaDocs({ docs }) {
  if (!docs?.length) return <p className="empty">No visa data available.</p>;
  return (
    <ul className="visa-list">
      {docs.map((doc, i) => (
        <li key={i} className="visa-item" style={{ "--delay": `${i * 0.06}s` }}>
          <span className="visa-check">
            <Icon d={icons.check} size={13} />
          </span>
          {doc}
        </li>
      ))}
    </ul>
  );
}
