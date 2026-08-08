import React from "react";
import { Link } from "react-router-dom";
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
  Sparkles,
  GraduationCap,
  ShieldCheck,
  Star,
  Award,
  Zap,
  CheckCircle,
} from "lucide-react";

/* ─────────────── DATA ─────────────── */

const studentProfiles = [
  {
    name: "Aaliyah K.",
    university: "Harvard University",
    uniColor: "#A51C30", // Harvard Crimson
    uniBg: "#FDF2F4",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=80",
    major: "Computer Science & Government",
    stats: "GPA: 4.0 | SAT: 1580",
    project: "Founder of Tech4All non-profit, published a paper in AI ethics.",
    impact: "Common App Essay ideation & US government application strategy.",
  },
  {
    name: "Ethan M.",
    university: "Yale University",
    uniColor: "#00356B", // Yale Blue
    uniBg: "#F0F4F8",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=600&auto=format&fit=crop&q=80",
    major: "Economics & Philosophy",
    stats: "GPA: 3.97 | SAT: 1550",
    project: "Varsity Debate Captain, raised $15,000 for local library restoration.",
    impact: "Supplemental essay strategy & admissions mock interview training.",
  },
  {
    name: "Sophia L.",
    university: "Stanford University",
    uniColor: "#8C1515", // Stanford Cardinal
    uniBg: "#FCF3F3",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&auto=format&fit=crop&q=80",
    major: "Bioengineering",
    stats: "GPA: 4.0 | ACT: 35",
    project: "Research intern at Biotech Lab, patented low-cost water filter.",
    impact: "Extracurricular narrative positioning & biochemistry portfolio review.",
  },
];

/* ─────────────── PAGE COMPONENT ─────────────── */

