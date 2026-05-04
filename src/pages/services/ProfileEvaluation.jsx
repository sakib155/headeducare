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
  ClipboardList,
  GraduationCap,
  Target,
  BarChart2,
  BookOpen,
  Globe,
  Lightbulb,
  MessageCircle,
  Search,
  FileText,
  Send,
  PartyPopper,
  CheckCircle,
  AlertCircle,
  TrendingUp,
  Award,
  Users,
  Briefcase,
  Languages,
  DollarSign,
  Map,
  Microscope,
} from "lucide-react";

/* ─────────────── DATA ─────────────── */

const destinations = [
  { flag: "🇦🇺", name: "Australia" },
  { flag: "🇬🇧", name: "United Kingdom" },
  { flag: "🇺🇸", name: "USA" },
  { flag: "🇨🇦", name: "Canada" },
  { flag: "🇩🇪", name: "Germany" },
  { flag: "🇯🇵", name: "Japan" },
  { flag: "🇮🇪", name: "Ireland" },
  { flag: "🇳🇿", name: "New Zealand" },
  { flag: "🇲🇾", name: "Malaysia" },
];

const whatWeAssess = [
  {
    icon: GraduationCap,
    title: "Academic Background",
    desc: "We review your SSC, HSC, and undergraduate transcripts, CGPA, grading systems, and subject combinations to map your eligibility across institutions and countries.",
  },
  {
    icon: Languages,
    title: "English Proficiency",
    desc: "Your IELTS, TOEFL, or PTE scores are evaluated against the requirements of each target country and program — along with a timeline for improvement if needed.",
  },
  {
    icon: Briefcase,
    title: "Work Experience",
    desc: "Relevant professional, research, and internship experience is assessed for its impact on your admission chances and scholarship eligibility.",
  },
  {
    icon: Award,
    title: "Extracurricular Achievements",
    desc: "Leadership roles, community service, sports, and co-curricular awards are mapped to scholarship and program criteria that value well-rounded candidates.",
  },
  {
    icon: DollarSign,
    title: "Financial Capacity",
    desc: "We assess your budget and financial documentation to identify affordable destinations, funding structures, and scholarship opportunities that match your situation.",
  },
  {
    icon: Target,
    title: "Career Goals & Intent",
    desc: "Your future goals and motivations are aligned with programs and countries where your profile will be most competitive and your outcome most impactful.",
  },
];

const outcomeAreas = [
  {
    icon: Map,
    type: "Country Suitability",
    color: "#005B8F",
    desc: "Which countries are the best match for your profile, budget, and career aspirations — including visa success likelihood and post-study work rights.",
  },
  {
    icon: BookOpen,
    type: "Program Recommendations",
    color: "#4A83F3",
    desc: "Specific programs and degrees aligned with your academic background and career direction — at reach, match, and safety institutions.",
  },
  {
    icon: TrendingUp,
    type: "Admission Probability",
    color: "#16a34a",
    desc: "An honest probability assessment for each shortlisted university — so your final list is strategically balanced and maximises your offers.",
  },
  {
    icon: Award,
    type: "Scholarship Potential",
    color: "#9333ea",
    desc: "Scholarships you are realistically eligible for — government, university-funded, and need-based — ranked by value and competition level.",
  },
  {
    icon: BarChart2,
    type: "Profile Gap Analysis",
    color: "#d97706",
    desc: "Areas where your profile falls short of target requirements — and a concrete action plan to address each gap before applying.",
  },
  {
    icon: Lightbulb,
    type: "Strategic Action Plan",
    color: "#dc2626",
    desc: "A personalised step-by-step roadmap: what to do, in what order, and by when — so your application is submitted at peak competitiveness.",
  },
];

