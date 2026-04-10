/* ─────────────────────────────────────────────────────────────────
   mentorshipData.js
   Central data store for the USA Mentorship (Bootcamp) section.
   Each page imports only what it needs from this file.
   Pattern mirrors menuData.js — plain JS objects, no JSX.
───────────────────────────────────────────────────────────────── */

/* Navigation list shared by MentorProgramNav on every page */
export const mentorPages = [
  { name: "Liberal Arts College", url: "/mentorship/liberal-arts-college" },
  { name: "Elite School Admission", url: "/mentorship/elite-school-admission" },
  { name: "Masters Mentorship", url: "/mentorship/masters-mentorship-program" },
  { name: "Liberal Arts Education", url: "/mentorship/liberal-arts-education" },
  { name: "Acceptance Letters", url: "/mentorship/acceptance-letters" },
  { name: "Strategy Brainstorm", url: "/mentorship/strategy-brainstorm" },
  { name: "Writing & Application", url: "/mentorship/writing-application" },
  { name: "College Selection", url: "/mentorship/college-selection" },
  { name: "Financial Aid", url: "/mentorship/financial-aid" },
  { name: "Post Graduate Funding", url: "/mentorship/post-graduate-funding" },
];

/* ── 1. Liberal Arts College ────────────────────────────────── */
export const liberalArtsCollegeData = {
  hero: {
    badge: "USA Mentorship Program",
    title: "Discover the Power of",
    highlight: "Liberal Arts Colleges",
    desc: "Understand what makes US liberal arts colleges unique and why they are an outstanding choice for students seeking a broad, flexible, and transformative undergraduate education.",
  },
  stats: [
    { value: "200+", label: "Liberal Arts Colleges in the US" },
    { value: "Top 50", label: "Regularly Ranked Globally" },
    { value: "4 Yrs", label: "Transformative Undergraduate Journey" },
    { value: "95%", label: "Graduate Employment Rate" },
  ],
  whatIsSection: {
    label: "Overview",
    title: "What is a",
    highlight: "Liberal Arts College?",
    body: "Liberal arts colleges are small, undergraduate-focused institutions that provide a broad education spanning humanities, social sciences, natural sciences, and the arts. Unlike large research universities, they prioritise teaching, close faculty mentorship, and intellectual exploration.",
  },
  features: [
    {
      title: "Small Class Sizes",
      desc: "Average student-faculty ratio of 10:1 ensures personalised attention and deep engagement with professors who are dedicated to teaching.",
    },
    {
      title: "Interdisciplinary Curriculum",
      desc: "Students explore multiple disciplines before declaring a major, fostering critical thinking, creativity, and adaptability.",
    },
    {
      title: "Residential Campus Life",
      desc: "Vibrant on-campus communities where students live, learn, and grow together, building lifelong friendships and networks.",
    },
    {
      title: "Strong Alumni Networks",
      desc: "Graduates of top liberal arts colleges consistently rise to leadership positions in business, government, academia, and the arts.",
    },
    {
      title: "Financial Aid Generosity",
      desc: "Many liberal arts colleges have large endowments and offer need-blind admissions with substantial financial aid packages for international students.",
      },
    {
      title: "Research Opportunities",
      desc: "Despite their small size, liberal arts colleges offer rich undergraduate research opportunities alongside faculty on cutting-edge projects.",
    },
  ],
  topColleges: [
    "Williams College", "Amherst College", "Swarthmore College",
    "Wellesley College", "Bowdoin College", "Middlebury College",
    "Vassar College", "Colby College", "Bates College", "Hamilton College",
    "Colgate University", "Davidson College", "Haverford College", "Grinnell College",
  ],
  faqs: [
    {
      q: "Are liberal arts colleges only for arts and humanities students?",
      a: "No. Liberal arts colleges offer strong programs in STEM fields, social sciences, economics, and pre-professional tracks. The 'liberal arts' term refers to a broad, well-rounded education, not exclusively arts subjects.",
    },
    {
      q: "How do liberal arts colleges compare to big universities for career prospects?",
      a: "Graduates of top liberal arts colleges are highly sought after by employers and graduate schools. The critical thinking, communication, and adaptability skills developed are valued across every industry.",
    },
    {
      q: "Do liberal arts colleges offer financial aid to international students?",
      a: "Yes, many top liberal arts colleges offer generous need-based financial aid to international students, including some that are need-blind for international applicants.",
    },
    {
      q: "What is the typical class size at a liberal arts college?",
      a: "Classes are often 10–20 students, enabling meaningful discussion, direct professor interaction, and a collaborative learning environment very different from large lecture halls.",
    },
  ],
};

