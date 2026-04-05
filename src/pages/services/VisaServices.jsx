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
  Flag,
  Award,
  Globe,
  Handshake,
  RefreshCcw,
  ClipboardList,
  Search,
  Compass,
  Pencil,
  Send,
  PartyPopper,
  Lightbulb,
} from "lucide-react";

const destinations = [
  { flag: "🇦🇺", name: "Australia" },
  { flag: "🇬🇧", name: "United Kingdom" },
  { flag: "🇺🇸", name: "USA" },
  { flag: "🇨🇦", name: "Canada" },
  { flag: "🇮🇪", name: "Ireland" },
  { flag: "🇳🇿", name: "New Zealand" },
  { flag: "🇲🇾", name: "Malaysia" },
  { flag: "🇯🇵", name: "Japan" },
  { flag: "🇪🇺", name: "Europe" },
  { flag: "🇦🇪", name: "Dubai (UAE)" },
  { flag: "🇮🇩", name: "Indonesia" },
];

const visaTypes = [
  {
    icon: Flag,
    country: "Australia",
    visas: ["Student visa (Subclass 500)", "Dependent/Partner visa"],
  },
  {
    icon: Flag,
    country: "United Kingdom",
    visas: [
      "Student Visa (Tier 4/Student Route)",
      "Child Student Visa",
      "Graduate Route Visa",
    ],
  },
  {
    icon: Flag,
    country: "USA",
    visas: [
      "F-1 Student Visa",
      "J-1 Exchange Visitor",
      "M-1 Vocational Student",
      "SEVIS Registration",
    ],
  },
  {
    icon: Flag,
    country: "Canada",
    visas: ["SDS Student Visa", "Non-SDS Student Permit"],
  },
  {
    icon: Flag,
    country: "Ireland",
    visas: ["Stamp 2 Student Visa"],
  },
  {
    icon: Flag,
    country: "New Zealand",
    visas: ["Fee Paying Student Visa", "Pathway Student Visa"],
  },
  {
    icon: Flag,
    country: "Malaysia / Japan / Dubai / Europe / Indonesia",
    visas: ["Country-specific study permits", "Residence applications"],
  },
];
const whyChoose = [
  {
    icon: Award,
    title: "Decades of Experience",
    desc: "Thousands of successful student visas processed — consistently high approval rates across all major study destinations.",
  },
  {
    icon: Globe,
    title: "Country-Specific Experts",
    desc: "Each destination managed by a dedicated specialist who tracks the latest embassy policy changes in real time.",
  },
  {
    icon: Handshake,
    title: "Ethical & Transparent",
    desc: "Zero false promises or shortcuts. Clear, honest guidance at every step with realistic expectations from day one.",
  },
  {
    icon: RefreshCcw,
    title: "End-to-End Support",
    desc: "From initial counseling through to landing in your study country — we are with you at every stage of the journey.",
  },
  {
    icon: ClipboardList,
    title: "Tailored Document Checklist",
    desc: "Every checklist is customised based on your specific admission, program, and family finance situation.",
  },
  {
    icon: Search,
    title: "Pre-Submission Review",
    desc: "Every document is proofread, corrected, and finalized by our team before submission — nothing goes in unchecked.",
  },
];

const process = [
  {
    step: 1,
    icon: Compass,
    title: "Free Eligibility Assessment",
    desc: "Initial visa pathway planning session — we evaluate your profile, admission offer, and financial documentation to map the best route.",
  },
  {
    step: 2,
    icon: ClipboardList,
    title: "Tailored Document Checklist",
    desc: "Customised checklist based on your specific admission letter, family finances, and the requirements of your destination country.",
  },
  {
    step: 3,
    icon: Pencil,
    title: "Document Preparation & Review",
    desc: "Our experts proofread, correct, and finalize every document before submission — all forms checked for accuracy and compliance.",
  },
  {
    step: 4,
    icon: Send,
    title: "Application Submission",
    desc: "Visa application filed on your behalf with all supporting documents. Appointment scheduling and interview coordination handled by our team.",
  },
  {
    step: 5,
    icon: PartyPopper,
    title: "Decision & Post-Approval Briefing",
    desc: "Once approved, we provide a comprehensive pre-departure briefing covering health checks, biometrics, and settling-in logistics.",
  },
];
const interviewCountries = [
  {
    flag: "🇺🇸",
    country: "USA",
    detail: "F-1, J-1, and M-1 require embassy interview",
  },
  {
    flag: "🇨🇦",
    country: "Canada",
    detail: "Interview may be requested in select cases",
  },
  {
    flag: "🇬🇧",
    country: "UK",
    detail: "Credibility interview for some applicants",
  },
  {
    flag: "🇦🇺",
    country: "Australia",
    detail: "GTE interview required in certain cases",
  },
];

