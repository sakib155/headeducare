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
  Award,
  Search,
  FileText,
  PenTool,
  Clock,
  Users,
  Globe,
  BookOpen,
  GraduationCap,
  Star,
  CheckCircle,
  AlertCircle,
  TrendingUp,
  Briefcase,
  Lightbulb,
  Target,
  MessageCircle,
  ShieldCheck,
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
  { flag: "🇸🇪", name: "Sweden" },
  { flag: "🇳🇱", name: "Netherlands" },
  { flag: "🇰🇷", name: "South Korea" },
];

const services = [
  {
    icon: Search,
    title: "Scholarship Discovery",
    desc: "We scan hundreds of databases to find merit-based, need-based, and country-specific scholarships that match your profile and academic goals.",
  },
  {
    icon: Target,
    title: "Eligibility Assessment",
    desc: "Before you apply, we verify your GPA, test scores, and extracurriculars against strict criteria to ensure you are a competitive candidate.",
  },
  {
    icon: PenTool,
    title: "Essay & Proposal Writing",
    desc: "Scholarship essays require a different tone than admission SOPs. We help you craft compelling narratives that highlight leadership and impact.",
  },
  {
    icon: FileText,
    title: "Document Preparation",
    desc: "From financial affidavits to recommendation letters, we ensure every supporting document meets the specific formatting requirements of the funder.",
  },
  {
    icon: Clock,
    title: "Deadline Management",
    desc: "Scholarship deadlines are often months before course start dates. We track every date and ensure your application is submitted well in advance.",
  },
  {
    icon: Award,
    title: "Interview Coaching",
    desc: "Many prestigious scholarships (like Chevening or Fulbright) require interviews. We conduct mock sessions to prepare you for tough questions.",
  },
];

const scholarshipTypes = [
  {
    icon: Star,
    title: "Merit-Based Scholarships",
    desc: "Awarded for academic excellence, high GPAs, or outstanding test scores. These are competitive but cover significant portions of tuition.",
    color: "#005B8F",
  },
  {
    icon: Users,
    title: "Need-Based Grants",
    desc: "Designed for students with financial constraints. Requires detailed proof of income and assets to demonstrate genuine financial need.",
    color: "#4A83F3",
  },
  {
    icon: Globe,
    title: "Government Scholarships",
    desc: "Fully funded awards by foreign governments (e.g., Chevening, DAAD) to attract international talent. Often include airfare and living stipends.",
    color: "#16a34a",
  },
  {
    icon: GraduationCap,
    title: "University-Specific Awards",
    desc: "Most universities offer their own internal scholarships for international students, ranging from 10% tuition waivers to full rides.",
    color: "#9333ea",
  },
  {
    icon: Briefcase,
    title: "Corporate & Private Grants",
    desc: "Funded by private organizations, NGOs, or corporations. Often tied to specific fields of study like engineering, medicine, or development.",
    color: "#d97706",
  },
  {
    icon: BookOpen,
    title: "Research Fellowships",
    desc: "For PhD and Masters by Research students. Covers research costs, lab fees, and provides a monthly stipend in exchange for academic output.",
    color: "#dc2626",
  },
];

const process = [
  {
    step: 1,
    icon: MessageCircle,
    title: "Profile Evaluation",
    desc: "We review your academic history, extracurriculars, and financial background to identify your strongest selling points for funders.",
  },
  {
    step: 2,
    icon: Search,
    title: "Shortlisting Opportunities",
    desc: "We create a curated list of 5-10 scholarships you are eligible for, categorized by deadline and probability of success.",
  },
  {
    step: 3,
    icon: Target,
    title: "Strategy Planning",
    desc: "We prioritize applications based on effort vs. reward, ensuring you focus on high-value opportunities first.",
  },
  {
    step: 4,
    icon: FileText,
    title: "Drafting & Review",
    desc: "Our team helps draft personal statements and research proposals, refining them through multiple rounds of feedback.",
  },
  {
    step: 5,
    icon: ShieldCheck,
    title: "Final Submission",
    desc: "We double-check all attachments, forms, and references before submitting your application to the scholarship portal.",
  },
  {
    step: 6,
    icon: Award,
    title: "Award Management",
    desc: "If successful, we guide you on accepting the award, understanding conditions, and maintaining eligibility for renewal.",
  },
];

const eligibilityItems = [
  "Strong academic record (usually minimum 3.0/4.0 GPA)",
  "Valid English proficiency score (IELTS/TOEFL)",
  "Clear leadership potential or community involvement",
  "Specific career goals aligned with the scholarship mission",
  "Admission offer or application to a partner university",
  "Age limits (some scholarships are for under-30s only)",
  "No prior criminal record or visa violations",
  "Willingness to return home after studies (for govt. scholarships)",
  "Financial need documentation (for need-based grants)",
  "Specific nationality requirements (country-specific awards)",
];

const documentItems = [
  "Academic transcripts and certificates (attested)",
  "Proof of English proficiency (IELTS/TOEFL/PTE)",
  "Updated CV/Resume highlighting achievements",
  "Statement of Purpose (SOP) or Motivation Letter",
  "2-3 Letters of Recommendation (Academic/Professional)",
  "Proof of Income (Tax returns, salary slips, bank statements)",
  "Portfolio or Work Samples (for creative/technical fields)",
  "Research Proposal (for PhD/Research masters)",
  "Passport Copy (valid for at least 18 months)",
  "Medical Certificate (if required by specific funder)",
];

