import { useState } from "react";
import { supabase } from "../lib/supabaseClient";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    country_interest: "",
    service_interest: "",
    message: "",
  });
  const [status, setStatus] = useState(null); // 'sending' | 'success' | 'error'

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
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
        message: "",
      });
    } catch {
      setStatus("error");
    }
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-primary/5 to-blue-50 dark:from-background-dark dark:to-surface-dark overflow-hidden">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h2 className="text-primary font-bold text-sm uppercase tracking-widest mb-3">
              Get in Touch
            </h2>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0d121b] dark:text-white mb-6 leading-tight">
              Book Your <span className="text-primary">Free Consultation</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              Fill out the form below and one of our expert counselors will get
              back to you within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-24 bg-white dark:bg-background-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <form
                onSubmit={handleSubmit}
                className="bg-background-light dark:bg-gray-800 p-8 sm:p-10 rounded-2xl border border-gray-100 dark:border-gray-700"
              >
                <h3 className="text-2xl font-bold text-[#0d121b] dark:text-white mb-8">
                  Send Us a Message
                </h3>
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
                <div className="grid sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Phone
                    </label>
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
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
                <div className="mb-6">
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
                    placeholder="Tell us about your goals..."
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
                      </span>{" "}
                      Sending...
                    </>
                  ) : (
                    <>
                      <span className="material-symbols-outlined">send</span>{" "}
                      Send Message
                    </>
                  )}
                </button>
                {status === "success" && (
                  <p className="mt-4 text-green-600 font-semibold text-center">
                    ✓ Message sent! We'll contact you within 24 hours.
                  </p>
                )}
                {status === "error" && (
                  <p className="mt-4 text-red-500 font-semibold text-center">
                    Something went wrong. Please try again or call us directly.
                  </p>
                )}
              </form>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              {[
                {
                  icon: "location_on",
                  title: "Office Address",
                  lines: ["Head Edu Care", "Dhaka, Bangladesh"],
                },
                { icon: "phone", title: "Phone", lines: ["+880 1XXXXXXXXX"] },
                {
                  icon: "email",
                  title: "Email",
                  lines: ["info@headeducare.com"],
                },
                {
                  icon: "schedule",
                  title: "Office Hours",
                  lines: ["Sun - Thu: 10AM - 7PM", "Sat: 10AM - 3PM"],
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 bg-background-light dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700"
                >
                  <div className="w-12 h-12 shrink-0 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">
                      {item.icon}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0d121b] dark:text-white mb-1">
                      {item.title}
                    </h4>
                    {item.lines.map((l, j) => (
                      <p
                        key={j}
                        className="text-gray-600 dark:text-gray-400 text-sm"
                      >
                        {l}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
              {/* Map placeholder */}
              <div className="rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-700 h-64 bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
                <div className="text-center text-gray-400">
                  <span className="material-symbols-outlined text-5xl mb-2 block">
                    map
                  </span>
                  <p className="text-sm font-semibold">Map Coming Soon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
