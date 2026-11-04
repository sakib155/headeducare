import { useState, useEffect } from "react";
import { useBackground } from "../lib/BackgroundsContext";
import { Link } from "react-router-dom";
import { api } from "../lib/apiClient";

const FALLBACK_SERVICES = [
  {
    id: "1",
    title: "Study Abroad",
    slug: "study-abroad",
    icon: "school",
    description:
      "Comprehensive guidance from university selection to application and enrollment at top global institutions.",
    detailed_content:
      "We help you navigate the complex world of international education. From choosing the right university to securing admission, our expert counselors guide you every step of the way. Our services include university shortlisting, application preparation, SOP and essay writing support, and enrollment assistance.",
  },
  {
    id: "2",
    title: "Migration Services",
    slug: "migration-services",
    icon: "public",
    description:
      "Expert legal pathways for permanent residency, work permits, and family visas with certified agents.",
    detailed_content:
      "Our MARA-registered migration agents provide expert legal advice for all immigration matters. We handle skilled worker visas, permanent residency applications, partner visas, and family reunification. Our success rate speaks for itself.",
  },
  {
    id: "3",
    title: "Visa Assistance",
    slug: "visa-assistance",
    icon: "description",
    description:
      "High-success rate documentation support and rigorous interview preparation sessions.",
    detailed_content:
      "We prepare bulletproof visa applications with comprehensive documentation. Our team reviews every detail, conducts mock interviews, and prepares you for any scenario. We have maintained a 98% visa success rate.",
  },
  {
    id: "4",
    title: "Test Preparation",
    slug: "test-preparation",
    icon: "quiz",
    description:
      "Expert coaching for IELTS, TOEFL, PTE, GRE, GMAT, and SAT with proven score improvement.",
    detailed_content:
      "Our experienced trainers use proven methodologies to help you achieve your target scores. Small batch sizes ensure personal attention. We offer both online and offline classes with flexible timings.",
  },
  {
    id: "5",
    title: "Career Counseling",
    slug: "career-counseling",
    icon: "work",
    description:
      "Personalized career guidance to align your education with long-term professional goals.",
    detailed_content:
      "Our career counselors help you make informed decisions about your education and career path. We assess your strengths, interests, and goals to recommend the best programs and countries for your future success.",
  },
  {
    id: "6",
    title: "Scholarship Guidance",
    slug: "scholarship-guidance",
    icon: "emoji_events",
    description:
      "Identify and apply for scholarships to reduce your financial burden and study at top institutions.",
    detailed_content:
      "We help you find and apply for merit-based, need-based, and country-specific scholarships. Our team assists with scholarship essays, applications, and interview preparation to maximize your chances of funding.",
  },
  
];

const processSteps = [
  {
    icon: "chat",
    title: "Free Consultation",
    desc: "Book a session with our expert counselors to discuss your goals and aspirations.",
  },
  {
    icon: "assessment",
    title: "Profile Evaluation",
    desc: "We assess your academic profile, test scores, and preferences to find the best fit.",
  },
  {
    icon: "list_alt",
    title: "University Shortlisting",
    desc: "Curated list of universities based on your profile, budget, and career goals.",
  },
  {
    icon: "edit_document",
    title: "Application Processing",
    desc: "End-to-end application support including SOPs, essays, and documentation.",
  },
  {
    icon: "verified",
    title: "Visa & Pre-departure",
    desc: "Visa application support, mock interviews, and pre-departure orientation.",
  },
  {
    icon: "flight_takeoff",
    title: "Fly & Thrive!",
    desc: "Post-arrival support including accommodation, banking, and settling in guidance.",
  },
];

export default function Services() {
  const bgServices = useBackground("bg_services");
  const [services, setServices] = useState(FALLBACK_SERVICES);

  useEffect(() => {
    async function fetchServices() {
      try {
        const data = await api.fetchServices();
        if (data?.length) setServices(data);
      } catch (e) {
        /* use fallback */
      }
    }
    fetchServices();
  }, []);

  return (
    <div>
      {/* Hero - overlay band */}
      <section
        className="sol-overlay sol-hero-inner"
        style={{ backgroundImage: `url(${bgServices})` }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-20 lg:pt-44 lg:pb-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-semibold text-white leading-tight">
              Expert <span className="text-[#7fb2dd]">Services</span> for Your
              Global Journey
            </h1>
            <p className="text-lg text-white/85 leading-relaxed mt-8">
              Comprehensive support at every stage, from selecting the right
              university to landing in your dream country.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, i) => (
              <div
                key={service.id}
                className="sol-card p-9 group"
              >
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 shrink-0 bg-[#204276] flex items-center justify-center text-white transition-colors group-hover:bg-black">
                    <span className="material-symbols-outlined text-3xl">
                      {service.icon}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-[#1a1a1a]">
                      {service.title}
                    </h3>
                    <p className="text-gray-500 leading-relaxed mb-4">
                      {service.description}
                    </p>
                    {service.detailed_content && (
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {service.detailed_content}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-[#f2f2f2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="sol-eyebrow text-sm mb-3">The Process</h2>
            <h3 className="text-3xl sm:text-4xl font-semibold text-[#1a1a1a]">
              How It Works
            </h3>
            <hr className="sol-separator" />
            <p className="text-gray-500 text-lg mt-6">
              Our streamlined 6-step process makes your journey from inquiry to
              departure smooth and stress-free.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, i) => (
              <div
                key={i}
                className="relative bg-white p-8 pt-10 border border-[#e3e6eb] hover:shadow-lg transition-shadow"
              >
                <div
                  className="absolute -top-4 left-6 w-9 h-9 bg-[#204276] text-white flex items-center justify-center font-bold text-lg shadow-md"
                  style={{ fontFamily: '"Oswald", sans-serif' }}
                >
                  {i + 1}
                </div>
                <span className="material-symbols-outlined text-[#204276] text-3xl mb-4 block">
                  {step.icon}
                </span>
                <h4 className="text-lg font-semibold mb-2 text-[#1a1a1a]">
                  {step.title}
                </h4>
                <p className="text-gray-500 text-sm">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="sol-gold-strip py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#0f203c] mb-6">
            Ready to Get Started?
          </h2>
          <hr className="sol-separator" />
          <p className="text-[#0f203c]/80 text-lg mb-10 max-w-2xl mx-auto mt-6">
            Book a free consultation today and let our experts craft the perfect
            plan for your academic future.
          </p>
          <Link to="/freeconsulation" className="sol-btn text-lg">
            Book Free Consultation
            <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
