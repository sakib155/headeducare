import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchMergedCountries, slugOf } from "../../lib/countryData";
import { countriesFallback } from "./countriesFallback";
import { countryDetailStyles as css } from "./Countrydetailstyles";
import {
  TuitionFees,
  LanguageRequirements,
  Intakes,
  Salaries,
  TopCourses,
  ScholarshipTable,
} from "./countryDetailHelpers";

const whyStudyContent = {
  usa: {
    points: [
      { title: "Global Edge", desc: "The United States has a plethora of institutions of higher education and research, much more than any other country. Despite the number of universities in the USA, it is the qualitative standards of education that matters which is respected worldwide." },
      { title: "Twenty-Five of the World's Top 100 Universities", desc: "The USA is home to twenty-five universities that rank amongst the top 100 universities in the world according to the QS World Ranking. The universities in the USA offer a diverse range of programs and cutting-edge research opportunities that attract students from around the globe." },
      { title: "Financial Assistance", desc: "The decision to study in USA is a wise investment for the future. With various options on tuition fees, accommodation choices, and financial support like scholarships and fee waivers, it is affordable and convenient." },
      { title: "Flexibility", desc: "The US education system excels for its flexibility in course selection and institution transfer. This unique feature allows students to switch courses, colleges or universities seamlessly, setting it apart from other countries." },
      { title: "Career Opportunities", desc: "With a strong job market and post-study work options, the USA opens doors to promising careers." },
    ],
  },
  uk: {
    points: [
      { title: "Prestigious Universities", desc: "The top universities in the UK are some of the world's oldest and most prestigious universities, attracting international students for centuries." },
      { title: "Sandwich Programs", desc: "Sandwich programs offer a unique opportunity for students to learn in college and attain practical experience through college-based placement." },
      { title: "Fifteen of the World's Top 100 Universities", desc: "The UK is home to fifteen universities that rank amongst the top 100 universities in the world according to the QS World Ranking. The prestigious universities in the UK provide students with a rich academic tradition and access to innovative research across various disciplines." },
      { title: "Career Opportunities", desc: "Take advantage of a wide range of career opportunities as a graduate from a highly sought after course in the UK." },
    ],
  },
  australia: {
    points: [
      { title: "Globally Recognized Degrees", desc: "Australian degrees are recognized and valued across the globe. This means that if you study in Australia and complete a program, the degree will prove to be of great value for finding employment or pursuing further education anywhere in the world." },
      { title: "Seven of the Best Student Cities", desc: "According to the QS Best Student Cities Rankings for 2024, seven cities in Australia have secured positions within the top 100 best student cities worldwide." },
      { title: "Post-Study Work up to 6 Years", desc: "Students who have completed their degree in Australia are eligible for post-study work visa ranging from 2 to 4 years. Those studying in regional areas can obtain a visa for up to 6 years." },
      { title: "Nine of the World's Top 100 Universities", desc: "Australia is home to nine universities that rank amongst the top 100 universities in the world, offering world-class education and research opportunities." },
    ],
  },
  canada: {
    points: [
      { title: "Four of the World's Top 100 Universities", desc: "Canada is home to four universities that rank amongst the top 100 universities in the world. Canadian universities are known for their high-quality education and inclusive environments." },
      { title: "Globally Recognized Degrees", desc: "Canadian universities offer world-class education, providing exceptional academic programs and research opportunities that open doors to international career opportunities." },
      { title: "Post-Study Work Up to 3 Years", desc: "Canada offers post-study work permits of up to three years, allowing international students to gain valuable work experience after completing their studies." },
      { title: "Working Hours", desc: "When you study in Canada, you get the opportunity to work for 24 hours per week during your ongoing course, and 40 hours per week during vacations." },
      { title: "Safe Place to Study", desc: "Being a land of immigrants, Canada is known for being a safe and inclusive country, making it an ideal place for international students to study and live." },
    ],
  },
  "new-zealand": {
    points: [
      { title: "Global Recognition", desc: "Students who have studied at the universities in New Zealand are earning a reputation as innovative thinkers and are being addressed as 'The New World Class'. Qualifications are recognized internationally." },
      { title: "Best of Both Worlds Qualification", desc: "Coupled with lower costs and international recognition, New Zealand essentially offers the Best of Both Worlds. Qualifications have a reputation for being both practical and modern." },
      { title: "Migration and Job Search Opportunity", desc: "Students are given a visa to search for a job after completion of their course and have a good opportunity to immigrate. They also get 2-3 years of post-study work visa." },
    ],
  },
  ireland: {
    points: [
      { title: "Internationally Recognized Qualifications", desc: "Universities in Ireland are recognized globally, thereby enhancing career prospects both domestically and internationally. Employers value Ireland's rigorous education system." },
      { title: "Post-Study Work Visa for up to 2 Years", desc: "In Ireland, post-study work visas are available for international students for a duration of up to two years upon completion of their studies." },
      { title: "Work Part-Time, 20 Hours Per Week", desc: "Ireland allows its students to gain work experience by working part time for 20 hours per week, enhancing your resume." },
      { title: "Excellent Wages: €8-9 Per Hour", desc: "Good wages in Ireland attract students by offering opportunities for gaining work experience related to their field of study." },
    ],
  },
  malaysia: {
    points: [
      { title: "Dual Degree", desc: "Universities in Malaysia allow students to study locally while earning two graduation certificates, one from a Malaysian university and another from an affiliated international partner university in the UK, Australia, or Europe." },
      { title: "Affordable Cost of Studying", desc: "International students who choose to study in Malaysia can benefit from its affordable tuition fees as compared to other nations." },
      { title: "Safe and Welcoming Environment", desc: "Malaysia is known for its hospitality and welcoming environment, creating a safe atmosphere for international students." },
      { title: "Top-Notch Education", desc: "Universities in Malaysia offer accredited courses that have global recognition, ensuring high-quality education." },
    ],
  },
  korea: {
    points: [
      { title: "High-Quality Education", desc: "South Korea is home to some of the best universities in Asia, known for their academic rigor and cutting-edge research. Institutions like Seoul National University, KAIST, and Yonsei University are globally recognized." },
      { title: "Technological Innovation", desc: "As one of the most technologically advanced countries, South Korea offers excellent opportunities for students interested in engineering, IT, robotics, and biotechnology." },
      { title: "Affordability", desc: "Compared to other popular study destinations, tuition fees and the cost of living in South Korea are relatively affordable. Many universities offer scholarships." },
      { title: "Post Graduation Opportunities", desc: "South Korea's strong economy and global corporations (Samsung, Hyundai, LG) provide opportunities for students to gain international work experience after graduation." },
    ],
  },
  denmark: {
    points: [
      { title: "World Class Education", desc: "Denmark is home to some of the world's leading universities, known for high academic standards, innovative teaching methods, and strong research focus. Institutions such as the University of Copenhagen, Aarhus University, and DTU offer cutting-edge programs." },
      { title: "English Taught Programs", desc: "Danish higher education institutions offer over 600 English-taught study programmes spanning bachelor's, master's, and professional academy degrees." },
      { title: "Tuition Fees and Scholarships", desc: "Tuition fees start from around 6,000 EUR/year, comparatively affordable than other European countries." },
      { title: "Work Opportunities", desc: "Non-EU/EEA students can work up to 20 hours per week during the academic year and full-time during summer months." },
      { title: "Dependent Allowed", desc: "Dependents can accompany the main applicant if studying in a state-approved higher educational program. Spouse gets a full-time work permit." },
    ],
  },
  finland: {
    points: [
      { title: "High-Quality Education", desc: "Finnish universities feature cutting-edge research facilities, student-centered learning, and globally recognized programs at institutions like the University of Helsinki and Aalto University." },
      { title: "English-Taught Options", desc: "Universities provide hundreds of degree programs taught entirely in English, removing the immediate need to know Finnish to study." },
      { title: "Scholarships Available", desc: "Most universities offer automatic merit-based scholarships covering 50% to 100% of tuition fees. Doctoral programs are completely free regardless of nationality." },
      { title: "Post-Study Work Pathway", desc: "Graduates can apply for a post-graduation residence permit valid for up to two years to look for work or start a business." },
    ],
  },
  sweden: {
    points: [
      { title: "World-Class Education", desc: "Swedish universities and universities of applied sciences focus on innovation, research, and student-centered, equal learning." },
      { title: "English-Taught Programs", desc: "A wide range of Bachelor's, Master's, and Doctoral programs are taught entirely in English." },
      { title: "Affordable Costs & Scholarships", desc: "Many universities offer automatic merit-based scholarships or tuition waivers covering 50% to 100% of costs." },
      { title: "Work Opportunities", desc: "International students can work part-time during their studies to gain practical experience and help support living expenses." },
      { title: "Dependent Allowed", desc: "Dependents can accompany the main applicant if studying in a state-approved higher educational program." },
    ],
  },
  norway: {
    points: [
      { title: "World-Class Education", desc: "Norwegian universities and universities of applied sciences focus on innovation, research, and student-centered, equal learning." },
      { title: "English-Taught Programs", desc: "Most master's and several bachelor's programs are offered entirely in English, making it easier for international students to adapt." },
      { title: "Work Opportunities and Career Growth", desc: "Students can work part-time for up to 20 hours per week. After graduation, international students can apply for a job seeker visa for up to 12 months." },
      { title: "Dependent Allowed", desc: "Dependents can accompany the main applicant in state-approved higher educational programs." },
    ],
  },
  hungary: {
    points: [
      { title: "World-Class Education", desc: "Hungarian universities and universities of applied sciences focus on innovation, research, and student-centered, equal learning." },
      { title: "English-Taught Programs", desc: "Most Bachelor's, Master's, and PhD courses are available entirely in English, meaning you do not need to learn Hungarian to succeed." },
      { title: "Low Tuition and Living Costs", desc: "Standard tuition fees are budget-friendly compared to Western Europe, and monthly living expenses typically range from €400 to €700." },
      { title: "Work While Studying", desc: "International students from non-EU countries can work up to 20 hours per week during the academic semester and full-time during holidays." },
    ],
  },
  netherlands: {
    points: [
      { title: "World-Class Education", desc: "Most of the Dutch universities and universities of applied sciences focus on innovation, research, and student-centered, equal learning." },
      { title: "English-Taught Programs", desc: "Most Bachelor's, Master's, and PhD courses are available entirely in English, with over 2,000 programs fully taught in English." },
      { title: "Work While Studying", desc: "International students from non-EU countries can work up to 20 hours per week during the academic semester and full-time during holidays." },
      { title: "Post-Study Work Opportunities", desc: "Graduates can apply for an Orientation Year (zoekjaar) visa, giving you up to one full year to find a job or start a business." },
      { title: "Less Language Barrier", desc: "About 95% of the Dutch population speaks English, making daily life and studying very easy for international students." },
    ],
  },
  belgium: {
    points: [
      { title: "World-Class Universities", desc: "Institutions like KU Leuven and Ghent University rank high globally and offer robust academic traditions." },
      { title: "English Taught Master's Programs", desc: "English taught master's programs are common, covering business, engineering, science, and arts related subjects." },
      { title: "Affordable Tuition Fees", desc: "You can get a high-quality education in English with tuition fees lower than other traditional destinations." },
      { title: "Post-Study Options", desc: "International graduates can apply for a 12-month search-year visa to find a job or start a business without a separate work permit." },
    ],
  },
};