/* ── 2. Elite School Admission ──────────────────────────────── */
export const eliteSchoolAdmissionData = {
  hero: {
    badge: "USA Mentorship Program",
    title: "Navigate Elite",
    highlight: "School Admission",
    desc: "Expert guidance to help high-achieving students gain admission to the most selective universities in the United States, including Ivy League and equivalent institutions.",
  },
  stats: [
    { value: "<5%", label: "Ivy League Acceptance Rate" },
    { value: "100+", label: "Elite Placements by Our Mentors" },
    { value: "12+", label: "Months of Strategic Preparation" },
    { value: "98%", label: "Client Satisfaction Rate" },
  ],
  whatIsSection: {
    label: "Our Approach",
    title: "Strategic Elite",
    highlight: "Admissions Mentorship",
    body: "Gaining admission to Harvard, MIT, Princeton, Yale, Stanford, or similarly elite institutions requires more than excellent grades. It demands a carefully crafted narrative, strategic positioning, and deep understanding of what admissions officers are looking for.",
  },
  features: [
    {
      title: "Profile Assessment & Positioning",
      desc: "We conduct a deep-dive evaluation of your academics, extracurriculars, awards, and personal story to identify your strongest angles for positioning.",
    },
    {
      title: "School List Strategy",
      desc: "We help you build a balanced college list of reach, match, and safety schools that align with your aspirations and maximise your chances of success.",
    },
    {
      title: "Essay Coaching",
      desc: "Our mentors work closely with you to develop authentic, compelling essays that reveal your unique voice and perspective to admissions committees.",
    },
    {
      title: "Interview Preparation",
      desc: "Comprehensive mock interviews with detailed feedback to ensure you present yourself confidently and compellingly when the moment counts.",
    },
    {
      title: "Extracurricular Strategy",
      desc: "We advise on how to frame and enhance your activities, leadership roles, and community impact to demonstrate the depth admissions committees seek.",
    },
    {
      title: "Application Review",
      desc: "Rigorous line-by-line review of every application component to ensure consistency, accuracy, and maximum impact before submission.",
    },
  ],
  eliteSchools: [
    "Harvard University", "Yale University", "Princeton University",
    "Columbia University", "MIT", "Stanford University",
    "University of Pennsylvania", "Brown University", "Dartmouth College",
    "Cornell University", "Duke University", "Johns Hopkins University",
    "Georgetown University", "Northwestern University",
  ],
  faqs: [
    {
      q: "What GPA and test scores do I need for elite US universities?",
      a: "Most elite universities admit students with GPAs of 3.9+ (unweighted) and SAT scores above 1500 or ACT above 34. However, admissions are holistic — extracurriculars, essays, and recommendation letters are equally critical.",
    },
    {
      q: "When should I start preparing for elite school applications?",
      a: "Ideally, strategic preparation begins in Grade 9 or 10. Application preparation itself should start at least 12–18 months before deadlines, which are typically in November (Early Decision/Action) and January (Regular Decision).",
    },
    {
      q: "Does applying Early Decision improve chances?",
      a: "Yes, statistically. Early Decision acceptance rates at many elite schools are 2–3× higher than Regular Decision rates. However, ED is binding, so it should only be chosen if the school is your clear top choice.",
    },
    {
      q: "How important are extracurricular activities for elite admissions?",
      a: "Extremely important. Elite universities seek students who demonstrate depth of commitment, leadership, and impact — not just a long list of activities. Quality over quantity is key.",
    },
  ],
};

