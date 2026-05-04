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
  Calendar,
  Clock,
  Video,
  Phone,
  MessageSquare,
  Zap,
  CheckCircle,
  AlertCircle,
  Users,
  FileText,
  Globe,
  ShieldCheck,
  Headphones,
  MapPin,
  ArrowRight,
  Star,
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
    icon: Zap,
    title: "Instant Profile Assessment",
    desc: "Get a quick verdict on your admission chances. Share your GPA and test scores, and our experts will tell you which universities are within reach.",
  },
  {
    icon: Calendar,
    title: "Urgent Visa Guidance",
    desc: "Facing a tight deadline or a complex visa query? Book a same-day slot to get clarity on documentation, financial proof, or interview prep.",
  },
  {
    icon: FileText,
    title: "SOP & Essay Quick Review",
    desc: "Already written your Statement of Purpose? Get a professional critique in 24 hours. We check for tone, structure, and compliance with prompt requirements.",
  },
  {
    icon: MessageSquare,
    title: "Country-Specific Q&A",
    desc: "Confused between the UK and Australia? Not sure about US F1 visa rules? Get direct, factual answers from country-specialized counselors.",
  },
  {
    icon: Headphones,
    title: "Post-Offer Support",
    desc: "Received an offer but unsure about the conditions? We explain your next steps, fee deposits, and enrollment procedures in a quick call.",
  },
  {
    icon: ShieldCheck,
    title: "Pre-Departure Briefing",
    desc: "Flying soon? Get a concise briefing on packing, airport pickup, accommodation check-in, and essential local sim/bank setup.",
  },
];

const appointmentTypes = [
  {
    icon: Video,
    title: "Video Consultation",
    desc: "Face-to-face interaction via Zoom or Google Meet. Best for detailed profile assessments and building a personal connection with your counselor.",
    color: "#005B8F",
  },
  {
    icon: Phone,
    title: "Voice Call",
    desc: "A focused audio call for quick queries, status updates, or urgent clarifications. Efficient and straight to the point.",
    color: "#16a34a",
  },
  {
    icon: MessageSquare,
    title: "Chat Support",
    desc: "For very short questions like 'What is the IELTS requirement for X university?' or 'When is the next intake?'. Fast text-based support.",
    color: "#9333ea",
  },
  {
    icon: MapPin,
    title: "In-Person Visit",
    desc: "Visit our Dhaka office for a comprehensive session. Bring all your documents for a physical review and personalized roadmap planning.",
    color: "#d97706",
  },
  {
    icon: Users,
    title: "Group Webinar",
    desc: "Join our free weekly webinars on specific topics like 'UK Visa Rules 2026' or 'Scholarship Hunting'. Great for general awareness.",
    color: "#dc2626",
  },
  {
    icon: Clock,
    title: "Express 15-Min Slot",
    desc: "Perfect for a single, burning question. No fluff, just the answer you need to move forward. Ideal for busy students and parents.",
    color: "#4A83F3",
  },
];

const process = [
  {
    step: 1,
    icon: Calendar,
    title: "Pick a Time Slot",
    desc: "View our real-time calendar and select a time that works for you. We offer slots from 8 AM to 10 PM to accommodate students and working professionals.",
  },
  {
    step: 2,
    icon: FileText,
    title: "Share Your Context",
    desc: "Briefly describe your query or upload relevant documents (transcripts, offer letters) so the counselor can prepare before the call.",
  },
  {
    step: 3,
    icon: CheckCircle,
    title: "Confirmation & Link",
    desc: "Receive an instant email/SMS confirmation with the meeting link (Zoom/Google Meet) and a reminder 1 hour before the session.",
  },
  {
    step: 4,
    icon: Video,
    title: "Attend Session",
    desc: "Join the call on time. Our counselor will address your queries, provide actionable advice, and outline the next steps clearly.",
  },
  {
    step: 5,
    icon: FileText,
    title: "Get Summary Notes",
    desc: "Within 24 hours, receive a summary of the discussion, including any recommended universities, document checklists, or action items.",
  },
  {
    step: 6,
    icon: ArrowRight,
    title: "Follow-Up Support",
    desc: "Need more help? You can book a follow-up slot at a discounted rate or upgrade to our full end-to-end service package.",
  },
];

const preparationItems = [
  "Have your academic transcripts (SSC/HSC/Bachelor) ready",
  "Know your English test score (IELTS/TOEFL/PTE) or planned date",
  "Prepare a list of 3-5 specific questions you want answered",
  "If discussing visas, have your financial documents handy",
  "Ensure a stable internet connection and quiet environment",
  "Keep a notepad or digital doc open to take notes",
  "Be honest about your budget constraints and career goals",
  "If applying with family, ensure parents are present if needed",
];

const commonMistakes = [
  "Joining the call late without prior notice",
  "Not having basic information (GPA, intended major) ready",
  "Asking vague questions like 'Is abroad good for me?'",
  "Expecting guaranteed visa approval during a consultation",
  "Ignoring the counselor's advice on realistic university choices",
  "Forgetting to ask about scholarship deadlines",
  "Not checking the meeting link before the scheduled time",
  "Multitasking during the session and missing key details",
];