const applicationChecklists = {
  usa: ["Passport", "Professional CV", "All Academic Transcripts and Certificates", "English Proficiency Certificate", "Job Experience Letter - if applicable", "Statement of Purpose (SOP)", "2/3 Academic/ Professional Recommendation Letter"],
  uk: ["Passport", "Professional CV", "All Academic Transcripts and Certificates", "English Proficiency Certificate", "Job Experience Letter - if applicable", "Statement of Purpose (SOP)", "2/3 Academic/ Professional Recommendation Letter"],
  australia: ["Passport", "Professional CV", "All Academic Transcripts and Certificates", "English Proficiency Certificate", "Job Experience Letter - if applicable", "Statement of Purpose (SOP)", "2/3 Academic/ Professional Recommendation Letter"],
  canada: ["Passport", "Professional CV", "All Academic Transcripts and Certificates", "English Proficiency Certificate", "Job Experience Letter - if applicable", "Statement of Purpose (SOP)", "2/3 Academic/ Professional Recommendation Letter"],
  "new-zealand": ["Passport", "Professional CV", "All Academic Transcripts and Certificates", "English Proficiency Certificate", "Job Experience Letter - if applicable", "Statement of Purpose (SOP)", "2/3 Academic/ Professional Recommendation Letter"],
  ireland: ["Passport", "Professional CV", "All Academic Transcripts and Certificates", "English Proficiency Certificate", "Job Experience Letter - if applicable", "Statement of Purpose (SOP)", "2/3 Academic/ Professional Recommendation Letter"],
  denmark: ["Passport", "Professional CV", "All Academic Transcripts and Certificates", "English Proficiency Certificate", "Job Experience Letter", "Statement of Purpose (SOP)", "2/3 Academic/ Professional Recommendation Letter"],
  finland: ["Passport", "Professional CV", "All Academic Transcripts and Certificates", "English Proficiency Certificate", "Job Experience Letter", "Statement of Purpose (SOP)", "2/3 Academic/ Professional Recommendation Letter"],
  sweden: ["Passport", "Professional CV", "All Academic Transcripts and Certificates", "English Proficiency Certificate", "Job Experience Letter", "Statement of Purpose (SOP)", "2/3 Academic/ Professional Recommendation Letter"],
  norway: ["Passport", "Professional CV", "All Academic Transcripts and Certificates", "English Proficiency Certificate", "Job Experience Letter - if applicable", "Statement of Purpose (SOP)", "2/3 Academic/ Professional Recommendation Letter"],
  hungary: ["Passport", "Professional CV", "All Academic Transcripts and Certificates", "English Proficiency Certificate", "Job Experience Letter - if applicable", "Statement of Purpose (SOP)", "2/3 Academic/ Professional Recommendation Letter"],
  netherlands: ["Passport", "Professional CV", "All Academic Transcripts and Certificates", "English Proficiency Certificate", "Job Experience Letter - if applicable", "Statement of Purpose (SOP)", "2/3 Academic/ Professional Recommendation Letter"],
  belgium: ["Passport", "Professional CV", "All Academic Transcripts and Certificates", "English Proficiency Certificate", "Job Experience Letter - if applicable", "Statement of Purpose (SOP)", "2/3 Academic/ Professional Recommendation Letter"],
};

