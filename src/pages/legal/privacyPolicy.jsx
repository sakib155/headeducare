import { Calendar, MailCheck, MapPin, RefreshCcw } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";

const sections = [
  {
    id: "information-we-collect",
    icon: "database",
    title: "Information We Collect",
    content: [
      {
        subtitle: "Personal Information",
        text: "When you use our services or fill out consultation forms, we may collect: full name, email address, phone number, date of birth, nationality, passport details (where required for visa processing), academic qualifications and transcripts, financial information relevant to scholarship or visa applications, and any other information you voluntarily provide.",
      },
      {
        subtitle: "Usage & Technical Data",
        text: "We automatically collect certain technical information when you visit our website, including IP address, browser type and version, pages visited, time and date of visits, time spent on pages, and referring website addresses. This data helps us improve our website performance and user experience.",
      },
      {
        subtitle: "Communication Records",
        text: "We retain records of your communications with us — including emails, WhatsApp messages, phone call notes, and consultation session summaries — to provide consistent and informed service across all interactions.",
      },
    ],
  },
  {
    id: "how-we-use",
    icon: "settings",
    title: "How We Use Your Information",
    content: [
      {
        subtitle: "Service Delivery",
        text: "Your personal information is primarily used to provide the education and migration consulting services you have requested. This includes processing university applications, preparing visa documentation, matching you with suitable programs, and communicating updates about your application status.",
      },
      {
        subtitle: "Communication & Support",
        text: "We use your contact details to respond to your inquiries, send appointment reminders, share relevant updates about your case, and provide post-placement support. You may receive newsletters and promotional content which you can opt out of at any time.",
      },
      {
        subtitle: "Legal & Compliance",
        text: "In certain circumstances, we are required to process your data to comply with applicable laws and regulations, including immigration laws, anti-money laundering requirements, and data protection legislation in Bangladesh and the countries we operate in.",
      },
    ],
  },
  {
    id: "data-sharing",
    icon: "share",
    title: "Data Sharing & Disclosure",
    content: [
      {
        subtitle: "Trusted Partners",
        text: "To deliver our services effectively, we share relevant information with partner universities and educational institutions, embassy and consulate offices, visa processing agencies, language testing centres (IELTS, TOEFL, PTE), and financial institutions for scholarship processing. All partners are bound by confidentiality agreements.",
      },
      {
        subtitle: "We Do Not Sell Your Data",
        text: "Head Edu Care does not sell, rent, or trade your personal information to third parties for commercial purposes. Your data is shared only to the extent necessary to deliver the services you have engaged us for.",
      },
      {
        subtitle: "Legal Obligations",
        text: "We may disclose your information if required by law, court order, or government authority, or if we believe disclosure is necessary to protect the rights, property, or safety of Head Edu Care, our clients, or the public.",
      },
    ],
  },
  {
    id: "data-security",
    icon: "shield",
    title: "Data Security",
    content: [
      {
        subtitle: "Security Measures",
        text: "We implement industry-standard technical and organisational security measures to protect your personal data against unauthorised access, alteration, disclosure, or destruction. This includes encrypted data storage, secure communication channels, restricted staff access on a need-to-know basis, and regular security audits.",
      },
      {
        subtitle: "Data Retention",
        text: "We retain your personal data only for as long as necessary to fulfil the purposes outlined in this policy or as required by law. Consultation records are typically retained for 5 years post-service completion. You may request deletion of your data at any time, subject to our legal obligations.",
      },
    ],
  },
  {
    id: "your-rights",
    icon: "person",
    title: "Your Rights",
    content: [
      {
        subtitle: "Access & Portability",
        text: "You have the right to request a copy of the personal information we hold about you, and to receive it in a commonly used, machine-readable format where technically feasible.",
      },
      {
        subtitle: "Correction & Deletion",
        text: "You may request that we correct inaccurate or incomplete personal data. You also have the right to request deletion of your data, except where we are required to retain it by law or for legitimate business purposes.",
      },
      {
        subtitle: "Withdraw Consent",
        text: "Where processing is based on your consent, you may withdraw that consent at any time. This does not affect the lawfulness of processing carried out before withdrawal. To exercise any of these rights, contact us at privacy@headeducare.com.",
      },
    ],
  },
  {
    id: "cookies",
    icon: "cookie",
    title: "Cookies Policy",
    content: [
      {
        subtitle: "What Are Cookies",
        text: "Cookies are small text files placed on your device when you visit our website. They help us recognise your browser, remember your preferences, and understand how you interact with our site.",
      },
      {
        subtitle: "Types We Use",
        text: "We use essential cookies (required for the site to function), analytical cookies (to understand usage patterns via tools like Google Analytics), and preference cookies (to remember your settings). We do not use advertising or tracking cookies for third-party marketing purposes.",
      },
      {
        subtitle: "Managing Cookies",
        text: "You can control and delete cookies through your browser settings. Note that disabling certain cookies may affect the functionality of parts of our website.",
      },
    ],
  },
  {
    id: "updates",
    icon: "update",
    title: "Policy Updates",
    content: [
      {
        subtitle: "Changes to This Policy",
        text: "We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. We will notify you of material changes by posting a notice on our website or by sending an email to the address we hold on file for you.",
      },
      {
        subtitle: "Continued Use",
        text: "Your continued use of our services after changes are posted constitutes your acceptance of the updated policy. We encourage you to review this policy periodically.",
      },
    ],
  },
];

