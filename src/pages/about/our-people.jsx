const people = [
  {
    name: "John Carter",
    role: "Chief Executive Officer",
    image: "https://i.pravatar.cc/300?img=1",
    bio: "Vision-driven leader with 10+ years of experience in scaling tech companies and building high-performing teams.",
  },
  {
    name: "Sarah Williams",
    role: "Head of Product",
    image: "https://i.pravatar.cc/300?img=5",
    bio: "Passionate about crafting user-centric products and delivering seamless digital experiences.",
  },
  {
    name: "David Kim",
    role: "Lead Developer",
    image: "https://i.pravatar.cc/300?img=8",
    bio: "Full-stack engineer specializing in modern web technologies and scalable architecture.",
  },
  {
    name: "Emily Johnson",
    role: "UI/UX Designer",
    image: "https://i.pravatar.cc/300?img=10",
    bio: "Designs intuitive and visually appealing interfaces focused on user engagement.",
  },
];

const OurPeople = () => {
  return (
    <div className="mx-auto m-4 px-4 md:px-8 lg:px-10 xl:px-10 max-w-7xl">
      <h2 className="text-3xl font-bold text-center mb-10">Our People</h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {people.map((person, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-5 text-center hover:shadow-lg transition"
          >
            <img
              src={person.image}
              alt={person.name}
              className="w-24 h-24 mx-auto rounded-full object-cover mb-4"
            />
            <h3 className="text-lg font-semibold">{person.name}</h3>
            <p className="text-sm text-gray-500 mb-2">{person.role}</p>
            <p className="text-sm text-gray-600">{person.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurPeople;