const process = [
  {
    step: 1,
    icon: MessageCircle,
    title: "Book Your Free Session",
    desc: "Schedule a no-obligation consultation with one of our senior counselors. Share your academic history, goals, and preferred destinations before the meeting.",
  },
  {
    step: 2,
    icon: ClipboardList,
    title: "Submit Your Documents",
    desc: "Provide your transcripts, test scores, CV, and any relevant certificates. Our team reviews everything before your evaluation meeting.",
  },
  {
    step: 3,
    icon: Search,
    title: "In-Depth Profile Review",
    desc: "Your counselor conducts a structured assessment covering academics, language scores, finances, extracurriculars, and career alignment.",
  },
  {
    step: 4,
    icon: BarChart2,
    title: "Evaluation Report Delivered",
    desc: "You receive a written profile evaluation report — covering strengths, gaps, country suitability, program shortlist, and scholarship prospects.",
  },
  {
    step: 5,
    icon: FileText,
    title: "Action Plan & Counseling",
    desc: "We walk you through your report, answer every question, and map out the exact steps to strengthen your profile and begin applications.",
  },
  {
    step: 6,
    icon: PartyPopper,
    title: "Start Your Journey",
    desc: "With a clear picture of your options and a strategy in hand, you move into the application phase with confidence and direction.",
  },
];

const documentsToSubmit = [
  "SSC and HSC transcripts and certificates",
  "Undergraduate / postgraduate transcripts (if applicable)",
  "English proficiency test scores (IELTS / TOEFL / PTE)",
  "Standardised test scores (GRE / GMAT / SAT — if taken)",
  "Curriculum Vitae (CV or Résumé)",
  "Work or internship experience certificates",
  "Extracurricular or achievement certificates",
  "Passport (valid copy)",
  "Financial documents (bank statement overview)",
  "Personal statement or SOP draft (if available)",
];

const strengthIndicators = [
  "CGPA of 3.5 or above on a 4.0 scale",
  "IELTS band 6.5 or above (or equivalent)",
  "Relevant work or research experience",
  "Leadership roles or community involvement",
  "Strong statement of purpose aligned with goals",
  "Adequate financial documentation for your target country",
  "Clear, realistic career and study direction",
  "Applying to a balanced mix of reach and safety universities",
];

const profileBands = [
  {
    band: "Strong Profile",
    color: "#16a34a",
    bg: "rgba(22,163,74,0.08)",
    border: "rgba(22,163,74,0.2)",
    desc: "Competitive for top-ranked institutions, merit scholarships, and SDS fast-track programs. Multiple strong offers expected.",
    indicators: "CGPA 3.5+, IELTS 7.0+, relevant experience",
  },
  {
    band: "Good Profile",
    color: "#005B8F",
    bg: "rgba(0,91,143,0.07)",
    border: "rgba(0,91,143,0.18)",
    desc: "Eligible for a wide range of quality institutions and some partial scholarships. Strong results with the right strategy.",
    indicators: "CGPA 3.0–3.5, IELTS 6.5, some experience",
  },
  {
    band: "Developing Profile",
    color: "#d97706",
    bg: "rgba(217,119,6,0.07)",
    border: "rgba(217,119,6,0.2)",
    desc: "Requires targeted improvements before applying. Our gap analysis identifies exactly what to address and in what timeframe.",
    indicators: "CGPA below 3.0, IELTS below 6.5, limited experience",
  },
];