function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (e) => e.isIntersecting && e.target.classList.add("pp-visible"),
        ),
      { threshold: 0.08 },
    );
    const el = ref.current;
    if (el)
      el.querySelectorAll(".pp-reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return ref;
}

const iconPaths = {
  database:
    "M4 6a8 2 0 1 0 16 0A8 2 0 1 0 4 6zm0 0v4a8 2 0 0 0 16 0V6M4 10v4a8 2 0 0 0 16 0v-4",
  settings:
    "M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 0v0M9.2 4.8l-1 1.7a7 7 0 0 0-1.7 1l-2-.3L3 9.7l1.3 1.6a7 7 0 0 0 0 1.4L3 14.3l1.5 2.5 2-.3a7 7 0 0 0 1.7 1l1 1.7h3l1-1.7a7 7 0 0 0 1.7-1l2 .3 1.6-2.5-1.3-1.6a7 7 0 0 0 0-1.4l1.3-1.6-1.6-2.5-2 .3a7 7 0 0 0-1.7-1l-1-1.7z",
  share: "M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8M16 6l-4-4-4 4M12 2v13",
  shield: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
  person:
    "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z",
  cookie:
    "M12 2a10 10 0 1 0 10 10M8 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm4 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm4-8a1 1 0 1 0 0-2 1 1 0 0 0 0 2z",
  update:
    "M23 4v6h-6M1 20v-6h6M3.5 9a9 9 0 0 1 14.8-3.3L23 10M1 14l4.7 4.3A9 9 0 0 0 20.5 15",
};

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState(sections[0].id);
  const containerRef = useReveal();

  useEffect(() => {
    const handleScroll = () => {
      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140) setActiveSection(s.id);
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <style>{`
        .pp-reveal { opacity:0; transform:translateY(18px); transition:opacity .7s ease,transform .7s ease; }
        .pp-reveal.pp-visible { opacity:1; transform:none; }
        .pp-nav-link { display:flex; align-items:center; gap:10px; padding:10px 14px; border-radius:10px; cursor:pointer; transition:all .2s; font-size:13px; font-family:"Lexend",sans-serif; font-weight:400; color:#6b7280; border:none; background:none; text-align:left; width:100%; }
        .pp-nav-link:hover { background:rgba(0,91,143,0.06); color:#005B8F; }
        .pp-nav-link.active { background:rgba(0,91,143,0.1); color:#005B8F; font-weight:600; }
        .pp-nav-link.active .pp-nav-dot { background:#005B8F; }
        .pp-nav-dot { width:6px; height:6px; border-radius:50%; background:#d1d5db; flex-shrink:0; transition:background .2s; }
        .pp-section { scroll-margin-top: 100px; }
        .pp-section-icon { width:48px; height:48px; background:rgba(0,91,143,0.08); border-radius:14px; display:flex; align-items:center; justify-content:center; flex-shrink:0; }
        .pp-section-icon svg { width:22px; height:22px; stroke:#005B8F; fill:none; stroke-width:1.8; stroke-linecap:round; stroke-linejoin:round; }
        .pp-card { background:#f6f6f8; border:1px solid rgba(0,0,0,0.06); border-radius:16px; padding:28px 32px; margin-bottom:16px; transition:box-shadow .2s; }
        .pp-card:hover { box-shadow:0 4px 20px rgba(0,91,143,0.08); }
        .pp-subtitle { font-size:14px; font-weight:700; color:#005B8F; margin-bottom:8px; font-family:"Lexend",sans-serif; }
        .pp-body { font-size:15px; color:#4b5563; line-height:1.75; font-family:"Lexend",sans-serif; font-weight:300; }
        .pp-divider { height:1px; background:rgba(0,91,143,0.08); margin:40px 0; }
        @media(max-width:1024px){ .pp-sidebar{ display:none; } }
        @media(min-width:1024px){ .pp-mobile-toc{ display:none; } }
      `}</style>

      <div ref={containerRef}>
        {/* Hero */}
        <section
          className="relative py-20 lg:py-28 overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg,rgba(0,91,143,0.05) 0%,rgba(74,131,243,0.04) 100%)",
          }}
        >
          <div
            className="absolute top-0 right-0 w-96 h-96 rounded-full"
            style={{ background: "rgba(0,91,143,0.06)", filter: "blur(80px)" }}
          />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl pp-reveal">
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
                Privacy <span style={{ color: "#005B8F" }}>Policy</span>
              </h1>
              <p
                className="text-lg leading-relaxed mb-6"
                style={{
                  color: "#6b7280",
                  fontFamily: "Lexend, sans-serif",
                  fontWeight: 300,
                }}
              >
                At Head Edu Care, we are committed to protecting your personal
                information and your right to privacy. This policy explains how
                we collect, use, and safeguard your data.
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

        {/* Main content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex gap-12">
            {/* Sidebar TOC */}
            <aside className="pp-sidebar w-72 flex-shrink-0">
              <div
                className="sticky top-24 bg-white border rounded-2xl p-5"
                style={{ borderColor: "rgba(0,0,0,0.07)" }}
              >
                <p
                  className="text-xs font-bold uppercase tracking-widest mb-4 px-2"
                  style={{ color: "#005B8F", fontFamily: "Lexend, sans-serif" }}
                >
                  On this page
                </p>
                {sections.map((s) => (
                  <button
                    key={s.id}
                    className={`pp-nav-link ${activeSection === s.id ? "active" : ""}`}
                    onClick={() => scrollTo(s.id)}
                  >
                    <span className="pp-nav-dot" />
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
                    Questions?
                  </p>
                  <p
                    className="text-xs leading-relaxed"
                    style={{
                      color: "#6b7280",
                      fontFamily: "Lexend, sans-serif",
                    }}
                  >
                    Contact us at
                    <br />
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
                className="pp-mobile-toc bg-white border rounded-2xl p-5 mb-10"
                style={{ borderColor: "rgba(0,0,0,0.07)" }}
              >
                <p
                  className="text-xs font-bold uppercase tracking-widest mb-4"
                  style={{ color: "#005B8F", fontFamily: "Lexend, sans-serif" }}
                >
                  Contents
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {sections.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => scrollTo(s.id)}
                      className="text-left text-xs px-3 py-2 rounded-lg transition-colors hover:bg-blue-50"
                      style={{
                        color: "#6b7280",
                        fontFamily: "Lexend, sans-serif",
                      }}
                    >
                      {s.title}
                    </button>
                  ))}
                </div>
              </div>

              {sections.map((section, idx) => (
                <div
                  key={section.id}
                  id={section.id}
                  className="pp-section pp-reveal"
                  style={{ marginBottom: 56 }}
                >
                  <div className="flex items-center gap-4 mb-8">
                    <div className="pp-section-icon">
                      <svg viewBox="0 0 24 24">
                        <path d={iconPaths[section.icon]} />
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
                    <div key={j} className="pp-card">
                      <p className="pp-subtitle">{item.subtitle}</p>
                      <p className="pp-body">{item.text}</p>
                    </div>
                  ))}

                  {idx < sections.length - 1 && <div className="pp-divider" />}
                </div>
              ))}

              {/* Footer note */}
              <div
                className="pp-reveal rounded-2xl p-8"
                style={{
                  background: "rgba(0,91,143,0.05)",
                  border: "1px solid rgba(0,91,143,0.12)",
                }}
              >
                <h3
                  className="text-lg font-bold mb-2"
                  style={{ color: "#0d121b", fontFamily: "Lexend, sans-serif" }}
                >
                  Contact Our Privacy Team
                </h3>
                <p
                  className="text-sm leading-relaxed mb-4"
                  style={{
                    color: "#6b7280",
                    fontFamily: "Lexend, sans-serif",
                    fontWeight: 300,
                  }}
                >
                  If you have any questions about this Privacy Policy or wish to
                  exercise your data rights, please reach out to us directly.
                </p>
                <div
                  className="flex flex-wrap gap-4 text-sm"
                  style={{ fontFamily: "Lexend, sans-serif" }}
                >
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
                      <MapPin className="h-4 w-4" /> 44/16 West Panthapath,
                      Dhaka 1205
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
