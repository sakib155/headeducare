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
  VisaDocs,
} from "./countryDetailHelpers";

export default function CountryDetails() {
  const { slug } = useParams();

  const country = countriesFallback.find(
    (c) => (c.slug ?? c.country?.toLowerCase()) === slug?.toLowerCase(),
  );
  if (!country)
    return (
      <>
        <style>{css}</style>
        <div className="loading-screen">
          <span>Country not found.</span>
        </div>
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

  return (
    <>
      <style>{css}</style>
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
            {flag && <div className="hero-flag">{flag}</div>}
            <h1 className="hero-title">Study in {name}</h1>
            {desc && <p className="hero-desc">{desc}</p>}
          </div>
        </div>

        {/* ── sections ── */}
        <div className="sections">
          <SectionCard icon="money" title="Tuition Fees">
            <TuitionFees fees={fees} />
          </SectionCard>

          <SectionCard icon="language" title="Language Requirements">
            <LanguageRequirements reqs={langs} />
          </SectionCard>

          <SectionCard icon="calendar" title="Intake Periods">
            <Intakes intakes={intakes} />
          </SectionCard>

          <SectionCard icon="briefcase" title="Post-Study Work Salaries">
            <Salaries salaries={salaries} />
          </SectionCard>

          <SectionCard icon="book" title="Top Courses">
            <TopCourses courses={courses} />
          </SectionCard>

          <SectionCard icon="document" title="Visa Documents Required">
            <VisaDocs docs={visaDocs} />
          </SectionCard>
        </div>
      </div>
    </>
  );
}