const faqs = [
  {
    q: "What is the visa success rate for Head Edu Care students?",
    a: "We maintain a high visa approval rate due to our thorough and ethical processing. However, final decisions always remain at the discretion of the relevant embassy or immigration authority.",
  },
  {
    q: "Can you help if my visa application is refused?",
    a: "Yes. We offer visa refusal review services and can help prepare a stronger re-application addressing the specific shortcomings cited in the refusal letter.",
  },
  {
    q: "Do you assist with dependent visas for family members?",
    a: "Yes. We provide guidance on spouse and child dependent visas for eligible destinations including Australia, Canada, New Zealand, USA, UK, and Ireland.",
  },
  {
    q: "Which countries require a visa interview?",
    a: "The USA (F-1/J-1/M-1), Canada (for some cases), UK (Credibility Interview in certain situations), and Australia (GTE interviews where required) all may involve an interview component.",
  },
  {
    q: "Do you assist with medical checks, police clearance, and biometrics?",
    a: "Absolutely. We guide you through all health examinations, police clearance requirements, and biometric appointment scheduling for every country we service.",
  },
  {
    q: "What is the difference between SDS and Non-SDS for Canada?",
    a: "The Student Direct Stream (SDS) is a faster processing program for students from eligible countries including Bangladesh, requiring an upfront GIC and an IELTS score of 6.0 or above. Non-SDS is the standard stream for those who don't qualify or prefer not to use SDS.",
  },
];

