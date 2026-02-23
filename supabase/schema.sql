-- ============================================
-- Head Edu Care - Supabase Database Schema
-- Run this in Supabase SQL Editor
-- ============================================

-- Countries table
CREATE TABLE IF NOT EXISTS countries (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  flag_url TEXT,
  image_url TEXT,
  description TEXT,
  popular_courses TEXT[],
  cost_info TEXT,
  visa_info TEXT,
  display_order INT DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Universities table
CREATE TABLE IF NOT EXISTS universities (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  country_id UUID REFERENCES countries(id) ON DELETE SET NULL,
  logo_url TEXT,
  website TEXT,
  ranking TEXT,
  description TEXT,
  is_featured BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Services table
CREATE TABLE IF NOT EXISTS services (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  icon TEXT DEFAULT 'school',
  description TEXT,
  detailed_content TEXT,
  display_order INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Testimonials table
CREATE TABLE IF NOT EXISTS testimonials (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  student_name TEXT NOT NULL,
  photo_url TEXT,
  university TEXT,
  country TEXT,
  quote TEXT NOT NULL,
  rating INT DEFAULT 5,
  is_featured BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Team members table
CREATE TABLE IF NOT EXISTS team_members (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  role TEXT,
  photo_url TEXT,
  bio TEXT,
  display_order INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Leads table (contact form submissions)
CREATE TABLE IF NOT EXISTS leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  country_interest TEXT,
  service_interest TEXT,
  message TEXT,
  status TEXT DEFAULT 'new',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Site settings table
CREATE TABLE IF NOT EXISTS site_settings (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  key TEXT UNIQUE NOT NULL,
  value TEXT NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- Enable Row Level Security (RLS)
-- ============================================
ALTER TABLE countries ENABLE ROW LEVEL SECURITY;
ALTER TABLE universities ENABLE ROW LEVEL SECURITY;
ALTER TABLE services ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE team_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE site_settings ENABLE ROW LEVEL SECURITY;

-- Public read policies
CREATE POLICY "Allow public read" ON countries FOR SELECT USING (true);
CREATE POLICY "Allow public read" ON universities FOR SELECT USING (true);
CREATE POLICY "Allow public read" ON services FOR SELECT USING (true);
CREATE POLICY "Allow public read" ON testimonials FOR SELECT USING (true);
CREATE POLICY "Allow public read" ON team_members FOR SELECT USING (true);
CREATE POLICY "Allow public read" ON site_settings FOR SELECT USING (true);

-- Leads: public can insert, only authenticated can read
CREATE POLICY "Allow public insert" ON leads FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow authenticated read" ON leads FOR SELECT USING (auth.role() = 'authenticated');

-- ============================================
-- Seed Data
-- ============================================

-- Seed countries
INSERT INTO countries (name, slug, flag_url, image_url, description, popular_courses, cost_info, visa_info, display_order) VALUES
('Australia', 'australia', '🇦🇺', 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=800', 'World-class education system with globally recognized qualifications and excellent post-study work opportunities.', ARRAY['Engineering', 'Business', 'IT', 'Healthcare'], '$20,000 - $45,000/year', 'Student Visa (Subclass 500)', 1),
('United Kingdom', 'united-kingdom', '🇬🇧', 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800', 'Home to some of the most prestigious universities in the world with rich cultural heritage.', ARRAY['Law', 'Finance', 'Medicine', 'Arts'], '£12,000 - £35,000/year', 'Student Route Visa', 2),
('Canada', 'canada', '🇨🇦', 'https://images.unsplash.com/photo-1517935706615-2717063c2225?w=800', 'Affordable education with excellent immigration pathways and high quality of life.', ARRAY['IT', 'Business', 'Engineering', 'Hospitality'], 'CAD 15,000 - 35,000/year', 'Study Permit', 3),
('United States', 'united-states', '🇺🇸', 'https://images.unsplash.com/photo-1485738422979-f5c462d49f04?w=800', 'The world leader in higher education with unmatched research opportunities and campus life.', ARRAY['STEM', 'MBA', 'Medicine', 'Liberal Arts'], '$25,000 - $55,000/year', 'F-1 Student Visa', 4),
('Germany', 'germany', '🇩🇪', 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800', 'Tuition-free public universities with strong engineering and technology programs.', ARRAY['Engineering', 'Automotive', 'IT', 'Research'], '€0 - €20,000/year', 'Student Visa', 5),
('Japan', 'japan', '🇯🇵', 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800', 'Cutting-edge technology education with rich cultural immersion and generous scholarships.', ARRAY['Technology', 'Robotics', 'Business', 'Arts'], '¥500,000 - ¥2,000,000/year', 'Student Visa (College)', 6);

-- Seed services
INSERT INTO services (title, slug, icon, description, detailed_content, display_order) VALUES
('Study Abroad', 'study-abroad', 'school', 'Comprehensive guidance from university selection to application and enrollment at top global institutions.', 'We help you navigate the complex world of international education. From choosing the right university to securing admission, our expert counselors guide you every step of the way. Our services include university shortlisting, application preparation, SOP and essay writing support, and enrollment assistance.', 1),
('Migration Services', 'migration-services', 'public', 'Expert legal pathways for permanent residency, work permits, and family visas with certified agents.', 'Our MARA-registered migration agents provide expert legal advice for all immigration matters. We handle skilled worker visas, permanent residency applications, partner visas, and family reunification. Our success rate speaks for itself.', 2),
('Visa Assistance', 'visa-assistance', 'description', 'High-success rate documentation support and rigorous interview preparation sessions.', 'We prepare bulletproof visa applications with comprehensive documentation. Our team reviews every detail, conducts mock interviews, and prepares you for any scenario. We have maintained a 98% visa success rate.', 3),
('Test Preparation', 'test-preparation', 'quiz', 'Expert coaching for IELTS, TOEFL, PTE, GRE, GMAT, and SAT with proven score improvement.', 'Our experienced trainers use proven methodologies to help you achieve your target scores. Small batch sizes ensure personal attention. We offer both online and offline classes with flexible timings.', 4),
('Career Counseling', 'career-counseling', 'work', 'Personalized career guidance to align your education with long-term professional goals.', 'Our career counselors help you make informed decisions about your education and career path. We assess your strengths, interests, and goals to recommend the best programs and countries for your future success.', 5),
('Scholarship Guidance', 'scholarship-guidance', 'emoji_events', 'Identify and apply for scholarships to reduce your financial burden and study at top institutions.', 'We help you find and apply for merit-based, need-based, and country-specific scholarships. Our team assists with scholarship essays, applications, and interview preparation to maximize your chances of funding.', 6);

-- Seed testimonials
INSERT INTO testimonials (student_name, photo_url, university, country, quote, rating, is_featured) VALUES
('Rahim Ahmed', 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200', 'University of Melbourne', 'Australia', 'Head Edu Care made my dream of studying in Australia a reality. Their guidance was exceptional from start to finish. I cannot thank them enough!', 5, true),
('Fatima Khan', 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200', 'University of Toronto', 'Canada', 'The team helped me secure a full scholarship at UofT. Their expertise in the Canadian education system is unmatched. Truly life-changing!', 5, true),
('Sakib Hasan', 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200', 'Imperial College London', 'United Kingdom', 'From IELTS prep to visa approval, Head Edu Care handled everything professionally. I am now pursuing my Masters at one of the best universities in the world.', 5, true),
('Nadia Islam', 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200', 'MIT', 'United States', 'I never thought I could get into MIT, but the counselors at Head Edu Care believed in me and guided me through every step. Forever grateful!', 5, true);

-- Seed team members
INSERT INTO team_members (name, role, photo_url, bio, display_order) VALUES
('Dr. Aminul Haque', 'Founder & CEO', 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300', 'With over 15 years in international education consulting, Dr. Haque founded Head Edu Care to bridge the gap between aspiring students and world-class institutions.', 1),
('Tasfia Rahman', 'Head of Counseling', 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300', 'Certified education counselor with expertise in Australian and Canadian university admissions. Has helped over 3,000 students achieve their dreams.', 2),
('Karim Uddin', 'Migration Specialist', 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300', 'MARA-registered migration agent specializing in skilled worker visas and permanent residency applications for Australia and Canada.', 3),
('Sanjida Akter', 'Visa Processing Lead', 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300', 'Expert in visa documentation and processing with a 98% success rate. Handles complex visa applications for students across 20+ countries.', 4);

-- Seed site settings
INSERT INTO site_settings (key, value) VALUES
('partner_universities', '500+'),
('visa_success_rate', '98%'),
('students_placed', '15K+'),
('years_experience', '12+'),
('countries_count', '50+'),
('stat_label_1', 'Partner Universities'),
('stat_label_2', 'Visa Success Rate'),
('stat_label_3', 'Students Placed'),
('stat_label_4', 'Years Experience');
