-- Head Edu Care Database Schema
-- Use this schema to set up your MySQL database on cPanel
-- IMPORTANT: Make sure to select your database from the left sidebar in phpMyAdmin BEFORE importing/running this script.

CREATE TABLE IF NOT EXISTS `users` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `username` VARCHAR(50) UNIQUE NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS `leads` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(100) NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `phone` VARCHAR(30) NOT NULL,
  `country_interest` VARCHAR(50) DEFAULT NULL,
  `service_interest` VARCHAR(50) DEFAULT NULL,
  `preferred_contact` VARCHAR(50) DEFAULT NULL,
  `preferred_date` DATE DEFAULT NULL,
  `preferred_time` VARCHAR(50) DEFAULT NULL,
  `message` TEXT DEFAULT NULL,
  `status` VARCHAR(20) DEFAULT 'new', -- 'new', 'contacted', 'in_progress', 'completed', 'cancelled'
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS `services` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `title` VARCHAR(100) NOT NULL,
  `icon` VARCHAR(50) NOT NULL,
  `description` TEXT NOT NULL,
  `display_order` INT DEFAULT 0,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS `countries` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(50) NOT NULL,
  `flag_url` VARCHAR(10) NOT NULL,
  `image_url` VARCHAR(255) NOT NULL,
  `route` VARCHAR(100) NOT NULL,
  `description` TEXT NOT NULL,
  `cost_info` VARCHAR(255) DEFAULT NULL,
  `visa_info` VARCHAR(255) DEFAULT NULL,
  `popular_courses` TEXT DEFAULT NULL, -- Comma-separated list or JSON array
  `is_active` TINYINT(1) DEFAULT 1,
  `display_order` INT DEFAULT 0,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS `testimonials` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `student_name` VARCHAR(100) NOT NULL,
  `photo_url` VARCHAR(255) NOT NULL,
  `university` VARCHAR(150) NOT NULL,
  `country` VARCHAR(50) NOT NULL,
  `quote` TEXT NOT NULL,
  `is_featured` TINYINT(1) DEFAULT 0,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS `site_settings` (
  `key_name` VARCHAR(50) PRIMARY KEY,
  `value_data` TEXT NOT NULL,
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ==========================================
-- SEED DATA
-- ==========================================

-- Seed default admin user. Password is: admin123
-- (Hash generated using PASSWORD_BCRYPT)
INSERT INTO `users` (`username`, `password`) VALUES 
('admin', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi')
ON DUPLICATE KEY UPDATE `username` = VALUES(`username`);

-- Seed default services
INSERT INTO `services` (`title`, `icon`, `description`, `display_order`) VALUES
('Study Abroad', 'school', 'Comprehensive guidance from university selection to application and enrollment at top global institutions in Australia, UK, USA, and Canada.', 1),
('Migration Services', 'public', 'Expert legal pathways for permanent residency, work permits, and family visas. Our certified agents ensure your application is watertight.', 2),
('Visa Assistance', 'description', 'High-success rate documentation support and rigorous interview preparation sessions to maximize your chances of approval.', 3),
('Test Preparation', 'quiz', 'Expert coaching for IELTS, TOEFL, PTE, GRE, GMAT, and SAT with proven score improvement strategies.', 4),
('Career Counseling', 'work', 'Personalized career guidance to align your education with long-term professional goals worldwide.', 5),
('Scholarship Guidance', 'emoji_events', 'Identify and apply for scholarships to reduce your financial burden and study at top institutions.', 6);

-- Seed default countries
INSERT INTO `countries` (`name`, `flag_url`, `image_url`, `route`, `description`, `cost_info`, `visa_info`, `popular_courses`, `is_active`, `display_order`) VALUES
('Australia', '🇦🇺', 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=800', '/destination/australia', 'World-class education with excellent post-study work opportunities.', '20,000 - 45,000 AUD/year', 'Subclass 500 Student Visa', 'Business, IT, Engineering, Nursing', 1, 1),
('United Kingdom', '🇬🇧', 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800', '/destination/uk', 'Home to the most prestigious universities in the world.', '15,000 - 35,000 GBP/year', 'Student Route Visa', 'Business Management, Finance, Law, Medicine', 1, 2),
('Canada', '🇨🇦', 'https://images.unsplash.com/photo-1517935706615-2717063c2225?w=800', '/destination/canada', 'Affordable education with excellent immigration pathways.', '15,000 - 35,000 CAD/year', 'Study Permit', 'Computer Science, Engineering, MBA, Hospitality', 1, 3),
('United States', '🇺🇸', 'https://images.unsplash.com/photo-1508433957232-3107f5fd5995?w=800', '/destination/usa', 'World leader in higher education and research.', '25,000 - 60,000 USD/year', 'F-1 Student Visa', 'STEM, Data Science, Business, Arts', 1, 4),
('Germany', '🇩🇪', 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800', '/destination/germany', 'Tuition-free public universities with strong programs.', 'No tuition (Public) / 11,208 EUR Blocked Account', 'Schengen National Visa', 'Automotive Engineering, Physics, Computer Science', 1, 5),
('Japan', '🇯🇵', 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800', '/destination/japan', 'Cutting-edge technology education with scholarships.', '500,000 - 1,000,000 JPY/year', 'College Student Visa', 'Robotics, Japanese Language, Anime & Design', 1, 6);

-- Seed default testimonials
INSERT INTO `testimonials` (`student_name`, `photo_url`, `university`, `country`, `quote`, `is_featured`) VALUES
('Rahim Ahmed', 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200', 'University of Melbourne', 'Australia', 'Head Edu Care made my dream of studying in Australia a reality. Their guidance was exceptional from start to finish!', 1),
('Fatima Khan', 'https://images.unsplash.com/photo-1706256446485-58bedf9cbf97?w=200', 'University of Toronto', 'Canada', 'The team helped me secure a full scholarship at UofT. Their expertise is unmatched. Truly life-changing!', 1),
('Sakib Hasan', 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200', 'Imperial College London', 'United Kingdom', 'From IELTS prep to visa approval, Head Edu Care handled everything professionally. Now at Imperial!', 1),
('Nadia Islam', 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200', 'MIT', 'United States', 'I never thought I could get into MIT, but the counselors believed in me and guided me every step!', 1);

-- Seed site settings stats
INSERT INTO `site_settings` (`key_name`, `value_data`) VALUES
('partner_universities', '500+'),
('visa_success_rate', '98%'),
('students_placed', '15K+'),
('years_experience', '12+')
ON DUPLICATE KEY UPDATE `value_data` = VALUES(`value_data`);
