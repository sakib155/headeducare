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
} from "./serviceComponents";
import {
  Hospital,
  Pill,
  Stethoscope,
  Ambulance,
  Dna,
  Plane,
  GraduationCap,
  Globe,
  Search,
  FileText,
  MessageCircle,
  BadgeCheck,
  CheckCircle,
  Clipboard,
} from "lucide-react";
const coverageItems = [
  {
    icon: Hospital,
    title: "Hospitalisation Cover",
    desc: "Pre and post-hospitalisation expenses fully covered — from admission to discharge and follow-up care.",
  },
  {
    icon: Pill,
    title: "Prescription Medicines",
    desc: "Costs of prescribed medications are reimbursed, ensuring you never skip essential treatment.",
  },
  {
    icon: Stethoscope,
    title: "Doctor Visits",
    desc: "General practitioner visits, specialist consultations, lab tests, and medical checkups covered.",
  },
  {
    icon: Ambulance,
    title: "Emergency & Accidents",
    desc: "Immediate coverage for accidental injuries — minor or major — so healthcare is never delayed.",
  },
  {
    icon: Dna,
    title: "Pre-Existing Conditions",
    desc: "Select plans offer coverage for pre-existing conditions after the applicable waiting period.",
  },
  {
    icon: Plane,
    title: "Evacuation & Repatriation",
    desc: "Medical evacuation and repatriation services in critical situations where local care is insufficient.",
  },
];
const planTypes = [
  {
    tag: "OSHC",
    name: "Overseas Student Health Cover",
    mandatory: true,
    icon: GraduationCap,
    who: "International students on a student visa",
    desc: "OSHC is a mandatory health insurance plan designed specifically for international students studying abroad. It provides complete coverage for hospitalisation, prescription medicines, and medical emergencies — ensuring you have access to quality healthcare in your host country throughout your course duration.",
    features: [
      "Pre & post-hospitalisation",
      "Prescription medicines",
      "Doctor consultations",
      "Emergency treatment",
      "Specialist visits",
      "Mental health support",
    ],
  },
  {
    tag: "OVHC",
    name: "Overseas Visitor Health Cover",
    mandatory: false,
    icon: Globe,
    who: "Visitors & students' accompanying family",
    desc: "OVHC is designed for visitors to Australia (and certain other countries) who cannot access the public healthcare system. Coverage eligibility, premiums, and benefits vary by plan. Core plans cover hospital expenses and doctor fees; add General Treatment Cover for dental, physiotherapy, and optical care.",
    features: [
      "Hospital expenses",
      "Doctor fees",
      "Optional dental cover",
      "Optional physiotherapy",
      "Optional optical care",
      "Family cover available",
    ],
  },
];
const howToChoose = [
  {
    step: 1,
    icon: GraduationCap,
    title: "Check University & Country Requirements",
    desc: "Each country and university has specific OSHC requirements. Confirm the mandatory level of coverage before comparing plans.",
  },
  {
    step: 2,
    icon: Search,
    title: "Compare Plans Side by Side",
    desc: "Review coverage amounts, inclusions, exclusions, and premiums. Most plans cover hospitalisation, doctor visits, prescriptions, and evacuation.",
  },
  {
    step: 3,
    icon: FileText,
    title: "Read the Fine Print",
    desc: "Look for waiting periods, coverage caps, exclusions, and renewal terms hidden in the terms and conditions before committing.",
  },
  {
    step: 4,
    icon: MessageCircle,
    title: "Consult Our Experts",
    desc: "Head Edu Care coordinates with top insurance providers globally to help you compare and select the most suitable and affordable plan.",
  },
];

const eligibility = [
  "Must hold a valid student visa for the entire duration of stay",
  "Must have an admission letter for a full-time course from an approved university",
  "Coverage must span the full duration of the course and stay",
  "Must meet the age criteria specified by the insurance provider",
  "Accompanying family members must also be covered under an appropriate plan",
];

const documents = [
  "Proof of enrollment (college admission letter)",
  "Copy of valid passport",
  "Copy of student visa",
  "Travel itinerary / flight details",
  "Health declaration form",
  "Personal identification documents",
  "Academic enrollment documents",
  "Financial proof documents",
];

