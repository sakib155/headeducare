import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin } from "lucide-react";
export default function Footer() {
  return (
    <footer className=" pt-20 pb-10 border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <img src="/HEAD_horizontal.png" className="h-16 w-48" />
            </Link>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-8 max-w-sm">
              Premier education and migration consultancy providing professional
              advice and support for international students. Your trusted
              partner for global education.
            </p>

            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-100 footergroup flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-all"
              >
                <Facebook size={18} />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-100 footergroup flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-all"
              >
                <Instagram size={18} />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-100 footergroup flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-all"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="font-bold mb-6 text-[#0d121b] dark:text-white">
              Quick Links
            </h5>
            <ul className="space-y-4 text-gray-500 dark:text-gray-400 text-sm">
              <li>
                <Link
                  to="/services"
                  className="hover:text-primary transition-colors"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  to="/allcountries/allcountry"
                  className="hover:text-primary transition-colors"
                >
                  Study Destinations
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-primary transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Countries */}
          <div>
            <h5 className="font-bold mb-6 text-[#0d121b] dark:text-white">
              Countries
            </h5>
            <ul className="space-y-4 text-gray-500 dark:text-gray-400 text-sm">
              <li>
                <Link
                  to="/destination/australia"
                  className="hover:text-primary transition-colors"
                >
                  Australia
                </Link>
              </li>
              <li>
                <Link
                  to="/destination/uk"
                  className="hover:text-primary transition-colors"
                >
                  United Kingdom
                </Link>
              </li>
              <li>
                <Link
                  to="/destination/canada"
                  className="hover:text-primary transition-colors"
                >
                  Canada
                </Link>
              </li>
              <li>
                <Link
                  to="/destination/us"
                  className="hover:text-primary transition-colors"
                >
                  United States
                </Link>
              </li>
              <li>
                <Link
                  to="/destination/europe"
                  className="hover:text-primary transition-colors"
                >
                  Europe
                </Link>
              </li>
              <li>
                <Link
                  to="/destination/china"
                  className="hover:text-primary transition-colors"
                >
                  China
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h5 className="font-bold mb-6 text-[#0d121b] dark:text-white">
              Legal
            </h5>
            <ul className="space-y-4 text-gray-500 dark:text-gray-400 text-sm">
              <li>
                <Link
                  to="/legal/privacyPolicy"
                  className="hover:text-primary transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/legal/termsService"
                  className="hover:text-primary transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  to="/legal/refundPolicy"
                  className="hover:text-primary transition-colors"
                >
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/legal/disclaimer"
                  className="hover:text-primary transition-colors"
                >
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-gray-100 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Head Edu Care. All rights reserved.
          </p>

          {/* Flags of top 7 countries - styled like your student example */}
          <div className="mt-4 flex items-center gap-6">
            <div className="text-sm hidden md:block">
              <p className="font-bold text-gray-900 greyhome">
                Trusted by students worldwide
              </p>
            </div>
            <div className="flex -space-x-3">
              {["us", "gb", "ca", "au", "in", "de", "fr"].map(
                (countryCode, i) => (
                  <img
                    key={i}
                    alt={`Country ${countryCode.toUpperCase()}`}
                    className="h-10 w-10 rounded-full border-2 border-white dark:border-background-dark object-cover hover:z-10 transition-transform hover:scale-110"
                    src={`https://flagcdn.com/w40/${countryCode}.png`}
                    srcSet={`https://flagcdn.com/w80/${countryCode}.png 2x`}
                  />
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
