import { useNavigate } from "react-router-dom";

export default function FreeConsultation() {
  const navigate = useNavigate();

  return (
    <div>
      {/* HERO */}
      <section className="relative py-24 bg-gradient-to-br from-primary/5 to-blue-50 dark:from-background-dark dark:to-surface-dark overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-black text-[#0d121b] dark:text-white mb-6">
            Free <span className="text-primary">Consultation</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            Talk to our expert counselors and get a personalized roadmap for
            your study abroad or migration journey.
          </p>

          <button
            onClick={() => navigate("/contact")}
            className="bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:bg-primary/90"
          >
            Book Free Consultation
          </button>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 bg-white dark:bg-background-dark">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-14 text-[#0d121b] dark:text-white">
            How It Works
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Submit Request",
                desc: "Fill out a simple form with your goals and preferences.",
              },
              {
                step: "02",
                title: "Get Matched",
                desc: "We assign an expert consultant based on your needs.",
              },
              {
                step: "03",
                title: "Free Session",
                desc: "Join a 1-on-1 consultation via call or WhatsApp.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-8 rounded-2xl border border-gray-100 dark:border-gray-700 bg-background-light dark:bg-gray-800 text-center"
              >
                <div className="text-primary text-3xl font-black mb-4">
                  {item.step}
                </div>
                <h3 className="font-bold text-xl mb-2 text-[#0d121b] dark:text-white">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section className="py-20 bg-gray-50 dark:bg-surface-dark">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-14 text-[#0d121b] dark:text-white">
            What You’ll Get
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              "Personalized study or migration roadmap",
              "Country & university recommendations",
              "Scholarship & budget guidance",
              "Visa process overview",
              "Career & future planning advice",
              "Q&A with expert consultant",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-4 bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-100 dark:border-gray-700"
              >
                <span className="material-symbols-outlined text-primary">
                  check_circle
                </span>
                <p className="text-gray-700 dark:text-gray-300">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONNECT METHODS */}
      <section className="py-20 bg-white dark:bg-background-dark">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-14 text-[#0d121b] dark:text-white">
            Choose How You Want to Connect
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "call",
                title: "Phone Call",
                desc: "Schedule a direct call with our consultant.",
              },
              {
                icon: "chat",
                title: "WhatsApp",
                desc: "Quick chat and guidance via WhatsApp.",
              },
              {
                icon: "event",
                title: "In-Person",
                desc: "Visit our office for face-to-face consultation.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-8 rounded-2xl border border-gray-100 dark:border-gray-700 bg-background-light dark:bg-gray-800 text-center"
              >
                <span className="material-symbols-outlined text-primary text-4xl mb-4 block">
                  {item.icon}
                </span>
                <h3 className="font-bold text-xl mb-2 text-[#0d121b] dark:text-white">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 bg-primary text-white text-center">
        <h2 className="text-3xl sm:text-4xl font-black mb-6">
          Ready to Start Your Journey?
        </h2>
        <p className="mb-8 text-lg opacity-90">
          Book your free consultation today and take the first step.
        </p>

        <button
          onClick={() => navigate("/contact")}
          className="bg-white text-primary px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:bg-gray-100"
        >
          Get Free Consultation
        </button>
      </section>
    </div>
  );
}
