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
  FileCheck,
  ShieldCheck,
  Users,
  Calendar,
  Globe,
  AlertCircle,
  CheckCircle,
  Briefcase,
  CreditCard,
  MessageSquare,
  Plane,
  Stethoscope,
  Fingerprint,
  Search,
  Target,
  Clock,
  Award,
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

const services = [
  {
    icon: FileCheck,
    title: "Document Verification",
    desc: "We meticulously review every academic and financial document to ensure it meets the specific format and validity requirements of the embassy.",
  },
  {
    icon: ShieldCheck,
    title: "Financial Proofing",
    desc: "Guidance on bank statements, sponsorship letters, and source of funds explanations to satisfy strict visa officer scrutiny.",
  },
  {
    icon: MessageSquare,
    title: "Interview Preparation",
    desc: "Mock visa interviews with country-specific experts to prepare you for common questions and credibility checks (e.g., US F1, UK Credibility).",
  },
  {
    icon: Calendar,
    title: "Appointment Scheduling",
    desc: "We handle the booking of biometric appointments, VFS submissions, and embassy interviews to ensure you get the earliest available slots.",
  },
  {
    icon: Globe,
    title: "Form Filling Assistance",
    desc: "Complex visa application forms (like DS-160 for USA or IMMI for Australia) are filled out by experts to avoid costly errors.",
  },
  {
    icon: Plane,
    title: "Pre-Departure Briefing",
    desc: "Once your visa is approved, we guide you on health checks, accommodation booking, and essential pre-departure logistics.",
  },
];

const visaSteps = [
  {
    icon: Search,
    title: "Eligibility Assessment",
    desc: "We evaluate your academic profile, financial background, and gap years to determine your visa success probability before starting.",
    color: "#005B8F",
  },
  {
    icon: Target,
    title: "Document Collection",
    desc: "You provide raw documents; we create a customized checklist based on your specific country and university requirements.",
    color: "#4A83F3",
  },
  {
    icon: Briefcase,
    title: "Financial Structuring",
    desc: "We help organize bank statements, loans, and sponsor papers to show a clear, legitimate source of funds.",
    color: "#16a34a",
  },
  {
    icon: FileCheck,
    title: "Application Submission",
    desc: "Our team submits your visa application, pays fees, and schedules biometrics/interviews on your behalf.",
    color: "#9333ea",
  },
  {
    icon: MessageSquare,
    title: "Interview Coaching",
    desc: "Intensive mock sessions to build your confidence and ensure you can articulate your study goals clearly.",
    color: "#d97706",
  },
  {
    icon: Award,
    title: "Visa Grant & Travel",
    desc: "We verify your visa grant letter, guide you on ticket booking, and provide a comprehensive pre-departure briefing.",
    color: "#dc2626",
  },
];

const process = [
  {
    step: 1,
    icon: Search,
    title: "Profile Evaluation",
    desc: "We assess your academic and financial background to identify potential red flags and create a strategy to address them.",
  },
  {
    step: 2,
    icon: FileCheck,
    title: "Document Preparation",
    desc: "Our team reviews and formats all academic transcripts, bank statements, and sponsorship letters for compliance.",
  },
  {
    step: 3,
    icon: Briefcase,
    title: "Form Filling & Submission",
    desc: "We complete complex visa forms accurately and submit your application to the relevant embassy or VFS center.",
  },
  {
    step: 4,
    icon: MessageSquare,
    title: "Interview Prep",
    desc: "If required, we conduct mock interviews to prepare you for credibility checks and common visa questions.",
  },
  {
    step: 5,
    icon: ShieldCheck,
    title: "Tracking & Follow-up",
    desc: "We monitor your application status daily and respond to any additional document requests from the embassy.",
  },
  {
    step: 6,
    icon: Plane,
    title: "Pre-Departure Support",
    desc: "Upon approval, we guide you through health checks, ticket booking, and settling-in logistics.",
  },
];

const eligibilityItems = [
  "Valid passport with at least 6 months validity",
  "Unconditional offer letter from a recognized university",
  "Proof of sufficient funds (tuition + living costs)",
  "Clean criminal record (Police Clearance Certificate)",
  "Medical fitness certificate (if required by country)",
  "Genuine intent to study and return home",
  "No prior visa refusals (or declared explanation)",
  "English proficiency score (IELTS/TOEFL/PTE)",
  "Academic transcripts and certificates",
  "Sponsorship documents (if self-funded is not possible)",
];

