const SITE = {
  name: "Head Educare",
  url: "https://headedu.com",
  logo: "/HEAD_horizontal.png",
  ogImage: "/og-image.jpg",
  twitter: "@head_educare",
  phone: "+8801XXXXXXXXX",
  address: {
    street: "House-52, Road-4, Block-C, Banani",
    locality: "Dhaka",
    region: "Dhaka Division",
    postalCode: "1213",
    country: "Bangladesh",
  },
};

function meta(route, title, desc, extras = {}) {
  const fullTitle = `${title} | ${SITE.name}`;
  const keywords = extras.keywords || [];
  const faqData = extras.faq || null;

  let schema = extras.schema || null;

  if (faqData && faqData.length > 0) {
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqData.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    };
    schema = schema ? [schema, faqSchema] : faqSchema;
  }

  return {
    path: route,
    title: fullTitle,
    canonical: `${SITE.url}${route}`,
    name: {
      title,
      description: desc,
      keywords: [
        "study abroad from Bangladesh",
        "educational consultancy Bangladesh",
        "Head Educare",
        ...keywords,
      ].join(", "),
      author: SITE.name,
      robots: "index, follow",
      "twitter:card": "summary_large_image",
      "twitter:title": fullTitle,
      "twitter:description": desc,
      "twitter:site": SITE.twitter,
      "theme-color": "#005B8F",
      "content-language": "en",
      "google-site-verification": "",
    },
    property: {
      "og:type": extras.ogType || "website",
      "og:url": `${SITE.url}${route}`,
      "og:title": fullTitle,
      "og:description": desc,
      "og:image": `${SITE.url}${SITE.ogImage}`,
      "og:image:width": "1200",
      "og:image:height": "630",
      "og:site_name": SITE.name,
    },
    schema,
  };
}

