import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabaseClient";
import { countriesFallback } from "./countriesFallback";

export default function CountryDetails() {
  const { slug } = useParams();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    // fallback first
    const local = countriesFallback.find((c) => c.slug === slug);
    if (local) setCountry(local);

    // fetch from DB
    supabase
      .from("countries")
      .select("*")
      .eq("slug", slug)
      .single()
      .then(({ data }) => {
        if (data) setCountry(data);
      });
  }, [slug]);

  if (!country) return <div className="p-10">Loading...</div>;

  return (
    <div className="py-20 max-w-5xl mx-auto px-4">
      <img
        src={country.image_url}
        alt={country.name}
        className="w-full h-96 object-cover rounded-xl mb-8"
      />

      <h1 className="text-4xl font-black mb-4">
        {country.flag_url} {country.name}
      </h1>

      <p className="text-gray-600 mb-6">{country.description}</p>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <strong>Tuition:</strong> {country.cost_info}
        </div>
        <div>
          <strong>Visa:</strong> {country.visa_info}
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {country.popular_courses?.map((course, i) => (
          <span key={i} className="px-3 py-1 bg-primary/10 rounded-full">
            {course}
          </span>
        ))}
      </div>
    </div>
  );
}