export default function USMentorship() {
  const containerRef = useReveal();

  return (
    <>
      <style>
        {BASE_STYLES +
          `
          .photocard-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 32px;
            margin-top: 40px;
          }
          .photocard {
            background: var(--srv-bg-card);
            border: 1px solid var(--srv-border);
            border-radius: 24px;
            overflow: hidden;
            box-shadow: 0 4px 20px rgba(0,0,0,0.03);
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            display: flex;
            flex-direction: column;
          }
          .photocard:hover {
            transform: translateY(-8px);
            box-shadow: 0 20px 40px rgba(0,91,143,0.12);
            border-color: rgba(0,91,143,0.2);
          }
          .dark .photocard:hover {
            border-color: rgba(74,131,243,0.3);
          }
          .photocard-image-wrap {
            position: relative;
            width: 100%;
            height: 280px;
            overflow: hidden;
            background: #e5e7eb;
          }
          .photocard-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.5s ease;
          }
          .photocard:hover .photocard-image {
            transform: scale(1.04);
          }
          .photocard-uni-badge {
            position: absolute;
            bottom: 16px;
            left: 16px;
            padding: 6px 16px;
            border-radius: 30px;
            font-size: 13px;
            font-weight: 700;
            font-family: Lexend, sans-serif;
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          }
          .photocard-content {
            padding: 24px;
            display: flex;
            flex-direction: column;
            gap: 12px;
            flex: 1;
            text-align: left;
          }
          .photocard-name {
            font-size: 20px;
            font-weight: 700;
            color: var(--srv-text-primary);
            font-family: Lexend, sans-serif;
            margin: 0;
          }
          .photocard-major {
            font-size: 13px;
            font-weight: 600;
            color: #005B8F;
            text-transform: uppercase;
            letter-spacing: 0.05em;
          }
          .dark .photocard-major {
            color: #4A83F3;
          }
          .photocard-divider {
            height: 1px;
            background: var(--srv-border);
            margin: 8px 0;
          }
          .photocard-highlight {
            font-size: 13px;
            line-height: 1.6;
            color: var(--srv-text-body);
            font-weight: 300;
          }
          .photocard-highlight strong {
            font-weight: 600;
            color: var(--srv-text-primary);
          }
          @media(max-width:968px){
            .photocard-grid {
              grid-template-columns: repeat(2, 1fr) !important;
            }
          }
          @media(max-width:640px){
            .photocard-grid {
              grid-template-columns: 1fr !important;
            }
          }
        `}
      </style>

      <div className="srv-page" ref={containerRef}>
        {/* ── HERO ── */}
        <PageHero
          badge="USA Mentorship Program"
          title="Holistic Ivy League & Elite College"
          highlight="Mentorship Support"
          desc="Our exclusive US Mentorship Program provides comprehensive guidance for students aiming to gain admission to competitive American universities. Our mentors work closely with students from profile building to final enrollment, ensuring every application reflects the student's full potential."
          blobTop={-60}
          blobRight={-80}
        />

        {/* ── FEATURES CHECKLIST ── */}
        <section className="srv-section" style={{ paddingBottom: 0 }}>
          <div className="srv-container" style={{ maxWidth: 1000 }}>
            <p className="srv-body" style={{ textAlign: "center", marginBottom: 40, fontSize: 16 }}>
              Families who partner with Head Educare for the admissions process receive focused, high-touch mentorship designed to guide every step from strategy through submission.
            </p>
            <div
              className="grid-2"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 32,
              }}
            >
              <InfoBox
                icon={Sparkles}
                title="Stage-Based Mentorship Includes"
                variant="blue"
              >
                <CheckList
                  items={[
                    "Unlimited, 1:1 Mentoring",
                    "College List Strategy",
                    "Timeline Management and Execution",
                    "Narrative Development",
                    "Activities and Application Presentation",
                    "Essay Strategy and Execution",
                    "Team-Based Review and Second Reader Insight",
                    "Interview Preparation and Demonstrated Interest",
                  ]}
                />
              </InfoBox>

              <InfoBox
                icon={GraduationCap}
                title="Core Services Offered"
                variant="green"
              >
                <CheckList
                  items={[
                    "Academic planning",
                    "University shortlisting",
                    "SAT & ACT preparation guidance",
                    "Advanced Placement (AP) guidance",
                    "Common Application strategy",
                    "Coalition Application support",
                    "Essay brainstorming and review",
                    "Extracurricular profile development",
                    "Leadership and community engagement planning",
                    "Research opportunity guidance",
                    "Scholarship planning",
                    "Financial aid strategy",
                    "Interview preparation",
                    "Visa preparation",
                  ]}
                />
              </InfoBox>
            </div>
          </div>
        </section>

        {/* ── STUDENT PHOTOCARDS ── */}
        <section className="srv-section">
          <div className="srv-container">
            <SectionHeader
              label="Student Profiles"
              title="Successful Admissions"
              highlight="Photocards"
              body="See the profiles and project highlights of students mentored into top US colleges."
              centered={true}
            />

            <div className="photocard-grid srv-reveal">
              {studentProfiles.map((p, i) => (
                <div key={i} className="photocard">
                  <div className="photocard-image-wrap">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="photocard-image"
                      loading="lazy"
                    />
                    <span
                      className="photocard-uni-badge"
                      style={{
                        backgroundColor: p.uniBg,
                        color: p.uniColor,
                        border: `1px solid ${p.uniColor}20`,
                      }}
                    >
                      {p.university}
                    </span>
                  </div>
                  <div className="photocard-content">
                    <p className="photocard-name">{p.name}</p>
                    <p className="photocard-major">{p.major}</p>
                    <div className="photocard-divider" />
                    <p className="photocard-highlight">
                      <strong>Stats:</strong> {p.stats}
                    </p>
                    <p className="photocard-highlight">
                      <strong>Standout Project:</strong> {p.project}
                    </p>
                    <p className="photocard-highlight">
                      <strong>Admissions Focus:</strong> {p.impact}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA BANNER ── */}
        <CtaBanner
          title="Ready to Build Your Standout Application?"
          desc="Contact our US admissions specialists and find out how we can guide you into your target Ivy League or top-tier university."
          label="Book a Free Consultation"
          link="/freeconsulation"
        />
      </div>
    </>
  );
}
