import { useParams, Link } from "react-router-dom";
import {
  Globe, Clock, Shield, Banknote, CheckCircle, FileText, Award, GraduationCap, Stethoscope, Search, MapPin, Users, ChevronRight,
} from "lucide-react";

const styles = `
  .mbbs-page { font-family: 'Lexend', sans-serif; }
  .mbbs-hero { position:relative; overflow:hidden; background:linear-gradient(135deg,#f0f7ff 0%,#e8f2fe 100%); padding:120px 0 100px; }
  .dark .mbbs-hero { background:linear-gradient(135deg,#02182a,#0d1f35); }
  .mbbs-container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
  .mbbs-section { padding: 80px 0; }
  .mbbs-section-alt { padding: 80px 0; background: #f6f6f8; }
  .dark .mbbs-section-alt { background: #02182a; }
  .mbbs-h1 { font-size: clamp(36px,5vw,56px); font-weight: 900; line-height: 1.08; margin-bottom: 20px; font-family: 'Lexend',sans-serif; }
  .mbbs-h2 { font-size: clamp(24px,3vw,36px); font-weight: 900; margin-bottom: 12px; font-family: 'Lexend',sans-serif; }
  .mbbs-h2 span { color: #005B8F; }
  .mbbs-body { font-size: 15px; color: #6b7280; line-height: 1.8; font-weight: 300; }
  .dark .mbbs-body { color: #9ca3af; }
  .mbbs-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 12px; }
  .mbbs-chip { padding: 10px 14px; border-radius: 12px; background: #fff; border: 1px solid rgba(0,91,143,0.12); font-size: 13px; font-weight: 600; color: #0d121b; transition: all .2s; display: flex; flex-direction: column; }
  .mbbs-chip small { font-size: 11px; font-weight: 400; color: #6b7280; margin-top: 4px; }
  .dark .mbbs-chip { background: #0d1f35; border-color: rgba(255,255,255,0.08); color: #f1f1f1; }
  .dark .mbbs-chip small { color: #9ca3af; }
  .mbbs-feature-card { background: #fff; border: 1px solid rgba(0,0,0,0.06); border-radius: 20px; padding: 28px; transition: all .25s; }
  .mbbs-feature-card:hover { transform: translateY(-4px); box-shadow: 0 10px 30px rgba(0,91,143,0.1); }
  .dark .mbbs-feature-card { background: #0d1f35; border-color: rgba(255,255,255,0.06); }
  .mbbs-checklist { list-style: none; padding: 0; margin: 0; }
  .mbbs-checklist li { display: flex; align-items: center; gap: 10px; padding: 10px 0; font-size: 14px; color: #4b5563; font-weight: 400; border-bottom: 1px solid rgba(0,0,0,0.06); }
  .dark .mbbs-checklist li { color: #9ca3af; border-color: rgba(255,255,255,0.08); }
  .mbbs-checklist li:last-child { border: none; }
  .mbbs-checklist li svg { width: 18px; height: 18px; color: #16a34a; flex-shrink: 0; }
  .mbbs-cta-btn { display: inline-flex; align-items: center; gap: 8px; background: #005B8F; color: #fff; padding: 14px 28px; border-radius: 12px; font-weight: 700; font-size: 15px; text-decoration: none; transition: all .2s; }
  .mbbs-cta-btn:hover { background: #004a78; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,91,143,0.25); }
  .mbbs-back { display:inline-flex; align-items:center; gap:6px; color:#005B8F; font-size:14px; font-weight:600; text-decoration:none; margin-bottom:24px; }
  .mbbs-back:hover { text-decoration:underline; }
  .mbbs-badge { display: inline-flex; align-items: center; gap: 8px; padding: 5px 14px; border-radius: 40px; background: rgba(0,91,143,0.1); color: #005B8F; font-size: 11px; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; margin-bottom: 20px; }
  .dark .mbbs-badge { background: rgba(74,131,243,0.15); color: #4A83F3; }
  .mbbs-highlight-box { background: linear-gradient(135deg, #005B8F, #004270); border-radius: 20px; padding: 36px; color: #fff; }
  @media(max-width:768px) { .mbbs-section { padding: 48px 0; } .mbbs-section-alt { padding: 48px 0; } }
`;

