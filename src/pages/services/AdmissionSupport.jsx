import {
  Search,
  FileText,
  PenTool,
  Mail,
  ClipboardList,
  Handshake,
  MessageCircle,
  FlaskConical,
  Target,
  Send,
  PartyPopper,
  School,
  GraduationCap,
  BookOpen,
  Microscope,
  Briefcase,
  HeartPulse,
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
    icon: Search,
    title: "University Shortlisting",
    desc: "Based on your academic profile, budget, and career goals, we curate a personalised shortlist of universities with strong admission prospects.",
  },
  {
    icon: FileText,
    title: "Application Preparation",
    desc: "We prepare all application components — forms, academic documents, work experience records — with meticulous attention to each institution's requirements.",
  },
  {
    icon: PenTool,
    title: "SOP & Essay Writing",
    desc: "Our expert writers craft compelling Statements of Purpose and personal essays that reflect your unique story and align with each institution's expectations.",
  },
  {
    icon: Mail,
    title: "Recommendation Letter Guidance",
    desc: "We advise you on selecting the right referees and provide structured guidance so your recommenders write letters that strengthen your application.",
  },
  {
    icon: ClipboardList,
    title: "Application Submission",
    desc: "We submit your application on time, track acknowledgement receipts, and follow up with universities to ensure your file is complete and progressing.",
  },
  {
    icon: Handshake,
    title: "Offer Letter Negotiation",
    desc: "When multiple offers arrive, we help you evaluate them against your goals and negotiate scholarship conditions, deferral requests, or course modifications.",
  },
];

const profileAssessment = [
  "Academic transcripts evaluation",
  "English proficiency test score review (IELTS, TOEFL, PTE)",
  "Work experience and extracurriculars assessment",
  "Budget and scholarship potential mapping",
  "Career goal alignment analysis",
  "Country and program suitability matching",
];

const documentsRequired = [
  "Academic transcripts (all levels)",
  "English proficiency test scores",
  "Passport (valid)",
  "Curriculum Vitae (CV/Résumé)",
  "Statement of Purpose (SOP)",
  "Letters of Recommendation (2–3)",
  "Work experience certificates (if applicable)",
  "Standardised test scores (GRE/GMAT/SAT where required)",
  "Financial documents (bank statements)",
  "Portfolio (for creative/design programs)",
];

const process = [
  {
    step: 1,
    icon: MessageCircle,
    title: "Free Initial Consultation",
    desc: "Book a session with our expert counselors to discuss your academic background, career goals, preferred countries, and budget.",
  },
  {
    step: 2,
    icon: FlaskConical,
    title: "Profile Evaluation",
    desc: "We conduct a thorough assessment of your academic record, test scores, and extracurriculars to identify your strengths and admission prospects.",
  },
  {
    step: 3,
    icon: Target,
    title: "University Shortlisting",
    desc: "A curated list of universities — target, moderate, and safe — is prepared based on your profile, program interest, and financial capacity.",
  },
  {
    step: 4,
    icon: FileText,
    title: "Application Preparation",
    desc: "Documents, forms, SOPs, and recommendation letters are prepared, reviewed, and refined by our specialists for each specific institution.",
  },
  {
    step: 5,
    icon: Send,
    title: "Submission & Follow-Up",
    desc: "Applications are submitted before deadlines. We track acknowledgements, respond to university queries, and manage your application portal.",
  },
  {
    step: 6,
    icon: PartyPopper,
    title: "Offer Acceptance & Enrolment",
    desc: "Once offers arrive, we guide your acceptance decision, help with fee payments, and connect you to pre-departure services.",
  },
];

const levels = [
  {
    icon: School,
    level: "Foundation / Pathway",
    desc: "Certificate programs that bridge the gap between local qualifications and direct university entry. Ideal for students needing academic or language uplift.",
  },
  {
    icon: GraduationCap,
    level: "Undergraduate (Bachelor's)",
    desc: "Full degree programs across all disciplines. We guide subject combinations, entry requirements, and campus life expectations for each country.",
  },
  {
    icon: BookOpen,
    level: "Postgraduate (Master's)",
    desc: "Specialised one to two year programs with strong career outcomes. SOP and research statement quality is critical — we excel at both.",
  },
  {
    icon: Microscope,
    level: "Doctorate (PhD)",
    desc: "Research-based programs requiring a research proposal. We match you with supervisors and guide your proposal writing for maximum acceptance chances.",
  },
  {
    icon: Briefcase,
    level: "MBA Programs",
    desc: "Business and management degrees with specific GMAT/GRE requirements. We have strong relationships with leading business schools globally.",
  },
  {
    icon: HeartPulse,
    level: "Medicine & Health Sciences",
    desc: "Highly competitive programs with rigorous entry requirements. We provide specialist guidance for medicine, nursing, dentistry, and allied health.",
  },
];