const faqs = [
  {
    q: "What is a profile evaluation and why do I need one?",
    a: "A profile evaluation is a structured, expert review of your academic, financial, and personal profile against the requirements of universities and countries you want to apply to. It identifies where you stand, what your realistic options are, and what you need to do to maximise your chances — before you invest time and money in applications.",
  },
  {
    q: "Is the profile evaluation session free?",
    a: "Yes. Your initial profile evaluation consultation with Head Edu Care is completely free of charge and carries no obligation. We believe every student deserves honest guidance before committing to any service.",
  },
  {
    q: "How long does the evaluation take?",
    a: "The consultation meeting typically takes 60–90 minutes. The written evaluation report is delivered within 2–3 working days of the session.",
  },
  {
    q: "What if my profile has gaps or weaknesses?",
    a: "A gap analysis is one of the most valuable outputs of your evaluation. We identify specific weaknesses — such as a low IELTS score, limited work experience, or missing documents — and provide a concrete action plan to address each one within a realistic timeline.",
  },
  {
    q: "Can I get a profile evaluation before my IELTS test?",
    a: "Yes. We can conduct a preliminary evaluation before your English test results are available. This helps you understand your overall academic standing and explore target countries while you prepare for your test.",
  },
  {
    q: "Will I receive a written report after the evaluation?",
    a: "Yes. Every student receives a written profile evaluation report covering academic strengths and gaps, recommended countries and programs, scholarship potential, and a personalised action plan.",
  },
  {
    q: "Does Head Edu Care evaluate profiles for all study levels?",
    a: "Yes — we evaluate profiles for Foundation / Pathway programs, Undergraduate (Bachelor's), Postgraduate (Master's), PhD and research programs, and MBA programs across all major study destinations.",
  },
];

/* ─────────────── PAGE COMPONENT ─────────────── */

