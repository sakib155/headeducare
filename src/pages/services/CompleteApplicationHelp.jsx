// src/services/ApplicationHelp.jsx
import React from "react";
import { Link } from "react-router-dom";
import {
  FileText,
  CheckCircle,
  Clock,
  Send,
  MessageCircle,
  Shield,
  BookOpen,
  Users,
  Target,
  AlertCircle,
  HelpCircle,
  Globe,
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

export default function ApplicationHelp() {
  const containerRef = useReveal();

  // ─────────────────────────────────────────────────────────────
  // Data Arrays
  // ─────────────────────────────────────────────────────────────

  const services = [
    {
      icon: FileText,
      title: "Application Planning",
      desc: "Personalized roadmap for each university application with deadline tracking and priority sequencing.",
    },
    {
      icon: CheckCircle,
      title: "Document Review",
      desc: "Expert verification of transcripts, certificates, and supporting documents before submission.",
    },
    {
      icon: Clock,
      title: "Form Filling Assistance",
      desc: "Step-by-step guidance on complex application portals to avoid errors and rejections.",
    },
    {
      icon: Send,
      title: "Submission Management",
      desc: "We handle the submission process, confirm receipts, and track application status updates.",
    },
    {
      icon: MessageCircle,
      title: "Follow-up Support",
      desc: "Proactive communication with admissions offices on your behalf for status inquiries.",
    },
    {
      icon: Shield,
      title: "Post-Submission Guidance",
      desc: "Support with conditional offers, additional document requests, and enrollment confirmation.",
    },
  ];

  const processSteps = [
    {
      step: 1,
      icon: Target,
      title: "Initial Consultation",
      desc: "Discuss your academic background, target countries, and preferred programs.",
    },
    {
      step: 2,
      icon: BookOpen,
      title: "University Shortlisting",
      desc: "Curated list of 5-8 universities matching your profile and career goals.",
    },
    {
      step: 3,
      icon: FileText,
      title: "Document Collection",
      desc: "Checklist of required documents with templates for SOPs and recommendation letters.",
    },
    {
      step: 4,
      icon: CheckCircle,
      title: "Application Drafting",
      desc: "Professional review and refinement of all application materials before submission.",
    },
    {
      step: 5,
      icon: Send,
      title: "Submission & Tracking",
      desc: "We submit applications and provide a dashboard to monitor each status in real-time.",
    },
    {
      step: 6,
      icon: CheckCircle,
      title: "Offer & Enrollment",
      desc: "Guidance on comparing offers, accepting admissions, and completing enrollment formalities.",
    },
  ];

  const eligibilityItems = [
    "Completed secondary or higher secondary education",
    "Minimum GPA/CGPA as per university requirements",
    "Valid English proficiency test (IELTS/TOEFL/PTE)",
    "Financial proof for tuition and living expenses",
    "Clear academic and career objectives",
    "No prior visa rejections (or documented explanation)",
    "Age within university-specific limits",
    "Health clearance as required by destination country",
    "Genuine student intent (for visa purposes)",
    "Willingness to comply with application timelines",
  ];

  const documentItems = [
    "Academic transcripts and certificates (attested)",
    "English proficiency test score report",
    "Statement of Purpose (SOP) draft",
    "2-3 Letters of Recommendation (LORs)",
    "Updated CV/Resume (for postgraduate applications)",
    "Passport copy (valid for at least 18 months)",
    "Financial documents (bank statements, sponsorship letters)",
    "Portfolio/work samples (for creative programs)",
    "Research proposal (for PhD applications)",
    "Passport-sized photographs (as per specification)",
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
      q: "How long does the application process take?",
      a: "Typically 3-6 months from consultation to offer letter, depending on university intake cycles and document preparation speed. We provide a personalized timeline during your initial consultation.",
    },
    {
      q: "Can you help if I have a low GPA or test scores?",
      a: "Yes. We specialize in strategic university matching and can identify institutions that consider holistic profiles. We also provide guidance on improving your application through strong SOPs, relevant experience, and supplementary materials.",
    },
    {
      q: "Do you guarantee admission?",
      a: "No ethical consultant can guarantee admission. However, our 98% success rate reflects our expertise in profile assessment, university selection, and application presentation. We maximize your chances through meticulous preparation.",
    },
    {
      q: "What if my application is rejected?",
      a: "We provide a detailed rejection analysis, help you address gaps, and assist with reapplications or alternative university options. Our support continues until you secure an offer.",
    },
    {
      q: "Can I apply to multiple countries simultaneously?",
      a: "Absolutely. We manage multi-country applications efficiently, ensuring each meets specific requirements while optimizing your time and resources. Many students apply to 2-3 countries for broader opportunities.",
    },
    {
      q: "How do you protect my personal data?",
      a: "All documents and information are handled under strict confidentiality. We use secure portals for file sharing, comply with international data protection standards, and never share your data without explicit consent.",
    },
  ];

  const stats = [
    { value: "500+", label: "Partner Universities" },
    { value: "98%", label: "Application Success Rate" },
    { value: "15K+", label: "Students Placed" },
    { value: "12+", label: "Years Experience" },
  ];

  // ─────────────────────────────────────────────────────────────
  // Render
  // ─────────────────────────────────────────────────────────────

  return (
    <>
      <style>{BASE_STYLES}</style>
      <div className="srv-page" ref={containerRef}>
        {/* HERO */}
        <PageHero
          badge="Student Services"
          title="Complete Application Support for Your"
          highlight="Study Abroad Journey"
          subtitle="From shortlisting to enrollment — we handle the complexity"
          desc="Navigating university applications across multiple countries can be overwhelming. Our end-to-end application support ensures every document, deadline, and detail is managed professionally — so you can focus on preparing for your future."
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
              title="Comprehensive Application"
              highlight="Management Services"
              body="Every step of your application journey is supported by experts who understand international admissions inside-out."
              centered={true}
            />
            <div className="srv-grid-3">
              {services.map((svc, idx) => (
                <IconCard
                  key={idx}
                  icon={svc.icon}
                  title={svc.title}
                  desc={svc.desc}
                  className="srv-reveal"
                />
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS STEPS */}
        <section className="srv-section srv-divider">
          <div className="srv-container">
            <SectionHeader
              label="How It Works"
              title="Your Application Journey"
              highlight="Step by Step"
              body="A transparent, structured process designed to minimize stress and maximize your chances of success."
              centered={true}
            />
            <div className="srv-grid-3">
              {processSteps.slice(0, 3).map((step, idx) => (
                <StepCard
                  key={idx}
                  step={step.step}
                  icon={step.icon}
                  title={step.title}
                  desc={step.desc}
                  className="srv-reveal"
                />
              ))}
            </div>
            <div className="srv-grid-3" style={{ marginTop: "24px" }}>
              {processSteps.slice(3, 6).map((step, idx) => (
                <StepCard
                  key={idx + 3}
                  step={step.step}
                  icon={step.icon}
                  title={step.title}
                  desc={step.desc}
                  className="srv-reveal"
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
              body="Understanding requirements upfront helps us prepare a stronger, faster application."
              centered={true}
            />
            <div className="srv-grid-2" style={{ marginTop: "48px" }}>
              <InfoBox
                icon={Users}
                title="Eligibility Checklist"
                variant="blue"
                className="srv-reveal"
              >
                <CheckList items={eligibilityItems} columns={1} />
              </InfoBox>
              <InfoBox
                icon={FileText}
                title="Required Documents"
                variant="green"
                className="srv-reveal"
              >
                <CheckList items={documentItems} columns={1} />
              </InfoBox>
            </div>
          </div>
        </section>

        {/* DESTINATIONS */}
        <section className="srv-section">
          <div className="srv-container">
            <SectionHeader
              label="Global Reach"
              title="Apply to Universities Across"
              highlight="12+ Destinations"
              body="We partner with institutions worldwide to give you the broadest range of options."
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
              body="Everything you need to know about our application support services."
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
          title="Ready to Start Your Application?"
          desc="Get personalized guidance from our expert counselors — no obligation, just clear answers."
          label="Book a Free Consultation"
          link="/freeconsulation"
        />
      </div>
    </>
  );
}
