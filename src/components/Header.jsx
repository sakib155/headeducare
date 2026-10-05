import React, { useState, useEffect, useRef } from "react";
import {
  ChevronDown,
  ChevronRight,
  Menu,
  X,
  Phone,
  Sun,
  Moon,
  GraduationCap,
  ArrowRight
} from "lucide-react";
import { menuData } from "./menuData";

export default function Header({
  toggleDarkMode,
  darkMode = false,
  currentPath = "/",
}) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [openNestedSub, setOpenNestedSub] = useState(null);
  const [mobileExpanded, setMobileExpanded] = useState({});
  const [scrolled, setScrolled] = useState(false);

  const closeTimer = useRef(null);

  const handleMenuEnter = (title) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenMenu(title);
  };

  const handleMenuLeave = () => {
    closeTimer.current = setTimeout(() => {
      setOpenMenu(null);
      setOpenNestedSub(null);
    }, 220);
  };

  // Listen to scroll to apply subtle shadow
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 15);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleMobileItem = (key) => {
    setMobileExpanded((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className={`w-full font-sans transition-colors duration-200 ${darkMode ? "dark" : ""}`}>
      {/* Top Announcement Bar */}
      <div className="bg-primary/10 border-b border-primary/20 py-1 px-4 text-xs sm:text-sm font-semibold text-center text-primary flex items-center justify-center flex-wrap gap-2 transition-colors">
        <span>Fall 2027 Admissions & Elite School Mentorship Applications are now open!</span>
        <a
          href="/freeconsulation"
          className="inline-flex items-center gap-1 font-bold underline hover:opacity-85 transition-opacity ml-1"
        >
          Book Free Review <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Header */}
      <header
        className={`glass-header sticky top-0 z-40 w-full transition-all duration-300 ${
          scrolled ? "shadow-lg" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-28">
            {/* Logo (fixed width removed -> no dead space after the image) */}
            <a
              href="/"
              className="flex items-center gap-2 group cursor-pointer shrink-0 focus:outline-none"
            >
              <div className="h-14 flex items-center">
                <img src="/HEAD_horizontal.png" alt="Head Educare" className="h-full w-auto object-contain" />
              </div>
            </a>

            {/* Desktop Nav
                - flex-1 + ml-6: starts close to the logo and uses the free space
                - gap-0.5 (NOT space-x-*): space-x overrides ml-auto on the contact button
                - mr-3: small breathing room before the dark-mode toggle */}
            <nav className="hidden xl:flex flex-1 items-center ml-6 mr-3 gap-0.5">
              {menuData.map((section) => {
                const isContact = section.title.name === "Contact Us";
                const isOpen = openMenu === section.title.name;
                const hasItems = section.items && section.items.length > 0;
                const isActive = currentPath === section.title.url;

                if (isContact) {
                  return (
                    <a
                      key={section.title.name}
                      href="https://wa.me/8801XXXXXXXXX"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-auto inline-flex items-center gap-2 whitespace-nowrap shrink-0 text-sm font-semibold transition-all duration-200 bg-primary text-white px-5 py-2.5 rounded-lg hover:bg-primary/90 shadow-sm shadow-primary/25 hover:shadow-md active:scale-95"
                    >
                      <Phone className="w-4 h-4 shrink-0" />
                      <span>+880 1XXXXXXXXX</span>
                    </a>
                  );
                }

                return (
                  <div
                    key={section.title.name}
                    className="relative shrink-0"
                    onMouseEnter={() => handleMenuEnter(section.title.name)}
                    onMouseLeave={handleMenuLeave}
                  >
                    {/* Top Level Nav Button: bigger text, always one line */}
                    <a
                      href={section.title.url}
                      className={`relative flex items-center gap-1.5 whitespace-nowrap shrink-0 px-2.5 py-2 text-base font-semibold rounded-md transition-colors duration-150 ${
                        isActive || isOpen
                          ? "text-primary-light"
                          : "text-white hover:text-primary-light"
                      }`}
                    >
                      <span className="whitespace-nowrap">{section.title.name}</span>
                      {hasItems && (
                        <ChevronDown
                          className={`w-3.5 h-3.5 shrink-0 transition-transform duration-200 ${
                            isOpen ? "rotate-180 text-primary-light" : "text-white/60"
                          }`}
                        />
                      )}
                      {/* Active indicator underline */}
                      <span
                        className={`absolute bottom-0 left-2 right-2 h-[2px] bg-primary-light transition-all duration-200 ${
                          isOpen || isActive ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
                        }`}
                      />
                    </a>

                    {/* Dropdown */}
                    {hasItems && isOpen && (
                      <div
                        className="absolute left-0 top-full pt-1.5 z-50 animate-in fade-in duration-150"
                        style={{
                          width:
                            section.title.name === "Services"
                              ? "380px"
                              : section.title.name === "Elite School Mentorship"
                              ? "290px"
                              : "260px",
                        }}
                      >
                        <div className="bg-white dark:bg-[#01091c] rounded-xl shadow-2xl border border-gray-200 dark:border-gray-800 py-1.5 overflow-visible">
                          {/* Each row is strictly line-by-line (all rows: text-base, font-medium) */}
                          {section.items.map((item, idx) => {
                            const isSubOpen = openNestedSub === item.name;

                            // Items with nested sub-flyout (Europe or USA Mentorship)
                            if (item.items) {
                              return (
                                <div
                                  key={item.name}
                                  className="relative group/nested"
                                  onMouseEnter={() => setOpenNestedSub(item.name)}
                                >
                                  <div
                                    className={`flex items-center justify-between text-base py-2.5 px-4 font-medium cursor-pointer transition-colors duration-150 border-b border-gray-100 dark:border-gray-800/80 ${
                                      isSubOpen
                                        ? "bg-primary/10 text-primary dark:text-primary"
                                        : "text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800/70 hover:text-primary"
                                    }`}
                                  >
                                    <span className="truncate">{item.name}</span>
                                    <ChevronRight className="w-4 h-4 shrink-0 text-gray-400 group-hover/nested:text-primary group-hover/nested:translate-x-0.5 transition-transform" />
                                  </div>

                                  {/* Line-by-Line Nested Submenu */}
                                  <div
                                    className={`absolute left-[99%] top-0 pl-1.5 z-50 transition-all duration-150 ${
                                      isSubOpen ? "opacity-100 visible translate-x-0" : "opacity-0 invisible pointer-events-none -translate-x-1"
                                    }`}
                                    style={{
                                      width: item.name === "USA Mentorship" ? "310px" : "230px",
                                    }}
                                  >
                                    <div className="bg-white dark:bg-[#01091c] rounded-xl shadow-2xl border border-gray-200 dark:border-gray-800 py-1.5">
                                      {item.items.map((sub, sIdx) => (
                                        <a
                                          key={sub.name}
                                          href={sub.url}
                                          className={`flex items-center text-base py-2.5 px-4 font-medium transition-colors duration-150 border-b border-gray-50 dark:border-gray-800/50 ${
                                            sIdx === item.items.length - 1 ? "border-b-0" : ""
                                          } text-gray-700 dark:text-gray-300 hover:bg-primary/10 hover:text-primary dark:hover:text-primary`}
                                        >
                                          <span className="truncate">{sub.name}</span>
                                        </a>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              );
                            }

                            // Standard single line-by-line item
                            return (
                              <a
                                key={item.name}
                                href={item.url}
                                className={`flex items-center justify-between text-base py-2.5 px-4 font-medium transition-colors duration-150 border-b border-gray-100 dark:border-gray-800/80 ${
                                  idx === section.items.length - 1 ? "border-b-0" : ""
                                } text-gray-800 dark:text-gray-200 hover:bg-primary/10 hover:text-primary dark:hover:text-primary`}
                                onMouseEnter={() => setOpenNestedSub(null)}
                              >
                                <span className="truncate">{item.name}</span>
                              </a>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* Right Side */}
            <div className="flex items-center gap-2 sm:gap-3">
              <button
                type="button"
                onClick={toggleDarkMode}
                className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors focus:outline-none"
                aria-label="Toggle dark mode"
              >
                {darkMode ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5" />}
              </button>

              <button
                type="button"
                onClick={() => setMobileOpen(!mobileOpen)}
                className="xl:hidden w-10 h-10 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors focus:outline-none"
                aria-label="Toggle mobile menu"
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 xl:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileOpen(false)}
          />

          {/* Drawer Panel */}
          <div className="fixed inset-y-0 right-0 max-w-sm w-full bg-white dark:bg-[#01091c] shadow-2xl flex flex-col z-50 overflow-hidden">
            {/* Drawer Header */}
            <div className="p-4 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <span className="font-extrabold text-base tracking-tight text-gray-900 dark:text-white">
                  HEAD<span className="text-primary">EDUCARE</span>
                </span>
              </div>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className="p-2 rounded-lg text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Line by line mobile items */}
            <div className="flex-1 overflow-y-auto p-4 space-y-1">
              {menuData.map((section) => {
                const isContact = section.title.name === "Contact Us";
                const hasItems = section.items && section.items.length > 0;
                const isExpanded = !!mobileExpanded[section.title.name];

                if (isContact) {
                  return (
                    <div key={section.title.name} className="pt-4">
                     <a
  key={section.title.name}
  href="https://wa.me/8801XXXXXXXXX"
  target="_blank"
  rel="noopener noreferrer"
  className="ml-auto inline-flex items-center gap-2 whitespace-nowrap shrink-0 text-sm font-semibold transition-all duration-200 bg-primary text-white px-5 py-3.5 rounded-lg hover:bg-primary/90 shadow-sm shadow-primary/25 hover:shadow-md active:scale-95"
>
  <Phone className="w-4 h-4 shrink-0" />
  <span>+880 1XXXXXXXXX</span>
</a>
                    </div>
                  );
                }

                if (!hasItems) {
                  return (
                    <a
                      key={section.title.name}
                      href={section.title.url}
                      onClick={() => setMobileOpen(false)}
                      className="block py-2.5 px-3 text-sm font-semibold text-gray-900 dark:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                    >
                      {section.title.name}
                    </a>
                  );
                }

                return (
                  <div key={section.title.name} className="border-b border-gray-100 dark:border-gray-800/80 pb-1">
                    <button
                      type="button"
                      onClick={() => toggleMobileItem(section.title.name)}
                      className="w-full flex items-center justify-between py-2.5 px-3 text-left font-semibold text-sm text-gray-900 dark:text-white hover:text-primary transition-colors"
                    >
                      <span>{section.title.name}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 text-gray-400 ${
                          isExpanded ? "rotate-180 text-primary" : ""
                        }`}
                      />
                    </button>

                    {/* Expanded Mobile Section */}
                    {isExpanded && (
                      <div className="pl-3 pr-1 pb-2 space-y-1">
                        {section.items.map((item) => {
                          const isSubExpanded = !!mobileExpanded[item.name];

                          if (item.items) {
                            return (
                              <div key={item.name} className="my-1">
                                <button
                                  type="button"
                                  onClick={() => toggleMobileItem(item.name)}
                                  className="w-full flex items-center justify-between py-2 px-2.5 rounded-lg bg-gray-50 dark:bg-gray-800/70 text-xs font-bold text-gray-900 dark:text-white"
                                >
                                  <span>{item.name}</span>
                                  <ChevronDown
                                    className={`w-3.5 h-3.5 transition-transform ${
                                      isSubExpanded ? "rotate-180 text-primary" : "text-gray-400"
                                    }`}
                                  />
                                </button>

                                {isSubExpanded && (
                                  <div className="pl-3 py-1 space-y-1 border-l-2 border-primary/30 ml-2 mt-1">
                                    {item.items.map((sub) => (
                                      <a
                                        key={sub.name}
                                        href={sub.url}
                                        onClick={() => setMobileOpen(false)}
                                        className="block py-1.5 px-2 text-xs text-gray-700 dark:text-gray-300 hover:text-primary"
                                      >
                                        {sub.name}
                                      </a>
                                    ))}
                                  </div>
                                )}
                              </div>
                            );
                          }

                          return (
                            <a
                              key={item.name}
                              href={item.url}
                              onClick={() => setMobileOpen(false)}
                              className="block py-2 px-2.5 text-xs font-medium text-gray-700 dark:text-gray-300 hover:text-primary rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50"
                            >
                              {item.name}
                            </a>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Mobile Footer CTA */}
            <div className="p-4 border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-[#020b1f]">
              <a
                href="/freeconsulation"
                className="w-full inline-flex items-center justify-center py-2.5 px-4 rounded-xl bg-primary text-white text-xs font-bold shadow-md hover:bg-primary/90 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Book Free Consultation
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}