export default function ProfileEvaluation() {
  const containerRef = useReveal();

  return (
    <>
      <style>
        {BASE_STYLES +
          `
          .outcome-card {
            border-radius: 20px;
            overflow: hidden;
            border: 1px solid var(--srv-border);
            background: var(--srv-bg-card);
            transition: all .25s;
          }
          .outcome-card:hover {
            box-shadow: 0 12px 40px rgba(0,91,143,0.1);
            transform: translateY(-4px);
          }
          .outcome-card-header {
            padding: 20px 24px;
            display: flex;
            align-items: center;
            gap: 12px;
            border-bottom: 1px solid var(--srv-border);
          }
          .outcome-card-body {
            padding: 20px 24px;
          }
          .band-card {
            border-radius: 18px;
            padding: 28px 28px;
            border: 1px solid;
            transition: all .22s;
          }
          .band-card:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 28px rgba(0,0,0,0.07);
          }
          .band-tag {
            display: inline-flex;
            align-items: center;
            gap: 7px;
            padding: 5px 14px;
            border-radius: 40px;
            font-size: 12px;
            font-weight: 700;
            font-family: Lexend, sans-serif;
            margin-bottom: 14px;
          }
          .band-dot {
            width: 7px;
            height: 7px;
            border-radius: 50%;
            flex-shrink: 0;
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
          title="Know Exactly Where You Stand with a"
          highlight="Free Profile Evaluation"
          desc="Before you apply anywhere, get a complete expert assessment of your academic profile, finances, and career goals — so every application decision is informed, strategic, and confident."
          blobTop={-60}
          blobRight={-80}
        />

        {/* ── WHAT WE ASSESS ── */}
        <section className="srv-section">
          <div className="srv-container">
            <SectionHeader
              label="What We Review"
              title="Every Dimension of Your"
              highlight="Academic Profile"
              body="Our counselors look beyond grades. We evaluate the complete picture of who you are as an applicant — so the advice you receive is accurate, honest, and actionable."
            />
            <div
              className="grid-3"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3,1fr)",
                gap: 20,
              }}
            >
              {whatWeAssess.map((s, i) => (
                <IconCard key={i} icon={s.icon} title={s.title} desc={s.desc} />
              ))}
            </div>
          </div>
        </section>

        <div className="srv-divider" />

        {/* ── PROFILE BANDS ── */}
        <section className="srv-section-alt">
          <div className="srv-container">
            <SectionHeader
              label="Profile Strength Bands"
              title="Where Does Your Profile"
              highlight="Currently Stand?"
              body="Every student falls into one of three broad profile bands. Knowing yours is the starting point for building a realistic and effective application strategy."
            />
            <div
              className="grid-3"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3,1fr)",
                gap: 20,
              }}
            >
              {profileBands.map((b, i) => (
                <div
                  key={i}
                  className="band-card srv-reveal"
                  style={{ background: b.bg, borderColor: b.border }}
                >
                  <div
                    className="band-tag"
                    style={{
                      background: b.bg,
                      color: b.color,
                      border: `1px solid ${b.border}`,
                    }}
                  >
                    <span
                      className="band-dot"
                      style={{ background: b.color }}
                    />
                    {b.band}
                  </div>
                  <p
                    style={{
                      fontSize: 14,
                      color: "var(--srv-text-body)",
                      lineHeight: 1.75,
                      fontFamily: "Lexend,sans-serif",
                      fontWeight: 300,
                      marginBottom: 16,
                    }}
                  >
                    {b.desc}
                  </p>
                  <p
                    style={{
                      fontSize: 12,
                      fontWeight: 600,
                      color: b.color,
                      fontFamily: "Lexend,sans-serif",
                      opacity: 0.85,
                    }}
                  >
                    Typical indicators: {b.indicators}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHAT YOU GET ── */}
        <section className="srv-section">
          <div className="srv-container">
            <SectionHeader
              label="Evaluation Outcomes"
              title="What Your Evaluation"
              highlight="Report Covers"
              body="After your session, you receive a written report across six key areas — each with specific findings and recommended next steps personalised to your profile."
            />
            <div
              className="grid-3"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3,1fr)",
                gap: 20,
              }}
            >
              {outcomeAreas.map((o, i) => {
                const Icon = o.icon;
                return (
                  <div key={i} className="outcome-card srv-reveal">
                    <div
                      className="outcome-card-header"
                      style={{ background: `${o.color}12` }}
                    >
                      <div
                        style={{
                          width: 40,
                          height: 40,
                          borderRadius: 10,
                          background: `${o.color}20`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        <Icon size={20} color={o.color} />
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
                        {o.type}
                      </h4>
                    </div>
                    <div className="outcome-card-body">
                      <p className="srv-body" style={{ fontSize: 13 }}>
                        {o.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <div className="srv-divider" />

        {/* ── OUR PROCESS ── */}
        <section className="srv-section-alt">
          <div className="srv-container">
            <SectionHeader
              label="How It Works"
              title="Our 6-Step Profile"
              highlight="Evaluation Process"
              body="A structured, transparent process that takes you from submitting your documents to walking away with a clear, personalised strategy."
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

        {/* ── DOCUMENTS + STRENGTH INDICATORS ── */}
        <section className="srv-section">
          <div className="srv-container">
            <div
              className="grid-2"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 32,
              }}
            >
              <InfoBox
                icon={FileText}
                title="Documents to Submit for Evaluation"
                variant="blue"
              >
                <CheckList items={documentsToSubmit} />
              </InfoBox>
              <InfoBox
                icon={CheckCircle}
                title="Strong Profile Indicators"
                variant="green"
              >
                <CheckList items={strengthIndicators} />
              </InfoBox>
            </div>
          </div>
        </section>

        <div className="srv-divider" />

        {/* ── DESTINATIONS ── */}
        <section className="srv-section-alt">
          <div className="srv-container">
            <SectionHeader
              label="Destinations"
              title="Countries We Evaluate"
              highlight="Profiles For"
              body="Our counselors have in-depth knowledge of admission requirements, English score thresholds, visa criteria, and scholarship landscapes across all major study destinations."
              centered
            />
            <CountryTags countries={destinations} />
          </div>
        </section>

        {/* ── STATS ── */}
        <StatsStrip
          stats={[
            { value: "15K+", label: "Profiles Evaluated" },
            { value: "500+", label: "Partner Universities" },
            { value: "98%", label: "Visa Success Rate" },
            { value: "12+", label: "Years Experience" },
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
          title="Get Your Free Profile Evaluation Today"
          desc="Book a session with our expert counselors and walk away with a clear picture of your study abroad options, scholarship prospects, and the exact steps to get there."
        />
      </div>
    </>
  );
}
