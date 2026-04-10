/* ── Liberal Arts College — Editorial layout: no stats strip, alternating feature rows, pull quote ── */
import { BookOpen, Users, DollarSign, Microscope, Home, Network } from "lucide-react";
import {
  MENTOR_STYLES, useReveal,
  MentorHero, MentorSectionHeader, MentorAlternatingFeatures,
  MentorCtaBanner, MentorTagList, MentorPullQuote,
} from "./mentorshipComponents";
import { liberalArtsCollegeData as d } from "./mentorshipData";

const featureIcons = [Users, BookOpen, Home, Network, DollarSign, Microscope];

export default function LiberalArtsCollege() {
  const containerRef = useReveal();
  return (
    <>
      <style>{MENTOR_STYLES + `
        .lac-intro { display:grid; grid-template-columns:1fr 1fr; gap:64px; align-items:center; }
        .lac-stat-grid { display:grid; grid-template-columns:repeat(2,1fr); gap:16px; }
        .lac-stat { background:#fff; border:1px solid rgba(0,91,143,0.1); border-radius:16px; padding:24px; text-align:center; }
        .lac-stat-num { font-size:36px; font-weight:900; color:#005B8F; font-family:Lexend,sans-serif; line-height:1; }
        .lac-stat-label { font-size:12px; color:#6b7280; font-family:Lexend,sans-serif; margin-top:6px; font-weight:600; text-transform:uppercase; letter-spacing:.05em; }
        .dark .lac-stat { background:#02182a; border-color:rgba(255,255,255,0.06); }
        @media(max-width:768px){
          .lac-intro { grid-template-columns:1fr !important; gap:32px; }
        }
      `}</style>
      <div className="mtr-page" ref={containerRef}>

        <MentorHero {...d.hero} />

        {/* Editorial Intro: heading + pull quote left, stat grid right */}
        <section className="mtr-section">
          <div className="mtr-container">
            <div className="lac-intro mtr-reveal">
              <div>
                <p className="mtr-subtitle">What Makes Them Different</p>
                <h2 className="mtr-h2">Small Colleges,<br /><span>Big Outcomes</span></h2>
                <MentorPullQuote
                  quote="Liberal arts colleges produce leaders. Their graduates go on to run companies, write laws, and shape culture — not despite their broad education, but because of it."
                  author="US News & World Report"
                />
                <p className="mtr-body">Small, undergraduate-focused institutions where teaching comes first. Students explore broadly before specialising, gaining the versatility that modern careers demand.</p>
              </div>
              <div>
                <div className="lac-stat-grid">
                  {d.stats.map((s, i) => (
                    <div key={i} className="lac-stat">
                      <div className="lac-stat-num">{s.value}</div>
                      <div className="lac-stat-label">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="mtr-divider" />

        {/* Alternating feature rows — clearly distinct from card grids */}
        <section className="mtr-section-alt">
          <div className="mtr-container">
            <MentorSectionHeader {...d.whatIsSection} />
            <MentorAlternatingFeatures features={d.features} icons={featureIcons} />
          </div>
        </section>

        <div className="mtr-divider" />

        {/* Tag cloud of institutions */}
        <section className="mtr-section">
          <div className="mtr-container">
            <MentorSectionHeader
              label="Notable Institutions"
              title="Top Liberal Arts"
              highlight="Colleges in the USA"
              body="Schools our students successfully gain admission to — consistently ranked among the world's finest."
            />
            <MentorTagList tags={d.topColleges} />
          </div>
        </section>

        <MentorCtaBanner
          title="Ready to Explore Liberal Arts Colleges?"
          desc="Book a free consultation and discover which liberal arts colleges are the best fit for your profile."
        />
      </div>
    </>
  );
}
