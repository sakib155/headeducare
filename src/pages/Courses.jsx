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
  CheckCircle,
  Clock,
  Globe,
  BarChart3,
  Sparkles,
  Target,
  Brain,
  Lightbulb,
  BookMarked,
  Calculator,
  Pencil,
  FileText,
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

  const whyPte = [
    { icon: Laptop, title: "Fully Computer-Based", desc: "AI-based scoring with fully computer-based format" },
    { icon: Clock, title: "Fastest Results", desc: "Results delivered within 24–48 hours" },
    { icon: Globe, title: "70+ Countries", desc: "Accepted in 70+ countries for study, work, and migration" },
    { icon: BarChart3, title: "Flexible Test Dates", desc: "Flexible test dates available throughout the year" },
    { icon: CheckCircle, title: "UK/AU/NZ Visa Approved", desc: "Approved for UK, Australia, and New Zealand visas" },
    { icon: Sparkles, title: "AI Scoring", desc: "AI-powered equitable marking for unbiased results" },
  ];

  const whySat = [
    { icon: Target, title: "4000+ Universities", desc: "Accepted by 4000+ universities worldwide" },
    { icon: Clock, title: "Shorter Format", desc: "Digital format with shorter test time (2 hours)" },
    { icon: Brain, title: "Adaptive Testing", desc: "Adaptive testing — difficulty adjusts based on your performance" },
    { icon: BarChart3, title: "Faster Results", desc: "Faster results delivered within days" },
    { icon: GraduationCap, title: "Scholarships", desc: "Scholarships available for high-score students" },
    { icon: Sparkles, title: "Digital Format", desc: "New Digital SAT format — shorter, smarter, easier" },
  ];

  const pteSpeakingTasks = [
    "Personal introduction",
    "Read aloud",
    "Repeat sentence",
    "Describe image",
    "Retell lecture",
    "Answer short questions",
  ];

  const pteWritingTasks = [
    "Summarize written text",
    "Essay writing (200–300 words)",
  ];

  const pteReadingTasks = [
    "Multiple-choice (single/multiple answer)",
    "Reorder paragraphs",
    "Reading & writing: fill in the blanks",
    "Reading: fill in the blanks",
  ];

  const pteListeningTasks = [
    "Summarize spoken text",
    "Multiple-choice questions",
    "Fill in the blanks",
    "Highlight correct summary",
    "Select missing word",
    "Highlight incorrect words",
    "Write from dictation",
  ];

  const satReadingTasks = [
    "Information & ideas: main ideas, details, inferences",
    "Craft & Structure: vocabulary, sentence function, text structure",
    "Expression of ideas: effective language use, clarity",
    "Standard English conventions: grammar, punctuation, sentence correction",
  ];

  const satMathTasks = [
    "Algebra: Linear equations, inequalities, word problems",
    "Advanced Math: Functions, quadratic equations",
    "Problem Solving & Data Analysis: Ratios, percentages, charts",
    "Geometry & Trigonometry: Angles, triangles, area, trigonometric functions",
  ];

  const pteHeadEducare = [
    "Certified faculty",
    "Easy and student-friendly teaching methodologies",
    "Online and offline options for class availability",
    "Constant mocks conducted to assess student performance",
    "One-to-one teaching methodology",
    "Assistance for exam registration free of charge",
  ];

  const satHeadEducare = [
    "Section wise different faculties",
    "Senior faculty with 20+ years of experience",
    "Small Batch Size",
    "One-on-One Teaching Methodology",
    "Flexible timing",
    "Students can take the classes from the comfort of their home",
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
          .exam-table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 24px;
            font-size: 14px;
          }
          .exam-table th {
            text-align: left;
            padding: 14px 18px;
            background: linear-gradient(135deg, #005B8F, #004a78);
            color: #fff;
            font-weight: 700;
            font-size: 13px;
            font-family: Lexend, sans-serif;
          }
          .exam-table th:first-child { border-radius: 12px 0 0 0; }
          .exam-table th:last-child { border-radius: 0 12px 0 0; }
          .exam-table td {
            padding: 14px 18px;
            border-bottom: 1px solid var(--srv-border);
            color: var(--srv-text-body);
            font-family: Lexend, sans-serif;
            font-size: 13px;
          }
          .exam-table tr:hover td {
            background: rgba(0,91,143,0.03);
          }
          .task-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
            gap: 12px;
          }
          .task-chip {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 12px 16px;
            background: linear-gradient(135deg, rgba(0,91,143,0.06), rgba(74,131,243,0.04));
            border: 1px solid rgba(0,91,143,0.1);
            border-radius: 12px;
            font-size: 13px;
            color: var(--srv-text-primary);
            font-family: Lexend, sans-serif;
            font-weight: 500;
            transition: all 0.2s;
          }
          .task-chip:hover {
            background: linear-gradient(135deg, rgba(0,91,143,0.12), rgba(74,131,243,0.08));
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(0,91,143,0.1);
          }
          .task-chip svg {
            width: 18px;
            height: 18px;
            color: #005B8F;
            flex-shrink: 0;
          }
          .tip-card {
            background: linear-gradient(135deg, #f0f7ff, #e8f2fe);
            border: 1px solid rgba(0,91,143,0.12);
            border-radius: 16px;
            padding: 24px;
            transition: all 0.25s;
          }
          .tip-card:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 24px rgba(0,91,143,0.12);
          }
          .dark .tip-card {
            background: linear-gradient(135deg, rgba(0,91,143,0.12), rgba(74,131,243,0.08));
          }
          .vibrant-badge {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            padding: 4px 14px;
            border-radius: 40px;
            font-size: 11px;
            font-weight: 700;
            letter-spacing: 0.08em;
            text-transform: uppercase;
            font-family: Lexend, sans-serif;
          }
          .why-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
            gap: 16px;
          }
          .why-card {
            text-align: center;
            padding: 28px 20px;
            border-radius: 20px;
            border: 1px solid var(--srv-border);
            background: var(--srv-bg-card);
            transition: all 0.25s;
          }
          .why-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 10px 30px rgba(0,91,143,0.1);
            border-color: rgba(0,91,143,0.2);
          }
          .why-card svg {
            width: 32px;
            height: 32px;
            color: #005B8F;
            margin-bottom: 12px;
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
            .exam-table { font-size: 12px; }
          }
        `}
      </style>

      <div className="srv-page" ref={containerRef}>
        <PageHero
          badge="Coaching Programs"
          title="Transform Your English & SAT"
          highlight="Performance with Expert Coaching"
          desc="We offer comprehensive training for PTE Academic and Digital SAT, combining proven teaching methods with personalized guidance and AI-powered learning systems."
          blobTop={-60}
          blobRight={-80}
        />

        {/* ═══════════════════════════════════════════
           PTE — HERO SECTION
        ════════════════════════════════════════════ */}
        <section className="srv-section">
          <div className="srv-container">
            <div className="srv-reveal" style={{ maxWidth: 800, margin: "0 auto", textAlign: "center", marginBottom: 48 }}>
              <span className="srv-badge" style={{ margin: "0 auto 20px" }}>
                <span className="srv-badge-dot" />
                Pearson Test of English
              </span>
              <h2 className="srv-h2" style={{ fontSize: "clamp(28px,4vw,42px)" }}>
                What is <span>PTE Academic?</span>
              </h2>
              <p className="srv-body" style={{ fontSize: 15, lineHeight: 1.9, marginTop: 16 }}>
                The Pearson Test of English (PTE) Academic is a globally recognized English language test for non-native English speakers. Developed and conducted by Pearson, PTE is a computerized test that evaluates your ability to comprehend and use English in academic and real-world contexts. For study, work, or immigration, take the PTE test for a genuine assessment of your English communication skills.
              </p>
              <p className="srv-body" style={{ fontSize: 15, lineHeight: 1.9, marginTop: 12 }}>
                The PTE Academic is accepted by thousands of universities across the UK, Canada, Australia, USA, Europe, and more — known for its fast results, AI-based scoring, and fully computer-based format.
              </p>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
           WHY CHOOSE PTE
        ════════════════════════════════════════════ */}
        <section className="srv-section-alt">
          <div className="srv-container">
            <SectionHeader
              label="Why PTE?"
              title="Why Choose"
              highlight="PTE Academic?"
              body="The PTE Academic is a globally accepted English proficiency test designed for study abroad, work visas, and PR applications."
              centered={true}
            />
            <div className="why-grid srv-reveal">
              {whyPte.map((item, i) => (
                <div key={i} className="why-card">
                  <item.icon />
                  <h4 style={{ fontWeight: 700, fontSize: 14, color: "var(--srv-text-primary)", marginBottom: 6, fontFamily: "Lexend,sans-serif" }}>{item.title}</h4>
                  <p className="srv-body" style={{ fontSize: 12 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
           PTE EXAM FORMAT TABLE
        ════════════════════════════════════════════ */}
        <section className="srv-section">
          <div className="srv-container">
            <SectionHeader
              label="Exam Format"
              title="PTE Exam"
              highlight="Structure"
              body="Total time: 2 hours — fully computer-based with AI scoring."
              centered={true}
            />
            <div className="srv-reveal" style={{ overflowX: "auto" }}>
              <table className="exam-table">
                <thead>
                  <tr>
                    <th>Section</th>
                    <th>Time</th>
                    <th>What It Tests</th>
                    <th>Purpose</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Speaking & Writing (combined)</strong></td>
                    <td>54–67 mins</td>
                    <td>Pronunciation, fluency, grammar, written skills</td>
                    <td>Tests your ability to speak clearly & write coherently</td>
                  </tr>
                  <tr>
                    <td><strong>Reading</strong></td>
                    <td>29–30 mins</td>
                    <td>Comprehension, vocabulary, logical reading</td>
                    <td>Checks how well you understand academic texts</td>
                  </tr>
                  <tr>
                    <td><strong>Listening</strong></td>
                    <td>30–43 mins</td>
                    <td>Listening comprehension, note taking</td>
                    <td>Tests your ability to follow lectures & conversations</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
           PTE SYLLABUS — TASKS
        ════════════════════════════════════════════ */}
        <section className="srv-section-alt">
          <div className="srv-container">
            <SectionHeader
              label="Exam Syllabus"
              title="PTE Exam"
              highlight="Tasks Breakdown"
              body="Detailed breakdown of all tasks across the 3 sections of the PTE Academic exam."
              centered={true}
            />

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 28 }}>
              <div className="tip-card srv-reveal" style={{ borderTop: "4px solid #005B8F" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                  <div style={{ width: 40, height: 40, borderRadius: 10, background: "rgba(0,91,143,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Mic size={20} color="#005B8F" />
                  </div>
                  <div>
                    <h4 style={{ fontWeight: 700, fontSize: 15, color: "var(--srv-text-primary)", fontFamily: "Lexend,sans-serif" }}>Speaking & Writing</h4>
                    <p style={{ fontSize: 11, color: "#005B8F", fontWeight: 600 }}>54–67 minutes</p>
                  </div>
                </div>
                <div className="task-grid">
                  {pteSpeakingTasks.map((t, i) => <div key={i} className="task-chip"><CheckCircle size={14} />{t}</div>)}
                  <div style={{ width: "100%", height: 1, background: "rgba(0,91,143,0.08)", margin: "4px 0" }} />
                  {pteWritingTasks.map((t, i) => <div key={i} className="task-chip"><Pencil size={14} />{t}</div>)}
                </div>
              </div>

              <div className="tip-card srv-reveal" style={{ borderTop: "4px solid #16a34a" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                  <div style={{ width: 40, height: 40, borderRadius: 10, background: "rgba(22,163,74,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <BookOpen size={20} color="#16a34a" />
                  </div>
                  <div>
                    <h4 style={{ fontWeight: 700, fontSize: 15, color: "var(--srv-text-primary)", fontFamily: "Lexend,sans-serif" }}>Reading</h4>
                    <p style={{ fontSize: 11, color: "#16a34a", fontWeight: 600 }}>29–30 minutes</p>
                  </div>
                </div>
                <div className="task-grid">
                  {pteReadingTasks.map((t, i) => <div key={i} className="task-chip"><CheckCircle size={14} />{t}</div>)}
                </div>
              </div>

              <div className="tip-card srv-reveal" style={{ borderTop: "4px solid #7c3aed" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                  <div style={{ width: 40, height: 40, borderRadius: 10, background: "rgba(124,58,237,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Headphones size={20} color="#7c3aed" />
                  </div>
                  <div>
                    <h4 style={{ fontWeight: 700, fontSize: 15, color: "var(--srv-text-primary)", fontFamily: "Lexend,sans-serif" }}>Listening</h4>
                    <p style={{ fontSize: 11, color: "#7c3aed", fontWeight: 600 }}>30–43 minutes</p>
                  </div>
                </div>
                <div className="task-grid">
                  {pteListeningTasks.map((t, i) => <div key={i} className="task-chip"><CheckCircle size={14} />{t}</div>)}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
           PTE SCORING
        ════════════════════════════════════════════ */}
        <section className="srv-section" style={{ background: "linear-gradient(135deg, rgba(0,91,143,0.03), rgba(74,131,243,0.02))" }}>
          <div className="srv-container">
            <SectionHeader
              label="Scoring"
              title="PTE"
              highlight="Scoring System"
              body="PTE uses a 10–90 scoring scale. Results are usually delivered in 24–48 hours."
              centered={true}
            />
            <div className="srv-reveal" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 16, maxWidth: 700, margin: "0 auto" }}>
              {[
                { label: "Score Range", value: "10–90", color: "#005B8F" },
                { label: "Content", value: "Assessed", color: "#16a34a" },
                { label: "Fluency", value: "Assessed", color: "#7c3aed" },
                { label: "Pronunciation", value: "Assessed", color: "#d97706" },
                { label: "Grammar", value: "Assessed", color: "#dc2626" },
                { label: "Vocabulary", value: "Assessed", color: "#0891b2" },
              ].map((item, i) => (
                <div key={i} style={{ textAlign: "center", padding: "20px", background: "var(--srv-bg-card)", borderRadius: 16, border: "1px solid var(--srv-border)" }}>
                  <p style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: item.color, marginBottom: 8 }}>{item.label}</p>
                  <p style={{ fontSize: 20, fontWeight: 900, color: "var(--srv-text-primary)", fontFamily: "Lexend,sans-serif" }}>{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
           PTE TIPS & TRICKS
        ════════════════════════════════════════════ */}
        <section className="srv-section-alt">
          <div className="srv-container">
            <SectionHeader
              label="Tips & Tricks"
              title="PTE Exam"
              highlight="Tips & Strategies"
              body="Proven tips to boost your PTE score across all sections."
              centered={true}
            />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
              <div className="tip-card srv-reveal">
                <div style={{ width: 40, height: 40, borderRadius: 10, background: "rgba(0,91,143,0.1)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 14 }}>
                  <Mic size={20} color="#005B8F" />
                </div>
                <h4 style={{ fontWeight: 700, fontSize: 15, color: "var(--srv-text-primary)", marginBottom: 10, fontFamily: "Lexend,sans-serif" }}>Speaking Tips</h4>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {["Start with short, clear sentences", "Maintain natural pace; don't be too fast", "Don't pause too much; it lowers fluency score", "Use fillers carefully (well, actually)", "Practice with PTE mock tests for pronunciation"].map((t, i) => (
                    <li key={i} style={{ display: "flex", gap: 8, fontSize: 13, color: "var(--srv-text-body)", padding: "6px 0", fontFamily: "Lexend,sans-serif" }}>
                      <span style={{ color: "#005B8F", flexShrink: 0 }}>✓</span>{t}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="tip-card srv-reveal">
                <div style={{ width: 40, height: 40, borderRadius: 10, background: "rgba(22,163,74,0.1)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 14 }}>
                  <PenTool size={20} color="#16a34a" />
                </div>
                <h4 style={{ fontWeight: 700, fontSize: 15, color: "var(--srv-text-primary)", marginBottom: 10, fontFamily: "Lexend,sans-serif" }}>Writing Tips</h4>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {["Follow a simple structure (Intro → Body → Conclusion)", "Use academic words — however, therefore, moreover", "Keep sentences error-free rather than complex", "Maintain word limit — don't over-write", "Practice Summarize Written Text in 1 sentence"].map((t, i) => (
                    <li key={i} style={{ display: "flex", gap: 8, fontSize: 13, color: "var(--srv-text-body)", padding: "6px 0", fontFamily: "Lexend,sans-serif" }}>
                      <span style={{ color: "#16a34a", flexShrink: 0 }}>✓</span>{t}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="tip-card srv-reveal">
                <div style={{ width: 40, height: 40, borderRadius: 10, background: "rgba(124,58,237,0.1)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 14 }}>
                  <BookOpen size={20} color="#7c3aed" />
                </div>
                <h4 style={{ fontWeight: 700, fontSize: 15, color: "var(--srv-text-primary)", marginBottom: 10, fontFamily: "Lexend,sans-serif" }}>Reading Tips</h4>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {["Learn to skim (quick overview)", "Learn to scan (find specific details)", "Practice 'Re-order Paragraphs' daily", "Improve vocabulary and focus on reading tasks", "Read short academic articles for speed"].map((t, i) => (
                    <li key={i} style={{ display: "flex", gap: 8, fontSize: 13, color: "var(--srv-text-body)", padding: "6px 0", fontFamily: "Lexend,sans-serif" }}>
                      <span style={{ color: "#7c3aed", flexShrink: 0 }}>✓</span>{t}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="tip-card srv-reveal">
                <div style={{ width: 40, height: 40, borderRadius: 10, background: "rgba(245,158,11,0.1)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 14 }}>
                  <Headphones size={20} color="#d97706" />
                </div>
                <h4 style={{ fontWeight: 700, fontSize: 15, color: "var(--srv-text-primary)", marginBottom: 10, fontFamily: "Lexend,sans-serif" }}>Listening Tips</h4>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {["Take quick notes while listening", "Focus on keywords, not complete sentences", "Repeated practice of 'Fill in the Blanks'", "Listen to podcasts/lectures daily", "Be careful with spelling — it affects score"].map((t, i) => (
                    <li key={i} style={{ display: "flex", gap: 8, fontSize: 13, color: "var(--srv-text-body)", padding: "6px 0", fontFamily: "Lexend,sans-serif" }}>
                      <span style={{ color: "#d97706", flexShrink: 0 }}>✓</span>{t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
           PTE — WHY HEAD EDUCARE
        ════════════════════════════════════════════ */}
        <section className="srv-section" style={{ background: "linear-gradient(135deg, #005B8F08, #4A83F305)" }}>
          <div className="srv-container">
            <SectionHeader
              label="Why Choose Us"
              title="Why HEAD EDUCARE for"
              highlight="PTE Preparation?"
              body="We provide the best PTE coaching with certified faculty and proven results."
              centered={true}
            />
            <div className="srv-reveal" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16 }}>
              {pteHeadEducare.map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, padding: "16px 20px", background: "var(--srv-bg-card)", borderRadius: 14, border: "1px solid var(--srv-border)" }}>
                  <div style={{ width: 32, height: 32, borderRadius: 8, background: "rgba(0,91,143,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <CheckCircle size={16} color="#005B8F" />
                  </div>
                  <span style={{ fontSize: 13, fontWeight: 600, color: "var(--srv-text-primary)", fontFamily: "Lexend,sans-serif" }}>{item}</span>
                </div>
              ))}
            </div>

            <div className="srv-reveal" style={{ marginTop: 32, padding: "28px 32px", background: "linear-gradient(135deg, #005B8F, #004270)", borderRadius: 20, color: "#fff" }}>
              <h4 style={{ fontWeight: 900, fontSize: 18, marginBottom: 12, fontFamily: "Lexend,sans-serif" }}>Class & Fee Structure</h4>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 24 }}>
                <div>
                  <p style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.08em", color: "rgba(255,255,255,0.7)", marginBottom: 4 }}>PTE Course</p>
                  <p style={{ fontSize: 24, fontWeight: 900 }}>10,000 BDT</p>
                  <p style={{ fontSize: 13, color: "rgba(255,255,255,0.8)", marginTop: 4 }}>15 classes (30 hours including mock tests)</p>
                </div>
                <div style={{ width: 1, background: "rgba(255,255,255,0.2)" }} />
                <div>
                  <p style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.08em", color: "rgba(255,255,255,0.7)", marginBottom: 4 }}>Also Available</p>
                  <p style={{ fontSize: 16, fontWeight: 600 }}>Customizable classes & Crash course</p>
                  <p style={{ fontSize: 13, color: "rgba(255,255,255,0.8)", marginTop: 4 }}>Flexible options to suit your schedule and budget</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
           PTE MODULES
        ════════════════════════════════════════════ */}
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

        {/* ═══════════════════════════════════════════
           PTE BATCHES
        ════════════════════════════════════════════ */}
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

        {/* ═══════════════════════════════════════════
           SAT — HERO SECTION
        ════════════════════════════════════════════ */}
        <section className="srv-section">
          <div className="srv-container">
            <div className="srv-reveal" style={{ textAlign: "center", marginBottom: 48 }}>
              <span className="srv-badge" style={{ margin: "0 auto 20px" }}>
                <span className="srv-badge-dot" style={{ background: "#005B8F" }} />
                SAT
              </span>
              <h2 className="srv-h2" style={{ fontSize: "clamp(28px,4vw,42px)" }}>
                What is the <span>SAT?</span>
              </h2>
              <p className="srv-body" style={{ fontSize: 15, lineHeight: 1.9, maxWidth: 700, margin: "16px auto 0" }}>
                The SAT (Scholastic Assessment Test) is a globally recognized entrance test for students planning to pursue undergraduate studies abroad, especially in the USA, Canada, UK, Europe, and top international universities. In 2024–2025, SAT moved entirely to a Digital SAT format — shorter, smarter, and easier to manage.
              </p>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
           WHY CHOOSE SAT
        ════════════════════════════════════════════ */}
        <section className="srv-section-alt">
          <div className="srv-container">
            <SectionHeader
              label="Why SAT?"
              title="Why Choose"
              highlight="SAT?"
              body="The SAT is required for bachelor's admissions in many top universities worldwide."
              centered={true}
            />
            <div className="why-grid srv-reveal">
              {whySat.map((item, i) => (
                <div key={i} className="why-card">
                  <item.icon />
                  <h4 style={{ fontWeight: 700, fontSize: 14, color: "var(--srv-text-primary)", marginBottom: 6, fontFamily: "Lexend,sans-serif" }}>{item.title}</h4>
                  <p className="srv-body" style={{ fontSize: 12 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
           SAT EXAM FORMAT
        ════════════════════════════════════════════ */}
        <section className="srv-section">
          <div className="srv-container">
            <SectionHeader
              label="Digital SAT"
              title="SAT Exam"
              highlight="Format"
              body="The Digital SAT is shorter, with adaptive testing and faster results."
              centered={true}
            />
            <div className="srv-reveal" style={{ overflowX: "auto" }}>
              <table className="exam-table">
                <thead>
                  <tr>
                    <th>Section</th>
                    <th>Time</th>
                    <th>What It Tests</th>
                    <th>Purpose</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Reading & Writing</strong></td>
                    <td>64 mins (two 32-min modules)</td>
                    <td>Comprehension, grammar, vocabulary</td>
                    <td>Evaluates reading logic and writing skills</td>
                  </tr>
                  <tr>
                    <td><strong>Math</strong></td>
                    <td>70 mins (two 35-min modules)</td>
                    <td>Algebra, problem solving, geometry, data</td>
                    <td>Tests mathematical skills for university-level courses</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20, marginTop: 40 }}>
              <div className="tip-card srv-reveal" style={{ borderTop: "4px solid #005B8F" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                  <div style={{ width: 40, height: 40, borderRadius: 10, background: "rgba(0,91,143,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <FileText size={20} color="#005B8F" />
                  </div>
                  <h4 style={{ fontWeight: 700, fontSize: 15, color: "var(--srv-text-primary)", fontFamily: "Lexend,sans-serif" }}>Reading & Writing (64 mins, 54 questions)</h4>
                </div>
                <div className="task-grid">
                  {satReadingTasks.map((t, i) => <div key={i} className="task-chip"><CheckCircle size={14} />{t}</div>)}
                </div>
              </div>
              <div className="tip-card srv-reveal" style={{ borderTop: "4px solid #16a34a" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                  <div style={{ width: 40, height: 40, borderRadius: 10, background: "rgba(22,163,74,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Calculator size={20} color="#16a34a" />
                  </div>
                  <h4 style={{ fontWeight: 700, fontSize: 15, color: "var(--srv-text-primary)", fontFamily: "Lexend,sans-serif" }}>Math (70 mins)</h4>
                </div>
                <div className="task-grid">
                  {satMathTasks.map((t, i) => <div key={i} className="task-chip"><CheckCircle size={14} />{t}</div>)}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
           SAT SCORING
        ════════════════════════════════════════════ */}
        <section className="srv-section-alt">
          <div className="srv-container">
            <SectionHeader
              label="Scoring"
              title="SAT"
              highlight="Scoring System"
              body="Score Range: 400–1600. No negative marking. Score valid for 5 years."
              centered={true}
            />
            <div className="srv-reveal" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 16, maxWidth: 700, margin: "0 auto" }}>
              {[
                { label: "Total Score", value: "400–1600", color: "#005B8F" },
                { label: "Reading & Writing", value: "200–800", color: "#16a34a" },
                { label: "Math", value: "200–800", color: "#7c3aed" },
                { label: "Negative Marking", value: "None", color: "#d97706" },
                { label: "Score Validity", value: "5 Years", color: "#dc2626" },
              ].map((item, i) => (
                <div key={i} style={{ textAlign: "center", padding: "20px", background: "var(--srv-bg-card)", borderRadius: 16, border: "1px solid var(--srv-border)" }}>
                  <p style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: item.color, marginBottom: 8 }}>{item.label}</p>
                  <p style={{ fontSize: 20, fontWeight: 900, color: "var(--srv-text-primary)", fontFamily: "Lexend,sans-serif" }}>{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
           SAT TIPS
        ════════════════════════════════════════════ */}
        <section className="srv-section">
          <div className="srv-container">
            <SectionHeader
              label="Tips & Tricks"
              title="SAT Exam"
              highlight="Tips & Strategies"
              body="Proven strategies to maximize your SAT score."
              centered={true}
            />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
              <div className="tip-card srv-reveal">
                <div style={{ width: 40, height: 40, borderRadius: 10, background: "rgba(0,91,143,0.1)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 14 }}>
                  <BookMarked size={20} color="#005B8F" />
                </div>
                <h4 style={{ fontWeight: 700, fontSize: 15, color: "var(--srv-text-primary)", marginBottom: 10, fontFamily: "Lexend,sans-serif" }}>Reading & Writing Tips</h4>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {["Read the questions first, then skim the passage", "Look for keywords and transition words", "Practice grammar rules: subject–verb agreement, modifiers", "Focus on evidence-based questions — find the exact line", "Build vocabulary through daily reading"].map((t, i) => (
                    <li key={i} style={{ display: "flex", gap: 8, fontSize: 13, color: "var(--srv-text-body)", padding: "6px 0", fontFamily: "Lexend,sans-serif" }}>
                      <span style={{ color: "#005B8F", flexShrink: 0 }}>✓</span>{t}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="tip-card srv-reveal">
                <div style={{ width: 40, height: 40, borderRadius: 10, background: "rgba(22,163,74,0.1)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 14 }}>
                  <Calculator size={20} color="#16a34a" />
                </div>
                <h4 style={{ fontWeight: 700, fontSize: 15, color: "var(--srv-text-primary)", marginBottom: 10, fontFamily: "Lexend,sans-serif" }}>Math Tips</h4>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {["Memorize formulas (SAT doesn't give formula sheet for all)", "Practice mental math for speed", "Solve official College Board sample papers", "Use the on-screen calculator smartly", "Focus on algebra and word problems — highest weightage"].map((t, i) => (
                    <li key={i} style={{ display: "flex", gap: 8, fontSize: 13, color: "var(--srv-text-body)", padding: "6px 0", fontFamily: "Lexend,sans-serif" }}>
                      <span style={{ color: "#16a34a", flexShrink: 0 }}>✓</span>{t}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="tip-card srv-reveal">
                <div style={{ width: 40, height: 40, borderRadius: 10, background: "rgba(124,58,237,0.1)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 14 }}>
                  <Clock size={20} color="#7c3aed" />
                </div>
                <h4 style={{ fontWeight: 700, fontSize: 15, color: "var(--srv-text-primary)", marginBottom: 10, fontFamily: "Lexend,sans-serif" }}>Time Management Tips</h4>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {["Don't spend too long on one question", "Mark difficult ones and revisit if time allows", "Take full-length mock tests to build stamina", "Practice adaptive sections to understand scoring patterns"].map((t, i) => (
                    <li key={i} style={{ display: "flex", gap: 8, fontSize: 13, color: "var(--srv-text-body)", padding: "6px 0", fontFamily: "Lexend,sans-serif" }}>
                      <span style={{ color: "#7c3aed", flexShrink: 0 }}>✓</span>{t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
           SAT — WHY HEAD EDUCARE
        ════════════════════════════════════════════ */}
        <section className="srv-section-alt" style={{ background: "linear-gradient(135deg, rgba(0,91,143,0.04), rgba(74,131,243,0.02))" }}>
          <div className="srv-container">
            <SectionHeader
              label="Why Choose Us"
              title="Why HEAD EDUCARE for"
              highlight="SAT Preparation?"
              body="Expert faculty with 20+ years of experience and a proven track record."
              centered={true}
            />
            <div className="srv-reveal" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16 }}>
              {satHeadEducare.map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, padding: "16px 20px", background: "var(--srv-bg-card)", borderRadius: 14, border: "1px solid var(--srv-border)" }}>
                  <div style={{ width: 32, height: 32, borderRadius: 8, background: "rgba(0,91,143,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <CheckCircle size={16} color="#005B8F" />
                  </div>
                  <span style={{ fontSize: 13, fontWeight: 600, color: "var(--srv-text-primary)", fontFamily: "Lexend,sans-serif" }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
           SAT COURSE — CTA SECTION
        ════════════════════════════════════════════ */}
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