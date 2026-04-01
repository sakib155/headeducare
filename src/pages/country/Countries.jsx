import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../../lib/supabaseClient";
import { countriesFallback } from "./countriesFallback";

export default function Countries() {
  const [countries, setCountries] = useState(countriesFallback);

  useEffect(() => {
    supabase
      .from("countries")
      .select("*")
      .eq("is_active", true)
      .order("display_order")
      .then(({ data }) => {
        if (data?.length) setCountries(data);
      })
      .catch(() => {});
  }, []);

  return (
    <div>
      {/* HERO */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-blue-50">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-5xl font-black mb-4">Explore Top Countries</h1>
          <p className="text-gray-600">Find your perfect study destination.</p>
        </div>
      </section>

      {/* LIST */}
      <section className="py-20 max-w-6xl mx-auto px-4 space-y-16">
        {countries.map((c, i) => (
          <div key={c.id} className="grid lg:grid-cols-2 gap-10 items-center">
            <img
              src={c.image_url}
              alt={c.name}
              className="w-full h-80 object-cover rounded-xl"
            />

            <div>
              <span className="text-5xl">{c.flag_url}</span>
              <h2 className="text-3xl font-bold mt-2">{c.name}</h2>
              <p className="text-gray-600 mt-4">{c.description}</p>

              <div className="mt-4">
                <strong>Cost:</strong> {c.cost_info}
              </div>
              <div>
                <strong>Visa:</strong> {c.visa_info}
              </div>

              <div className="flex flex-wrap gap-2 mt-4">
                {c.popular_courses?.map((course, idx) => (
                  <span key={idx} className="px-2 py-1 bg-gray-100 rounded">
                    {course}
                  </span>
                ))}
              </div>

              <Link
                to={`/destination/${c.slug}`}
                className="inline-block mt-6 bg-primary text-white px-5 py-2 rounded"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
