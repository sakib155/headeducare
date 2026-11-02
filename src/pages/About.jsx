import { useState, useEffect } from "react";
import { useBackground } from "../lib/BackgroundsContext";

const FALLBACK_TEAM = [
  {
    id: "1",
    name: "Dr. Aminul Haque",
    role: "Founder & CEO",
    photo_url:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300",
    bio: "With over 15 years in international education consulting, Dr. Haque founded Head Edu Care to bridge the gap between aspiring students and world-class institutions.",
  },
  {
    id: "2",
    name: "Tasfia Rahman",
    role: "Head of Counseling",
    photo_url:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300",
    bio: "Certified education counselor with expertise in Australian and Canadian university admissions. Has helped over 3,000 students.",
  },
  {
    id: "3",
    name: "Karim Uddin",
    role: "Migration Specialist",
    photo_url:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300",
    bio: "MARA-registered migration agent specializing in skilled worker visas and permanent residency applications.",
  },
  {
    id: "4",
    name: "Sanjida Akter",
    role: "Visa Processing Lead",
    photo_url:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300",
    bio: "Expert in visa documentation and processing with a 98% success rate across 20+ countries.",
  },
];

const milestones = [
  {
    year: "2013",
    title: "Founded",
    desc: "Head Edu Care was established with a mission to make global education accessible.",
  },
  {
    year: "2015",
    title: "First 500 Students",
    desc: "Crossed the milestone of 500 successful student placements internationally.",
  },
  {
    year: "2018",
    title: "Expanded to 30+ Countries",
    desc: "Partnered with universities across 30 countries spanning 4 continents.",
  },
  {
    year: "2020",
    title: "Digital Transformation",
    desc: "Launched online counseling platform for remote students during the pandemic.",
  },
  {
    year: "2023",
    title: "15,000+ Alumni",
    desc: "Celebrated 15,000 successful student placements with a 98% visa success rate.",
  },
  {
    year: "2025",
    title: "New Horizons",
    desc: "Expanded to 50+ countries with integrated migration and career services.",
  },
];

export default function About() {
  const bgAbout = useBackground("bg_about");
  const [team, setTeam] = useState(FALLBACK_TEAM);

  useEffect(() => {
    // Team members are static. Keep hook for future extensions.
  }, []);

  return (
    <div>
      {/* Hero - overlay band */}
      <section
        className="sol-overlay sol-hero-inner"
        style={{ backgroundImage: `url(${bgAbout})` }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-20 lg:pt-44 lg:pb-24">
          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-5xl font-semibold text-white mb-8 leading-tight">
              About <span className="text-[#7fb2dd]">Head Educare</span>
            </h1>
            <div className="text-base text-white/85 leading-relaxed space-y-5 mt-8">
              <p>
                Head Educare is a premier international education consultancy dedicated to helping students gain admission to the world's leading universities. With more than 10 years of experience, we have assisted thousands of students in finding institutions where they can thrive academically, professionally, and personally.
              </p>
              <p>
                Our experienced counselors specialize in Undergraduate, Postgraduate, MBA, and Doctoral admissions across the United States, United Kingdom, Australia, Canada, New Zealand, Ireland, Europe, Malaysia, and South Korea.
              </p>
              <p>
                Beyond admissions counseling, our consultants serve as mentors who guide students through every stage of the application journey. From selecting universities and developing application strategies to writing compelling Statements of Purpose (SOPs), preparing scholarship applications, and conducting visa interview coaching, we ensure every student presents the strongest possible application.
              </p>
              <p>
                At Head Educare, we believe every student deserves personalized guidance, honest advice, and a clear roadmap toward achieving their international education goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-[#f2f2f2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "visibility",
                title: "Our Vision",
                text: "To be the most trusted global education partner, transforming lives through quality international education and career opportunities.",
              },
              {
                icon: "flag",
                title: "Our Mission",
                text: "To provide comprehensive, transparent, and personalized education consulting services that empower students to make informed decisions about their future.",
              },
              {
                icon: "favorite",
                title: "Our Values",
                text: "Integrity, student-first approach, excellence in service delivery, and continuous innovation in education consulting for every student we serve.",
              },
            ].map((item, i) => (
              <div key={i} className="sol-callout !text-left">
                <div className="w-14 h-14 bg-[#204276] flex items-center justify-center text-white mb-6">
                  <span className="material-symbols-outlined text-3xl">
                    {item.icon}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[#1a1a1a]">
                  {item.title}
                </h3>
                <p className="text-gray-500 leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="sol-eyebrow text-sm mb-3">Our Journey</h2>
            <h3 className="text-3xl sm:text-4xl font-semibold text-[#1a1a1a]">
              Milestones That Define Us
            </h3>
            <hr className="sol-separator" />
          </div>
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#204276]/20 -translate-x-1/2 hidden md:block" />
            <div className="space-y-10">
              {milestones.map((m, i) => (
                <div
                  key={i}
                  className={`flex flex-col md:flex-row items-center gap-6 ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}
                >
                  <div
                    className={`md:w-1/2 ${i % 2 === 0 ? "md:text-right md:pr-10" : "md:text-left md:pl-10"}`}
                  >
                    <span className="sol-stat-number text-3xl">
                      {m.year}
                    </span>
                    <h4 className="text-xl font-semibold text-[#1a1a1a] mt-1">
                      {m.title}
                    </h4>
                    <p className="text-gray-500 mt-2">
                      {m.desc}
                    </p>
                  </div>
                  <div className="w-5 h-5 bg-[#204276] rounded-full border-4 border-white shadow-lg z-10 shrink-0 hidden md:block" />
                  <div className="md:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
