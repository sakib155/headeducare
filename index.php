<?php
// ─────────────────────────────────────────────────────────────────────────────
// PHP SSR Front Controller — injects route-specific SEO meta tags at request
// time. No build step needed for SEO changes — update the $ROUTES array and
// changes reflect immediately on every page load.
// ─────────────────────────────────────────────────────────────────────────────

// ── Static assets bypass ────────────────────────────────────────────────────
$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$ext = strtolower(pathinfo($uri, PATHINFO_EXTENSION));
if (in_array($ext, ['css','js','png','jpg','jpeg','gif','ico','svg','webp','avif','woff2','woff','ttf','json','xml','txt','pdf'])) {
  return false; // let Apache serve the file directly
}
if (preg_match('#^/assets/#', $uri)) {
  return false;
}

// ── Route ───────────────────────────────────────────────────────────────────
$route = rtrim($uri, '/');
if ($route === '') $route = '/';

// ── SEO data ────────────────────────────────────────────────────────────────
$ROUTES = [
  '/' => [
    'title' => 'Head Educare | Study Abroad Consultant in Bangladesh',
    'desc'  => 'Head Educare is Bangladesh\'s trusted education consultancy helping students pursue higher education across the globe with expert guidance on university selection, scholarships, admissions, and visa processing.',
    'keywords' => 'study abroad from Bangladesh, educational consultancy Bangladesh, Head Educare, study abroad consultancy, admission support Bangladesh, university application help, visa assistance Dhaka',
    'canonical' => 'https://head educare.com/',
    'og_type' => 'website',
    'schema' => [
      '@context' => 'https://schema.org',
      '@type' => 'Organization',
      'name' => 'Head Educare',
      'url' => 'https://head educare.com',
      'logo' => 'https://head educare.com/HEAD_horizontal.png',
      'description' => 'Bangladesh\'s trusted education consultancy for international studies.',
      'address' => ['@type' => 'PostalAddress', 'street' => 'House-52, Road-4, Block-C, Banani', 'locality' => 'Dhaka', 'region' => 'Dhaka Division', 'postalCode' => '1213', 'country' => 'Bangladesh'],
      'contactPoint' => ['@type' => 'ContactPoint', 'telephone' => '+8801XXXXXXXXX', 'contactType' => 'customer service'],
      'sameAs' => ['https://wa.me/8801XXXXXXXXX', 'https://facebook.com/headedu'],
      'areaServed' => ['@type' => 'Country', 'name' => 'Bangladesh'],
    ],
  ],
  '/about' => [
    'title' => 'About Head Educare | Head Educare',
    'desc'  => 'Head Educare is a premier international education consultancy in Bangladesh dedicated to helping students gain admission to the world\'s leading universities with over 10 years of experience.',
    'keywords' => 'about Head Educare, education consultant Dhaka, study abroad agency Bangladesh',
    'canonical' => 'https://head educare.com/about',
    'og_type' => 'website',
  ],
  '/about/our-people' => [
    'title' => 'Meet Our Team | Head Educare',
    'desc'  => 'Meet the experienced team at Head Educare: dedicated professionals guiding Bangladeshi students through international university admissions and career planning.',
    'keywords' => 'Head Educare team, education counselors Dhaka, study abroad advisors Bangladesh',
  ],
  '/about/we-will-provide' => [
    'title' => 'Everything We Provide | Head Educare',
    'desc'  => 'Head Educare provides comprehensive support for students from Bangladesh pursuing higher education globally, from profile evaluation to visa assistance.',
    'keywords' => 'services for study abroad, what we offer, student support services Bangladesh',
  ],
  '/services' => [
    'title' => 'Our Services | Head Educare',
    'desc'  => 'Head Educare offers end-to-end study abroad services for Bangladeshi students: admission support, SOP drafting, visa assistance, scholarship guidance, test preparation, and more.',
    'keywords' => 'study abroad services, admission consultancy, visa processing Bangladesh, IELTS coaching Dhaka',
    'og_type' => 'website',
  ],
  '/contact' => [
    'title' => 'Contact Us | Head Educare',
    'desc'  => 'Contact Head Educare in Dhaka, Bangladesh for expert guidance on studying abroad. Call or WhatsApp for a free consultation on university admissions and visas.',
    'keywords' => 'contact Head Educare, study abroad consultant Dhaka, education consultancy phone number, free consultation Bangladesh',
  ],
  '/freeconsulation' => [
    'title' => 'Free Consultation | Head Educare',
    'desc'  => 'Book your free consultation with Head Educare in Dhaka. Our experts will guide you through university selection, applications, scholarships, and visa processes.',
    'keywords' => 'free study abroad consultation, book appointment Dhaka, education counseling Bangladesh',
  ],
  '/allcountries/allcountry' => [
    'title' => 'Study Destinations | Head Educare',
    'desc'  => 'Discover the best countries to study abroad from Bangladesh: USA, UK, Canada, Australia, Europe, Malaysia, South Korea. Compare tuition, visa requirements, and scholarships.',
    'keywords' => 'study abroad destinations, best countries for Bangladeshi students, USA UK Canada Australia study',
  ],
  '/courses' => [
    'title' => 'SAT & PTE Courses | Head Educare',
    'desc'  => 'Prepare for Digital SAT and PTE with Head Educare\'s expert-led coaching in Dhaka. AI-powered practice, interactive lessons, and proven score improvement strategies.',
    'keywords' => 'SAT coaching Dhaka, PTE preparation Bangladesh, IELTS coaching, English language test training',
  ],
  '/study-mbbs' => [
    'title' => 'Study MBBS Abroad | Head Educare',
    'desc'  => 'Pursue your dream of becoming a doctor with Head Educare. MBBS programs in Hungary, Russia, Kyrgyzstan, Malaysia, and Georgia for Bangladeshi students at affordable tuition.',
    'keywords' => 'MBBS abroad for Bangladeshi students, study medicine overseas, medical school admission Bangladesh, MBBS Hungary Russia',
  ],
  '/legal/termsService' => [
    'title' => 'Terms of Service | Head Educare',
    'desc'  => 'Terms and conditions for using Head Educare services and website. Read our service agreement, payment terms, and client obligations.',
    'keywords' => 'terms of service, Head Educare terms, consultancy agreement',
  ],
  '/legal/privacyPolicy' => [
    'title' => 'Privacy Policy | Head Educare',
    'desc'  => 'Privacy policy explaining how Head Educare collects, uses, and protects personal information of students from Bangladesh.',
    'keywords' => 'privacy policy, data protection, student privacy Bangladesh',
  ],
  '/legal/refundPolicy' => [
    'title' => 'Refund Policy | Head Educare',
    'desc'  => 'Refund policy for Head Educare services in Bangladesh. Clear terms on fee refunds, cancellations, and service disputes.',
    'keywords' => 'refund policy, cancellation terms, fee refund Bangladesh',
  ],
  '/legal/disclaimer' => [
    'title' => 'Disclaimer | Head Educare',
    'desc'  => 'Disclaimer regarding information accuracy, visa guarantees, and university admission assurances provided by Head Educare to Bangladeshi students.',
    'keywords' => 'disclaimer, service guarantee, visa success disclaimer',
  ],
  '/services/admission-support' => [
    'title' => 'Admission Support | Head Educare',
    'desc'  => 'Expert admission support for Bangladeshi students applying to universities abroad. University selection, application preparation, document review, and enrollment assistance.',
    'keywords' => 'university admission help Bangladesh, college application assistance, study abroad application process',
  ],
  '/services/profile-evaluation' => [
    'title' => 'Free Profile Evaluation | Head Educare',
    'desc'  => 'Know exactly where you stand with a free profile evaluation from Head Educare. Get personalized university shortlisting based on your academic background and goals.',
    'keywords' => 'profile evaluation for study abroad, university shortlisting Bangladesh, academic assessment Dhaka',
  ],
  '/services/sop-essay-drafting' => [
    'title' => 'SOP & Essay Drafting | Head Educare',
    'desc'  => 'Expert Statement of Purpose and essay drafting for Bangladeshi students applying to universities in USA, UK, Canada, Australia, and Europe.',
    'keywords' => 'SOP writing Bangladesh, statement of purpose help, university essay drafting Dhaka, application essay service',
  ],
  '/services/common-essay' => [
    'title' => 'Common Essay Drafting | Head Educare',
    'desc'  => 'Expert Common App essay drafting for US university admissions. Stand out with compelling personal statements crafted by experienced mentors.',
    'keywords' => 'Common App essay help, college essay writing Bangladesh, US university application essay',
  ],
  '/services/scholarship-guidance' => [
    'title' => 'Scholarship Guidance | Head Educare',
    'desc'  => 'Fund your dreams with scholarship guidance from Head Educare. Identify and apply for fully funded scholarships, merit awards, and financial aid opportunities.',
    'keywords' => 'scholarships for Bangladeshi students, fully funded scholarships, financial aid study abroad, scholarship application help',
  ],
  '/services/complete-application-help' => [
    'title' => 'Complete Application Help | Head Educare',
    'desc'  => 'End-to-end application support for Bangladeshi students studying abroad. From university selection to visa processing, we handle everything.',
    'keywords' => 'complete study abroad application, full admission support Bangladesh, end to end consultancy',
  ],
  '/services/financial-documentation' => [
    'title' => 'Financial Documentation | Head Educare',
    'desc'  => 'Secure your visa with perfect financial documentation. Expert guidance on bank statements, sponsor letters, education loans, and financial proof for embassy applications.',
    'keywords' => 'financial docs for visa, bank statement for study abroad, education loan Bangladesh, sponsor letter guidance',
  ],
  '/services/visa-documentation' => [
    'title' => 'Visa Documentation | Head Educare',
    'desc'  => 'Perfect your visa documentation with expert guidance from Head Educare. Comprehensive checklists, document review, and application support for student visas.',
    'keywords' => 'student visa documents, visa application checklist, study visa documentation Bangladesh',
  ],
  '/services/visa-application' => [
    'title' => 'Visa Application | Head Educare',
    'desc'  => 'Secure your student visa with expert guidance. Head Educare assists Bangladeshi students with visa applications for USA, UK, Canada, Australia, and Schengen countries.',
    'keywords' => 'student visa Bangladesh, visa application help Dhaka, study visa processing, F1 visa UK visa Canada visa',
  ],
  '/services/quick-appointment' => [
    'title' => 'Quick Appointment | Head Educare',
    'desc'  => 'Get expert guidance in minutes. Book a quick appointment with Head Educare\'s counselors in Dhaka for personalized study abroad advice.',
    'keywords' => 'quick appointment Dhaka, urgent study abroad consultation, fast education counseling',
  ],
  '/services/health-insurance' => [
    'title' => 'Health Insurance | Head Educare',
    'desc'  => 'Overseas health insurance for Bangladeshi students studying abroad. Comprehensive medical coverage compliant with university and visa requirements.',
    'keywords' => 'student health insurance, medical insurance study abroad, overseas health coverage Bangladesh',
  ],
  '/services/student-accommodation' => [
    'title' => 'Student Accommodation | Head Educare',
    'desc'  => 'Find affordable and trusted student accommodation abroad. Head Educare helps Bangladeshi students secure housing near their university campus.',
    'keywords' => 'student housing abroad, accommodation for international students, dormitory booking Bangladesh',
  ],
  '/services/education-loan-support' => [
    'title' => 'Education Loan | Head Educare',
    'desc'  => 'Secure your future with expert education loan guidance. Head Educare partners with banks and NBFCs to help Bangladeshi students fund their studies abroad.',
    'keywords' => 'education loan Bangladesh, study abroad loan, student finance, bank loan for overseas studies',
  ],
  '/services/visa-mock-interview' => [
    'title' => 'Visa Mock Interview | Head Educare',
    'desc'  => 'Ace your visa interview with confident preparation. Realistic mock interviews, personalized feedback, and coaching for student visa success.',
    'keywords' => 'visa interview preparation, mock visa interview Dhaka, student visa coaching, embassy interview tips',
  ],
  '/services/scholarship-support' => [
    'title' => 'Scholarship Support | Head Educare',
    'desc'  => 'Expert scholarship support for Bangladeshi students. Identify, apply, and secure funding for your international education with Head Educare.',
    'keywords' => 'scholarship support Bangladesh, funding for study abroad, merit scholarship application, financial aid guidance',
  ],
  '/services/visa-services' => [
    'title' => 'Visa Services | Head Educare',
    'desc'  => 'Hassle-free visa services for Bangladeshi students. Complete visa processing support for USA, UK, Canada, Australia, Europe, and Malaysia.',
    'keywords' => 'student visa services, visa processing Bangladesh, study abroad visa help, embassy application support',
  ],
  '/services/us-mentorship' => [
    'title' => 'US Mentorship Program | Head Educare',
    'desc'  => 'Holistic Ivy League and elite college mentorship for Bangladeshi students. Expert guidance on US university admissions, essays, extracurriculars, and financial aid.',
    'keywords' => 'US university admission Bangladesh, Ivy League mentorship, American college application help, USA study guidance',
  ],
  '/mentorship' => [
    'title' => 'US Mentorship Program | Head Educare',
    'desc'  => 'Holistic Ivy League and elite college mentorship for Bangladeshi students aspiring to study in the United States.',
    'keywords' => 'US mentorship Bangladesh, study in USA guidance, American university application support',
  ],
  '/services/general-documents-checklist' => [
    'title' => 'Documents Checklist | Head Educare',
    'desc'  => 'Complete documents checklist for Bangladeshi students preparing study abroad applications. Academic, financial, identity, and visa documents.',
    'keywords' => 'study abroad documents checklist, application documents Bangladesh, visa required documents, student paperwork',
  ],
  '/services/academic-qualifications' => [
    'title' => 'Academic Qualifications | Head Educare',
    'desc'  => 'Academic qualifications and standardized test requirements for Bangladeshi students applying to international universities. GPA, IELTS, TOEFL, SAT, GRE, GMAT.',
    'keywords' => 'academic requirements study abroad, GPA conversion Bangladesh, IELTS TOEFL SAT GRE GMAT, entry requirements universities',
  ],
  '/services/test-preparation' => [
    'title' => 'Test Preparation | Head Educare',
    'desc'  => 'Transform your performance with expert test preparation. IELTS, TOEFL, PTE, SAT, GRE, and GMAT coaching in Dhaka with proven results.',
    'keywords' => 'IELTS coaching Dhaka, TOEFL preparation Bangladesh, SAT training, PTE coaching, GRE GMAT classes',
  ],
  '/mentorship/liberal-arts-college' => [
    'title' => 'Liberal Arts College Admission | Head Educare',
    'desc'  => 'Expert guidance on US liberal arts college admissions for Bangladeshi students. Discover the transformative power of a liberal arts education.',
    'keywords' => 'liberal arts college USA, US college admission Bangladesh, liberal arts education benefits',
  ],
  '/mentorship/liberal-arts-education' => [
    'title' => 'Liberal Arts Education | Head Educare',
    'desc'  => 'Discover the power of a liberal arts education in the USA. Understand the intellectual foundations and career outcomes for Bangladeshi students.',
    'keywords' => 'liberal arts explained, US education system, liberal arts career Bangladesh',
  ],
  '/mentorship/elite-school-admission' => [
    'title' => 'Elite School Admission | Head Educare',
    'desc'  => 'Expert guidance for elite US school and Ivy League admissions. Head Educare mentors Bangladeshi students through competitive application processes.',
    'keywords' => 'Ivy League admission Bangladesh, Harvard Yale Princeton, elite US university application, competitive college admission',
  ],
  '/mentorship/masters-mentorship-program' => [
    'title' => 'Masters Mentorship | Head Educare',
    'desc'  => 'Tailored mentorship for Bangladeshi students pursuing US graduate programs. Full support from program selection to interview preparation and funding.',
    'keywords' => 'Masters in USA Bangladesh, graduate school application, US master\'s program guidance, postgraduate admission help',
  ],
  '/mentorship/acceptance-letters' => [
    'title' => 'Acceptance Letters | Head Educare',
    'desc'  => 'Learn how to evaluate, compare, and respond to US university acceptance letters. Expert guidance on making informed admission decisions.',
    'keywords' => 'college acceptance letter, US university offer evaluation, admission decision help Bangladesh',
  ],
  '/mentorship/strategy-brainstorm' => [
    'title' => 'Strategy Brainstorm | Head Educare',
    'desc'  => 'Collaborative strategy sessions to position your US university application for maximum impact. Stand out to admissions committees.',
    'keywords' => 'application strategy, US college strategy session, admissions positioning Bangladesh',
  ],
  '/mentorship/writing-application' => [
    'title' => 'Writing and Application | Head Educare',
    'desc'  => 'Expert writing and application guidance for US university admissions. Essays, activity descriptions, and application presentation.',
    'keywords' => 'US college essay writing, application presentation, Common App activities Bangladesh',
  ],
  '/mentorship/college-selection' => [
    'title' => 'College Selection | Head Educare',
    'desc'  => 'Multi-dimensional college selection guidance for Bangladeshi students. Academic fit, campus culture, financial aid, and career outcomes analyzed.',
    'keywords' => 'college selection criteria, US university shortlisting, best fit university Bangladesh',
  ],
  '/mentorship/financial-aid' => [
    'title' => 'Financial Aid Guidance | Head Educare',
    'desc'  => 'Comprehensive financial aid guidance for US university admissions. Need-based aid, merit scholarships, and funding strategies for Bangladeshi students.',
    'keywords' => 'US university financial aid, need based scholarship Bangladesh, college funding USA, international student aid',
  ],
  '/mentorship/post-graduate-funding' => [
    'title' => 'Post Graduate Funding | Head Educare',
    'desc'  => 'Comprehensive guidance on funding US graduate degrees. Fellowships, assistantships, scholarships, and loan strategies for Bangladeshi students.',
    'keywords' => 'graduate school funding, PhD funding USA, research assistantship, teaching assistantship Bangladesh',
  ],
];

