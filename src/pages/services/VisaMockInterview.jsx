import React from "react";
import { Link } from "react-router-dom";
import {
  BASE_STYLES,
  useReveal,
  PageHero,
  SectionHeader,
  IconCard,
  StepCard,
  FAQ,
  StatsStrip,
  CtaBanner,
  CheckList,
  InfoBox,
  CountryTags,
} from "./serviceComponents";

import {
  MessageSquare,
  Mic,
  Users,
  Brain,
  ShieldCheck,
  Clock,
  CheckCircle,
  AlertCircle,
  Globe,
  Target,
  BookOpen,
  Award,
  Zap,
  Headphones,
  FileText,
  Smile,
} from "lucide-react";

/* ─────────────── DATA ─────────────── */

const destinations = [
  { flag: "🇺🇸", name: "USA" },
  { flag: "🇬🇧", name: "United Kingdom" },
  { flag: "🇨🇦", name: "Canada" },
  { flag: "🇦🇺", name: "Australia" },
  { flag: "🇮🇪", name: "Ireland" },
  { flag: "🇳🇿", name: "New Zealand" },
];

const services = [
  {
    icon: Users,
    title: "Country-Specific Experts",
    desc: "Practice with counselors who specialize in your target country. US experts know F1 trends; UK experts know Credibility Interview nuances.",
  },
  {
    icon: MessageSquare,
    title: "Realistic Simulation",
    desc: "We mimic the actual embassy environment — timed questions, professional demeanor, and unexpected follow-ups to test your readiness.",
  },
  {
    icon: Brain,
    title: "Behavioral Coaching",
    desc: "It’s not just what you say, but how you say it. We coach you on body language, eye contact, tone, and confidence under pressure.",
  },
  {
    icon: FileText,
    title: "Answer Structuring",
    desc: "Learn the 'STAR' method (Situation, Task, Action, Result) to keep your answers concise, relevant, and impactful within time limits.",
  },
  {
    icon: ShieldCheck,
    title: "Red Flag Detection",
    desc: "Our experts identify weak answers that might raise suspicion about your intent to return home or your financial stability.",
  },
  {
    icon: Zap,
    title: "Instant Feedback Loop",
    desc: "Get immediate, constructive criticism after every mock session. We record sessions (with permission) so you can see your own progress.",
  },
];

const interviewTypes = [
  {
    icon: Globe,
    title: "US F1 Visa Interview",
    desc: "Short (2-3 mins), high-pressure interviews at the US Embassy. Focuses on intent to return, funding, and academic clarity. Requires crisp, confident answers.",
    color: "#005B8F",
  },
  {
    icon: BookOpen,
    title: "UK Credibility Interview",
    desc: "Conducted by university admissions teams or UKVI. Focuses on why you chose this specific course, university, and how it fits your career history.",
    color: "#4A83F3",
  },
  {
    icon: Target,
    title: "Australian GTE Assessment",
    desc: "Often a written statement, but sometimes an interview. Proves you are a 'Genuine Temporary Entrant' and not using student visas for migration.",
    color: "#16a34a",
  },
  {
    icon: Users,
    title: "Canadian Study Permit",
    desc: "While often paper-based, officers may request interviews. Focuses heavily on family ties, financial capacity, and logical study progression.",
    color: "#9333ea",
  },
  {
    icon: Mic,
    title: "Scholarship Interviews",
    desc: "For awards like Chevening or Fulbright. These are deep-dive leadership interviews assessing your potential impact on your home country.",
    color: "#d97706",
  },
  {
    icon: Headphones,
    title: "Pre-Departure Orientation",
    desc: "Not a visa interview, but a prep session for life abroad. Covers cultural norms, academic expectations, and settling-in tips.",
    color: "#dc2626",
  },
];

const process = [
  {
    step: 1,
    icon: FileText,
    title: "Profile Review",
    desc: "We study your SOP, financial documents, and academic background to anticipate the specific questions likely to be asked.",
  },
  {
    step: 2,
    icon: BookOpen,
    title: "Strategy Session",
    desc: "We define your 'key messages' — the 3-4 core points you must convey regardless of the question asked.",
  },
  {
    step: 3,
    icon: MessageSquare,
    title: "Mock Round 1",
    desc: "A baseline simulation to identify gaps in knowledge, confidence, or answer structure. Recorded for review.",
  },
  {
    step: 4,
    icon: Brain,
    title: "Feedback & Refinement",
    desc: "Detailed critique of your performance. We refine your answers to be more concise and impactful.",
  },
  {
    step: 5,
    icon: Zap,
    title: "Mock Round 2 & 3",
    desc: "Advanced simulations with harder, curveball questions. We push you until you are comfortable with uncertainty.",
  },
  {
    step: 6,
    icon: CheckCircle,
    title: "Final Confidence Check",
    desc: "A final light session to boost morale and ensure you are relaxed, prepared, and ready for the big day.",
  },
];

