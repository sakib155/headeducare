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
  PenTool,
  FileText,
  MessageCircle,
  Search,
  Target,
  Send,
  PartyPopper,
  CheckCircle,
  Lightbulb,
  Users,
  BookOpen,
  GraduationCap,
  Star,
  Layers,
  AlignLeft,
  RefreshCcw,
  ShieldCheck,
  Clock,
  Award,
  Sparkles,
  AlertCircle,
  ArrowRight,
  Edit3,
  Quote,
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

const essayTypes = [
  {
    icon: FileText,
    title: "Statement of Purpose (SOP)",
    color: "#005B8F",
    desc: "The most critical document in your application — a compelling SOP articulates your academic journey, career goals, and why this specific program is the right next step for you.",
  },
  {
    icon: Users,
    title: "Personal Statement",
    color: "#4A83F3",
    desc: "Required by UK, Australian, and many US universities — this essay reveals who you are beyond your grades, highlighting your motivations, values, and personal growth.",
  },
  {
    icon: Award,
    title: "Scholarship Essays",
    color: "#16a34a",
    desc: "Scholarship bodies look for leadership, community impact, and alignment with their mission. We craft essays that speak directly to what each funder values most.",
  },
  {
    icon: GraduationCap,
    title: "Research Proposals",
    color: "#9333ea",
    desc: "For PhD and research program applicants, a well-structured proposal that demonstrates academic depth and a clear research gap is essential for supervisor and committee approval.",
  },
  {
    icon: BookOpen,
    title: "Motivation Letters",
    color: "#d97706",
    desc: "Used widely in European institutions, motivation letters present your academic ambitions and professional goals in a concise, targeted format suited to each program.",
  },
  {
    icon: Layers,
    title: "Supplemental Essays",
    color: "#dc2626",
    desc: "Many universities — particularly in the USA — require multiple short essays on topics like diversity, challenges overcome, or community contributions. We handle them all.",
  },
];

const writingServices = [
  {
    icon: Search,
    title: "Deep Discovery Session",
    desc: "Before writing a single word, we conduct a structured interview to uncover your academic story, key experiences, motivations, and goals — the raw material of a powerful essay.",
  },
  {
    icon: Target,
    title: "Institution-Specific Tailoring",
    desc: "Every university, department, and scholarship body has a distinct culture and preference. We align your essay's tone, structure, and content to what each reader is looking for.",
  },
  {
    icon: PenTool,
    title: "Expert Draft Writing",
    desc: "Our experienced writers craft a compelling first draft that is authentically yours — not templated, not generic — built from your unique story and goals.",
  },
  {
    icon: RefreshCcw,
    title: "Unlimited Revision Rounds",
    desc: "You review every draft. We refine until the essay reflects your voice perfectly. There are no limits on revision rounds — we iterate until you are satisfied.",
  },
  {
    icon: ShieldCheck,
    title: "Plagiarism & AI Detection Review",
    desc: "Every final essay is checked using industry-standard tools to ensure 100% originality. Universities increasingly screen submissions — your essay will pass every check.",
  },
  {
    icon: Clock,
    title: "Deadline-Safe Delivery",
    desc: "We track every university deadline and build in buffer time. No rushed final drafts — your essay reaches you complete, polished, and ready for submission with time to spare.",
  },
];

const whatMakesGreat = [
  {
    icon: Star,
    title: "A Clear, Honest Narrative",
    desc: "The best essays tell a true story — with a beginning, turning point, and direction. Admissions readers can spot exaggeration; authenticity makes you memorable.",
  },
  {
    icon: Target,
    title: "Specificity Over Generality",
    desc: "Vague statements like 'I am passionate about engineering' lose readers. Specific experiences, real turning points, and named goals create essays that stand out.",
  },
  {
    icon: Lightbulb,
    title: "Alignment with the Program",
    desc: "Your essay must demonstrate you researched the program — faculty, research focus, teaching method — and can articulate why it is the right fit for your goals.",
  },
  {
    icon: AlignLeft,
    title: "Strong Opening, Stronger Close",
    desc: "Admissions readers may skim. A compelling first sentence and a forward-looking final paragraph frame everything in between and leave a lasting impression.",
  },
  {
    icon: Users,
    title: "Your Voice, Not a Template",
    desc: "Recycled essay templates are recognisable immediately. Your essay must sound like you — not like a hundred other applicants who used the same structure.",
  },
  {
    icon: CheckCircle,
    title: "Zero Grammar or Format Errors",
    desc: "A brilliant essay undermined by typos or inconsistent formatting signals carelessness. Every essay we deliver is proofread to professional publication standard.",
  },
];

