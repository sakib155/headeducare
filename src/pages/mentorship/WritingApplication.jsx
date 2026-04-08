import {
  FileText, BookOpen, School, GraduationCap, PenTool, MessageCircle,
} from "lucide-react";
import {
  MENTOR_STYLES, useReveal,
  MentorHero, MentorSectionHeader, MentorIconCard,
  MentorFAQ, MentorStatsStrip, MentorCtaBanner,
  MentorCheckList, MentorInfoBox,
} from "./mentorshipComponents";
import { writingApplicationData as d } from "./mentorshipData";

const essayIcons = [FileText, BookOpen, School, GraduationCap, PenTool, MessageCircle];

export default function WritingApplication() {
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

        {/* Essay Types */}
        <section className="mtr-section">
          <div className="mtr-container">
            <MentorSectionHeader {...d.essayTypes} />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }} className="grid-3">
              {d.essays.map((e, i) => {
                const Icon = essayIcons[i] || FileText;
                return <MentorIconCard key={i} icon={Icon} title={e.title} desc={e.desc} />;
              })}
            </div>
          </div>
        </section>

        <div className="mtr-divider" />

        {/* Writing Process */}
        <section className="mtr-section-alt">
          <div className="mtr-container">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }} className="grid-2">
              <div>
                <MentorSectionHeader
                  label="Our Writing Process"
                  title="How We Help You"
                  highlight="Write Great Essays"
                  body="Our structured writing process takes your essay from a blank page to a polished, authentic final submission through multiple guided revision cycles."
                />
                <MentorInfoBox icon={PenTool} title="A Note on Authenticity" variant="amber">
                  <p className="mtr-body" style={{ fontSize: 14 }}>
                    We guide, coach, and refine. The ideas, voice, and experiences in your essay must always be genuinely and authentically yours. This is both an ethical requirement and a practical one — admissions officers read thousands of essays and recognise inauthenticity immediately.
                  </p>
                </MentorInfoBox>
              </div>
              <div className="mtr-reveal">
                <MentorCheckList items={d.writingProcess} columns={1} />
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
          title="Ready to Write Essays That Get You In?"
          desc="Our writing coaches have helped hundreds of students craft essays that made the difference. Start yours today."
        />
      </div>
    </>
  );
}
