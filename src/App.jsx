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
import ProfileEvaluation from "./pages/services/ProfileEvaluation";
import SopEssayDrafting from "./pages/services/SopEssayDrafting";
import CommonEssay from "./pages/services/CommonEssay";
import ScholarshipGuidance from "./pages/services/ScholarshipGuidance";
import CompleteApplicationHelp from "./pages/services/CompleteApplicationHelp";
import FinancialDocumentation from "./pages/services/FinancialDocumentation";
import VisaDocumentation from "./pages/services/VisaDocumentation";
import VisaApplication from "./pages/services/VisaApplication";
import QuickAppointment from "./pages/services/QuickAppointment";
import HealthInsurance from "./pages/services/HealthInsurance";
import StudentAccommodation from "./pages/services/StudentAccommodation";
import EducationLoanSupport from "./pages/services/EducationLoanSupport";
import VisaMockInterview from "./pages/services/VisaMockInterview";
import WillProvide from "./pages/about/we-will-provide";
import EliteSchoolAdmission from "./pages/mentorship/EliteSchoolAdmission";
import MastersMentorshipProgram from "./pages/mentorship/MastersMentorshipProgram";
import LiberalArtsEducation from "./pages/mentorship/LiberalArtsEducation";
import AcceptanceLetters from "./pages/mentorship/AcceptanceLetters";
import StrategyBrainstorm from "./pages/mentorship/StrategyBrainstorm";
import WritingApplication from "./pages/mentorship/WritingApplication";
import CollegeSelection from "./pages/mentorship/CollegeSelection";
import FinancialAid from "./pages/mentorship/FinancialAid";
import PostGraduateFunding from "./pages/mentorship/PostGraduateFunding";

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
      return stored === "true";
    }
    return false;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) root.classList.add("dark");
    else root.classList.remove("dark");
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  return (
    <div className="min-h-screen">
      <ScrollToTop />
      <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/about/our-people" element={<OurPeople />} />
        <Route path="/about/we-will-provide" element={<WillProvide />} />
        <Route path="/services" element={<Services />} />
        <Route path="/destination/:slug" element={<CountryDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/freeconsulation" element={<FreeConsultation />} />
        <Route path="/allcountries/allcountry" element={<DestinationPage />} />
        <Route path="/legal/termsService" element={<TermsServices />} />
        <Route path="/legal/privacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/legal/refundPolicy" element={<RefundPolicy />} />
        <Route path="/legal/disclaimer" element={<Disclaimer />} />
        {/* Services */}
        <Route
          path="/services/admission-support"
          element={<AdmissionSupport />}
        />
        <Route
          path="/services/profile-evaluation"
          element={<ProfileEvaluation />}
        />
        <Route
          path="/services/sop-essay-drafting"
          element={<SopEssayDrafting />}
        />
        <Route path="/services/common-essay" element={<CommonEssay />} />
        <Route
          path="/services/scholarship-guidance"
          element={<ScholarshipGuidance />}
        />
        <Route
          path="/services/complete-application-help"
          element={<CompleteApplicationHelp />}
        />
        <Route
          path="/services/financial-documentation"
          element={<FinancialDocumentation />}
        />
        <Route
          path="/services/visa-documentation"
          element={<VisaDocumentation />}
        />
        <Route
          path="/services/visa-application"
          element={<VisaApplication />}
        />
        <Route
          path="/services/quick-appointment"
          element={<QuickAppointment />}
        />
        <Route
          path="/services/health-insurance"
          element={<HealthInsurance />}
        />
        <Route
          path="/services/student-accommodation"
          element={<StudentAccommodation />}
        />
        <Route
          path="/services/education-loan-support"
          element={<EducationLoanSupport />}
        />
        <Route
          path="/services/visa-mock-interview"
          element={<VisaMockInterview />}
        />

        {/* USA Mentorship Program */}
        <Route
          path="/mentorship/liberal-arts-college"
          element={<LiberalArtsEducation />}
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
