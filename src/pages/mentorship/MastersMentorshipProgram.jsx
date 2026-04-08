import {
  Search, PenTool, BookOpen, Microscope, FileText, DollarSign,
  ClipboardList, Send, MessageCircle, Award,
} from "lucide-react";
import {
  MENTOR_STYLES, useReveal,
  MentorHero, MentorSectionHeader, MentorIconCard, MentorStepCard,
  MentorFAQ, MentorStatsStrip, MentorCtaBanner,
} from "./mentorshipComponents";
import { mastersMentorshipData as d } from "./mentorshipData";

const featureIcons = [Search, PenTool, BookOpen, Microscope, FileText, DollarSign];
const stepIcons = [ClipboardList, Search, PenTool, Send, MessageCircle, Award];

export default function MastersMentorshipProgram() {
  const containerRef = useReveal();
  return (
    <>
      <style>{MENTOR_STYLES + `
        @media(max-width:768px){ .grid-2{ grid-template-columns:1fr !important; } .grid-3{ grid-template-columns:1fr 1fr !important; } }
        @media(max-width:480px){ .grid-3{ grid-template-columns:1fr !important; } }
      `}</style>
      <div className="mtr-page" ref={containerRef}>
        <MentorHero {...d.hero} />
        <MentorStatsStrip stats={d.stats} />

        {/* What we offer */}
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

        {/* Process */}
        <section className="mtr-section-alt">
          <div className="mtr-container">
            <MentorSectionHeader
              label="Our Process"
              title="Step-by-Step"
              highlight="Mentorship Journey"
              body="Our structured six-step process ensures nothing is left to chance from your first consultation to your final enrollment decision."
            />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 28, marginTop: 16 }} className="grid-3">
              {d.processSteps.map((s, i) => {
                const Icon = stepIcons[i] || ClipboardList;
                return <MentorStepCard key={i} step={i + 1} icon={Icon} title={s.title} desc={s.desc} />;
              })}
            </div>
          </div>
        </section>

        <div className="mtr-divider" />

        {/* FAQ */}
        <section className="mtr-section">
          <div className="mtr-container">
            <MentorSectionHeader
              label="Common Questions"
              title="Frequently Asked"
              highlight="Questions"
              centered
            />
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