const chinaUniversities = [
  ["JILIN UNIVERSITY", "Changchun, Jilin", "100"],["CHINA MEDICAL UNIVERSITY", "Shenyang, China", "50"],["DALIAN MEDICAL UNIVERSITY", "Dalian, China", "120"],["CAPITAL MEDICAL UNIVERSITY", "Beijing, China", "70"],["TIANJIN MEDICAL UNIVERSITY", "Tianjin, China", "100"],["SHANDONG UNIVERSITY", "Shandong, China", "80"],["FUDAN UNIVERSITY", "Shanghai, China", "40"],["XINJIANG MEDICAL UNIVERSITY", "Xinjiang, China", "60"],["NANJING MEDICAL UNIVERSITY", "Jiangsu, China", "60"],["JIANGSU UNIVERSITY", "Jiangsu, China", "70"],["WENZHOU MEDICAL UNIVERSITY", "Zhejiang, China", "120"],["ZHEJIANG UNIVERSITY", "Zhejiang, China", "180"],["WUHAN UNIVERSITY", "Hubei, China", "50"],["HUAZHONG UNIVERSITY OF SCIENCE & TECHNOLOGY", "Hubei, China", "80"],["XI'AN JIAOTONG UNIVERSITY", "Shaanxi, China", "120"],["SOUTHERN MEDICAL UNIVERSITY", "Guangzhou, Guangdong, China", "100"],["JINAN UNIVERSITY", "Guangzhou, Guangdong, China", "30"],["GUANGXI MEDICAL UNIVERSITY", "Guangxi, China", "60"],["SICHUAN UNIVERSITY", "Sichuan, China", "70"],["CHONGQING MEDICAL UNIVERSITY", "Chongqing, China", "100"],["HARBIN MEDICAL UNIVERSITY", "Harbin, Heilongjiang, China", "60"],["BEIHUA UNIVERSITY (NORTH CHINA UNIVERSITY)", "Jilin, China", "20"],["JINZHOU MEDICAL UNIVERSITY", "Liaoning, China", "40"],["QINGDAO UNIVERSITY", "Shandong, China", "30"],["HEBEI MEDICAL UNIVERSITY", "Hebei, China", "40"],["NINGXIA MEDICAL UNIVERSITY", "Ningxia, China", "100"],["TONGJI UNIVERSITY", "Shanghai, China", "40"],["SHIHEZI UNIVERSITY", "Xinjiang, China", "120"],["SOUTHEAST UNIVERSITY", "Jiangsu, China", "30"],["YANGZHOU UNIVERSITY", "Jiangsu, China", "30"],["NANTONG UNIVERSITY", "Jiangsu, China", "30"],["SOOCHOW UNIVERSITY", "Jiangsu, China", "30"],["NINGBO UNIVERSITY", "Zhejiang, China", "50"],["FUJIAN MEDICAL UNIVERSITY", "Fujian, China", "60"],["ANHUI MEDICAL UNIVERSITY", "Anhui, China", "80"],["XUZHOU MEDICAL UNIVERSITY", "Xuzhou, China", "40"],["ZHENGZHOU UNIVERSITY", "Henan, China", "40"],["GUANGZHOU MEDICAL UNIVERSITY", "Guangzhou, Guangdong, China", "80"],["SHANTOU UNIVERSITY", "Shantou, Guangdong", "20"],["KUNMING MEDICAL UNIVERSITY", "Kunming, Yunnan, China", "70"],["SOUTHWEST MEDICAL UNIVERSITY", "Luzhou City, Sichuan, China", "40"],["XIAMEN UNIVERSITY", "Fujian, China", "50"],["SHANGHAI JIAOTONG UNIVERSITY", "Shanghai, China", "30"],
];

const malaysiaUnis = [
  "MASH UNIVERSITY","TAYLOR UNIVERSITY","ALLIANZE UNIVERSITY COLLEGE OF MEDICAL SCIENCES (AIMST)","INTERNATIONAL MEDICAL UNIVERSITY FACULTY OF MEDICINE AND HEALTH","UNIVERSITY OF MALAYA","INTERNATIONAL ISLAMIC UNIVERSITY MALAYSIA KULLIYYAH OF MEDICINE","JEFFREY CHEAH SCHOOL OF MEDICINE AND HEALTH SCIENCES","ASIAN METROPOLITAN UNIVERSITY","MELAKA MANIPAL MEDICAL COLLEGE","PERDANA UNIVERSITY GRADUATE SCHOOL OF MEDICINE","LINCOLN UNIVERSITY","NEWCASTLE UNIVERSITY","SEGI UNIVERSITY","ROYAL COLLEGE OF MEDICINE PERAK","UCSI UNIVERSITY FACULTY OF MEDICINE AND HEALTH SCIENCES","UNIVERSITI PUTRA MALAYSIA FAKULTI PERUBATAN DAN SAINS KESIHATAN","UNIVERSITI TEKNOLOGI MARA FACULTY OF MEDICINE",
];

