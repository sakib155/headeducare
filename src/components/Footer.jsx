import { Link } from "react-router-dom";

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
                <span className="material-symbols-outlined text-lg">share</span>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-100 footergroup flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-all"
              >
                <span className="material-symbols-outlined text-lg">
                  photo_camera
                </span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-100 footergroup flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-all"
              >
                <span className="material-symbols-outlined text-lg">
                  person
                </span>
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
                  to="/countries"
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
                  to="/countries"
                  className="hover:text-primary transition-colors"
                >
                  Australia
                </Link>
              </li>
              <li>
                <Link
                  to="/countries"
                  className="hover:text-primary transition-colors"
                >
                  United Kingdom
                </Link>
              </li>
              <li>
                <Link
                  to="/countries"
                  className="hover:text-primary transition-colors"
                >
                  Canada
                </Link>
              </li>
              <li>
                <Link
                  to="/countries"
                  className="hover:text-primary transition-colors"
                >
                  United States
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
                <a href="#" className="hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Refund Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Disclaimer
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-gray-100 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Head Edu Care. All rights reserved.
          </p>
          <div className="flex items-center gap-2 opacity-50">
            <span className="text-xs font-bold uppercase tracking-widest mr-4">
              Trusted Worldwide
            </span>
            <div className="h-6 w-12 bg-gray-400 rounded" />
            <div className="h-6 w-12 bg-gray-400 rounded" />
            <div className="h-6 w-12 bg-gray-400 rounded" />
          </div>
        </div>
      </div>
    </footer>
  );
}
