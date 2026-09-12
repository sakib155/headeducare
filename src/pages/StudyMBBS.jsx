export default function StudyMBBS() {
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-500 dark:text-gray-400 text-lg">
            MBBS program details coming soon. Contact us for personalized guidance.
          </p>
        </div>
      </section>
    </div>
  );
}