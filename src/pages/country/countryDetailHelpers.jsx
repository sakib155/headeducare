export const fmt = (n, cur) =>
  n != null ? `${cur} ${n.toLocaleString()}` : "-";

export const pct = (min, max, cur) =>
  min && max
    ? `${fmt(min, cur)} – ${fmt(max, cur)}`
    : fmt(min ?? max, cur ?? "");

export const Icon = ({ d, size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d={d} />
  </svg>
);

export function SectionCard({ title, children }) {
  return (
    <div className="section-card">
      <div className="section-header">
        <h2 className="section-title">{title}</h2>
      </div>
      <div className="section-body">{children}</div>
    </div>
  );
}

const LEVEL_LABELS = { undergraduate: "UG", postgraduate: "PG", mba: "MBA", doctorate: "Doctorate" };

export function TuitionFees({ fees }) {
  if (!fees) return <p className="empty">No tuition data available.</p>;
  const levels = ["undergraduate", "postgraduate", "mba", "doctorate"];
  return (
    <div className="table-wrap">
      <table className="data-table tuition-table">
        <thead>
          <tr>
            <th>Program</th>
            {levels.map((l) => <th key={l}>{LEVEL_LABELS[l]}</th>)}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><span className="badge">Annual Tuition</span></td>
            {levels.map((l) => {
              const d = fees[l];
              return (
                <td key={l} className="score">
                  {d ? pct(d.min, d.max, d.currency) : "-"}
                  {d?.note && <div className="fee-note-inline">{d.note}</div>}
                </td>
              );
            })}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export function LanguageRequirements({ reqs }) {
  if (!reqs?.length) return <p className="empty">No language data available.</p>;
  const levels = ["Undergraduate", "Postgraduate", "MBA", "Doctorate"];
  const tests = [...new Set(reqs.map((r) => r.test))];
  const getScore = (test, level) => {
    const found = reqs.find((r) => r.test === test && r.level === level);
    return found ? found.min_score + (found.max_score ? "–" + found.max_score : "") : "-";
  };
  return (
    <div className="table-wrap">
      <table className="data-table lang-table">
        <thead>
          <tr>
            <th>Test</th>
            {levels.map((l) => <th key={l}>{l}</th>)}
          </tr>
        </thead>
        <tbody>
          {tests.map((test, i) => (
            <tr key={i}>
              <td><span className="badge">{test}</span></td>
              {levels.map((l) => <td key={l} className="score">{getScore(test, l)}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function Intakes({ intakes }) {
  if (!intakes?.length) return <p className="empty">No intake data available.</p>;
  return (
    <div className="intakes-grid">
      {intakes.map((intake, i) => (
        <div key={i} className="intake-card" style={{ "--delay": `${i * 0.08}s` }}>
          <div className="intake-name">{intake.name}</div>
          <div className="intake-term">{intake.term}</div>
          <div className="intake-window">
            <Icon d="M8 2v4M16 2v4M3 10h18M3 6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6z" size={13} />
            <span>{intake.apply_window}</span>
          </div>
          {intake.start_month && <div className="intake-start">Starts: {intake.start_month}</div>}
        </div>
      ))}
    </div>
  );
}

export function Salaries({ salaries }) {
  if (!salaries?.length) return <p className="empty">No salary data available.</p>;
  return (
    <div className="table-wrap">
      <table className="data-table">
        <thead>
          <tr><th>Field</th><th>Annual Salary</th></tr>
        </thead>
        <tbody>
          {salaries.map((s, i) => (
            <tr key={i}>
              <td style={{ fontWeight: 600 }}>{s.field}</td>
              <td className="score">
                {s.min && s.max ? pct(s.min, s.max, s.currency) : s.note ?? "-"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function TopCourses({ courses }) {
  if (!courses?.length) return <p className="empty">No course data available.</p>;
  return (
    <div className="courses-wrap">
      {courses.map((c, i) => (
        <span key={i} className="course-chip" style={{ "--delay": `${i * 0.04}s` }}>
          {c}
        </span>
      ))}
    </div>
  );
}

export function DocumentsTable({ items }) {
  if (!items?.length) return null;
  return (
    <div className="table-wrap">
      <table className="data-table">
        <thead>
          <tr><th>Required Documents</th></tr>
        </thead>
        <tbody>
          {items.map((item, i) => <tr key={i}><td>{item}</td></tr>)}
        </tbody>
      </table>
    </div>
  );
}

export function ScholarshipTable({ scholarships }) {
  if (!scholarships?.length) return <p className="empty">No scholarship data available.</p>;
  const splitEntry = (s) => {
    const colon = s.indexOf(":");
    if (colon !== -1) return [s.slice(0, colon).trim(), s.slice(colon + 1).trim()];
    return [s, ""];
  };
  return (
    <div className="table-wrap">
      <table className="data-table">
        <thead>
          <tr><th>Scholarship / Funding</th><th>Details</th></tr>
        </thead>
        <tbody>
          {scholarships.map((s, i) => {
            const [name, detail] = splitEntry(s);
            return (
              <tr key={i}>
                <td style={{ fontWeight: 600 }}>{name}</td>
                <td className="score">{detail}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}