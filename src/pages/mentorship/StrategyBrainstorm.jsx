/* ── Strategy Brainstorm — Process arrows + side-by-side insight boxes + 2-col checklist (NO FAQ) ── */
import { Search, BookOpen, Target, Calendar, Zap, Shield } from "lucide-react";
import {
  MENTOR_STYLES, useReveal,
  MentorHero, MentorSectionHeader, MentorProcessArrows,
  MentorStatsStrip, MentorCtaBanner, MentorCheckList,
  MentorInfoBox,
} from "./mentorshipComponents";
import { strategyBrainstormData as d } from "./mentorshipData";

export default function StrategyBrainstorm() {
  const containerRef = useReveal();
  return (
    <>
      <style>{MENTOR_STYLES + `
        @media(max-width:768px){ .grid-2{ grid-template-columns:1fr !important; } }
      `}</style>
      <div className="mtr-page" ref={containerRef}>
        <MentorHero {...d.hero} />
        <MentorStatsStrip stats={d.stats} />

        {/* Horizontal arrow process — the entire workflow visible at a glance */}
        <section className="mtr-section">
          <div className="mtr-container">
            <MentorSectionHeader {...d.processSection} />
            <MentorProcessArrows steps={d.steps} />
          </div>
        </section>

        <div className="mtr-divider" />

        {/* Two insight boxes side by side */}
        <section className="mtr-section-alt">
          <div className="mtr-container">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }} className="grid-2">
              <MentorInfoBox icon={Zap} title="Why Strategy Matters More Than Grades" variant="blue">
                <p className="mtr-body" style={{ fontSize: 14 }}>
                  Two students with identical transcripts can have dramatically different outcomes based purely on strategy. A well-defined narrative, balanced school list, and compelling essay angle can be the difference between waitlisted and accepted at a dream school.
                </p>
              </MentorInfoBox>
              <MentorInfoBox icon={Calendar} title="When to Start" variant="green">
                <p className="mtr-body" style={{ fontSize: 14 }}>
                  Grade 10 is ideal. Grade 11 is workable. Even a late start in early Grade 12 produces excellent results with the right guidance. The earlier you start, the more strategic options are available to you.
                </p>
              </MentorInfoBox>
            </div>
          </div>
        </section>

        <div className="mtr-divider" />

        {/* What’s included — 2-col checklist */}
        <section className="mtr-section">
          <div className="mtr-container">
            <MentorSectionHeader
              label="What You Get"
              title="Your Strategy Session"
              highlight="Deliverables"
              body="Every strategy session is personalised. Here is exactly what you walk away with."
            />
            <div className="mtr-reveal">
              <MentorCheckList items={[
                "Deep profile audit across all dimensions",
                "Core personal narrative identified",
                "Balanced school list of 10-15 schools",
                "Application timeline with key milestones",
                "Essay topic brainstorm shortlist",
                "Activity list review and framing advice",
                "Risk assessment and safety options confirmed",
                "Clear next-step action plan",
              ]} columns={2} />
            </div>
          </div>
        </section>

        <MentorCtaBanner
          title="Build Your Winning Application Strategy"
          desc="Book a strategy session with our mentors and walk away with a personalised, actionable plan."
        />
      </div>
    </>
  );
}
