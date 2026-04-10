import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ChatWidget from "./components/ChatWidget";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import CountryDetails from "./pages/country/CountryDetails";
import Contact from "./pages/Contact";
import OurPeople from "./pages/about/our-people";
import DestinationPage from "./pages/allcountries/allcountry";
import FreeConsultation from "./pages/FreeConsultations";
import TermsServices from "./pages/legal/termsServices";
import PrivacyPolicy from "./pages/legal/privacyPolicy";
import RefundPolicy from "./pages/legal/refundPolicy";
import Disclaimer from "./pages/legal/disclaimer";
import AdmissionSupport from "./pages/services/AdmissionSupport";
import HealthInsurance from "./pages/services/HealthInsurance";
import VisaServices from "./pages/services/VisaServices";
import StudentAccommodation from "./pages/services/StudentAccommodation";
import ScholarshipSupport from "./pages/services/ScholarshipSupport";
import WillProvide from "./pages/about/we-will-provide";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const stored = localStorage.getItem("darkMode");

    if (stored !== null) {
      return stored === "true"; // correct
    }

    return false; // default ALWAYS light
  });

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) root.classList.add("dark");
    else root.classList.remove("dark");

    localStorage.setItem("darkMode", darkMode); // save to storage
  }, [darkMode]);
  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  return (
    <div className="min-h-screen ">
      <ScrollToTop />
      {/* Pass toggle function to header */}
      <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/about/our-people" element={<OurPeople />} />
        <Route path="/services" element={<Services />} />
        <Route path="/destination/:slug" element={<CountryDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/freeconsulation" element={<FreeConsultation />} />
        <Route path="/allcountries/allcountry" element={<DestinationPage />} />
        <Route path="/legal/termsService" element={<TermsServices />} />
        <Route path="/legal/privacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/legal/refundPolicy" element={<RefundPolicy />} />
        <Route path="/services/admission" element={<AdmissionSupport />} />
        <Route path="/services/visa-application" element={<VisaServices />} />
        <Route path="/about/we-will-provide" element={<WillProvide />} />

        <Route
          path="/services/health-insurance"
          element={<HealthInsurance />}
        />
        <Route
          path="/services/accommodation"
          element={<StudentAccommodation />}
        />
        <Route path="/services/scholarship" element={<ScholarshipSupport />} />
        {/* USA Mentorship Program */}
        <Route
          path="/mentorship/liberal-arts-college"
          element={<LiberalArtsCollege />}
        />
        <Route
          path="/mentorship/elite-school-admission"
          element={<EliteSchoolAdmission />}
        />
        <Route
          path="/mentorship/masters-mentorship-program"
          element={<MastersMentorshipProgram />}
        />
        <Route
          path="/mentorship/liberal-arts-education"
          element={<LiberalArtsEducation />}
        />
        <Route
          path="/mentorship/acceptance-letters"
          element={<AcceptanceLetters />}
        />
        <Route
          path="/mentorship/strategy-brainstorm"
          element={<StrategyBrainstorm />}
        />
        <Route
          path="/mentorship/writing-application"
          element={<WritingApplication />}
        />
        <Route
          path="/mentorship/college-selection"
          element={<CollegeSelection />}
        />
        <Route path="/mentorship/financial-aid" element={<FinancialAid />} />
        <Route
          path="/mentorship/post-graduate-funding"
          element={<PostGraduateFunding />}
        />
      </Routes>

      <Footer />
      <ChatWidget />
    </div>
  );
}
