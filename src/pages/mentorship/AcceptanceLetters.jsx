/* ── Acceptance Letters — Color-coded decision cards + alert banner + checklist split + FAQ ── */
import { Mail, CheckCircle, Clock, AlertCircle, Calendar, HelpCircle } from "lucide-react";
import {
  MENTOR_STYLES, useReveal,
  MentorHero, MentorSectionHeader, MentorColorCard,
  MentorFAQ, MentorStatsStrip, MentorCtaBanner,
  MentorCheckList, MentorAlertBanner,
} from "./mentorshipComponents";
import { acceptanceLettersData as d } from "./mentorshipData";

const decisionColors = ["#2563eb", "#16a34a", "#16a34a", "#f59e0b", "#6366f1", "#78716c"];
const decisionBadges = ["Standard", "Binding", "Non-Binding", "Keep Options Open", "Still in Review", "Conditions Apply"];
const decisionIcons = [Mail, CheckCircle, Clock, AlertCircle, Calendar, HelpCircle];

export default function AcceptanceLetters() {
  const containerRef = useReveal();
  return (
    <>
      <style>{MENTOR_STYLES + `
        @media(max-width:768px){ .grid-2{ grid-template-columns:1fr !important; } .dec-grid{ grid-template-columns:1fr !important; } }
      `}</style>
      <div className="mtr-page" ref={containerRef}>
        <MentorHero {...d.hero} />
        <MentorStatsStrip stats={d.stats} />

        {/* Color-coded decision type cards — each with a distinct accent color */}
        <section className="mtr-section">
          <div className="mtr-container">
            <MentorSectionHeader {...d.typesSection} />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 16 }} className="dec-grid">
              {d.decisionTypes.map((dt, i) => (
                <MentorColorCard
                  key={i}
                  icon={decisionIcons[i] || Mail}
                  title={dt.title}
                  desc={dt.desc}
                  accentColor={decisionColors[i]}
                  badge={decisionBadges[i]}
                />
              ))}
            </div>
          </div>
        </section>

        <div className="mtr-divider" />

        {/* Alert banner for key deadline */}
        <section style={{ padding: "40px 0" }}>
          <div className="mtr-container">
            <MentorAlertBanner
              icon={Calendar}
              color="#005B8F"
              label="National Decision Day (USA)"
              value="May 1 — Mark Your Calendar"
              sub="All enrolled deposits must be submitted to your chosen school by May 1. Holding multiple deposits after this date violates the NACAC agreement."
            />
          </div>
        </section>

        {/* Evaluation checklist in split layout */}
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

        <section className="mtr-section">
          <div className="mtr-container">
            <MentorSectionHeader label="Common Questions" title="Frequently Asked" highlight="Questions" centered />
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