const faqs = [
  {
    q: "Is OSHC/OVHC mandatory for Bangladeshi students studying abroad?",
    a: "Yes. Health cover such as OSHC (for Australia) or equivalent OVHC plans for other countries is a mandatory visa requirement for Bangladeshi students. It must be purchased before applying for a student visa and must cover the entire course duration.",
  },
  {
    q: "What does OSHC/OVHC cover for Bangladeshi students?",
    a: "Standard plans cover hospitalisation (inpatient and outpatient), prescription medicines, doctor consultations, medical checkups, and emergency treatment. Enhanced plans may include dental, optical, physiotherapy, and mental health support.",
  },
  {
    q: "How do I choose the best OSHC plan?",
    a: "Review the specific requirements of your host country and university. Compare plans by coverage amounts, exclusions, premiums, and waiting periods. Our counselors can help you shortlist the most cost-effective plan for your situation.",
  },
  {
    q: "Can Head Edu Care assist with arranging health cover?",
    a: "Absolutely. We work with leading insurance providers across all major study destinations. Our team compares policies and arranges the most relevant and affordable student health coverage tailored to your needs.",
  },
  {
    q: "When is the best time to buy a health insurance plan?",
    a: "Purchase your health cover immediately after receiving your offer letter — ideally before or alongside your visa application. This ensures compliance with visa conditions and gives you peace of mind from day one.",
  },
];

