const people = [
  {
    name: "Shuvo M.",
    image: "/assets/people/Shuvo_M.jpg",
    degree1: "LL.M, Newcastle University, UK",
    degree2: "LL.B, University of Hertfordshire, UK",
    role: "Founder & CEO",
  },
  {
    name: "Arafat Y.",
    image: "/assets/people/Arafat_Y.jpg",
    degree1: "BSc (Hon's), Chittagong University, Bangladesh",
    role: "Creative Director",
  },
  {
    name: "Maymuna S.",
    image: "/assets/people/Maymuna_S.jpg",
    degree1: "MBA, University of South Florida, USA",
    degree2: "MBA, Dhaka University, Bangladesh",
    degree3: "BBA, Independent University, Bangladesh",
    role: "Senior Team Lead, Creative",
  },
  {
    name: "Faisal M.",
    image: "/assets/people/Faisal_M.jpg",
    degree1: "MBA, University of Asia Pacific, Bangladesh",
    role: "Senior Team Lead, Creative",
  },
  {
    name: "Patwary A.",
    image: "/assets/people/Patwary_A.jpg",
    degree1: "MSc, Georgia Institute of Technology, USA",
    degree2: "BSc, George Mason University, USA",
    role: "Team Lead, Creative",
  },
  {
    name: "Sarkar R.",
    image: "/assets/people/Sarkar_R.jpeg",
    degree1: "MBA, Washington University St. Louis, USA",
    degree2: "MBA, American International University - Bangladesh",
    role: "Team Lead, Creative",
  },
  {
    name: "Sakib R.",
    image: "/assets/people/Sakib_R.jpg",
    degree1: "BRAC University, Bangladesh",
    role: "Team Lead, Creative",
  },
  {
    name: "Nimnee N.",
    image: "/assets/people/Nimnee_N.jpg",
    degree1: "Ph.D, Texas Tech University, USA",
    degree2: "MSc, Kent State University, USA",
    degree3: "BSc & MSc, MBSTU, Bangladesh",
    role: "Associate, Consulting Team",
  },
  {
    name: "Asaduzzaman",
    image: "/assets/people/Asad_S.jpg",
    degree1: "MSc & Ph.D, University of Memphis, USA",
    degree2: "BSc, BRAC University, Bangladesh",
    role: "Associate, Consulting Team",
  },
  {
    name: "Alfee M.",
    image: "/assets/people/Alfee_M.jpg",
    degree1: "BSc, University of Tasmania, Australia",
    role: "Associate, Consulting Team",
  },
  {
    name: "Zobayer M.",
    image: "/assets/people/Zobayer_M.jpg",
    degree1: "MPH, Queen Mary University of London, UK",
    degree2: "MBBS, Dinajpur Medical College, Bangladesh",
    role: "Associate, Consulting Team",
  },
  {
    name: "Tasin AL",
    image: "/assets/people/Tasin_R.jpg",
    degree1: "MSc, Cranfield University, UK",
    degree2: "BSc, Rajshahi University of Engineering & Technology",
    role: "Associate, Consulting Team",
  },
  {
    name: "Tarikul I.",
    image: "/assets/people/tarikul.jpeg",
    degree1: "MSc, Liverpool University, UK",
    degree2: "BSc, BUTEX, Bangladesh",
    role: "Associate, Consulting Team",
  },
  {
    name: "Nadim M.",
    image: "/assets/people/Nadim_M.jpg",
    degree1: "MSc, York St Johns University, UK",
    degree2: "BSc, Daffodil International University",
    role: "Associate, Consulting Team",
  },
  {
    name: "Joy M.",
    image: "/assets/people/Joy_M.jpg",
    degree1: "MSc, Chester University, UK",
    degree2: "BSc, Daffodil International University",
    role: "Associate, Consulting Team",
  },
];

const roleStyle = {
  "Founder & CEO": "bg-[#005B8F] text-white",
  "Creative Director": "bg-[#0e7490] text-white",
  "Senior Team Lead, Creative": "bg-[#7c3aed] text-white",
  "Team Lead, Creative": "bg-[#0284c7] text-white",
  "Associate, Consulting Team": "bg-[#059669] text-white",
};

const getRoleStyle = (role) =>
  roleStyle[role] || "bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-gray-200";

const degrees = (person) =>
  [person.degree1, person.degree2, person.degree3].filter(Boolean);

const OurPeople = () => {
  return (
    <section className="mx-auto px-4 md:px-8 lg:px-10 xl:px-10 max-w-7xl py-16">
      {/* Section header */}
      <div className="text-center mb-14">
        <span className="inline-block text-primary font-semibold text-xs uppercase tracking-widest mb-3">
          Meet Our Team
        </span>
        <h2 className="text-3xl sm:text-4xl font-black text-[#0d121b] dark:text-white leading-tight">
          Expert Counselors at Your Service
        </h2>
        <p className="mt-4 text-gray-500 dark:text-gray-400 text-sm max-w-xl mx-auto">
          Our diverse team brings decades of combined experience from top universities across four continents.
        </p>
      </div>

      {/* People grid */}
      <div className="grid gap-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {people.map((person, index) => (
          <div
            key={index}
            className="group flex flex-col items-center bg-white dark:bg-[#0d1f3c] rounded-2xl border border-gray-100 dark:border-gray-700/60 overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200"
          >
            {/* Photo area */}
            <div className="w-full aspect-square overflow-hidden bg-gray-50 dark:bg-[#091628]">
              <img
                src={person.image || "/assets/people/placeholder.jpg"}
                alt={person.name}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Info area */}
            <div className="w-full flex flex-col p-4 gap-1.5">
              {/* Role badge */}
              <span
                className={`self-start text-[10px] font-semibold px-2 py-0.5 rounded-full ${getRoleStyle(person.role)}`}
              >
                {person.role}
              </span>

              {/* Name */}
              <p className="text-sm font-bold text-gray-900 dark:text-white leading-tight">
                {person.name}
              </p>

              {/* Divider */}
              <div className="w-8 h-px bg-primary/30 my-0.5" />

              {/* Degrees */}
              <ul className="flex flex-col gap-1">
                {degrees(person).map((deg, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-1 text-[11px] text-gray-500 dark:text-gray-400 leading-snug"
                  >
                    <span className="mt-[3px] shrink-0 w-1 h-1 rounded-full bg-primary/40" />
                    {deg}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurPeople;