/* ── 3. Masters Mentorship Program ─────────────────────────── */
export const mastersMentorshipData = {
  hero: {
    badge: "USA Mentorship Program",
    title: "Excel in Your",
    highlight: "Masters Application",
    desc: "Tailored mentorship for students pursuing graduate programs at top US universities — from program selection and SOP writing to interview preparation and funding strategies.",
  },
  stats: [
    { value: "500+", label: "Masters Placements" },
    { value: "Top 20", label: "Average Program Ranking" },
    { value: "40%", label: "Average Scholarship Secured" },
    { value: "96%", label: "Offer Rate for Mentored Students" },
  ],
  whatIsSection: {
    label: "Program Overview",
    title: "Our Masters",
    highlight: "Mentorship Approach",
    body: "Applying for a Masters degree in the US is highly competitive. Our structured mentorship program pairs you with an experienced mentor who guides every stage of the process — from shortlisting programs to negotiating offers.",
  },
  features: [
    {
      title: "Program Shortlisting",
      desc: "We analyse your undergraduate GPA, GRE/GMAT scores, research experience, and career goals to identify the most suitable Masters programs for your profile.",
    },
    {
      title: "Statement of Purpose Coaching",
      desc: "Your SOP is the most critical component of a graduate application. We help you craft a narrative that clearly demonstrates your research interests, academic background, and future goals.",
    },
    {
      title: "GRE / GMAT Strategy",
      desc: "Personalised study plans, practice resources, and score improvement strategies to help you achieve competitive scores for your target programs.",
    },
    {
      title: "Research Proposal Guidance",
      desc: "For research-based masters programs and PhD tracks, we assist in developing concise, compelling research proposals that align with faculty interests.",
    },
    {
      title: "Recommendation Letter Strategy",
      desc: "Guidance on selecting the right recommenders and coaching them to write letters that highlight exactly the qualities top programs look for.",
    },
    {
      title: "Funding & Fellowship Guidance",
      desc: "We identify teaching assistantships, research fellowships, and external scholarships that can reduce or eliminate tuition and living costs.",
    },
  ],
  processSteps: [
    {
      title: "Profile Evaluation",
      desc: "Comprehensive review of your academic records, test scores, research experience, and career objectives.",
    },
    {
      title: "Program Selection",
      desc: "Building your program list based on fit, ranking, funding availability, and career outcome data.",
    },
    {
      title: "Document Preparation",
      desc: "SOP drafting, CV polishing, and recommendation letter briefing with iterative review cycles.",
    },
    {
      title: "Application Submission",
      desc: "Timely submission of all applications with tracking and follow-up to ensure completeness.",
    },
    {
      title: "Interview Preparation",
      desc: "Mock interviews tailored to each program's typical format and known areas of focus.",
    },
    {
      title: "Offer Evaluation & Negotiation",
      desc: "Helping you compare offers, evaluate funding packages, and negotiate better terms where possible.",
    },
  ],
  faqs: [
    {
      q: "Do I need GRE scores for all US Masters programs?",
      a: "Not necessarily. Many programs have waived GRE requirements, especially post-2020. However, a strong GRE score can still strengthen borderline applications. We advise program-by-program.",
    },
    {
      q: "What is a competitive GPA for top US Masters programs?",
      a: "A GPA of 3.5+ (on a 4.0 scale) is generally competitive for top-tier programs. For highly selective schools like MIT or Carnegie Mellon, 3.7+ is more typical among admitted students.",
    },
    {
      q: "How long does the Masters application process take?",
      a: "Ideally, start 9–12 months before your intended entry date. Applications are due between December and February for September enrollment. Earlier preparation allows more polished documents.",
    },
  ],
};

