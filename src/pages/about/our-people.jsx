const people = [
  {
    name: "Shuvo M.",
    image: "/assets/people/Shuvo_M.jpg",
    degree1: "LL.B, University of Hertfordshire, UK",
    degree2: "LL.M, Newcastle University, UK",
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
    degree1: "BBA, Independent University, Bangladesh",
    degree2: "MBA, Dhaka University, Bangladesh",
    degree3: "MBA, University of South Florida, USA",
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
    degree1: "BSc, George Mason University, USA",
    degree2: "MSc, Georgia Institute of Technology, USA",
    role: "Team Lead, Creative",
  },
  {
    name: "Sarkar R.",
    image: "/assets/people/Sarkar_R.jpeg",
    degree1: "MBA, American International University - Bangladesh",
    degree2: "MBA, Washington University St. Louis, USA",
    role: "Team Lead, Creative",
  },
    {
    name: "Rajib S.",
    image: "/assets/people/Rajib_S.jpg",
    bsc: "BSc, Metropolitan University",
    msc: "MSc, Heriot-Watt University, UK",
    role: "Senior Associate, Operations",
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
    degree1: "BSc & MSc, MBSTU, Bangladesh",
    degree2: "MSc, Kent State University, USA",
    degree3: "Ph.D, Texas Tech University, USA",
    role: "Associate, Consulting Team",
  },
  {
    name: "Asaduzzaman",
    image: "/assets/people/Asad_S.jpg",
    degree1: "BSc, BRAC University, Bangladesh",
    degree2: "MSc & Ph.D, University of Memphis, USA",
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
    degree1: "MBBS, Dinajpur Medical College, Bangladesh",
    degree2: "MPH, Queen Mary University of London, UK",
    role: "Associate, Consulting Team",
  },
  {
    name: "Tasin AL",
    image: "/assets/people/Tasin_R.jpg",
    degree1: "BSc, Rajshahi University of Engineering & Technology",
    degree2: "MSc, Cranfield University, UK",
    role: "Associate, Consulting Team",
  },
  {
    name: "Tarikul I.",
    image: "",
    degree1: "BSc, BUTEX, Bangladesh",
    degree2: "MSc, Liverpool University, UK",
    role: "Associate, Consulting Team",
  },
  // {
  //   name: "Prantic H.",
  //   image: "",
  //   role: "Team Lead, Design",
  // },
  {
    name: "Nadim M.",
    image: "/assets/people/Nadim_M.jpg",
    degree1: "BSc, Daffodil International University",
    degree2: "MSc, York St Johns University, UK",
    role: "Associate, Consulting Team",
  },
  {
    name: "Joy M.",
    image: "/assets/people/Joy_M.jpg",
    degree1: "BSc, Daffodil International University",
    degree2: "MSc, York St Johns University, UK",
    role: "Associate, Consulting Team",
  },
];

const OurPeople = () => {
  return (
    <div className="mx-auto m-4 px-4 md:px-8 lg:px-10 xl:px-10 max-w-7xl">
      <div className="text-center mb-16">
        <h2 className="text-primary font-bold text-sm uppercase tracking-widest mb-3">
          Meet Our Team
        </h2>
        <h3 className="text-3xl sm:text-4xl font-black text-[#0d121b] dark:text-white">
          Expert Counselors at Your Service
        </h3>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {people.map((person, index) => (
          <div
            key={index}
            className="bg-white dark:bg-[#0d1f3c] rounded-2xl border border-gray-100 dark:border-gray-700 p-5 text-center hover:border-gray-200 dark:hover:border-gray-500 transition"
          >
            <img
              src={person.image || "/assets/people/placeholder.jpg"}
              alt={person.name}
              className="w-16 h-16 mx-auto rounded-full object-cover mb-3"
            />
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
              {person.name}
            </h3>
            {person.degree1 && (
              <p className="text-xs text-gray-500 dark:text-gray-400 leading-snug">{person.degree1}</p>
            )}
            {person.degree2 && (
              <p className="text-xs text-gray-500 dark:text-gray-400 leading-snug">{person.degree2}</p>
            )}
            {person.degree3 && (
              <p className="text-xs text-gray-500 dark:text-gray-400 leading-snug">{person.degree3}</p>
            )}
            {person.role && (
              <span className="inline-block mt-2 text-xs font-medium px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 border border-blue-100 dark:border-blue-700">
                {person.role}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurPeople;
