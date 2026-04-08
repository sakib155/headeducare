import {
  Target, PenTool, MessageCircle, FileText, Star, Search,
} from "lucide-react";
import {
  MENTOR_STYLES, useReveal,
  MentorHero, MentorSectionHeader, MentorIconCard,
  MentorFAQ, MentorStatsStrip, MentorCtaBanner,
  MentorTagList,
} from "./mentorshipComponents";
import { eliteSchoolAdmissionData as d } from "./mentorshipData";

const featureIcons = [Search, Target, PenTool, MessageCircle, Star, FileText];

export default function EliteSchoolAdmission() {
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

        {/* Approach */}
        <section className="mtr-section">
          <div className="mtr-container">
            <MentorSectionHeader {...d.whatIsSection} />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }} className="grid-3">
              {d.features.map((f, i) => {
                const Icon = featureIcons[i] || Target;
                return <MentorIconCard key={i} icon={Icon} title={f.title} desc={f.desc} />;
              })}
            </div>
          </div>
        </section>

        <div className="mtr-divider" />

        {/* Elite Schools */}
        <section className="mtr-section-alt">
          <div className="mtr-container">
            <MentorSectionHeader
              label="Target Institutions"
              title="Elite Universities We Help"
              highlight="Students Access"
              body="Our mentors have guided students to successful admission at every institution on this list and beyond."
            />
            <MentorTagList tags={d.eliteSchools} />
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
          title="Start Your Journey to an Elite US University"
          desc="Our expert mentors have guided hundreds of students to the world's most selective universities. Your journey starts with a single conversation."
        />
      </div>
    </>
  );
}