const process = [
  {
    step: 1,
    icon: MessageCircle,
    title: "Initial Consultation",
    desc: "We discuss the universities you are applying to, the essay prompts required, word limits, and your deadlines. A clear scope is set from day one.",
  },
  {
    step: 2,
    icon: Search,
    title: "Discovery Interview",
    desc: "Our writer conducts a structured session to extract your story — academic background, defining moments, career goals, and what makes you different.",
  },
  {
    step: 3,
    icon: FileText,
    title: "Outline & Structure Review",
    desc: "Before writing begins, we share a clear essay outline for your approval — so there are no surprises in the draft and the narrative direction is agreed.",
  },
  {
    step: 4,
    icon: PenTool,
    title: "First Draft Delivered",
    desc: "A complete first draft written in your voice is delivered for your review. Feedback is collected and prioritised for the revision phase.",
  },
  {
    step: 5,
    icon: RefreshCcw,
    title: "Revision & Refinement",
    desc: "We refine the draft through as many rounds as needed. Each pass sharpens the narrative, strengthens specific details, and perfects the tone.",
  },
  {
    step: 6,
    icon: ShieldCheck,
    title: "Final Review & Delivery",
    desc: "The final essay is proofread, formatted, and checked for plagiarism and AI detection before being handed to you — ready to submit.",
  },
];

const doList = [
  "Start your essay at least 6–8 weeks before your deadline",
  "Share real, specific experiences — not general claims",
  "Explain your 'why' — not just what you have done, but what it means",
  "Research the program and mention specific faculty or modules",
  "Maintain a consistent, professional but personal tone throughout",
  "Follow all word count and formatting requirements exactly",
  "Have your essay read by someone unfamiliar with your background",
  "Keep your conclusion forward-looking and goal-oriented",
];

const dontList = [
  "Do not start with a dictionary definition or overused quote",
  "Do not repeat information already covered in your CV or transcript",
  "Do not use AI-generated text without expert human review and rewriting",
  "Do not use the same essay for every university without tailoring",
  "Do not exaggerate or fabricate achievements — it is easily detected",
  "Do not exceed the specified word limit under any circumstance",
  "Do not submit without a thorough proofread for grammar and tone",
  "Do not wait until the last week — rushed essays are weak essays",
];

const essayPromptTypes = [
  {
    label: "Why This University?",
    color: "#005B8F",
    bg: "rgba(0,91,143,0.07)",
    border: "rgba(0,91,143,0.18)",
    desc: "Requires you to demonstrate genuine knowledge of the institution — specific programs, faculty, research labs, or culture — and articulate a clear fit.",
  },
  {
    label: "Why This Field of Study?",
    color: "#16a34a",
    bg: "rgba(22,163,74,0.07)",
    border: "rgba(22,163,74,0.18)",
    desc: "Tests the depth and sincerity of your academic interest. The strongest answers trace back to a specific moment or experience that sparked the passion.",
  },
  {
    label: "Tell Us About Yourself",
    color: "#9333ea",
    bg: "rgba(147,51,234,0.07)",
    border: "rgba(147,51,234,0.18)",
    desc: "Open-ended prompts that invite your personal story. The key is choosing one defining thread — not listing everything — and developing it with depth.",
  },
  {
    label: "A Challenge You Overcame",
    color: "#d97706",
    bg: "rgba(217,119,6,0.07)",
    border: "rgba(217,119,6,0.18)",
    desc: "Looks for resilience, reflection, and growth. The challenge itself matters less than what you learned from it and how it shaped your direction.",
  },
  {
    label: "Leadership or Impact",
    color: "#dc2626",
    bg: "rgba(220,38,38,0.07)",
    border: "rgba(220,38,38,0.18)",
    desc: "Scholarship and graduate programs frequently ask this. The best answers focus on a specific initiative, its measurable outcome, and your personal role.",
  },
  {
    label: "Short Answer / Diversity Essays",
    color: "#0F6E56",
    bg: "rgba(15,110,86,0.07)",
    border: "rgba(15,110,86,0.18)",
    desc: "Common in US applications — 150–250 word prompts on diversity, community, or goals. Conciseness and precision are critical; every word must earn its place.",
  },
];

