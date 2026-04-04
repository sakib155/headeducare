import {
  BanknoteArrowDown,
  Building,
  Calendar,
  Clock,
  GraduationCap,
  Lightbulb,
  Mail,
  MessageCircleCheck,
  Paperclip,
  PhoneCall,
  Plane,
  Recycle,
  RefreshCcw,
  Search,
} from "lucide-react";
import React, { useEffect, useRef } from "react";

const refundTable = [
  {
    service: "Initial Consultation",
    fee: "Non-refundable",
    condition: "Once session is conducted",
    color: "#ef4444",
  },
  {
    service: "Study Abroad – Full Package",
    fee: "50% refundable",
    condition: "Cancelled before application submission",
    color: "#f59e0b",
  },
  {
    service: "Study Abroad – Full Package",
    fee: "Non-refundable",
    condition: "After application submitted to university",
    color: "#ef4444",
  },
  {
    service: "Visa Assistance",
    fee: "50% refundable",
    condition: "Cancelled before document preparation starts",
    color: "#f59e0b",
  },
  {
    service: "Visa Assistance",
    fee: "Non-refundable",
    condition: "After documents prepared/submitted",
    color: "#ef4444",
  },
  {
    service: "Test Preparation",
    fee: "75% refundable",
    condition: "Cancelled 7+ days before first class",
    color: "#22c55e",
  },
  {
    service: "Test Preparation",
    fee: "50% refundable",
    condition: "Cancelled within 7 days of start",
    color: "#f59e0b",
  },
  {
    service: "Test Preparation",
    fee: "Non-refundable",
    condition: "After first class attended",
    color: "#ef4444",
  },
  {
    service: "Migration Services",
    fee: "Case-by-case",
    condition: "Assessed based on work completed",
    color: "#3b82f6",
  },
  {
    service: "Scholarship Guidance",
    fee: "Non-refundable",
    condition: "Once shortlisting & research completed",
    color: "#ef4444",
  },
  {
    service: "Career Counseling",
    fee: "Non-refundable",
    condition: "Once session is conducted",
    color: "#ef4444",
  },
];

const process = [
  {
    step: "01",
    icon: <Paperclip />,
    title: "Submit Written Request",
    desc: "Send a refund request via email to refunds@headeducare.com with your full name, service engaged, payment receipt, and reason for cancellation.",
  },
  {
    step: "02",
    icon: <Search />,
    title: "Review & Assessment",
    desc: "Our team will review your request within 5 business days and assess the applicable refund amount based on the stage of service completion.",
  },
  {
    step: "03",
    icon: <PhoneCall />,
    title: "Counselor Discussion",
    desc: "A senior counselor may contact you to discuss the request, understand your concerns, and explore whether service continuation or transfer is more beneficial.",
  },
  {
    step: "04",
    icon: <MessageCircleCheck />,
    title: "Approval & Confirmation",
    desc: "Once approved, you will receive a written confirmation of the refund amount and timeline via email.",
  },
  {
    step: "05",
    icon: <BanknoteArrowDown />,
    title: "Refund Disbursement",
    desc: "Approved refunds are processed within 10–14 business days via the original payment method (bank transfer or bKash/Nagad for local clients).",
  },
];

const noRefundReasons = [
  {
    icon: <Building />,
    title: "Visa Rejection",
    desc: "Visa denials by embassies or immigration authorities do not entitle clients to a refund of service fees, as our role is preparation and advisory.",
  },
  {
    icon: <GraduationCap />,
    title: "University Rejection",
    desc: "Rejection by a university does not constitute grounds for a service fee refund. Our service is application preparation, not admission guarantee.",
  },
  {
    icon: <Plane />,
    title: "Change of Plans",
    desc: "If you decide not to pursue studying or migrating abroad after services have commenced, fees for work already completed are non-refundable.",
  },
  {
    icon: <Clock />,
    title: "Client-Caused Delays",
    desc: "Delays or failures resulting from the client's failure to provide required documents or respond to requests do not qualify for refunds.",
  },
  {
    icon: <Recycle />,
    title: "Currency Fluctuations",
    desc: "Exchange rate changes between BDT and foreign currencies do not entitle clients to refunds of any portion of service fees.",
  },
];

function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (e) => e.isIntersecting && e.target.classList.add("rp-visible"),
        ),
      { threshold: 0.08 },
    );
    const el = ref.current;
    if (el)
      el.querySelectorAll(".rp-reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return ref;
}

