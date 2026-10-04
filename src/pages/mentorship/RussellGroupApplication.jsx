import { Target, PenTool, MessageCircle, FileText, Star, Search, GraduationCap, BookOpen, CheckCircle, ChevronRight, Award, Users, Globe } from "lucide-react";
import { MENTOR_STYLES, useReveal, MentorSectionHeader, MentorIconCard, MentorProcessArrows, MentorFAQ, MentorStatsStrip, MentorCtaBanner, MentorTagList, } from "./mentorshipComponents";
import { Link } from "react-router-dom";

const featureIcons = [Search, Target, PenTool, MessageCircle, Star, FileText];

const features = [
  { title: "University Selection Guidance", desc: "Our expert counsellors will evaluate your study goals and provide personalized guidance on the UK University and course options." },
  { title: "Eligibility Assessment", desc: "We will review your transcripts, qualifications, and academic background to confirm your eligibility to your preferred university and course." },
  { title: "Personal Statement Advice", desc: "Get guidance on how to structure and write a personal statement that matches the expectations of top UK universities." },
  { title: "Documentation Support", desc: "Understand what academic transcripts, reference letters, and other documents you need to submit with your application." },
  { title: "Application Management & Tracking", desc: "Receive assistance completing and reviewing your university application forms, followed by full tracking to keep you informed of their progress." },
  { title: "Proven Strategy", desc: "Benefit from proven strategies that have helped students secure places at the world's best universities in the UK." },
];

const russellGroupUnis = [
  ["Imperial College", "2"],
  ["University of Oxford", "04"],
  ["University of Cambridge", "06"],
  ["UCL (University College London)", "8"],
  ["University of Edinburgh", "35"],
  ["King's College London", "37"],
  ["University of Manchester", "40"],
  ["University of Bristol", "57"],
  ["LSE (London School of Economics)", "62"],
  ["University of Warwick", "68 (tie)"],
  ["University of Birmingham", "68 (tie)"],
  ["University of Leeds", "77"],
  ["University of Glasgow", "80"],
  ["University of Sheffield", "82"],
  ["Durham University", "94"],
  ["University of Nottingham", "97"],
  ["QMUL (Queen Mary University of London)", "103"],
  ["University of Southampton", "111"],
  ["University of Exeter", "136"],
  ["University of Liverpool", "139"],
  ["Newcastle University", "149"],
  ["University of York", "158"],
  ["Queen's University Belfast", "174"],
  ["Cardiff University", "179"],
];

const faqs = [
  { q: "What GPA do I need for Russell Group universities?", a: "Russell Group universities typically require strong academic credentials. For undergraduate programs, A-Levels of AAA-AAB or equivalent (IB 36+) are common. For postgraduate, a UK 2:1 (or international equivalent, typically GPA 3.0-3.5+) is standard." },
  { q: "When should I start my Russell Group application?", a: "We recommend starting 12–18 months before your intended start date. UCAS opens in September for October deadlines (Oxbridge, medicine) and January deadlines for most other courses." },
  { q: "Do I need IELTS for UK universities?", a: "Yes, most Russell Group universities require IELTS 6.5–7.5 (or equivalent) for non-native English speakers. Some universities may also accept PTE, TOEFL, or Duolingo." },
  { q: "What is included in the Russell Group application service?", a: "Our service includes university selection guidance, eligibility assessment, personal statement advice, documentation support, and complete application management and tracking from submission to offer." },
];

