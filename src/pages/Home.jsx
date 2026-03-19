import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../lib/supabaseClient";

/* ===== Fallback data (used when Supabase is not configured) ===== */
const FALLBACK_SERVICES = [
  {
    id: "1",
    title: "Study Abroad",
    icon: "school",
    description:
      "Comprehensive guidance from university selection to application and enrollment at top global institutions in Australia, UK, USA, and Canada.",
  },
  {
    id: "2",
    title: "Migration Services",
    icon: "public",
    description:
      "Expert legal pathways for permanent residency, work permits, and family visas. Our certified agents ensure your application is watertight.",
  },
  {
    id: "3",
    title: "Visa Assistance",
    icon: "description",
    description:
      "High-success rate documentation support and rigorous interview preparation sessions to maximize your chances of approval.",
  },
  {
    id: "4",
    title: "Test Preparation",
    icon: "quiz",
    description:
      "Expert coaching for IELTS, TOEFL, PTE, GRE, GMAT, and SAT with proven score improvement strategies.",
  },
  {
    id: "5",
    title: "Career Counseling",
    icon: "work",
    description:
      "Personalized career guidance to align your education with long-term professional goals worldwide.",
  },
  {
    id: "6",
    title: "Scholarship Guidance",
    icon: "emoji_events",
    description:
      "Identify and apply for scholarships to reduce your financial burden and study at top institutions.",
  },
];

const FALLBACK_COUNTRIES = [
  {
    id: "1",
    name: "Australia",
    flag_url: "🇦🇺",
    image_url:
      "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=800",
    description:
      "World-class education with excellent post-study work opportunities.",
  },
  {
    id: "2",
    name: "United Kingdom",
    flag_url: "🇬🇧",
    image_url:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800",
    description: "Home to the most prestigious universities in the world.",
  },
  {
    id: "3",
    name: "Canada",
    flag_url: "🇨🇦",
    image_url:
      "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=800",
    description: "Affordable education with excellent immigration pathways.",
  },
  {
    id: "4",
    name: "United States",
    flag_url: "🇺🇸",
    image_url:
      "https://images.unsplash.com/photo-1508433957232-3107f5fd5995?q=80&w=1186&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=800",
    description: "World leader in higher education and research.",
  },
  {
    id: "5",
    name: "Germany",
    flag_url: "🇩🇪",
    image_url:
      "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800",
    description: "Tuition-free public universities with strong programs.",
  },
  {
    id: "6",
    name: "Japan",
    flag_url: "🇯🇵",
    image_url:
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800",
    description: "Cutting-edge technology education with scholarships.",
  },
];

const FALLBACK_TESTIMONIALS = [
  {
    id: "1",
    student_name: "Rahim Ahmed",
    photo_url:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200",
    university: "University of Melbourne",
    country: "Australia",
    quote:
      "Head Edu Care made my dream of studying in Australia a reality. Their guidance was exceptional from start to finish!",
  },
  {
    id: "2",
    student_name: "Fatima Khan",
    photo_url:
      "https://images.unsplash.com/photo-1706256446485-58bedf9cbf97?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=200",
    university: "University of Toronto",
    country: "Canada",
    quote:
      "The team helped me secure a full scholarship at UofT. Their expertise is unmatched. Truly life-changing!",
  },
  {
    id: "3",
    student_name: "Sakib Hasan",
    photo_url:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200",
    university: "Imperial College London",
    country: "United Kingdom",
    quote:
      "From IELTS prep to visa approval, Head Edu Care handled everything professionally. Now at Imperial!",
  },
  {
    id: "4",
    student_name: "Nadia Islam",
    photo_url:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200",
    university: "MIT",
    country: "United States",
    quote:
      "I never thought I could get into MIT, but the counselors believed in me and guided me every step!",
  },
];

const FALLBACK_STATS = {
  partner_universities: "500+",
  visa_success_rate: "98%",
  students_placed: "15K+",
  years_experience: "12+",
};

/* ===== useReveal hook for scroll animations ===== */
function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 },
    );
    const el = ref.current;
    if (el) {
      const revealEls = el.querySelectorAll(".reveal");
      revealEls.forEach((el) => observer.observe(el));
    }
    return () => observer.disconnect();
  }, []);
  return ref;
}

