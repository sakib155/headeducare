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
  Banknote,
  FileText,
  ShieldCheck,
  Search,
  Calculator,
  Users,
  AlertCircle,
  CheckCircle,
  Clock,
  Globe,
  PieChart,
  Briefcase,
  Home,
  TrendingUp,
  FileCheck,
  HelpCircle,
  PenTool,
} from "lucide-react";

/* ─────────────── DATA ─────────────── */

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
    title: "Financial Requirement Analysis",
    desc: "We calculate the exact funds required for tuition and living costs based on the specific visa rules of your destination country.",
  },
  {
    icon: FileText,
    title: "Bank Statement Structuring",
    desc: "Guidance on maintaining the required 'holding period' (e.g., 28 days for UK, 3 months for Australia) to ensure your statements are valid.",
  },
  {
    icon: Briefcase,
    title: "Sponsorship Documentation",
    desc: "Preparation of affidavits of support, sponsor employment letters, and business documents to prove legitimate income sources.",
  },
  {
    icon: PieChart,
    title: "Source of Funds Explanation",
    desc: "Drafting clear explanatory letters that trace large deposits or irregular transactions to satisfy strict visa officer scrutiny.",
  },
  {
    icon: Calculator,
    title: "Loan & Asset Valuation",
    desc: "Assistance with education loan sanction letters and proper valuation of property assets where permitted as supplementary proof.",
  },
  {
    icon: ShieldCheck,
    title: "Pre-Submission Audit",
    desc: "A final rigorous check of all financial documents against current embassy checklists to prevent rejection due to technical errors.",
  },
];

const documentTypes = [
  {
    icon: Banknote,
    title: "Personal/Sponsor Savings",
    desc: "The primary proof of funds. We ensure your bank certificates and statements meet the specific format and age requirements of the embassy.",
    color: "#005B8F",
  },
  {
    icon: TrendingUp,
    title: "Income Tax Returns (ITR)",
    desc: "Critical for verifying the sponsor's ability to generate funds. We help organize IT acknowledgments and salary slips for consistency.",
    color: "#16a34a",
  },
  {
    icon: Home,
    title: "Property Valuation",
    desc: "While not always liquid, property deeds and valuations strengthen your tie to Bangladesh and show overall family financial stability.",
    color: "#9333ea",
  },
  {
    icon: FileCheck,
    title: "Education Loan Papers",
    desc: "For students using bank loans, we ensure the sanction letter clearly states disbursement terms and meets university/visa conditions.",
    color: "#d97706",
  },
  {
    icon: Briefcase,
    title: "Business Documents",
    desc: "For self-employed sponsors, we organize trade licenses, MOA/AOA, and bank solvency certificates to prove business legitimacy.",
    color: "#dc2626",
  },
  {
    icon: Users,
    title: "Affidavit of Support",
    desc: "Legal notarized documents where sponsors formally declare their commitment to fund your education and living expenses abroad.",
    color: "#4A83F3",
  },
];

const process = [
  {
    step: 1,
    icon: Calculator,
    title: "Fund Assessment",
    desc: "We determine the total amount needed based on course duration, location, and dependent status (if applicable).",
  },
  {
    step: 2,
    icon: Search,
    title: "Document Collection",
    desc: "You provide raw financial records; we identify gaps, missing dates, or inconsistent names that need correction.",
  },
  {
    step: 3,
    icon: FileText,
    title: "Structuring & Formatting",
    desc: "We guide you on how to present the data—translating local bank formats into internationally accepted standards.",
  },
  {
    step: 4,
    icon: PenTool,
    title: "Explanatory Letters",
    desc: "Our team drafts professional cover letters explaining complex financial histories or large recent deposits.",
  },
  {
    step: 5,
    icon: ShieldCheck,
    title: "Compliance Check",
    desc: "Every document is cross-referenced with the latest visa financial guidelines for your specific country.",
  },
  {
    step: 6,
    icon: CheckCircle,
    title: "Final Compilation",
    desc: "All files are indexed, labeled, and compiled into a single, easy-to-review package for submission.",
  },
];

