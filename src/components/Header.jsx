import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { menuData } from "./menuData";
import { ChevronDown } from "lucide-react";

export default function Header({ toggleDarkMode, darkMode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  // Add shadow on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Toggle .dark class on <html> when dark mode changes
  useEffect(() => {
    const root = document.documentElement;
    if (dark) root.classList.add("dark");
    else root.classList.remove("dark");
  }, [dark]);

  return (
    <>
      <header className={`glass-header ${scrolled ? "shadow-lg" : ""}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-2 group cursor-pointer"
            >
              <img src="/HEAD_horizontal.png" className="h-12 w-40" />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-8">
              {menuData.map((section) => (
                <div key={section.title} className="relative group">
                  <Link
                    to={section.url}
                    className={`relative flex items-center text-sm font-semibold transition-all duration-300
                    after:content-[''] after:absolute after:bottom-[-4px] after:left-0 
                    after:h-[2px] after:bg-primary after:transition-all
                    ${
                      location.pathname === section.url
                        ? "text-primary after:w-full"
                        : "group-hover:text-primary group-hover:after:w-full hover:text-primary after:w-0 hover:after:w-full"
                    }`}
                  >
                    {section.title} <ChevronDown className="h-4 w-4" />
                  </Link>

                  {/* Submenu */}
                  <div
                    className="absolute left-0 hidden mt-1.5 space-y-2 bg-white dark:bg-primary-dark shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 submenu"
                    style={{ width: "200px" }}
                  >
                    {section.items.map((item) => (
                      <Link
                        key={item.name}
                        to={item.url}
                        className={`block text-sm font-normal py-2 px-4 transition-colors duration-200 
                        ${
                          location.pathname.includes(item.url)
                            ? "text-primary"
                            : "hover:bg-blue-200 dark:hover:bg-blue-800"
                        }`}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </nav>

            {/* Right side */}
            <div className="flex items-center gap-3">
              {/* Dark mode toggle */}
              <button
                onClick={toggleDarkMode}
                className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                aria-label="Toggle dark mode"
              >
                <span className="material-symbols-outlined text-xl">
                  {darkMode ? "light_mode" : "dark_mode"}
                </span>
              </button>

              {/* CTA */}
              <Link
                to="/contact"
                className="hidden sm:inline-flex bg-primary hover:bg-primary/90 text-white px-5 py-2.5 rounded-lg font-bold text-sm transition-all shadow-lg shadow-primary/20 active:scale-95"
              >
                Free Consultation
              </Link>

              {/* Mobile hamburger */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden w-10 h-10 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-300"
                aria-label="Toggle menu"
              >
                <span className="material-symbols-outlined text-2xl">
                  {mobileOpen ? "close" : "menu"}
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="absolute inset-0 bg-black/50 mobile-menu-overlay"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute top-20 left-0 right-0 bg-white dark:bg-background-dark border-b border-gray-200 dark:border-gray-700 shadow-xl mobile-menu-drawer overflow-y-auto max-h-screen">
            <nav className="flex flex-col p-6 space-y-4">
              {menuData.map((section) => (
                <div key={section.title} className="relative">
                  <button className="text-lg font-semibold py-3 px-4 rounded-xl transition-colors">
                    {section.title}
                  </button>
                  {/* Mobile submenu */}
                  <div className="ml-4 space-y-2">
                    {section.items.map((item) => (
                      <Link
                        key={item.name}
                        to={item.url}
                        className={`block text-lg py-2 px-4 rounded-xl transition-colors
                        ${
                          location.pathname.includes(item.url)
                            ? "bg-primary/10 text-primary"
                            : "hover:bg-gray-100 dark:hover:bg-gray-800"
                        }`}
                        style={{ width: "200px" }}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
              <Link
                to="/contact"
                className="bg-primary text-white text-center py-3 px-4 rounded-xl font-bold text-lg mt-2"
              >
                Free Consultation
              </Link>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
