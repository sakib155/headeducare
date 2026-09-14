export default function StudyMBBS() {
  const countries = [
    { name: "Hungary", slug: "hungary", flag: "🇭🇺" },
    { name: "Russia", slug: "russia", flag: "🇷🇺" },
    { name: "Kyrgyzstan", slug: "kyrgyzstan", flag: "🇰🇬" },
    { name: "Malaysia", slug: "malaysia", flag: "🇲🇾" },
    { name: "Georgia", slug: "georgia", flag: "🇬🇪" },
  ];

  return (
    <div>
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-primary/5 to-blue-50 dark:from-background-dark dark:to-surface-dark overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-primary font-bold text-sm uppercase tracking-widest mb-3">
            Medical Studies
          </h2>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0d121b] dark:text-white mb-6">
            Study MBBS Abroad
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Pursue your dream of becoming a doctor at leading medical universities around the world.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-background-dark">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl sm:text-3xl font-black text-[#0d121b] dark:text-white mb-10 text-center">
            Study MBBS
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {countries.map((c) => (
              <div
                key={c.slug}
                className="group flex items-center gap-4 p-5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 hover:bg-primary/5 hover:border-primary/30 dark:hover:border-primary/40 transition-all cursor-pointer"
              >
                <span className="text-3xl flex-shrink-0">{c.flag}</span>
                <div>
                  <p className="font-bold text-[#0d121b] dark:text-white text-base">
                    Study MBBS in {c.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}