const eligibilityItems = [
  "Funds must be 'liquid' (cash in bank) for most countries",
  "Sponsor must have a steady income history (usually 1-2 years)",
  "Source of funds must be legal and traceable",
  "Bank statements should show consistent balance, not just sudden deposits",
  "Sponsor must be a first-degree relative (parents) for best acceptance",
  "If using non-parent sponsors, strong legal justification is required",
  "Property assets alone are rarely sufficient for visa approval",
  "Loan sanction letters must be unconditional or clearly conditional",
];

const commonMistakes = [
  "Submitting statements without the required 'holding period'",
  "Large unexplained cash deposits shortly before application",
  "Mismatched names between bank accounts and passports",
  "Using unofficial translations for bank documents",
  "Ignoring currency conversion rates in calculation",
  "Providing outdated bank solvency certificates",
  "Failing to explain the relationship with the sponsor clearly",
  "Over-relying on property valuation instead of cash savings",
];

const faqs = [
  {
    q: "How much money do I need to show for a student visa?",
    a: "This varies by country. For example, the UK requires proof of tuition + £1,334/month (London) for up to 9 months. Australia requires tuition + travel + living costs (approx AUD 29,710/year). We calculate the exact figure for your specific case.",
  },
  {
    q: "Can my uncle or cousin sponsor my education?",
    a: "Most countries prefer parents as sponsors. If a parent cannot sponsor, an uncle or cousin can, but it requires additional legal documentation (affidavits) and a stronger explanation of why they are funding your education. We help structure this.",
  },
  {
    q: "What is the 'holding period' for bank funds?",
    a: "Visa officers want to see that the money has been in the account for a specific time to ensure it wasn't borrowed just for the visa. The UK typically requires 28 consecutive days; Australia and Canada often look for 3-4 months of history.",
  },
  {
    q: "Do I need to show property papers?",
    a: "Property papers are secondary evidence. They show your family's ties to Bangladesh and overall wealth, but they are not 'liquid' funds. You must primarily show cash in bank accounts or approved education loans.",
  },
  {
    q: "Can I use an education loan for financial proof?",
    a: "Yes, most countries accept education loans from recognized banks. The loan sanction letter must clearly state the amount, the borrower's name, and that it is for study purposes. We review these letters for compliance.",
  },
  {
    q: "What if I have a large recent deposit in my account?",
    a: "Sudden large deposits raise red flags. You must provide a 'source of funds' explanation and evidence (e.g., sale deed of property, fixed deposit maturity, bonus letter) to prove the money is yours and legally obtained.",
  },
];

/* ─────────────── PAGE COMPONENT ─────────────── */