const faqs = [
  {
    q: "Is it ethical to get help writing my university essay?",
    a: "Yes — seeking guidance, coaching, and professional editing is a widely accepted and legitimate part of the application process. Our role is to help you articulate your own authentic story, experiences, and goals in the most compelling way possible. We do not fabricate content — every essay is built entirely from what you tell us about yourself.",
  },
  {
    q: "Will my essay sound like me, or like a professional writer?",
    a: "Your essay will sound like the best version of you. Our writers begin with a discovery interview to understand your voice, story, and personality. The essay is then crafted to reflect how you think and express yourself — refined for clarity, not replaced by someone else's voice.",
  },
  {
    q: "How many universities can you write essays for?",
    a: "We can write essays for as many universities as you are applying to. Each essay is individually tailored — we do not reuse or lightly edit the same base draft for multiple institutions.",
  },
  {
    q: "What if I have a very tight deadline?",
    a: "We handle urgent timelines. Let us know your deadline in your first session and we will structure the process to deliver a polished essay in time. That said, the best essays take time — we always recommend starting at least 6–8 weeks before submission.",
  },
  {
    q: "Do you help with research proposals for PhD applications?",
    a: "Yes. Research proposals require a different structure and depth than standard essays. Our team includes specialists who work with research-level applicants to develop proposals that demonstrate academic rigour, a clearly identified research gap, and methodological awareness.",
  },
  {
    q: "Will my essay pass plagiarism and AI detection checks?",
    a: "Yes. Every final essay is run through industry-standard plagiarism and AI detection tools before delivery. All content is original and written by human experts. Institutions are increasingly using detection software — we ensure your submission passes every check.",
  },
  {
    q: "Can you help with word limit reduction without losing impact?",
    a: "Absolutely. Trimming a strong essay to fit a tight word limit is one of the most skilled parts of the process. We can edit any existing essay for word count while preserving — and often strengthening — its core message.",
  },
];

/* ─────────────── PAGE COMPONENT ─────────────── */

