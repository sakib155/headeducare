/* ── Financial Aid — Color-border cards + school badge strip + FAQ ── */
import { DollarSign, Award, Star, Briefcase, BookOpen, GraduationCap } from "lucide-react";
import {
  MENTOR_STYLES, useReveal,
  MentorHero, MentorSectionHeader, MentorColorCard,
  MentorFAQ, MentorStatsStrip, MentorCtaBanner,
  MentorInfoBox,
} from "./mentorshipComponents";
import { financialAidData as d } from "./mentorshipData";

const aidIcons = [DollarSign, Award, Star, Briefcase, BookOpen, GraduationCap];
const aidColors = ["#005B8F", "#7c3aed", "#059669", "#d97706", "#0891b2", "#dc2626"];

export default function FinancialAid() {
  const containerRef = useReveal();
  return (
    <>
      <style>{MENTOR_STYLES + `
        .fa-grid { display:grid; grid-template-columns:repeat(2,1fr); gap:20px; }
        .fa-school-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:12px; }
        @media(max-width:768px){ .fa-grid{ grid-template-columns:1fr !important; } .fa-school-grid{ grid-template-columns:1fr 1fr !important; } }
        .fa-school-badge { background:#f0f7ff; border:1px solid #c8dfee; border-radius:12px; padding:14px 18px;
          font-family:Lexend,sans-serif; font-size:13px; font-weight:600; color:#005B8F; text-align:center; }
        .dark .fa-school-badge { background:#021e2f; border-color:rgba(0,91,143,0.3); color:#60a9d4; }
      `}</style>
      <div className="mtr-page" ref={containerRef}>
        <MentorHero {...d.hero} />
        <MentorStatsStrip stats={d.stats} />

        {/* Aid types as color-bordered cards — visually distinct from icon grids */}
        <section className="mtr-section">
          <div className="mtr-container">
            <MentorSectionHeader {...d.aidTypes} />
            <div className="fa-grid">
              {d.aidCategories.map((a, i) => (
                <MentorColorCard
                  key={i}
                  icon={aidIcons[i] || DollarSign}
                  title={a.title}
                  desc={a.desc}
                  accentColor={aidColors[i]}
                />
              ))}
            </div>
          </div>
        </section>

        <div className="mtr-divider" />

        {/* Need-blind schools — badge treatment, not plain tags */}
        <section className="mtr-section-alt">
          <div className="mtr-container">
            <MentorSectionHeader
              label="Most Generous Schools"
              title="Need-Blind &"
              highlight="Most Generous Universities"
              body="These elite institutions meet 100% of demonstrated financial need for international students — making world-class education genuinely accessible regardless of family income."
            />
            <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 64, alignItems: "start" }}>
              <div className="fa-school-grid mtr-reveal">
                {d.needBlindSchools.map((s, i) => (
                  <div key={i} className="fa-school-badge">{s}</div>
                ))}
              </div>
              <MentorInfoBox icon={Star} title="What Need-Blind Means" variant="green">
                <p className="mtr-body" style={{ fontSize: 14 }}>
                  Need-blind admission means the university ignores your ability to pay when deciding whether to admit you. Once admitted, they cover your full demonstrated financial need through grants, work-study, and loans.
                </p>
              </MentorInfoBox>
            </div>
          </div>
        </section>

        <div className="mtr-divider" />

        <section className="mtr-section">
          <div className="mtr-container">
            <MentorSectionHeader label="Common Questions" title="Frequently Asked" highlight="Questions" centered />
            <div style={{ maxWidth: 800, margin: "0 auto" }}>
              <MentorFAQ items={d.faqs} />
            </div>
          </div>
        </section>

        <MentorCtaBanner
          title="Maximise Your Financial Aid at US Universities"
          desc="Our mentors know how to navigate the US financial aid system and help you secure the funding you deserve."
        />
      </div>
    </>
  );
}