const faqs = [
  {
    q: "Can I apply for multiple scholarships at once?",
    a: "Yes, and we encourage it. However, you must tailor each application to the specific funder's values. Never copy-paste the same essay for different scholarships.",
  },
  {
    q: "Do scholarships cover living expenses?",
    a: "It depends. 'Full Ride' scholarships cover tuition, accommodation, and living costs. Partial scholarships may only cover 20-50% of tuition. We clarify this during shortlisting.",
  },
  {
    q: "Is it possible to get a scholarship with average grades?",
    a: "Yes. While merit scholarships require high grades, need-based grants and specific community-leadership awards look at your holistic profile, including volunteer work and personal story.",
  },
  {
    q: "When should I start applying for scholarships?",
    a: "Ideally 12-18 months before your course starts. Many government scholarships (like Chevening or Fulbright) close almost a year in advance.",
  },
  {
    q: "Do I need an admission offer first?",
    a: "Not always. Some scholarships allow you to apply concurrently with your university application. Others require an unconditional offer. We guide you on the sequence.",
  },
  {
    q: "What happens if my scholarship is rejected?",
    a: "Rejection is common due to high competition. We analyze feedback, refine your profile, and help you apply for alternative funding or university-specific discounts.",
  },
];

/* ─────────────── PAGE COMPONENT ─────────────── */

export default function ScholarshipGuide() {
  const containerRef = useReveal();

  return (
    <>
      <style>
        {BASE_STYLES +
          `
          .schol-type-card {
            border-radius: 20px;
            overflow: hidden;
            border: 1px solid var(--srv-border);
            background: var(--srv-bg-card);
            transition: all .25s;
          }
          .schol-type-card:hover {
            box-shadow: 0 12px 40px rgba(0,91,143,0.1);
            transform: translateY(-4px);
          }
          .schol-type-header {
            padding: 20px 24px;
            display: flex;
            align-items: center;
            gap: 12px;
            border-bottom: 1px solid var(--srv-border);
          }
          .schol-type-body {
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
          title="Fund Your Dreams with"
          highlight="Global Scholarships"
          desc="Studying abroad is an investment. Head Edu Care helps you secure merit-based awards, government grants, and university discounts to reduce your financial burden and maximize your value."
          blobTop={-60}
          blobRight={-80}
        />

        {/* ── SERVICES GRID ── */}
        <section className="srv-section">
          <div className="srv-container">
            <SectionHeader
              label="Our Support"
              title="End-to-End Scholarship"
              highlight="Application Support"
              body="From finding hidden opportunities to writing winning essays, we manage the entire funding journey for you."
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

        {/* ── SCHOLARSHIP TYPES ── */}
        <section className="srv-section-alt">
          <div className="srv-container">
            <SectionHeader
              label="Funding Options"
              title="Types of Scholarships"
              highlight="We Help You Secure"
              body="Understanding the different categories of funding helps you target the right opportunities for your profile."
            />
            <div
              className="grid-3"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3,1fr)",
                gap: 20,
              }}
            >
              {scholarshipTypes.map((s, i) => {
                const Icon = s.icon;
                return (
                  <div key={i} className="schol-type-card srv-reveal">
                    <div
                      className="schol-type-header"
                      style={{ background: `${s.color}10` }}
                    >
                      <div
                        style={{
                          width: 40,
                          height: 40,
                          borderRadius: 10,
                          background: `${s.color}20`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        <Icon size={20} color={s.color} />
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
                        {s.title}
                      </h4>
                    </div>
                    <div className="schol-type-body">
                      <p className="srv-body" style={{ fontSize: 13 }}>
                        {s.desc}
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
              title="Our 6-Step Scholarship"
              highlight="Success Strategy"
              body="A structured approach to maximizing your chances of securing funding in a highly competitive landscape."
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

        {/* ── INFO BOXES: Eligibility + Documents ── */}
        <section className="srv-section-alt">
          <div className="srv-container">
            <SectionHeader
              label="Get Started"
              title="Eligibility & Documentation"
              highlight="What You Need"
              body="Being prepared with the right documents and meeting basic criteria speeds up the application process significantly."
              centered
            />
            <div
              className="grid-2"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 32,
                marginTop: 48,
              }}
            >
              <InfoBox
                icon={Users}
                title="Eligibility Checklist"
                variant="blue"
              >
                <CheckList items={eligibilityItems} />
              </InfoBox>
              <InfoBox
                icon={FileText}
                title="Required Documents"
                variant="green"
              >
                <CheckList items={documentItems} />
              </InfoBox>
            </div>
          </div>
        </section>

        {/* ── DESTINATIONS ── */}
        <section className="srv-section">
          <div className="srv-container">
            <SectionHeader
              label="Global Reach"
              title="Scholarships Available In"
              highlight="12+ Countries"
              body="From US Ivy League grants to European government waivers, we have information on funding options worldwide."
              centered
            />
            <CountryTags countries={destinations} />
          </div>
        </section>

        {/* ── STATS ── */}
        <StatsStrip
          stats={[
            { value: "$2M+", label: "Scholarships Secured" },
            { value: "500+", label: "Funding Sources" },
            { value: "15K+", label: "Students Guided" },
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
          title="Don't Let Finances Stop You"
          desc="Thousands of scholarships go unclaimed every year. Let us help you find and win the funding you deserve."
          label="Book a Free Consultation"
          link="/freeconsulation"
        />
      </div>
    </>
  );
}
