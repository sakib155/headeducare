import { Link } from "react-router-dom";

const styles = `
  .mbbs-page { font-family: 'Lexend', sans-serif; }
  .mbbs-reveal { opacity: 0; transform: translateY(20px); transition: opacity .7s ease, transform .7s ease; }
  .mbbs-visible { opacity: 1; transform: none; }
  .mbbs-container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
  .mbbs-section { padding: 80px 0; }
  .mbbs-section-alt { padding: 80px 0; background: #f6f6f8; }
  .dark .mbbs-section-alt { background: #02182a; }
  .mbbs-h1 { font-size: clamp(36px,5vw,56px); font-weight: 900; line-height: 1.08; color: #0d121b; margin-bottom: 20px; font-family: 'Lexend',sans-serif; }
  .mbbs-h1 span { color: #005B8F; }
  .dark .mbbs-h1 { color: #fff; }
  .mbbs-h2 { font-size: clamp(24px,3vw,36px); font-weight: 900; color: #0d121b; margin-bottom: 12px; font-family: 'Lexend',sans-serif; }
  .mbbs-h2 span { color: #005B8F; }
  .dark .mbbs-h2 { color: #fff; }
  .mbbs-body { font-size: 15px; color: #6b7280; line-height: 1.8; font-weight: 300; }
  .dark .mbbs-body { color: #9ca3af; }
  .mbbs-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 12px; }
  .mbbs-chip { padding: 10px 14px; border-radius: 12px; background: #fff; border: 1px solid rgba(0,91,143,0.12); font-size: 13px; font-weight: 600; color: #0d121b; transition: all .2s; display: flex; flex-direction: column; }
  .mbbs-chip:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(0,91,143,0.1); border-color: rgba(0,91,143,0.3); }
  .mbbs-chip small { font-size: 11px; font-weight: 400; color: #6b7280; margin-top: 4px; }
  .dark .mbbs-chip { background: #0d1f35; border-color: rgba(255,255,255,0.08); color: #f1f1f1; }
  .dark .mbbs-chip small { color: #9ca3af; }
  .mbbs-highlight-box { background: linear-gradient(135deg, #005B8F, #004270); border-radius: 20px; padding: 36px; color: #fff; }
  .mbbs-cta-btn { display: inline-flex; align-items: center; gap: 8px; background: #005B8F; color: #fff; padding: 14px 28px; border-radius: 12px; font-weight: 700; font-size: 15px; text-decoration: none; transition: all .2s; }
  .mbbs-cta-btn:hover { background: #004a78; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,91,143,0.25); }
  @media(max-width:768px) { .mbbs-section { padding: 48px 0; } .mbbs-section-alt { padding: 48px 0; } }
`;

const destinations = [
  { name: "China", slug: "china", flag: "🇨🇳", color: "#dc2626" },
  { name: "Malaysia", slug: "malaysia", flag: "🇲🇾", color: "#005B8F" },
  { name: "Hungary", slug: "hungary", flag: "🇭🇺", color: "#16a34a" },
  { name: "Russia", slug: "russia", flag: "🇷🇺", color: "#1d4ed8" },
  { name: "Kyrgyzstan", slug: "kyrgyzstan", flag: "🇰🇬", color: "#d97706" },
  { name: "Georgia", slug: "georgia", flag: "🇬🇪", color: "#7c3aed" },
];

export default function StudyMBBS() {
  return (
    <>
      <style>{styles}</style>
      <div className="mbbs-page">
        <section className="relative py-28 lg:py-36 bg-gradient-to-br from-primary/5 to-blue-50 dark:from-background-dark dark:to-surface-dark overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h2 className="text-primary font-bold text-sm uppercase tracking-widest mb-3">Medical Studies</h2>
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
              Choose Your Destination
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {destinations.map((d) => (
                <Link
                  key={d.slug}
                  to={`/study-mbbs/${d.slug}`}
                  className="group flex items-center gap-4 p-5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 hover:bg-primary/5 hover:border-primary/30 transition-all cursor-pointer no-underline"
                >
                  <span className="text-3xl flex-shrink-0">{d.flag}</span>
                  <p className="font-bold text-[#0d121b] dark:text-white text-base m-0">
                    Study MBBS in {d.name}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="mbbs-section">
          <div className="mbbs-container text-center">
            <div className="mbbs-highlight-box">
              <h2 style={{ fontSize: "clamp(24px,3vw,36px)", fontWeight: 900, marginBottom: 14, fontFamily: "'Lexend',sans-serif" }}>
                Ready to Start Your Medical Journey?
              </h2>
              <p style={{ fontSize: 16, color: "rgba(255,255,255,0.8)", marginBottom: 28, maxWidth: 520, margin: "0 auto 28px" }}>
                Book a free consultation with our experts today — we'll guide you through every step of the MBBS admission process.
              </p>
              <Link to="/freeconsulation" className="mbbs-cta-btn" style={{ background: "#fff", color: "#005B8F" }}>
                Book Free Consultation →
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}