import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../lib/supabaseClient";

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
  const [services, setServices] = useState(FALLBACK_SERVICES);

  useEffect(() => {
    async function fetchServices() {
      try {
        const { data } = await supabase
          .from("services")
          .select("*")
          .order("display_order");
        if (data?.length) setServices(data);
      } catch (e) {
        /* use fallback */
      }
    }
    fetchServices();
  }, []);

  return (
    <div>
      {/* Hero */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-primary/5 to-blue-50 dark:from-background-dark dark:to-surface-dark overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h2 className="text-primary font-bold text-sm uppercase tracking-widest mb-3">
              What We Offer
            </h2>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0d121b] dark:text-white mb-6 leading-tight">
              Expert <span className="text-primary">Services</span> for Your
              Global Journey
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              Comprehensive support at every stage — from selecting the right
              university to landing in your dream country.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white dark:bg-background-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <div
                key={service.id}
                className="bg-background-light dark:bg-gray-800 p-10 rounded-2xl border border-gray-100 dark:border-gray-700 hover:shadow-xl hover:-translate-y-1 transition-all group"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 shrink-0 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined text-3xl">
                      {service.icon}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-[#0d121b] dark:text-white">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                      {service.description}
                    </p>
                    {service.detailed_content && (
                      <p className="text-gray-500 dark:text-gray-500 text-sm leading-relaxed">
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
      <section className="py-24 bg-background-light dark:bg-background-dark/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-primary font-bold text-sm uppercase tracking-widest mb-3">
              The Process
            </h2>
            <h3 className="text-3xl sm:text-4xl font-black text-[#0d121b] dark:text-white mb-6">
              How It Works
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Our streamlined 6-step process makes your journey from inquiry to
              departure smooth and stress-free.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, i) => (
              <div
                key={i}
                className="relative bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-shadow"
              >
                <div className="absolute -top-4 -left-2 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-black text-lg shadow-lg">
                  {i + 1}
                </div>
                <div className="mt-4">
                  <span className="material-symbols-outlined text-primary text-3xl mb-4 block">
                    {step.icon}
                  </span>
                  <h4 className="text-lg font-bold mb-2 text-[#0d121b] dark:text-white">
                    {step.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
            Book a free consultation today and let our experts craft the perfect
            plan for your academic future.
          </p>
          <Link
            to="/freeconsulation"
            className="inline-flex bg-white text-primary px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors shadow-xl hover:-translate-y-1"
          >
            Book Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
