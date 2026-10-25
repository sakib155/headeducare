import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { api, FALLBACK_COUNTRIES } from "../lib/apiClient";
import { fetchMergedCountries } from "../lib/countryData";

// Read image dimensions client-side for upload size/ratio validation
function getImageDimensions(file) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const url = URL.createObjectURL(file);
    img.onload = () => {
      URL.revokeObjectURL(url);
      resolve({ width: img.naturalWidth, height: img.naturalHeight });
    };
    img.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error("Could not read image dimensions"));
    };
    img.src = url;
  });
}

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
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );
    const el = ref.current;
    if (!el) return () => observer.disconnect();

    const observeAll = () => {
      el.querySelectorAll(".reveal:not(.visible)").forEach((node) =>
        observer.observe(node),
      );
    };
    observeAll();

    // Re-observe when async data loads swap in new DOM nodes (e.g. countries)
    const mo = new MutationObserver(observeAll);
    mo.observe(el, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mo.disconnect();
    };
  }, []);
  return ref;
}

const HERO_IMAGES = [
  { src: "/assets/prettiest-college-campuses-princeton-1592777643.avif", alt: "Princeton University" },
  { src: "/assets/prettiest-college-campuses-stanford-university-1592777646.avif", alt: "Stanford University" },
  { src: "/assets/prettiest-college-campuses-m-i-t-1592777642.avif", alt: "MIT" },
  { src: "/assets/prettiest-college-campuses-dartmouth-college-1592777600.avif", alt: "Dartmouth College" },
  { src: "/assets/prettiest-college-campuses-university-of-chicago-1592777651.avif", alt: "University of Chicago" },
  { src: "/assets/prettiest-college-campuses-georgetown-1592777619.avif", alt: "Georgetown University" },
  { src: "/assets/howard-u-1594329564.avif", alt: "Howard University" },
  { src: "/assets/hampton-university-1594329567.avif", alt: "Hampton University" },
  { src: "/assets/prettiest-college-campuses-berry-college-1592777599.avif", alt: "Berry College" },
  { src: "/assets/prettiest-college-campuses-christopher-newport-university-1592777622.avif", alt: "Christopher Newport University" },
  { src: "/assets/prettiest-college-campuses-elon-university-1592777607.avif", alt: "Elon University" },
  { src: "/assets/prettiest-college-campuses-notre-dame-university-1592777643.avif", alt: "Notre Dame University" },
  { src: "/assets/prettiest-college-campuses-syracuse-1592777648.avif", alt: "Syracuse University" },
];

