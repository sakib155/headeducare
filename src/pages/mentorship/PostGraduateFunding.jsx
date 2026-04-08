import {
  BookOpen, Microscope, Award, DollarSign, GraduationCap, Globe,
} from "lucide-react";
import {
  MENTOR_STYLES, useReveal,
  MentorHero, MentorSectionHeader, MentorIconCard,
  MentorFAQ, MentorStatsStrip, MentorCtaBanner,
  MentorCheckList,
} from "./mentorshipComponents";
import { postGraduateFundingData as d } from "./mentorshipData";

const fundingIcons = [BookOpen, Microscope, Award, DollarSign, GraduationCap, Globe];

export default function PostGraduateFunding() {
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

        {/* Funding Types */}
        <section className="mtr-section">
          <div className="mtr-container">
            <MentorSectionHeader {...d.fundingSection} />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }} className="grid-3">
              {d.fundingTypes.map((f, i) => {
                const Icon = fundingIcons[i] || BookOpen;
                return <MentorIconCard key={i} icon={Icon} title={f.title} desc={f.desc} />;
              })}
            </div>
          </div>
        </section>

        <div className="mtr-divider" />

        {/* Funding Timeline */}
        <section className="mtr-section-alt">
          <div className="mtr-container">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }} className="grid-2">
              <div>
                <MentorSectionHeader
                  label="Action Plan"
                  title="Your Graduate"
                  highlight="Funding Timeline"
                  body="A month-by-month action plan to ensure you apply for every funding opportunity available before deadlines close."
                />
              </div>
              <div className="mtr-reveal">
                <MentorCheckList items={d.fundingTimeline} columns={1} />
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
          title="Fund Your US Graduate Degree"
          desc="Our mentors help you identify, apply for, and secure graduate funding that can make a US degree entirely affordable."
        />
      </div>
    </>
  );
}
