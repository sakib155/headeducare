import {
  Mail, ClipboardList, Clock, AlertCircle, CheckCircle, HelpCircle,
} from "lucide-react";
import {
  MENTOR_STYLES, useReveal,
  MentorHero, MentorSectionHeader, MentorIconCard,
  MentorFAQ, MentorStatsStrip, MentorCtaBanner,
  MentorCheckList,
} from "./mentorshipComponents";
import { acceptanceLettersData as d } from "./mentorshipData";

const decisionIcons = [Mail, CheckCircle, ClipboardList, Clock, AlertCircle, HelpCircle];

export default function AcceptanceLetters() {
  const containerRef = useReveal();
  return (
    <>
      <style>{MENTOR_STYLES + `
        @media(max-width:768px){ .grid-2{ grid-template-columns:1fr !important; } .grid-3{ grid-template-columns:1fr 1fr !important; } }
        @media(max-width:480px){ .grid-3{ grid-template-columns:1fr !important; } }
        .dark .decision-card { background:#02182a !important; border-color:rgba(255,255,255,0.06) !important; }
        .dark .decision-card h4 { color:#ffffff !important; }
      `}</style>
      <div className="mtr-page" ref={containerRef}>
        <MentorHero {...d.hero} />
        <MentorStatsStrip stats={d.stats} />

        {/* Decision Types */}
        <section className="mtr-section">
          <div className="mtr-container">
            <MentorSectionHeader {...d.typesSection} />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }} className="grid-3">
              {d.decisionTypes.map((dt, i) => {
                const Icon = decisionIcons[i] || Mail;
                return <MentorIconCard key={i} icon={Icon} title={dt.title} desc={dt.desc} />;
              })}
            </div>
          </div>
        </section>

        <div className="mtr-divider" />

        {/* Evaluation Checklist */}
        <section className="mtr-section-alt">
          <div className="mtr-container">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }} className="grid-2">
              <div>
                <MentorSectionHeader
                  label="Decision Framework"
                  title="How to Evaluate"
                  highlight="Your Offers"
                  body="Before committing to any school, evaluate every offer through this multi-factor lens to find the best fit for you."
                />
              </div>
              <div className="mtr-reveal">
                <MentorCheckList items={d.evaluateChecklist} columns={1} />
              </div>
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
          title="Need Help Evaluating Your Acceptance Letters?"
          desc="Our mentors provide unbiased, data-driven guidance to help you make the decision that is truly best for your future."
        />
      </div>
    </>
  );
}
