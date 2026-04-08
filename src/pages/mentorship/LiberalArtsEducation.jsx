import {
  Brain, MessageCircle, BookOpen, Globe, Compass, Microscope,
} from "lucide-react";
import {
  MENTOR_STYLES, useReveal,
  MentorHero, MentorSectionHeader, MentorIconCard,
  MentorFAQ, MentorStatsStrip, MentorCtaBanner,
  MentorTagList,
} from "./mentorshipComponents";
import { liberalArtsEducationData as d } from "./mentorshipData";

const pillarIcons = [Brain, MessageCircle, BookOpen, Globe, Compass, Microscope];

export default function LiberalArtsEducation() {
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

        {/* Pillars */}
        <section className="mtr-section">
          <div className="mtr-container">
            <MentorSectionHeader {...d.approach} />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }} className="grid-3">
              {d.pillars.map((p, i) => {
                const Icon = pillarIcons[i] || Brain;
                return <MentorIconCard key={i} icon={Icon} title={p.title} desc={p.desc} />;
              })}
            </div>
          </div>
        </section>

        <div className="mtr-divider" />

        {/* Career Paths */}
        <section className="mtr-section-alt">
          <div className="mtr-container">
            <MentorSectionHeader
              label="Career Outcomes"
              title="Where Liberal Arts"
              highlight="Graduates Succeed"
              body="A liberal arts education opens doors across every sector of society. Here are just some of the career paths our graduates pursue."
            />
            <MentorTagList tags={d.careerPaths} />
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
          title="Explore a Liberal Arts Education in the USA"
          desc="Speak with our mentors to understand how a liberal arts education can transform your academic and professional future."
        />
      </div>
    </>
  );
}
