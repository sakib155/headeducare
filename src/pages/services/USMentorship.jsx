import React from "react";
import { Link } from "react-router-dom";
import {
  BASE_STYLES,
  useReveal,
  PageHero,
  SectionHeader,
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
          .mentor-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 32px;
            margin-top: 40px;
          }
          .mentor-card {
            background: var(--srv-bg-card);
            border: 1px solid var(--srv-border);
            border-radius: 24px;
            padding: 36px 32px;
            box-shadow: 0 4px 24px rgba(0,0,0,0.04);
            transition: all 0.3s ease;
          }
          .mentor-card:hover {
            box-shadow: 0 12px 40px rgba(0,91,143,0.1);
            transform: translateY(-4px);
          }
          .mentor-card-header {
            display: flex;
            align-items: center;
            gap: 14px;
            margin-bottom: 24px;
            padding-bottom: 20px;
            border-bottom: 2px solid var(--srv-border);
          }
          .mentor-card-icon {
            width: 48px;
            height: 48px;
            border-radius: 14px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
          }
          .mentor-card-title {
            font-size: 18px;
            font-weight: 800;
            font-family: Lexend, sans-serif;
            line-height: 1.3;
          }
          .mentor-list {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 0 24px;
            list-style: none;
            padding: 0;
            margin: 0;
          }
          .mentor-list li {
            padding: 16px 0;
            font-size: 14px;
            color: var(--srv-text-body);
            font-weight: 400;
            line-height: 1.5;
            font-family: Lexend, sans-serif;
            border-bottom: 1px solid rgba(0,0,0,0.12);
          }
          .dark .mentor-list li {
            border-bottom: 1px solid rgba(255,255,255,0.15);
          }
          @media(max-width:768px){
.profiles-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 24px;
            margin-top: 40px;
          }
          .profile-card {
            background: var(--srv-bg-card);
            border: 1px solid var(--srv-border);
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 4px 20px rgba(0,0,0,0.04);
            transition: all 0.3s ease;
          }
          .profile-card:hover {
            box-shadow: 0 12px 40px rgba(0,91,143,0.1);
            transform: translateY(-4px);
          }
          .profile-card-image {
            width: 100%;
            height: 200px;
            object-fit: cover;
            display: block;
          }
          .profile-card-body {
            padding: 20px 22px 24px;
          }
          .profile-card-uni {
            display: inline-block;
            font-size: 11px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: .08em;
            padding: 4px 12px;
            border-radius: 99px;
            margin-bottom: 12px;
            font-family: Lexend, sans-serif;
          }
          .profile-card-name {
            font-size: 18px;
            font-weight: 800;
            font-family: Lexend, sans-serif;
            color: var(--srv-text-primary);
            margin-bottom: 2px;
          }
          .profile-card-major {
            font-size: 13px;
            color: var(--srv-text-body);
            font-weight: 400;
            font-family: Lexend, sans-serif;
            margin-bottom: 14px;
          }
          .profile-card-divider {
            height: 1px;
            background: var(--srv-border);
            margin-bottom: 14px;
          }
          .profile-card-stat {
            font-size: 13px;
            color: var(--srv-text-body);
            font-family: Lexend, sans-serif;
            line-height: 1.6;
          }
          .profile-card-stat strong {
            color: var(--srv-text-primary);
            font-weight: 600;
          }
          @media(max-width: 900px) {
            .profiles-grid { grid-template-columns: 1fr 1fr; }
          }
          @media(max-width: 600px) {
            .profiles-grid { grid-template-columns: 1fr; }
          }
          .mentor-grid {
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
            <div className="mentor-grid">
              <div className="mentor-card">
                <div className="mentor-card-header">
                  <div className="mentor-card-icon" style={{ background: "rgba(0,91,143,0.1)", color: "#005B8F" }}>
                    <Sparkles size={22} />
                  </div>
                  <h3 className="mentor-card-title" style={{ color: "var(--srv-text-primary)" }}>
                    Stage-Based Mentorship Includes
                  </h3>
                </div>
                <ul className="mentor-list">
                  {[
                    "Unlimited, 1:1 Mentoring",
                    "College List Strategy",
                    "Timeline Management and Execution",
                    "Narrative Development",
                    "Activities and Application Presentation",
                    "Essay Strategy and Execution",
                    "Team-Based Review and Second Reader Insight",
                    "Interview Preparation and Demonstrated Interest",
                  ].map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="mentor-card">
                <div className="mentor-card-header">
                  <div className="mentor-card-icon" style={{ background: "rgba(22,163,74,0.1)", color: "#166534" }}>
                    <GraduationCap size={22} />
                  </div>
                  <h3 className="mentor-card-title" style={{ color: "var(--srv-text-primary)" }}>
                    Core Services Offered
                  </h3>
                </div>
                <ul className="mentor-list">
                  {[
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
                  ].map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
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

            <div className="profiles-grid srv-reveal">
              {studentProfiles.map((p, i) => (
                <div key={i} className="profile-card">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="profile-card-image"
                    loading="lazy"
                  />
                  <div className="profile-card-body">
                    <span
                      className="profile-card-uni"
                      style={{
                        backgroundColor: p.uniBg,
                        color: p.uniColor,
                      }}
                    >
                      {p.university}
                    </span>
                    <div className="profile-card-name">{p.name}</div>
                    <div className="profile-card-major">{p.major}</div>
                    <div className="profile-card-divider" />
                    <div className="profile-card-stat">
                      <strong>Stats:</strong> {p.stats}
                    </div>
                    <div className="profile-card-stat">
                      <strong>Standout Project:</strong> {p.project}
                    </div>
                    <div className="profile-card-stat">
                      <strong>Admissions Focus:</strong> {p.impact}
                    </div>
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
