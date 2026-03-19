import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ChatWidget from "./components/ChatWidget";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Countries from "./pages/Countries";
import Contact from "./pages/Contact";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    // Load initial value from localStorage
    return localStorage.getItem("darkMode") === "true";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) root.classList.add("dark");
    else root.classList.remove("dark");

    localStorage.setItem("darkMode", darkMode); // save to storage
  }, [darkMode]);
  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  return (
    <div className="min-h-screen bg-background-light text-[#0d121b]">
      <ScrollToTop />
      {/* Pass toggle function to header */}
      <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/countries" element={<Countries />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
}
