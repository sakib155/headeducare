import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../lib/supabaseClient";

const FALLBACK = [
  {
    id: "1",
    name: "Australia",
    flag_url: "🇦🇺",
    image_url:
      "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=800",
    description:
      "World-class education with excellent post-study work opportunities.",
    popular_courses: ["Engineering", "Business", "IT", "Healthcare"],
    cost_info: "$20,000 - $45,000/year",
    visa_info: "Student Visa (Subclass 500)",
  },
  {
    id: "2",
    name: "United Kingdom",
    flag_url: "🇬🇧",
    image_url:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800",
    description: "Home to the most prestigious universities in the world.",
    popular_courses: ["Law", "Finance", "Medicine", "Arts"],
    cost_info: "£12,000 - £35,000/year",
    visa_info: "Student Route Visa",
  },
  {
    id: "3",
    name: "Canada",
    flag_url: "🇨🇦",
    image_url:
      "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=800",
    description: "Affordable education with excellent immigration pathways.",
    popular_courses: ["IT", "Business", "Engineering", "Hospitality"],
    cost_info: "CAD 15,000 - 35,000/year",
    visa_info: "Study Permit",
  },
  {
    id: "4",
    name: "United States",
    flag_url: "🇺🇸",
    image_url:
      "https://images.unsplash.com/photo-1485738422979-f5c462d49f04?w=800",
    description: "World leader in higher education and research.",
    popular_courses: ["STEM", "MBA", "Medicine", "Liberal Arts"],
    cost_info: "$25,000 - $55,000/year",
    visa_info: "F-1 Student Visa",
  },
  {
    id: "5",
    name: "Germany",
    flag_url: "🇩🇪",
    image_url:
      "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800",
    description: "Tuition-free public universities with strong programs.",
    popular_courses: ["Engineering", "Automotive", "IT", "Research"],
    cost_info: "€0 - €20,000/year",
    visa_info: "Student Visa",
  },
  {
    id: "6",
    name: "Japan",
    flag_url: "🇯🇵",
    image_url:
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800",
    description: "Cutting-edge technology education with scholarships.",
    popular_courses: ["Technology", "Robotics", "Business", "Arts"],
    cost_info: "¥500K - ¥2M/year",
    visa_info: "Student Visa (College)",
  },
];

export default function Countries() {
  const [countries, setCountries] = useState(FALLBACK);

  useEffect(() => {
    supabase
      .from("countries")
      .select("*")
      .eq("is_active", true)
      .order("display_order")
      .then(({ data }) => {
        if (data?.length) setCountries(data);
      })
      .catch(() => {
        /* fallback will be used */
      });
  }, []);

  return (
    <div>
      {/* Hero */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-primary/5 to-blue-50 dark:from-background-dark dark:to-surface-dark overflow-hidden">
        <div className="absolute top-0 left-1/2 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h2 className="text-primary font-bold text-sm uppercase tracking-widest mb-3">
              Study Destinations
            </h2>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0d121b] dark:text-white mb-6 leading-tight">
              Explore <span className="text-primary">Top Countries</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              Discover the best study destinations and find the perfect fit for
              your academic journey.
            </p>
          </div>
        </div>
      </section>

      {/* Countries List */}
      <section className="py-24 bg-white dark:bg-background-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {countries.map((c, i) => (
            <div key={c.id} className="grid lg:grid-cols-2 gap-10 items-center">
              <div
                className={`rounded-2xl overflow-hidden shadow-xl ${i % 2 === 1 ? "lg:order-2" : ""}`}
              >
                <img
                  src={c.image_url}
                  alt={c.name}
                  className="w-full h-80 lg:h-96 object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <span className="text-5xl mb-4 block">{c.flag_url}</span>
                <h3 className="text-3xl font-black text-[#0d121b] dark:text-white mb-4">
                  {c.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                  {c.description}
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-background-light dark:bg-gray-800 p-4 rounded-xl">
                    <span className="material-symbols-outlined text-primary text-xl mb-1 block">
                      payments
                    </span>
                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                      Tuition Cost
                    </p>
                    <p className="font-bold text-sm text-[#0d121b] dark:text-white">
                      {c.cost_info}
                    </p>
                  </div>
                  <div className="bg-background-light dark:bg-gray-800 p-4 rounded-xl">
                    <span className="material-symbols-outlined text-primary text-xl mb-1 block">
                      badge
                    </span>
                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                      Visa Type
                    </p>
                    <p className="font-bold text-sm text-[#0d121b] dark:text-white">
                      {c.visa_info}
                    </p>
                  </div>
                </div>
                {c.popular_courses?.length > 0 && (
                  <div className="mb-6">
                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">
                      Popular Courses
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {c.popular_courses.map((course, j) => (
                        <span
                          key={j}
                          className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                <Link
                  to="/contact"
                  className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
                >
                  <span className="material-symbols-outlined mr-2 text-lg">
                    event_available
                  </span>
                  Get Consultation
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