/* ── 4. Liberal Arts Education ──────────────────────────────── */
export const liberalArtsEducationData = {
  hero: {
    badge: "USA Mentorship Program",
    title: "The Philosophy of",
    highlight: "Liberal Arts Education",
    desc: "Explore the intellectual foundations, pedagogical approach, and transformative outcomes of a liberal arts education — one of America's most distinctive and enduring academic traditions.",
  },
  stats: [
    { value: "400+", label: "Years of Liberal Arts Tradition" },
    { value: "75%", label: "CEOs Educated at LA Institutions" },
    { value: "30+", label: "Academic Disciplines to Explore" },
    { value: "Global", label: "Career Outcomes Across Every Sector" },
  ],
  approach: {
    label: "Educational Philosophy",
    title: "Learning to",
    highlight: "Think, Not Just Know",
    body: "Liberal arts education is built on the conviction that the ability to think critically, communicate clearly, and adapt to new challenges is more valuable than mastery of a single technical skill. Students graduate as thinkers, problem-solvers, and leaders.",
  },
  pillars: [
    {
      title: "Critical Thinking",
      desc: "Students are trained to question assumptions, analyse evidence, and construct well-reasoned arguments across every subject area.",
    },
    {
      title: "Communication Mastery",
      desc: "Extensive writing and speaking requirements ensure graduates can articulate complex ideas clearly and persuasively in any context.",
    },
    {
      title: "Breadth of Knowledge",
      desc: "Distribution requirements expose students to disciplines outside their major, producing graduates who are intellectually versatile and broadly informed.",
    },
    {
      title: "Ethical Reasoning",
      desc: "Coursework in philosophy, ethics, and social justice develops students' capacity to navigate moral complexity in professional and civic life.",
    },
    {
      title: "Cross-Cultural Literacy",
      desc: "Exposure to diverse cultures, histories, and worldviews prepares students for leadership in a globally connected society.",
    },
    {
      title: "Independent Research",
      desc: "Senior thesis and research project requirements give students the tools and confidence to pursue original inquiry in any field.",
    },
  ],
  careerPaths: [
    "Law & Public Policy", "Medicine & Public Health", "Business & Finance",
    "Government & Diplomacy", "Journalism & Media", "Technology & Entrepreneurship",
    "Academia & Research", "Non-Profit & Social Impact", "Arts & Culture",
  ],
  faqs: [
    {
      q: "Will a liberal arts degree limit my career options?",
      a: "The opposite is true. Studies consistently show that liberal arts graduates outperform specialists in leadership roles over a career lifetime. Skills like adaptability, communication, and critical thinking are valued in every sector.",
    },
    {
      q: "Can I pursue a technical career with a liberal arts background?",
      a: "Absolutely. Many liberal arts colleges offer strong computer science, mathematics, and economics programs. Companies like Google and Apple actively recruit liberal arts graduates for their problem-solving and communication skills.",
    },
    {
      q: "What makes liberal arts education different from a traditional university education?",
      a: "The emphasis on breadth, writing-intensive seminars, close faculty mentorship, and the requirement to study across multiple disciplines distinguishes liberal arts education from the more specialized, lecture-based format of large research universities.",
    },
  ],
};

/* ── 5. Acceptance Letters ──────────────────────────────────── */
export const acceptanceLettersData = {
  hero: {
    badge: "USA Mentorship Program",
    title: "Understanding Your",
    highlight: "Acceptance Letters",
    desc: "Learn how to evaluate, compare, and respond to US university acceptance letters — making informed decisions about your most important academic choice.",
  },
  stats: [
    { value: "3–8", label: "Average Offers Received by Our Students" },
    { value: "100%", label: "Guidance Through Every Offer" },
    { value: "May 1", label: "National Decision Deadline (USA)" },
    { value: "$0", label: "Hidden Fees in Our Offer Analysis" },
  ],
  typesSection: {
    label: "Types of Admission",
    title: "Understanding Different",
    highlight: "Admission Decisions",
    body: "US universities use a range of admission decision types. Understanding what each means helps you respond appropriately and make the best choice for your future.",
  },
  decisionTypes: [
    {
      title: "Regular Decision (RD)",
      desc: "The standard non-binding admission cycle. You apply by January and receive decisions by late March or April 1. You have until May 1 to decide.",
    },
    {
      title: "Early Decision (ED)",
      desc: "A binding early application round, typically due November 1–15, with decisions in December. If admitted, you must attend and withdraw all other applications.",
    },
    {
      title: "Early Action (EA)",
      desc: "A non-binding early application round with the same timeline as ED. You receive your decision early but are not obligated to attend.",
    },
    {
      title: "Waitlist",
      desc: "You are not initially admitted but may receive an offer if enrolled students decline their spots. Accepting a waitlist position keeps you in consideration.",
    },
    {
      title: "Deferred",
      desc: "Applied in an early round and deferred to the regular decision pool. Your application will be reviewed again with all RD applicants.",
    },
    {
      title: "Conditional Admission",
      desc: "Admitted contingent on meeting certain conditions, such as achieving a minimum IELTS score or completing a preparatory program.",
    },
  ],
  evaluateChecklist: [
    "Net cost after financial aid and scholarships",
    "Strength and ranking of your specific department/major",
    "Location, campus culture, and student life",
    "Research and internship opportunities",
    "Career outcomes and alumni network quality",
    "Graduate school placement rates",
    "Study abroad and exchange options",
    "On-campus housing availability",
  ],
  faqs: [
    {
      q: "Can I hold multiple acceptances at the same time?",
      a: "Yes, you can hold multiple acceptances until May 1 (National Decision Day). After that, you must commit to one school and withdraw from all others. Holding multiple deposits after May 1 violates the NACAC agreement.",
    },
    {
      q: "Should I always choose the highest-ranked school?",
      a: "Not necessarily. The best fit depends on program strength in your specific field, financial aid offered, campus culture, and your personal goals. A lower-ranked school with a full scholarship may outperform a higher-ranked one with heavy debt.",
    },
    {
      q: "What should I do if I am waitlisted?",
      a: "Send a Letter of Continued Interest (LOCI) to the admissions office expressing your enthusiasm and providing any significant updates since your application. Meanwhile, commit to your best current offer by May 1.",
    },
  ],
};