export const routeMeta = [
  meta("/", "Head Educare - Study Abroad Consultant in Bangladesh", "Head Educare is Bangladesh's trusted education consultancy helping students pursue higher education across the globe with expert guidance on university selection, scholarships, admissions, and visa processing.", {
    keywords: ["study abroad consultancy", "admission support Bangladesh", "university application help", "visa assistance Dhaka"],
    ogType: "website",
    schema: {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
      logo: `${SITE.url}${SITE.logo}`,
      description: "Bangladesh's trusted education consultancy for international studies.",
      address: { "@type": "PostalAddress", ...SITE.address },
      contactPoint: { "@type": "ContactPoint", telephone: SITE.phone, contactType: "customer service" },
      sameAs: [`https://wa.me/${SITE.phone.replace(/[^0-9]/g, "")}`, "https://facebook.com/headedu"],
      areaServed: { "@type": "Country", name: "Bangladesh" },
    },
  }),

  meta("/about", "About Head Educare", "Head Educare is a premier international education consultancy in Bangladesh dedicated to helping students gain admission to the world's leading universities with over 10 years of experience.", {
    keywords: ["about Head Educare", "education consultant Dhaka", "study abroad agency Bangladesh"],
    schema: { "@context": "https://schema.org", "@type": "AboutPage", name: "About Head Educare", description: "Premier education consultancy in Bangladesh." },
  }),

  meta("/about/our-people", "Meet Our Team", "Meet the experienced team at Head Educare: dedicated professionals guiding Bangladeshi students through international university admissions and career planning.", {
    keywords: ["Head Educare team", "education counselors Dhaka", "study abroad advisors Bangladesh"],
  }),

  meta("/about/we-will-provide", "Everything We Provide", "Head Educare provides comprehensive support for students from Bangladesh pursuing higher education globally, from profile evaluation to visa assistance.", {
    keywords: ["services for study abroad", "what we offer", "student support services Bangladesh"],
  }),

  meta("/services", "Our Services", "Head Educare offers end-to-end study abroad services for Bangladeshi students: admission support, SOP drafting, visa assistance, scholarship guidance, test preparation, and more.", {
    keywords: ["study abroad services", "admission consultancy", "visa processing Bangladesh", "IELTS coaching Dhaka"],
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      provider: { "@type": "Organization", name: SITE.name },
      areaServed: { "@type": "Country", name: "Bangladesh" },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Study Abroad Services",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Admission Support" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Visa Assistance" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Scholarship Guidance" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Test Preparation" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "SOP Drafting" } },
        ],
      },
    },
  }),

  meta("/contact", "Contact Us", "Contact Head Educare in Dhaka, Bangladesh for expert guidance on studying abroad. Call or WhatsApp for a free consultation on university admissions and visas.", {
    keywords: ["contact Head Educare", "study abroad consultant Dhaka", "education consultancy phone number", "free consultation Bangladesh"],
  }),

  meta("/freeconsulation", "Free Consultation", "Book your free consultation with Head Educare in Dhaka. Our experts will guide you through university selection, applications, scholarships, and visa processes.", {
    keywords: ["free study abroad consultation", "book appointment Dhaka", "education counseling Bangladesh"],
  }),

  meta("/allcountries/allcountry", "Study Destinations", "Discover the best countries to study abroad from Bangladesh: USA, UK, Canada, Australia, Europe, Malaysia, South Korea. Compare tuition, visa requirements, and scholarships.", {
    keywords: ["study abroad destinations", "best countries for Bangladeshi students", "USA UK Canada Australia study"],
  }),

  meta("/courses", "SAT & PTE Courses", "Prepare for Digital SAT and PTE with Head Educare's expert-led coaching in Dhaka. AI-powered practice, interactive lessons, and proven score improvement strategies.", {
    keywords: ["SAT coaching Dhaka", "PTE preparation Bangladesh", "IELTS coaching", "English language test training"],
  }),

  meta("/study-mbbs", "Study MBBS Abroad", "Pursue your dream of becoming a doctor with Head Educare. MBBS programs in Hungary, Russia, Kyrgyzstan, Malaysia, and Georgia for Bangladeshi students at affordable tuition.", {
    keywords: ["MBBS abroad for Bangladeshi students", "study medicine overseas", "medical school admission Bangladesh", "MBBS Hungary Russia"],
  }),

  meta("/legal/termsService", "Terms of Service", "Terms and conditions for using Head Educare services and website. Read our service agreement, payment terms, and client obligations.", {
    keywords: ["terms of service", "Head Educare terms", "consultancy agreement"],
  }),

  meta("/legal/privacyPolicy", "Privacy Policy", "Privacy policy explaining how Head Educare collects, uses, and protects personal information of students from Bangladesh.", {
    keywords: ["privacy policy", "data protection", "student privacy Bangladesh"],
  }),

  meta("/legal/refundPolicy", "Refund Policy", "Refund policy for Head Educare services in Bangladesh. Clear terms on fee refunds, cancellations, and service disputes.", {
    keywords: ["refund policy", "cancellation terms", "fee refund Bangladesh"],
  }),

  meta("/legal/disclaimer", "Disclaimer", "Disclaimer regarding information accuracy, visa guarantees, and university admission assurances provided by Head Educare to Bangladeshi students.", {
    keywords: ["disclaimer", "service guarantee", "visa success disclaimer"],
  }),

  meta("/services/admission-support", "Admission Support", "Expert admission support for Bangladeshi students applying to universities abroad. University selection, application preparation, document review, and enrollment assistance.", {
    keywords: ["university admission help Bangladesh", "college application assistance", "study abroad application process"],
    faq: [
      { q: "What documents are needed for university admission?", a: "Academic transcripts, English proficiency test scores, passport copy, SOP, recommendation letters, and financial documents." },
      { q: "How long does the admission process take?", a: "Typically 4-8 weeks from application to offer letter, depending on the university and program." },
      { q: "Can I apply to multiple universities at once?", a: "Yes, we help you apply to multiple universities simultaneously to maximize your chances of acceptance." },
    ],
  }),

  meta("/services/profile-evaluation", "Free Profile Evaluation", "Know exactly where you stand with a free profile evaluation from Head Educare. Get personalized university shortlisting based on your academic background and goals.", {
    keywords: ["profile evaluation for study abroad", "university shortlisting Bangladesh", "academic assessment Dhaka"],
    faq: [
      { q: "What is a profile evaluation?", a: "A comprehensive assessment of your academic background, work experience, test scores, and career goals to recommend the best-fit universities." },
      { q: "Is the profile evaluation really free?", a: "Yes, our initial profile evaluation is completely free with no obligation to proceed further." },
      { q: "What do I need to provide for evaluation?", a: "Your academic transcripts, English test scores (if available), resume, and preferred study destinations." },
    ],
  }),

  meta("/services/sop-essay-drafting", "SOP & Essay Drafting", "Expert Statement of Purpose and essay drafting for Bangladeshi students applying to universities in USA, UK, Canada, Australia, and Europe.", {
    keywords: ["SOP writing Bangladesh", "statement of purpose help", "university essay drafting Dhaka", "application essay service"],
    faq: [
      { q: "What is a Statement of Purpose?", a: "An SOP is a personal essay that explains your academic background, career goals, and reasons for choosing a specific program and university." },
      { q: "How long should an SOP be?", a: "Most SOPs should be 800-1000 words, though requirements vary by university and program." },
      { q: "Do you write essays from scratch?", a: "Yes, we craft original essays based on your personal story and experiences after a detailed consultation session." },
    ],
  }),

  meta("/services/common-essay", "Common Essay Drafting", "Expert Common App essay drafting for US university admissions. Stand out with compelling personal statements crafted by experienced mentors.", {
    keywords: ["Common App essay help", "college essay writing Bangladesh", "US university application essay"],
  }),

  meta("/services/scholarship-guidance", "Scholarship Guidance", "Fund your dreams with scholarship guidance from Head Educare. Identify and apply for fully funded scholarships, merit awards, and financial aid opportunities.", {
    keywords: ["scholarships for Bangladeshi students", "fully funded scholarships", "financial aid study abroad", "scholarship application help"],
  }),

  meta("/services/complete-application-help", "Complete Application Help", "End-to-end application support for Bangladeshi students studying abroad. From university selection to visa processing, we handle everything.", {
    keywords: ["complete study abroad application", "full admission support Bangladesh", "end to end consultancy"],
  }),

  meta("/services/financial-documentation", "Financial Documentation", "Secure your visa with perfect financial documentation. Expert guidance on bank statements, sponsor letters, education loans, and financial proof for embassy applications.", {
    keywords: ["financial docs for visa", "bank statement for study abroad", "education loan Bangladesh", "sponsor letter guidance"],
  }),

  meta("/services/visa-documentation", "Visa Documentation", "Perfect your visa documentation with expert guidance from Head Educare. Comprehensive checklists, document review, and application support for student visas.", {
    keywords: ["student visa documents", "visa application checklist", "study visa documentation Bangladesh"],
  }),

  meta("/services/visa-application", "Visa Application", "Secure your student visa with expert guidance. Head Educare assists Bangladeshi students with visa applications for USA, UK, Canada, Australia, and Schengen countries.", {
    keywords: ["student visa Bangladesh", "visa application help Dhaka", "study visa processing", "F1 visa UK visa Canada visa"],
    faq: [
      { q: "What is the success rate for visa applications?", a: "Head Educare maintains a 98% visa success rate through meticulous documentation and interview preparation." },
      { q: "How long does visa processing take?", a: "Processing times vary by country: USA F1 visa 2-4 weeks, UK Tier 4 3-6 weeks, Canada SDS 4-8 weeks." },
      { q: "What documents are needed for a student visa?", a: "Valid passport, CAS/I-20/acceptance letter, financial proofs, English test scores, academic documents, and visa application forms." },
      { q: "Can I work while studying on a student visa?", a: "Most countries allow part-time work (20 hours/week during semesters) on a student visa, subject to specific regulations." },
    ],
  }),

  meta("/services/quick-appointment", "Quick Appointment", "Get expert guidance in minutes. Book a quick appointment with Head Educare's counselors in Dhaka for personalized study abroad advice.", {
    keywords: ["quick appointment Dhaka", "urgent study abroad consultation", "fast education counseling"],
  }),

  meta("/services/health-insurance", "Health Insurance", "Overseas health insurance for Bangladeshi students studying abroad. Comprehensive medical coverage compliant with university and visa requirements.", {
    keywords: ["student health insurance", "medical insurance study abroad", "overseas health coverage Bangladesh"],
  }),

  meta("/services/student-accommodation", "Student Accommodation", "Find affordable and trusted student accommodation abroad. Head Educare helps Bangladeshi students secure housing near their university campus.", {
    keywords: ["student housing abroad", "accommodation for international students", "dormitory booking Bangladesh"],
  }),

  meta("/services/education-loan-support", "Education Loan", "Secure your future with expert education loan guidance. Head Educare partners with banks and NBFCs to help Bangladeshi students fund their studies abroad.", {
    keywords: ["education loan Bangladesh", "study abroad loan", "student finance", "bank loan for overseas studies"],
  }),

  meta("/services/visa-mock-interview", "Visa Mock Interview", "Ace your visa interview with confident preparation. Realistic mock interviews, personalized feedback, and coaching for student visa success.", {
    keywords: ["visa interview preparation", "mock visa interview Dhaka", "student visa coaching", "embassy interview tips"],
  }),

  meta("/services/scholarship-support", "Scholarship Support", "Expert scholarship support for Bangladeshi students. Identify, apply, and secure funding for your international education with Head Educare.", {
    keywords: ["scholarship support Bangladesh", "funding for study abroad", "merit scholarship application", "financial aid guidance"],
  }),

  meta("/services/visa-services", "Visa Services", "Hassle-free visa services for Bangladeshi students. Complete visa processing support for USA, UK, Canada, Australia, Europe, and Malaysia.", {
    keywords: ["student visa services", "visa processing Bangladesh", "study abroad visa help", "embassy application support"],
  }),

  meta("/services/us-mentorship", "US Mentorship Program", "Holistic Ivy League and elite college mentorship for Bangladeshi students. Expert guidance on US university admissions, essays, extracurriculars, and financial aid.", {
    keywords: ["US university admission Bangladesh", "Ivy League mentorship", "American college application help", "USA study guidance"],
  }),

  meta("/mentorship", "US Mentorship Program", "Holistic Ivy League and elite college mentorship for Bangladeshi students aspiring to study in the United States.", {
    keywords: ["US mentorship Bangladesh", "study in USA guidance", "American university application support"],
  }),

  meta("/services/general-documents-checklist", "Documents Checklist", "Complete documents checklist for Bangladeshi students preparing study abroad applications. Academic, financial, identity, and visa documents.", {
    keywords: ["study abroad documents checklist", "application documents Bangladesh", "visa required documents", "student paperwork"],
  }),

  meta("/services/academic-qualifications", "Academic Qualifications", "Academic qualifications and standardized test requirements for Bangladeshi students applying to international universities. GPA, IELTS, TOEFL, SAT, GRE, GMAT.", {
    keywords: ["academic requirements study abroad", "GPA conversion Bangladesh", "IELTS TOEFL SAT GRE GMAT", "entry requirements universities"],
  }),

  meta("/services/test-preparation", "Test Preparation", "Transform your performance with expert test preparation. IELTS, TOEFL, PTE, SAT, GRE, and GMAT coaching in Dhaka with proven results.", {
    keywords: ["IELTS coaching Dhaka", "TOEFL preparation Bangladesh", "SAT training", "PTE coaching", "GRE GMAT classes"],
  }),

  meta("/mentorship/liberal-arts-college", "Liberal Arts College Admission", "Expert guidance on US liberal arts college admissions for Bangladeshi students. Discover the transformative power of a liberal arts education.", {
    keywords: ["liberal arts college USA", "US college admission Bangladesh", "liberal arts education benefits"],
  }),

  meta("/mentorship/liberal-arts-education", "Liberal Arts Education", "Discover the power of a liberal arts education in the USA. Understand the intellectual foundations and career outcomes for Bangladeshi students.", {
    keywords: ["liberal arts explained", "US education system", "liberal arts career Bangladesh"],
  }),

  meta("/mentorship/elite-school-admission", "Elite School Admission", "Expert guidance for elite US school and Ivy League admissions. Head Educare mentors Bangladeshi students through competitive application processes.", {
    keywords: ["Ivy League admission Bangladesh", "Harvard Yale Princeton", "elite US university application", "competitive college admission"],
  }),

  meta("/mentorship/masters-mentorship-program", "Masters Mentorship", "Tailored mentorship for Bangladeshi students pursuing US graduate programs. Full support from program selection to interview preparation and funding.", {
    keywords: ["Masters in USA Bangladesh", "graduate school application", "US master's program guidance", "postgraduate admission help"],
  }),

  meta("/mentorship/acceptance-letters", "Acceptance Letters", "Learn how to evaluate, compare, and respond to US university acceptance letters. Expert guidance on making informed admission decisions.", {
    keywords: ["college acceptance letter", "US university offer evaluation", "admission decision help Bangladesh"],
  }),

  meta("/mentorship/strategy-brainstorm", "Strategy Brainstorm", "Collaborative strategy sessions to position your US university application for maximum impact. Stand out to admissions committees.", {
    keywords: ["application strategy", "US college strategy session", "admissions positioning Bangladesh"],
  }),

  meta("/mentorship/writing-application", "Writing and Application", "Expert writing and application guidance for US university admissions. Essays, activity descriptions, and application presentation.", {
    keywords: ["US college essay writing", "application presentation", "Common App activities Bangladesh"],
  }),

  meta("/mentorship/college-selection", "College Selection", "Multi-dimensional college selection guidance for Bangladeshi students. Academic fit, campus culture, financial aid, and career outcomes analyzed.", {
    keywords: ["college selection criteria", "US university shortlisting", "best fit university Bangladesh"],
  }),

  meta("/mentorship/financial-aid", "Financial Aid Guidance", "Comprehensive financial aid guidance for US university admissions. Need-based aid, merit scholarships, and funding strategies for Bangladeshi students.", {
    keywords: ["US university financial aid", "need based scholarship Bangladesh", "college funding USA", "international student aid"],
  }),

  meta("/mentorship/post-graduate-funding", "Post Graduate Funding", "Comprehensive guidance on funding US graduate degrees. Fellowships, assistantships, scholarships, and loan strategies for Bangladeshi students.", {
    keywords: ["graduate school funding", "PhD funding USA", "research assistantship", "teaching assistantship Bangladesh"],
  }),
];

export const siteConfig = SITE;
export const routesLookup = Object.fromEntries(routeMeta.map((r) => [r.path, r]));