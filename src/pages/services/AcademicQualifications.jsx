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
import { GraduationCap, Award, BookOpen, Layers } from "lucide-react";

export default function AcademicQualifications() {
  const containerRef = useReveal();

  const standardizedTests = [
    { name: "SAT", desc: "Undergraduate admission (primarily USA)" },
    { name: "ACT", desc: "Alternative to SAT for undergraduate admissions" },
    { name: "GRE", desc: "Master's & PhD admission across science, engineering, and humanities" },
    { name: "GMAT", desc: "MBA and graduate business programs admission" },
    { name: "LSAT", desc: "Law school admissions requirement" },
    { name: "MCAT", desc: "Medicine programs admissions requirement" },
    { name: "DAT", desc: "Dentistry programs admissions requirement" },
    { name: "OAT", desc: "Optometry programs admissions requirement" }
  ];

  const englishTests = [
    { name: "IELTS Academic", scope: "Accepted Worldwide" },
    { name: "TOEFL iBT", scope: "Accepted Worldwide" },
    { name: "PTE Academic", scope: "Accepted Worldwide" },
    { name: "Duolingo English Test", scope: "Increasingly accepted (US/UK/Canada/Ireland)" },
    { name: "Cambridge English", scope: "Accepted by selected universities" }
  ];

  return (
    <>
      <style>
        {BASE_STYLES +
          `
          .qual-table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
            font-family: Lexend, sans-serif;
          }
          .qual-table th {
            background: #005B8F;
            color: white;
            text-align: left;
            padding: 14px 20px;
            font-weight: 700;
            font-size: 14px;
          }
          .dark .qual-table th {
            background: #0d1f35;
          }
          .qual-table td {
            padding: 16px 20px;
            border-bottom: 1px solid var(--srv-border);
            color: var(--srv-text-primary);
            font-size: 14px;
          }
          .qual-table tr:hover {
            background: rgba(0,91,143,0.02);
          }
          .dark .qual-table tr:hover {
            background: rgba(255,255,255,0.01);
          }
          .test-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 32px;
            margin-top: 40px;
          }
          .test-card {
            background: var(--srv-bg-card);
            border: 1px solid var(--srv-border);
            border-radius: 16px;
            padding: 20px;
            display: flex;
            align-items: flex-start;
            gap: 16px;
            transition: all 0.25s;
          }
          .test-card:hover {
            box-shadow: 0 6px 20px rgba(0,91,143,0.08);
            transform: translateY(-2px);
          }
          @media(max-width:768px){
            .test-grid {
              grid-template-columns: 1fr !important;
            }
          }
        `}
      </style>

      <div className="srv-page" ref={containerRef}>
        <PageHero
          badge="Admissions Standards"
          title="Academic Qualifications"
          highlight="& Standardised Tests"
          desc="Understanding general entry requirements is critical for building a successful study abroad strategy. Below is a comprehensive guide to minimum academic qualifications, standardized tests, and English requirements."
          blobTop={-60}
          blobRight={-80}
        />

        {/* ── ACADEMIC QUALIFICATIONS ── */}
        <section className="srv-section">
          <div className="srv-container">
            <SectionHeader
              label="Qualifications"
              title="General Academic Requirements"
              highlight="for International Students"
              body="Typical qualification guidelines for students applying from Bangladesh."
            />

            <div className="srv-reveal" style={{ overflowX: "auto", background: "var(--srv-bg-card)", border: "1px solid var(--srv-border)", borderRadius: 20, padding: 12 }}>
              <h3 style={{ margin: "16px 20px 8px", fontWeight: 700, fontSize: 18, color: "#005B8F" }}>Undergraduate Admission</h3>
              <table className="qual-table">
                <thead>
                  <tr>
                    <th>Qualification</th>
                    <th>Typical Minimum Requirement</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>SSC</strong></td>
                    <td>Completed</td>
                  </tr>
                  <tr>
                    <td><strong>HSC</strong></td>
                    <td>Minimum GPA 3.0 – 5.0 depending on the target university</td>
                  </tr>
                  <tr>
                    <td><strong>A Levels</strong></td>
                    <td>2 – 3 A Levels</td>
                  </tr>
                  <tr>
                    <td><strong>IB Diploma</strong></td>
                    <td>Accepted by most universities</td>
                  </tr>
                  <tr>
                    <td><strong>GED</strong></td>
                    <td>Accepted by many universities</td>
                  </tr>
                </tbody>
              </table>

              <h3 style={{ margin: "32px 20px 8px", fontWeight: 700, fontSize: 18, color: "#005B8F" }}>Postgraduate Admission</h3>
              <table className="qual-table" style={{ marginBottom: 16 }}>
                <thead>
                  <tr>
                    <th>Qualification</th>
                    <th>Typical Minimum Requirement</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Bachelor's Degree</strong></td>
                    <td>Minimum CGPA 2.50 – 3.00 / 4.00 (Higher-ranked universities often require 3.20+)</td>
                  </tr>
                  <tr>
                    <td><strong>MBA</strong></td>
                    <td>Bachelor's degree (Some universities require work experience)</td>
                  </tr>
                  <tr>
                    <td><strong>Doctorate</strong></td>
                    <td>Master's Degree plus a comprehensive research proposal</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <div className="srv-divider" />

        {/* ── TESTS SECTION ── */}
        <section className="srv-section-alt">
          <div className="srv-container">
            <div className="test-grid">
              {/* Standardised Tests */}
              <div className="srv-reveal">
                <SectionHeader
                  label="Academic Tests"
                  title="Standardised Admissions"
                  highlight="Tests"
                  body="Subject tests required by universities (primarily in the US/Canada) to evaluate academic readiness."
                />
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  {standardizedTests.map((t, idx) => (
                    <div key={idx} className="test-card">
                      <div style={{ width: 44, height: 44, borderRadius: 10, background: "rgba(0,91,143,0.1)", color: "#005B8F", display: "flex", alignItems: "center", justifyCenter: "center", shrink: 0, fontWeight: 700, fontSize: 12, justifyContent: "center" }}>
                        {t.name}
                      </div>
                      <div>
                        <h4 style={{ fontWeight: 700, fontSize: 15, margin: 0, color: "var(--srv-text-primary)" }}>{t.name}</h4>
                        <p className="srv-body" style={{ fontSize: 13, margin: "4px 0 0" }}>{t.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* English Proficiency */}
              <div className="srv-reveal">
                <SectionHeader
                  label="Language Tests"
                  title="English Proficiency"
                  highlight="Exams"
                  body="Required by almost all international universities to verify English language communication skills."
                />
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  {englishTests.map((t, idx) => (
                    <div key={idx} className="test-card">
                      <div style={{ width: 44, height: 44, borderRadius: 10, background: "rgba(22,163,74,0.1)", color: "#16a34a", display: "flex", alignItems: "center", justifyCenter: "center", shrink: 0, fontWeight: 700, fontSize: 10, textAlign: "center", padding: 2, justifyContent: "center" }}>
                        TEST
                      </div>
                      <div>
                        <h4 style={{ fontWeight: 700, fontSize: 15, margin: 0, color: "var(--srv-text-primary)" }}>{t.name}</h4>
                        <p className="srv-body" style={{ fontSize: 13, margin: "4px 0 0" }}>{t.scope}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <CtaBanner
          title="Not Sure Which Tests You Need to Take?"
          desc="Talk to our test preparation experts today to get guidance on the right exams based on your profile and target universities."
          label="Book a Free Consultation"
          link="/freeconsulation"
        />
      </div>
    </>
  );
}
