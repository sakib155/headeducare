const people = [
  {
    name: "Shuvo M.",
    image: "https://i.pravatar.cc/150?img=2",
    bsc: "BSc, BRAC University",
    msc: "MSc, University of Leeds, UK",
    role: "Senior Associate, Research",
  },
  {
    name: "Patwary A.",
    image: "https://i.pravatar.cc/150?img=3",
    bsc: "BSc, University of Dhaka",
    msc: "MSc, University of Manchester, UK",
    role: "Associate, Strategy Team",
  },
  {
    name: "Maymuna S.",
    image: "https://i.pravatar.cc/150?img=9",
    bsc: "BSc, North South University",
    msc: "MSc, Coventry University, UK",
    role: "Associate, Consulting Team",
  },
  {
    name: "Tasin R.",
    image: "https://i.pravatar.cc/150?img=12",
    bsc: "BSc, Independent University Bangladesh",
    msc: "MSc, University of Birmingham, UK",
    role: "Analyst, Data & Insights",
  },
  {
    name: "Nimnee N.",
    image: "https://i.pravatar.cc/150?img=16",
    bsc: "BSc, East West University",
    msc: "MSc, University of Glasgow, UK",
    role: "Associate, Operations",
  },
  {
    name: "Faisal M.",
    image: "https://i.pravatar.cc/150?img=11",
    bsc: "BSc, Ahsanullah University of Science & Technology",
    msc: "MSc, University of Sheffield, UK",
    role: "Senior Analyst, Finance",
  },
  {
    name: "Arafat Y.",
    image: "https://i.pravatar.cc/150?img=15",
    bsc: "BSc, BUET",
    msc: "MSc, University of Nottingham, UK",
    role: "Associate, Engineering",
  },
  {
    name: "Asad S.",
    image: "https://i.pravatar.cc/150?img=17",
    bsc: "BSc, American International University",
    msc: "MSc, Brunel University London, UK",
    role: "Analyst, Consulting Team",
  },
  {
    name: "Riyad T.",
    image: "https://i.pravatar.cc/150?img=20",
    bsc: "BSc, Southeast University",
    msc: "MSc, University of Exeter, UK",
    role: "Associate, Policy & Research",
  },
  {
    name: "Alfee M.",
    image: "https://i.pravatar.cc/150?img=22",
    bsc: "BSc, Daffodil International University",
    msc: "MSc, Cardiff University, UK",
    role: "Junior Associate, Strategy",
  },
  {
    name: "Zobayer M.",
    image: "https://i.pravatar.cc/150?img=25",
    bsc: "BSc, Stamford University Bangladesh",
    msc: "MSc, University of Aberdeen, UK",
    role: "Associate, Consulting Team",
  },
  {
    name: "Rajib S.",
    image: "https://i.pravatar.cc/150?img=27",
    bsc: "BSc, Metropolitan University",
    msc: "MSc, Heriot-Watt University, UK",
    role: "Senior Associate, Operations",
  },
  {
    name: "Sakib R.",
    image: "https://i.pravatar.cc/150?img=29",
    bsc: "BSc, Green University of Bangladesh",
    msc: "MSc, University of Portsmouth, UK",
    role: "Analyst, Market Research",
  },
  {
    name: "Nadim M.",
    image: "https://i.pravatar.cc/150?img=33",
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
            className="bg-white rounded-2xl border border-gray-100 p-5 text-center hover:border-gray-200 transition"
          >
            <img
              src={person.image}
              alt={person.name}
              className="w-16 h-16 mx-auto rounded-full object-cover mb-3"
            />
            <h3 className="text-sm font-semibold text-gray-900 mb-1">
              {person.name}
            </h3>
            {person.bsc && (
              <p className="text-xs text-gray-500 leading-snug">{person.bsc}</p>
            )}
            {person.msc && (
              <p className="text-xs text-gray-500 leading-snug">{person.msc}</p>
            )}
            {person.role && (
              <span className="inline-block mt-2 text-xs font-medium px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-100">
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
