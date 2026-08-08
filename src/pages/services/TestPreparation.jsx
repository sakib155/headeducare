import React from "react";
import {
  BASE_STYLES,
  useReveal,
  PageHero,
  SectionHeader,
  IconCard,
  StepCard,
  InfoBox,
  CheckList,
  CtaBanner,
} from "./serviceComponents";
import {
  Mic,
  PenTool,
  BookOpen,
  Headphones,
  Laptop,
  Zap,
  Users,
  Compass,
  GraduationCap,
} from "lucide-react";

export default function TestPreparation() {
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

  const oneOnOneFeatures = [
    "Completely personalized 1:1 sessions",
    "Flexible timings & duration according to your schedule",
    "Customized AI study plan based on diagnostic test",
    "Unlimited mock tests with scoring feedback",
    "24/7 support access for queries"
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
            justify-content: space-between;
          }
          .batch-card:hover {
            box-shadow: 0 10px 30px rgba(0,91,143,0.1);
            transform: translateY(-4px);
          }
          .batch-price {
            font-size: 24px;
            font-weight: 900;
            color: #005B8F;
            margin: 16px 0;
            font-family: Lexend, sans-serif;
          }
          .sat-section {
            background: linear-gradient(135deg, rgba(0,91,143,0.04) 0%, rgba(74,131,243,0.02) 100%);
            border-radius: 30px;
            padding: 60px 48px;
            border: 1px solid var(--srv-border);
            margin-top: 60px;
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
          title="Transform Your Performance with"
          highlight="Expert test preparation"
          desc="We offer comprehensive training for PTE and Spoken English, alongside Digital SAT coaching, combining proven teaching methods with personalized guidance and AI-powered learning systems."
          blobTop={-60}
          blobRight={-80}
        />

        {/* ── PTE SECTION ── */}
        <section className="srv-section">
          <div className="srv-container">
            <SectionHeader
              label="Pearson Test of English"
              title="PTE Coaching Modules"
              highlight="Covering All 4 Skills"
              body="Our training incorporates AI-powered guidance and proven template strategies to help you secure 79+ scores."
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
              {/* Regular */}
              <div className="batch-card">
                <div>
                  <div style={{ width: 44, height: 44, borderRadius: 10, background: "rgba(0,91,143,0.1)", color: "#005B8F", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
                    <Laptop size={20} />
                  </div>
                  <h4 style={{ fontWeight: 700, fontSize: 18, color: "var(--srv-text-primary)", margin: "0 0 10px" }}>Regular Batch</h4>
                  <p style={{ fontSize: 11, fontWeight: 700, color: "#005B8F", textTransform: "uppercase" }}>Online / Face to Face / Hybrid</p>
                  <p className="srv-body" style={{ fontSize: 13, marginTop: 12 }}>
                    Perfect for students across Bangladesh wanting flexible learning with AI-powered practice. Instructor-led sessions with interactive exercises to apply what you learn immediately.
                  </p>
                </div>
              </div>

              {/* Fast Track */}
              <div className="batch-card">
                <div>
                  <div style={{ width: 44, height: 44, borderRadius: 10, background: "rgba(22,163,74,0.1)", color: "#16a34a", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
                    <Zap size={20} />
                  </div>
                  <h4 style={{ fontWeight: 700, fontSize: 18, color: "var(--srv-text-primary)", margin: "0 0 10px" }}>Fast Track Batch</h4>
                  <p style={{ fontSize: 11, fontWeight: 700, color: "#16a34a", textTransform: "uppercase" }}>Online / Face to Face</p>
                  <p className="srv-body" style={{ fontSize: 13, marginTop: 12 }}>
                    A dynamic, high-intensity course designed to prepare you quickly for the exam. Get targeted coaching in a bite-sized format with no compromise in syllabus quality.
                  </p>
                </div>
              </div>

              {/* 1:1 */}
              <div className="batch-card">
                <div>
                  <div style={{ width: 44, height: 44, borderRadius: 10, background: "rgba(147,51,234,0.1)", color: "#9333ea", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
                    <Users size={20} />
                  </div>
                  <h4 style={{ fontWeight: 700, fontSize: 18, color: "var(--srv-text-primary)", margin: "0 0 10px" }}>1:1 One-on-One</h4>
                  <p style={{ fontSize: 11, fontWeight: 700, color: "#9333ea", textTransform: "uppercase" }}>Personalised Mentoring</p>
                  <div style={{ marginTop: 12 }}>
                    <CheckList items={oneOnOneFeatures} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SAT SECTION ── */}
        <section className="srv-section">
          <div className="srv-container">
            <div className="sat-section srv-reveal">
              <div style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: 40, alignItems: "center" }}>
                <div>
                  <span className="srv-badge">
                    <span className="srv-badge-dot" style={{ backgroundColor: "#16a34a" }} />
                    Admissions Prep
                  </span>
                  <h2 style={{ fontSize: clamp(24, "3vw", 36), fontWeight: 900, color: "var(--srv-text-primary)", margin: "10px 0 20px", fontFamily: "Lexend, sans-serif" }}>
                    Digital <span style={{ color: "#005B8F" }}>SAT Course</span>
                  </h2>
                  <p className="srv-body" style={{ fontSize: 15, lineHeight: 1.8 }}>
                    Prepare for the Digital SAT with the world’s first fully interactive SAT teaching platform, featuring recorded lessons from top scorers covering every DSAT topic alongside targeted practice and performance insights.
                  </p>
                </div>
                <div style={{ background: "var(--srv-bg-card)", border: "1px solid var(--srv-border)", borderRadius: 20, padding: 28, textAlign: "center" }}>
                  <GraduationCap size={44} style={{ color: "#005B8F", margin: "0 auto 16px" }} />
                  <h4 style={{ fontWeight: 700, fontSize: 16, color: "var(--srv-text-primary)", marginBottom: 8 }}>Ready to Excel?</h4>
                  <p className="srv-body" style={{ fontSize: 13, marginBottom: 20 }}>Get full score prep templates, real mock software drills, and diagnostic profiling.</p>
                  <a href="/freeconsulation" className="srv-cta-btn" style={{ fontSize: 13, padding: "10px 20px" }}>Enroll Now</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CtaBanner
          title="Ready to Boost Your Exam Scores?"
          desc="Book your diagnostic diagnostic test or speak with our study preparation tutors to construct a customized schedule."
          label="Book a Free Consultation"
          link="/freeconsulation"
        />
      </div>
    </>
  );
}
