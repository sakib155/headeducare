import {
  BookOpen, Users, DollarSign, Microscope,
  Award, Globe, Home, Network,
} from "lucide-react";
import {
  MENTOR_STYLES, useReveal,
  MentorHero, MentorSectionHeader, MentorIconCard,
  MentorFAQ, MentorStatsStrip, MentorCtaBanner,
  MentorTagList,
} from "./mentorshipComponents";
import { liberalArtsCollegeData as d } from "./mentorshipData";

const featureIcons = [Users, BookOpen, Home, Network, DollarSign, Microscope];

export default function LiberalArtsCollege() {
  const containerRef = useReveal();
  return (
    <>
      <style>{MENTOR_STYLES + `
        @media(max-width:768px){ .grid-2{ grid-template-columns:1fr !important; } .grid-3{ grid-template-columns:1fr 1fr !important; } }
        @media(max-width:480px){ .grid-3{ grid-template-columns:1fr !important; } }
        .dark .mtr-section-card { background:#02182a !important; border-color:rgba(255,255,255,0.06) !important; }
      `}</style>
      <div className="mtr-page" ref={containerRef}>
        <MentorHero {...d.hero} />
        <MentorStatsStrip stats={d.stats} />

        {/* What is a Liberal Arts College */}
        <section className="mtr-section">
          <div className="mtr-container">
            <MentorSectionHeader {...d.whatIsSection} />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }} className="grid-3">
              {d.features.map((f, i) => {
                const Icon = featureIcons[i] || BookOpen;
                return <MentorIconCard key={i} icon={Icon} title={f.title} desc={f.desc} />;
              })}
            </div>
          </div>
        </section>

        <div className="mtr-divider" />

        {/* Top Colleges */}
        <section className="mtr-section-alt">
          <div className="mtr-container">
            <MentorSectionHeader
              label="Notable Institutions"
              title="Top Liberal Arts"
              highlight="Colleges in the USA"
              body="These institutions are consistently ranked among the finest liberal arts colleges in the world and represent the calibre of schools our students successfully gain admission to."
            />
            <MentorTagList tags={d.topColleges} />
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
          title="Ready to Explore Liberal Arts Colleges?"
          desc="Book a free consultation with our mentors and discover which liberal arts colleges are the best fit for your profile and ambitions."
        />
      </div>
    </>
  );
}