const HERO_IMAGES = [
  // Row 1 - varied sizes
  {
    src: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600",
    alt: "University Campus",
    cls: "top-0 left-0",
    w: 160,
    h: 140,
    delay: "0s",
    dur: "5s",
    vanishDelay: "0s",
  },
  {
    src: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?w=600",
    alt: "Graduation",
    cls: "top-0 left-[55%]",
    w: 90,
    h: 110,
    delay: "1.5s",
    dur: "4.5s",
    vanishDelay: "6s",
  },
  {
    src: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=600",
    alt: "Education",
    cls: "top-[10px] right-0",
    w: 140,
    h: 120,
    delay: "0.3s",
    dur: "5.5s",
    vanishDelay: "9s",
  },
  // Row 2
  {
    src: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=600",
    alt: "Library",
    cls: "top-[32%] left-[2%]",
    w: 110,
    h: 130,
    delay: "0.4s",
    dur: "5.5s",
    vanishDelay: "2s",
  },
  {
    src: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600",
    alt: "Students Abroad",
    cls: "top-[28%] left-[26%]",
    w: 150,
    h: 110,
    delay: "1.2s",
    dur: "6.5s",
    vanishDelay: "5s",
  },
  {
    src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600",
    alt: "Campus View",
    cls: "top-[35%] right-[24%]",
    w: 100,
    h: 140,
    delay: "2s",
    dur: "4s",
    vanishDelay: "8s",
  },
  {
    src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600",
    alt: "Lecture Hall",
    cls: "top-[30%] right-0",
    w: 130,
    h: 100,
    delay: "1.8s",
    dur: "5.2s",
    vanishDelay: "1s",
  },
  // Row 3
  {
    src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600",
    alt: "Group Study",
    cls: "bottom-[8%] left-0",
    w: 130,
    h: 120,
    delay: "0.6s",
    dur: "4.8s",
    vanishDelay: "4s",
  },
  {
    src: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=600",
    alt: "Team Project",
    cls: "bottom-[2%] left-[28%]",
    w: 100,
    h: 90,
    delay: "1s",
    dur: "5.8s",
    vanishDelay: "7s",
  },
  {
    src: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=600",
    alt: "Classroom",
    cls: "bottom-[5%] left-[52%]",
    w: 150,
    h: 130,
    delay: "0.2s",
    dur: "6.2s",
    vanishDelay: "10s",
  },
  {
    src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600",
    alt: "High School",
    cls: "bottom-[0%] right-0",
    w: 110,
    h: 100,
    delay: "1.4s",
    dur: "4.6s",
    vanishDelay: "2.5s",
  },
  // Floating extras (overlap between rows)
  {
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600",
    alt: "University Life",
    cls: "top-[16%] left-[15%]",
    w: 80,
    h: 80,
    delay: "0.9s",
    dur: "5.3s",
    vanishDelay: "5.5s",
  },
  {
    src: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=600",
    alt: "Study Time",
    cls: "top-[50%] right-[12%]",
    w: 90,
    h: 85,
    delay: "1.6s",
    dur: "4.2s",
    vanishDelay: "8.5s",
  },
];