const faqs = [
  {
    q: "How many universities should I apply to?",
    a: "We recommend a balanced list of 6–10 universities: 2–3 reach schools, 3–4 match schools, and 2–3 safety schools. This maximises your chances of receiving strong offers while managing application costs.",
  },
  {
    q: "Do you guarantee university admission?",
    a: "No. Our role is to prepare the strongest possible application on your behalf. Final admission decisions rest entirely with the university. We do, however, have a strong track record of successful placements at competitive institutions.",
  },
  {
    q: "Can you help with scholarship applications?",
    a: "Yes. We identify merit-based, need-based, and country-specific scholarships relevant to your profile and assist with the scholarship application process, including essays and supporting documents.",
  },
  {
    q: "How long does the application process take?",
    a: "Typically 4–8 weeks from initial consultation to application submission, depending on the number of universities applied to and the completeness of your documents. For postgraduate research programs, allow additional time for research proposals.",
  },
  {
    q: "What if I receive a conditional offer?",
    a: "Conditional offers typically require you to meet specific conditions such as a minimum IELTS score or final examination results. We guide you through fulfilling and documenting these conditions for the offer to become unconditional.",
  },
  {
    q: "Can you help with deferred entry or late applications?",
    a: "Yes. Some universities accept late applications or offer deferred entry for the next intake. We advise on the best strategy for your situation and help secure the most suitable option.",
  },
];

export default function AdmissionSupport() {
  const containerRef = useReveal();

  return (
    <>
      <style>
        {BASE_STYLES +
          `
        .level-card { border-radius:20px; overflow:hidden; border:1px solid var(--srv-border); background:var(--srv-bg-card); transition:all .25s; }
        .level-card:hover { box-shadow:0 8px 32px rgba(0,91,143,0.1); transform:translateY(-4px); border-color:rgba(0,91,143,0.2); }
        .dark .level-card:hover { border-color:rgba(74,131,243,0.3); }
        .level-card-header { padding:20px 24px; background:#005B8F; display:flex; align-items:center; gap:12px; }
        .level-card-body { padding:20px 24px; }
        @media(max-width:768px){ .grid-2{ grid-template-columns:1fr !important; } .grid-3{ grid-template-columns:1fr 1fr !important; } }
        @media(max-width:480px){ .grid-3{ grid-template-columns:1fr !important; } }
      `}
      </style>
      <div className="srv-page" ref={containerRef}>
        <PageHero
          badge="Student Services"
          title="Unlock Global Opportunities with"
          highlight="Expert Admission Support"
          desc="From university selection to application submission and enrolment — our experienced counselors guide Bangladeshi students to their dream institutions worldwide."
          blobTop={-100}
          blobRight={-40}
        />

        {/* What we offer */}
        <section className="srv-section">
          <div className="srv-container">
            <SectionHeader
              label="Services"
              title="Comprehensive Admission"
              highlight="Support Services"
              body="End-to-end support covering every aspect of your university application — so nothing is left to chance."
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

        {/* Study levels */}
        <section className="srv-section-alt">
          <div className="srv-container">
            <SectionHeader
              label="Study Levels"
              title="Programs We Support"
              highlight="Across All Levels"
              body="Whether you're applying for a foundation pathway or a doctoral research program, we have specialist counselors for every academic level."
            />
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3,1fr)",
                gap: 20,
              }}
            >
              {levels.map((l, i) => (
                <div key={i} className="level-card srv-reveal">
                  <div className="level-card-header">
                    <l.icon size={28} color="#fff" />
                    <h4
                      style={{
                        fontWeight: 700,
                        fontSize: 15,
                        color: "#fff",
                        fontFamily: "Lexend,sans-serif",
                      }}
                    >
                      {l.level}
                    </h4>
                  </div>
                  <div className="level-card-body">
                    <p className="srv-body" style={{ fontSize: 14 }}>
                      {l.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our process */}
        <section className="srv-section">
          <div className="srv-container">
            <SectionHeader
              label="How It Works"
              title="Our 6-Step Admission"
              highlight="Support Process"
              body="A structured, transparent process that takes you from profile evaluation to enrolled student — step by step."
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

        <div className="srv-divider" />

        {/* Profile evaluation + Documents */}
        <section className="srv-section-alt">
          <div className="srv-container">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 32,
              }}
            >
              <InfoBox
                icon={Microscope}
                title="Profile Evaluation Covers"
                variant="blue"
              >
                <CheckList items={profileAssessment} />
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

        {/* Destinations */}
        <section className="srv-section">
          <div className="srv-container">
            <SectionHeader
              label="Destinations"
              title="Countries We Support"
              highlight="Admissions For"
              body="Our counselors have in-depth knowledge of admissions requirements, timelines, and scholarship opportunities across all major study destinations."
              centered
            />
            <CountryTags countries={destinations} />
          </div>
        </section>

        {/* Stats */}
        <StatsStrip
          stats={[
            { value: "500+", label: "Partner Universities" },
            { value: "15K+", label: "Students Placed" },
            { value: "98%", label: "Visa Success Rate" },
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
          title="Ready to Start Your Admission Journey?"
          desc="Book your free consultation today and let our experts craft the perfect application strategy for your academic future."
        />
      </div>
    </>
  );
}