const doList = [
  "Know your university and course details inside out",
  "Be honest and consistent with your written application",
  "Keep answers concise (30-60 seconds per question)",
  "Maintain eye contact and sit up straight",
  "Dress professionally (business casual is safe)",
  "Bring all original documents organized in a folder",
  "Listen carefully to the question before answering",
  "Express clear intent to return home after studies",
];

const dontList = [
  "Do not memorize answers word-for-word (sounds robotic)",
  "Do not argue with the visa officer",
  "Do not give vague answers like 'I want a better life'",
  "Do not mention work intentions in countries where it's restricted",
  "Do not fidget, look down, or speak too quietly",
  "Do not provide unsolicited information",
  "Do not lie about previous visa refusals or gaps",
  "Do not rely on parents to answer questions for you",
];

const faqs = [
  {
    q: "How many mock interviews should I take?",
    a: "We recommend at least 3 sessions. The first identifies gaps, the second refines your answers, and the third builds confidence and speed. Some students opt for 5+ for high-stakes scholarships.",
  },
  {
    q: "Are the mock interviews recorded?",
    a: "Yes, with your permission. Recording allows you to see your own body language and hear your tone, which is often different from how you perceive yourself in the moment.",
  },
  {
    q: "What if I don't know the answer to a question?",
    a: "It's okay to pause. We teach you how to handle unknown questions gracefully — either by admitting you don't know but offering related info, or by asking for clarification.",
  },
  {
    q: "Do you help with technical questions for my major?",
    a: "For research degrees (PhD/Masters by Research), yes. We can connect you with subject-matter experts to grill you on your research proposal. For general degrees, we focus on motivation and career goals.",
  },
  {
    q: "Can I book a mock interview on short notice?",
    a: "Yes, we offer urgent slots for students with imminent embassy appointments. However, we recommend starting preparation at least 2 weeks before your actual interview.",
  },
  {
    q: "Is the mock interviewer strict?",
    a: "Our mock interviewers can adjust their style. We start supportive and become progressively stricter to simulate the worst-case scenario, ensuring you are prepared for any attitude.",
  },
];

/* ─────────────── PAGE COMPONENT ─────────────── */

