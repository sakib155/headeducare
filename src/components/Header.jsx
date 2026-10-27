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
  // Solomon-style: transparent over the dark hero, solid after scrolling
  const [atTop, setAtTop] = useState(true);

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

  useEffect(() => {
    const onScroll = () => setAtTop(window.scrollY <= 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = !atTop;

  const toggleMobileItem = (key) => {
    setMobileExpanded((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <>
      <style>{`
        .menu-scroll { scrollbar-width: thin; scrollbar-color: rgba(32,66,118,.45) transparent; }
        .menu-scroll::-webkit-scrollbar { width: 6px; }
        .menu-scroll::-webkit-scrollbar-track { background: transparent; }
        .menu-scroll::-webkit-scrollbar-thumb { background: rgba(32,66,118,.35); border-radius: 8px; }
        .menu-scroll::-webkit-scrollbar-thumb:hover { background: rgba(32,66,118,.55); }
        .dark .menu-scroll { scrollbar-color: rgba(127,178,221,.4) transparent; }
        .dark .menu-scroll::-webkit-scrollbar-thumb { background: rgba(127,178,221,.35); }
      `}</style>
      <div className={`w-full font-sans ${darkMode ? "dark" : ""}`}>
        {/* Header - fixed so it overlays the dark hero, solid after scroll */}
        <header
          className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
            solid
              ? "bg-white dark:bg-[#0f203c] border-b border-gray-200 dark:border-white/10 shadow-md"
              : "bg-transparent border-b border-transparent"
          }`}
        >
          {/* ── Top row: logo + phone CTA ── */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className={`flex items-center justify-between transition-all duration-300 ${
                solid ? "py-2" : "py-3.5"
              }`}
            >
              {/* Logo */}
              <a
                href="/"
                className="flex items-center gap-2 group cursor-pointer shrink-0 focus:outline-none"
              >
                <div
                  className={`flex items-center transition-all duration-300 ${
                    solid ? "h-10" : "h-13"
                  }`}
                >
                  <img
                    src="/HEAD_horizontal.png"
                    alt="Head Educare"
                    className="h-full w-auto object-contain"
                  />
                </div>
              </a>

              {/* Right side: dark-mode toggle + phone CTA */}
              <div className="flex items-center gap-2 sm:gap-3">
                <a
                  href="https://wa.me/8801910833888"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`hidden sm:inline-flex items-center gap-2 whitespace-nowrap shrink-0 text-sm py-2.5 px-5 rounded-sm transition-all duration-300 ${
                    atTop
                      ? "border border-white/80 text-white hover:bg-white hover:text-[#204276] font-bold"
                      : "sol-btn"
                  }`}
                  style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 700 }}
                >
                  <Phone className="w-4 h-4 shrink-0" />
                  <span className="tracking-wide">+8801910 833 888</span>
                </a>

                <button
                  type="button"
                  onClick={toggleDarkMode}
                  className={`w-9 h-9 rounded-sm border flex items-center justify-center transition-colors focus:outline-none ${
                    atTop
                      ? "border-white/70 text-white hover:bg-white/10"
                      : "border-gray-200 text-[#204276] hover:bg-[#f2f2f2] dark:border-white/20 dark:text-white"
                  }`}
                  aria-label="Toggle dark mode"
                >
                  {darkMode ? (
                    <Sun className="w-4.5 h-4.5 text-[#7fb2dd]" />
                  ) : (
                    <Moon className={`w-4.5 h-4.5 ${atTop ? "" : ""}`} />
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => setMobileOpen(!mobileOpen)}
                  className={`xl:hidden w-9 h-9 rounded-sm flex items-center justify-center transition-colors focus:outline-none ${
                    atTop
                      ? "bg-white/15 border border-white/70 text-white hover:bg-white hover:text-[#204276]"
                      : "bg-[#204276] text-white hover:bg-black"
                  }`}
                  aria-label="Toggle mobile menu"
                >
                  {mobileOpen ? (
                    <X className="w-5 h-5" />
                  ) : (
                    <Menu className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* ── Nav row: Oswald uppercase links with dropdowns ── */}
          <div
            className={`hidden xl:block border-t ${
              atTop ? "border-white/20 bg-transparent" : "border-gray-100 bg-white dark:bg-[#0f203c] dark:border-white/10"
            }`}
          >
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center gap-1">
              {menuData.map((section) => {
                const isContact = section.title.name === "Contact Us";
                const isOpen = openMenu === section.title.name;
                const hasItems = section.items && section.items.length > 0;
                const isActive = currentPath === section.title.url;
                const hasNested = section.items?.some((item) => item.items);
                const needsScroll = !hasNested && (section.items?.length || 0) > 9;

                if (isContact) {
                  return null;
                }

                return (
                  <div
                    key={section.title.name}
                    className="relative shrink-0"
                    onMouseEnter={() => handleMenuEnter(section.title.name)}
                    onMouseLeave={handleMenuLeave}
                  >
                    <a
                      href={section.title.url}
                      className={`relative flex items-center gap-1.5 whitespace-nowrap px-4 py-3 text-[15px] uppercase tracking-wide transition-colors duration-150 border-b-2 ${
                        atTop
                          ? isActive || isOpen
                            ? "text-[#7fb2dd] border-[#7fb2dd]"
                            : "text-white/90 border-transparent hover:text-[#7fb2dd]"
                          : isActive || isOpen
                          ? "text-[#204276] dark:text-[#7fb2dd] border-[#204276] dark:border-[#7fb2dd]"
                          : "text-gray-600 dark:text-gray-300 border-transparent hover:text-[#2b7bb9] dark:hover:text-[#7fb2dd]"
                      }`}
                      style={{ fontFamily: '"Oswald", sans-serif', fontWeight: 500 }}
                    >
                      <span className="whitespace-nowrap">{section.title.name}</span>
                      {hasItems && (
                        <ChevronDown
                          className={`w-3.5 h-3.5 shrink-0 transition-transform duration-200 ${
                            isOpen
                              ? "rotate-180 text-[#204276] dark:text-[#7fb2dd]"
                              : atTop
                              ? "text-white/70"
                              : "text-gray-400"
                          }`}
                        />
                      )}
                    </a>

                    {/* Dropdown */}
                    {hasItems && isOpen && (
                      <div
                        className="absolute left-0 top-full pt-1 z-50"
                        style={{
                          width:
                            section.title.name === "Services"
                              ? "380px"
                              : section.title.name === "Elite School Mentorship"
                              ? "290px"
                              : "260px",
                        }}
                      >
                        <div className="bg-white dark:bg-[#0f203c] shadow-2xl border-t-2 border-[#204276] dark:border-[#7fb2dd] py-1.5 overflow-visible">
                          <div
                            className={
                              needsScroll
                                ? "max-h-[min(70vh,600px)] overflow-y-auto overscroll-contain menu-scroll"
                                : ""
                            }
                          >
                            {section.items.map((item, idx) => {
                              const isSubOpen = openNestedSub === item.name;

                              if (item.items) {
                                return (
                                  <div
                                    key={item.name}
                                    className="relative group/nested"
                                    onMouseEnter={() => setOpenNestedSub(item.name)}
                                  >
                                    <div
                                      className={`flex items-center justify-between py-2.5 px-4 cursor-pointer transition-colors duration-150 border-b border-gray-100 dark:border-white/10 ${
                                        isSubOpen
                                          ? "bg-[#eaf1f8] text-[#204276] dark:bg-[#7fb2dd]/15 dark:text-[#7fb2dd]"
                                          : "text-gray-700 hover:bg-[#eaf1f8] hover:text-[#204276] dark:text-gray-200 dark:hover:bg-[#7fb2dd]/15 dark:hover:text-[#7fb2dd]"
                                      }`}
                                    >
                                      <span className="truncate">{item.name}</span>
                                      <ChevronRight className="w-4 h-4 shrink-0 text-gray-400 group-hover/nested:text-[#204276] group-hover/nested:translate-x-0.5 transition-transform" />
                                    </div>

                                    <div
                                      className={`absolute left-[99%] top-0 pl-1.5 z-50 transition-all duration-150 ${
                                        isSubOpen
                                          ? "opacity-100 visible translate-x-0"
                                          : "opacity-0 invisible pointer-events-none -translate-x-1"
                                      }`}
                                      style={{
                                        width:
                                          item.name === "USA Mentorship" ? "310px" : "230px",
                                      }}
                                    >
                                      <div className="bg-white dark:bg-[#0f203c] shadow-2xl border-t-2 border-[#204276] dark:border-[#7fb2dd] py-1.5 max-h-[60vh] overflow-y-auto overscroll-contain menu-scroll">
                                        {item.items.map((sub, sIdx) => (
                                          <a
                                            key={sub.name}
                                            href={sub.url}
                                            className={`flex items-center py-2.5 px-4 transition-colors duration-150 border-b border-gray-50 dark:border-white/5 ${
                                              sIdx === item.items.length - 1
                                                ? "border-b-0"
                                                : ""
                                            } text-gray-700 hover:bg-[#eaf1f8] hover:text-[#204276]`}
                                          >
                                            <span className="truncate">{sub.name}</span>
                                          </a>
                                        ))}
                                      </div>
                                    </div>
                                  </div>
                                );
                              }

                              return (
                                <a
                                  key={item.name}
                                  href={item.url}
                                  className={`flex items-center justify-between py-2.5 px-4 transition-colors duration-150 border-b border-gray-100 dark:border-white/10 ${
                                    idx === section.items.length - 1 ? "border-b-0" : ""
                                  } text-gray-700 hover:bg-[#eaf1f8] hover:text-[#204276]`}
                                  onMouseEnter={() => setOpenNestedSub(null)}
                                >
                                  <span className="truncate">{item.name}</span>
                                </a>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>
          </div>
        </header>

        {/* Mobile Drawer */}
        {mobileOpen && (
          <div className="fixed inset-0 z-[60] xl:hidden">
            {/* Backdrop */}
            <div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
              onClick={() => setMobileOpen(false)}
            />

            {/* Drawer Panel */}
            <div className="fixed inset-y-0 right-0 max-w-sm w-full bg-white dark:bg-[#0f203c] shadow-2xl flex flex-col z-50 overflow-hidden">
              {/* Drawer Header */}
              <div className="p-4 border-b border-gray-200 dark:border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-[#204276] flex items-center justify-center text-white">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <span className="font-extrabold text-base tracking-tight text-gray-900 dark:text-white">
                    HEAD<span className="text-[#2b7bb9]">EDUCARE</span>
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  className="p-2 text-gray-500 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-white/10"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Line by line mobile items */}
              <div className="flex-1 overflow-y-auto p-4 space-y-1 dark:bg-[#0f203c]">
                {menuData.map((section) => {
                  const isContact = section.title.name === "Contact Us";
                  const hasItems = section.items && section.items.length > 0;
                  const isExpanded = !!mobileExpanded[section.title.name];

                  if (isContact) {
                    return (
                      <div key={section.title.name} className="pt-4">
                        <a
                          href="https://wa.me/8801910833888"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm sol-btn"
                        >
                          <Phone className="w-4 h-4 shrink-0" />
                          <span>+8801910 833 888</span>
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
                        className="block py-2.5 px-3 text-sm font-semibold text-gray-900 dark:text-white rounded-sm hover:bg-[#eaf1f8] hover:text-[#204276] dark:hover:bg-[#7fb2dd]/15 dark:hover:text-[#7fb2dd]"
                        style={{ fontFamily: '"Oswald", sans-serif' }}
                      >
                        {section.title.name}
                      </a>
                    );
                  }

                  return (
                    <div key={section.title.name} className="border-b border-gray-100 dark:border-white/10 pb-1">
                      <button
                        type="button"
                        onClick={() => toggleMobileItem(section.title.name)}
                        className="w-full flex items-center justify-between py-2.5 px-3 text-left font-semibold text-sm text-gray-900 dark:text-white hover:text-[#204276] dark:hover:text-[#7fb2dd] transition-colors uppercase tracking-wide"
                        style={{ fontFamily: '"Oswald", sans-serif' }}
                      >
                        <span>{section.title.name}</span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 text-gray-400 ${
                            isExpanded ? "rotate-180 text-[#204276]" : ""
                          }`}
                        />
                      </button>

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
                                    className="w-full flex items-center justify-between py-2 px-2.5 bg-[#eaf1f8] dark:bg-[#7fb2dd]/15 text-xs font-bold text-gray-900 dark:text-white"
                                  >
                                    <span>{item.name}</span>
                                    <ChevronDown
                                      className={`w-3.5 h-3.5 transition-transform ${
                                        isSubExpanded
                                          ? "rotate-180 text-[#204276]"
                                          : "text-gray-400"
                                      }`}
                                    />
                                  </button>

                                  {isSubExpanded && (
                                    <div className="pl-3 py-1 space-y-1 border-l-2 border-[#204276]/30 ml-2 mt-1">
                                      {item.items.map((sub) => (
                                        <a
                                          key={sub.name}
                                          href={sub.url}
                                          onClick={() => setMobileOpen(false)}
                                          className="block py-1.5 px-2 text-xs text-gray-700 dark:text-gray-300 hover:text-[#204276]"
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
                                className="block py-2 px-2.5 text-xs font-medium text-gray-700 dark:text-gray-300 hover:text-[#204276] rounded-sm hover:bg-[#eaf1f8] dark:hover:bg-[#7fb2dd]/15"
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
              <div className="p-4 border-t border-gray-200 dark:border-white/10 bg-[#f2f2f2] dark:bg-[#0d1626]">
                <a
                  href="/freeconsulation"
                  className="w-full inline-flex items-center justify-center py-3 px-4 sol-btn text-sm"
                  onClick={() => setMobileOpen(false)}
                >
                  Book Free Consultation
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