export default function RussellGroupApplication() {
  const containerRef = useReveal();
  return (
    <>
      <style>{MENTOR_STYLES + `
        .rg-hero { position:relative; padding:72px 0 56px; overflow:hidden; background:linear-gradient(135deg,#f0f7ff 0%,#e8f2fe 100%); }
        .rg-blob { position:absolute; border-radius:50%; filter:blur(100px); pointer-events:none; }
        .rg-table { width:100%; border-collapse:collapse; margin-top:24px; font-size:14px; border-radius:16px; overflow:hidden; }
        .rg-table th { background:linear-gradient(135deg,#005B8F,#004a78); color:#fff; padding:14px 18px; font-weight:700; font-size:13px; font-family:'Lexend',sans-serif; text-align:left; }
        .rg-table td { padding:12px 18px; border-bottom:1px solid rgba(0,0,0,0.06); color:#4b5563; font-family:'Lexend',sans-serif; font-size:13px; }
        .rg-table tr:hover td { background:rgba(0,91,143,0.03); }
        .rg-table .rank { font-weight:900; color:#005B8F; font-size:15px; }
        .dark .rg-table td { color:#9ca3af; border-color:rgba(255,255,255,0.08); }
        @media(max-width:768px){ .rg-table { font-size:12px; } }
      `}</style>
      <div className="mtr-page" ref={containerRef}>
        {/* Hero */}
        <section className="rg-hero">
          <div className="rg-blob" style={{ width: 500, height: 500, background: "rgba(0,91,143,0.1)", top: -150, right: -100 }} />
          <div className="rg-blob" style={{ width: 300, height: 300, background: "rgba(96,165,250,0.12)", bottom: -80, left: -60 }} />
          <div className="mtr-container" style={{ position: "relative", zIndex: 1 }}>
            <div className="mtr-reveal" style={{ maxWidth: 700 }}>
              <span className="mtr-badge" style={{ background: "rgba(0,91,143,0.1)", color: "#005B8F" }}>
                <span className="mtr-badge-dot" style={{ background: "#005B8F" }} />
                Russell Group Application
              </span>
              <h1 className="mtr-h1" style={{ color: "#0f172a" }}>
                Russell Group <span style={{ color: "#005B8F" }}>University Application</span>
              </h1>
              <p style={{ fontSize: 17, color: "#475569", lineHeight: 1.75, fontWeight: 300, maxWidth: 580, marginBottom: 32, fontFamily: "Lexend,sans-serif" }}>
                Expert guidance for applying to the prestigious Russell Group Universities in the UK. Our expert team gives you a decisive advantage in this competitive admission process.
              </p>
              <Link to="/freeconsulation" className="mtr-cta-btn">
                <ChevronRight size={18} />
                Book a Free Consultation
              </Link>
            </div>
          </div>
        </section>

        <MentorStatsStrip stats={[
          { value: "24", label: "Russell Group Universities" },
          { value: "#2–#179", label: "QS World Ranking Range" },
          { value: "500+", label: "Successful UK Placements" },
          { value: "98%", label: "Client Satisfaction Rate" },
        ]} />

        {/* What is included */}
        <section className="mtr-section">
          <div className="mtr-container">
            <MentorSectionHeader
              label="Our Service"
              title="What Is"
              highlight="Included?"
              body="Our experts will evaluate your study goals and provide personalized guidance on the UK University and course options."
            />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 20 }} className="grid-2">
              {features.map((f, i) => {
                const Icon = featureIcons[i] || Target;
                return <MentorIconCard key={i} icon={Icon} title={f.title} desc={f.desc} />;
              })}
            </div>
          </div>
        </section>

        <div className="mtr-divider" />

        {/* Process arrows */}
        <section className="mtr-section-alt">
          <div className="mtr-container">
            <MentorSectionHeader
              label="Our Process"
              title="Application"
              highlight="Journey"
              body="A structured approach to ensure every aspect of your Russell Group application is handled with precision."
            />
            <MentorProcessArrows steps={[
              { title: "University Selection" },
              { title: "Eligibility Check" },
              { title: "Personal Statement" },
              { title: "Documentation" },
              { title: "Application Submission" },
              { title: "Offer Follow-up" },
            ]} />
          </div>
        </section>

        <div className="mtr-divider" />

        {/* Russell Group Universities Table */}
        <section className="mtr-section">
          <div className="mtr-container">
            <MentorSectionHeader
              label="Target Institutions"
              title="Russell Group"
              highlight="Universities"
              body="The Russell Group represents 24 leading UK universities committed to maintaining the highest standards of research, education, and knowledge transfer."
            />
            <div className="mtr-reveal" style={{ overflowX: "auto" }}>
              <table className="rg-table">
                <thead>
                  <tr>
                    <th style={{ width: "70%" }}>Institution</th>
                    <th>QS World Ranking 2025</th>
                  </tr>
                </thead>
                <tbody>
                  {russellGroupUnis.map((uni, i) => (
                    <tr key={i}>
                      <td><strong>{uni[0]}</strong></td>
                      <td className="rank">{uni[1]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mtr-section-alt">
          <div className="mtr-container">
            <MentorSectionHeader label="Common Questions" title="Frequently Asked" highlight="Questions" centered />
            <div style={{ maxWidth: 800, margin: "0 auto" }}>
              <MentorFAQ items={faqs} />
            </div>
          </div>
        </section>

        <MentorCtaBanner
          title="Start Your Russell Group Application Journey"
          desc="Book a free consultation with our UK university admissions experts today."
        />
      </div>
      <style>{`@media(max-width:768px){ .grid-2{ grid-template-columns:1fr !important; } }`}</style>
    </>
  );
}