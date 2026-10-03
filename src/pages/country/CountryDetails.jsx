import { useParams } from "react-router-dom";
import { countriesFallback } from "./countriesFallback";
import { countryDetailStyles as css } from "./Countrydetailstyles";
import {
  SectionCard,
  TuitionFees,
  LanguageRequirements,
  Intakes,
  Salaries,
  TopCourses,
  DocumentsTable,
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
    color: "#005B8F",
  },
  uk: {
    points: [
      { title: "Prestigious Universities", desc: "The top universities in the UK are some of the world's oldest and most prestigious universities, attracting international students for centuries." },
      { title: "Sandwich Programs", desc: "Sandwich programs offer a unique opportunity for students to learn in college and attain practical experience through college-based placement." },
      { title: "Fifteen of the World's Top 100 Universities", desc: "The UK is home to fifteen universities that rank amongst the top 100 universities in the world according to the QS World Ranking. The prestigious universities in the UK provide students with a rich academic tradition and access to innovative research across various disciplines." },
      { title: "Career Opportunities", desc: "Take advantage of a wide range of career opportunities as a graduate from a highly sought after course in the UK." },
    ],
    color: "#1d4ed8",
  },
  australia: {
    points: [
      { title: "Globally Recognized Degrees", desc: "Australian degrees are recognized and valued across the globe. This means that if you study in Australia and complete a program, the degree will prove to be of great value for finding employment or pursuing further education anywhere in the world." },
      { title: "Seven of the Best Student Cities", desc: "According to the QS Best Student Cities Rankings for 2024, seven cities in Australia have secured positions within the top 100 best student cities worldwide." },
      { title: "Post-Study Work up to 6 Years", desc: "Students who have completed their degree in Australia are eligible for post-study work visa ranging from 2 to 4 years. Those studying in regional areas can obtain a visa for up to 6 years." },
      { title: "Nine of the World's Top 100 Universities", desc: "Australia is home to nine universities that rank amongst the top 100 universities in the world, offering world-class education and research opportunities." },
    ],
    color: "#e11d48",
  },
  canada: {
    points: [
      { title: "Four of the World's Top 100 Universities", desc: "Canada is home to four universities that rank amongst the top 100 universities in the world. Canadian universities are known for their high-quality education and inclusive environments." },
      { title: "Globally Recognized Degrees", desc: "Canadian universities offer world-class education, providing exceptional academic programs and research opportunities that open doors to international career opportunities." },
      { title: "Post-Study Work Up to 3 Years", desc: "Canada offers post-study work permits of up to three years, allowing international students to gain valuable work experience after completing their studies." },
      { title: "Working Hours", desc: "When you study in Canada, you get the opportunity to work for 24 hours per week during your ongoing course, and 40 hours per week during vacations." },
      { title: "Safe Place to Study", desc: "Being a land of immigrants, Canada is known for being a safe and inclusive country, making it an ideal place for international students to study and live." },
    ],
    color: "#dc2626",
  },
  "new-zealand": {
    points: [
      { title: "Global Recognition", desc: "Students who have studied at the universities in New Zealand are earning a reputation as innovative thinkers and are being addressed as 'The New World Class'. Qualifications are recognized internationally." },
      { title: "Best of Both Worlds Qualification", desc: "Coupled with lower costs and international recognition, New Zealand essentially offers the Best of Both Worlds. Qualifications have a reputation for being both practical and modern." },
      { title: "Migration and Job Search Opportunity", desc: "Students are given a visa to search for a job after completion of their course and have a good opportunity to immigrate. They also get 2-3 years of post-study work visa." },
    ],
    color: "#16a34a",
  },
  ireland: {
    points: [
      { title: "Internationally Recognized Qualifications", desc: "Universities in Ireland are recognized globally, thereby enhancing career prospects both domestically and internationally. Employers value Ireland's rigorous education system." },
      { title: "Post-Study Work Visa for up to 2 Years", desc: "In Ireland, post-study work visas are available for international students for a duration of up to two years upon completion of their studies." },
      { title: "Work Part-Time — 20 Hours Per Week", desc: "Ireland allows its students to gain work experience by working part time for 20 hours per week, enhancing your resume." },
      { title: "Excellent Wages: €8-9 Per Hour", desc: "Good wages in Ireland attract students by offering opportunities for gaining work experience related to their field of study." },
    ],
    color: "#d97706",
  },
  malaysia: {
    points: [
      { title: "Dual Degree", desc: "Universities in Malaysia allow students to study locally while earning two graduation certificates — one from a Malaysian university and another from an affiliated international partner university in the UK, Australia, or Europe." },
      { title: "Affordable Cost of Studying", desc: "International students who choose to study in Malaysia can benefit from its affordable tuition fees as compared to other nations." },
      { title: "Safe and Welcoming Environment", desc: "Malaysia is known for its hospitality and welcoming environment, creating a safe atmosphere for international students." },
      { title: "Top-Notch Education", desc: "Universities in Malaysia offer accredited courses that have global recognition, ensuring high-quality education." },
    ],
    color: "#7c3aed",
  },
  korea: {
    points: [
      { title: "High-Quality Education", desc: "South Korea is home to some of the best universities in Asia, known for their academic rigor and cutting-edge research. Institutions like Seoul National University, KAIST, and Yonsei University are globally recognized." },
      { title: "Technological Innovation", desc: "As one of the most technologically advanced countries, South Korea offers excellent opportunities for students interested in engineering, IT, robotics, and biotechnology." },
      { title: "Affordability", desc: "Compared to other popular study destinations, tuition fees and the cost of living in South Korea are relatively affordable. Many universities offer scholarships." },
      { title: "Post Graduation Opportunities", desc: "South Korea's strong economy and global corporations (Samsung, Hyundai, LG) provide opportunities for students to gain international work experience after graduation." },
    ],
    color: "#0891b2",
  },
  denmark: {
    points: [
      { title: "World Class Education", desc: "Denmark is home to some of the world's leading universities, known for high academic standards, innovative teaching methods, and strong research focus. Institutions such as the University of Copenhagen, Aarhus University, and DTU offer cutting-edge programs." },
      { title: "English Taught Programs", desc: "Danish higher education institutions offer over 600 English-taught study programmes spanning bachelor's, master's, and professional academy degrees." },
      { title: "Tuition Fees and Scholarships", desc: "Tuition fees start from around 6,000 EUR/year, comparatively affordable than other European countries." },
      { title: "Work Opportunities", desc: "Non-EU/EEA students can work up to 20 hours per week during the academic year and full-time during summer months." },
      { title: "Dependent Allowed", desc: "Dependents can accompany the main applicant if studying in a state-approved higher educational program. Spouse gets a full-time work permit." },
    ],
    color: "#0d9488",
  },
  finland: {
    points: [
      { title: "High-Quality Education", desc: "Finnish universities feature cutting-edge research facilities, student-centered learning, and globally recognized programs at institutions like the University of Helsinki and Aalto University." },
      { title: "English-Taught Options", desc: "Universities provide hundreds of degree programs taught entirely in English, removing the immediate need to know Finnish to study." },
      { title: "Scholarships Available", desc: "Most universities offer automatic merit-based scholarships covering 50% to 100% of tuition fees. Doctoral programs are completely free regardless of nationality." },
      { title: "Post-Study Work Pathway", desc: "Graduates can apply for a post-graduation residence permit valid for up to two years to look for work or start a business." },
    ],
    color: "#2563eb",
  },
  sweden: {
    points: [
      { title: "World-Class Education", desc: "Swedish universities and universities of applied sciences focus on innovation, research, and student-centered, equal learning." },
      { title: "English-Taught Programs", desc: "A wide range of Bachelor's, Master's, and Doctoral programs are taught entirely in English." },
      { title: "Affordable Costs & Scholarships", desc: "Many universities offer automatic merit-based scholarships or tuition waivers covering 50% to 100% of costs." },
      { title: "Work Opportunities", desc: "International students can work part-time during their studies to gain practical experience and help support living expenses." },
      { title: "Dependent Allowed", desc: "Dependents can accompany the main applicant if studying in a state-approved higher educational program." },
    ],
    color: "#1d4ed8",
  },
  norway: {
    points: [
      { title: "World-Class Education", desc: "Norwegian universities and universities of applied sciences focus on innovation, research, and student-centered, equal learning." },
      { title: "English-Taught Programs", desc: "Most master's and several bachelor's programs are offered entirely in English, making it easier for international students to adapt." },
      { title: "Work Opportunities and Career Growth", desc: "Students can work part-time for up to 20 hours per week. After graduation, international students can apply for a job seeker visa for up to 12 months." },
      { title: "Dependent Allowed", desc: "Dependents can accompany the main applicant in state-approved higher educational programs." },
    ],
    color: "#dc2626",
  },
  hungary: {
    points: [
      { title: "World-Class Education", desc: "Hungarian universities and universities of applied sciences focus on innovation, research, and student-centered, equal learning." },
      { title: "English-Taught Programs", desc: "Most Bachelor's, Master's, and PhD courses are available entirely in English, meaning you do not need to learn Hungarian to succeed." },
      { title: "Low Tuition and Living Costs", desc: "Standard tuition fees are budget-friendly compared to Western Europe, and monthly living expenses typically range from €400 to €700." },
      { title: "Work While Studying", desc: "International students from non-EU countries can work up to 20 hours per week during the academic semester and full-time during holidays." },
    ],
    color: "#16a34a",
  },
  netherlands: {
    points: [
      { title: "World-Class Education", desc: "Most of the Dutch universities and universities of applied sciences focus on innovation, research, and student-centered, equal learning." },
      { title: "English-Taught Programs", desc: "Most Bachelor's, Master's, and PhD courses are available entirely in English, with over 2,000 programs fully taught in English." },
      { title: "Work While Studying", desc: "International students from non-EU countries can work up to 20 hours per week during the academic semester and full-time during holidays." },
      { title: "Post-Study Work Opportunities", desc: "Graduates can apply for an Orientation Year (zoekjaar) visa, giving you up to one full year to find a job or start a business." },
      { title: "Less Language Barrier", desc: "About 95% of the Dutch population speaks English, making daily life and studying very easy for international students." },
    ],
    color: "#d97706",
  },
  belgium: {
    points: [
      { title: "World-Class Universities", desc: "Institutions like KU Leuven and Ghent University rank high globally and offer robust academic traditions." },
      { title: "English Taught Master's Programs", desc: "English taught master's programs are common, covering business, engineering, science, and arts related subjects." },
      { title: "Affordable Tuition Fees", desc: "You can get a high-quality education in English with tuition fees lower than other traditional destinations." },
      { title: "Post-Study Options", desc: "International graduates can apply for a 12-month search-year visa to find a job or start a business without a separate work permit." },
    ],
    color: "#7c3aed",
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

const whyStudyStyles = `
  .ws-section { padding: 48px 0 32px; }
  .ws-header-row { display: flex; align-items: center; gap: 14px; margin-bottom: 36px; }
  .ws-header-line { flex: 1; height: 2px; background: linear-gradient(90deg, var(--border), transparent); }
  .ws-badge { display: inline-flex; align-items: center; gap: 8px; padding: 6px 16px; border-radius: 40px; background: var(--accent-bg); color: var(--accent); font-size: 11px; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; }
  .ws-title { font-family: 'Fraunces', serif; font-size: clamp(1.5rem, 2.5vw, 2rem); font-weight: 900; color: var(--ink); line-height: 1.15; margin-bottom: 40px; letter-spacing: -.02em; }

  .ws-point { display: flex; gap: 20px; padding: 28px 0; border-bottom: 1px solid var(--border-soft); animation: fadeUp .5s cubic-bezier(.22,1,.36,1) both; }
  .ws-point:last-child { border-bottom: none; }

  .ws-num { flex-shrink: 0; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-family: 'Fraunces', serif; font-weight: 900; font-size: 1rem; color: #fff; margin-top: 2px; }

  .ws-point-content { flex: 1; min-width: 0; }
  .ws-point-title { font-family: 'Fraunces', serif; font-size: 1.15rem; font-weight: 700; color: var(--ink); margin-bottom: 8px; letter-spacing: -.01em; line-height: 1.3; }
  .ws-point-desc { font-size: .92rem; color: var(--ink-soft); line-height: 1.8; font-weight: 400; max-width: 720px; }

  .dark .ws-point-title { color: #e2e8f0; }
  .dark .ws-badge { background: rgba(96,165,250,0.15); color: #60a5fa; }

  @media(max-width:640px) {
    .ws-point { flex-direction: column; gap: 12px; }
    .ws-num { width: 32px; height: 32px; font-size: .85rem; }
  }
`;

export default function CountryDetails() {
  const { slug } = useParams();

  const country = countriesFallback.find(
    (c) => (c.slug ?? c.country?.toLowerCase()) === slug?.toLowerCase(),
  );

  if (!country)
    return (
      <>
        <style>{css}</style>
        <div className="loading-screen">Country not found.</div>
      </>
    );

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
      <style>{css + whyStudyStyles}</style>
      <div className="cd-root">
        {/* ── hero ── */}
        <div className="hero">
          {imgUrl ? (
            <img src={imgUrl} alt={name} className="hero-img" />
          ) : (
            <div className="hero-placeholder" />
          )}
          <div className="hero-overlay" />
          <div className="hero-content">
            <h1 className="hero-title">Study in {name}</h1>
            {desc && <p className="hero-desc">{desc}</p>}
          </div>
        </div>

        {/* ── WHY STUDY SECTION ── */}
        {whyData && (
          <div className="ws-section sections">
            <div style={{ maxWidth: 800, margin: "0 auto" }}>
              <h2 className="ws-title">Why Study in {name}?</h2>
              {whyData.points.map((point, i) => (
                <div key={i} className="ws-point" style={{ animationDelay: `${i * 0.1}s` }}>
                  <div className="ws-num" style={{ background: "#005B8F" }}>{i + 1}</div>
                  <div className="ws-point-content">
                    <h3 className="ws-point-title" style={{ color: "#005B8F" }}>{point.title}</h3>
                    <p className="ws-point-desc">{point.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── CONTENT SECTIONS ── */}
        <div className="sections">
          <SectionCard title="Top Courses">
            <TopCourses courses={courses} />
          </SectionCard>

          <SectionCard title="Intake Periods">
            <Intakes intakes={intakes} />
          </SectionCard>

          <SectionCard title="Tuition Fees">
            <TuitionFees fees={fees} />
          </SectionCard>

          <SectionCard title="Language Requirements">
            <LanguageRequirements reqs={langs} />
          </SectionCard>

          {appChecklist && appChecklist.length > 0 && (
            <SectionCard title="Application Checklist">
              <DocumentsTable items={appChecklist} />
            </SectionCard>
          )}

          {offerDocs?.length > 0 && (
            <SectionCard title="Documents for Offer Letter">
              <DocumentsTable items={offerDocs} />
            </SectionCard>
          )}

          {visaDocs?.length > 0 && (
            <SectionCard title="Documents for Visa Application">
              <DocumentsTable items={visaDocs} />
            </SectionCard>
          )}

          <SectionCard title="Post-Study Work Salaries">
            <Salaries salaries={salaries} />
          </SectionCard>

          {scholarships?.length > 0 && (
            <SectionCard title="Scholarships & Funding">
              <ScholarshipTable scholarships={scholarships} />
            </SectionCard>
          )}
        </div>
      </div>
    </>
  );
}