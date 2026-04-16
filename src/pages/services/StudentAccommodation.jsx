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
  Building2,
  Globe,
  MapPin,
  ShieldCheck,
  Wallet,
  Building,
  FileText,
  Users,
  Bed,
  DoorOpen,
  Home,
  School,
  MessageCircle,
  Search,
  Camera,
  PenSquare,
  Plane,
  Map,
} from "lucide-react";

const providers = [
  {
    name: "University Living",
    tagline: "65,000+ Properties across 640 Cities Globally",
    icon: MapPin,
    color: "#005B8F",
    features: [
      "Safe & verified listings only",
      "100% verified property listings",
      "24/7 customer support",
      "Low price guarantee",
      "Free cancellation options",
      "Instant booking available",
    ],
    highlight: "640 Cities",
    stat2: "65,000+",
    statLabel2: "Properties",
  },
  {
    name: "Casita",
    tagline: "Properties in 400+ Cities across 60+ Countries",
    icon: Globe,
    color: "#4A83F3",
    features: [
      "Properties in 60+ countries",
      "Wide range of room types",
      "Flexible lease options",
      "Dedicated move-in support",
      "Direct landlord communication",
      "No hidden booking fees",
    ],
    highlight: "60+ Countries",
    stat2: "400+",
    statLabel2: "Cities",
  },
];

const factors = [
  {
    icon: MapPin,
    title: "Location & Connectivity",
    desc: "Choose accommodation close to your university or with easy access to public transport, shops, and daily essentials.",
  },
  {
    icon: ShieldCheck,
    title: "Safety & Security",
    desc: "Look for secure entry systems, CCTV coverage, on-site staff, and 24/7 emergency contact for a safe living environment.",
  },
  {
    icon: Wallet,
    title: "Budget & Inclusions",
    desc: "Compare total costs and what's included — utilities, internet, furnishings — to avoid hidden expenses beyond the advertised rate.",
  },
  {
    icon: Building,
    title: "Amenities & Facilities",
    desc: "Prioritise features like laundry, kitchen access, study rooms, gym, and social spaces that support your lifestyle and studies.",
  },
  {
    icon: FileText,
    title: "Contract Flexibility",
    desc: "Review lease terms, minimum stay requirements, notice periods, and cancellation policies in case your plans change.",
  },
  {
    icon: Users,
    title: "Community & Social Life",
    desc: "Consider shared vs. private options. Living with other students can ease the transition and build lasting connections.",
  },
];

const roomTypes = [
  {
    icon: Bed,
    type: "Studio Apartment",
    desc: "Self-contained unit with private kitchen, bathroom, and living space.",
  },
  {
    icon: DoorOpen,
    type: "Ensuite Room",
    desc: "Private bedroom with attached bathroom, shared kitchen and common areas.",
  },
  {
    icon: Users,
    type: "Shared Apartment",
    desc: "Private bedroom in a shared flat with other students.",
  },
  {
    icon: Home,
    type: "Private Flat",
    desc: "Entire apartment to yourself or for use with a partner.",
  },
  {
    icon: School,
    type: "University Halls",
    desc: "On-campus or affiliated accommodation managed directly by the university.",
  },
  {
    icon: Building,
    type: "Homestay",
    desc: "Live with a local family in the host country.",
  },
];

const howItWorks = [
  {
    step: 1,
    icon: MessageCircle,
    title: "Speak with Our Counselor",
    desc: "Discuss your study location, budget, and move-in date.",
  },
  {
    step: 2,
    icon: Search,
    title: "Browse & Compare Options",
    desc: "Explore verified listings filtered by location and price.",
  },
  {
    step: 3,
    icon: Camera,
    title: "Virtual Viewing",
    desc: "Assess the property before committing.",
  },
  {
    step: 4,
    icon: PenSquare,
    title: "Review Lease & Book",
    desc: "Complete your booking securely.",
  },
  {
    step: 5,
    icon: Plane,
    title: "Move-In Support",
    desc: "Receive move-in details and local guide.",
  },
];

const faqs = [
  {
    q: "What kind of accommodation options can I find through University Living and Casita?",
    a: "Both platforms offer verified student housing near major universities — ranging from shared apartments and studios to ensuite rooms and private flats — based on your preferences and budget.",
  },
  {
    q: "Can I compare prices and facilities before booking?",
    a: "Yes! Both University Living and Casita allow you to filter by price, location, amenities, and room types — making it easy to compare and choose what suits you best.",
  },
  {
    q: "Is it safe to book accommodation through these platforms?",
    a: "Absolutely. Both providers are trusted globally and list only verified properties. Support teams are available to assist you from enquiry to move-in.",
  },
  {
    q: "How early should I book my student accommodation?",
    a: "It's best to book as early as possible — ideally right after receiving your offer letter. Early booking gives you more choices, better deals, and peace of mind before your journey.",
  },
  {
    q: "Can Head Edu Care help me choose the right accommodation?",
    a: "Yes. Our counsellors guide you on choosing housing based on your study location, lifestyle, and budget — ensuring a smooth transition abroad.",
  },
];

