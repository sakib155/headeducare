/* ── College Selection — Alternating feature rows + visual tier bars + FAQ ── */
import { BookOpen, Target, DollarSign, Globe, Users, Compass } from "lucide-react";
import {
  MENTOR_STYLES, useReveal,
  MentorHero, MentorSectionHeader, MentorAlternatingFeatures,
  MentorStatsStrip, MentorCtaBanner, MentorTierBars,
} from "./mentorshipComponents";
import { collegeSelectionData as d } from "./mentorshipData";

const factorIcons = [BookOpen, Target, DollarSign, Users, Globe, Compass];

export default function CollegeSelection() {
  const containerRef = useReveal();
  return (
    <>
      <style>{MENTOR_STYLES}</style>
      <div className="mtr-page" ref={containerRef}>
        <MentorHero {...d.hero} />
        <MentorStatsStrip stats={d.stats} />

        {/* Alternating left/right rows — maximally different from icon-card grids */}
        <section className="mtr-section">
          <div className="mtr-container">
            <MentorSectionHeader {...d.selectionSection} />
            <MentorAlternatingFeatures features={d.selectionFactors} icons={factorIcons} />
          </div>
        </section>

        <div className="mtr-divider" />

        {/* Visual tier bars — completely unique visual element */}
        <section className="mtr-section-alt">
          <div className="mtr-container">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }}>
              <MentorSectionHeader
                label="List Architecture"
                title="Your Balanced"
                highlight="College List"
                body="A well-structured list maximises both your chances and your excitement. Here is how we architect it."
              />
              <MentorTierBars tiers={d.selectionTiers} />
            </div>
          </div>
        </section>

        <MentorCtaBanner
          title="Find Your Perfect College Fit"
          desc="Our data-driven college selection methodology takes the guesswork out of one of the most important decisions of your life."
        />
      </div>
    </>
  );
}
