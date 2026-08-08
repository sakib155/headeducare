import React from "react";
import {
  BASE_STYLES,
  useReveal,
  PageHero,
  SectionHeader,
  InfoBox,
  CheckList,
  CtaBanner,
} from "./serviceComponents";
import {
  FileText,
  User,
  Languages,
  BookOpen,
  Briefcase,
  Wallet,
  FileCheck,
} from "lucide-react";

export default function GeneralDocumentsChecklist() {
  const containerRef = useReveal();

  const academicDocs = [
    "Academic transcripts and certificates (SSC/O Level, HSC/A Level, Bachelor's, Master's, or equivalent, as applicable)",
    "Degree completion certificate or provisional certificate (where applicable)",
    "Official grading scale or transcript explanation (if required)",
    "For EU Entry: all transcripts and certificates should be duly Apostilled by MOFA"
  ];

  const identityDocs = [
    "Valid passport (minimum validity as required by the destination country)",
    "Recent passport-size photographs (required for EU countries)"
  ];

  const englishDocs = [
    "IELTS Academic",
    "TOEFL iBT",
    "PTE Academic",
    "Duolingo English Test (US/UK/Canada/Ireland)",
    "Medium of Instruction (MOI) Certificate (accepted by selected universities)"
  ];

  const applicationDocs = [
    "Statement of Purpose (SOP) / Personal Statement / Motivation Letter",
    "Curriculum Vitae (CV) or Résumé",
    "Two or Three Letters of Recommendation (LORs) (academic and/or professional, depending on the programme)",
    "Portfolio (for Architecture, Art, Design, and other creative programmes)",
    "Research Proposal (for selected Master's and most PhD programmes)"
  ];

  const employmentDocs = [
    "Work Experience Certificate(s)",
    "Employment Reference Letter(s)",
    "Internship Certificate(s)",
    "Professional Licenses or Certifications (if applicable)"
  ];

  const financialDocs = [
    "Bank Statement(s)",
    "Financial Sponsorship Letter or Affidavit of Support",
    "Proof of Income or Salary Certificate / Trade License",
    "Education Loan Approval Letter (if applicable)"
  ];

  const additionalDocs = [
    "Standardized test scores (SAT, ACT, GRE, GMAT, etc.)",
    "Scholarship or Sponsorship Documents",
    "Valid National ID or Birth Certificate (Apostilled Required for EU Country)",
    "Medical or Health Insurance Documents (for selected countries)",
    "Police Clearance Certificate (where required)",
    "Family Certificate duly Apostilled by MOFA (For EU Country)"
  ];

  return (
    <>
      <style>
        {BASE_STYLES +
          `
          .checklist-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 28px;
            margin-top: 40px;
          }
          @media(max-width:968px){
            .checklist-grid {
              grid-template-columns: repeat(2, 1fr) !important;
            }
          }
          @media(max-width:640px){
            .checklist-grid {
              grid-template-columns: 1fr !important;
            }
          }
        `}
      </style>

      <div className="srv-page" ref={containerRef}>
        <PageHero
          badge="Document Preparation"
          title="General Documents"
          highlight="Checklist"
          desc="While document requirements vary by country, university, and programme, international students are generally required to prepare the following documents before starting their study abroad application. This checklist covers the documents most commonly required across the USA, UK, Canada, Australia, New Zealand, Ireland, Europe, Malaysia, and South Korea."
          blobTop={-60}
          blobRight={-80}
        />

        <section className="srv-section">
          <div className="srv-container">
            <SectionHeader
              label="Standard Checklist"
              title="Commonly Required Documents"
              highlight="Across Destinations"
              body="Ensure you have these primary categories of documents ready to make your consultation and application process as smooth as possible."
              centered={true}
            />

            <div className="checklist-grid srv-reveal">
              <InfoBox icon={BookOpen} title="Academic Documents" variant="blue">
                <CheckList items={academicDocs} />
              </InfoBox>

              <InfoBox icon={User} title="Identity Documents" variant="green">
                <CheckList items={identityDocs} />
              </InfoBox>

              <InfoBox icon={Languages} title="English Language Proficiency" variant="blue">
                <CheckList items={englishDocs} />
              </InfoBox>

              <InfoBox icon={FileText} title="Application Documents" variant="green">
                <CheckList items={applicationDocs} />
              </InfoBox>

              <InfoBox icon={Briefcase} title="Employment Documents (If Applicable)" variant="blue">
                <CheckList items={employmentDocs} />
              </InfoBox>

              <InfoBox icon={Wallet} title="Financial Documents" variant="green">
                <CheckList items={financialDocs} />
              </InfoBox>

              <InfoBox icon={FileCheck} title="Additional Documents / Visa" variant="blue">
                <CheckList items={additionalDocs} />
              </InfoBox>
            </div>

            <p className="srv-body" style={{ marginTop: 40, textAlign: "center", fontSize: 13, color: "var(--srv-text-muted)" }}>
              Please note: The exact document requirements vary depending on the destination country, university, and programme. Our experienced counselors will provide you with a personalized document checklist based on your academic profile and chosen study destination.
            </p>
          </div>
        </section>

        <CtaBanner
          title="Need Help Organising Your Documents?"
          desc="Book your free consultation today and our counselors will walk you through your personalized document checklist."
          label="Book a Free Consultation"
          link="/freeconsulation"
        />
      </div>
    </>
  );
}