export default function StudentAccommodation() {
  const containerRef = useReveal();

  return (
    <>
      <style>
        {BASE_STYLES +
          `
        .provider-card { border-radius:24px; overflow:hidden; border:1px solid var(--srv-border); background:var(--srv-bg-card); transition:all .25s; }
        .provider-card:hover { box-shadow:0 12px 40px rgba(0,91,143,0.12); transform:translateY(-4px); }
        .room-chip { padding:14px 18px; border-radius:14px; background:var(--srv-bg-alt); border:1px solid var(--srv-border); transition:all .2s; cursor:default; }
        .room-chip:hover { background:var(--srv-bg-card); border-color:rgba(0,91,143,0.2); box-shadow:0 4px 16px rgba(0,91,143,0.08); }
        .dark .room-chip:hover { border-color:rgba(74,131,243,0.3); }
        @media(max-width:768px){ .grid-2{ grid-template-columns:1fr !important; } .grid-3{ grid-template-columns:1fr 1fr !important; } }
        @media(max-width:480px){ .grid-3{ grid-template-columns:1fr !important; } }
      `}
      </style>
      <div className="srv-page" ref={containerRef}>
        <PageHero
          badge="Student Services"
          title="Find Affordable and Trusted"
          highlight="Student Accommodations"
          desc="Unlock a seamless home-finding experience — from browsing verified listings to moving in with confidence, Head Edu Care guides you to the right accommodation anywhere in the world."
          blobTop={-40}
          blobRight={-100}
        />

        {/* Provider cards */}
        <section className="srv-section">
          <div className="srv-container">
            <SectionHeader
              label="Trusted Partners"
              title="Choose from Reliable"
              highlight="Accommodation Providers"
              body="We partner with the world's leading student housing platforms to give you access to the largest verified property networks globally."
            />
            <div
              className="grid-2"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 28,
              }}
            >
              {providers.map((p) => {
                const Icon = p.icon;

                return (
                  <div key={p.name} className="provider-card srv-reveal">
                    <div
                      style={{
                        background: p.color,
                        padding: "28px 32px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <div>
                        <p
                          style={{
                            fontSize: 11,
                            fontWeight: 700,
                            color: "rgba(255,255,255,0.7)",
                            textTransform: "uppercase",
                            letterSpacing: ".08em",
                            fontFamily: "Lexend,sans-serif",
                          }}
                        >
                          Partner Platform
                        </p>

                        <h3
                          style={{
                            fontWeight: 900,
                            fontSize: 26,
                            color: "#fff",
                            fontFamily: "Lexend,sans-serif",
                            marginTop: 4,
                          }}
                        >
                          {p.name}
                        </h3>
                      </div>

                      <span>
                        <Icon size={42} color="white" />
                      </span>
                    </div>

                    <div style={{ padding: "28px 32px" }}>
                      <p className="srv-body">{p.tagline}</p>
                      <CheckList items={p.features} columns={2} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <div className="srv-divider" />

        {/* Room types */}
        <section className="srv-section-alt">
          <div className="srv-container">
            <SectionHeader
              label="Housing Options"
              title="Types of Student"
              highlight="Accommodation"
              body="From private studios to shared flats and university halls — find the option that fits your lifestyle and budget."
            />
            <div
              className="grid-3"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3,1fr)",
                gap: 16,
              }}
            >
              {roomTypes.map((r) => {
                const Icon = r.icon;

                return (
                  <div key={r.type} className="room-chip srv-reveal">
                    <span
                      style={{
                        display: "block",
                        marginBottom: 10,
                      }}
                    >
                      <Icon size={28} />
                    </span>

                    <h4
                      style={{
                        fontWeight: 700,
                        fontSize: 15,
                        color: "var(--srv-text-primary)",
                        fontFamily: "Lexend,sans-serif",
                        marginBottom: 6,
                      }}
                    >
                      {r.type}
                    </h4>

                    <p className="srv-body" style={{ fontSize: 13 }}>
                      {r.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Factors to consider */}
        <section className="srv-section">
          <div className="srv-container">
            <SectionHeader
              label="Decision Guide"
              title="Factors to Consider Before"
              highlight="Finalising Accommodation"
              body="Here are the key factors every student should evaluate — priorities vary, so weigh each against your personal needs."
            />
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3,1fr)",
                gap: 20,
              }}
            >
              {factors.map((f, i) => (
                <IconCard key={i} icon={f.icon} title={f.title} desc={f.desc} />
              ))}
            </div>
          </div>
        </section>

        <div className="srv-divider" />

        {/* How it works */}
        <section className="srv-section-alt">
          <div className="srv-container">
            <SectionHeader
              label="Process"
              title="How the Booking"
              highlight="Process Works"
              body="Our streamlined process takes you from browsing to move-in with full support at every stage."
            />
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3,1fr)",
                gap: 20,
              }}
            >
              {howItWorks.slice(0, 3).map((s) => (
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
                gridTemplateColumns: "1fr 1fr",
                gap: 20,
                marginTop: 20,
                maxWidth: 780,
              }}
            >
              {howItWorks.slice(3).map((s) => (
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

        {/* Stats */}
        <StatsStrip
          stats={[
            { value: "65,000+", label: "Properties Listed" },
            { value: "640", label: "Cities Covered" },
            { value: "60+", label: "Countries" },
            { value: "24/7", label: "Customer Support" },
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
          title="Not Sure Where to Start?"
          desc="Let Head Edu Care's counselors guide you to the perfect accommodation for your study destination and budget."
        />
      </div>
    </>
  );
}
