/* ── Masters — 3-col icon cards + VERTICAL TIMELINE process (not step-card grid) ── */
import { Search, PenTool, BookOpen, Microscope, FileText, DollarSign } from "lucide-react";
import {
  MENTOR_STYLES, useReveal,
  MentorHero, MentorSectionHeader, MentorIconCard, MentorVerticalTimeline,
  MentorFAQ, MentorStatsStrip, MentorCtaBanner,
} from "./mentorshipComponents";
import { mastersMentorshipData as d } from "./mentorshipData";

const featureIcons = [Search, PenTool, BookOpen, Microscope, FileText, DollarSign];

export default function MastersMentorshipProgram() {
  const containerRef = useReveal();
  return (
    <>
      <style>{MENTOR_STYLES + `
        .masters-grid { display:grid; grid-template-columns:1fr 1.5fr; gap:80px; align-items:start; }
        @media(max-width:768px){ .masters-grid{ grid-template-columns:1fr !important; gap:48px; } .grid-3{ grid-template-columns:1fr 1fr !important; } }
        @media(max-width:480px){ .grid-3{ grid-template-columns:1fr !important; } }
      `}</style>
      <div className="mtr-page" ref={containerRef}>
        <MentorHero {...d.hero} />
        <MentorStatsStrip stats={d.stats} />

        {/* 3-col icon cards */}
        <section className="mtr-section">
          <div className="mtr-container">
            <MentorSectionHeader {...d.whatIsSection} />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }} className="grid-3">
              {d.features.map((f, i) => {
                const Icon = featureIcons[i] || Search;
                return <MentorIconCard key={i} icon={Icon} title={f.title} desc={f.desc} />;
              })}
            </div>
          </div>
        </section>

        <div className="mtr-divider" />

        {/* Vertical timeline — completely different from card grid */}
        <section className="mtr-section-alt">
          <div className="mtr-container">
            <div className="masters-grid">
              <MentorSectionHeader
                label="Our Process"
                title="Step-by-Step"
                highlight="Mentorship Journey"
                body="Our structured six-step process ensures nothing is left to chance from your first consultation to your final enrollment decision."
              />
              <MentorVerticalTimeline steps={d.processSteps} />
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
          title="Ready to Apply for Your US Masters?"
          desc="Our masters mentors have guided hundreds of students to top-ranked US graduate programs. Start your journey today."
        />
      </div>
    </>
  );
}
