import {
  AlertTriangle,
  AlertTriangleIcon,
  Calendar,
  Clipboard,
  Cloud,
  Globe,
  GraduationCap,
  Paperclip,
  RefreshCcw,
  Scale,
  Wallet,
} from "lucide-react";
import React, { useEffect, useRef } from "react";

const disclaimers = [
  {
    id: "no-guarantee",
    icon: <GraduationCap />,
    severity: "high",
    title: "No Guarantee of Admission or Visa Approval",
    summary:
      "Our services are advisory. We do not guarantee university admissions or visa approvals.",
    detail:
      "Head Edu Care provides education and migration consulting services on an advisory basis. While we apply our best expertise and experience to prepare your applications, we cannot and do not guarantee admission to any specific university, college, or educational institution, nor the approval of any visa, permit, or immigration application. All final decisions rest exclusively with the receiving institution, embassy, high commission, or immigration authority of the relevant country. The quality of our services is measured by the preparation and support we provide, not by the decisions of third parties over which we have no control.",
  },
  {
    id: "accuracy-info",
    icon: <Paperclip />,
    severity: "medium",
    title: "Accuracy of Information Provided",
    summary:
      "Country, university, and immigration information is provided in good faith but may change without notice.",
    detail:
      "All information provided by Head Edu Care — including details about universities, tuition fees, visa requirements, immigration pathways, scholarship opportunities, language test requirements, and intake deadlines — is compiled from publicly available sources and our professional experience. This information is provided in good faith and is believed to be accurate at the time of communication. However, policies, fees, entry requirements, and immigration rules change frequently and without prior notice. Clients are strongly advised to independently verify all critical information directly with the relevant university, embassy, or government authority before making any decision. Head Edu Care accepts no liability for decisions made based on information that has subsequently changed.",
  },
  {
    id: "not-legal-advice",
    icon: <Scale />,
    severity: "high",
    title: "Not Legal or Immigration Advice",
    summary:
      "Our guidance does not constitute formal legal advice. Consult a registered legal practitioner for complex legal matters.",
    detail:
      "The advice, guidance, and recommendations provided by Head Edu Care counselors constitute general education and migration consulting and do not constitute formal legal advice under any jurisdiction. While some of our team members may hold registered migration agent qualifications in specific countries, general communications with our team should not be relied upon as a substitute for independent legal counsel. For complex immigration matters, criminal record implications, prior visa refusals, or situations involving unique legal circumstances, you are strongly advised to consult with a qualified and registered legal practitioner or registered migration agent in the relevant jurisdiction.",
  },
  {
    id: "third-party",
    icon: <Clipboard />,
    severity: "low",
    title: "Third-Party Links & Services",
    summary:
      "Links to external sites and use of third-party services are at your own risk.",
    detail:
      "Our website may contain links to third-party websites including university portals, embassy websites, testing centre platforms, scholarship databases, and accommodation providers. These links are provided for convenience only. Head Edu Care does not endorse, control, or accept responsibility for the content, privacy practices, or reliability of any third-party website or service. Use of third-party websites and services is entirely at your own risk. We recommend reviewing the privacy policies and terms of service of any third-party site you visit.",
  },
  {
    id: "testimonials",
    icon: <Cloud />,
    severity: "low",
    title: "Testimonials & Success Stories",
    summary:
      "Individual outcomes vary. Past results do not guarantee future performance.",
    detail:
      "Testimonials and success stories featured on our website and marketing materials represent the genuine experiences of individual clients. However, individual outcomes vary significantly based on academic background, test scores, financial capacity, chosen institutions, country of application, timing, and other factors beyond our control. Past success rates, acceptance rates, and client outcomes cited in our communications are historical data points and are not guarantees of future results. Every client's situation is unique, and the same level of service may yield different results for different individuals.",
  },
  {
    id: "financial",
    icon: <Wallet />,
    severity: "medium",
    title: "Financial Information Disclaimer",
    summary:
      "Tuition fees, cost of living, and salary figures are approximate and subject to change.",
    detail:
      "All financial figures provided — including tuition fees, cost of living estimates, scholarship amounts, and post-study salary ranges — are approximate and based on publicly available data and industry research at the time of publication. Actual costs and earnings will vary based on institution, location, program, year of study, individual lifestyle, currency exchange rates, and market conditions. These figures are provided for general guidance only and should not be the sole basis for financial planning. Clients are advised to consult the official websites of institutions and conduct independent financial planning before committing to any program.",
  },
  {
    id: "website",
    icon: <Globe />,
    severity: "low",
    title: "Website Availability",
    summary:
      "We do not guarantee uninterrupted access to our website or digital services.",
    detail:
      "While we strive to maintain continuous availability of our website and digital services, Head Edu Care does not warrant that the website will be available at all times, free from errors, or free from viruses or other harmful components. We reserve the right to suspend, withdraw, or restrict access to our website at any time without notice for operational, maintenance, or security reasons. We accept no liability for any loss or damage arising from your inability to access our website at any particular time.",
  },
];

