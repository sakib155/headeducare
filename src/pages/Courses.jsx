import React from "react";
import {
  BASE_STYLES,
  useReveal,
  PageHero,
  SectionHeader,
  IconCard,
  CtaBanner,
} from "./services/serviceComponents";
import {
  Mic,
  PenTool,
  BookOpen,
  Headphones,
  Laptop,
  Zap,
  Users,
  GraduationCap,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

export default function Courses() {
  const containerRef = useReveal();

  const pteModules = [
    {
      icon: Mic,
      title: "Speaking Module",
      desc: "Master Read Aloud, Repeat Sentence, Describe Image, and Retell Lecture with advanced templates and oral fluency drills."
    },
    {
      icon: PenTool,
      title: "Writing Module",
      desc: "Learn structure-based templates for Write Essay and Summarize Written Text to score high on spelling, vocabulary, and grammar."
    },
    {
      icon: BookOpen,
      title: "Reading Module",
      desc: "Improve your collocation skills, grammar, and quick reading comprehension for Fill in the Blanks and Re-order Paragraphs."
    },
    {
      icon: Headphones,
      title: "Listening Module",
      desc: "Target high-scoring Summarize Spoken Text, Write from Dictation, and Fill in the Blanks with authentic accent training."
    }
  ];

  const regularFeatures = [
    "Flexible online / face to face / hybrid learning",
    "AI-powered practice tools",
    "Instructor-led face-to-face sessions",
    "Hands-on online activities for immediate application",
  ];

  const oneOnOneFeatures = [
    "Completely personalized sessions",
    "Flexible timing & duration",
    "Customized AI study plan",
    "Unlimited mock tests",
    "24/7 support access",
  ];

  return (
    <>
      <style>
        {BASE_STYLES +
          `
          .batches-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 24px;
            margin-top: 40px;
          }
          .batch-card {
            background: var(--srv-bg-card);
            border: 1px solid var(--srv-border);
            border-radius: 20px;
            padding: 32px 28px;
            transition: all 0.25s;
            display: flex;
            flex-direction: column;
          }
          .batch-card:hover {
            box-shadow: 0 10px 30px rgba(0,91,143,0.1);
            transform: translateY(-4px);
          }
          .enroll-box {
            background: var(--srv-bg-card);
            border: 1px solid var(--srv-border);
            border-radius: 20px;
            padding: 28px 24px;
            margin-top: 24px;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            gap: 20px 32px;
          }
          .enroll-box span {
            display: flex;
            align-items: center;
            gap: 8px;
            font-size: 14px;
            color: var(--srv-text-body);
            font-family: Lexend, sans-serif;
          }
          .enroll-box span svg {
            width: 18px;
            height: 18px;
            color: #005B8F;
            flex-shrink: 0;
          }
          .sat-section {
            background: linear-gradient(135deg, rgba(0,91,143,0.04) 0%, rgba(74,131,243,0.02) 100%);
            border-radius: 30px;
            padding: 60px 48px;
            border: 1px solid var(--srv-border);
            margin-top: 40px;
          }
          .sat-card {
            background: var(--srv-bg-card);
            border: 1px solid var(--srv-border);
            border-radius: 20px;
            padding: 28px;
            text-align: center;
          }
          .feature-list {
            list-style: none;
            padding: 0;
            margin: 16px 0 0;
          }
          .feature-list li {
            padding: 12px 0;
            font-size: 13px;
            color: var(--srv-text-body);
            font-weight: 400;
            line-height: 1.5;
            font-family: Lexend, sans-serif;
            border-bottom: 1px solid rgba(0,0,0,0.1);
          }
          .dark .feature-list li {
            border-bottom: 1px solid rgba(255,255,255,0.12);
          }
          .feature-list li:last-child {
            border-bottom: none;
          }
          @media(max-width:968px){
            .batches-grid {
              grid-template-columns: repeat(2, 1fr) !important;
            }
          }
          @media(max-width:640px){
            .batches-grid {
              grid-template-columns: 1fr !important;
            }
            .sat-section {
              padding: 32px 24px;
            }
          }
        `}
      </style>

      <div className="srv-page" ref={containerRef}>
        <PageHero
          badge="Coaching Programs"
          title="Transform Your English & SAT"
          highlight="Performance with Expert Coaching"
          desc="We offer comprehensive training for PTE and spoken English, alongside Digital SAT coaching, combining proven teaching methods with personalized guidance and AI-powered learning systems."
          blobTop={-60}
          blobRight={-80}
        />

        {/* ── PTE MODULES ── */}
        <section className="srv-section">
          <div className="srv-container">
            <SectionHeader
              label="Pearson Test of English"
              title="PTE Coaching Modules"
              highlight="Comprehensive Training"
              body="Comprehensive training covering all 4 PTE skills with AI-powered guidance and proven template strategies."
              centered={true}
            />

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 24 }}>
              {pteModules.map((m, idx) => (
                <IconCard key={idx} icon={m.icon} title={m.title} desc={m.desc} />
              ))}
            </div>
          </div>
        </section>

        {/* ── PTE BATCHES ── */}
        <section className="srv-section-alt">
          <div className="srv-container">
            <SectionHeader
              label="Schedules"
              title="PTE Batches"
              highlight="Flexible Formats"
              body="Choose the batch that best fits your timing, pace, and learning preferences."
              centered={true}
            />

            <div className="batches-grid srv-reveal">
              <div className="batch-card">
                <div>
                  <div style={{ width: 44, height: 44, borderRadius: 10, background: "rgba(0,91,143,0.1)", color: "#005B8F", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
                    <Laptop size={20} />
                  </div>
                  <h4 style={{ fontWeight: 700, fontSize: 18, color: "var(--srv-text-primary)", margin: "0 0 10px" }}>Regular Batch</h4>
                  <p style={{ fontSize: 11, fontWeight: 700, color: "#005B8F", textTransform: "uppercase", letterSpacing: "0.05em" }}>Online / Face to Face / Hybrid</p>
                  <p className="srv-body" style={{ fontSize: 13, marginTop: 12 }}>
                    Perfect for students across Bangladesh who want flexible online, face-to-face, or hybrid learning with AI-powered practice. Instructor-led sessions with hands-on activities to apply what you've learned right away.
                  </p>
                  <ul className="feature-list">
                    {regularFeatures.map((f, i) => <li key={i}>{f}</li>)}
                  </ul>
                </div>
              </div>

              <div className="batch-card">
                <div>
                  <div style={{ width: 44, height: 44, borderRadius: 10, background: "rgba(22,163,74,0.1)", color: "#16a34a", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
                    <Zap size={20} />
                  </div>
                  <h4 style={{ fontWeight: 700, fontSize: 18, color: "var(--srv-text-primary)", margin: "0 0 10px" }}>Fast Track Batch</h4>
                  <p style={{ fontSize: 11, fontWeight: 700, color: "#16a34a", textTransform: "uppercase", letterSpacing: "0.05em" }}>Online / Face to Face</p>
                  <p className="srv-body" style={{ fontSize: 13, marginTop: 12 }}>
                    A dynamic, high-intensity course designed to prepare you quickly for the exam with coaching in a jiffy. Get the best PTE coaching in a bite-sized format with no compromise in quality.
                  </p>
                </div>
              </div>

              <div className="batch-card">
                <div>
                  <div style={{ width: 44, height: 44, borderRadius: 10, background: "rgba(147,51,234,0.1)", color: "#9333ea", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
                    <Users size={20} />
                  </div>
                  <h4 style={{ fontWeight: 700, fontSize: 18, color: "var(--srv-text-primary)", margin: "0 0 10px" }}>1:1 One-on-One Batch</h4>
                  <p style={{ fontSize: 11, fontWeight: 700, color: "#9333ea", textTransform: "uppercase", letterSpacing: "0.05em" }}>Personalized Coaching</p>
                  <p className="srv-body" style={{ fontSize: 13, marginTop: 12 }}>
                    Personalized coaching for guaranteed high scores with exclusive AI optimization. Completely tailored to your needs.
                  </p>
                  <ul className="feature-list">
                    {oneOnOneFeatures.map((f, i) => <li key={i}>{f}</li>)}
                  </ul>
                </div>
              </div>
            </div>

            <div className="enroll-box srv-reveal">
              <span><Phone /> Contact: +880 1XXXXXXXXX</span>
              <span><Mail /> Email: info@headeducare.com</span>
              <span><MapPin /> Address: Dhaka, Bangladesh</span>
            </div>
          </div>
        </section>

        {/* ── SAT COURSE ── */}
        <section className="srv-section">
          <div className="srv-container">
            <div className="sat-section srv-reveal">
              <div style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: 40, alignItems: "center" }}>
                <div>
                  <span className="srv-badge">
                    <span className="srv-badge-dot" style={{ backgroundColor: "#005B8F" }} />
                    Admissions Prep
                  </span>
                  <h2 style={{ fontSize: "clamp(24px,3vw,36px)", fontWeight: 900, color: "var(--srv-text-primary)", margin: "10px 0 20px", fontFamily: "Lexend, sans-serif" }}>
                    Digital <span style={{ color: "#005B8F" }}>SAT Course</span>
                  </h2>
                  <p className="srv-body" style={{ fontSize: 15, lineHeight: 1.8 }}>
                    Prepare for the Digital SAT with the world's first fully interactive SAT teaching platform, featuring recorded lessons from top scorers covering every DSAT topic alongside targeted practice and performance insights.
                  </p>
                </div>
                <div className="sat-card">
                  <GraduationCap size={44} style={{ color: "#005B8F", margin: "0 auto 16px" }} />
                  <h4 style={{ fontWeight: 700, fontSize: 16, color: "var(--srv-text-primary)", marginBottom: 8 }}>Ready to Excel?</h4>
                  <p className="srv-body" style={{ fontSize: 13, marginBottom: 20 }}>Get full score prep templates, real mock software drills, and diagnostic profiling.</p>
                  <a href="/freeconsulation" className="srv-cta-btn" style={{ fontSize: 13, padding: "10px 20px" }}>Enroll Now</a>
                </div>
              </div>
            </div>

            <div className="enroll-box srv-reveal" style={{ marginTop: 24 }}>
              <span><Phone /> Contact: +880 1XXXXXXXXX</span>
              <span><Mail /> Email: info@headeducare.com</span>
              <span><MapPin /> Address: Dhaka, Bangladesh</span>
            </div>
          </div>
        </section>

        <CtaBanner
          title="Ready to Boost Your Exam Scores?"
          desc="Book your diagnostic test or speak with our study preparation tutors to construct a customized schedule."
          label="Book a Free Consultation"
          link="/freeconsulation"
        />
      </div>
    </>
  );
}