/* ── Post Graduate Funding — Large 2-col funding cards + vertical timeline + FAQ ── */
import { BookOpen, Microscope, Award, DollarSign, GraduationCap, Globe } from "lucide-react";
import {
  MENTOR_STYLES, useReveal,
  MentorHero, MentorSectionHeader, MentorColorCard,
  MentorFAQ, MentorStatsStrip, MentorCtaBanner, MentorVerticalTimeline,
} from "./mentorshipComponents";
import { postGraduateFundingData as d } from "./mentorshipData";

const fundingIcons = [BookOpen, Microscope, Award, DollarSign, GraduationCap, Globe];
const fundingColors = ["#005B8F", "#7c3aed", "#059669", "#d97706", "#0891b2", "#dc2626"];

export default function PostGraduateFunding() {
  const containerRef = useReveal();
  return (
    <>
      <style>{MENTOR_STYLES + `
        .pgf-grid { display:grid; grid-template-columns:repeat(2,1fr); gap:24px; }
        .pgf-timeline-wrap { display:grid; grid-template-columns:1fr 1.2fr; gap:80px; align-items:start; }
        @media(max-width:768px){ .pgf-grid{ grid-template-columns:1fr !important; } .pgf-timeline-wrap{ grid-template-columns:1fr !important; gap:40px; } }
      `}</style>
      <div className="mtr-page" ref={containerRef}>
        <MentorHero {...d.hero} />
        <MentorStatsStrip stats={d.stats} />

        {/* 2-col large funding cards — more layout space per item vs cramped 3-col */}
        <section className="mtr-section">
          <div className="mtr-container">
            <MentorSectionHeader {...d.fundingSection} />
            <div className="pgf-grid">
              {d.fundingTypes.map((f, i) => (
                <MentorColorCard
                  key={i}
                  icon={fundingIcons[i] || BookOpen}
                  title={f.title}
                  desc={f.desc}
                  accentColor={fundingColors[i]}
                />
              ))}
            </div>
          </div>
        </section>

        <div className="mtr-divider" />

        {/* Vertical timeline — action plan from brainstorm to submission */}
        <section className="mtr-section-alt">
          <div className="mtr-container">
            <div className="pgf-timeline-wrap">
              <MentorSectionHeader
                label="Action Plan"
                title="Your Graduate"
                highlight="Funding Timeline"
                body="A month-by-month action plan to ensure you apply for every funding opportunity available before deadlines close."
              />
              <MentorVerticalTimeline
                steps={d.fundingTimeline.map(t => ({ title: t, desc: "" }))}
              />
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
          title="Fund Your US Graduate Degree"
          desc="Our mentors help you identify, apply for, and secure graduate funding that can make a US degree entirely affordable."
        />
      </div>
    </>
  );
}
