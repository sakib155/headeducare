import { useState } from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Phone, Mail, Clock } from "lucide-react";
import { api } from "../lib/apiClient";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  country_interest: "",
  service_interest: "",
  message: "",
};

export default function Footer() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState(null); // null | "sending" | "sent" | "error"

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await api.submitLead(form);
      setStatus("sent");
      setForm(initialForm);
    } catch {
      setStatus("error");
    }
  };

  const inputCls =
    "w-full bg-white/10 border border-white/25 text-white placeholder-white/60 px-3.5 py-2.5 text-sm focus:outline-none focus:border-white/70 focus:bg-white/15 transition-colors";

  return (
    <footer className="w-full">
      {/* ── Row A: Schedule a Free Consultation (dark overlay band with triangle divider) ── */}
      <svg className="sol-triangle bg-white" viewBox="0 0 100 10" preserveAspectRatio="none" aria-hidden="true">
        <polygon points="0,0 100,0 50,10" />
      </svg>
      <div className="sol-overlay" style={{ backgroundImage: "url(/assets/prettiest-college-campuses-georgetown.avif)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl md:text-4xl text-white text-center font-semibold">
            Schedule a Free Consultation
          </h2>
          <hr className="sol-separator sol-separator-light" />

          <div className="grid md:grid-cols-2 gap-12 mt-12">
            {/* Left: intro + contact labels */}
            <div className="text-white">
              <p className="leading-relaxed text-white/85 mb-10">
                Book a free one-on-one session with our expert counselors and get a
                personalized roadmap for your studies abroad — university selection,
                scholarships, admissions, visas, and more.
              </p>

              <div className="mb-7">
                <h5 className="sol-label text-white flex items-center gap-2 mb-2">
                  <Phone className="w-4 h-4" /> Phone
                </h5>
                <a href="tel:+8801910833888" className="text-white hover:text-white/75 transition-colors font-medium">
                  +880 1910 833 888
                </a>
                <hr className="border-white/20 mt-4" />
              </div>

              <div className="mb-7">
                <h5 className="sol-label text-white flex items-center gap-2 mb-2">
                  <Mail className="w-4 h-4" /> Email
                </h5>
                <a href="mailto:info@headeducare.com" className="text-white hover:text-white/75 transition-colors font-medium">
                  info@headeducare.com
                </a>
                <hr className="border-white/20 mt-4" />
              </div>

              <div>
                <h5 className="sol-label text-white flex items-center gap-2 mb-2">
                  <Clock className="w-4 h-4" /> Office
                </h5>
                <p className="text-white/85 font-medium">
                  House-52, Road-4, Block-C, Banani, Dhaka 1213
                </p>
                <p className="text-white/70 text-sm mt-1">Sat – Thu, 9:00 AM – 6:00 PM</p>
                <hr className="border-white/20 mt-4" />
              </div>
            </div>

            {/* Right: consultation form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Full Name *"
                  value={form.name}
                  onChange={handleChange}
                  className={inputCls}
                />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Email *"
                  value={form.email}
                  onChange={handleChange}
                  className={inputCls}
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="Phone *"
                  value={form.phone}
                  onChange={handleChange}
                  className={inputCls}
                />
                <input
                  type="text"
                  name="country_interest"
                  placeholder="Country of Interest"
                  value={form.country_interest}
                  onChange={handleChange}
                  className={inputCls}
                />
              </div>
              <select
                name="service_interest"
                value={form.service_interest}
                onChange={handleChange}
                className={`${inputCls} [&>option]:text-gray-900`}
              >
                <option value="">Service of Interest</option>
                <option value="Study Abroad">Study Abroad</option>
                <option value="Migration Services">Migration Services</option>
                <option value="Visa Assistance">Visa Assistance</option>
                <option value="Test Preparation">Test Preparation</option>
                <option value="Career Counseling">Career Counseling</option>
                <option value="Scholarship Guidance">Scholarship Guidance</option>
              </select>
              <textarea
                name="message"
                rows="4"
                placeholder="Message"
                value={form.message}
                onChange={handleChange}
                className={inputCls}
              />
              <button type="submit" disabled={status === "sending"} className="sol-btn-light">
                {status === "sending" ? "Sending…" : "Send"}
              </button>
              {status === "sent" && (
                <p className="text-sm text-[#7fb2dd]">Thank you! Your request has been received.</p>
              )}
              {status === "error" && (
                <p className="text-sm text-white">Something went wrong. Please try again or contact us directly.</p>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* ── Row B: link columns ── */}
      <div className="bg-[#0f203c] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {/* Brand */}
            <div className="col-span-2 md:col-span-1">
              <Link to="/" className="inline-block mb-5 bg-white px-3 py-2">
                <img src="/HEAD_horizontal.png" alt="Head Educare" className="h-10 w-auto" />
              </Link>
              <p className="text-white/70 text-sm leading-relaxed mb-6">
                Premier education and migration consultancy providing professional
                advice and support for international students. Your trusted
                partner for global education.
              </p>
              <div className="flex gap-3">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-9 h-9 flex items-center justify-center border border-white/30 text-white/80 hover:bg-white hover:text-[#204276] transition-colors"
                >
                  <Facebook size={17} />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-9 h-9 flex items-center justify-center border border-white/30 text-white/80 hover:bg-white hover:text-[#204276] transition-colors"
                >
                  <Instagram size={17} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-9 h-9 flex items-center justify-center border border-white/30 text-white/80 hover:bg-white hover:text-[#204276] transition-colors"
                >
                  <Linkedin size={17} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-white mb-4">Quick Links</h4>
              <hr className="sol-separator-left !w-10 !h-px bg-white/40 mb-5" />
              <ul className="space-y-3 text-sm text-white/70">
                <li><Link to="/services" className="hover:text-white transition-colors">Our Services</Link></li>
                <li><Link to="/allcountries/allcountry" className="hover:text-white transition-colors">Study Destinations</Link></li>
                <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/freeconsulation" className="hover:text-white transition-colors">Contact Us</Link></li>
              </ul>
            </div>

            {/* Countries */}
            <div>
              <h4 className="font-semibold text-white mb-4">Countries</h4>
              <hr className="sol-separator-left !w-10 !h-px bg-white/40 mb-5" />
              <ul className="space-y-3 text-sm text-white/70">
                <li><Link to="/destination/australia" className="hover:text-white transition-colors">Australia</Link></li>
                <li><Link to="/destination/uk" className="hover:text-white transition-colors">United Kingdom</Link></li>
                <li><Link to="/destination/canada" className="hover:text-white transition-colors">Canada</Link></li>
                <li><Link to="/destination/usa" className="hover:text-white transition-colors">United States</Link></li>
                <li><Link to="/destination/europe" className="hover:text-white transition-colors">Europe</Link></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-semibold text-white mb-4">Legal</h4>
              <hr className="sol-separator-left !w-10 !h-px bg-white/40 mb-5" />
              <ul className="space-y-3 text-sm text-white/70">
                <li><Link to="/legal/privacyPolicy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link to="/legal/termsService" className="hover:text-white transition-colors">Terms of Service</Link></li>
                <li><Link to="/legal/refundPolicy" className="hover:text-white transition-colors">Refund Policy</Link></li>
                <li><Link to="/legal/disclaimer" className="hover:text-white transition-colors">Disclaimer</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* ── Row C: copyright bar ── */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-white/60">
              © {new Date().getFullYear()} Head Edu Care. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <p className="text-xs text-white/60 hidden sm:block">Trusted by students worldwide</p>
              <div className="flex -space-x-2.5">
                {["us", "gb", "ca", "au", "in", "de", "fr"].map((countryCode, i) => (
                  <img
                    key={i}
                    alt={`Country ${countryCode.toUpperCase()}`}
                    className="h-7 w-7 rounded-full border-2 border-[#0f203c] object-cover"
                    src={`https://flagcdn.com/w40/${countryCode}.png`}
                    srcSet={`https://flagcdn.com/w80/${countryCode}.png 2x`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
