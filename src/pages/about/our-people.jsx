const people = [
  {
    name: "Shuvo M.",
    image: "/assets/people/Shuvo_M.jpg",
    bsc: "BSc, BRAC University",
    msc: "MSc, University of Leeds, UK",
    role: "Senior Associate, Research",
  },
  {
    name: "Patwary A.",
    image: "/assets/people/Patwary_A.jpg",
    bsc: "BSc, University of Dhaka",
    msc: "MSc, University of Manchester, UK",
    role: "Associate, Strategy Team",
  },
  {
    name: "Maymuna S.",
    image: "/assets/people/Maymuna_S.jpg",
    bsc: "BSc, North South University",
    msc: "MSc, Coventry University, UK",
    role: "Associate, Consulting Team",
  },
  {
    name: "Tasin R.",
    image: "/assets/people/Tasin_R.jpg",
    bsc: "BSc, RUET",
    msc: "MSc, Cranfield University,UK ",
    role: "Associate, Consulting Team",
  },
  {
    name: "Nimnee N.",
    image: "/assets/people/Nimnee_N.jpg",
    bsc: "BSc, East West University",
    msc: "MSc, University of Glasgow, UK",
    role: "Associate, Operations",
  },
  {
    name: "Faisal M.",
    image: "/assets/people/Faisal_M.jpg",
    bsc: "BSc, Ahsanullah University of Science & Technology",
    msc: "MSc, University of Sheffield, UK",
    role: "Senior Analyst, Finance",
  },
  {
    name: "Arafat Y.",
    image: "/assets/people/Arafat_Y.jpg",
    bsc: "BSc, BUET",
    msc: "MSc, University of Nottingham, UK",
    role: "Associate, Engineering",
  },
  {
    name: "Asad S.",
    image: "/assets/people/Asad_S.jpg",
    bsc: "BSc, American International University",
    msc: "MSc, Brunel University London, UK",
    role: "Analyst, Consulting Team",
  },
  {
    name: "Riyad T.",
    image: "/assets/people/Riyad_T.jpg",
    bsc: "BSc, BUTEX",
    msc: "MSc, Liverpool University, UK",
    role: "Associate, Consulting Team",
  },
  {
    name: "Alfee M.",
    image: "/assets/people/Alfee_M.jpg",
    bsc: "BSc, Daffodil International University",
    msc: "MSc, Cardiff University, UK",
    role: "Junior Associate, Strategy",
  },
  {
    name: "Zobayer M.",
    image: "/assets/people/Zobayer_M.jpg",
    bsc: "BSc, Stamford University Bangladesh",
    msc: "MSc, University of Aberdeen, UK",
    role: "Associate, Consulting Team",
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
    bsc: "BSc, Green University of Bangladesh",
    msc: "MSc, University of Portsmouth, UK",
    role: "Analyst, Market Research",
  },
  {
    name: "Nadim M.",
    image: "/assets/people/Nadim_M.jpg",
    bsc: "BSc, Daffodil International University",
    msc: "MSc, York St Johns University, UK",
    role: "Associate, Consulting Team",
  },
  {
    name: "Joy M.",
    image: "/assets/people/Joy_M.jpg",
    bsc: "BSc, Daffodil International University",
    msc: "MSc, York St Johns University, UK",
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
              src={person.image}
              alt={person.name}
              className="w-16 h-16 mx-auto rounded-full object-cover mb-3"
            />
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
              {person.name}
            </h3>
            {person.bsc && (
              <p className="text-xs text-gray-500 dark:text-gray-400 leading-snug">{person.bsc}</p>
            )}
            {person.msc && (
              <p className="text-xs text-gray-500 dark:text-gray-400 leading-snug">{person.msc}</p>
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
