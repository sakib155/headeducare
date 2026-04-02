import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { menuData } from "./menuData";
import { ChevronDown } from "lucide-react";

export default function Header({ toggleDarkMode, darkMode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const closeTimers = useRef({});

  const handleMenuEnter = (title) => {
    if (closeTimers.current[title]) {
      clearTimeout(closeTimers.current[title]);
      delete closeTimers.current[title];
    }
    setOpenMenu(title);
  };

  const handleMenuLeave = (title) => {
    closeTimers.current[title] = setTimeout(() => {
      setOpenMenu((prev) => (prev === title ? null : prev));
    }, 350);
  };

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
            <nav className="hidden xl:flex items-center space-x-8">
              {menuData.map((section) => {
                const isOpen = openMenu === section.title.name;
                return (
                  <div
                    key={section.title.name}
                    className="relative"
                    onMouseEnter={() => handleMenuEnter(section.title.name)}
                    onMouseLeave={() => handleMenuLeave(section.title.name)}
                  >
                    <Link
                      to={section.title.url}
                      className={`relative flex items-center text-sm font-semibold transition-all duration-300
  after:content-[''] after:absolute after:bottom-[-4px] after:left-0 title_header
  after:h-[2px] after:bg-primary after:transition-all
  ${
    location.pathname === section.title.url
      ? "text-primary after:w-full"
      : isOpen
      ? "text-primary after:w-full"
      : "hover:text-primary after:w-0 hover:after:w-full dark:hover:text-black"
  }`}
                    >
                      {section.title.name}{" "}
                      {section.items && section.items.length > 0 && (
                        <ChevronDown className="h-4 w-4 ml-1" />
                      )}
                    </Link>
                    {/* Submenu */}
                    {section.items?.length > 0 && (
                      <div
                        className="nav-dropdown absolute left-0 mt-1.5 space-y-2
                      bg-white dark:bg-[#01091c] headergroup
                      shadow-lg border border-gray-200 dark:border-gray-700
                      transition-all duration-300"
                        style={{
                          width: "200px",
                          opacity: isOpen ? 1 : 0,
                          pointerEvents: isOpen ? "auto" : "none",
                          transform: isOpen ? "translateY(0)" : "translateY(-4px)",
                        }}
                      >
                        {section.items.map((item) => (
                          <Link
                            key={item.name}
                            to={item.url}
                            className="block text-sm py-2 px-4 transition-colors duration-200"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
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
                to="/freeconsulation"
                className="hidden sm:inline-flex bg-primary hover:bg-primary/90 text-white px-5 py-2.5 rounded-lg font-bold text-sm transition-all shadow-lg shadow-primary/20 active:scale-95"
              >
                Free Consultation
              </Link>

              {/* Mobile hamburger */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="xl:hidden w-10 h-10 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-300"
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
      {mobileOpen && (
        <div className="fixed inset-0 z-40 xl:hidden">
          {/* Overlay */}
          <div
            className="absolute inset-0 mobile-menu-overlay"
            onClick={() => setMobileOpen(false)}
          />

          {/* Drawer */}
          <div className="absolute top-20 left-0 right-0 bg-white headergroup border-b border-gray-200 dark:border-gray-700 shadow-xl mobile-menu-drawer overflow-y-auto max-h-screen">
            <nav className="flex flex-col p-6 space-y-4">
              {menuData.map((section) => {
                const hasItems = section.items?.length > 0;

                return (
                  <div key={section.title.name}>
                    {/* ✅ If NO dropdown → direct link */}
                    {!hasItems ? (
                      <Link
                        to={section.title.url}
                        className={`block text-lg font-semibold py-3 px-4 rounded-xl
                  ${
                    location.pathname === section.title.url
                      ? "bg-primary/10 text-primary"
                      : "hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`}
                        onClick={() => setMobileOpen(false)}
                      >
                        {section.title.name}
                      </Link>
                    ) : (
                      <>
                        {/* ✅ Parent with dropdown */}
                        <div className="text-lg font-semibold py-3 px-4">
                          {section.title.name}
                        </div>

                        {/* Submenu */}
                        <div className="ml-4 space-y-2">
                          {section.items.map((item) => (
                            <Link
                              key={item.name}
                              to={item.url}
                              onClick={() => setMobileOpen(false)}
                              className={`block text-lg py-2 px-4 rounded-xl transition-colors
                        ${
                          location.pathname.includes(item.url)
                            ? "bg-primary/10 text-primary"
                            : "hover:bg-gray-100 dark:hover:bg-gray-800"
                        }`}
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                );
              })}

              {/* CTA */}
              <Link
                to="/freeconsulation"
                onClick={() => setMobileOpen(false)}
                className="bg-primary text-white text-center py-3 px-4 rounded-xl font-bold text-lg mt-2"
              >
                Free Consultation
              </Link>
            </nav>
          </div>
        </div>
      )}{" "}
    </>
  );
}
