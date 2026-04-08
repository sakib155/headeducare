/* ── Liberal Arts Education — Pull quote hero, alternating pillar rows, career grid (NO stats strip, NO FAQ) ── */
import { Brain, MessageCircle, BookOpen, Globe, Compass, Microscope } from "lucide-react";
import {
  MENTOR_STYLES, useReveal,
  MentorHero, MentorSectionHeader, MentorAlternatingFeatures,
  MentorCtaBanner, MentorTagList, MentorPullQuote,
} from "./mentorshipComponents";
import { liberalArtsEducationData as d } from "./mentorshipData";

const pillarIcons = [Brain, MessageCircle, BookOpen, Globe, Compass, Microscope];

export default function LiberalArtsEducation() {
  const containerRef = useReveal();
  return (
    <>
      <style>{MENTOR_STYLES + `
        .lae-stats { display:flex; gap:32px; flex-wrap:wrap; margin-top:32px; }
        .lae-stat-item { display:flex; flex-direction:column; }
        .lae-stat-val { font-size:28px; font-weight:900; color:#005B8F; font-family:Lexend,sans-serif; line-height:1; }
        .lae-stat-lbl { font-size:11px; color:#9ca3af; font-family:Lexend,sans-serif; font-weight:600; text-transform:uppercase; letter-spacing:.06em; margin-top:4px; }
        .career-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:12px; }
        .career-item { padding:16px; background:#fff; border:1px solid rgba(0,91,143,0.1); border-radius:12px; display:flex; align-items:center; gap:10px; font-size:13px; font-weight:600; color:#0d121b; font-family:Lexend,sans-serif; }
        .career-dot { width:8px; height:8px; border-radius:50%; background:#005B8F; flex-shrink:0; }
        .dark .career-item { background:#02182a; border-color:rgba(255,255,255,0.06); color:#f1f1f1; }
        @media(max-width:768px){ .career-grid{ grid-template-columns:1fr 1fr !important; } }
        @media(max-width:480px){ .career-grid{ grid-template-columns:1fr !important; } }
      `}</style>
      <div className="mtr-page" ref={containerRef}>

        <MentorHero {...d.hero} />

        {/* Philosophy section with pull quote — editorial feel */}
        <section className="mtr-section">
          <div className="mtr-container">
            <div style={{ maxWidth: 800 }}>
              <p className="mtr-subtitle">{d.approach.label}</p>
              <h2 className="mtr-h2">{d.approach.title} <span>{d.approach.highlight}</span></h2>
              <p className="mtr-body" style={{ fontSize: 16, marginBottom: 8 }}>{d.approach.body}</p>
              <MentorPullQuote
                quote="The object of education is to teach us to love what is beautiful and to hate what is base."
                author="Plato"
                role="Philosopher & founder of the liberal arts tradition"
              />
              {/* Inline stats strip */}
              <div className="lae-stats mtr-reveal">
                {d.stats.map((s, i) => (
                  <div key={i} className="lae-stat-item">
                    <span className="lae-stat-val">{s.value}</span>
                    <span className="lae-stat-lbl">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="mtr-divider" />

        {/* Alternating pillar rows */}
        <section className="mtr-section-alt">
          <div className="mtr-container">
            <MentorSectionHeader label="Core Pillars" title="Six Foundations of" highlight="Liberal Arts Education" body="Each pillar represents a capacity cultivated through a liberal arts education that translates directly into lifelong advantage." />
            <MentorAlternatingFeatures features={d.pillars} icons={pillarIcons} />
          </div>
        </section>

        <div className="mtr-divider" />

        {/* Career grid — visually distinct from tag cloud */}
        <section className="mtr-section">
          <div className="mtr-container">
            <MentorSectionHeader
              label="Career Outcomes"
              title="Where Liberal Arts"
              highlight="Graduates Succeed"
              body="A liberal arts degree is a passport to every sector. Here is where our graduates go."
            />
            <div className="career-grid">
              {d.careerPaths.map((c, i) => (
                <div key={i} className="career-item mtr-reveal">
                  <span className="career-dot" />{c}
                </div>
              ))}
            </div>
          </div>
        </section>

        <MentorCtaBanner
          title="Explore a Liberal Arts Education in the USA"
          desc="Speak with our mentors to understand how a liberal arts education can transform your academic and professional future."
        />
      </div>
    </>
  );
}
