// Unified API Client for Head Edu Care cPanel Integration
// Handles requests to PHP/MySQL backend with graceful mock fallbacks

const API_BASE = '/api';

// Centeralized Fallback/Mock Data (used if server is offline or not configured yet)
export const FALLBACK_SERVICES = [
  {
    id: "1",
    title: "Study Abroad",
    icon: "school",
    description: "Comprehensive guidance from university selection to application and enrollment at top global institutions in Australia, UK, USA, and Canada.",
    display_order: 1
  },
  {
    id: "2",
    title: "Migration Services",
    icon: "public",
    description: "Expert legal pathways for permanent residency, work permits, and family visas. Our certified agents ensure your application is watertight.",
    display_order: 2
  },
  {
    id: "3",
    title: "Visa Assistance",
    icon: "description",
    description: "High-success rate documentation support and rigorous interview preparation sessions to maximize your chances of approval.",
    display_order: 3
  },
  {
    id: "4",
    title: "Test Preparation",
    icon: "quiz",
    description: "Expert coaching for IELTS, TOEFL, PTE, GRE, GMAT, and SAT with proven score improvement strategies.",
    display_order: 4
  },
  {
    id: "5",
    title: "Career Counseling",
    icon: "work",
    description: "Personalized career guidance to align your education with long-term professional goals worldwide.",
    display_order: 5
  },
  {
    id: "6",
    title: "Scholarship Guidance",
    icon: "emoji_events",
    description: "Identify and apply for scholarships to reduce your financial burden and study at top institutions.",
    display_order: 6
  },
  {
    id: "7",
    title: "US Mentorship",
    icon: "workspace_premium",
    description: "Holistic guidance from experienced liberal arts' graduates and former admissions officers to build standout applications.",
    display_order: 7
  }
];

export const FALLBACK_COUNTRIES = [
  {
    id: "1",
    name: "Australia",
    flag_url: "🇦🇺",
    route: "/destination/australia",
    image_url: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=800",
    description: "World-class education with excellent post-study work opportunities.",
    cost_info: "20,000 - 45,000 AUD/year",
    visa_info: "Subclass 500 Student Visa",
    popular_courses: ["Business", "IT", "Engineering", "Nursing"],
    is_active: true,
    display_order: 1
  },
  {
    id: "2",
    name: "United Kingdom",
    flag_url: "🇬🇧",
    route: "/destination/uk",
    image_url: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800",
    description: "Home to the most prestigious universities in the world.",
    cost_info: "15,000 - 35,000 GBP/year",
    visa_info: "Student Route Visa",
    popular_courses: ["Business Management", "Finance", "Law", "Medicine"],
    is_active: true,
    display_order: 2
  },
  {
    id: "3",
    name: "Canada",
    flag_url: "🇨🇦",
    route: "/destination/canada",
    image_url: "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=800",
    description: "Affordable education with excellent immigration pathways.",
    cost_info: "15,000 - 35,000 CAD/year",
    visa_info: "Study Permit",
    popular_courses: ["Computer Science", "Engineering", "MBA", "Hospitality"],
    is_active: true,
    display_order: 3
  },
  {
    id: "4",
    name: "United States",
    flag_url: "🇺🇸",
    route: "/destination/usa",
    image_url: "https://images.unsplash.com/photo-1508433957232-3107f5fd5995?w=800",
    description: "World leader in higher education and research.",
    cost_info: "25,000 - 60,000 USD/year",
    visa_info: "F-1 Student Visa",
    popular_courses: ["STEM", "Data Science", "Business", "Arts"],
    is_active: true,
    display_order: 4
  },
  {
    id: "5",
    name: "Germany",
    flag_url: "🇩🇪",
    route: "/destination/germany",
    image_url: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800",
    description: "Tuition-free public universities with strong programs.",
    cost_info: "No tuition (Public)",
    visa_info: "Schengen National Visa",
    popular_courses: ["Automotive Engineering", "Physics", "Computer Science"],
    is_active: true,
    display_order: 5
  },
  {
    id: "6",
    name: "Japan",
    flag_url: "🇯🇵",
    route: "/destination/japan",
    image_url: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800",
    description: "Cutting-edge technology education with scholarships.",
    cost_info: "500,000 - 1,000,000 JPY/year",
    visa_info: "College Student Visa",
    popular_courses: ["Robotics", "Japanese Language", "Anime"],
    is_active: true,
    display_order: 6
  }
];

