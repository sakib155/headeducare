import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { menuData } from "./menuData";
import { ChevronDown, ChevronRight } from "lucide-react";

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
          <div className="flex items-center justify-between h-28">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-2 group cursor-pointer shrink-0"
            >
             <div className="h-14 w-48 flex items-center">
  <img src="/HEAD_horizontal.png" alt="Head Educare" className="h-full w-auto object-contain" />
</div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden xl:flex items-center justify-center flex-1 space-x-8">
              {menuData.map((section) => {
                const isOpen = openMenu === section.title.name;
                return (
                  <div
                    key={section.title.name}
                    className="relative"
                    onMouseEnter={() => handleMenuEnter(section.title.name)}
                    onMouseLeave={() => handleMenuLeave(section.title.name)}
                  >
                    {section.title.name === "Contact Us" ? (
                      <a
                        href="https://wa.me/8801XXXXXXXXX"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative flex items-center text-sm font-semibold transition-all duration-300 bg-primary text-white px-6 py-4 rounded-lg hover:bg-primary/90"
                      >
                        +880 1XXXXXXXXX
                      </a>
                    ) : (
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
                    )}
                    {/* Submenu */}
                    {section.items?.length > 0 && (
                      <div
                        className="nav-dropdown absolute left-0 mt-1.5
                      bg-white dark:bg-[#01091c]
                      shadow-lg border border-gray-200 dark:border-gray-700
                      transition-all duration-300 overflow-y-auto z-50"
                        style={{
                          width: section.title.name === "Country" ? "580px" : "250px",
                          maxHeight: "75vh",
                          opacity: isOpen ? 1 : 0,
                          pointerEvents: isOpen ? "auto" : "none",
                          transform: isOpen ? "translateY(0)" : "translateY(-4px)",
                        }}
                      >
                        {section.title.name === "Country" ? (
                          <>
                            {/* ── Popular Destinations ── */}
                            <div className="px-5 pt-4 pb-3">
                              <div className="flex items-center gap-2 mb-3">
                                <div className="w-1 h-4 rounded-full bg-primary" />
                                <span className="text-xs font-semibold tracking-wider uppercase text-gray-500 dark:text-gray-400">
                                  Popular Destinations
                                </span>
                              </div>
                              <div className="grid grid-cols-3 gap-1.5">
                                {section.items
                                  .filter((item) => !item.items)
                                  .map((item) => (
                                    <Link
                                      key={item.name}
                                      to={item.url}
                                      className="flex items-center gap-2.5 text-sm py-2.5 px-3 rounded-xl transition-all duration-200 hover:bg-primary/5 dark:hover:bg-gray-800 hover:shadow-sm"
                                    >
                                      <span className="text-lg leading-none flex-shrink-0">{item.flag}</span>
                                      <span className="font-medium text-gray-700 dark:text-gray-200 truncate">
                                        {item.name}
                                      </span>
                                    </Link>
                                  ))}
                              </div>
                            </div>

                            {/* ── Divider ── */}
                            <div className="mx-5 border-t border-gray-100 dark:border-gray-800" />

                            {/* ── European Destinations ── */}
                            <div className="px-5 pt-3 pb-4">
                              <div className="flex items-center gap-2 mb-3">
                                <span className="text-base leading-none">🇪🇺</span>
                                <span className="text-xs font-semibold tracking-wider uppercase text-gray-500 dark:text-gray-400">
                                  European Destinations
                                </span>
                              </div>
                              <div className="grid grid-cols-2 gap-1.5">
                                {section.items
                                  .find((item) => item.items)
                                  ?.items.map((sub) => (
                                    <Link
                                      key={sub.name}
                                      to={sub.url}
                                      className="flex items-center gap-2.5 text-sm py-2 px-3 rounded-xl transition-all duration-200 hover:bg-primary/5 dark:hover:bg-gray-800"
                                    >
                                      <span className="text-base leading-none flex-shrink-0">{sub.flag}</span>
                                      <span className="font-medium text-gray-700 dark:text-gray-200">
                                        {sub.name}
                                      </span>
                                    </Link>
                                  ))}
                              </div>
                            </div>

                            {/* ── View All ── */}
                            <Link
                              to="/allcountries/allcountry"
                              className="block text-center text-xs font-semibold py-3 mx-4 mb-3 rounded-xl bg-primary/5 dark:bg-gray-800 text-primary hover:bg-primary/10 dark:hover:bg-gray-700 transition-colors"
                            >
                              View All Countries →
                            </Link>
                          </>
                        ) : (
                          <div className="py-1">
                            {section.items.map((item, idx) => {
                              if (item.items) {
                                return (
                                  <div key={item.name} className="relative group/nested">
                                    <div className="flex items-center justify-between text-sm py-2.5 px-5 transition-colors duration-200 border-b border-gray-300 dark:border-gray-500 cursor-default hover:bg-gray-50 dark:hover:bg-gray-800">
                                      <div className="flex items-center gap-2">
                                        {item.flag && <span>{item.flag}</span>}
                                        <span>{item.name}</span>
                                      </div>
                                      <ChevronRight className="h-3.5 w-3.5 ml-2" />
                                    </div>
                                    <div className="absolute left-full top-0 ml-1 bg-white dark:bg-[#01091c] shadow-lg border border-gray-200 dark:border-gray-700 rounded-lg py-1 min-w-[180px] opacity-0 invisible group-hover/nested:opacity-100 group-hover/nested:visible transition-all duration-200 z-50">
                                      {item.items.map((sub) => (
                                        <Link
                                          key={sub.name}
                                          to={sub.url}
                                          className="flex items-center gap-2 text-sm py-2 px-4 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                                        >
                                          {sub.flag && <span>{sub.flag}</span>}
                                          <span>{sub.name}</span>
                                        </Link>
                                      ))}
                                    </div>
                                  </div>
                                );
                              }
                              return (
                                <Link
                                  key={item.name}
                                  to={item.url}
                                  className={`flex items-center gap-2 text-sm py-2.5 px-5 transition-colors duration-200 border-b border-gray-300 dark:border-gray-500 ${idx === section.items.length - 1 ? "border-b-0" : ""}`}
                                >
                                  {item.flag && <span>{item.flag}</span>}
                                  <span>{item.name}</span>
                                </Link>
                              );
                            })}
                          </div>
                        )}
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
                      section.title.name === "Contact Us" ? (
                        <a
                          href="https://wa.me/8801XXXXXXXXX"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block text-lg font-semibold py-3 px-4 rounded-xl bg-primary/10 text-primary"
                          onClick={() => setMobileOpen(false)}
                        >
                          +880 1XXXXXXXXX
                        </a>
                      ) : (
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
                      )
                    ) : (
                      <>
                        {/* ✅ Parent with dropdown */}
                        <div className="text-lg font-semibold py-3 px-4">
                          {section.title.name}
                        </div>

                        {/* Submenu */}
                        <div className="ml-4 space-y-2">
                          {section.items.map((item, idx) => {
                            if (item.items) {
                              return (
                                <div key={item.name}>
                                  <div className="flex items-center gap-2 text-base font-semibold py-2 px-4 text-gray-500 dark:text-gray-400">
                                    {item.flag && <span>{item.flag}</span>}
                                    <span>{item.name}</span>
                                  </div>
                                  <div className="ml-4 space-y-1">
                                    {item.items.map((sub) => (
                                      <Link
                                        key={sub.name}
                                        to={sub.url}
                                        onClick={() => setMobileOpen(false)}
                                        className="flex items-center gap-2 text-base py-1.5 px-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                                      >
                                        {sub.flag && <span>{sub.flag}</span>}
                                        <span>{sub.name}</span>
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              );
                            }
                            return (
                              <Link
                                key={item.name}
                                to={item.url}
                                onClick={() => setMobileOpen(false)}
                                className={`flex items-center gap-2 text-lg py-2 px-4 rounded-xl transition-colors border-b border-gray-300 dark:border-gray-500 ${idx === section.items.length - 1 ? "border-b-0" : ""} ${location.pathname.includes(item.url) ? "bg-primary/10 text-primary" : "hover:bg-gray-100 dark:hover:bg-gray-800"}`}
                              >
                                {item.flag && <span>{item.flag}</span>}
                                <span>{item.name}</span>
                              </Link>
                            );
                          })}
                        </div>
                      </>
                    )}
                  </div>
                );
              })}
            </nav>
          </div>
        </div>
      )}{" "}
    </>
  );
}