export default function VisaMockInterview() {
  const containerRef = useReveal();

  return (
    <>
      <style>
        {BASE_STYLES +
          `
          .interview-type-card {
            border-radius: 20px;
            overflow: hidden;
            border: 1px solid var(--srv-border);
            background: var(--srv-bg-card);
            transition: all .25s;
          }
          .interview-type-card:hover {
            box-shadow: 0 12px 40px rgba(0,91,143,0.1);
            transform: translateY(-4px);
          }
          .interview-type-header {
            padding: 20px 24px;
            display: flex;
            align-items: center;
            gap: 12px;
            border-bottom: 1px solid var(--srv-border);
          }
          .interview-type-body {
            padding: 20px 24px;
          }
          @media(max-width:768px){
            .grid-2{ grid-template-columns: 1fr !important; }
            .grid-3{ grid-template-columns: 1fr 1fr !important; }
          }
          @media(max-width:480px){
            .grid-3{ grid-template-columns: 1fr !important; }
          }
        `}
      </style>

      <div className="srv-page" ref={containerRef}>
        {/* ── HERO ── */}
        <PageHero
          badge="Student Services"
          title="Ace Your Visa Interview with"
          highlight="Confident Preparation"
          desc="The visa interview is your moment to shine. Head Edu Care’s mock interview sessions simulate real embassy conditions, helping you articulate your goals clearly, confidently, and convincingly."
          blobTop={-50}
          blobRight={-90}
        />

        {/* ── SERVICES GRID ── */}
        <section className="srv-section">
          <div className="srv-container">
            <SectionHeader
              label="Why Choose Us"
              title="Expert-Led Interview"
              highlight="Coaching"
              body="We don’t just ask questions; we train you to think like a visa officer and respond like a ideal candidate."
            />
            <div
              className="grid-3"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3,1fr)",
                gap: 20,
              }}
            >
              {services.map((s, i) => (
                <IconCard key={i} icon={s.icon} title={s.title} desc={s.desc} />
              ))}
            </div>
          </div>
        </section>

        <div className="srv-divider" />

        {/* ── INTERVIEW TYPES ── */}
        <section className="srv-section-alt">
          <div className="srv-container">
            <SectionHeader
              label="Specializations"
              title="Interview Prep for"
              highlight="Every Destination"
              body="Each country has a unique interview style. Our counselors are trained in the specific expectations of each embassy."
            />
            <div
              className="grid-3"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3,1fr)",
                gap: 20,
              }}
            >
              {interviewTypes.map((t, i) => {
                const Icon = t.icon;
                return (
                  <div key={i} className="interview-type-card srv-reveal">
                    <div
                      className="interview-type-header"
                      style={{ background: `${t.color}10` }}
                    >
                      <div
                        style={{
                          width: 40,
                          height: 40,
                          borderRadius: 10,
                          background: `${t.color}20`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        <Icon size={20} color={t.color} />
                      </div>
                      <h4
                        style={{
                          fontWeight: 700,
                          fontSize: 14,
                          color: "var(--srv-text-primary)",
                          fontFamily: "Lexend,sans-serif",
                          lineHeight: 1.3,
                        }}
                      >
                        {t.title}
                      </h4>
                    </div>
                    <div className="interview-type-body">
                      <p className="srv-body" style={{ fontSize: 13 }}>
                        {t.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── PROCESS ── */}
        <section className="srv-section">
          <div className="srv-container">
            <SectionHeader
              label="How It Works"
              title="Our 6-Step Interview"
              highlight="Preparation Plan"
              body="From profile analysis to final confidence boosting, we ensure you are over-prepared for the real thing."
            />
            <div
              className="grid-3"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3,1fr)",
                gap: 20,
              }}
            >
              {process.slice(0, 3).map((s) => (
                <StepCard
                  key={s.step}
                  step={s.step}
                  icon={s.icon}
                  title={s.title}
                  desc={s.desc}
                />
              ))}
            </div>
            <div
              className="grid-3"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3,1fr)",
                gap: 20,
                marginTop: 20,
              }}
            >
              {process.slice(3).map((s) => (
                <StepCard
                  key={s.step}
                  step={s.step}
                  icon={s.icon}
                  title={s.title}
                  desc={s.desc}
                />
              ))}
            </div>
          </div>
        </section>

        <div className="srv-divider" />

        {/* ── DO & DON'T INFO BOXES ── */}
        <section className="srv-section-alt">
          <div className="srv-container">
            <SectionHeader
              label="Interview Tips"
              title="The Essential Interview"
              highlight="Dos and Don'ts"
              body="Small behavioral cues can make or break your interview. Master these basics before stepping into the embassy."
            />
            <div
              className="grid-2"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 32,
              }}
            >
              <InfoBox
                icon={CheckCircle}
                title="Do These Things"
                variant="green"
              >
                <CheckList items={doList} />
              </InfoBox>
              <InfoBox
                icon={AlertCircle}
                title="Avoid These Mistakes"
                variant="amber"
              >
                <CheckList items={dontList} />
              </InfoBox>
            </div>
          </div>
        </section>

        {/* ── DESTINATIONS ── */}
        <section className="srv-section">
          <div className="srv-container">
            <SectionHeader
              label="Global Coverage"
              title="Interview Prep for"
              highlight="Major Destinations"
              body="Whether it’s a 2-minute US F1 interview or a 20-minute UK Credibility check, we have you covered."
              centered
            />
            <CountryTags countries={destinations} />
          </div>
        </section>

        {/* ── STATS ── */}
        <StatsStrip
          stats={[
            { value: "98%", label: "Visa Success Rate" },
            { value: "5K+", label: "Mocks Conducted" },
            { value: "12+", label: "Years Experience" },
            { value: "24hr", label: "Support Available" },
          ]}
        />

        {/* ── FAQ ── */}
        <section className="srv-section">
          <div className="srv-container" style={{ maxWidth: 860 }}>
            <SectionHeader
              label="FAQ"
              title="Frequently Asked"
              highlight="Questions"
              centered
            />
            <FAQ items={faqs} />
          </div>
        </section>

        {/* ── CTA BANNER ── */}
        <CtaBanner
          title="Ready to Practice?"
          desc="Don't leave your visa outcome to chance. Book your mock interview session today and walk into the embassy with confidence."
          label="Book a Free Consultation"
          link="/freeconsulation"
        />
      </div>
    </>
  );
}