const countryData = {
  china: {
    flag: "🇨🇳", name: "China",
    intro: "Studying Clinical Medicine (MBBS) in China offers a highly affordable and globally recognized medical education, making it a top choice for students from Bangladesh, Pakistan, India, and across Africa and Asia. The language of instruction at BM&DC-recognized institutions is entirely English, since they are designated by the Ministry of Education.",
    sections: [
      { title: "Global Accreditations", icon: Globe,
        desc: "Chinese Medical Universities are recognized by the WHO (World Health Organization), WDOMS, WFME, and ECFMG. Foreign graduates who have finished their medical or dental education and have a medicine (MBBS) or Dentistry (BDS) degree can apply for medical licensing exams like USMLE, PLAB, GMC, AMC, SMLE, DHA, RQE, and NRE." },
      { title: "MBBS Program Duration", icon: Clock,
        desc: "China has a six-year curriculum for the MBBS (English-taught) Program. In China, students complete a five-year MBBS program that includes a mandatory internship in the sixth year. The Clinical Medicine degree (MBBS) is awarded to students after they complete the internship and graduation test." },
      { title: "BMDC Approved Universities in China", icon: Shield,
        desc: "The Bangladesh Medical and Dental Council (BM&DC) has approved 43 medical universities designated by the Ministry of Education, China (MOE China), to teach clinical medicine (MBBS) in English. Only the 43 medical universities listed below accept students from Bangladesh." },
    ],
    hasUniversityTable: true,
    universityTableTitle: "BMDC APPROVED Universities in China:",
    universityTableNote: "Here is the list of 43 medical colleges and universities approved by the BM&DC, along with their Enrollment plan for the academic year 2026-2027 (total seats allocated) for the MBBS program in English.",
    universities: chinaUniversities,
    checklist: ["All academic transcripts and certificates", "Passport", "CV", "English proficiency certificate", "Reference letter"],
    visaDocs: ["JW201 or JW202 admission form", "University Admission Notice", "Valid Passport", "Physical examination record", "Academic transcripts & certificates", "English proficiency certificate", "Proof of sufficient funds"],
  },
  malaysia: {
    flag: "🇲🇾", name: "Malaysia",
    intro: "",
    sections: [
      { title: "Why Malaysia", icon: Search,
        desc: "MBBS universities in Malaysia offer comfortable, simple and direct MBBS admission without any entrance exam. The tuition fees to pursue medical studies in Malaysia are much affordable compared to other nations, but there is no compromise in the quality of education. The cost of living and accommodation is much cheaper in Malaysia. You will feel as if you are at your home location." },
    ],
    hasUniversityTable: true,
    universityTableTitle: "BMDC APPROVED MEDICAL SCHOOL",
    universities: malaysiaUnis,
    checklist: ["All academic transcripts and certificates", "Passport", "CV", "English proficiency certificate", "Reference letter"],
    visaDocs: ["Application form", "One recent photograph", "EVAL", "Offer letter", "Bank statement", "Family certificate"],
  },
  hungary: {
    flag: "🇭🇺", name: "Hungary",
    intro: "Study MBBS in Hungary for an experience that extends far beyond textbooks and lectures. The Schengen country is home to one of the world's best healthcare and medical education systems. Hungarian medical universities are known for offering a supportive environment for foreign students. MBBS in Hungary is NMC, WHO, and FAIMER approved and the medium of teaching is English to ensure better learning of sessions. The country offers quality medical education at a highly affordable tuition fee.",
    sections: [
      { title: "Advanced Education System", icon: Award, desc: "Hungarian medical education system is at par with the European and American standards. The country has the most advanced education and healthcare infrastructure for medical aspirants." },
      { title: "Easy Admission", icon: FileText, desc: "Getting admission to study MBBS in Hungary is a simple process. Students with 70% passing percentage and Physics, Chemistry, and Biology as main subjects in 12th grade can apply to any of the medical universities in Hungary." },
      { title: "English is the Medium of Teaching", icon: Globe, desc: "All Hungarian universities use English as the medium of teaching. Indian students face zero issues in adapting to their classroom sessions." },
      { title: "Accreditation", icon: Shield, desc: "Medical universities in Hungary are approved and accredited by the topmost medical bodies in the world. These include: NMC, FAIMER, and WHO. Indian students can easily come back and work in their home country as most Hungarian universities follow the NMC guidelines." },
      { title: "High-Ranking Universities", icon: GraduationCap, desc: "As per the 2024 QS World Rankings, Semmelweis University, Budapest ranks in top 250 universities in Europe. Many other Hungarian universities also hold a good ranking in top 300-350 universities." },
      { title: "Practical Exposure", icon: Stethoscope, desc: "Hungary has a robust healthcare system in place. MBBS students get an opportunity to learn and practice in university affiliated hospitals during their 6 years course tenure." },
    ],
    checklist: ["Passport", "Professional CV", "All Academic Transcripts and Certificates", "English Proficiency Certificate", "Job Experience Letter", "Statement of Purpose (SOP)", "2/3 Academic/ Professional Recommendation Letter"],
    visaDocs: ["Online Application", "Valid Passport", "All academic certificate and Transcripts with Apostille", "English proficiency certificate", "Tuition Fees Deposit confirmation", "Confirmation of Enrollment", "Bank Statement and Solvency Certificate", "Financial Affidavit and CA Valuation", "Tax Assessment with Return", "Health and Medical Insurance", "Booking Ticket", "Work Experience Letter – if applicable", "Cover Letter"],
  },
};