export default function Home() {
  const [services, setServices] = useState(FALLBACK_SERVICES);
  const [countries, setCountries] = useState(FALLBACK_COUNTRIES);
  const [testimonials, setTestimonials] = useState(FALLBACK_TESTIMONIALS);
  const [stats, setStats] = useState(FALLBACK_STATS);
  const [lightbox, setLightbox] = useState(null); // index of open image
  const containerRef = useReveal();

  useEffect(() => {
    async function fetchData() {
      try {
        const [sRes, cRes, tRes, stRes] = await Promise.all([
          supabase.from("services").select("*").order("display_order"),
          supabase
            .from("countries")
            .select("*")
            .eq("is_active", true)
            .order("display_order"),
          supabase.from("testimonials").select("*").eq("is_featured", true),
          supabase.from("site_settings").select("*"),
        ]);
        if (sRes.data?.length) setServices(sRes.data);
        if (cRes.data?.length) setCountries(cRes.data);
        if (tRes.data?.length) setTestimonials(tRes.data);
        if (stRes.data?.length) {
          const settingsMap = {};
          stRes.data.forEach((s) => {
            settingsMap[s.key] = s.value;
          });
          setStats((prev) => ({ ...prev, ...settingsMap }));
        }
      } catch (e) {
        // Use fallback data
      }
    }
    fetchData();
  }, []);

  return (
    <div ref={containerRef}>
      {/* ===== LIGHTBOX MODAL ===== */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center"
          onClick={() => setLightbox(null)}
        >
          <div className="absolute inset-0 bg-black/85 backdrop-blur-sm" />
          <div
            className="relative z-10 max-w-[90vw] max-h-[90vh] animate-popIn"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={HERO_IMAGES[lightbox].src}
              alt={HERO_IMAGES[lightbox].alt}
              className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl"
            />
            <p className="text-center text-white text-lg font-bold mt-4">
              {HERO_IMAGES[lightbox].alt}
            </p>
            {/* Close button */}
            <button
              onClick={() => setLightbox(null)}
              className="absolute -top-4 -right-4 w-10 h-10 bg-white text-gray-800 rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
            {/* Prev / Next */}
            {lightbox > 0 && (
              <button
                onClick={() => setLightbox(lightbox - 1)}
                className="absolute left-[-50px] top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur text-white rounded-full flex items-center justify-center hover:bg-white/40 transition-colors"
              >
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
            )}
            {lightbox < HERO_IMAGES.length - 1 && (
              <button
                onClick={() => setLightbox(lightbox + 1)}
                className="absolute right-[-50px] top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur text-white rounded-full flex items-center justify-center hover:bg-white/40 transition-colors"
              >
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            )}
          </div>
        </div>
      )}

      {/* ===== HERO SECTION ===== */}
      <section className="relative overflow-hidden pt-16 pb-20 lg:pt-24 lg:pb-32 bg-white dark:bg-background-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div className="max-w-2xl opacity-0 animate-fadeInUp">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6 animate-popIn animate-delay-300">
                <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
                Admissions Open 2025-26
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-[1.1] mb-8 tracking-tight text-[#0d121b] dark:text-white">
                Transform Your Future with{" "}
                <span className="text-primary">Expert Global</span> Education
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 leading-relaxed font-light animate-fadeInUp animate-delay-100">
                Your bridge to {stats.partner_universities} world-class
                universities and seamless migration pathways. Join{" "}
                {stats.students_placed} successful students achieving their
                dreams abroad.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-fadeInUp animate-delay-200">
                <Link
                  to="/contact"
                  className="bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all flex items-center justify-center gap-2 shadow-xl shadow-primary/20 hover:-translate-y-1"
                >
                  <span className="material-symbols-outlined">
                    event_available
                  </span>
                  Free Consultation
                </Link>
                <Link
                  to="/services"
                  className="bg-gray-100 dark:bg-gray-800 text-[#0d121b] dark:text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-all flex items-center justify-center gap-2 border border-gray-200 dark:border-gray-700 hover:-translate-y-1"
                >
                  <span className="material-symbols-outlined">search</span>
                  Our Services
                </Link>
              </div>
              <div className="mt-12 flex items-center gap-6 animate-fadeInUp animate-delay-300">
                <div className="flex -space-x-3">
                  {[
                    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100",
                    "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100",
                    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100",
                  ].map((src, i) => (
                    <img
                      key={i}
                      alt="Student"
                      className="h-12 w-12 rounded-full border-4 border-white dark:border-background-dark object-cover hover:z-10 transition-transform hover:scale-110"
                      src={src}
                    />
                  ))}
                </div>
                <div className="text-sm">
                  <p className="font-bold text-[#0d121b] dark:text-white">
                    Join {stats.students_placed} Alumni
                  </p>
                  <p className="text-gray-500">Trusted by students worldwide</p>
                </div>
              </div>
            </div>

            {/* Right - Animated Image Mosaic */}
            <div className="relative opacity-0 animate-slideInRight animate-delay-200">
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" />
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl animate-pulse animate-delay-500" />

              {/* Mosaic Grid */}
              <div className="relative h-[420px] sm:h-[480px] lg:h-[540px] w-full">
                {HERO_IMAGES.map((img, i) => (
                  <div
                    key={i}
                    onClick={() => setLightbox(i)}
                    className={`absolute ${img.cls} mosaic-img rounded-2xl overflow-hidden shadow-xl border-2 border-white/60 dark:border-gray-700/60 cursor-pointer`}
                    style={{
                      width: img.w,
                      height: img.h,
                      animation: `heroFloat ${img.dur} ease-in-out infinite ${img.delay}, heroVanish 12s ease-in-out infinite ${img.vanishDelay}`,
                      zIndex: 10 - i,
                    }}
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-0 transition-opacity duration-300 mosaic-overlay" />
                    <div className="absolute bottom-3 left-3 right-3 text-white opacity-0 translate-y-2 transition-all duration-300 mosaic-label">
                      <p className="text-xs font-bold drop-shadow-lg">
                        {img.alt}
                      </p>
                    </div>
                  </div>
                ))}

                {/* Floating stats badge */}
                <div
                  className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md px-6 py-3 rounded-2xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50 flex items-center gap-4"
                  style={{
                    animation: "heroFloat 4s ease-in-out infinite 0.5s",
                  }}
                >
                  <div className="text-center">
                    <p className="text-xl font-black text-primary">
                      {stats.countries_count || "50+"}
                    </p>
                    <p className="text-[10px] uppercase tracking-wider text-gray-500 font-semibold">
                      Countries
                    </p>
                  </div>
                  <div className="w-px h-8 bg-gray-200 dark:bg-gray-700" />
                  <div className="text-center">
                    <p className="text-xl font-black text-primary">
                      {stats.partner_universities}
                    </p>
                    <p className="text-[10px] uppercase tracking-wider text-gray-500 font-semibold">
                      Universities
                    </p>
                  </div>
                  <div className="w-px h-8 bg-gray-200 dark:bg-gray-700" />
                  <div className="text-center">
                    <p className="text-xl font-black text-primary">
                      {stats.visa_success_rate}
                    </p>
                    <p className="text-[10px] uppercase tracking-wider text-gray-500 font-semibold">
                      Success
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATS BANNER ===== */}
      <section className="bg-primary py-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                val: stats.partner_universities,
                label: "Partner Universities",
              },
              { val: stats.visa_success_rate, label: "Visa Success Rate" },
              { val: stats.students_placed, label: "Students Placed" },
              { val: stats.years_experience, label: "Years Experience" },
            ].map((stat, i) => (
              <div
                key={i}
                className={`text-center text-white ${i < 3 ? "border-r border-white/20" : ""} reveal`}
              >
                <p className="text-4xl lg:text-5xl font-black mb-1">
                  {stat.val}
                </p>
                <p className="text-white/80 text-sm font-medium uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SERVICES SECTION ===== */}
      <section className="py-24 bg-background-light dark:bg-background-dark/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 reveal">
            <h2 className="text-primary font-bold text-sm uppercase tracking-widest mb-3">
              Our Expert Services
            </h2>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0d121b] dark:text-white mb-6">
              Tailored Solutions for Your International Career
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              We provide end-to-end support for your education and migration
              journey, ensuring a smooth transition to your new life abroad.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 6).map((service, i) => (
              <div
                key={service.id}
                className="service-card bg-white dark:bg-gray-800 p-10 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 group reveal"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-colors group-hover:scale-110 transform">
                  <span className="material-symbols-outlined text-4xl">
                    {service.icon}
                  </span>
                </div>
                <h4 className="text-2xl font-bold mb-4 text-[#0d121b] dark:text-white">
                  {service.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                  {service.description}
                </p>
                <Link
                  to="/services"
                  className="inline-flex items-center text-primary font-bold hover:gap-2 transition-all"
                >
                  Learn More{" "}
                  <span className="material-symbols-outlined ml-1">
                    arrow_forward
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== STUDY DESTINATIONS ===== */}
      <section className="py-24 bg-white dark:bg-background-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 reveal">
            <h2 className="text-primary font-bold text-sm uppercase tracking-widest mb-3">
              Study Destinations
            </h2>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0d121b] dark:text-white mb-6">
              Explore Top Countries
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Discover the best study destinations in the world and find the
              perfect fit for your academic journey.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {countries.slice(0, 6).map((country, i) => (
              <Link
                to="/countries"
                key={country.id}
                className="country-card relative group rounded-2xl overflow-hidden h-72 reveal cursor-pointer"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <img
                  src={country.image_url}
                  alt={country.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="overlay absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10">
                  <span className="text-3xl mb-2 block">
                    {country.flag_url}
                  </span>
                  <h4 className="text-2xl font-bold">{country.name}</h4>
                  <p className="country-info text-sm text-white/80 mt-1">
                    {country.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="py-24 bg-background-light dark:bg-background-dark/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 reveal">
            <h2 className="text-primary font-bold text-sm uppercase tracking-widest mb-3">
              Success Stories
            </h2>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0d121b] dark:text-white mb-6">
              What Our Students Say
            </h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={t.id}
                className="bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-lg transition-shadow reveal"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <span
                      key={j}
                      className="material-symbols-outlined text-yellow-400 text-lg"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 italic">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <img
                    src={t.photo_url}
                    alt={t.student_name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
                  />
                  <div>
                    <p className="font-bold text-sm text-[#0d121b] dark:text-white">
                      {t.student_name}
                    </p>
                    <p className="text-xs text-gray-500">
                      {t.university}, {t.country}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-background-dark rounded-[2rem] p-12 lg:p-20 overflow-hidden shadow-2xl">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-[120px]" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600 rounded-full blur-[120px]" />
            </div>
            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              <div className="reveal">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6">
                  Ready to Start Your Global Journey?
                </h2>
                <p className="text-gray-400 text-lg mb-10">
                  Our expert counselors are waiting to help you choose the right
                  path for your academic and professional growth.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/contact"
                    className="bg-white text-primary px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors shadow-xl hover:-translate-y-1"
                  >
                    Book Free Consultation
                  </Link>
                  <Link
                    to="/countries"
                    className="border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-colors hover:-translate-y-1"
                  >
                    Browse Destinations
                  </Link>
                </div>
              </div>
              <div className="hidden lg:block reveal">
                <img
                  alt="Students studying"
                  className="rounded-2xl shadow-2xl"
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c476?w=800"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