// ── Apply SEO meta tags ──────────────────────────────────────────────────────
$meta = $ROUTES[$route] ?? null;

// Read the built React app HTML
$html = file_get_contents(__DIR__ . '/index.html');
if (!$html) { http_response_code(500); die('index.html not found. Run npm run build first.'); }

if ($meta) {
  $siteUrl = 'https://' . ($_SERVER['HTTP_HOST'] ?? 'headedu.com');
  $fullTitle = $meta['title'];
  $desc = addslashes($meta['desc']);
  $keywords = addslashes($meta['keywords'] ?? '');
  $canonical = $meta['canonical'] ?? $siteUrl . $route;
  $ogType = $meta['og_type'] ?? 'website';
  $ogImage = $siteUrl . '/og-image.jpg';

  // Build all meta tags
  $extraMeta = '
    <meta name="description" content="' . $desc . '" />
    <meta name="keywords" content="' . $keywords . '" />
    <meta name="author" content="Head Educare" />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="' . $canonical . '" />
    <meta property="og:type" content="' . $ogType . '" />
    <meta property="og:url" content="' . $canonical . '" />
    <meta property="og:title" content="' . $fullTitle . '" />
    <meta property="og:description" content="' . $desc . '" />
    <meta property="og:image" content="' . $ogImage . '" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="' . $fullTitle . '" />
    <meta name="twitter:description" content="' . $desc . '" />
    <script type="application/ld+json">' . json_encode(isset($meta['schema']) ? $meta['schema'] : [
      '@context' => 'https://schema.org',
      '@type' => 'WebPage',
      'name' => $fullTitle,
      'description' => $meta['desc'],
      'publisher' => ['@type' => 'Organization', 'name' => 'Head Educare'],
    ]) . '</script>';

  $html = str_replace('<title>Head Educare', '<title>' . $fullTitle, $html);
  $html = preg_replace('/<meta name="description"[^>]*\/?>/', $extraMeta, $html, 1);
}

header('Content-Type: text/html; charset=utf-8');
echo $html;