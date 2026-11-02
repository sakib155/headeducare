import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Phone, Mail, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full">
      {/* ── Link columns ── */}
      <div className="bg-[#0f203c] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
            {/* Brand */}
            <div className="col-span-2 md:col-span-1">
              <Link to="/" className="inline-block mb-5">
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

            {/* Contact */}
            <div>
              <h4 className="font-semibold text-white mb-4">Contact</h4>
              <hr className="sol-separator-left !w-10 !h-px bg-white/40 mb-5" />
              <ul className="space-y-4 text-sm text-white/70">
                <li className="flex items-start gap-2.5">
                  <Phone size={15} className="mt-0.5 shrink-0 text-[#7fb2dd]" />
                  <a href="tel:+8801910833888" className="hover:text-white transition-colors">
                    +880 1910 833 888
                  </a>
                </li>
                <li className="flex items-start gap-2.5">
                  <Mail size={15} className="mt-0.5 shrink-0 text-[#7fb2dd]" />
                  <a href="mailto:info@headeducare.com" className="hover:text-white transition-colors">
                    info@headeducare.com
                  </a>
                </li>
                <li className="flex items-start gap-2.5">
                  <Clock size={15} className="mt-0.5 shrink-0 text-[#7fb2dd]" />
                  <span>
                    44/16, 3rd Floor, West Panthapath, Dhaka -1205
                    <br />
                    <span className="text-white/50">Visiting hour: 10:30 AM to 6:30 PM</span>
                  </span>
                </li>
              </ul>
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

        {/* ── Copyright bar ── */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/60">
              © {new Date().getFullYear()} Head Edu Care. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <p className="text-sm text-white/60 hidden sm:block">Trusted by students worldwide</p>
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
