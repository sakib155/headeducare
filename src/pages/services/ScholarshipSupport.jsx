import {
  Trophy,
  Search,
  FileText,
  PenTool,
  Mail,
  ClipboardList,
  Globe,
  MessageCircle,
  Target,
  Send,
  PartyPopper,
  BadgeDollarSign,
  GraduationCap,
  BookOpen,
  Landmark,
  Handshake,
  FlaskConical,
  Award,
  Lightbulb,
  Users,
  CheckCircle,
  Star,
  AlertCircle,
  CalendarDays,
  File,
} from "lucide-react";
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
} from "../services/serviceComponents";

/* ─────────── DATA ─────────── */

const destinations = [
  { flag: "🇦🇺", name: "Australia" },
  { flag: "🇬🇧", name: "United Kingdom" },
  { flag: "🇺🇸", name: "USA" },
  { flag: "🇨🇦", name: "Canada" },
  { flag: "🇩🇪", name: "Germany" },
  { flag: "🇯🇵", name: "Japan" },
  { flag: "🇮🇪", name: "Ireland" },
  { flag: "🇳🇿", name: "New Zealand" },
  { flag: "🇸🇪", name: "Sweden" },
  { flag: "🇳🇱", name: "Netherlands" },
  { flag: "🇰🇷", name: "South Korea" },
  { flag: "🇲🇾", name: "Malaysia" },
];

const services = [
  {
    icon: Search,
    title: "Scholarship Discovery",
    desc: "We identify merit-based, need-based, government, and university-specific scholarships tailored to your academic profile, country of destination, and field of study.",
  },
  {
    icon: PenTool,
    title: "Scholarship Essay Writing",
    desc: "Our expert writers craft persuasive scholarship essays, personal statements, and motivation letters that make your application stand out to selection committees.",
  },
  {
    icon: FileText,
    title: "Application Preparation",
    desc: "From forms to supporting documents, we ensure every element of your scholarship application is complete, accurate, and aligned with the funder's requirements.",
  },
  {
    icon: Mail,
    title: "Reference Letter Guidance",
    desc: "We advise you on selecting strong referees and provide structured guidance so your recommendation letters powerfully support your scholarship candidacy.",
  },
  {
    icon: CalendarDays,
    title: "Deadline Management",
    desc: "Scholarship deadlines vary widely. We build a personalised calendar and ensure every submission reaches the right body well ahead of closing dates.",
  },
  {
    icon: Handshake,
    title: "Award Negotiation & Acceptance",
    desc: "When you receive an award, we help you evaluate, compare, and where possible negotiate conditions — including deferrals or partial award top-ups.",
  },
];

const scholarshipTypes = [
  {
    icon: Star,
    type: "Merit-Based Scholarships",
    color: "#005B8F",
    desc: "Awarded for outstanding academic achievement, standardised test scores, or exceptional talent in a particular field. Highly competitive and prestigious.",
  },
  {
    icon: Users,
    type: "Need-Based Scholarships",
    color: "#4A83F3",
    desc: "Designed for students who demonstrate financial need. Often combined with merit criteria and require detailed financial documentation.",
  },
  {
    icon: Globe,
    type: "Government Scholarships",
    color: "#16a34a",
    desc: "Fully or partially funded awards offered by host country governments — including Chevening, Australia Awards, DAAD, Fulbright, and MEXT.",
  },
  {
    icon: Landmark,
    type: "University Scholarships",
    color: "#9333ea",
    desc: "Institutional awards ranging from tuition waivers to full funding packages. Each university has its own criteria, deadlines, and application portals.",
  },
  {
    icon: FlaskConical,
    type: "Research Fellowships",
    color: "#dc2626",
    desc: "Funding for postgraduate researchers and doctoral candidates, often tied to a specific supervisor or research project. Proposal quality is critical.",
  },
  {
    icon: BadgeDollarSign,
    type: "Country-Specific Awards",
    color: "#d97706",
    desc: "Scholarships specifically for Bangladeshi students — including Commonwealth Scholarships, ICCR (India), and bilateral government agreements.",
  },
];

