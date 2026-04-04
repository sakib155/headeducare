import { Calendar, Mail, MailCheck, MapPin, RefreshCcw } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";

const sections = [
  {
    id: "acceptance",
    icon: "check",
    title: "Acceptance of Terms",
    content: [
      {
        subtitle: "Agreement to Terms",
        text: "By accessing our website at headeducare.com, booking a consultation, or using any of our education and migration consulting services, you confirm that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you must discontinue use of our services immediately.",
      },
      {
        subtitle: "Eligibility",
        text: "You must be at least 18 years of age to use our services independently. Minors may use our services only with the consent and supervision of a parent or legal guardian, who agrees to be bound by these terms on the minor's behalf.",
      },
      {
        subtitle: "Modifications",
        text: "Head Edu Care reserves the right to modify these Terms of Service at any time. Updated terms will be posted on our website with a revised effective date. Your continued use of our services after any changes constitutes your acceptance of the new terms.",
      },
    ],
  },
  {
    id: "services-desc",
    icon: "briefcase",
    title: "Description of Services",
    content: [
      {
        subtitle: "Consulting Services",
        text: "Head Edu Care provides education and migration consulting services including, but not limited to: university and institution selection guidance, application preparation and submission support, visa documentation assistance, English language test preparation (IELTS, TOEFL, PTE, GRE, GMAT, SAT), scholarship identification and application support, career counseling, and migration pathway advisory.",
      },
      {
        subtitle: "Nature of Advisory",
        text: "Our services are advisory in nature. While we provide expert guidance based on our knowledge and experience, we do not guarantee admission to any specific university, approval of any visa application, or specific outcomes of any migration process. Final decisions rest with the receiving institution, embassy, or immigration authority.",
      },
      {
        subtitle: "Third-Party Services",
        text: "Certain services may involve third-party providers including universities, embassy offices, testing centres, and financial institutions. Head Edu Care is not responsible for the actions, decisions, or policies of these third parties.",
      },
    ],
  },
  {
    id: "client-obligations",
    icon: "person",
    title: "Client Obligations",
    content: [
      {
        subtitle: "Accuracy of Information",
        text: "You agree to provide truthful, accurate, complete, and current information at all times. Providing false, misleading, or fraudulent information — including in visa applications, university applications, or financial documents — may result in immediate termination of our services, forfeiture of fees paid, and referral to the relevant authorities.",
      },
      {
        subtitle: "Cooperation & Responsiveness",
        text: "Timely responses and active cooperation are essential for successful outcomes. You agree to respond to requests for documents and information within reasonable timeframes communicated by your assigned counselor. Delays caused by client non-responsiveness do not constitute a failure of service by Head Edu Care.",
      },
      {
        subtitle: "Compliance with Laws",
        text: "You are responsible for complying with all applicable laws and regulations of Bangladesh and your intended destination country, including immigration laws, tax obligations, and academic integrity standards.",
      },
    ],
  },
  {
    id: "fees-payment",
    icon: "card",
    title: "Fees & Payment",
    content: [
      {
        subtitle: "Service Fees",
        text: "Fees for our services are communicated at the time of engagement and vary based on the service package selected. All fees are quoted in Bangladeshi Taka (BDT) unless otherwise specified. Fees must be paid in accordance with the payment schedule agreed upon at the time of service commencement.",
      },
      {
        subtitle: "Non-Refundable Fees",
        text: "Certain fees, including initial consultation fees and document processing fees, are non-refundable once the relevant services have been rendered. Please refer to our Refund Policy for a detailed breakdown of refundable and non-refundable components.",
      },
      {
        subtitle: "Late Payments",
        text: "Failure to make timely payments may result in suspension or termination of services. Head Edu Care reserves the right to charge a late payment fee of 2% per month on outstanding balances, and to withhold documents or deliverables until outstanding amounts are settled.",
      },
    ],
  },
  {
    id: "intellectual-property",
    icon: "book",
    title: "Intellectual Property",
    content: [
      {
        subtitle: "Ownership",
        text: "All content on our website — including text, graphics, logos, icons, images, audio clips, and software — is the property of Head Edu Care or its content suppliers and is protected by applicable intellectual property laws. Unauthorised reproduction, distribution, or modification of any content is prohibited.",
      },
      {
        subtitle: "Limited Licence",
        text: "We grant you a limited, non-exclusive, non-transferable licence to access and use our website content for personal, non-commercial purposes only. This licence does not include the right to download or copy content for commercial purposes, or to use any data mining or scraping tools.",
      },
    ],
  },
  {
    id: "limitation-liability",
    icon: "shield",
    title: "Limitation of Liability",
    content: [
      {
        subtitle: "No Guarantee of Outcomes",
        text: "Head Edu Care does not guarantee visa approvals, university admissions, scholarship awards, or any specific immigration outcomes. The decisions of third-party institutions and authorities are beyond our control, and we accept no liability for their decisions regardless of the quality of documentation or preparation provided.",
      },
      {
        subtitle: "Maximum Liability",
        text: "To the maximum extent permitted by applicable law, Head Edu Care's total liability to you for any claim arising out of or in connection with our services shall not exceed the total fees paid by you for the specific service giving rise to the claim in the twelve months preceding the claim.",
      },
      {
        subtitle: "Excluded Losses",
        text: "We shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, loss of opportunity, loss of data, or loss of goodwill arising out of or in connection with your use of our services.",
      },
    ],
  },
  {
    id: "termination",
    icon: "logout",
    title: "Termination",
    content: [
      {
        subtitle: "By Client",
        text: "You may terminate your engagement with Head Edu Care at any time by providing written notice. Termination does not entitle you to a refund of fees already paid for services rendered. Please refer to our Refund Policy for applicable refunds on unused services.",
      },
      {
        subtitle: "By Head Edu Care",
        text: "We reserve the right to suspend or terminate your engagement without notice if you breach any provision of these Terms, provide fraudulent information, engage in unlawful conduct, or if we determine that continuing the engagement would expose us to legal, reputational, or regulatory risk.",
      },
    ],
  },
  {
    id: "governing-law",
    icon: "gavel",
    title: "Governing Law & Disputes",
    content: [
      {
        subtitle: "Jurisdiction",
        text: "These Terms of Service shall be governed by and construed in accordance with the laws of the People's Republic of Bangladesh. Any disputes arising out of or in connection with these terms shall be subject to the exclusive jurisdiction of the courts of Dhaka, Bangladesh.",
      },
      {
        subtitle: "Dispute Resolution",
        text: "Before initiating any formal legal proceedings, you agree to first attempt to resolve any dispute informally by contacting Head Edu Care in writing and allowing 30 days for a response. Both parties commit to engaging in good faith negotiation before escalating to formal dispute resolution.",
      },
    ],
  },
];