/* ── 6. Strategy Brainstorm ─────────────────────────────────── */
export const strategyBrainstormData = {
  hero: {
    badge: "USA Mentorship Program",
    title: "Build Your",
    highlight: "Application Strategy",
    desc: "A winning US college application begins with a crystal-clear strategy. Our structured brainstorming sessions help you identify your strengths, clarify your narrative, and map a path to your dream schools.",
  },
  stats: [
    { value: "3×", label: "Higher Success Rate with Clear Strategy" },
    { value: "5–8", label: "Strategy Sessions Per Student" },
    { value: "100%", label: "Personalised Action Plans" },
    { value: "Early", label: "Start = Best Outcomes" },
  ],
  processSection: {
    label: "Our Process",
    title: "How We Build",
    highlight: "Your Winning Strategy",
    body: "Our strategy brainstorm process is a collaborative, structured journey that helps you see yourself the way admissions offices do — and position your application for maximum impact.",
  },
  steps: [
    {
      title: "Deep Profile Audit",
      desc: "We analyse every aspect of your academic record, extracurriculars, leadership, awards, and personal experiences to identify your strongest assets.",
    },
    {
      title: "Core Narrative Development",
      desc: "We help you identify the central thread that ties your experiences together — the story that no other applicant can tell.",
    },
    {
      title: "School List Building",
      desc: "Using your profile, preferences, and admissions data, we construct a balanced list of 10–15 schools across reach, match, and safety categories.",
    },
    {
      title: "Timeline & Milestone Planning",
      desc: "We build a personalised application calendar with clear deadlines for tests, essays, recommendations, and submissions.",
    },
    {
      title: "Differentiation Strategy",
      desc: "We identify ways to stand out — unique essay angles, impactful activity descriptions, and areas where additional achievements can strengthen your file.",
    },
    {
      title: "Risk Assessment",
      desc: "We analyse the risk profile of your list and ensure you have strong safety options so no scenario leaves you without an excellent choice.",
    },
  ],
  faqs: [
    {
      q: "When is the best time to start the strategy brainstorm?",
      a: "The earlier the better. Grade 10 is ideal for starting strategic thinking. Even if you begin in Grade 11, a well-executed strategy can dramatically improve outcomes.",
    },
    {
      q: "How many schools should I apply to?",
      a: "We typically recommend 10–15 schools: 3–4 reach (highly selective), 4–5 match (strong chances), and 3–4 safety (near-certain admission). Quality of applications matters far more than quantity.",
    },
    {
      q: "What if my profile is not competitive for elite schools?",
      a: "Every student has a path to an excellent outcome. We identify the schools where your specific profile is most competitive and build a strategy based on your strengths, not on generic advice.",
    },
  ],
};