export default function VisaServices() {
  const containerRef = useReveal();

  return (
    <>
      <style>
        {BASE_STYLES +
          `
        .visa-country-card { background:#fff; border:1px solid rgba(0,0,0,0.07); border-radius:16px; padding:20px 22px; transition:all .22s; }
        .visa-country-card:hover { border-color:rgba(0,91,143,0.25); box-shadow:0 4px 20px rgba(0,91,143,0.08); transform:translateY(-2px); }
        .interview-row { display:grid; grid-template-columns:auto 1fr 2fr; gap:16px; align-items:center; padding:16px 20px; border-radius:12px; background:#f6f6f8; border:1px solid rgba(0,0,0,0.05); margin-bottom:8px; }
        @media(max-width:768px){ .grid-2{ grid-template-columns:1fr !important; } .grid-3{ grid-template-columns:1fr 1fr !important; } .interview-row{ grid-template-columns:auto 1fr; } .interview-row span:last-child{ grid-column:1/-1; } }
      `}
      </style>
      <div className="srv-page" ref={containerRef}>
        <PageHero
          badge="Student Services"
          title="Hassle-Free Visa Services"
          highlight="for Your Study Abroad Journey"
          desc="Expert guidance and seamless support for your student visa application — from eligibility assessment to post-approval briefing. Trusted by thousands of Bangladeshi students."
          blobTop={-80}
          blobRight={-60}
        />

        {/* Why Choose */}
        <section className="srv-section">
          <div className="srv-container">
            <SectionHeader
              label="Why Head Edu Care"
              title="Why Choose Us for"
              highlight="Visa Services?"
              body="Head Edu Care Bangladesh provides comprehensive, expert visa services for students planning to study in the world's top destinations."
            />
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3,1fr)",
                gap: 20,
              }}
            >
              {whyChoose.map((w, i) => (
                <IconCard key={i} icon={w.icon} title={w.title} desc={w.desc} />
              ))}
            </div>
          </div>
        </section>

        <div className="srv-divider" />

        {/* Destinations */}
        <section className="srv-section-alt">
          <div className="srv-container">
            <SectionHeader
              label="Destinations"
              title="Countries We Provide"
              highlight="Visa Support For"
              body="We offer specialised student visa assistance for all major study abroad destinations."
              centered
            />
            <CountryTags countries={destinations} />
          </div>
        </section>

        {/* Visa types by country */}
        <section className="srv-section">
          <div className="srv-container">
            <SectionHeader
              label="Visa Types"
              title="Supported Visa Categories"
              highlight="by Country"
              body="Each destination has unique visa categories. Our specialists know every requirement, every update, and every nuance."
            />
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2,1fr)",
                gap: 16,
              }}
            >
              {visaTypes.map((v, i) => (
                <div key={i} className="visa-country-card srv-reveal">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                      marginBottom: 14,
                    }}
                  >
                    {v.icon && <v.icon size={24} color="#005B8F" />}
                    <h4
                      style={{
                        fontWeight: 700,
                        fontSize: 15,
                        color: "#0d121b",
                        fontFamily: "Lexend,sans-serif",
                      }}
                    >
                      {v.country}
                    </h4>
                  </div>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {v.visas.map((visa, j) => (
                      <span
                        key={j}
                        style={{
                          padding: "5px 12px",
                          background: "rgba(0,91,143,0.07)",
                          borderRadius: 8,
                          fontSize: 12,
                          color: "#005B8F",
                          fontWeight: 600,
                          fontFamily: "Lexend,sans-serif",
                        }}
                      >
                        {visa}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="srv-divider" />

        {/* How we work */}
        <section className="srv-section-alt">
          <div className="srv-container">
            <SectionHeader
              label="Our Process"
              title="How Our Visa Experts"
              highlight="Work With You"
              body="A structured, thorough 5-step process that maximises approval chances and minimises stress at every stage."
            />
            <div
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
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 20,
                marginTop: 20,
                maxWidth: 780,
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

        {/* Interview countries */}
        <section className="srv-section">
          <div className="srv-container" style={{ maxWidth: 860 }}>
            <SectionHeader
              label="Interviews"
              title="Countries That May Require a"
              highlight="Visa Interview"
              body="Our team fully prepares you for embassy interviews with mock sessions, coaching, and documentation review."
            />
            {interviewCountries.map((c, i) => (
              <div key={i} className="interview-row srv-reveal">
                <span style={{ fontSize: 28 }}>{c.flag}</span>
                <span
                  style={{
                    fontWeight: 700,
                    fontSize: 15,
                    color: "#0d121b",
                    fontFamily: "Lexend,sans-serif",
                  }}
                >
                  {c.country}
                </span>
                <span
                  style={{
                    fontSize: 13,
                    color: "#6b7280",
                    fontFamily: "Lexend,sans-serif",
                    fontWeight: 300,
                  }}
                >
                  {c.detail}
                </span>
              </div>
            ))}
            <div className="srv-reveal" style={{ marginTop: 24 }}>
              <InfoBox
                icon={Lightbulb}
                title="We Also Assist With"
                variant="blue"
              >
                <CheckList
                  items={[
                    "Medical / health examination guidance",
                    "Police clearance certificate requirements",
                    "Biometrics appointment scheduling",
                    "SEVIS fee registration (USA)",
                    "Genuine Temporary Entrant (GTE) statements (Australia)",
                  ]}
                  columns={2}
                />
              </InfoBox>
            </div>
          </div>
        </section>

        {/* Stats */}
        <StatsStrip
          stats={[
            { value: "11", label: "Destination Countries" },
            { value: "98%", label: "Visa Success Rate" },
            { value: "15K+", label: "Students Assisted" },
            { value: "12+", label: "Years Experience" },
          ]}
        />

        {/* FAQ */}
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

        <CtaBanner
          title="Our Experts Are Waiting to Help You"
          desc="Take the first step towards your dream study destination — let our visa specialists handle the complexity."
        />
      </div>
    </>
  );
}
