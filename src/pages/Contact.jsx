export default function Contact() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-20 lg:py-28 bg-blue-50 greyhomelightbg overflow-hidden">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h2 className="text-primary font-bold text-sm uppercase tracking-widest mb-3">
              Get in Touch
            </h2>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0d121b] dark:text-white mb-6 leading-tight">
              <span className="text-primary">Contact</span>{' '}
              <span className="title_header">us</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              Fill out the form below and one of our expert counselors will get
              back to you within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <div className="max-w-7xl mx-auto mt-10 px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {[
            {
              icon: "location_on",
              title: "Office Address",
              lines: ["Head Edu Care", "Dhaka, Bangladesh"],
            },
            { icon: "phone", title: "Phone", lines: ["+880 1XXXXXXXXX"] },
            {
              icon: "email",
              title: "Email",
              lines: ["info@headeducare.com"],
            },
            {
              icon: "schedule",
              title: "Office Hours",
              lines: ["Sun - Thu: 10AM - 7PM", "Sat: 10AM - 3PM"],
            },
          ].map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-start justify-between gap-6 bg-background-light dark:bg-gray-800 p-10 rounded-2xl border border-gray-100 dark:border-gray-700 hover:border-primary/30 hover:shadow-lg transition-all duration-200 min-h-[240px]"
            >
              <div className="w-16 h-16 shrink-0 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-4xl">
                  {item.icon}
                </span>
              </div>
              <div>
                <h4 className="font-bold text-xl text-[#0d121b] dark: title_header mb-3">
                  {item.title}
                </h4>
                {item.lines.map((l, j) => (
                  <p
                    key={j}
                    className="text-gray-600 dark:text-gray-400 text-base leading-relaxed"
                  >
                    {l}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Google Map */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 mb-16">
        <div className="rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-700 h-[500px]">
          <iframe
            title="Head Educare Location"
            width="100%"
            height="100%"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://maps.google.com/maps?q=44/16+Head+Educare+West+Panthapath+Dhaka+1205&output=embed"
            style={{ border: 0 }}
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}
