/* ── Elite School Admission — Premium dark hero, horizontal process arrows, 2-col feature grid ── */
import { Target, PenTool, MessageCircle, FileText, Star, Search } from "lucide-react";
import {
  MENTOR_STYLES, useReveal,
  MentorSectionHeader, MentorIconCard, MentorProcessArrows,
  MentorFAQ, MentorStatsStrip, MentorCtaBanner, MentorTagList,
} from "./mentorshipComponents";
import { eliteSchoolAdmissionData as d } from "./mentorshipData";
import { Link } from "react-router-dom";

const featureIcons = [Search, Target, PenTool, MessageCircle, Star, FileText];

export default function EliteSchoolAdmission() {
  const containerRef = useReveal();
  return (
    <>
      <style>{MENTOR_STYLES + `
        .elite-hero { position:relative; padding:96px 0 80px; overflow:hidden; background:linear-gradient(135deg,#01091c 0%,#003a5c 100%); }
        .elite-blob { position:absolute; border-radius:50%; filter:blur(100px); pointer-events:none; }
        @media(max-width:768px){ .grid-2{ grid-template-columns:1fr !important; } }
      `}</style>
      <div className="mtr-page" ref={containerRef}>

        {/* Premium dark hero — visually distinct from every other page */}
        <section className="elite-hero">
          <div className="elite-blob" style={{ width: 500, height: 500, background: "rgba(0,91,143,0.25)", top: -150, right: -100 }} />
          <div className="elite-blob" style={{ width: 300, height: 300, background: "rgba(96,165,250,0.1)", bottom: -80, left: -60 }} />
          <div className="mtr-container" style={{ position: "relative", zIndex: 1 }}>
            <div className="mtr-reveal" style={{ maxWidth: 700 }}>
              <span className="mtr-badge" style={{ background: "rgba(255,255,255,0.12)", color: "#93c5fd" }}>
                <span className="mtr-badge-dot" style={{ background: "#93c5fd" }} />
                USA Mentorship Program
              </span>
              <h1 className="mtr-h1" style={{ color: "#fff" }}>
                {d.hero.title} <span style={{ color: "#60a5fa" }}>{d.hero.highlight}</span>
              </h1>
              <p style={{ fontSize: 17, color: "rgba(255,255,255,0.72)", lineHeight: 1.75, fontWeight: 300, maxWidth: 580, marginBottom: 32, fontFamily: "Lexend,sans-serif" }}>
                {d.hero.desc}
              </p>
              <Link to="/freeconsulation" className="mtr-cta-btn" style={{ background: "#fff", color: "#005B8F" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M8 6l6 6-6 6" /></svg>
                Book a Free Consultation
              </Link>
            </div>
          </div>
        </section>

        <MentorStatsStrip stats={d.stats} />

        {/* Horizontal arrow process */}
        <section className="mtr-section">
          <div className="mtr-container">
            <MentorSectionHeader
              label="Our 6-Step Process"
              title="How We Get You"
              highlight="Into Elite Schools"
              body="A rigorous, personalised process that positions your application for maximum impact at the world's most selective universities."
            />
            <MentorProcessArrows steps={[
              { title: "Profile Audit" },
              { title: "School List" },
              { title: "Essay Strategy" },
              { title: "Application Build" },
              { title: "Interview Prep" },
              { title: "Offer Review" },
            ]} />
          </div>
        </section>

        <div className="mtr-divider" />

        {/* 2-col feature cards — different density from other pages */}
        <section className="mtr-section-alt">
          <div className="mtr-container">
            <MentorSectionHeader {...d.whatIsSection} />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 20 }} className="grid-2">
              {d.features.map((f, i) => {
                const Icon = featureIcons[i] || Target;
                return <MentorIconCard key={i} icon={Icon} title={f.title} desc={f.desc} />;
              })}
            </div>
          </div>
        </section>

        <div className="mtr-divider" />

        <section className="mtr-section">
          <div className="mtr-container">
            <MentorSectionHeader
              label="Target Institutions"
              title="Elite Universities Our"
              highlight="Students Access"
              body="Our mentors have guided students to successful admission at every institution on this list — including several with acceptance rates below 5%."
            />
            <MentorTagList tags={d.eliteSchools} />
          </div>
        </section>

        <section className="mtr-section-alt">
          <div className="mtr-container">
            <MentorSectionHeader label="Common Questions" title="Frequently Asked" highlight="Questions" centered />
            <div style={{ maxWidth: 800, margin: "0 auto" }}>
              <MentorFAQ items={d.faqs} />
            </div>
          </div>
        </section>

        <MentorCtaBanner
          title="Start Your Journey to an Elite US University"
          desc="Your journey starts with a single conversation. Let our mentors show you exactly what it takes."
        />
      </div>
    </>
  );
}
