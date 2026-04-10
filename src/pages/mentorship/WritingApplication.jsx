/* ── Writing & Application — Accent-top essay cards + vertical timeline process (NO FAQ) ── */
import { FileText, BookOpen, School, GraduationCap, PenTool, MessageCircle } from "lucide-react";
import {
  MENTOR_STYLES, useReveal,
  MentorHero, MentorSectionHeader, MentorAccentCard,
  MentorStatsStrip, MentorCtaBanner, MentorVerticalTimeline,
  MentorInfoBox,
} from "./mentorshipComponents";
import { writingApplicationData as d } from "./mentorshipData";

const essayIcons = [FileText, BookOpen, School, GraduationCap, PenTool, MessageCircle];
const essayAccents = ["#005B8F", "#7c3aed", "#059669", "#d97706", "#dc2626", "#0891b2"];

export default function WritingApplication() {
  const containerRef = useReveal();
  return (
    <>
      <style>{MENTOR_STYLES + `
        .wa-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:20px; }
        .wa-process { display:grid; grid-template-columns:1fr 1.4fr; gap:80px; align-items:start; }
        @media(max-width:768px){ .wa-grid{ grid-template-columns:1fr 1fr !important; } .wa-process{ grid-template-columns:1fr !important; gap:40px; } }
        @media(max-width:480px){ .wa-grid{ grid-template-columns:1fr !important; } }
      `}</style>
      <div className="mtr-page" ref={containerRef}>
        <MentorHero {...d.hero} />
        <MentorStatsStrip stats={d.stats} />

        {/* Accent-top cards — each essay type has its own color */}
        <section className="mtr-section">
          <div className="mtr-container">
            <MentorSectionHeader {...d.essayTypes} />
            <div className="wa-grid">
              {d.essays.map((e, i) => (
                <MentorAccentCard
                  key={i}
                  icon={essayIcons[i] || FileText}
                  title={e.title}
                  desc={e.desc}
                  accent={essayAccents[i]}
                />
              ))}
            </div>
          </div>
        </section>

        <div className="mtr-divider" />

        {/* Vertical timeline process + authenticity note side by side */}
        <section className="mtr-section-alt">
          <div className="mtr-container">
            <div className="wa-process">
              <div>
                <MentorSectionHeader
                  label="Our Writing Process"
                  title="From Blank Page to"
                  highlight="Final Submission"
                  body="Our structured 8-step writing process guides every essay to a polished, authentic final draft."
                />
                <MentorInfoBox icon={PenTool} title="On Authenticity" variant="amber">
                  <p className="mtr-body" style={{ fontSize: 14 }}>
                    We guide and refine. The ideas, voice, and experiences must always be genuinely yours. Admissions officers read thousands of essays and recognise inauthenticity immediately.
                  </p>
                </MentorInfoBox>
              </div>
              <MentorVerticalTimeline steps={d.writingProcess.map(t => ({ title: t, desc: "" }))} />
            </div>
          </div>
        </section>

        <MentorCtaBanner
          title="Ready to Write Essays That Get You In?"
          desc="Our writing coaches have helped hundreds of students craft essays that made the difference."
        />
      </div>
    </>
  );
}
