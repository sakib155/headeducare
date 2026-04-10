import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  GraduationCap,
  FileCheck,
  Home,
  Award,
  HeartPulse,
  Globe,
  Search,
  PenTool,
  Send,
  PartyPopper,
  CheckCircle,
  ArrowRight,
  Plane,
  BookOpen,
  Users,
  ShieldCheck,
} from "lucide-react";

/* ─── design tokens matching serviceComponents ─── */
const BASE_STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;600;700;900&display=swap');
  .wp-page { font-family:"Lexend",sans-serif; color:#0d121b; }
  .wp-reveal { opacity:0; transform:translateY(20px); transition:opacity .7s ease,transform .7s ease; }
  .wp-reveal.wp-visible { opacity:1; transform:none; }
  .wp-reveal:nth-child(2){transition-delay:.08s}
  .wp-reveal:nth-child(3){transition-delay:.16s}
  .wp-reveal:nth-child(4){transition-delay:.24s}
  .wp-reveal:nth-child(5){transition-delay:.32s}
  .wp-reveal:nth-child(6){transition-delay:.40s}
  .wp-container { max-width:1200px; margin:0 auto; padding:0 20px; }
  .wp-badge { display:inline-flex; align-items:center; gap:8px; padding:5px 14px; border-radius:40px; background:rgba(0,91,143,0.1); color:#005B8F; font-size:11px; font-weight:700; letter-spacing:.08em; text-transform:uppercase; margin-bottom:20px; }
  .wp-badge-dot { width:6px; height:6px; border-radius:50%; background:#005B8F; flex-shrink:0; }
  .wp-h1 { font-size:clamp(36px,5vw,64px); font-weight:900; line-height:1.08; color:#0d121b; margin-bottom:20px; }
  .wp-h1 span { color:#005B8F; }
  .wp-h2 { font-size:clamp(24px,3vw,40px); font-weight:900; color:#0d121b; margin-bottom:12px; }
  .wp-h2 span { color:#005B8F; }
  .wp-label { font-size:11px; font-weight:700; letter-spacing:.1em; text-transform:uppercase; color:#005B8F; margin-bottom:10px; }
  .wp-lead { font-size:17px; color:#6b7280; line-height:1.75; font-weight:300; max-width:580px; }
  .wp-body { font-size:15px; color:#6b7280; line-height:1.8; font-weight:300; }
  .wp-section { padding:88px 0; }
  .wp-section-alt { padding:88px 0; background:#f6f6f8; }
  .wp-divider { height:1px; background:rgba(0,91,143,0.08); }
  .wp-cta-btn { display:inline-flex; align-items:center; gap:8px; background:#005B8F; color:#fff; padding:14px 28px; border-radius:12px; font-weight:700; font-size:15px; text-decoration:none; transition:all .2s; font-family:"Lexend",sans-serif; border:none; cursor:pointer; }
  .wp-cta-btn:hover { background:#004a78; transform:translateY(-2px); box-shadow:0 8px 24px rgba(0,91,143,0.25); }
  .wp-cta-btn-ghost { display:inline-flex; align-items:center; gap:8px; background:transparent; color:#005B8F; padding:14px 28px; border-radius:12px; font-weight:700; font-size:15px; text-decoration:none; transition:all .2s; font-family:"Lexend",sans-serif; border:2px solid rgba(0,91,143,0.25); cursor:pointer; }
  .wp-cta-btn-ghost:hover { background:rgba(0,91,143,0.06); transform:translateY(-2px); }
  /* service card */
  .svc-card { background:#fff; border:1px solid rgba(0,0,0,0.06); border-radius:20px; padding:32px 28px; transition:all .25s; display:flex; flex-direction:column; }
  .svc-card:hover { box-shadow:0 8px 32px rgba(0,91,143,0.1); transform:translateY(-4px); border-color:rgba(0,91,143,0.15); }
  .svc-icon-wrap { width:52px; height:52px; border-radius:14px; display:flex; align-items:center; justify-content:center; margin-bottom:18px; flex-shrink:0; }
  /* step card */
  .step-card { background:#fff; border:1px solid rgba(0,0,0,0.06); border-radius:20px; padding:32px 28px 28px; position:relative; transition:all .25s; }
  .step-card:hover { box-shadow:0 8px 32px rgba(0,91,143,0.1); transform:translateY(-4px); }
  .step-num { position:absolute; top:-14px; left:20px; width:36px; height:36px; background:#005B8F; color:#fff; border-radius:50%; display:flex; align-items:center; justify-content:center; font-weight:900; font-size:14px; font-family:"Lexend",sans-serif; }
  /* country pill */
  .c-pill { padding:7px 16px; border-radius:40px; background:#fff; border:1px solid rgba(0,91,143,0.15); font-size:13px; font-weight:600; color:#005B8F; }
  /* commitment chip */
  .commit-chip { display:flex; align-items:flex-start; gap:12px; background:#fff; border:1px solid rgba(0,0,0,0.06); border-radius:16px; padding:20px 22px; }
  /* stats strip */
  .stats-strip { background:linear-gradient(135deg,#005B8F 0%,#004270 100%); padding:48px 0; }
  /* grid helpers */
  .g2 { display:grid; grid-template-columns:1fr 1fr; gap:24px; }
  .g3 { display:grid; grid-template-columns:repeat(3,1fr); gap:20px; }
  .g4 { display:grid; grid-template-columns:repeat(4,1fr); gap:20px; }
  @media(max-width:900px){ .g3,.g4{ grid-template-columns:1fr 1fr !important; } }
  @media(max-width:640px){ .g2,.g3,.g4{ grid-template-columns:1fr !important; } }
`;

function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (e) => e.isIntersecting && e.target.classList.add("wp-visible"),
        ),
      { threshold: 0.08 },
    );
    const el = ref.current;
    if (el)
      el.querySelectorAll(".wp-reveal").forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, []);
  return ref;
}

/* ─── data ─── */
const services = [
  {
    icon: GraduationCap,
    color: "#005B8F",
    title: "Admission Support",
    slug: "/services/admission-support",
    summary:
      "End-to-end university application guidance — from shortlisting and SOP writing to submission and offer negotiation.",
    highlights: [
      "University shortlisting",
      "SOP & essay writing",
      "Application preparation",
      "Offer letter negotiation",
    ],
  },
  {
    icon: FileCheck,
    color: "#0e7490",
    title: "Visa Services",
    slug: "/services/visa-services",
    summary:
      "High-success-rate visa documentation support and rigorous interview preparation for all major study destinations.",
    highlights: [
      "Document checklist & review",
      "GTE / SOP drafting",
      "Mock visa interviews",
      "Re-application support",
    ],
  },
  {
    icon: Award,
    color: "#7c3aed",
    title: "Scholarship Guidance",
    slug: "/services/scholarship-support",
    summary:
      "Identify merit-based, need-based, and country-specific scholarships and craft winning scholarship applications.",
    highlights: [
      "Scholarship matching",
      "Essay & SOP writing",
      "Financial aid research",
      "Award interview prep",
    ],
  },
  {
    icon: Home,
    color: "#059669",
    title: "Student Accommodation",
    slug: "/services/student-accommodation",
    summary:
      "Access 65,000+ verified properties across 640 cities worldwide via our trusted partners University Living and Casita.",
    highlights: [
      "Verified listings only",
      "Virtual viewings",
      "Flexible lease options",
      "Move-in support",
    ],
  },
  {
    icon: HeartPulse,
    color: "#dc2626",
    title: "Health Insurance",
    slug: "/services/health-insurance",
    summary:
      "Navigate compulsory and optional health cover requirements for each country — so you're protected from day one.",
    highlights: [
      "OSHC / OVHC (Australia)",
      "NHS guidance (UK)",
      "Policy comparison",
      "Claim support",
    ],
  },
  {
    icon: Globe,
    color: "#d97706",
    title: "Migration Services",
    slug: "/services/migration",
    summary:
      "Expert legal pathways for permanent residency, skilled worker visas, and family reunification through certified agents.",
    highlights: [
      "PR pathway planning",
      "Skilled worker visas",
      "Partner & family visas",
      "MARA-registered agents",
    ],
  },
];

const steps = [
  {
    step: 1,
    icon: Search,
    title: "Free consultation",
    desc: "Meet our counselors to discuss your goals, background, and preferred destinations.",
  },
  {
    step: 2,
    icon: BookOpen,
    title: "Profile evaluation",
    desc: "We assess academics, test scores, and finances to map out the best strategy for you.",
  },
  {
    step: 3,
    icon: PenTool,
    title: "Application & documents",
    desc: "SOPs, forms, visa docs, and scholarship essays — prepared and refined by our specialists.",
  },
  {
    step: 4,
    icon: Send,
    title: "Submission & follow-up",
    desc: "We submit before deadlines, track your applications, and respond to queries on your behalf.",
  },
  {
    step: 5,
    icon: ShieldCheck,
    title: "Visa & insurance",
    desc: "Complete visa filing support plus health cover guidance before you depart.",
  },
  {
    step: 6,
    icon: PartyPopper,
    title: "Arrive & settle in",
    desc: "Pre-departure orientation, accommodation ready, and ongoing support after you land.",
  },
];

const commitments = [
  {
    icon: Users,
    title: "Personalised counseling",
    desc: "Every student gets a dedicated advisor — no cookie-cutter plans.",
  },
  {
    icon: ShieldCheck,
    title: "Transparent process",
    desc: "No hidden fees, no surprises. We tell you exactly what to expect at every step.",
  },
  {
    icon: CheckCircle,
    title: "Proven track record",
    desc: "15,000+ students placed, 98% visa success rate, 12+ years of experience.",
  },
  {
    icon: Plane,
    title: "End-to-end support",
    desc: "From first consultation to post-arrival settlement — we're with you throughout.",
  },
];

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
  { flag: "🇦🇪", name: "UAE" },
  { flag: "🇪🇺", name: "Europe" },
];

const stats = [
  { value: "500+", label: "Partner Universities" },
  { value: "15K+", label: "Students Placed" },
  { value: "98%", label: "Visa Success Rate" },
  { value: "12+", label: "Years Experience" },
];

/* ─── component ─── */
export default function WillProvide() {
  const containerRef = useReveal();

  return (
    <>
      <style>{BASE_STYLES}</style>

      <div className="wp-page" ref={containerRef}>
        {/* ── Hero ── */}
        <section
          style={{
            position: "relative",
            padding: "96px 0 80px",
            overflow: "hidden",
            background:
              "linear-gradient(135deg,rgba(0,91,143,0.06) 0%,rgba(74,131,243,0.04) 100%)",
          }}
        >
          {/* blob */}
          <div
            style={{
              position: "absolute",
              width: 480,
              height: 480,
              borderRadius: "50%",
              background: "rgba(0,91,143,0.07)",
              filter: "blur(80px)",
              top: -120,
              right: -80,
              pointerEvents: "none",
            }}
          />
          <div
            className="wp-container"
            style={{ position: "relative", zIndex: 1 }}
          >
            <div className="wp-reveal" style={{ maxWidth: 700 }}>
              <span className="wp-badge">
                <span className="wp-badge-dot" />
                About Head Edu Care
              </span>
              <h1 className="wp-h1">
                Everything We Will <span>Provide for Your Global Journey</span>
              </h1>
              <p className="wp-lead" style={{ marginBottom: 36 }}>
                From your first consultation to your first day on campus — Head
                Edu Care offers a full suite of student services designed to
                make studying abroad seamless, affordable, and successful.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <Link to="/freeconsulation" className="wp-cta-btn">
                  <ArrowRight size={18} />
                  Book Free Consultation
                </Link>
                <Link to="/services" className="wp-cta-btn-ghost">
                  Explore All Services
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── Stats strip ── */}
        <div className="stats-strip">
          <div className="wp-container">
            <div className="g4">
              {stats.map((s, i) => (
                <div
                  key={i}
                  className="wp-reveal"
                  style={{ textAlign: "center" }}
                >
                  <p
                    style={{
                      fontSize: "clamp(28px,4vw,42px)",
                      fontWeight: 900,
                      color: "#fff",
                      margin: 0,
                    }}
                  >
                    {s.value}
                  </p>
                  <p
                    style={{
                      fontSize: 12,
                      color: "rgba(255,255,255,0.75)",
                      textTransform: "uppercase",
                      letterSpacing: ".08em",
                      marginTop: 6,
                      fontWeight: 600,
                    }}
                  >
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Services overview ── */}
        <section className="wp-section">
          <div className="wp-container">
            <div
              className="wp-reveal"
              style={{ marginBottom: 48, maxWidth: 560 }}
            >
              <p className="wp-label">Our Services</p>
              <h2 className="wp-h2">
                Six Core Services, <span>One Trusted Partner</span>
              </h2>
              <p className="wp-body" style={{ marginTop: 12 }}>
                Every service we offer is built around one goal — getting you to
                the right institution, in the right country, with everything in
                place before you arrive.
              </p>
            </div>

            <div className="g3">
              {services.map((s, i) => {
                const Icon = s.icon;
                return (
                  <div key={i} className="svc-card wp-reveal">
                    <div
                      className="svc-icon-wrap"
                      style={{ background: `${s.color}15` }}
                    >
                      <Icon size={26} color={s.color} />
                    </div>
                    <h3
                      style={{
                        fontWeight: 700,
                        fontSize: 17,
                        color: "#0d121b",
                        marginBottom: 10,
                      }}
                    >
                      {s.title}
                    </h3>
                    <p
                      className="wp-body"
                      style={{ fontSize: 14, marginBottom: 20, flexGrow: 1 }}
                    >
                      {s.summary}
                    </p>
                    {/* highlights */}
                    <ul
                      style={{
                        listStyle: "none",
                        padding: 0,
                        margin: "0 0 24px",
                        display: "flex",
                        flexDirection: "column",
                        gap: 8,
                      }}
                    >
                      {s.highlights.map((h, j) => (
                        <li
                          key={j}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 8,
                            fontSize: 13,
                            color: "#4b5563",
                          }}
                        >
                          <span
                            style={{
                              width: 18,
                              height: 18,
                              borderRadius: "50%",
                              background: `${s.color}15`,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              fontSize: 10,
                              color: s.color,
                              flexShrink: 0,
                            }}
                          >
                            ✓
                          </span>
                          {h}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to={s.slug}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 6,
                        fontSize: 13,
                        fontWeight: 700,
                        color: s.color,
                        textDecoration: "none",
                        marginTop: "auto",
                      }}
                    >
                      Learn more <ArrowRight size={14} />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <div className="wp-divider" />

        {/* ── How we work ── */}
        <section className="wp-section-alt">
          <div className="wp-container">
            <div
              className="wp-reveal"
              style={{ marginBottom: 48, maxWidth: 560 }}
            >
              <p className="wp-label">How It Works</p>
              <h2 className="wp-h2">
                Your Journey in <span>Six Steps</span>
              </h2>
              <p className="wp-body" style={{ marginTop: 12 }}>
                A clear, structured process from the moment you reach out to the
                day you settle into your new home abroad.
              </p>
            </div>

            <div className="g3" style={{ marginBottom: 20 }}>
              {steps.slice(0, 3).map((s) => {
                const Icon = s.icon;
                return (
                  <div key={s.step} className="step-card wp-reveal">
                    <div className="step-num">{s.step}</div>
                    <div
                      style={{
                        width: 44,
                        height: 44,
                        background: "rgba(0,91,143,0.08)",
                        borderRadius: 12,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: 14,
                        marginTop: 8,
                      }}
                    >
                      <Icon size={22} color="#005B8F" />
                    </div>
                    <h4
                      style={{
                        fontWeight: 700,
                        fontSize: 15,
                        color: "#0d121b",
                        marginBottom: 8,
                      }}
                    >
                      {s.title}
                    </h4>
                    <p className="wp-body" style={{ fontSize: 14 }}>
                      {s.desc}
                    </p>
                  </div>
                );
              })}
            </div>
            <div className="g3">
              {steps.slice(3).map((s) => {
                const Icon = s.icon;
                return (
                  <div key={s.step} className="step-card wp-reveal">
                    <div className="step-num">{s.step}</div>
                    <div
                      style={{
                        width: 44,
                        height: 44,
                        background: "rgba(0,91,143,0.08)",
                        borderRadius: 12,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: 14,
                        marginTop: 8,
                      }}
                    >
                      <Icon size={22} color="#005B8F" />
                    </div>
                    <h4
                      style={{
                        fontWeight: 700,
                        fontSize: 15,
                        color: "#0d121b",
                        marginBottom: 8,
                      }}
                    >
                      {s.title}
                    </h4>
                    <p className="wp-body" style={{ fontSize: 14 }}>
                      {s.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Destinations ── */}
        <section className="wp-section">
          <div className="wp-container">
            <div
              className="wp-reveal"
              style={{
                marginBottom: 36,
                textAlign: "center",
                maxWidth: 580,
                margin: "0 auto 36px",
              }}
            >
              <p className="wp-label">Destinations</p>
              <h2 className="wp-h2">
                Countries We <span>Support Admissions For</span>
              </h2>
              <p className="wp-body" style={{ marginTop: 12 }}>
                Our counselors hold in-depth knowledge of entry requirements,
                timelines, and scholarship opportunities across every major
                study destination.
              </p>
            </div>
            <div
              className="wp-reveal"
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 10,
                justifyContent: "center",
              }}
            >
              {destinations.map((c, i) => (
                <span key={i} className="c-pill">
                  {c.flag} {c.name}
                </span>
              ))}
            </div>
          </div>
        </section>

        <div className="wp-divider" />

        {/* ── Our commitments ── */}
        <section className="wp-section-alt">
          <div className="wp-container">
            <div
              className="wp-reveal"
              style={{ marginBottom: 48, maxWidth: 560 }}
            >
              <p className="wp-label">Our Promise</p>
              <h2 className="wp-h2">
                What You Can Always <span>Count On</span>
              </h2>
              <p className="wp-body" style={{ marginTop: 12 }}>
                These are the principles that shape how we serve every student
                who walks through our door.
              </p>
            </div>

            <div className="g2">
              {commitments.map((c, i) => {
                const Icon = c.icon;
                return (
                  <div key={i} className="commit-chip wp-reveal">
                    <div
                      style={{
                        width: 48,
                        height: 48,
                        background: "rgba(0,91,143,0.08)",
                        borderRadius: 12,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <Icon size={22} color="#005B8F" />
                    </div>
                    <div>
                      <h4
                        style={{
                          fontWeight: 700,
                          fontSize: 15,
                          color: "#0d121b",
                          marginBottom: 6,
                        }}
                      >
                        {c.title}
                      </h4>
                      <p className="wp-body" style={{ fontSize: 14 }}>
                        {c.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── CTA Banner ── */}
        <section
          style={{
            padding: "80px 0",
            background: "linear-gradient(135deg,#005B8F 0%,#004270 100%)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: -80,
              right: -80,
              width: 400,
              height: 400,
              borderRadius: "50%",
              background: "rgba(255,255,255,0.04)",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: -60,
              left: -60,
              width: 300,
              height: 300,
              borderRadius: "50%",
              background: "rgba(255,255,255,0.03)",
            }}
          />
          <div
            className="wp-container"
            style={{
              position: "relative",
              zIndex: 1,
              textAlign: "center",
            }}
          >
            <div className="wp-reveal">
              <h2
                style={{
                  fontSize: 36,
                  fontWeight: 900,
                  color: "#fff",
                  marginBottom: 14,
                  lineHeight: 1.15,
                }}
              >
                Ready to Begin Your Journey?
              </h2>
              <p
                style={{
                  fontSize: 16,
                  color: "rgba(255,255,255,0.8)",
                  marginBottom: 32,
                  fontWeight: 300,
                  maxWidth: 520,
                  margin: "0 auto 32px",
                }}
              >
                Book a free consultation with one of our expert counselors today
                — your global education story starts here.
              </p>
              <div
                style={{
                  display: "flex",
                  gap: 12,
                  justifyContent: "center",
                  flexWrap: "wrap",
                }}
              >
                <Link
                  to="/freeconsulation"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    background: "#fff",
                    color: "#005B8F",
                    padding: "14px 32px",
                    borderRadius: 12,
                    fontWeight: 700,
                    fontSize: 15,
                    textDecoration: "none",
                    fontFamily: "Lexend,sans-serif",
                  }}
                >
                  Book Free Consultation →
                </Link>
                <Link
                  to="/services"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    background: "rgba(255,255,255,0.12)",
                    color: "#fff",
                    padding: "14px 32px",
                    borderRadius: 12,
                    fontWeight: 700,
                    fontSize: 15,
                    textDecoration: "none",
                    border: "1px solid rgba(255,255,255,0.25)",
                    fontFamily: "Lexend,sans-serif",
                  }}
                >
                  View All Services
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