export default function RefundPolicy() {
  const containerRef = useReveal();

  return (
    <>
      <style>{`
        .rp-reveal { opacity:0; transform:translateY(18px); transition:opacity .7s ease,transform .7s ease; }
        .rp-reveal.rp-visible { opacity:1; transform:none; }
        .rp-table-row { display:grid; grid-template-columns:1fr auto auto; gap:16px; align-items:center; padding:16px 20px; border-radius:12px; margin-bottom:8px; background:#f6f6f8; border:1px solid rgba(0,0,0,0.05); transition:box-shadow .2s; }
        .rp-table-row:hover { box-shadow:0 2px 12px rgba(0,91,143,0.08); }
        .rp-badge { padding:4px 12px; border-radius:20px; font-size:12px; font-weight:700; font-family:"Lexend",sans-serif; white-space:nowrap; }
        .rp-step { display:flex; gap:20px; align-items:flex-start; padding:24px 28px; border-radius:16px; background:#f6f6f8; border:1px solid rgba(0,0,0,0.05); margin-bottom:12px; transition:all .2s; }
        .rp-step:hover { box-shadow:0 4px 20px rgba(0,91,143,0.08); transform:translateX(4px); }
        .rp-step-num { font-size:28px; font-weight:900; color:rgba(0,91,143,0.15); font-family:"Lexend",sans-serif; flex-shrink:0; line-height:1; }
        @media(max-width:640px) { .rp-table-row { grid-template-columns:1fr; } .rp-badge { width:fit-content; } }
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
            className="absolute top-0 right-0 w-96 h-96 rounded-full"
            style={{ background: "rgba(0,91,143,0.06)", filter: "blur(80px)" }}
          />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl rp-reveal">
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
                Refund <span style={{ color: "#005B8F" }}>Policy</span>
              </h1>
              <p
                className="text-lg leading-relaxed mb-6"
                style={{
                  color: "#6b7280",
                  fontFamily: "Lexend, sans-serif",
                  fontWeight: 300,
                }}
              >
                We understand that circumstances change. This policy outlines
                our approach to refunds clearly and fairly, so you know exactly
                what to expect when engaging our services.
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

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
          {/* Key principle banner */}
          <div
            className="rp-reveal rounded-2xl p-8 flex gap-5 items-start"
            style={{
              background: "rgba(0,91,143,0.04)",
              border: "1px solid rgba(0,91,143,0.12)",
            }}
          >
            <Lightbulb className="text-blue-900 h-40 w-44" />
            <div>
              <h3
                className="text-xl font-black mb-2"
                style={{ color: "#0d121b", fontFamily: "Lexend, sans-serif" }}
              >
                Our Guiding Principle
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{
                  color: "#6b7280",
                  fontFamily: "Lexend, sans-serif",
                  fontWeight: 300,
                }}
              >
                Head Edu Care invests significant time, expertise, and resources
                from the moment your engagement begins. Refund eligibility is
                based on the stage of service completion — the earlier a
                cancellation is made, the greater the refundable portion. We are
                always willing to discuss your situation and find the most
                equitable resolution.
              </p>
            </div>
          </div>

          {/* Refund table */}
          <section className="rp-reveal">
            <div className="mb-10">
              <p
                className="text-sm font-bold uppercase tracking-widest mb-2"
                style={{ color: "#005B8F", fontFamily: "Lexend, sans-serif" }}
              >
                Refund Schedule
              </p>
              <h2
                className="text-3xl font-black"
                style={{ color: "#0d121b", fontFamily: "Lexend, sans-serif" }}
              >
                Service-by-Service Breakdown
              </h2>
            </div>

            {/* Legend */}
            <div className="flex flex-wrap gap-4 mb-6">
              {[
                {
                  color: "#22c55e",
                  bg: "rgba(34,197,94,0.1)",
                  label: "Full/High Refund",
                },
                {
                  color: "#f59e0b",
                  bg: "rgba(245,158,11,0.1)",
                  label: "Partial Refund",
                },
                {
                  color: "#ef4444",
                  bg: "rgba(239,68,68,0.1)",
                  label: "Non-Refundable",
                },
                {
                  color: "#3b82f6",
                  bg: "rgba(59,130,246,0.1)",
                  label: "Case-by-Case",
                },
              ].map((l) => (
                <div
                  key={l.label}
                  className="flex items-center gap-2 px-3 py-1 rounded-full"
                  style={{ background: l.bg }}
                >
                  <span
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      background: l.color,
                      flexShrink: 0,
                    }}
                  />
                  <span
                    className="text-xs font-semibold"
                    style={{ color: l.color, fontFamily: "Lexend, sans-serif" }}
                  >
                    {l.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Table header */}
            <div
              className="grid gap-4 px-5 pb-3 text-xs font-bold uppercase tracking-wider"
              style={{
                gridTemplateColumns: "1fr auto auto",
                color: "#9ca3af",
                fontFamily: "Lexend, sans-serif",
              }}
            >
              <span>Service</span>
              <span className="hidden sm:block">Refund</span>
              <span className="hidden sm:block">Condition</span>
            </div>

            {refundTable.map((row, i) => (
              <div key={i} className="rp-table-row">
                <span
                  className="text-sm font-semibold"
                  style={{ color: "#0d121b", fontFamily: "Lexend, sans-serif" }}
                >
                  {row.service}
                </span>
                <span
                  className="rp-badge"
                  style={{ color: row.color, background: `${row.color}15` }}
                >
                  {row.fee}
                </span>
                <span
                  className="text-xs"
                  style={{ color: "#6b7280", fontFamily: "Lexend, sans-serif" }}
                >
                  {row.condition}
                </span>
              </div>
            ))}
          </section>

          {/* Refund process */}
          <section className="rp-reveal">
            <div className="mb-10">
              <p
                className="text-sm font-bold uppercase tracking-widest mb-2"
                style={{ color: "#005B8F", fontFamily: "Lexend, sans-serif" }}
              >
                Process
              </p>
              <h2
                className="text-3xl font-black mb-4"
                style={{ color: "#0d121b", fontFamily: "Lexend, sans-serif" }}
              >
                How to Request a Refund
              </h2>
              <p
                className="text-base leading-relaxed"
                style={{
                  color: "#6b7280",
                  fontFamily: "Lexend, sans-serif",
                  fontWeight: 300,
                }}
              >
                Our refund request process is straightforward. Follow these
                steps to initiate a refund.
              </p>
            </div>

            {process.map((step, i) => (
              <div key={i} className="rp-step">
                <div>
                  <span className="rp-step-num">{step.step}</span>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span style={{ fontSize: 20 }} className="text-primary">
                      {step.icon}
                    </span>
                    <h4
                      className="font-bold text-base"
                      style={{
                        color: "#0d121b",
                        fontFamily: "Lexend, sans-serif",
                      }}
                    >
                      {step.title}
                    </h4>
                  </div>
                  <p
                    className="text-sm leading-relaxed"
                    style={{
                      color: "#6b7280",
                      fontFamily: "Lexend, sans-serif",
                      fontWeight: 300,
                    }}
                  >
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </section>

          {/* Non-refundable scenarios */}
          <section className="rp-reveal">
            <div className="mb-10">
              <p
                className="text-sm text-primary font-bold uppercase tracking-widest mb-2"
                style={{ fontFamily: "Lexend, sans-serif" }}
              >
                Important
              </p>
              <h2
                className="text-3xl font-black mb-4"
                style={{ color: "#0d121b", fontFamily: "Lexend, sans-serif" }}
              >
                When Refunds Do Not Apply
              </h2>
              <p
                className="text-base leading-relaxed"
                style={{
                  color: "#6b7280",
                  fontFamily: "Lexend, sans-serif",
                  fontWeight: 300,
                }}
              >
                The following circumstances do not qualify for service fee
                refunds, regardless of the stage of service completion.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {noRefundReasons.map((item, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl"
                  style={{
                    background: "rgba(239,68,68,0.04)",
                    border: "1px solid rgba(239,68,68,0.1)",
                  }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span style={{ fontSize: 24 }}>{item.icon}</span>
                    <h4
                      className="font-bold text-sm text-primary"
                      style={{
                        fontFamily: "Lexend, sans-serif",
                      }}
                    >
                      {item.title}
                    </h4>
                  </div>
                  <p
                    className="text-sm leading-relaxed"
                    style={{
                      color: "#6b7280",
                      fontFamily: "Lexend, sans-serif",
                      fontWeight: 300,
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Dispute & contact */}
          <section className="rp-reveal">
            <div className="grid sm:grid-cols-2 gap-6">
              <div
                className="p-8 rounded-2xl"
                style={{
                  background: "rgba(0,91,143,0.05)",
                  border: "1px solid rgba(0,91,143,0.12)",
                }}
              >
                <h3
                  className="text-lg font-black mb-3"
                  style={{ color: "#0d121b", fontFamily: "Lexend, sans-serif" }}
                >
                  Dispute Resolution
                </h3>
                <p
                  className="text-sm leading-relaxed mb-4"
                  style={{
                    color: "#6b7280",
                    fontFamily: "Lexend, sans-serif",
                    fontWeight: 300,
                  }}
                >
                  If you disagree with a refund decision, you may escalate the
                  matter in writing to our management team at
                  management@headeducare.com. We commit to reviewing all
                  escalated cases within 7 business days and providing a final
                  written response.
                </p>
              </div>
              <div
                className="p-8 rounded-2xl"
                style={{
                  background: "rgba(0,91,143,0.05)",
                  border: "1px solid rgba(0,91,143,0.12)",
                }}
              >
                <h3
                  className="text-lg font-black mb-3"
                  style={{ color: "#0d121b", fontFamily: "Lexend, sans-serif" }}
                >
                  Contact for Refunds
                </h3>
                <div
                  className="space-y-2 text-sm"
                  style={{ fontFamily: "Lexend, sans-serif" }}
                >
                  <p style={{ color: "#6b7280", fontWeight: 300 }}>
                    Submit your refund request to:
                  </p>
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-[#005B8F]" />
                    <p style={{ color: "#005B8F", fontWeight: 600 }}>
                      info@headeducare.com
                    </p>
                  </div>
                  <p style={{ color: "#6b7280", fontWeight: 300 }}>
                    Include: Full name, service type, payment receipt, reason
                    for cancellation
                  </p>
                  <p style={{ color: "#6b7280", fontWeight: 300 }}>
                    Response time: 5 business days
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