/* ── 7. Writing & Application ───────────────────────────────── */
export const writingApplicationData = {
  hero: {
    badge: "USA Mentorship Program",
    title: "Master Your",
    highlight: "Essays & Applications",
    desc: "Exceptional writing is the greatest differentiator in US college applications. Our expert writing coaches help you craft essays that are authentic, compelling, and memorable.",
  },
  stats: [
    { value: "650", label: "Words: Common App Essay Limit" },
    { value: "10+", label: "Essay Drafts Before Final Submission" },
    { value: "100%", label: "Authenticity in Every Essay We Develop" },
    { value: "No", label: "AI-Generated or Ghostwritten Content" },
  ],
  essayTypes: {
    label: "Essay Components",
    title: "Types of",
    highlight: "Application Essays",
    body: "US college applications require multiple essay components, each serving a distinct purpose. Understanding what each essay must accomplish is the foundation of great writing.",
  },
  essays: [
    {
      title: "Common App Personal Statement",
      desc: "Your 650-word main essay submitted to all Common App schools. It should reveal who you are beyond grades and test scores — your values, experiences, and growth.",
    },
    {
      title: "Coalition App Essay",
      desc: "The Coalition Application's equivalent personal essay, used by a different set of selective universities. A similar depth of personal storytelling is required.",
    },
    {
      title: "Why This School Essay",
      desc: "A supplemental essay demonstrating genuine, specific knowledge of and fit with the institution. Vague answers are immediately obvious to admissions officers.",
    },
    {
      title: "Why This Major Essay",
      desc: "Explains your intellectual journey to your chosen field of study. Should be specific, passionate, and grounded in real academic or personal experiences.",
    },
    {
      title: "Extracurricular / Activity Essay",
      desc: "Describes the significance of a particular activity in your life. Should go beyond the achievement itself to reveal character, growth, and meaning.",
    },
    {
      title: "Short Answer Questions",
      desc: "Brief responses (50–250 words) to topics like 'Describe a challenge you faced' or 'What book has influenced you most.' Precision and authenticity matter greatly.",
    },
  ],
  writingProcess: [
    "Brainstorming session to identify powerful essay topics",
    "Outline development and structural planning",
    "First draft with mentor annotation and feedback",
    "Revision cycle: narrative, structure, voice",
    "Line editing: clarity, concision, flow",
    "Final polish and peer review",
    "Plagiarism and authenticity check",
    "Copy-ready final document",
  ],
  faqs: [
    {
      q: "Should I write about an impressive achievement or something personal?",
      a: "The most memorable essays are about personal insight and character, not impressive achievements. A thoughtful essay about an ordinary experience that reveals depth of character consistently outperforms essays that simply list accomplishments.",
    },
    {
      q: "How many revisions will my essay go through?",
      a: "Typically 5–10 revision cycles. Great essays are not written in a single draft. The revision process is where the most important improvements happen.",
    },
    {
      q: "Can I reuse essays across different schools?",
      a: "The personal statement is used across all Common App schools. However, supplemental essays — especially 'Why This School' — must be tailored specifically to each institution. Generic supplementals hurt applications significantly.",
    },
    {
      q: "Is it acceptable to get help with my essays?",
      a: "Yes, working with a mentor or coach is entirely standard and accepted. The key is that the ideas, voice, and content must be genuinely yours. We guide the process but never write your essay for you.",
    },
  ],
};

/* ── 8. College Selection ───────────────────────────────────── */
export const collegeSelectionData = {
  hero: {
    badge: "USA Mentorship Program",
    title: "Find Your",
    highlight: "Perfect College Fit",
    desc: "Choosing the right US college is one of the most consequential decisions of your life. Our evidence-based college selection methodology helps you find the school where you will truly thrive.",
  },
  stats: [
    { value: "4,500+", label: "Accredited Colleges in the USA" },
    { value: "10–15", label: "Schools in Our Recommended Lists" },
    { value: "100%", label: "Data-Driven Selection Process" },
    { value: "Your Fit", label: "The Only Metric That Matters" },
  ],
  selectionSection: {
    label: "Our Methodology",
    title: "How We Find Your",
    highlight: "Best-Fit Colleges",
    body: "We use a multi-dimensional framework to evaluate colleges across academic, cultural, financial, and career-outcome dimensions — ensuring every school on your list is a place where you can genuinely succeed and be happy.",
  },
  selectionFactors: [
    {
      title: "Academic Program Strength",
      desc: "We evaluate departmental faculty, research output, course offerings, and graduate school placement rates for your specific intended major.",
    },
    {
      title: "Admissions Fit",
      desc: "We match your academic profile (GPA, test scores, extracurriculars) to realistic admission probability ranges at each school.",
    },
    {
      title: "Financial Aid & Affordability",
      desc: "We analyse each school's financial aid policies, endowment size, and historical aid packages for international students to project realistic net costs.",
    },
    {
      title: "Campus Culture & Environment",
      desc: "Urban vs. rural, large vs. small, collaborative vs. competitive — we help you understand which campus environment will bring out your best.",
    },
    {
      title: "Career & Graduate Outcomes",
      desc: "We look at graduate school placement, career outcomes by major, alumni network strength, and industry connections in your target field.",
    },
    {
      title: "Location & Lifestyle",
      desc: "Geography matters for internships, industry access, cost of living, and personal wellbeing. We factor location into every recommendation.",
    },
  ],
  selectionTiers: [
    { tier: "Reach", desc: "3–4 schools where your profile is below median but the school is a strong aspiration. Apply strategically.", count: "3–4" },
    { tier: "Match", desc: "4–5 schools where your profile aligns closely with admitted student medians. Strong probability of admission.", count: "4–5" },
    { tier: "Safety", desc: "3–4 schools where your profile exceeds the median and admission is near-certain. Still excellent schools.", count: "3–4" },
  ],
  faqs: [
    {
      q: "Should I only apply to the highest-ranked schools I can get into?",
      a: "Rank is just one factor. A school ranked 50th with a programme perfectly suited to your interests and a full scholarship may serve your goals better than a top-10 school with high debt and a weaker programme in your field.",
    },
    {
      q: "How do I research college culture and fit as an international student?",
      a: "Virtual tours, student blogs, YouTube channels, Reddit communities (r/ApplyingToCollege), and conversations with current international students are excellent resources. We also connect you directly with alumni from your country.",
    },
    {
      q: "Is it worth applying to schools outside the top 50?",
      a: "Absolutely. Many schools ranked 50–150 have world-class programmes in specific fields, generous financial aid for international students, and outstanding career outcomes. Our data-driven approach frequently surfaces these hidden gems.",
    },
  ],
};