const topScholarships = [
  {
    name: "Chevening Scholarship",
    country: "🇬🇧 UK",
    level: "Master's",
    coverage: "Full funding",
    deadline: "Nov annually",
  },
  {
    name: "Australia Awards",
    country: "🇦🇺 Australia",
    level: "Master's / PhD",
    coverage: "Full funding",
    deadline: "Apr annually",
  },
  {
    name: "DAAD Scholarship",
    country: "🇩🇪 Germany",
    level: "All levels",
    coverage: "Stipend + fees",
    deadline: "Varies",
  },
  {
    name: "Fulbright Program",
    country: "🇺🇸 USA",
    level: "Master's / PhD",
    coverage: "Full funding",
    deadline: "May annually",
  },
  {
    name: "MEXT Scholarship",
    country: "🇯🇵 Japan",
    level: "All levels",
    coverage: "Full funding",
    deadline: "May annually",
  },
  {
    name: "Commonwealth Scholarship",
    country: "🇬🇧 UK",
    level: "Master's / PhD",
    coverage: "Full funding",
    deadline: "Dec annually",
  },
];

const eligibilityFactors = [
  "Academic GPA and transcripts",
  "English language proficiency (IELTS / TOEFL / PTE)",
  "Leadership and extracurricular achievements",
  "Community service and volunteering record",
  "Work or research experience",
  "Country of citizenship or residence",
  "Financial background and need-based criteria",
  "Proposed course and university",
  "Career development plan and goals",
  "Reference letters from qualified professionals",
];

const documentsRequired = [
  "Academic transcripts (all education levels)",
  "English proficiency test results",
  "Scholarship essay / personal statement",
  "CV / Résumé (scholarship format)",
  "2–3 letters of recommendation",
  "Passport (valid, with adequate validity)",
  "University offer letter (if applicable)",
  "Financial documents (for need-based awards)",
  "Research proposal (for PhD / fellowship awards)",
  "Portfolio or creative samples (where relevant)",
];

const process = [
  {
    step: 1,
    icon: MessageCircle,
    title: "Free Consultation",
    desc: "Meet with our scholarship specialists to discuss your academic background, study goals, financial position, and preferred destinations.",
  },
  {
    step: 2,
    icon: Search,
    title: "Scholarship Mapping",
    desc: "We identify the scholarships you are realistically eligible for — ranked by funding value, competition level, and alignment with your profile.",
  },
  {
    step: 3,
    icon: Target,
    title: "Application Strategy",
    desc: "We build a personalised scholarship calendar with deadlines, required documents, and a priority order to maximise your chances.",
  },
  {
    step: 4,
    icon: FileText,
    title: "Document & Essay Preparation",
    desc: "Our writers and counselors co-create your scholarship essays, format your CV, and guide your referees — tailored to each funder's expectations.",
  },
  {
    step: 5,
    icon: Send,
    title: "Submission & Follow-Up",
    desc: "Applications are submitted on time and tracked. We manage correspondence with scholarship bodies and handle any additional requirements.",
  },
  {
    step: 6,
    icon: PartyPopper,
    title: "Award Acceptance",
    desc: "Once an award is confirmed, we guide you through the acceptance process, next steps, and connection to visa and pre-departure services.",
  },
];

const faqs = [
  {
    q: "Can I apply for multiple scholarships at the same time?",
    a: "Yes — and we recommend it. Most scholarships are highly competitive, so applying to multiple relevant awards significantly improves your chances of success. We manage timelines and document requirements across all applications simultaneously.",
  },
  {
    q: "Do I need a university offer before applying for a scholarship?",
    a: "It depends on the scholarship. Some government scholarships (like Chevening or Australia Awards) require your application before or during the university admission process. University scholarships, however, typically require or assume an existing offer. We guide you on the correct sequencing for each award.",
  },
  {
    q: "What is the minimum GPA required for scholarships?",
    a: "Requirements vary by scholarship. Prestigious government awards often expect strong academic performance (typically 3.0+ GPA or equivalent), but many scholarships also consider leadership, research, and community contributions alongside academic results.",
  },
  {
    q: "Can working professionals apply for scholarships?",
    a: "Absolutely. Many scholarships — especially at the postgraduate level — actively favour candidates with professional experience. Government scholarships like Chevening specifically target leaders and professionals with demonstrated impact in their field.",
  },
  {
    q: "How long does a scholarship application take to prepare?",
    a: "Typically 4–8 weeks from initial consultation to submission, depending on the complexity of the scholarship and your document readiness. Research fellowship and government scholarship applications may require additional time for proposals and references.",
  },
  {
    q: "What if my scholarship application is unsuccessful?",
    a: "Rejection is part of the process — even strong candidates face it. We will review feedback where available, identify alternative scholarships, and help you reapply in the next intake cycle with a stronger application.",
  },
];

