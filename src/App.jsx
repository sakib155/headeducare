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
import ScholarshipSupport from "./pages/services/ScholarshipSupport";
import VisaServices from "./pages/services/VisaServices";
import WillProvide from "./pages/about/we-will-provide";
import USMentorship from "./pages/services/USMentorship";
import GeneralDocumentsChecklist from "./pages/services/GeneralDocumentsChecklist";
import AcademicQualifications from "./pages/services/AcademicQualifications";
import TestPreparation from "./pages/services/TestPreparation";
import EliteSchoolAdmission from "./pages/mentorship/EliteSchoolAdmission";
import MastersMentorshipProgram from "./pages/mentorship/MastersMentorshipProgram";
import LiberalArtsEducation from "./pages/mentorship/LiberalArtsEducation";
import AcceptanceLetters from "./pages/mentorship/AcceptanceLetters";
import StrategyBrainstorm from "./pages/mentorship/StrategyBrainstorm";
import WritingApplication from "./pages/mentorship/WritingApplication";
import CollegeSelection from "./pages/mentorship/CollegeSelection";
import FinancialAid from "./pages/mentorship/FinancialAid";
import PostGraduateFunding from "./pages/mentorship/PostGraduateFunding";
import Admin from "./pages/Admin";
import Courses from "./pages/Courses";
import StudyMBBS from "./pages/StudyMBBS";
import AutoSeo from "./components/Seo";

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

  const location = useLocation();
  const isAdminPage = location.pathname.startsWith("/admin");

  return (
    <div className="min-h-screen">
      <ScrollToTop />
      {!isAdminPage && <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />}

      <Routes>
        <Route path="/admin" element={<Admin />} />
        <Route path="/" element={<AutoSeo><Home /></AutoSeo>} />
        <Route path="/about" element={<AutoSeo><About /></AutoSeo>} />
        <Route path="/about/our-people" element={<AutoSeo><OurPeople /></AutoSeo>} />
        <Route path="/about/we-will-provide" element={<AutoSeo><WillProvide /></AutoSeo>} />
        <Route path="/services" element={<AutoSeo><Services /></AutoSeo>} />
        <Route path="/destination/:slug" element={<AutoSeo><CountryDetails /></AutoSeo>} />
        <Route path="/contact" element={<AutoSeo><Contact /></AutoSeo>} />
        <Route path="/freeconsulation" element={<AutoSeo><FreeConsultation /></AutoSeo>} />
        <Route path="/allcountries/allcountry" element={<AutoSeo><DestinationPage /></AutoSeo>} />
        <Route path="/legal/termsService" element={<AutoSeo><TermsServices /></AutoSeo>} />
        <Route path="/legal/privacyPolicy" element={<AutoSeo><PrivacyPolicy /></AutoSeo>} />
        <Route path="/legal/refundPolicy" element={<AutoSeo><RefundPolicy /></AutoSeo>} />
        <Route path="/legal/disclaimer" element={<AutoSeo><Disclaimer /></AutoSeo>} />
        {/* Services */}
        <Route path="/services/admission-support" element={<AutoSeo><AdmissionSupport /></AutoSeo>} />
        <Route path="/services/profile-evaluation" element={<AutoSeo><ProfileEvaluation /></AutoSeo>} />
        <Route path="/services/sop-essay-drafting" element={<AutoSeo><SopEssayDrafting /></AutoSeo>} />
        <Route path="/services/common-essay" element={<AutoSeo><CommonEssay /></AutoSeo>} />
        <Route path="/services/scholarship-guidance" element={<AutoSeo><ScholarshipGuidance /></AutoSeo>} />
        <Route path="/services/complete-application-help" element={<AutoSeo><CompleteApplicationHelp /></AutoSeo>} />
        <Route path="/services/financial-documentation" element={<AutoSeo><FinancialDocumentation /></AutoSeo>} />
        <Route path="/services/visa-documentation" element={<AutoSeo><VisaDocumentation /></AutoSeo>} />
        <Route path="/services/visa-application" element={<AutoSeo><VisaApplication /></AutoSeo>} />
        <Route path="/services/quick-appointment" element={<AutoSeo><QuickAppointment /></AutoSeo>} />
        <Route path="/services/health-insurance" element={<AutoSeo><HealthInsurance /></AutoSeo>} />
        <Route path="/services/student-accommodation" element={<AutoSeo><StudentAccommodation /></AutoSeo>} />
        <Route path="/services/education-loan-support" element={<AutoSeo><EducationLoanSupport /></AutoSeo>} />
        <Route path="/services/visa-mock-interview" element={<AutoSeo><VisaMockInterview /></AutoSeo>} />
        <Route path="/services/scholarship-support" element={<AutoSeo><ScholarshipSupport /></AutoSeo>} />
        <Route path="/services/visa-services" element={<AutoSeo><VisaServices /></AutoSeo>} />
        <Route path="/services/us-mentorship" element={<AutoSeo><USMentorship /></AutoSeo>} />
        <Route path="/mentorship" element={<AutoSeo><USMentorship /></AutoSeo>} />
        <Route path="/services/general-documents-checklist" element={<AutoSeo><GeneralDocumentsChecklist /></AutoSeo>} />
        <Route path="/services/academic-qualifications" element={<AutoSeo><AcademicQualifications /></AutoSeo>} />
        <Route path="/services/test-preparation" element={<AutoSeo><TestPreparation /></AutoSeo>} />

        {/* USA Mentorship Program */}
        <Route path="/mentorship/liberal-arts-college" element={<AutoSeo><LiberalArtsEducation /></AutoSeo>} />
        <Route path="/mentorship/elite-school-admission" element={<AutoSeo><EliteSchoolAdmission /></AutoSeo>} />
        <Route path="/mentorship/masters-mentorship-program" element={<AutoSeo><MastersMentorshipProgram /></AutoSeo>} />
        <Route path="/mentorship/liberal-arts-education" element={<AutoSeo><LiberalArtsEducation /></AutoSeo>} />
        <Route path="/mentorship/acceptance-letters" element={<AutoSeo><AcceptanceLetters /></AutoSeo>} />
        <Route path="/mentorship/strategy-brainstorm" element={<AutoSeo><StrategyBrainstorm /></AutoSeo>} />
        <Route path="/mentorship/writing-application" element={<AutoSeo><WritingApplication /></AutoSeo>} />
        <Route path="/mentorship/college-selection" element={<AutoSeo><CollegeSelection /></AutoSeo>} />
        <Route path="/mentorship/financial-aid" element={<AutoSeo><FinancialAid /></AutoSeo>} />
        <Route path="/mentorship/post-graduate-funding" element={<AutoSeo><PostGraduateFunding /></AutoSeo>} />
        <Route path="/courses" element={<AutoSeo><Courses /></AutoSeo>} />
        <Route path="/study-mbbs" element={<AutoSeo><StudyMBBS /></AutoSeo>} />
      </Routes>

      {!isAdminPage && <Footer />}
      {!isAdminPage && <ChatWidget />}
    </div>
  );
}
