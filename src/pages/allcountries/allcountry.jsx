import { countriesFallback } from "../country/countriesFallback";

export default function DestinationPage() {
  return (
    <div className="max-w-7xl mx-auto p-6 ">
      {/* Page Header */}
      <h1 className="text-4xl font-extrabold mb-10 text-gray-900 greyhome">
        Explore Study Destinations
      </h1>

      {/* Destinations Grid */}
      <div className="grid  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 ">
        {countriesFallback.map((country) => (
          <a
            key={country.id}
            href={`/destination/${country.slug}`}
            className="group  relative block rounded-2xl overflow-hidden  shadow-md hover:shadow-xl transition-shadow duration-300 greyhomelightbg grayhome "
          >
            {/* Image */}
            <div className="overflow-hidden rounded-t-2xl">
              <img
                src={country.image_url}
                alt={country.name}
                className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Content */}
            <div className="p-4 ">
              <h2 className="text-lg  font-semibold mb-2 flex items-center gap-2 title_header">
                <span className="text-2xl">{country.flag_url}</span>
                {country.name}
              </h2>
              <p className="text-gray-600 text-sm line-clamp-3">
                {country.description}
              </p>
            </div>

            {/* Hover Overlay */}
            <div className="absolute  inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
          </a>
        ))}
      </div>
    </div>
  );
}