const faqs = [
  {
    q: "How much does a quick appointment cost?",
    a: "Our initial 15-minute assessment calls are often free for new students. Detailed 45-60 minute consultations may have a nominal fee, which is fully adjustable against our full service package if you choose to enroll with us.",
  },
  {
    q: "Can I reschedule my appointment?",
    a: "Yes, you can reschedule up to 4 hours before the appointed time via the link in your confirmation email. Late cancellations may incur a small fee to respect our counselors' time.",
  },
  {
    q: "Who will I be speaking with?",
    a: "You will be matched with a counselor who specializes in your target country. For example, if you are applying to the USA, you will speak with our US-trained expert, not a generalist.",
  },
  {
    q: "What if I miss my online appointment?",
    a: "If you miss the call, we wait for 10 minutes. If you don't join, the slot is considered used. Please ensure you are on time. In case of technical issues, contact us immediately via WhatsApp.",
  },
  {
    q: "Do you offer appointments on weekends?",
    a: "Yes, we understand that students and working professionals are busy during the week. We have dedicated slots available on Fridays and Saturdays from 10 AM to 6 PM.",
  },
  {
    q: "Can I book an appointment for my child?",
    a: "Absolutely. We encourage parents to join the consultation, especially when discussing financial planning and safety concerns. You can book the slot under your name and include your child.",
  },
];

/* ─────────────── PAGE COMPONENT ─────────────── */

export default function QuickAppointments() {
  const containerRef = useReveal();

  return (
    <>
      <style>
        {BASE_STYLES +
          `
          .appt-type-card {
            border-radius: 20px;
            overflow: hidden;
            border: 1px solid var(--srv-border);
            background: var(--srv-bg-card);
            transition: all .25s;
          }
          .appt-type-card:hover {
            box-shadow: 0 12px 40px rgba(0,91,143,0.1);
            transform: translateY(-4px);
          }
          .appt-type-header {
            padding: 20px 24px;
            display: flex;
            align-items: center;
            gap: 12px;
            border-bottom: 1px solid var(--srv-border);
          }
          .appt-type-body {
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
          title="Expert Guidance in"
          highlight="Minutes, Not Days"
          desc="Don't wait weeks for answers. Book a quick appointment with Head Edu Care's expert counselors for instant clarity on admissions, visas, scholarships, and study abroad planning."
          blobTop={-50}
          blobRight={-90}
        />

        {/* ── SERVICES GRID ── */}
        <section className="srv-section">
          <div className="srv-container">
            <SectionHeader
              label="Why Book?"
              title="Instant Solutions for"
              highlight="Every Stage"
              body="Whether you are just starting out or stuck at the final visa stage, our quick appointments are designed to unblock your path."
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

        {/* ── APPOINTMENT TYPES ── */}
        <section className="srv-section-alt">
          <div className="srv-container">
            <SectionHeader
              label="Formats"
              title="Choose Your"
              highlight="Consultation Mode"
              body="We offer flexible ways to connect, ensuring you get the support you need in the format that suits you best."
            />
            <div
              className="grid-3"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3,1fr)",
                gap: 20,
              }}
            >
              {appointmentTypes.map((a, i) => {
                const Icon = a.icon;
                return (
                  <div key={i} className="appt-type-card srv-reveal">
                    <div
                      className="appt-type-header"
                      style={{ background: `${a.color}10` }}
                    >
                      <div
                        style={{
                          width: 40,
                          height: 40,
                          borderRadius: 10,
                          background: `${a.color}20`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        <Icon size={20} color={a.color} />
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
                        {a.title}
                      </h4>
                    </div>
                    <div className="appt-type-body">
                      <p className="srv-body" style={{ fontSize: 13 }}>
                        {a.desc}
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
              title="Book & Connect in"
              highlight="6 Easy Steps"
              body="A seamless booking experience designed to get you talking to an expert as quickly as possible."
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
              label="Preparation Guide"
              title="Make the Most of"
              highlight="Your Session"
              body="Being prepared helps our counselors give you the most accurate and useful advice in the shortest time."
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
                <CheckList items={preparationItems} />
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
              label="Global Expertise"
              title="Counselors for Every"
              highlight="Major Destination"
              body="No matter where you want to study, we have a specialist ready to talk. Book a session with a country-specific expert today."
              centered
            />
            <CountryTags countries={destinations} />
          </div>
        </section>

        {/* ── STATS ── */}
        <StatsStrip
          stats={[
            { value: "24hr", label: "Response Time" },
            { value: "15K+", label: "Students Guided" },
            { value: "98%", label: "Satisfaction Rate" },
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
          title="Ready to Get Answers?"
          desc="Stop guessing and start planning. Book your quick appointment now and take the next step with confidence."
          label="Book a Free Consultation"
          link="/freeconsulation"
        />
      </div>
    </>
  );
}