export default function SOPEssayDrafting() {
  const containerRef = useReveal();

  return (
    <>
      <style>
        {BASE_STYLES +
          `
          .essay-type-card {
            border-radius: 20px;
            overflow: hidden;
            border: 1px solid var(--srv-border);
            background: var(--srv-bg-card);
            transition: all .25s;
          }
          .essay-type-card:hover {
            box-shadow: 0 12px 40px rgba(0,91,143,0.1);
            transform: translateY(-4px);
          }
          .essay-type-header {
            padding: 18px 22px;
            display: flex;
            align-items: center;
            gap: 12px;
            border-bottom: 1px solid var(--srv-border);
          }
          .essay-type-body {
            padding: 18px 22px;
          }
          .prompt-card {
            border-radius: 18px;
            padding: 24px 24px;
            border: 1px solid;
            transition: all .22s;
          }
          .prompt-card:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 28px rgba(0,0,0,0.07);
          }
          .prompt-label {
            display: inline-flex;
            align-items: center;
            gap: 7px;
            padding: 5px 14px;
            border-radius: 40px;
            font-size: 12px;
            font-weight: 700;
            font-family: Lexend, sans-serif;
            margin-bottom: 14px;
            border: 1px solid;
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
          title="Essays That Get You Into Your"
          highlight="Dream University"
          desc="Your grades open doors. Your essay determines which ones stay open. Head Edu Care's expert writers help you tell your authentic story in a way that captivates admissions committees and scholarship panels worldwide."
          blobTop={-50}
          blobRight={-90}
        />

        {/* ── ESSAY TYPES WE WRITE ── */}
        <section className="srv-section">
          <div className="srv-container">
            <SectionHeader
              label="Essay Types"
              title="Every Essay Format,"
              highlight="Expertly Crafted"
              body="Different universities, countries, and scholarships require different essay formats. We write every type — tailored to each institution's specific expectations and culture."
            />
            <div
              className="grid-3"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3,1fr)",
                gap: 20,
              }}
            >
              {essayTypes.map((e, i) => {
                const Icon = e.icon;
                return (
                  <div key={i} className="essay-type-card srv-reveal">
                    <div
                      className="essay-type-header"
                      style={{ background: `${e.color}10` }}
                    >
                      <div
                        style={{
                          width: 40,
                          height: 40,
                          borderRadius: 10,
                          background: `${e.color}20`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        <Icon size={20} color={e.color} />
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
                        {e.title}
                      </h4>
                    </div>
                    <div className="essay-type-body">
                      <p className="srv-body" style={{ fontSize: 13 }}>
                        {e.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <div className="srv-divider" />

        {/* ── WRITING SERVICES ── */}
        <section className="srv-section-alt">
          <div className="srv-container">
            <SectionHeader
              label="Our Services"
              title="End-to-End Essay"
              highlight="Writing Support"
              body="From the blank page to the final submission-ready document — our team handles every stage of the essay writing process with expertise, care, and integrity."
            />
            <div
              className="grid-3"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3,1fr)",
                gap: 20,
              }}
            >
              {writingServices.map((s, i) => (
                <IconCard key={i} icon={s.icon} title={s.title} desc={s.desc} />
              ))}
            </div>
          </div>
        </section>

        {/* ── COMMON PROMPT TYPES ── */}
        <section className="srv-section">
          <div className="srv-container">
            <SectionHeader
              label="Prompt Guide"
              title="Common Essay Prompts"
              highlight="& How We Approach Them"
              body="Every prompt type demands a different strategy. Our writers know what admissions readers are really looking for — and build each essay to answer the deeper question behind the prompt."
            />
            <div
              className="grid-3"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3,1fr)",
                gap: 18,
              }}
            >
              {essayPromptTypes.map((p, i) => (
                <div
                  key={i}
                  className="prompt-card srv-reveal"
                  style={{ background: p.bg, borderColor: p.border }}
                >
                  <div
                    className="prompt-label"
                    style={{
                      background: p.bg,
                      color: p.color,
                      borderColor: p.border,
                    }}
                  >
                    {p.label}
                  </div>
                  <p
                    style={{
                      fontSize: 13,
                      color: "var(--srv-text-body)",
                      lineHeight: 1.75,
                      fontFamily: "Lexend,sans-serif",
                      fontWeight: 300,
                    }}
                  >
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="srv-divider" />

        {/* ── WHAT MAKES A GREAT ESSAY ── */}
        <section className="srv-section-alt">
          <div className="srv-container">
            <SectionHeader
              label="Writing Principles"
              title="What Makes a University Essay"
              highlight="Truly Stand Out"
              body="After reviewing thousands of essays and studying what gets students accepted, we have identified the principles that separate memorable applications from forgettable ones."
            />
            <div
              className="grid-3"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3,1fr)",
                gap: 20,
              }}
            >
              {whatMakesGreat.map((s, i) => (
                <IconCard key={i} icon={s.icon} title={s.title} desc={s.desc} />
              ))}
            </div>
          </div>
        </section>

        {/* ── OUR PROCESS ── */}
        <section className="srv-section">
          <div className="srv-container">
            <SectionHeader
              label="How It Works"
              title="Our 6-Step Essay"
              highlight="Writing Process"
              body="A structured, collaborative process — from discovery to final delivery — that ensures your essay is authentically yours and strategically compelling."
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
              label="Essay Guidelines"
              title="The Essential Essay"
              highlight="Dos and Don'ts"
              body="Small decisions in your essay — the opening line, the level of specificity, the closing paragraph — have an outsized impact on how you are perceived."
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
                <CheckList items={doList} />
              </InfoBox>
              <InfoBox
                icon={AlertCircle}
                title="Avoid These Mistakes"
                variant="amber"
              >
                <CheckList items={dontList} />
              </InfoBox>
            </div>
          </div>
        </section>

        {/* ── DESTINATIONS ── */}
        <section className="srv-section">
          <div className="srv-container">
            <SectionHeader
              label="Destinations"
              title="Universities & Countries"
              highlight="We Write Essays For"
              body="Our writers have in-depth knowledge of the essay conventions, cultural expectations, and evaluation criteria specific to each study destination."
              centered
            />
            <CountryTags countries={destinations} />
          </div>
        </section>

        {/* ── STATS ── */}
        <StatsStrip
          stats={[
            { value: "10K+", label: "Essays Written" },
            { value: "500+", label: "Partner Universities" },
            { value: "98%", label: "Offer Rate" },
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
          title="Let's Write an Essay That Gets You In"
          desc="Book your free consultation today and let our expert writers turn your story into the essay that opens the door to your dream university."
        />
      </div>
    </>
  );
}
