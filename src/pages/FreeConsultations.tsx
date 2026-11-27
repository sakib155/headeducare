import { useNavigate } from "react-router-dom";
import { ArrowDown, ArrowUp } from "lucide-react";
import { useBackground } from "../lib/BackgroundsContext";
import { useState, useRef, useEffect } from "react";
import { api } from "../lib/apiClient";
import { CONTACTS } from "../data/contact";

type Status = "sending" | "success" | "error" | null;

export default function FreeConsultation() {
  const bgFree = useBackground("bg_free_consultation");
  const navigate = useNavigate();
  const formRef = useRef<HTMLDivElement>(null);

  const [countries, setCountries] = useState<string[]>([]);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    country_interest: "",
    service_interest: "",
    preferred_contact: "",
    preferred_date: "",
    preferred_time: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>(null);
  // Arrival highlight: flashes a ring around the form when the deep link lands
  const [formPulse, setFormPulse] = useState(false);
  const pulseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Load countries from the database (api/countries.php) for the dropdown
  useEffect(() => {
    api.fetchCountries()
      .then((data) => {
        const names = (Array.isArray(data) ? data : [])
          .map((c) => c.name)
          .filter(Boolean);
        setCountries(names);
      })
      .catch(() => setCountries([]));
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await api.submitLead(form);
      setStatus("success");
      setForm({
        name: "",
        email: "",
        phone: "",
        country_interest: "",
        service_interest: "",
        preferred_contact: "",
        preferred_date: "",
        preferred_time: "",
        message: "",
      });
    } catch {
      setStatus("error");
    }
  };

  const triggerPulse = () => {
    if (pulseTimer.current) clearTimeout(pulseTimer.current);
    setFormPulse(true);
    pulseTimer.current = setTimeout(() => setFormPulse(false), 2200);
  };

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    triggerPulse();
  };

  // Hash deep-link support: /freeconsulation#consultation-form (from any
  // page). React Router's navigation is wrapped in a transition and resets
  // scroll to top, and late hero images can shift layout — so re-anchor
  // every 250ms for up to ~6s, stopping once the form has landed in view.
  useEffect(() => {
    let attempts = 0;
    let landed = false;
    const tick = () => {
      attempts++;
      if (window.location.hash !== "#consultation-form") { clearInterval(timer); return; }
      const el = formRef.current;
      if (!el) return;
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      const top = el.getBoundingClientRect().top;
      if ((top >= 60 && top <= 260) || attempts > 24) { landed = true; clearInterval(timer); triggerPulse(); }
    };
    tick();
    const timer = setInterval(tick, 250);
    const onHash = () => tick();
    window.addEventListener("hashchange", onHash);
    return () => {
      clearInterval(timer);
      if (pulseTimer.current) clearTimeout(pulseTimer.current);
      window.removeEventListener("hashchange", onHash);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {/* HERO */}
      <section
        className="sol-overlay sol-hero-inner"
        style={{ backgroundImage: `url(${bgFree})` }}
      >
        <div className="max-w-6xl mx-auto px-4 pt-40 pb-24 text-center">
          <h1 className="text-4xl sm:text-5xl font-semibold text-white mb-6">
            Book Your <span className="text-[#7fb2dd]">Free Consultation</span>
          </h1>
          <hr className="sol-separator" />
          <p className="text-lg text-white/85 max-w-2xl mx-auto mb-8 mt-6">
            Talk to our expert counselors and get a personalized roadmap for
            your study abroad or migration journey.
          </p>

          <button
            onClick={scrollToForm}
            className="sol-btn text-lg"
          >
            Book Free Consultation
            <ArrowDown className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-14 text-[#1a1a1a] dark:text-white">
            How It Works
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Submit Request",
                desc: "Fill out a simple form with your goals and preferences.",
              },
              {
                step: "02",
                title: "Get Matched",
                desc: "We assign an expert consultant based on your needs.",
              },
              {
                step: "03",
                title: "Free Session",
                desc: "Join a 1-on-1 consultation via call or WhatsApp.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-8 rounded-sm border border-gray-100 text-center"
              >
                <div className="text-primary text-3xl font-black mb-4">
                  {item.step}
                </div>
                <h3 className="font-bold text-xl mb-2 text-[#1a1a1a] greyhome">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <div
              id="consultation-form"
              className={`lg:col-span-3 scroll-mt-28 md:scroll-mt-32 rounded-sm transition-shadow duration-700 ${
                formPulse ? "shadow-[0_0_0_4px_rgba(127,178,221,0.55)]" : "shadow-none"
              }`}
              ref={formRef}
            >
              <form
                onSubmit={handleSubmit}
                className="bg-background-light dark:bg-gray-800 p-8 sm:p-10 rounded-sm border border-gray-100 dark:border-gray-700"
              >
                <h3 className="text-2xl font-bold text-[#1a1a1a] dark:text-white mb-2">
                  Book Your Free Consultation
                </h3>
                <p className="text-gray-500 dark:text-gray-400 mb-8 text-sm">
                  Fill in the details below and we'll schedule your session.
                </p>

                {/* Row 1: Name + Email */}
                <div className="grid sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Full Name *
                      </label>
                      <input
                        id="name"
                      
                        name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-sm border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-[#1a1a1a] dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Email *
                      </label>
                      <input
                        id="email"
                      
                        name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-sm border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-[#1a1a1a] dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                {/* Row 2: Phone + Country */}
                <div className="grid sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Phone *
                      </label>
                      <input
                        id="phone"
                      
                        name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-sm border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-[#1a1a1a] dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="+880 1XXX XXXXXX"
                    />
                  </div>
                  <div>
                    <label htmlFor="country_interest" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Country of Interest
                      </label>
                      <select
                        id="country_interest"
                      
                        name="country_interest"
                      value={form.country_interest}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-sm border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-[#1a1a1a] dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">Select country</option>
                      {countries.map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                {/* Row 3: Service + Preferred Contact */}
                <div className="grid sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="service_interest" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Service Interest
                      </label>
                      <select
                        id="service_interest"
                      
                        name="service_interest"
                      value={form.service_interest}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-sm border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-[#1a1a1a] dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
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
                  <div>
                    <label htmlFor="preferred_contact" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Preferred Contact Method
                      </label>
                      <select
                        id="preferred_contact"
                      
                        name="preferred_contact"
                      value={form.preferred_contact}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-sm border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-[#1a1a1a] dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">Select method</option>
                      <option>Phone Call</option>
                      <option>WhatsApp</option>
                      <option>In-Person</option>
                      <option>Video Call</option>
                    </select>
                  </div>
                </div>

                {/* Row 4: Preferred Date + Time */}
                <div className="grid sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="preferred_date" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Preferred Date
                      </label>
                      <input
                        id="preferred_date"
                      
                        name="preferred_date"
                      type="date"
                      value={form.preferred_date}
                      onChange={handleChange}
                      min={new Date().toISOString().split("T")[0]}
                      className="w-full px-4 py-3 rounded-sm border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-[#1a1a1a] dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="preferred_time" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Preferred Time
                      </label>
                      <select
                        id="preferred_time"
                      
                        name="preferred_time"
                      value={form.preferred_time}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-sm border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-[#1a1a1a] dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">Select time slot</option>
                      <option>10:30 AM – 11:30 AM</option>
                      <option>11:30 AM – 12:30 PM</option>
                      <option>12:30 PM – 1:30 PM</option>
                      <option>1:30 PM – 2:30 PM</option>
                      <option>2:30 PM – 3:30 PM</option>
                      <option>3:30 PM – 4:30 PM</option>
                      <option>4:30 PM – 5:30 PM</option>
                      <option>5:30 PM – 6:30 PM</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="mb-8">
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Message
                      </label>
                      <textarea
                        id="message"
                    
                        name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-sm border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-[#1a1a1a] dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                    placeholder="Tell us about your goals, current situation, or any questions..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full sol-btn justify-center text-lg disabled:opacity-50"
                >
                  {status === "sending" ? (
                    <>
                      <span className="material-symbols-outlined animate-spin">
                        progress_activity
                      </span>
                      Sending...
                    </>
                  ) : (
                    <>
                      <span className="material-symbols-outlined">event</span>
                      Book My Free Consultation
                    </>
                  )}
                </button>

                {status === "success" && (
                  <p className="mt-4 text-[#2b7bb9] font-semibold text-center">
                    ✓ Booking confirmed! We'll contact you within 24 hours.
                  </p>
                )}
                {status === "error" && (
                  <p className="mt-4 text-[#16325c] font-semibold text-center">
                    Something went wrong. Please try again or call us directly.
                  </p>
                )}
              </form>
            </div>

            {/* Side info */}
            <div className="lg:col-span-2 flex flex-col gap-6 justify-start pt-2">
              <div className="p-6 rounded-sm border border-gray-100 dark:border-gray-700">
                <h4 className="font-bold text-lg text-[#1a1a1a] dark:text-white mb-4">
                  What You'll Get
                </h4>
                <ul className="space-y-3">
                  {[
                    "Personalized study or migration roadmap",
                    "Country & university recommendations",
                    "Scholarship & budget guidance",
                    "Visa process overview",
                    "Career & future planning advice",
                    "Q&A with expert consultant",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-primary text-base mt-0.5">
                        check_circle
                      </span>
                      <p className="text-gray-700 dark:text-gray-300 text-sm">
                        {item}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 rounded-sm border border-gray-100 dark:border-gray-700">
                <h4 className="font-bold text-lg text-[#1a1a1a] dark:text-white mb-4">
                  Contact Us Directly
                </h4>
                <div className="space-y-3">
                  {[
                    { icon: "call", label: CONTACTS.hotline.display, href: `tel:${CONTACTS.hotline.tel}` },
                    { icon: "call", label: CONTACTS.alt1.display, href: `tel:${CONTACTS.alt1.tel}` },
                    { icon: "chat", label: `WhatsApp: ${CONTACTS.whatsapp.display}`, href: CONTACTS.whatsapp.url },
                    { icon: "mail", label: CONTACTS.email, href: `mailto:${CONTACTS.email}` },
                  ].map((c, i) => (
                    <a
                      key={i}
                      href={c.href}
                      target={c.href?.startsWith("https") ? "_blank" : undefined}
                      rel={c.href?.startsWith("https") ? "noopener noreferrer" : undefined}
                      className="flex items-center gap-3 hover:text-[#204276] transition-colors"
                    >
                      <span className="material-symbols-outlined text-primary text-base">
                        {c.icon}
                      </span>
                      <p className="text-gray-700 dark:text-gray-300 text-sm">
                        {c.label}
                      </p>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OFFICE / MAP */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4 text-[#1a1a1a] dark:text-white">
            Visit Our Office
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-center max-w-2xl mx-auto mb-10">
            44/16, 3rd Floor, West Panthapath, Dhaka -1205.
            Visiting hour: 10:30 AM to 6:30 PM - drop by for a face-to-face
            consultation with our expert counselors.
          </p>
          {/* Zero-API-key Google Maps embed (works without billing) —
              CSP must allow frame-src https://maps.google.com */}
          <div className="rounded-sm overflow-hidden border border-gray-100 dark:border-gray-700 h-[350px] sm:h-[500px] shadow-lg bg-slate-100 dark:bg-slate-800">
            <iframe
              title="Head Educare office location — 44/16 West Panthapath, Dhaka"
              width="100%"
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://maps.google.com/maps?q=44/16+Head+Educare+West+Panthapath+Dhaka+1205&output=embed"
              style={{ border: 0 }}
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* CONNECT METHODS */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-14 text-[#1a1a1a] dark:text-white">
            Choose How You Want to Connect
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "call",
                title: "Phone Call",
                desc: "Schedule a direct call with our consultant.",
              },
              {
                icon: "chat",
                title: "WhatsApp",
                desc: "Quick chat and guidance via WhatsApp.",
              },
              {
                icon: "event",
                title: "In-Person",
                desc: "Visit our office for face-to-face consultation.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-8 rounded-sm border border-gray-100 text-center"
              >
                <span className="material-symbols-outlined text-primary text-4xl mb-4 block">
                  {item.icon}
                </span>
                <h3 className="font-bold text-xl mb-2 text-[#1a1a1a] greyhome">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="sol-gold-strip py-24 text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-6 text-[#0f203c]">
          Ready to Start Your Journey?
        </h2>
        <hr className="sol-separator sol-separator-light" />
        <p className="mb-8 text-lg text-[#0f203c]/80 mt-6">
          Book your free consultation today and take the first step.
        </p>

        <button
          onClick={scrollToForm}
          className="sol-btn-light text-lg"
        >
          Get Free Consultation
          <ArrowUp className="w-5 h-5" />
        </button>
      </section>
    </div>
  );
}
