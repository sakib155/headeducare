import {
  Search, BookOpen, Target, Calendar, Zap, Shield,
} from "lucide-react";
import {
  MENTOR_STYLES, useReveal,
  MentorHero, MentorSectionHeader, MentorStepCard,
  MentorFAQ, MentorStatsStrip, MentorCtaBanner,
  MentorInfoBox,
} from "./mentorshipComponents";
import { strategyBrainstormData as d } from "./mentorshipData";

const stepIcons = [Search, BookOpen, Target, Calendar, Zap, Shield];

export default function StrategyBrainstorm() {
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

        {/* Process Steps */}
        <section className="mtr-section">
          <div className="mtr-container">
            <MentorSectionHeader {...d.processSection} />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 28 }} className="grid-3">
              {d.steps.map((s, i) => {
                const Icon = stepIcons[i] || Search;
                return <MentorStepCard key={i} step={i + 1} icon={Icon} title={s.title} desc={s.desc} />;
              })}
            </div>
          </div>
        </section>

        <div className="mtr-divider" />

        {/* Key Insight */}
        <section className="mtr-section-alt">
          <div className="mtr-container">
            <div style={{ maxWidth: 780, margin: "0 auto", display: "flex", flexDirection: "column", gap: 20 }}>
              <MentorInfoBox icon={Zap} title="Why Strategy Matters More Than Grades" variant="blue">
                <p className="mtr-body" style={{ fontSize: 14 }}>
                  Two students with identical transcripts can have dramatically different admissions outcomes based purely on the strength of their strategy. A well-defined narrative, a balanced school list, and a compelling essay angle can be the difference between a waitlist and an acceptance at a dream school.
                </p>
              </MentorInfoBox>
              <MentorInfoBox icon={Calendar} title="When to Start" variant="green">
                <p className="mtr-body" style={{ fontSize: 14 }}>
                  The earlier you start, the more strategic options are available to you. Grade 10 is ideal. Grade 11 is workable. Even a late start in early Grade 12 can produce excellent results with the right guidance and focused execution.
                </p>
              </MentorInfoBox>
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
          title="Build Your Winning Application Strategy"
          desc="Book a strategy session with our mentors and walk away with a personalised, actionable plan for your US college applications."
        />
      </div>
    </>
  );
}
