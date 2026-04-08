import {
  BookOpen, Target, DollarSign, Globe, Users, Compass,
} from "lucide-react";
import {
  MENTOR_STYLES, useReveal,
  MentorHero, MentorSectionHeader, MentorIconCard,
  MentorFAQ, MentorStatsStrip, MentorCtaBanner,
} from "./mentorshipComponents";
import { collegeSelectionData as d } from "./mentorshipData";

const factorIcons = [BookOpen, Target, DollarSign, Users, Globe, Compass];

export default function CollegeSelection() {
  const containerRef = useReveal();
  return (
    <>
      <style>{MENTOR_STYLES + `
        @media(max-width:768px){ .grid-2{ grid-template-columns:1fr !important; } .grid-3{ grid-template-columns:1fr 1fr !important; } }
        @media(max-width:480px){ .grid-3{ grid-template-columns:1fr !important; } }
        .tier-card { border-radius:20px; overflow:hidden; border:1px solid rgba(0,91,143,0.12); background:#fff; display:flex; flex-direction:column; }
        .tier-card-header { padding:20px 24px; background:#005B8F; }
        .tier-card-body { padding:20px 24px; flex:1; }
        .dark .tier-card { background:#02182a !important; border-color:rgba(255,255,255,0.06) !important; }
        .dark .tier-card-body p { color:#9ca3af !important; }
      `}</style>
      <div className="mtr-page" ref={containerRef}>
        <MentorHero {...d.hero} />
        <MentorStatsStrip stats={d.stats} />

        {/* Selection Factors */}
        <section className="mtr-section">
          <div className="mtr-container">
            <MentorSectionHeader {...d.selectionSection} />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }} className="grid-3">
              {d.selectionFactors.map((f, i) => {
                const Icon = factorIcons[i] || BookOpen;
                return <MentorIconCard key={i} icon={Icon} title={f.title} desc={f.desc} />;
              })}
            </div>
          </div>
        </section>

        <div className="mtr-divider" />

        {/* College List Tiers */}
        <section className="mtr-section-alt">
          <div className="mtr-container">
            <MentorSectionHeader
              label="List Building"
              title="Building Your"
              highlight="Balanced College List"
              body="A well-balanced list gives you ambitious aspirations, realistic targets, and secure options — maximising both your chances and your excitement."
              centered
            />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }} className="grid-3">
              {d.selectionTiers.map((t, i) => (
                <div key={i} className="mtr-reveal tier-card">
                  <div className="tier-card-header">
                    <p style={{ fontWeight: 900, fontSize: 20, color: "#fff", fontFamily: "Lexend,sans-serif" }}>
                      {t.tier}
                    </p>
                    <p style={{ fontSize: 12, color: "rgba(255,255,255,0.75)", fontFamily: "Lexend,sans-serif", marginTop: 2 }}>
                      {t.count} schools recommended
                    </p>
                  </div>
                  <div className="tier-card-body">
                    <p style={{ fontSize: 14, color: "#6b7280", lineHeight: 1.7, fontFamily: "Lexend,sans-serif", fontWeight: 300 }}>
                      {t.desc}
                    </p>
                  </div>
                </div>
              ))}
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
          title="Find Your Perfect College Fit"
          desc="Our data-driven college selection methodology takes the guesswork out of one of the most important decisions of your life."
        />
      </div>
    </>
  );
}