export default function Home() {
  const [services, setServices] = useState(FALLBACK_SERVICES);
  const [countries, setCountries] = useState(FALLBACK_COUNTRIES);
  const [testimonials, setTestimonials] = useState(FALLBACK_TESTIMONIALS);
  const [stats, setStats] = useState(FALLBACK_STATS);
  const [lightbox, setLightbox] = useState(null); // index of open image
  const containerRef = useReveal();
  const [leadForm, setLeadForm] = useState({
    name: "",
    email: "",
    phone: "",
    country_interest: "",
    service_interest: "",
    message: "",
  });
  const [leadStatus, setLeadStatus] = useState(null);

  // ── Give Testimonial modal ──
  const [showTestimonialModal, setShowTestimonialModal] = useState(false);
  const [testimonialForm, setTestimonialForm] = useState({
    student_name: "",
    university: "",
    country: "",
    quote: "",
    photo: null,
  });
  const [testimonialStatus, setTestimonialStatus] = useState(null); // sending | success | error
  const [testimonialMsg, setTestimonialMsg] = useState("");
  const [testimonialPhotoWarn, setTestimonialPhotoWarn] = useState("");
  const testimonialFileRef = useRef(null);

  const handleTestimonialChange = (e) =>
    setTestimonialForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  // Client-side photo size/ratio validation before submit
  const handleTestimonialPhoto = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setTestimonialPhotoWarn("");
    setTestimonialForm((prev) => ({ ...prev, photo: file }));
    try {
      const { width, height } = await getImageDimensions(file);
      const targetRatio = 400 / 400; // 1:1 avatar
      const srcRatio = width / height;
      const ratioDiff = Math.abs(srcRatio - targetRatio) / targetRatio;
      if (width < 400 || height < 400) {
        setTestimonialPhotoWarn(
          `Warning: photo is ${width}×${height}, smaller than 400×400. It will be upscaled and may look soft.`,
        );
      } else if (ratioDiff > 0.2) {
        setTestimonialPhotoWarn(
          "Warning: photo will be cropped to a square (400×400). For best results use a square image.",
        );
      }
    } catch {
      // dimension check failed, server will still validate
    }
  };

  const handleTestimonialSubmit = async (e) => {
    e.preventDefault();
    if (!testimonialForm.student_name || !testimonialForm.university || !testimonialForm.country || !testimonialForm.quote) {
      setTestimonialMsg("Please fill in your name, university, country, and review.");
      setTestimonialStatus("error");
      return;
    }
    setTestimonialStatus("sending");
    setTestimonialMsg("");
    try {
      // Read the selected photo as a base64 data-URL (if any)
      const photoBase64 = await new Promise((resolve) => {
        const file = testimonialForm.photo;
        if (!file) return resolve("");
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = () => resolve("");
        reader.readAsDataURL(file);
      });

      const payload = {
        student_name: testimonialForm.student_name,
        university: testimonialForm.university,
        country: testimonialForm.country,
        quote: testimonialForm.quote,
        photo_base64: photoBase64,
      };
      const res = await fetch("/api/submit_testimonial.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({ error: "Submission failed" }));
      if (!res.ok) throw new Error(data.error || "Submission failed");
      setTestimonialStatus("success");
      setTestimonialMsg("Thank you! Your review has been submitted and is awaiting approval.");
      setTestimonialForm({ student_name: "", university: "", country: "", quote: "", photo: null });
      if (testimonialFileRef.current) testimonialFileRef.current.value = "";
      setTestimonialPhotoWarn("");
    } catch (err) {
      setTestimonialStatus("error");
      setTestimonialMsg(err.message);
    }
  };

  const handleLeadChange = (e) =>
    setLeadForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleLeadSubmit = async (e) => {
    e.preventDefault();
    setLeadStatus("sending");
    try {
      await api.submitLead(leadForm);
      setLeadStatus("success");
      setLeadForm({
        name: "",
        email: "",
        phone: "",
        country_interest: "",
        service_interest: "",
        message: "",
      });
    } catch {
      setLeadStatus("error");
    }
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const [sData, cData, tData, stData] = await Promise.all([
          api.fetchServices(),
          fetchMergedCountries(),
          api.fetchTestimonials(),
          api.fetchSettings(),
        ]);
        if (sData?.length) setServices(sData);
        
        const activeCountries = cData?.filter(c => c.is_active !== false) || [];
        if (activeCountries.length) setCountries(activeCountries);
        
        const featuredTestimonials = Array.isArray(tData)
          ? tData.filter((t) => t.is_featured)
          : [];
        // Always take the API result (even empty = "no testimonials").
        // The fallback only kicks in when the API itself fails/returns fallback.
        setTestimonials(featuredTestimonials);
        
        if (stData) {
          setStats((prev) => ({ ...prev, ...stData }));
        }
      } catch {
        // Use fallback data
      }
    }
    fetchData();
  }, []);

  const leadInputCls =
    "w-full px-4 py-3 rounded-sm border border-gray-200 bg-white text-[#1a1a1a] focus:ring-2 focus:ring-[#204276] focus:border-transparent";

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
              className="max-w-full max-h-[85vh] object-contain shadow-2xl"
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
                className="absolute -left-12.5 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur text-white rounded-full flex items-center justify-center hover:bg-white/40 transition-colors"
              >
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
            )}
            {lightbox < HERO_IMAGES.length - 1 && (
              <button
                onClick={() => setLightbox(lightbox + 1)}
                className="absolute -right-12.5 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur text-white rounded-full flex items-center justify-center hover:bg-white/40 transition-colors"
              >
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            )}
          </div>
        </div>
      )}

      {/* ===== HERO SECTION — full-bleed photo + navy overlay, dual-color H1 ===== */}
      <section
        className="sol-overlay sol-hero"
        style={{
          backgroundImage:
            "url(/assets/prettiest-college-campuses-stanford-university-1592777646.avif)",
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-24 lg:pt-48 lg:pb-32 text-center">
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-white opacity-0 animate-fadeInUp"
            style={{ fontFamily: '"Roboto Slab", serif' }}
          >
            Higher Education
            <span className="block pb-2 text-[#7fb2dd]">Abroad Destination</span>
          </h1>

          <p className="mt-8 text-white/90 text-lg leading-relaxed opacity-0 animate-fadeInUp animate-delay-100">
            Head Educare is one of Bangladesh's leading international education consultancies, helping students pursue higher education opportunities across the globe. For more than a decade, we have successfully guided students through university selection, scholarships, admissions, education financing, visa processing, and pre-departure preparation.
          </p>
          <p className="mt-4 text-white/75 leading-relaxed opacity-0 animate-fadeInUp animate-delay-100">
            Our experienced counselors work closely with every student to understand their academic background, career aspirations, and financial circumstances before designing a personalized study abroad strategy. Whether your destination is the USA, UK, Canada, Australia, New Zealand, Europe, Malaysia, or South Korea, we provide end-to-end support throughout your journey.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4 opacity-0 animate-fadeInUp animate-delay-200">
            <Link to="/freeconsulation" className="sol-btn justify-center text-lg">
              Free Consultation
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
            <Link to="/services" className="sol-btn-light justify-center text-lg">
              Our Services
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>

          <div className="mt-12 flex items-center justify-center gap-6 opacity-0 animate-fadeInUp animate-delay-300">
            <div className="flex -space-x-3">
              {[
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100",
                "https://images.unsplash.com/photo-1672857994550-154578be9f41?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100",
              ].map((src, i) => (
                <img
                  key={i}
                  alt="Student"
                  className="h-12 w-12 rounded-full border-4 border-white/70 object-cover"
                  src={src}
                />
              ))}
            </div>
            <div className="text-sm text-left">
              <p className="font-bold text-white">Join {stats.students_placed} Alumni</p>
              <p className="text-white/70">Trusted by students worldwide</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATS BAND — dark navy strip with big Oswald numbers ===== */}
      <section className="sol-dark-strip py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { val: stats.partner_universities, label: "Partner Universities" },
              { val: stats.visa_success_rate, label: "Visa Success Rate" },
              { val: stats.students_placed, label: "Students Placed" },
              { val: stats.years_experience, label: "Years Experience" },
            ].map((stat, i) => (
              <div
                key={i}
                className={`text-center ${i < 3 ? "md:border-r md:border-white/20" : ""} reveal`}
              >
                <p className="sol-stat-number !text-white text-4xl lg:text-5xl mb-1">
                  {stat.val}
                </p>
                <p className="text-white/75 text-xs font-medium uppercase tracking-widest" style={{ fontFamily: '"Oswald", sans-serif' }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CAMPUS GALLERY STRIP (opens lightbox) ===== */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-7 gap-3">
            {HERO_IMAGES.slice(0, 7).map((img, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setLightbox(i)}
                className="sol-gallery-item h-24 sm:h-28 reveal"
                style={{ transitionDelay: `${i * 60}ms` }}
                aria-label={img.alt}
              >
                <img src={img.src} alt={img.alt} loading="lazy" />
                <span className="sol-gallery-caption text-xs font-semibold">{img.alt}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SERVICES SECTION — icon callout grid ===== */}
      <section className="py-24 bg-[#f2f2f2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 reveal">
            <h2 className="sol-eyebrow text-sm mb-3">Our Expert Services</h2>
            <h3 className="text-3xl sm:text-4xl font-semibold text-[#1a1a1a]">
              Tailored Solutions for Your International Career
            </h3>
            <hr className="sol-separator" />
            <p className="text-gray-500 text-lg mt-6">
              We provide end-to-end support for your education and migration
              journey, ensuring a smooth transition to your new life abroad.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.slice(0, 6).map((service, i) => (
              <div
                key={service.id}
                className="sol-callout reveal"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="w-14 h-14 mx-auto bg-[#204276] flex items-center justify-center text-white mb-5">
                  <span className="material-symbols-outlined text-3xl">
                    {service.icon}
                  </span>
                </div>
                <h4 className="text-xl font-semibold mb-3 text-[#1a1a1a]">
                  {service.title}
                </h4>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-1.5 text-[#2b7bb9] font-bold text-sm hover:text-[#204276] transition-colors"
                >
                  Learn More
                  <span className="material-symbols-outlined text-lg">arrow_forward</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== STUDY DESTINATIONS — gallery tiles with hover overlay captions ===== */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 reveal">
            <h2 className="sol-eyebrow text-sm mb-3">Study Destinations</h2>
            <h3 className="text-3xl sm:text-4xl font-semibold text-[#1a1a1a]">
              Explore Top Countries
            </h3>
            <hr className="sol-separator" />
            <p className="text-gray-500 text-lg mt-6">
              Discover the best study destinations in the world and find the
              perfect fit for your academic journey.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {countries.slice(0, 6).map((country, i) => (
              <Link
                to={country.route}
                key={country.id}
                className="sol-gallery-item h-72 reveal"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <img
                  src={country.image_url}
                  alt={country.name}
                  loading="lazy"
                />
                <span className="sol-gallery-caption">
                  <span className="text-3xl mb-2">{country.flag_url}</span>
                  <span className="text-2xl font-semibold font-[Roboto_Slab]">{country.name}</span>
                  <span className="text-sm text-white/85 mt-2">{country.description}</span>
                </span>
                <span className="absolute bottom-0 left-0 right-0 p-5 text-white z-10 bg-gradient-to-t from-black/70 to-transparent">
                  <span className="text-xl font-semibold">{country.name}</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="py-24 bg-[#f2f2f2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 reveal">
            <h2 className="sol-eyebrow text-sm mb-3">Success Stories</h2>
            <h3 className="text-3xl sm:text-4xl font-semibold text-[#1a1a1a]">
              What Our Students Say
            </h3>
            <hr className="sol-separator" />
            <button
              type="button"
              onClick={() => setShowTestimonialModal(true)}
              className="sol-btn mt-8 text-sm"
            >
              <span className="material-symbols-outlined text-lg">rate_review</span>
              Give Testimonial
            </button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.length === 0 && (
              <div className="md:col-span-2 lg:col-span-4 text-center py-16 text-gray-500">
                <span className="material-symbols-outlined text-5xl mb-4 block opacity-40">rate_review</span>
                <p className="text-lg font-medium">No student reviews yet.</p>
                <p className="text-sm mt-1">Be the first to share your experience!</p>
              </div>
            )}
            {testimonials.map((t, i) => (
              <div
                key={t.id}
                className="sol-card p-8 reveal"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <span
                      key={j}
                      className="material-symbols-outlined text-[#7fb2dd] text-lg"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                  ))}
                </div>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 italic">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <img
                    src={t.photo_url}
                    alt={t.student_name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-[#204276]/20"
                  />
                  <div>
                    <p className="font-bold text-sm text-[#1a1a1a]">
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

      {/* ===== CTA SECTION — overlay band with lead form ===== */}
      <section
        className="sol-overlay"
        style={{
          backgroundImage:
            "url(/assets/prettiest-college-campuses-georgetown-1592777619.avif)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-6">
                Ready to Start Your Global Journey?
              </h2>
              <hr className="sol-separator-left sol-separator-light" />
              <p className="text-white/85 mt-6 mb-10 leading-relaxed">
                Our expert counselors are waiting to help you choose the right
                path for your academic and professional growth.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/freeconsulation" className="sol-btn-light text-lg">
                  Book Free Consultation
                  <span className="material-symbols-outlined">arrow_forward</span>
                </Link>
                <Link
                  to="/allcountries/allcountry"
                  className="inline-flex items-center gap-2 border-2 border-white/70 text-white px-8 py-3.5 font-bold text-lg hover:bg-white/10 transition-colors"
                  style={{ fontFamily: '"Roboto", sans-serif', borderRadius: 3 }}
                >
                  Browse Destinations
                </Link>
              </div>
            </div>
            <div className="reveal">
              <form
                onSubmit={handleLeadSubmit}
                className="bg-white p-8 shadow-2xl"
                style={{ borderTop: "3px solid #204276" }}
              >
                <h3 className="text-2xl font-semibold text-[#1a1a1a] mb-2">
                  Get Free Consultation
                </h3>
                <p className="text-gray-500 mb-6 text-sm">
                  Fill in your details and our counselors will contact you
                  within 24 hours.
                </p>

                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      name="name"
                      value={leadForm.name}
                      onChange={handleLeadChange}
                      required
                      className={leadInputCls}
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      name="email"
                      type="email"
                      value={leadForm.email}
                      onChange={handleLeadChange}
                      required
                      className={leadInputCls}
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone *
                    </label>
                    <input
                      name="phone"
                      value={leadForm.phone}
                      onChange={handleLeadChange}
                      required
                      className={leadInputCls}
                      placeholder="+880 1XXX XXXXXX"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Country of Interest
                    </label>
                    <select
                      name="country_interest"
                      value={leadForm.country_interest}
                      onChange={handleLeadChange}
                      className={leadInputCls}
                    >
                      <option value="">Select country</option>
                      {countries.map((c) => (
                        <option key={c.name} value={c.name}>{c.name}</option>
                      ))}
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Service Interest
                  </label>
                  <select
                    name="service_interest"
                    value={leadForm.service_interest}
                    onChange={handleLeadChange}
                    className={leadInputCls}
                  >
                    <option value="">Select service</option>
                    <option>Study Abroad</option>
                    <option>Migration Services</option>
                    <option>Visa Assistance</option>
                    <option>Test Preparation</option>
                    <option>Career Counseling</option>
                    <option>Scholarship Guidance</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={leadForm.message}
                    onChange={handleLeadChange}
                    rows={3}
                    className={`${leadInputCls} resize-none`}
                    placeholder="Tell us about your goals or any questions..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={leadStatus === "sending"}
                  className="w-full sol-btn justify-center text-lg disabled:opacity-50"
                >
                  {leadStatus === "sending" ? (
                    <>
                      <span className="material-symbols-outlined animate-spin">
                        progress_activity
                      </span>
                      Sending...
                    </>
                  ) : (
                    <>
                      Submit Request
                      <span className="material-symbols-outlined">arrow_forward</span>
                    </>
                  )}
                </button>

                {leadStatus === "success" && (
                  <p className="mt-4 text-[#2b7bb9] font-semibold text-center">
                    Thank you! We'll contact you within 24 hours.
                  </p>
                )}
                {leadStatus === "error" && (
                  <p className="mt-4 text-[#16325c] font-semibold text-center">
                    Something went wrong. Please try again or call us directly.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ===== GIVE TESTIMONIAL MODAL ===== */}
      {showTestimonialModal && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setShowTestimonialModal(false)}
          />
          <div className="relative bg-white w-full max-w-lg shadow-2xl border-t-[3px] border-[#204276] max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-6 pb-0">
              <h4 className="text-xl font-semibold text-[#1a1a1a]">
                Share Your Experience
              </h4>
              <button
                type="button"
                onClick={() => setShowTestimonialModal(false)}
                className="p-2 text-gray-400 hover:bg-gray-100"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <div className="p-6">
              {testimonialStatus === "success" ? (
                <div className="text-center py-10">
                  <span className="material-symbols-outlined text-5xl text-[#2b7bb9] mb-4 block">
                    verified
                  </span>
                  <p className="text-lg font-bold text-[#1a1a1a] mb-2">
                    Thank you for your review!
                  </p>
                  <p className="text-sm text-gray-500 mb-6">
                    Your testimonial has been submitted and will appear on our
                    website after review.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setShowTestimonialModal(false);
                      setTestimonialStatus(null);
                      setTestimonialMsg("");
                    }}
                    className="sol-btn text-sm"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <form onSubmit={handleTestimonialSubmit}>
                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Your Name *
                      </label>
                      <input
                        name="student_name"
                        value={testimonialForm.student_name}
                        onChange={handleTestimonialChange}
                        required
                        className={leadInputCls}
                        placeholder="e.g. Rahim Ahmed"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        University *
                      </label>
                      <input
                        name="university"
                        value={testimonialForm.university}
                        onChange={handleTestimonialChange}
                        required
                        className={leadInputCls}
                        placeholder="e.g. University of Melbourne"
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Country *
                    </label>
                    <input
                      name="country"
                      value={testimonialForm.country}
                      onChange={handleTestimonialChange}
                      required
                      className={leadInputCls}
                      placeholder="e.g. Australia"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Your Review *
                    </label>
                    <textarea
                      name="quote"
                      value={testimonialForm.quote}
                      onChange={handleTestimonialChange}
                      required
                      rows={4}
                      className={`${leadInputCls} resize-none`}
                      placeholder="Tell us about your study abroad experience..."
                    />
                  </div>
                  <div className="mb-5">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Your Photo (optional)
                    </label>
                    <input
                      ref={testimonialFileRef}
                      type="file"
                      accept="image/*"
                      onChange={handleTestimonialPhoto}
                      className="w-full px-4 py-3 border border-gray-200 bg-white text-sm text-gray-600 file:mr-3 file:px-4 file:py-2 file:border-0 file:bg-[#204276]/10 file:text-[#204276] file:font-bold file:cursor-pointer"
                    />
                    <p className="text-xs text-gray-400 mt-1">
                      Auto-resized to 400×400 (square). JPG, PNG, or WEBP up to 15 MB.
                    </p>
                    {testimonialPhotoWarn && (
                      <p className="text-[#2b7bb9] text-xs mt-1">{testimonialPhotoWarn}</p>
                    )}
                  </div>
                  {testimonialStatus === "error" && (
                    <p className="mb-4 text-[#16325c] font-semibold text-sm">{testimonialMsg}</p>
                  )}
                  <button
                    type="submit"
                    disabled={testimonialStatus === "sending"}
                    className="w-full sol-btn justify-center disabled:opacity-50"
                  >
                    {testimonialStatus === "sending" ? "Submitting..." : "Submit Review"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
