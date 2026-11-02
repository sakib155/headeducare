/* Registry of every admin-manageable background image slot.
   Each slot has a settings key and a fallback asset used until an
   image is uploaded (or if the backend is unreachable). */

export const BACKGROUND_SLOTS = [
  { key: "bg_home_hero", label: "Home - Hero", fallback: "/assets/prettiest-college-campuses-stanford-university-1592777646.avif" },
  { key: "bg_home_cta", label: "Home - CTA Banner", fallback: "/assets/prettiest-college-campuses-georgetown-1592777619.avif" },
  { key: "bg_about", label: "About Page - Hero", fallback: "/assets/prettiest-college-campuses-university-of-chicago-1592777651.avif" },
  { key: "bg_services", label: "Services Page - Hero", fallback: "/assets/prettiest-college-campuses-dartmouth-college-1592777600.avif" },
  { key: "bg_service_default", label: "Service Detail Pages - Hero", fallback: "/assets/prettiest-college-campuses-san-diego-state-university-1592777643.avif" },
  { key: "bg_free_consultation", label: "Free Consultation Page - Hero", fallback: "/assets/prettiest-college-campuses-princeton-1592777643.avif" },
  { key: "bg_our_people", label: "Our People - Hero", fallback: "/assets/prettiest-college-campuses-notre-dame-university-1592777643.avif" },
  { key: "bg_all_countries", label: "Study Destinations Page - Hero", fallback: "/assets/prettiest-college-campuses-stanford-university-1592777646.avif" },
  { key: "bg_mentor_default", label: "Mentorship Pages - Hero", fallback: "/assets/prettiest-college-campuses-university-of-missouri-1592777652.avif" },
  { key: "bg_study_mbbs", label: "Study MBBS Page - Hero", fallback: "/assets/prettiest-college-campuses-m-i-t-1592777642.avif" },
  { key: "bg_mbbs_detail", label: "MBBS Detail Pages - Hero (default)", fallback: "/assets/howard-u-1594329564.avif" },
  { key: "bg_we_will_provide", label: "We Will Provide Page - Hero", fallback: "/assets/prettiest-college-campuses-berry-college-1592777599.avif" },
  { key: "bg_elite_school", label: "Elite School Admission - Hero", fallback: "/assets/prettiest-college-campuses-m-i-t-1592777642.avif" },
  { key: "bg_russell_group", label: "Russell Group Application - Hero", fallback: "/assets/prettiest-college-campuses-notre-dame-university-1592777643.avif" },
  { key: "bg_legal_privacy", label: "Privacy Policy - Hero", fallback: "/assets/prettiest-college-campuses-syracuse-1592777648.avif" },
  { key: "bg_legal_terms", label: "Terms of Service - Hero", fallback: "/assets/hampton-university-1594329567.avif" },
  { key: "bg_legal_refund", label: "Refund Policy - Hero", fallback: "/assets/prettiest-college-campuses-christopher-newport-university-1592777622.avif" },
  { key: "bg_legal_disclaimer", label: "Disclaimer - Hero", fallback: "/assets/prettiest-college-campuses-berry-college-1592777599.avif" },
];

export const BACKGROUND_FALLBACKS = Object.fromEntries(
  BACKGROUND_SLOTS.map((s) => [s.key, s.fallback]),
);