const iconPaths = {
  check:
    "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z",
  briefcase:
    "M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2zM16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2",
  person:
    "M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8z",
  card: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z",
  book: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
  shield: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
  logout:
    "M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1",
  gavel: "M3 21l7-7M6 6l1.5-1.5 9 9L15 15l6 6M9 3l1.5 1.5-9 9L0 12",
};

function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (e) => e.isIntersecting && e.target.classList.add("ts-visible"),
        ),
      { threshold: 0.08 },
    );
    const el = ref.current;
    if (el)
      el.querySelectorAll(".ts-reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return ref;
}

export default function TermsServices() {
  const [activeSection, setActiveSection] = useState(sections[0].id);
  const containerRef = useReveal();

  useEffect(() => {
    const handleScroll = () => {
      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (el && el.getBoundingClientRect().top <= 140) setActiveSection(s.id);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) =>
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <>
      <style>{`
        .ts-reveal { opacity:0; transform:translateY(18px); transition:opacity .7s ease,transform .7s ease; }
        .ts-reveal.ts-visible { opacity:1; transform:none; }
        .ts-nav-link { display:flex; align-items:center; gap:10px; padding:10px 14px; border-radius:10px; cursor:pointer; transition:all .2s; font-size:13px; font-family:"Lexend",sans-serif; font-weight:400; color:#6b7280; border:none; background:none; text-align:left; width:100%; }
        .ts-nav-link:hover { background:rgba(0,91,143,0.06); color:#005B8F; }
        .ts-nav-link.active { background:rgba(0,91,143,0.1); color:#005B8F; font-weight:600; }
        .ts-nav-link.active .ts-dot { background:#005B8F; }
        .ts-dot { width:6px; height:6px; border-radius:50%; background:#d1d5db; flex-shrink:0; transition:background .2s; }
        .ts-section { scroll-margin-top:100px; }
        .ts-card { background:#f6f6f8; border:1px solid rgba(0,0,0,0.06); border-radius:16px; padding:28px 32px; margin-bottom:16px; transition:box-shadow .2s; }
        .ts-card:hover { box-shadow:0 4px 20px rgba(0,91,143,0.08); }
        @media(max-width:1024px){ .ts-sidebar{ display:none; } }
        @media(min-width:1024px){ .ts-mobile-toc{ display:none; } }
      `}</style>

      <div ref={containerRef}>
        {/* Hero */}
        <section
          className="relative py-20 lg:py-28 overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg,rgba(0,91,143,0.05) 0%,rgba(74,131,243,0.03) 100%)",
          }}
        >
          <div
            className="absolute bottom-0 left-0 w-96 h-96 rounded-full"
            style={{ background: "rgba(0,91,143,0.06)", filter: "blur(80px)" }}
          />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl ts-reveal">
              <div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6"
                style={{ background: "rgba(0,91,143,0.1)", color: "#005B8F" }}
              >
                <span
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: "#005B8F",
                    flexShrink: 0,
                    display: "inline-block",
                  }}
                />
                Legal Document
              </div>
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-6"
                style={{ color: "#0d121b", fontFamily: "Lexend, sans-serif" }}
              >
                Terms of <span style={{ color: "#005B8F" }}>Service</span>
              </h1>
              <p
                className="text-lg leading-relaxed mb-6"
                style={{
                  color: "#6b7280",
                  fontFamily: "Lexend, sans-serif",
                  fontWeight: 300,
                }}
              >
                Please read these Terms of Service carefully before using Head
                Edu Care's website or engaging our consulting services. These
                terms form a legally binding agreement between you and Head Edu
                Care.
              </p>
              <div
                className="flex flex-wrap gap-6 text-sm"
                style={{ color: "#6b7280", fontFamily: "Lexend, sans-serif" }}
              >
                <span className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" /> Effective: January 1, 2025
                </span>
                <span className="flex items-center gap-2">
                  <RefreshCcw className="h-4 w-4" /> Last Updated: March 15,
                  2025
                </span>
                <span className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" /> Jurisdiction: Bangladesh
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Main */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex gap-12">
            {/* Sidebar */}
            <aside className="ts-sidebar w-72 flex-shrink-0">
              <div
                className="sticky top-24 bg-white border rounded-2xl p-5"
                style={{ borderColor: "rgba(0,0,0,0.07)" }}
              >
                <p
                  className="text-xs font-bold uppercase tracking-widest mb-4 px-2"
                  style={{ color: "#005B8F", fontFamily: "Lexend, sans-serif" }}
                >
                  Contents
                </p>
                {sections.map((s) => (
                  <button
                    key={s.id}
                    className={`ts-nav-link ${activeSection === s.id ? "active" : ""}`}
                    onClick={() => scrollTo(s.id)}
                  >
                    <span className="ts-dot" />
                    {s.title}
                  </button>
                ))}
                <div
                  style={{
                    height: 1,
                    background: "rgba(0,0,0,0.06)",
                    margin: "16px 0",
                  }}
                />
                <div className="px-2">
                  <p
                    className="text-xs font-bold mb-2"
                    style={{
                      color: "#0d121b",
                      fontFamily: "Lexend, sans-serif",
                    }}
                  >
                    Legal Queries?
                  </p>
                  <p
                    className="text-xs leading-relaxed"
                    style={{
                      color: "#6b7280",
                      fontFamily: "Lexend, sans-serif",
                    }}
                  >
                    <a
                      href="mailto:info@headeducare.com"
                      style={{ color: "#005B8F", fontWeight: 600 }}
                    >
                      info@headeducare.com
                    </a>
                  </p>
                </div>
              </div>
            </aside>

            {/* Content */}
            <div className="flex-1 min-w-0">
              {/* Mobile TOC */}
              <div
                className="ts-mobile-toc bg-white border rounded-2xl p-5 mb-10"
                style={{ borderColor: "rgba(0,0,0,0.07)" }}
              >
                <p
                  className="text-xs font-bold uppercase tracking-widest mb-4"
                  style={{ color: "#005B8F", fontFamily: "Lexend, sans-serif" }}
                >
                  Jump to section
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {sections.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => scrollTo(s.id)}
                      className="text-left text-xs px-3 py-2 rounded-lg"
                      style={{
                        color: "#6b7280",
                        fontFamily: "Lexend, sans-serif",
                        background: "#f6f6f8",
                      }}
                    >
                      {s.title}
                    </button>
                  ))}
                </div>
              </div>

              {/* Important notice banner */}
              <div
                className="ts-reveal rounded-2xl p-6 mb-10 flex gap-4 items-start"
                style={{
                  background: "rgba(234,179,8,0.06)",
                  border: "1px solid rgba(234,179,8,0.2)",
                }}
              >
                <span style={{ fontSize: 24, flexShrink: 0 }}>⚠️</span>
                <div>
                  <p
                    className="font-bold text-sm mb-1"
                    style={{
                      color: "#92400e",
                      fontFamily: "Lexend, sans-serif",
                    }}
                  >
                    Important Notice
                  </p>
                  <p
                    className="text-sm leading-relaxed"
                    style={{
                      color: "#78350f",
                      fontFamily: "Lexend, sans-serif",
                      fontWeight: 300,
                    }}
                  >
                    These terms constitute a legally binding agreement. By
                    engaging our services, you confirm you have read and
                    understood all provisions. If you have questions, please
                    contact us before proceeding.
                  </p>
                </div>
              </div>

              {sections.map((section, idx) => (
                <div
                  key={section.id}
                  id={section.id}
                  className="ts-section ts-reveal"
                  style={{ marginBottom: 56 }}
                >
                  <div className="flex items-center gap-4 mb-8">
                    <div
                      style={{
                        width: 48,
                        height: 48,
                        background: "rgba(0,91,143,0.08)",
                        borderRadius: 14,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        style={{
                          width: 22,
                          height: 22,
                          stroke: "#005B8F",
                          fill: "none",
                          strokeWidth: 1.8,
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                        }}
                      >
                        <path d={iconPaths[section.icon] || iconPaths.check} />
                      </svg>
                    </div>
                    <div>
                      <p
                        className="text-xs font-bold uppercase tracking-widest mb-1"
                        style={{
                          color: "#005B8F",
                          fontFamily: "Lexend, sans-serif",
                        }}
                      >
                        Section {String(idx + 1).padStart(2, "0")}
                      </p>
                      <h2
                        className="text-2xl font-black"
                        style={{
                          color: "#0d121b",
                          fontFamily: "Lexend, sans-serif",
                        }}
                      >
                        {section.title}
                      </h2>
                    </div>
                  </div>

                  {section.content.map((item, j) => (
                    <div key={j} className="ts-card">
                      <p
                        className="text-sm font-bold mb-2"
                        style={{
                          color: "#005B8F",
                          fontFamily: "Lexend, sans-serif",
                        }}
                      >
                        {item.subtitle}
                      </p>
                      <p
                        className="text-sm leading-relaxed"
                        style={{
                          color: "#4b5563",
                          fontFamily: "Lexend, sans-serif",
                          fontWeight: 300,
                          lineHeight: 1.75,
                        }}
                      >
                        {item.text}
                      </p>
                    </div>
                  ))}

                  {idx < sections.length - 1 && (
                    <div
                      style={{
                        height: 1,
                        background: "rgba(0,91,143,0.08)",
                        margin: "40px 0",
                      }}
                    />
                  )}
                </div>
              ))}

              {/* Footer note */}
              <div
                className="ts-reveal rounded-2xl p-8"
                style={{
                  background: "rgba(0,91,143,0.05)",
                  border: "1px solid rgba(0,91,143,0.12)",
                }}
              >
                <h3
                  className="text-lg font-bold mb-2"
                  style={{ color: "#0d121b", fontFamily: "Lexend, sans-serif" }}
                >
                  Have questions about these terms?
                </h3>
                <p
                  className="text-sm leading-relaxed mb-4"
                  style={{
                    color: "#6b7280",
                    fontFamily: "Lexend, sans-serif",
                    fontWeight: 300,
                  }}
                >
                  Our team is happy to clarify any provisions before you engage
                  our services.
                </p>
                <div style={{ fontFamily: "Lexend, sans-serif" }}>
                  <span
                    style={{ color: "#005B8F", fontWeight: 600 }}
                    className="flex items-center gap-2"
                  >
                    <MailCheck className="h-4 w-4" /> info@headeducare.com
                  </span>

                  <span
                    style={{ color: "#6b7280" }}
                    className="flex items-center gap-2"
                  >
                    <MapPin className="h-4 w-4" /> 44/16 West Panthapath, Dhaka
                    1205
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