/* ── 9. Financial Aid ───────────────────────────────────────── */
export const financialAidData = {
  hero: {
    badge: "USA Mentorship Program",
    title: "Unlock US",
    highlight: "Financial Aid",
    desc: "US universities offer billions of dollars in financial aid each year. Learn how to find, apply for, and maximise financial aid as an international student applying to American colleges.",
  },
  stats: [
    { value: "$250B+", label: "Total US Financial Aid Annually" },
    { value: "60%", label: "Students Receive Some Form of Aid" },
    { value: "Need-Blind", label: "Admission at Select Top Schools" },
    { value: "Full Ride", label: "Possible at 200+ US Institutions" },
  ],
  aidTypes: {
    label: "Aid Categories",
    title: "Types of",
    highlight: "Financial Aid Available",
    body: "US financial aid for international students comes in several forms. Understanding the differences is essential for building an effective funding strategy.",
  },
  aidCategories: [
    {
      title: "Need-Based Institutional Grants",
      desc: "Universities award grants based on demonstrated financial need. These are gifts — they do not need to be repaid. Top schools with large endowments can be remarkably generous.",
    },
    {
      title: "Merit Scholarships",
      desc: "Awarded for academic excellence, artistic talent, athletic achievement, or other criteria. Available at most US institutions, including many schools not in the top 20.",
    },
    {
      title: "Need-Blind Admissions",
      desc: "A select group of highly endowed universities do not consider your ability to pay when making the admissions decision, then provide full demonstrated need in your financial aid package.",
    },
    {
      title: "External Scholarships",
      desc: "Scholarships offered by governments, foundations, corporations, and professional organisations. Our mentors identify all opportunities relevant to your country and field of study.",
    },
    {
      title: "Work-Study Programs",
      desc: "On-campus employment opportunities available to students on F-1 visas. Typically 10–20 hours per week, helping offset living expenses.",
    },
    {
      title: "Departmental Fellowships",
      desc: "Graduate students in particular can access teaching assistantships (TAs) and research assistantships (RAs) that cover full tuition and provide a living stipend.",
    },
  ],
  needBlindSchools: [
    "MIT", "Harvard University", "Yale University",
    "Princeton University", "Amherst College", "Dartmouth College",
    "Columbia University", "University of Pennsylvania",
  ],
  faqs: [
    {
      q: "Can international students get financial aid at US universities?",
      a: "Yes, though it varies significantly by institution. Some schools like MIT, Harvard, and Princeton meet 100% of demonstrated financial need for international students. Others offer merit scholarships regardless of nationality.",
    },
    {
      q: "What is the CSS Profile and do international students need to submit it?",
      a: "The CSS Profile is a detailed financial aid application used by many private US universities to determine institutional aid eligibility. Most selective schools require international students to submit it alongside the FAFSA or its equivalent.",
    },
    {
      q: "If I receive financial aid, can I lose it in subsequent years?",
      a: "Most institutional aid is renewable each year provided you maintain satisfactory academic progress and your family's financial circumstances do not change significantly. We advise you on the conditions attached to every aid package.",
    },
    {
      q: "Does applying for financial aid hurt my chances of admission?",
      a: "At need-blind institutions, no. At need-aware institutions, it can marginally affect borderline cases. We advise you school-by-school on the financial aid policies and how they should factor into your application strategy.",
    },
  ],
};