export const FALLBACK_TESTIMONIALS = [
  {
    id: "1",
    student_name: "Rahim Ahmed",
    photo_url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200",
    university: "University of Melbourne",
    country: "Australia",
    quote: "Head Edu Care made my dream of studying in Australia a reality. Their guidance was exceptional from start to finish!",
    is_featured: true
  },
  {
    id: "2",
    student_name: "Fatima Khan",
    photo_url: "https://images.unsplash.com/photo-1706256446485-58bedf9cbf97?w=200",
    university: "University of Toronto",
    country: "Canada",
    quote: "The team helped me secure a full scholarship at UofT. Their expertise is unmatched. Truly life-changing!",
    is_featured: true
  },
  {
    id: "3",
    student_name: "Sakib Hasan",
    photo_url: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200",
    university: "Imperial College London",
    country: "United Kingdom",
    quote: "From IELTS prep to visa approval, Head Edu Care handled everything professionally. Now at Imperial!",
    is_featured: true
  },
  {
    id: "4",
    student_name: "Nadia Islam",
    photo_url: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200",
    university: "MIT",
    country: "United States",
    quote: "I never thought I could get into MIT, but the counselors believed in me and guided me every step!",
    is_featured: true
  }
];

export const FALLBACK_STATS = {
  partner_universities: "500+",
  visa_success_rate: "98%",
  students_placed: "15K+",
  years_experience: "12+",
};

// Generic JSON fetcher
async function request(url, options = {}) {
  try {
    const res = await fetch(url, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });
    if (!res.ok) {
      const err = await res.json().catch(() => ({ error: 'Request failed' }));
      throw new Error(err.error || `HTTP error ${res.status}`);
    }
    return await res.json();
  } catch (error) {
    console.warn(`API Error for ${url}:`, error.message);
    throw error;
  }
}

export const api = {
  // --- Services ---
  async fetchServices() {
    try {
      return await request(`${API_BASE}/services.php`);
    } catch {
      return FALLBACK_SERVICES;
    }
  },

  async saveService(serviceData) {
    return await request(`${API_BASE}/services.php`, {
      method: 'POST',
      body: JSON.stringify(serviceData)
    });
  },

  async deleteService(id) {
    return await request(`${API_BASE}/services.php?id=${id}`, {
      method: 'DELETE'
    });
  },

  // --- Countries ---
  async fetchCountries() {
    try {
      return await request(`${API_BASE}/countries.php`);
    } catch {
      return FALLBACK_COUNTRIES;
    }
  },

  async saveCountry(countryData) {
    return await request(`${API_BASE}/countries.php`, {
      method: 'POST',
      body: JSON.stringify(countryData)
    });
  },

  async deleteCountry(id) {
    return await request(`${API_BASE}/countries.php?id=${id}`, {
      method: 'DELETE'
    });
  },

  // --- Testimonials ---
  async fetchTestimonials() {
    try {
      return await request(`${API_BASE}/testimonials.php`);
    } catch {
      return FALLBACK_TESTIMONIALS;
    }
  },

  async saveTestimonial(testimonialData) {
    return await request(`${API_BASE}/testimonials.php`, {
      method: 'POST',
      body: JSON.stringify(testimonialData)
    });
  },

  async deleteTestimonial(id) {
    return await request(`${API_BASE}/testimonials.php?id=${id}`, {
      method: 'DELETE'
    });
  },

  // --- Site Settings ---
  async fetchSettings() {
    try {
      return await request(`${API_BASE}/settings.php`);
    } catch {
      return FALLBACK_STATS;
    }
  },

  async saveSettings(settingsObj) {
    return await request(`${API_BASE}/settings.php`, {
      method: 'POST',
      body: JSON.stringify(settingsObj)
    });
  },

  // --- Leads ---
  async submitLead(leadData) {
    // Falls back to logging if API is not running
    try {
      return await request(`${API_BASE}/leads.php`, {
        method: 'POST',
        body: JSON.stringify(leadData)
      });
    } catch (err) {
      console.warn("Could not send lead to server. Simulating success locally...", leadData);
      return { message: "Mock success", id: Date.now() };
    }
  },

  async fetchLeads() {
    return await request(`${API_BASE}/leads.php`);
  },

  async updateLeadStatus(id, status) {
    return await request(`${API_BASE}/leads.php?action=update_status`, {
      method: 'POST',
      body: JSON.stringify({ id, status })
    });
  },

  async deleteLead(id) {
    return await request(`${API_BASE}/leads.php?id=${id}`, {
      method: 'DELETE'
    });
  },

  // --- Auth ---
  async checkAuth() {
    try {
      return await request(`${API_BASE}/auth.php`);
    } catch {
      return { authenticated: false };
    }
  },

  async login(username, password) {
    return await request(`${API_BASE}/auth.php`, {
      method: 'POST',
      body: JSON.stringify({ username, password })
    });
  },

  async logout() {
    try {
      return await request(`${API_BASE}/auth.php?action=logout`, {
        method: 'POST'
      });
    } catch {
      return { message: "Logged out locally" };
    }
  }
};