function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (e) => e.isIntersecting && e.target.classList.add("dis-visible"),
        ),
      { threshold: 0.08 },
    );
    const el = ref.current;
    if (el)
      el.querySelectorAll(".dis-reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return ref;
}

const severityConfig = {
  high: {
    color: "#dc2626",
    bg: "rgba(220,38,38,0.06)",
    border: "rgba(220,38,38,0.15)",
    badge: "rgba(220,38,38,0.1)",
    label: "Critical",
  },
  medium: {
    color: "#d97706",
    bg: "rgba(217,119,6,0.06)",
    border: "rgba(217,119,6,0.15)",
    badge: "rgba(217,119,6,0.1)",
    label: "Important",
  },
  low: {
    color: "#005B8F",
    bg: "rgba(0,91,143,0.04)",
    border: "rgba(0,91,143,0.1)",
    badge: "rgba(0,91,143,0.08)",
    label: "Note",
  },
};

export default function Disclaimer() {
  const containerRef = useReveal();

  return (
    <>
      <style>{`
        .dis-reveal { opacity:0; transform:translateY(18px); transition:opacity .7s ease,transform .7s ease; }
        .dis-reveal.dis-visible { opacity:1; transform:none; }
        .dis-card { border-radius:20px; overflow:hidden; margin-bottom:20px; transition:box-shadow .25s; }
        .dis-card:hover { box-shadow:0 6px 30px rgba(0,0,0,0.07); }
        .dis-card-header { display:flex; align-items:flex-start; gap:16px; padding:24px 28px; cursor:pointer; }
        .dis-card-body { padding:0 28px 24px; }
        .dis-card-body p { font-size:14px; line-height:1.8; color:#6b7280; font-family:"Lexend",sans-serif; font-weight:300; }
        .dis-summary { font-size:13px; color:#9ca3af; font-family:"Lexend",sans-serif; margin-top:4px; }
      `}</style>

      <div ref={containerRef}>
        {/* Hero */}
        <section
          className="relative py-20 lg:py-28 overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg,rgba(220,38,38,0.04) 0%,rgba(0,91,143,0.04) 100%)",
          }}
        >
          <div
            className="absolute bottom-0 right-0 w-96 h-96 rounded-full"
            style={{ background: "rgba(220,38,38,0.05)", filter: "blur(80px)" }}
          />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl dis-reveal">
              <div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6"
                style={{ background: "rgba(220,38,38,0.1)", color: "#dc2626" }}
              >
                <span
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: "#dc2626",
                    flexShrink: 0,
                    display: "inline-block",
                  }}
                />
                Legal Notice
              </div>
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-6"
                style={{ color: "#0d121b", fontFamily: "Lexend, sans-serif" }}
              >
                <span style={{ color: "#dc2626" }}>Disclaimer</span>
              </h1>
              <p
                className="text-lg leading-relaxed mb-6"
                style={{
                  color: "#6b7280",
                  fontFamily: "Lexend, sans-serif",
                  fontWeight: 300,
                }}
              >
                The following disclaimers govern your use of Head Edu Care's
                services and website. Please read these carefully to understand
                the limitations and scope of our advisory services.
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
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Top warning */}
          <div
            className="dis-reveal rounded-2xl p-6 mb-12 flex gap-4 items-start"
            style={{
              background: "rgba(220,38,38,0.05)",
              border: "1px solid rgba(220,38,38,0.15)",
            }}
          >
            <AlertTriangleIcon className="h-40 w-44  text-red-500" />
            <div>
              <p
                className="font-black text-base mb-2 text-primary"
                style={{ fontFamily: "Lexend, sans-serif" }}
              >
                Read Before Using Our Services
              </p>
              <p
                className="text-sm leading-relaxed"
                style={{
                  color: "#7f1d1d",
                  fontFamily: "Lexend, sans-serif",
                  fontWeight: 300,
                }}
              >
                By using Head Edu Care's services, you acknowledge that you have
                read and understood all disclaimers on this page. These
                disclaimers are an integral part of our Terms of Service and
                define the boundaries of our advisory responsibilities. If you
                do not agree with any of the following, please do not engage our
                services.
              </p>
            </div>
          </div>

          {/* Severity legend */}
          <div className="dis-reveal flex flex-wrap gap-3 mb-10">
            {Object.entries(severityConfig).map(([key, val]) => (
              <div
                key={key}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold"
                style={{
                  background: val.badge,
                  color: val.color,
                  fontFamily: "Lexend, sans-serif",
                }}
              >
                <span
                  style={{
                    width: 7,
                    height: 7,
                    borderRadius: "50%",
                    background: val.color,
                    flexShrink: 0,
                  }}
                />
                {val.label}
              </div>
            ))}
            <span
              className="text-xs flex items-center"
              style={{ color: "#9ca3af", fontFamily: "Lexend, sans-serif" }}
            >
              — severity indicators
            </span>
          </div>

          {/* Disclaimer cards */}
          {disclaimers.map((item, i) => {
            const conf = severityConfig[item.severity];
            return (
              <div
                key={item.id}
                className="dis-card dis-reveal"
                style={{
                  background: conf.bg,
                  border: `1px solid ${conf.border}`,
                }}
              >
                <div className="dis-card-header">
                  <span style={{ fontSize: 28, flexShrink: 0, marginTop: 2 }}>
                    {item.icon}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3
                        className="font-black text-lg"
                        style={{
                          color: "#0d121b",
                          fontFamily: "Lexend, sans-serif",
                        }}
                      >
                        {item.title}
                      </h3>
                      <span
                        className="text-xs font-bold px-2 py-0.5 rounded-full"
                        style={{
                          background: conf.badge,
                          color: conf.color,
                          fontFamily: "Lexend, sans-serif",
                        }}
                      >
                        {conf.label}
                      </span>
                    </div>
                    <p className="dis-summary">{item.summary}</p>
                  </div>
                </div>
                <div className="dis-card-body">
                  <div
                    style={{
                      height: 1,
                      background: `${conf.border}`,
                      marginBottom: 20,
                    }}
                  />
                  <p>{item.detail}</p>
                </div>
              </div>
            );
          })}

          {/* Closing note */}
          <div
            className="dis-reveal rounded-2xl p-8 mt-8"
            style={{
              background: "rgba(0,91,143,0.05)",
              border: "1px solid rgba(0,91,143,0.12)",
            }}
          >
            <h3
              className="text-lg font-black mb-3"
              style={{ color: "#0d121b", fontFamily: "Lexend, sans-serif" }}
            >
              Questions About These Disclaimers?
            </h3>
            <p
              className="text-sm leading-relaxed mb-5"
              style={{
                color: "#6b7280",
                fontFamily: "Lexend, sans-serif",
                fontWeight: 300,
              }}
            >
              If any part of this Disclaimer is unclear or if you wish to
              discuss the scope of our services before engaging, please contact
              us. We are committed to transparency in all our communications.
            </p>
            <div
              className="grid sm:grid-cols-3 gap-4 text-sm"
              style={{ fontFamily: "Lexend, sans-serif" }}
            >
              <div
                className="p-4 rounded-xl bg-white"
                style={{ border: "1px solid rgba(0,91,143,0.1)" }}
              >
                <p
                  className="text-xs font-bold uppercase tracking-wider mb-1"
                  style={{ color: "#005B8F" }}
                >
                  Email
                </p>
                <p style={{ color: "#0d121b", fontWeight: 600 }}>
                  info@headeducare.com
                </p>
              </div>
              <div
                className="p-4 rounded-xl bg-white"
                style={{ border: "1px solid rgba(0,91,143,0.1)" }}
              >
                <p
                  className="text-xs font-bold uppercase tracking-wider mb-1"
                  style={{ color: "#005B8F" }}
                >
                  Office
                </p>
                <p style={{ color: "#0d121b", fontWeight: 600 }}>
                  West Panthapath, Dhaka
                </p>
              </div>
              <div
                className="p-4 rounded-xl bg-white"
                style={{ border: "1px solid rgba(0,91,143,0.1)" }}
              >
                <p
                  className="text-xs font-bold uppercase tracking-wider mb-1"
                  style={{ color: "#005B8F" }}
                >
                  Hours
                </p>
                <p style={{ color: "#0d121b", fontWeight: 600 }}>
                  Sun–Thu: 10AM–7PM
                </p>
              </div>
            </div>
          </div>

          {/* Effective date footer */}
          <p
            className="text-xs text-center mt-10"
            style={{ color: "#9ca3af", fontFamily: "Lexend, sans-serif" }}
          >
            This disclaimer was last updated on March 15, 2025. Head Edu Care
            reserves the right to update this disclaimer at any time.
          </p>
        </div>
      </div>
    </>
  );
}
