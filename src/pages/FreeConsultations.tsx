import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import { supabase } from "../lib/supabaseClient";

type Status = "sending" | "success" | "error" | null;

export default function FreeConsultation() {
  const navigate = useNavigate();
  const formRef = useRef<HTMLDivElement>(null);

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

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const { error } = await supabase.from("leads").insert([form]);
      if (error) throw error;
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

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div>
      {/* HERO */}
      <section className="relative py-24 overflow-hidden bg-blue-50 greyhomelightbg">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-black text-[#0d121b] greyhome mb-6">
            Book Your <span className="text-primary">Free Consultation</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            Talk to our expert counselors and get a personalized roadmap for
            your study abroad or migration journey.
          </p>

          <button
            onClick={scrollToForm}
            className="bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:bg-primary/90"
          >
            Book Free Consultation
          </button>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-14 text-[#0d121b] dark:text-white">
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
                className="p-8 rounded-2xl border border-gray-100 text-center"
              >
                <div className="text-primary text-3xl font-black mb-4">
                  {item.step}
                </div>
                <h3 className="font-bold text-xl mb-2 text-[#0d121b] greyhome">
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
            <div className="lg:col-span-3" ref={formRef}>
              <form
                onSubmit={handleSubmit}
                className="bg-background-light dark:bg-gray-800 p-8 sm:p-10 rounded-2xl border border-gray-100 dark:border-gray-700"
              >
                <h3 className="text-2xl font-bold text-[#0d121b] dark:text-white mb-2">
                  Book Your Free Consultation
                </h3>
                <p className="text-gray-500 dark:text-gray-400 mb-8 text-sm">
                  Fill in the details below and we'll schedule your session.
                </p>

                {/* Row 1: Name + Email */}
                <div className="grid sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-[#0d121b] dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-[#0d121b] dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                {/* Row 2: Phone + Country */}
                <div className="grid sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Phone *
                    </label>
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-[#0d121b] dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="+880 1XXX XXXXXX"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Country of Interest
                    </label>
                    <select
                      name="country_interest"
                      value={form.country_interest}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-[#0d121b] dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">Select country</option>
                      <option>Australia</option>
                      <option>United Kingdom</option>
                      <option>Canada</option>
                      <option>United States</option>
                      <option>Germany</option>
                      <option>Japan</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                {/* Row 3: Service + Preferred Contact */}
                <div className="grid sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Service Interest
                    </label>
                    <select
                      name="service_interest"
                      value={form.service_interest}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-[#0d121b] dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
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
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Preferred Contact Method
                    </label>
                    <select
                      name="preferred_contact"
                      value={form.preferred_contact}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-[#0d121b] dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
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
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Preferred Date
                    </label>
                    <input
                      name="preferred_date"
                      type="date"
                      value={form.preferred_date}
                      onChange={handleChange}
                      min={new Date().toISOString().split("T")[0]}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-[#0d121b] dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Preferred Time
                    </label>
                    <select
                      name="preferred_time"
                      value={form.preferred_time}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-[#0d121b] dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">Select time slot</option>
                      <option>9:00 AM – 10:00 AM</option>
                      <option>10:00 AM – 11:00 AM</option>
                      <option>11:00 AM – 12:00 PM</option>
                      <option>1:00 PM – 2:00 PM</option>
                      <option>2:00 PM – 3:00 PM</option>
                      <option>3:00 PM – 4:00 PM</option>
                      <option>4:00 PM – 5:00 PM</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="mb-8">
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-[#0d121b] dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                    placeholder="Tell us about your goals, current situation, or any questions..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20 disabled:opacity-50 flex items-center justify-center gap-2"
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
                  <p className="mt-4 text-green-600 font-semibold text-center">
                    ✓ Booking confirmed! We'll contact you within 24 hours.
                  </p>
                )}
                {status === "error" && (
                  <p className="mt-4 text-red-500 font-semibold text-center">
                    Something went wrong. Please try again or call us directly.
                  </p>
                )}
              </form>
            </div>

            {/* Side info */}
            <div className="lg:col-span-2 flex flex-col gap-6 justify-start pt-2">
              <div className="p-6 rounded-2xl border border-gray-100 dark:border-gray-700">
                <h4 className="font-bold text-lg text-[#0d121b] dark:text-white mb-4">
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

              <div className="p-6 rounded-2xl border border-gray-100 dark:border-gray-700">
                <h4 className="font-bold text-lg text-[#0d121b] dark:text-white mb-4">
                  Contact Us Directly
                </h4>
                <div className="space-y-3">
                  {[
                    { icon: "call", label: "+880 1XXX XXXXXX" },
                    { icon: "chat", label: "WhatsApp available" },
                    { icon: "mail", label: "info@headeducare.com" },
                  ].map((c, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-primary text-base">
                        {c.icon}
                      </span>
                      <p className="text-gray-700 dark:text-gray-300 text-sm">
                        {c.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONNECT METHODS */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-14 text-[#0d121b] dark:text-white">
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
                className="p-8 rounded-2xl border border-gray-100 text-center"
              >
                <span className="material-symbols-outlined text-primary text-4xl mb-4 block">
                  {item.icon}
                </span>
                <h3 className="font-bold text-xl mb-2 text-[#0d121b] greyhome">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 greyhomelightbg text-white text-center">
        <h2 className="text-3xl sm:text-4xl font-black mb-6">
          Ready to Start Your Journey?
        </h2>
        <p className="mb-8 text-lg opacity-90">
          Book your free consultation today and take the first step.
        </p>

        <button
          onClick={scrollToForm}
          className="bg-white text-primary px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:bg-gray-100"
        >
          Get Free Consultation
        </button>
      </section>
    </div>
  );
}