/* ── 10. Post Graduate Funding ──────────────────────────────── */
export const postGraduateFundingData = {
  hero: {
    badge: "USA Mentorship Program",
    title: "Fund Your",
    highlight: "Graduate Education",
    desc: "Comprehensive guidance on funding your US graduate degree — from fellowships and assistantships to external scholarships and loan strategies for international students.",
  },
  stats: [
    { value: "70%", label: "STEM PhD Students Fully Funded" },
    { value: "$30K+", label: "Average TA/RA Annual Stipend" },
    { value: "500+", label: "Graduate Fellowships Available" },
    { value: "Our", label: "Mentors Know Where to Find Them" },
  ],
  fundingSection: {
    label: "Funding Landscape",
    title: "Graduate Funding",
    highlight: "Opportunities Available",
    body: "Graduate education in the US offers substantially more funding opportunities than undergraduate study. Understanding the landscape and strategically targeting funded programs is the key to a debt-free graduate degree.",
  },
  fundingTypes: [
    {
      title: "Teaching Assistantships (TA)",
      desc: "Graduate students teach undergraduate courses or labs in exchange for full tuition waiver and a monthly stipend. Common in humanities, social sciences, and sciences.",
    },
    {
      title: "Research Assistantships (RA)",
      desc: "Work as a research assistant for a faculty member's grant-funded project. Covers full tuition and provides a stipend. Most common in STEM and engineering fields.",
    },
    {
      title: "University Fellowships",
      desc: "Competitive merit awards granted by universities to exceptional incoming graduate students. No work requirement — pure academic achievement recognition.",
    },
    {
      title: "Fulbright Program",
      desc: "The US government's flagship international educational exchange program. Highly competitive but covers full tuition, living expenses, and health insurance.",
    },
    {
      title: "NSF, NIH & Federal Grants",
      desc: "US federal agencies fund research across every discipline. Graduate students can apply directly or benefit from faculty grants where they serve as RAs.",
    },
    {
      title: "External Foundation Scholarships",
      desc: "Hundreds of private foundations offer scholarships to graduate students based on field of study, nationality, demographic criteria, and research focus.",
    },
  ],
  fundingTimeline: [
    "Research fully-funded programs before applying (September–October)",
    "Contact potential faculty advisors and express research interest (October–November)",
    "Submit applications with funding preference indicated (December–January)",
    "Apply for external fellowships with separate deadlines (October–February)",
    "Evaluate funding packages alongside admission offers (March–April)",
    "Negotiate funding terms where applicable (April)",
    "Accept offer and secure additional external awards (May–June)",
  ],
  faqs: [
    {
      q: "Is it possible to get a fully-funded PhD in the USA?",
      a: "Yes. In most STEM fields, fully funded PhDs — covering tuition and providing a living stipend through TA or RA positions — are the norm rather than the exception. In humanities and social sciences, funding is competitive but widely available at top programs.",
    },
    {
      q: "Can international students receive US government fellowships?",
      a: "Some US federal fellowships are open to international students, including the Fulbright Foreign Student Program (funded by the US government for non-US citizens) and certain NSF programs. Eligibility varies by program and country.",
    },
    {
      q: "How do I find out if a specific Masters program is funded?",
      a: "Look at the department's website for funding information, contact the graduate admissions office directly, and reach out to current graduate students. Our mentors maintain up-to-date information on funding availability across hundreds of programs.",
    },
    {
      q: "What is the typical TA/RA stipend in the USA?",
      a: "Stipends vary significantly by institution, field, and location. STEM fields at research universities typically offer $25,000–$40,000 per year. Humanities stipends are often lower, at $18,000–$28,000. Cost of living in the program's city is an important factor to consider.",
    },
  ],
};