const documentItems = [
  "Passport copy (all pages)",
  "University Offer Letter (CoE/CAS/I-20)",
  "Academic Transcripts and Certificates",
  "IELTS/TOEFL/PTE Scorecard",
  "Bank Statements (last 3-6 months)",
  "Tax Returns (ITR) of Sponsor",
  "Affidavit of Support",
  "Loan Sanction Letter (if applicable)",
  "Passport-sized Photographs",
  "Visa Application Form (signed)",
];

const faqs = [
  {
    q: "How long does the visa process take?",
    a: "It varies by country. USA visas can be processed in a few weeks, while Australia and UK may take 4-8 weeks. We start the process immediately after your admission to ensure timely results.",
  },
  {
    q: "What if my visa gets rejected?",
    a: "We analyze the refusal letter to understand the reasons. If it's due to documentation, we can reapply. If it's a credibility issue, we provide counseling to strengthen your profile for the next attempt.",
  },
  {
    q: "Do I need to show the full tuition fee in the bank?",
    a: "Not always. Some countries like Canada (SDS) require a GIC deposit, while others like the USA require proof of liquid funds for the first year. We guide you on the specific financial requirements for your destination.",
  },
  {
    q: "Can I work part-time on a student visa?",
    a: "Most countries allow part-time work (e.g., 20 hours/week during semesters in Australia, UK, Canada). However, rules vary, and we brief you on these conditions during pre-departure.",
  },
  {
    q: "Do you help with dependent visas?",
    a: "Yes, for countries like Australia, UK, and Canada, we can assist in applying for dependent visas for spouses and children, provided you meet the financial and relationship criteria.",
  },
  {
    q: "Is the visa interview difficult?",
    a: "It can be challenging if you are unprepared. Our mock interviews simulate the actual experience, helping you answer confidently about your course, university, and future plans.",
  },
];

/* ─────────────── PAGE COMPONENT ─────────────── */

export default function VisaApplication() {
  const containerRef = useReveal();

  return (
    <>
      <style>
        {BASE_STYLES +
          `
          .visa-step-card {
            border-radius: 20px;
            overflow: hidden;
            border: 1px solid var(--srv-border);
            background: var(--srv-bg-card);
            transition: all .25s;
          }
          .visa-step-card:hover {
            box-shadow: 0 12px 40px rgba(0,91,143,0.1);
            transform: translateY(-4px);
          }
          .visa-step-header {
            padding: 20px 24px;
            display: flex;
            align-items: center;
            gap: 12px;
            border-bottom: 1px solid var(--srv-border);
          }
          .visa-step-body {
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
          title="Secure Your Student Visa with"
          highlight="Expert Guidance"
          desc="Navigating visa regulations can be complex. Head Edu Care provides end-to-end visa application support, ensuring your documents are perfect, your finances are structured, and you are prepared for any interview."
          blobTop={-60}
          blobRight={-80}
        />

        {/* ── SERVICES GRID ── */}
        <section className="srv-section">
          <div className="srv-container">
            <SectionHeader
              label="Our Expertise"
              title="Comprehensive Visa"
              highlight="Application Support"
              body="From document verification to pre-departure briefing, we handle every detail of your visa journey."
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

        {/* ── VISA STEPS ── */}
        <section className="srv-section-alt">
          <div className="srv-container">
            <SectionHeader
              label="Key Stages"
              title="The Visa Application"
              highlight="Lifecycle"
              body="Understanding the stages helps you prepare mentally and financially for each step of the process."
            />
            <div
              className="grid-3"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3,1fr)",
                gap: 20,
              }}
            >
              {visaSteps.map((s, i) => {
                const Icon = s.icon;
                return (
                  <div key={i} className="visa-step-card srv-reveal">
                    <div
                      className="visa-step-header"
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
                    <div className="visa-step-body">
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
              title="Our 6-Step Visa"
              highlight="Processing Method"
              body="A proven workflow that minimizes errors and maximizes your chances of approval."
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
              body="Being prepared with the right documents and meeting basic criteria speeds up the visa process significantly."
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
                icon={FileCheck}
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
              title="Visa Support For"
              highlight="Major Destinations"
              body="Our counselors are updated on the latest visa policies for all major study abroad countries."
              centered
            />
            <CountryTags countries={destinations} />
          </div>
        </section>

        {/* ── STATS ── */}
        <StatsStrip
          stats={[
            { value: "98%", label: "Visa Success Rate" },
            { value: "15K+", label: "Visas Processed" },
            { value: "12+", label: "Years Experience" },
            { value: "24/7", label: "Support Available" },
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
          title="Ready to Apply for Your Visa?"
          desc="Don't let paperwork stand between you and your dream university. Let our experts handle your visa application today."
          label="Book a Free Consultation"
          link="/freeconsulation"
        />
      </div>
    </>
  );
}