export default function StudyMBBSDetail() {
  const { slug } = useParams();
  const data = countryData[slug];

  if (!data) return (
    <div className="mbbs-page" style={{ textAlign: "center", padding: 80 }}>
      <h2>Destination not found</h2>
      <Link to="/study-mbbs">← Back to all destinations</Link>
    </div>
  );

  return (
    <>
      <style>{styles}</style>
      <div className="mbbs-page">
        <section className="mbbs-hero">
          <div className="mbbs-container" style={{ position: "relative", zIndex: 1 }}>
            <Link to="/study-mbbs" className="mbbs-back">← Back to All Destinations</Link>
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 16 }}>
              <span style={{ fontSize: 48 }}>{data.flag}</span>
              <div>
                <span className="mbbs-badge">Medical Studies</span>
                <h1 className="mbbs-h1" style={{ color: "#0d121b" }}>MBBS in <span>{data.name}</span></h1>
              </div>
            </div>
            {data.intro && <p className="mbbs-body" style={{ fontSize: 16, maxWidth: 700 }}>{data.intro}</p>}
          </div>
        </section>

        {data.sections.length > 0 && (
          <section className={slug === "hungary" ? "mbbs-section-alt" : "mbbs-section"}>
            <div className="mbbs-container">
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
                {data.sections.map((s, i) => (
                  <div key={i} className="mbbs-feature-card">
                    <div style={{ width: 44, height: 44, borderRadius: 12, background: "rgba(0,91,143,0.1)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 14 }}>
                      <s.icon size={22} color="#005B8F" />
                    </div>
                    <h4 style={{ fontWeight: 700, fontSize: 16, color: "#0d121b", marginBottom: 8 }}>{s.title}</h4>
                    <p className="mbbs-body" style={{ fontSize: 14 }}>{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {data.hasUniversityTable && (
          <section className={slug === "hungary" ? "mbbs-section" : "mbbs-section-alt"}>
            <div className="mbbs-container">
              <div style={{ background: "#fff", borderRadius: 20, border: "1px solid rgba(0,0,0,0.06)", padding: 32 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                  <Award size={28} color="#005B8F" />
                  <h3 style={{ fontWeight: 900, fontSize: 20, color: "#0d121b", fontFamily: "'Lexend',sans-serif" }}>{data.universityTableTitle}</h3>
                </div>
                {data.universityTableNote && <p className="mbbs-body" style={{ fontSize: 14, marginBottom: 24 }}>{data.universityTableNote}</p>}
                <div className="mbbs-grid">
                  {data.universities.map((uni, i) => {
                    const num = (i + 1).toString().padStart(2, "0");
                    if (Array.isArray(uni)) {
                      return (
                        <div key={i} className="mbbs-chip">
                          <span style={{ fontWeight: 700, fontSize: 13 }}>{num}. {uni[0]}</span>
                          <small>{uni[1]} — {uni[2]} seats</small>
                        </div>
                      );
                    }
                    return (
                      <div key={i} className="mbbs-chip">
                        <span style={{ fontWeight: 700, fontSize: 12 }}>{num}. {uni}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>
        )}

        <section className={slug === "hungary" ? "mbbs-section-alt" : "mbbs-section"}>
          <div className="mbbs-container">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
              <div className="mbbs-feature-card">
                <FileText size={24} color="#005B8F" style={{ marginBottom: 14 }} />
                <h4 style={{ fontWeight: 700, fontSize: 16, color: "#0d121b", marginBottom: 14 }}>Application Checklist</h4>
                <ul className="mbbs-checklist">
                  {data.checklist.map((item, i) => (
                    <li key={i}><CheckCircle size={16} /> {item}</li>
                  ))}
                </ul>
              </div>
              <div className="mbbs-feature-card">
                <FileText size={24} color="#005B8F" style={{ marginBottom: 14 }} />
                <h4 style={{ fontWeight: 700, fontSize: 16, color: "#0d121b", marginBottom: 14 }}>Visa Related Information</h4>
                <ul className="mbbs-checklist">
                  {data.visaDocs.map((item, i) => (
                    <li key={i}><CheckCircle size={16} /> {item}</li>
                  ))}
                </ul>
              </div>
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
                Book Free Consultation <ChevronRight size={18} />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}