export default function HealthInsurance() {
  const containerRef = useReveal();

  return (
    <>
      <style>{BASE_STYLES}</style>
      <div className="srv-page" ref={containerRef}>
        <PageHero
          badge="Student Services"
          title="Overseas Health Insurance"
          highlight="for Study Abroad Aspirants"
          desc="Discover comprehensive health coverage options that protect your wellbeing without breaking the bank — mandatory for most student visas and essential for every student going abroad."
          blobTop={-60}
          blobRight={-60}
        />

        {/* What is OSHC */}
        <section className="srv-section">
          <div className="srv-container">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 60,
                alignItems: "center",
              }}
            >
              <div className="srv-reveal">
                <SectionHeader
                  label="Overview"
                  title="What Is Overseas Student"
                  highlight="Health Insurance?"
                />
                <p className="srv-body" style={{ marginBottom: 20 }}>
                  If you are contemplating studying abroad, you should be aware
                  that many countries require student health insurance coverage.
                  Even where it is not mandatory, medical costs in foreign
                  countries can be exorbitant — having student health cover is
                  prudent financial protection.
                </p>
                <p className="srv-body" style={{ marginBottom: 28 }}>
                  These plans typically cover pre and post-hospitalisation
                  expenses, prescription medicines, and the cost of surgeries.
                  Purchasing coverage in Bangladesh can be significantly more
                  economical than buying plans directly in the host country.
                </p>
                <Link to="/freeconsulation" className="srv-cta-btn">
                  Get Expert Guidance →
                </Link>
              </div>
              <div
                className="srv-reveal"
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 16,
                }}
              >
                {[
                  {
                    icon: Hospital,
                    stat: "100%",
                    label: "Hospitalisation Cover",
                  },
                  { icon: Pill, stat: "Full", label: "Prescription Medicines" },
                  {
                    icon: Ambulance,
                    stat: "24/7",
                    label: "Emergency Coverage",
                  },
                  {
                    icon: BadgeCheck,
                    stat: "Visa",
                    label: "Compliance Assured",
                  },
                ].map((s, i) => {
                  const Icon = s.icon;

                  return (
                    <div
                      key={i}
                      style={{
                        background: "#f6f6f8",
                        borderRadius: 16,
                        padding: "24px 20px",
                        textAlign: "center",
                        border: "1px solid rgba(0,0,0,0.05)",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          marginBottom: 10,
                        }}
                      >
                        <Icon size={28} className="text-primary" />
                      </span>

                      <p
                        style={{
                          fontWeight: 900,
                          fontSize: 22,
                          color: "#005B8F",
                          fontFamily: "Lexend,sans-serif",
                          lineHeight: 1,
                        }}
                      >
                        {s.stat}
                      </p>

                      <p
                        style={{
                          fontSize: 12,
                          color: "#9ca3af",
                          fontFamily: "Lexend,sans-serif",
                          marginTop: 4,
                        }}
                      >
                        {s.label}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <div className="srv-divider" />

        {/* Plan Types */}
        <section className="srv-section-alt">
          <div className="srv-container">
            <SectionHeader
              label="Plan Types"
              title="Two Types of"
              highlight="Health Cover"
              body="Understanding the difference between OSHC and OVHC helps you select the right plan for your visa type and circumstances."
              centered
            />
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 24,
              }}
            >
              {planTypes.map((plan, i) => {
                const Icon = plan.icon;

                return (
                  <div
                    key={i}
                    className="srv-reveal"
                    style={{
                      background: "#fff",
                      borderRadius: 24,
                      padding: "36px 32px",
                      border: "1px solid rgba(0,0,0,0.07)",
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    {plan.mandatory && (
                      <span
                        style={{
                          position: "absolute",
                          top: 20,
                          right: 20,
                          background: "rgba(0,91,143,0.1)",
                          color: "#005B8F",
                          fontSize: 11,
                          fontWeight: 700,
                          padding: "4px 12px",
                          borderRadius: 20,
                          fontFamily: "Lexend,sans-serif",
                        }}
                      >
                        Mandatory
                      </span>
                    )}

                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 14,
                        marginBottom: 20,
                      }}
                    >
                      <span style={{ fontSize: 36 }}>
                        <Icon size={24} /> {/* ✅ correct */}
                      </span>

                      <div>
                        <span
                          style={{
                            fontSize: 11,
                            fontWeight: 700,
                            color: "#005B8F",
                            letterSpacing: ".08em",
                            textTransform: "uppercase",
                            fontFamily: "Lexend,sans-serif",
                          }}
                        >
                          {plan.tag}
                        </span>

                        <h3
                          style={{
                            fontWeight: 900,
                            fontSize: 20,
                            color: "#0d121b",
                            fontFamily: "Lexend,sans-serif",
                            lineHeight: 1.2,
                          }}
                        >
                          {plan.name}
                        </h3>
                      </div>
                    </div>

                    <p
                      style={{
                        fontSize: 12,
                        color: "#9ca3af",
                        marginBottom: 14,
                      }}
                    >
                      For: {plan.who}
                    </p>

                    <p
                      className="srv-body"
                      style={{ fontSize: 14, marginBottom: 20 }}
                    >
                      {plan.desc}
                    </p>

                    <CheckList items={plan.features} columns={2} />
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Coverage benefits grid */}
        <section className="srv-section">
          <div className="srv-container">
            <SectionHeader
              label="Coverage"
              title="What Your Health Plan"
              highlight="Covers"
              body="A comprehensive student health cover protects you across a wide range of medical situations throughout your stay abroad."
            />
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3,1fr)",
                gap: 20,
              }}
            >
              {coverageItems.map((item, i) => (
                <IconCard
                  key={i}
                  icon={item.icon}
                  title={item.title}
                  desc={item.desc}
                />
              ))}
            </div>
          </div>
        </section>

        <div className="srv-divider" />

        {/* How to choose */}
        <section className="srv-section-alt">
          <div className="srv-container">
            <SectionHeader
              label="Guide"
              title="How to Choose the"
              highlight="Best Plan"
              body="Follow these steps to confidently shortlist the best health insurance plan before flying abroad."
            />
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2,1fr)",
                gap: 20,
              }}
            >
              {howToChoose.map((s) => (
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

        {/* Eligibility + Documents side by side */}
        <section className="srv-section">
          <div className="srv-container">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 32,
              }}
            >
              <InfoBox
                icon={CheckCircle}
                title="Eligibility Criteria"
                variant="blue"
              >
                <CheckList items={eligibility} />
              </InfoBox>
              <InfoBox
                icon={Clipboard}
                title="Documents Required"
                variant="green"
              >
                <CheckList items={documents} />
              </InfoBox>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="srv-section-alt">
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
          desc="Let Head Edu Care guide you to the most suitable and affordable health cover for your study destination."
        />
      </div>
    </>
  );
}
