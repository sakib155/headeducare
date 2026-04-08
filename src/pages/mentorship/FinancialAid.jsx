import {
  DollarSign, Award, Star, Briefcase, BookOpen, GraduationCap,
} from "lucide-react";
import {
  MENTOR_STYLES, useReveal,
  MentorHero, MentorSectionHeader, MentorIconCard,
  MentorFAQ, MentorStatsStrip, MentorCtaBanner,
  MentorTagList, MentorInfoBox,
} from "./mentorshipComponents";
import { financialAidData as d } from "./mentorshipData";

const aidIcons = [DollarSign, Award, Star, Briefcase, BookOpen, GraduationCap];

export default function FinancialAid() {
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

        {/* Aid Types */}
        <section className="mtr-section">
          <div className="mtr-container">
            <MentorSectionHeader {...d.aidTypes} />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }} className="grid-3">
              {d.aidCategories.map((a, i) => {
                const Icon = aidIcons[i] || DollarSign;
                return <MentorIconCard key={i} icon={Icon} title={a.title} desc={a.desc} />;
              })}
            </div>
          </div>
        </section>

        <div className="mtr-divider" />

        {/* Need-Blind Schools */}
        <section className="mtr-section-alt">
          <div className="mtr-container">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }} className="grid-2">
              <div>
                <MentorSectionHeader
                  label="Most Generous Schools"
                  title="Need-Blind &"
                  highlight="Most Generous Universities"
                  body="These elite institutions meet 100% of demonstrated financial need for international students — making world-class education genuinely accessible regardless of family income."
                />
                <MentorInfoBox icon={Star} title="What Need-Blind Means" variant="green">
                  <p className="mtr-body" style={{ fontSize: 14 }}>
                    Need-blind admission means the university does not consider your ability to pay when deciding whether to admit you. Once admitted, they cover your full demonstrated financial need through grants, work-study, and loans.
                  </p>
                </MentorInfoBox>
              </div>
              <div className="mtr-reveal">
                <MentorTagList tags={d.needBlindSchools} />
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
          title="Maximise Your Financial Aid at US Universities"
          desc="Our mentors know how to navigate the US financial aid system and help you secure the funding you deserve."
        />
      </div>
    </>
  );
}
