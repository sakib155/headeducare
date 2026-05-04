// src/services/EducationLoanSupport.jsx
import React from "react";
import { Link } from "react-router-dom";
import {
  Banknote,
  FileText,
  Percent,
  ShieldCheck,
  Clock,
  MessageSquare,
  Calculator,
  Handshake,
  Landmark,
  AlertCircle,
  HelpCircle,
  CheckCircle,
} from "lucide-react";
import {
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
  useReveal,
  BASE_STYLES,
} from "./serviceComponents"; // ✅ Normalized import path

export default function EducationLoanSupport() {
  const containerRef = useReveal();

  // ─────────────────────────────────────────────────────────────
  // Data Arrays
  // ─────────────────────────────────────────────────────────────

  const services = [
    {
      icon: Calculator,
      title: "Loan Eligibility Assessment",
      desc: "Free evaluation of your financial profile to determine loan amount, interest rates, and suitable lenders.",
    },
    {
      icon: Landmark,
      title: "Bank & Lender Matching",
      desc: "Access to 50+ partner banks and NBFCs offering competitive education loan products for study abroad.",
    },
    {
      icon: FileText,
      title: "Documentation Assistance",
      desc: "End-to-end support preparing loan applications, financial statements, and collateral paperwork.",
    },
    {
      icon: Percent,
      title: "Interest Rate Negotiation",
      desc: "We help you secure the lowest possible rates and favorable repayment terms through our institutional partnerships.",
    },
    {
      icon: ShieldCheck,
      title: "Application Submission & Tracking",
      desc: "Professional handling of loan submissions with real-time status updates and follow-up with lenders.",
    },
    {
      icon: Handshake,
      title: "Post-Approval Guidance",
      desc: "Support with disbursement schedules, forex conversion, and repayment planning after loan sanction.",
    },
  ];

  const processSteps = [
    {
      step: 1,
      icon: MessageSquare,
      title: "Free Consultation",
      desc: "Discuss your target country, course cost, and financial background with our loan experts.",
    },
    {
      step: 2,
      icon: Calculator,
      title: "Profile & Budget Analysis",
      desc: "We calculate your required loan amount, assess repayment capacity, and identify suitable loan products.",
    },
    {
      step: 3,
      icon: Landmark,
      title: "Lender Shortlisting",
      desc: "Curated list of 3-5 banks/NBFCs offering the best terms for your specific profile and destination.",
    },
    {
      step: 4,
      icon: FileText,
      title: "Document Preparation",
      desc: "Checklist guidance, template SOPs for loan applications, and review of all financial documents.",
    },
    {
      step: 5,
      icon: CheckCircle,
      title: "Submission & Follow-up",
      desc: "We submit applications to selected lenders and manage all communication until sanction letter issuance.",
    },
    {
      step: 6,
      icon: Banknote,
      title: "Disbursement & Forex Support",
      desc: "Guidance on fund transfer, currency conversion, and coordinating payments with your university.",
    },
  ];

  const eligibilityItems = [
    "Confirmed admission letter from a recognized university",
    "Bangladeshi citizenship with valid passport",
    "Co-applicant (parent/guardian) with stable income source",
    "Minimum academic performance as per lender criteria",
    "Course must be job-oriented (professional/technical preferred)",
    "Age between 18-35 years at time of application",
    "No major defaults in existing credit history",
    "Collateral property (for loans above ৳20 lakh)",
    "Clear purpose statement for fund utilization",
    "Willingness to comply with lender's KYC and verification process",
  ];

  const documentItems = [
    "Admission/offer letter from university",
    "Course fee structure and living cost breakdown",
    "Academic transcripts and certificates (attested)",
    "Applicant & co-applicant NID/passport copies",
    "Co-applicant income proof (salary slips, tax returns, bank statements)",
    "Property documents for collateral (if applicable)",
    "Passport-sized photographs of applicant and co-applicant",
    "Completed loan application form with signatures",
    "Admission fee payment receipt (if already paid)",
    "Visa application proof or visa copy (if already obtained)",
  ];

  const countries = [
    { flag: "🇦🇺", name: "Australia" },
    { flag: "🇬🇧", name: "United Kingdom" },
    { flag: "🇺🇸", name: "United States" },
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

  const faqItems = [
    {
      q: "What is the maximum loan amount I can get?",
      a: "Loan amounts typically range from ৳5 lakh to ৳1 crore+, depending on course cost, lender policy, and collateral availability. We help you identify lenders who can cover your full tuition + living expenses.",
    },
    {
      q: "Do I need collateral for an education loan?",
      a: "Loans up to ৳20 lakh often don't require physical collateral. For higher amounts, most lenders require property or fixed deposit as security. We can connect you with lenders offering collateral-free options where eligible.",
    },
    {
      q: "What interest rates can I expect?",
      a: "Rates vary by lender, loan amount, and profile. Typically 9%-14% p.a. for secured loans and 12%-16% for unsecured. We negotiate on your behalf to secure the most competitive rate available.",
    },
    {
      q: "How long does loan approval take?",
      a: "Standard processing time is 15-45 days after document submission. We expedite the process through our direct bank relationships and proactive follow-up, often reducing timelines by 30-50%.",
    },
    {
      q: "Is a co-applicant mandatory?",
      a: "Yes, almost all lenders require a parent or legal guardian as co-applicant. Their income and credit history significantly impact loan approval and terms. We help prepare strong co-applicant documentation.",
    },
    {
      q: "When does repayment start?",
      a: "Most education loans offer a moratorium period: repayment begins 6-12 months after course completion or upon securing employment. We help you understand EMI structures and plan your post-study finances.",
    },
  ];

  const stats = [
    { value: "50+", label: "Bank & NBFC Partners" },
    { value: "$50000", label: "Loans Disbursed" },
    { value: "95%", label: "Approval Success Rate" },
    { value: "12+", label: "Years Experience" },
  ];

  // ─────────────────────────────────────────────────────────────
  // Render
  // ─────────────────────────────────────────────────────────────

  return (
    <>
      <style>
        {BASE_STYLES +
          `
          @media(max-width:768px){
            .srv-section .srv-container > div[style*="grid-template-columns: repeat(3"] {
              grid-template-columns: 1fr 1fr !important;
            }
            .srv-section .srv-container > div[style*="grid-template-columns: 1fr 1fr"] {
              grid-template-columns: 1fr !important;
            }
          }
          @media(max-width:480px){
            .srv-section .srv-container > div[style*="grid-template-columns"] {
              grid-template-columns: 1fr !important;
            }
          }
        `}
      </style>
      <div className="srv-page" ref={containerRef}>
        {/* HERO */}
        <PageHero
          badge="Student Services"
          title="Secure Your Future with Expert"
          highlight="Education Loan Guidance"
          subtitle="From eligibility assessment to disbursement — we simplify financing"
          desc="Studying abroad is an investment in your future. Our education loan support helps Bangladeshi students access affordable financing from trusted lenders — with transparent terms, minimal paperwork, and dedicated guidance at every step."
          ctaLabel="Book a Free Consultation"
          ctaLink="/freeconsulation"
          blobTop={-40}
          blobRight={-100}
        />

        {/* SERVICES GRID */}
        <section className="srv-section">
          <div className="srv-container">
            <SectionHeader
              label="What We Offer"
              title="End-to-End Loan"
              highlight="Support Services"
              body="We bridge the gap between your academic dreams and financial reality with expert loan advisory and processing."
              centered={true}
            />
            <div
              className="srv-reveal"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3,1fr)",
                gap: 20,
              }}
            >
              {services.map((svc, idx) => (
                <IconCard
                  key={idx}
                  icon={svc.icon}
                  title={svc.title}
                  desc={svc.desc}
                />
              ))}
            </div>
          </div>
        </section>

        <div className="srv-divider" />

        {/* PROCESS STEPS */}
        <section className="srv-section">
          <div className="srv-container">
            <SectionHeader
              label="How It Works"
              title="Your Loan Journey"
              highlight="Simple & Transparent"
              body="A structured, stress-free process designed to maximize approval chances and minimize delays."
              centered={true}
            />
            <div
              className="srv-reveal"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3,1fr)",
                gap: 20,
              }}
            >
              {processSteps.slice(0, 3).map((step, idx) => (
                <StepCard
                  key={idx}
                  step={step.step}
                  icon={step.icon}
                  title={step.title}
                  desc={step.desc}
                />
              ))}
            </div>
            <div
              className="srv-reveal"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3,1fr)",
                gap: 20,
                marginTop: 24,
              }}
            >
              {processSteps.slice(3, 6).map((step, idx) => (
                <StepCard
                  key={idx + 3}
                  step={step.step}
                  icon={step.icon}
                  title={step.title}
                  desc={step.desc}
                />
              ))}
            </div>
          </div>
        </section>

        {/* INFO BOXES: Eligibility + Documents */}
        <section className="srv-section srv-section-alt">
          <div className="srv-container">
            <SectionHeader
              label="Get Started"
              title="Eligibility & Documentation"
              highlight="What You Need"
              body="Understanding requirements upfront helps us prepare a stronger, faster loan application."
              centered={true}
            />
            <div
              className="srv-reveal"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 32,
                marginTop: 48,
              }}
            >
              <InfoBox
                icon={AlertCircle}
                title="Eligibility Checklist"
                variant="blue"
              >
                <CheckList items={eligibilityItems} columns={1} />
              </InfoBox>
              <InfoBox
                icon={FileText}
                title="Required Documents"
                variant="green"
              >
                <CheckList items={documentItems} columns={1} />
              </InfoBox>
            </div>
          </div>
        </section>

        {/* LENDER PARTNERS / COUNTRIES */}
        <section className="srv-section">
          <div className="srv-container">
            <SectionHeader
              label="Global Coverage"
              title="Loans for Study in"
              highlight="12+ Destinations"
              body="We partner with lenders who specialize in financing education across major study abroad destinations."
              centered={true}
            />
            <div className="srv-reveal" style={{ marginTop: "32px" }}>
              <CountryTags countries={countries} />
            </div>
          </div>
        </section>

        {/* STATS STRIP */}
        <StatsStrip stats={stats} />

        {/* FAQ */}
        <section className="srv-section srv-section-alt">
          <div className="srv-container">
            <SectionHeader
              label="Support"
              title="Frequently Asked"
              highlight="Questions"
              body="Everything you need to know about education loans for studying abroad."
              centered={true}
            />
            <div
              className="srv-reveal"
              style={{ maxWidth: "860px", margin: "48px auto 0" }}
            >
              <FAQ items={faqItems} />
            </div>
          </div>
        </section>

        {/* CTA BANNER */}
        <CtaBanner
          title="Ready to Fund Your Education?"
          desc="Get a free loan eligibility assessment from our financial advisors — no obligation, just clear guidance."
          label="Book a Free Consultation"
          link="/freeconsulation"
        />
      </div>
    </>
  );
}