/* ─────────── COMPONENT ─────────── */

export default function ScholarshipSupport() {
  const containerRef = useReveal();

  return (
    <>
      <style>
        {BASE_STYLES +
          `
        .schol-type-card { border-radius:20px; overflow:hidden; border:1px solid rgba(0,0,0,0.07); background:#fff; transition:all .25s; }
        .schol-type-card:hover { box-shadow:0 8px 32px rgba(0,91,143,0.1); transform:translateY(-4px); border-color:rgba(0,91,143,0.2); }
        .schol-type-header { padding:20px 24px; display:flex; align-items:center; gap:12px; }
        .schol-type-body { padding:16px 24px 22px; }

        .schol-table { width:100%; border-collapse:collapse; border-radius:16px; overflow:hidden; border:1px solid rgba(0,91,143,0.1); }
        .schol-table thead tr { background:#005B8F; }
        .schol-table thead th { padding:14px 18px; color:#fff; font-size:12px; font-weight:700; text-align:left; letter-spacing:.06em; text-transform:uppercase; font-family:Lexend,sans-serif; }
        .schol-table tbody tr { border-bottom:1px solid rgba(0,91,143,0.06); transition:background .15s; }
        .schol-table tbody tr:last-child { border-bottom:none; }
        .schol-table tbody tr:hover { background:rgba(0,91,143,0.03); }
        .schol-table tbody td { padding:14px 18px; font-size:14px; color:#374151; font-family:Lexend,sans-serif; }
        .schol-table tbody td:first-child { font-weight:700; color:#0d121b; }
        .schol-badge-pill { display:inline-block; padding:3px 10px; border-radius:20px; font-size:11px; font-weight:700; font-family:Lexend,sans-serif; }

        @media(max-width:768px){ .grid-2{ grid-template-columns:1fr !important; } .grid-3{ grid-template-columns:1fr 1fr !important; } }
        @media(max-width:480px){ .grid-3{ grid-template-columns:1fr !important; } }
        @media(max-width:900px){ .schol-table { font-size:12px; } .schol-table td,.schol-table th { padding:10px 12px; } }
      `}
      </style>
      <div className="srv-page" ref={containerRef}>
        {/* HERO */}
        <PageHero
          badge="Student Services"
          title="Fund Your Future with"
          highlight="Expert Scholarship Support"
          desc="From identifying the right scholarship to writing a winning essay and tracking deadlines — our experienced counselors help Bangladeshi students secure funding at top institutions worldwide."
          blobTop={-100}
          blobRight={-40}
        />

        {/* WHAT WE OFFER */}
        <section className="srv-section">
          <div className="srv-container">
            <SectionHeader
              label="Services"
              title="Comprehensive Scholarship"
              highlight="Support Services"
              body="End-to-end support covering every stage of your scholarship journey — so you can focus on your goals, not the paperwork."
            />
            <div
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

        {/* SCHOLARSHIP TYPES */}
        <section className="srv-section-alt">
          <div className="srv-container">
            <SectionHeader
              label="Scholarship Types"
              title="Types of Scholarships"
              highlight="We Support"
              body="There is a scholarship for every profile — academic excellence, financial need, research potential, or national partnerships. We help you find the right fit."
            />
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3,1fr)",
                gap: 20,
              }}
            >
              {scholarshipTypes.map((s, i) => (
                <div key={i} className="schol-type-card srv-reveal">
                  <div
                    className="schol-type-header"
                    style={{ background: s.color }}
                  >
                    <s.icon size={26} color="#fff" />
                    <h4
                      style={{
                        fontWeight: 700,
                        fontSize: 15,
                        color: "#fff",
                        fontFamily: "Lexend,sans-serif",
                      }}
                    >
                      {s.type}
                    </h4>
                  </div>
                  <div className="schol-type-body">
                    <p className="srv-body" style={{ fontSize: 14 }}>
                      {s.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TOP SCHOLARSHIPS TABLE */}
        <section className="srv-section">
          <div className="srv-container">
            <SectionHeader
              label="Featured Awards"
              title="Top Scholarships for"
              highlight="Bangladeshi Students"
              body="These are some of the most prestigious and accessible fully-funded scholarships available to Bangladeshi applicants each year."
            />
            <div className="srv-reveal" style={{ overflowX: "auto" }}>
              <table className="schol-table">
                <thead>
                  <tr>
                    <th>Scholarship</th>
                    <th>Country</th>
                    <th>Study Level</th>
                    <th>Coverage</th>
                    <th>Typical Deadline</th>
                  </tr>
                </thead>
                <tbody>
                  {topScholarships.map((row, i) => (
                    <tr key={i}>
                      <td>
                        <span
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 8,
                          }}
                        >
                          <Award
                            size={15}
                            color="#005B8F"
                            style={{ flexShrink: 0 }}
                          />
                          {row.name}
                        </span>
                      </td>
                      <td>{row.country}</td>
                      <td>
                        <span
                          className="schol-badge-pill"
                          style={{
                            background: "rgba(0,91,143,0.09)",
                            color: "#005B8F",
                          }}
                        >
                          {row.level}
                        </span>
                      </td>
                      <td>
                        <span
                          className="schol-badge-pill"
                          style={{
                            background: "rgba(22,163,74,0.1)",
                            color: "#166534",
                          }}
                        >
                          {row.coverage}
                        </span>
                      </td>
                      <td style={{ color: "#6b7280" }}>{row.deadline}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <div className="srv-divider" />

        {/* OUR PROCESS */}
        <section className="srv-section-alt">
          <div className="srv-container">
            <SectionHeader
              label="How It Works"
              title="Our 6-Step Scholarship"
              highlight="Application Process"
              body="A structured, transparent process that takes you from profile evaluation to confirmed award — step by step."
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

        {/* ELIGIBILITY + DOCUMENTS */}
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
                icon={CheckCircle} // just the component, no <>
                title="Eligibility Factors We Assess"
                variant="blue"
              >
                <CheckList items={eligibilityFactors} />
              </InfoBox>

              <InfoBox
                icon={File}
                title="Documents You'll Need"
                variant="green"
              >
                <CheckList items={documentsRequired} />
              </InfoBox>
            </div>
          </div>
        </section>

        <div className="srv-divider" />

        {/* TIPS INFOBOX */}
        <section className="srv-section-alt">
          <div className="srv-container">
            <SectionHeader
              label="Expert Tips"
              title="How to Strengthen Your"
              highlight="Scholarship Application"
              body="Small improvements in these key areas can significantly increase your chances of being shortlisted and awarded."
            />
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3,1fr)",
                gap: 20,
              }}
            >
              {[
                {
                  icon: Lightbulb,
                  title: "Start Early",
                  desc: "Top scholarships open 6–12 months before the intake. Starting early gives you time to improve your essays and gather strong references.",
                },
                {
                  icon: Target,
                  title: "Tailor Every Application",
                  desc: "Generic applications rarely succeed. Align your essay, CV, and references to each scholarship's specific values and selection criteria.",
                },
                {
                  icon: Users,
                  title: "Show Leadership & Impact",
                  desc: "Beyond grades, scholarship committees look for candidates who demonstrate community involvement, initiative, and potential for future impact.",
                },
                {
                  icon: BookOpen,
                  title: "Craft a Clear Narrative",
                  desc: "Your essay should tell a compelling story — why this field, why this country, and how this scholarship connects your past to your future goals.",
                },
                {
                  icon: CheckCircle,
                  title: "Prepare for Interviews",
                  desc: "Many scholarships include interviews. We conduct mock interview sessions to help you articulate your goals confidently and authentically.",
                },
                {
                  icon: AlertCircle,
                  title: "Verify All Requirements",
                  desc: "Missing one document can disqualify an otherwise strong application. We conduct a final compliance check before every submission.",
                },
              ].map((t, i) => (
                <IconCard key={i} icon={t.icon} title={t.title} desc={t.desc} />
              ))}
            </div>
          </div>
        </section>

        {/* DESTINATIONS */}
        <section className="srv-section">
          <div className="srv-container">
            <SectionHeader
              label="Destinations"
              title="Countries We Find"
              highlight="Scholarships For"
              body="Our counselors have in-depth knowledge of scholarship landscapes, government award programs, and university funding opportunities across all major study destinations."
              centered
            />
            <CountryTags countries={destinations} />
          </div>
        </section>

        {/* STATS */}
        <StatsStrip
          stats={[
            { value: "500+", label: "Scholarships Tracked" },
            { value: "৳2Cr+", label: "Funding Secured" },
            { value: "15K+", label: "Students Supported" },
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
          title="Ready to Apply for Your Scholarship?"
          desc="Book your free consultation today and let our experts identify the best funding opportunities for your academic profile."
        />
      </div>
    </>
  );
}