const CheckSquare = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="3" />
    <path d="M8.5 12.5l2.5 2.5 4.5-5" />
  </svg>
);

export default function CountryDetails() {
  const { slug } = useParams();
  // Live DB (admin panel) data merged over the static fallback — so an image
  // uploaded in the admin panel updates the hero here automatically.
  const [merged, setMerged] = useState(null);

  useEffect(() => {
    let active = true;
    fetchMergedCountries()
      .then((list) => {
        if (!active || !Array.isArray(list)) return;
        const match = list.find((c) => slugOf(c) === slug);
        if (match) setMerged(match);
      })
      .catch(() => {});
    return () => {
      active = false;
    };
  }, [slug]);

  const fallbackCountry = countriesFallback.find(
    (c) => (c.slug ?? c.country?.toLowerCase()) === slug?.toLowerCase(),
  );

  if (!fallbackCountry)
    return (
      <>
        <style>{css}</style>
        <div className="loading-screen">Country not found.</div>
      </>
    );

  // Merged (DB on top) when available, otherwise the static fallback
  const country = merged || fallbackCountry;

  const name = country.name ?? country.country;
  const flag = country.flag_url ?? "";
  const desc = country.description ?? "";
  const imgUrl = country.image_url;
  const fees = country.tuition_fees;
  const langs = country.language_requirements;
  const intakes = country.intakes;
  const salaries = country.post_study_work_salary;
  const courses = country.top_courses ?? country.popular_courses;
  const visaDocs = country.visa_documents;
  const scholarships = country.scholarships ?? [];
  const offerDocs = country.offer_letter_documents;
  const slugLower = slug?.toLowerCase() || "";
  const whyData = whyStudyContent[slugLower];
  const appChecklist = applicationChecklists[slugLower];

  return (
    <>
      <style>{css}</style>
      <div className="cd-root">
        {/* ── HERO — full-bleed photo, left-aligned, cherry CTA ── */}
        <div className="hero">
          {imgUrl ? (
            <img src={imgUrl} alt={name} className="hero-img" />
          ) : (
            <div className="hero-placeholder" />
          )}
          <div className="hero-overlay" />
          <div className="hero-content">
            <span className="hero-badge">
              <span className="hero-flag">{flag}</span>
              <span className="hero-badge-text">Study Destination</span>
            </span>
            <h1 className="hero-title">
              Study in <em>{name}</em>
            </h1>
            {desc && <p className="hero-desc">{desc}</p>}
            <div className="hero-actions">
              <Link to="/freeconsulation" className="gs-btn-cherry">
                Book Free Consultation
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
              <a href="#why-study" className="gs-btn-outline-light">
                Why {name}?
              </a>
            </div>
          </div>
        </div>

        {/* ── WHY STUDY — deep navy band, mint accents ── */}
        {whyData && whyData.points.length > 0 && (
          <div className="band band-deep" id="why-study">
            <div className="band-inner">
              <p className="band-eyebrow">Why Choose Us</p>
              <h2 className="band-title">
                Why choose <span>{name}</span> for your studies?
              </h2>
              <p className="band-sub">
                Everything you need to know about building your future in {name} — guided by our expert counsellors at every step.
              </p>
              <div className="why-grid">
                {whyData.points.map((point, i) => (
                  <div key={i} className="why-item">
                    <span className="why-num">{String(i + 1).padStart(2, "0")}</span>
                    <div>
                      <h3 className="why-title">{point.title}</h3>
                      <p className="why-desc">{point.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── TOP COURSES — light band, flat cobalt chips ── */}
        {courses?.length > 0 && (
          <div className="band band-light">
            <div className="band-inner">
              <p className="band-eyebrow">Study Options</p>
              <h2 className="band-title">
                Popular <span>courses</span> in {name}
              </h2>
              <p className="band-sub">
                Explore the programmes international students choose most — from foundation pathways to doctoral research.
              </p>
              <TopCourses courses={courses} />
            </div>
          </div>
        )}

        {/* ── INTAKE PERIODS — white band, lavender cards ── */}
        {intakes?.length > 0 && (
          <div className="band band-white">
            <div className="band-inner">
              <p className="band-eyebrow">Key Dates</p>
              <h2 className="band-title">
                Upcoming <span>intakes</span>
              </h2>
              <p className="band-sub">
                Plan ahead — application windows close months before classes begin.
              </p>
              <Intakes intakes={intakes} />
            </div>
          </div>
        )}

        {/* ── TUITION FEES — light band, editorial table ── */}
        {fees && (
          <div className="band band-light">
            <div className="band-inner">
              <p className="band-eyebrow">Cost of Study</p>
              <h2 className="band-title">
                Annual <span>tuition fees</span>
              </h2>
              <p className="band-sub">
                Indicative yearly tuition by study level. Our counsellors can help you find scholarships and funding options.
              </p>
              <TuitionFees fees={fees} />
            </div>
          </div>
        )}

        {/* ── LANGUAGE REQUIREMENTS — white band ── */}
        {langs?.length > 0 && (
          <div className="band band-white">
            <div className="band-inner">
              <p className="band-eyebrow">Entry Requirements</p>
              <h2 className="band-title">
                English <span>language requirements</span>
              </h2>
              <p className="band-sub">
                Minimum scores by study level. Not sure you meet them? Ask us about pathway options.
              </p>
              <LanguageRequirements reqs={langs} />
            </div>
          </div>
        )}

        {/* ── APPLICATION CHECKLIST — signature mint band ── */}
        {appChecklist && appChecklist.length > 0 && (
          <div className="band band-mint">
            <div className="band-inner">
              <p className="band-eyebrow">Get Ready</p>
              <h2 className="band-title">
                Application <span style={{ color: "#010A1C" }}>checklist</span>
              </h2>
              <p className="band-sub" style={{ color: "#1b2a24" }}>
                Everything you need to study in {name} — gather these before your counselling session and we'll handle the rest.
              </p>
              <ul className="checklist">
                {appChecklist.map((item, i) => (
                  <li key={i} className="check-item">
                    <CheckSquare />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* ── DOCUMENTS FOR OFFER LETTER — light checklist ── */}
        {offerDocs?.length > 0 && (
          <div className="band band-light">
            <div className="band-inner">
              <p className="band-eyebrow">Step One</p>
              <h2 className="band-title">
                Documents for your <span>offer letter</span>
              </h2>
              <p className="band-sub">Provide these to receive a conditional or unconditional offer from your chosen university.</p>
              <ul className="checklist checklist-on-light">
                {offerDocs.map((item, i) => (
                  <li key={i} className="check-item">
                    <CheckSquare />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* ── DOCUMENTS FOR VISA — white checklist ── */}
        {visaDocs?.length > 0 && (
          <div className="band band-white">
            <div className="band-inner">
              <p className="band-eyebrow">Step Two</p>
              <h2 className="band-title">
                Documents for your <span>visa application</span>
              </h2>
              <p className="band-sub">Our visa specialists prepare and review every document before lodgement.</p>
              <ul className="checklist checklist-on-light">
                {visaDocs.map((item, i) => (
                  <li key={i} className="check-item">
                    <CheckSquare />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* ── POST-STUDY WORK SALARIES — deep navy band ── */}
        {salaries?.length > 0 && (
          <div className="band band-deep">
            <div className="band-inner">
              <p className="band-eyebrow">After Graduation</p>
              <h2 className="band-title">
                Post-study work <span>salaries</span>
              </h2>
              <p className="band-sub">What graduates can expect to earn in {name} by field.</p>
              <Salaries salaries={salaries} />
            </div>
          </div>
        )}

        {/* ── SCHOLARSHIPS — light band, lavender cards ── */}
        {scholarships?.length > 0 && (
          <div className="band band-light">
            <div className="band-inner">
              <p className="band-eyebrow">Funding</p>
              <h2 className="band-title">
                Find <span>scholarships</span> to help fund your studies
              </h2>
              <p className="band-sub">From university merit awards to government grants — we help you apply.</p>
              <ScholarshipTable scholarships={scholarships} />
            </div>
          </div>
        )}

        {/* ── FINAL CTA — navy band, mint accent, cherry button ── */}
        <div className="band band-navy final-cta">
          <div className="band-inner">
            <p className="band-eyebrow">Next Step</p>
            <h2 className="band-title">
              Take the <span>first step</span> towards studying in {name}!
            </h2>
            <p className="band-sub">
              Book a free counselling session — our experts will map out your admission, visa and funding plan for {name}.
            </p>
            <div className="hero-actions">
              <Link to="/freeconsulation" className="gs-btn-cherry">
                Book Free Consultation
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
              <Link to="/allcountries/allcountry" className="gs-btn-outline-light">
                Explore Other Destinations
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