export default function FinancialDocumentation() {
  const containerRef = useReveal();

  return (
    <>
      <style>
        {BASE_STYLES +
          `
          .doc-type-card {
            border-radius: 20px;
            overflow: hidden;
            border: 1px solid var(--srv-border);
            background: var(--srv-bg-card);
            transition: all .25s;
          }
          .doc-type-card:hover {
            box-shadow: 0 12px 40px rgba(0,91,143,0.1);
            transform: translateY(-4px);
          }
          .doc-type-header {
            padding: 20px 24px;
            display: flex;
            align-items: center;
            gap: 12px;
            border-bottom: 1px solid var(--srv-border);
          }
          .doc-type-body {
            padding: 20px 24px;
          }
          @media(max-width:768px){
            .grid-2{ grid-template-columns: 1fr !important; }
            .grid-3{ grid-template-columns: 1fr 1fr !important; }
          }
          @media(max-width:480px){
            .grid-3{ grid-template-columns: 1fr !important; }
          }
        `}
      </style>

      <div className="srv-page" ref={containerRef}>
        {/* ── HERO ── */}
        <PageHero
          badge="Student Services"
          title="Secure Your Visa with"
          highlight="Perfect Financial Proof"
          desc="Financial documentation is the #1 reason for student visa rejections. Head Edu Care ensures your bank statements, sponsorship papers, and fund sources are structured perfectly to meet strict embassy requirements."
          blobTop={-60}
          blobRight={-80}
        />

        {/* ── SERVICES GRID ── */}
        <section className="srv-section">
          <div className="srv-container">
            <SectionHeader
              label="Our Expertise"
              title="Comprehensive Financial"
              highlight="Documentation Support"
              body="We don't just collect papers; we structure your financial profile to tell a clear, credible story of stability and legitimacy."
            />
            <div
              className="grid-3"
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

        {/* ── DOCUMENT TYPES ── */}
        <section className="srv-section-alt">
          <div className="srv-container">
            <SectionHeader
              label="Key Documents"
              title="Essential Financial"
              highlight="Evidence Types"
              body="Different countries require different combinations of financial proof. We help you prepare each type according to international standards."
            />
            <div
              className="grid-3"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3,1fr)",
                gap: 20,
              }}
            >
              {documentTypes.map((d, i) => {
                const Icon = d.icon;
                return (
                  <div key={i} className="doc-type-card srv-reveal">
                    <div
                      className="doc-type-header"
                      style={{ background: `${d.color}10` }}
                    >
                      <div
                        style={{
                          width: 40,
                          height: 40,
                          borderRadius: 10,
                          background: `${d.color}20`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        <Icon size={20} color={d.color} />
                      </div>
                      <h4
                        style={{
                          fontWeight: 700,
                          fontSize: 14,
                          color: "var(--srv-text-primary)",
                          fontFamily: "Lexend,sans-serif",
                          lineHeight: 1.3,
                        }}
                      >
                        {d.title}
                      </h4>
                    </div>
                    <div className="doc-type-body">
                      <p className="srv-body" style={{ fontSize: 13 }}>
                        {d.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── PROCESS ── */}
        <section className="srv-section">
          <div className="srv-container">
            <SectionHeader
              label="How It Works"
              title="Our 6-Step Financial"
              highlight="Verification Process"
              body="A meticulous approach to ensuring every Taka, Dollar, or Pound is accounted for and documented correctly."
            />
            <div
              className="grid-3"
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
              className="grid-3"
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

        {/* ── DO & DON'T INFO BOXES ── */}
        <section className="srv-section-alt">
          <div className="srv-container">
            <SectionHeader
              label="Best Practices"
              title="Financial Documentation"
              highlight="Dos and Don'ts"
              body="Small errors in financial papers can lead to immediate visa refusal. Follow these guidelines strictly."
            />
            <div
              className="grid-2"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 32,
              }}
            >
              <InfoBox
                icon={CheckCircle}
                title="Do These Things"
                variant="green"
              >
                <CheckList items={eligibilityItems} />
              </InfoBox>
              <InfoBox
                icon={AlertCircle}
                title="Avoid These Mistakes"
                variant="amber"
              >
                <CheckList items={commonMistakes} />
              </InfoBox>
            </div>
          </div>
        </section>

        {/* ── DESTINATIONS ── */}
        <section className="srv-section">
          <div className="srv-container">
            <SectionHeader
              label="Global Standards"
              title="Financial Rules By"
              highlight="Destination"
              body="Every country has unique financial thresholds and evidence requirements. Our counselors are experts in the specific rules for each destination."
              centered
            />
            <CountryTags countries={destinations} />
          </div>
        </section>

        {/* ── STATS ── */}
        <StatsStrip
          stats={[
            { value: "98%", label: "Visa Success Rate" },
            { value: "15K+", label: "Students Placed" },
            { value: "100%", label: "Document Accuracy" },
            { value: "12+", label: "Years Experience" },
          ]}
        />

        {/* ── FAQ ── */}
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

        {/* ── CTA BANNER ── */}
        <CtaBanner
          title="Confused About Financial Requirements?"
          desc="Don't risk a visa rejection due to paperwork errors. Get a free financial document assessment from our experts today."
          label="Book a Free Consultation"
          link="/freeconsulation"
        />
      </div>
    </>
  );
}
