-- phpMyAdmin SQL Dump
-- version 5.2.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Oct 04, 2026 at 02:41 PM
-- Server version: 11.4.13-MariaDB
-- PHP Version: 8.4.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `headeduc_headeducare`
--

-- --------------------------------------------------------

--
-- Table structure for table `contacts`
--

CREATE TABLE `contacts` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `phone` varchar(30) NOT NULL,
  `message` text DEFAULT NULL,
  `source` varchar(20) DEFAULT 'form',
  `created_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `countries`
--

CREATE TABLE `countries` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `flag_url` varchar(10) NOT NULL,
  `image_url` varchar(255) NOT NULL,
  `route` varchar(100) NOT NULL,
  `description` text NOT NULL,
  `cost_info` varchar(255) DEFAULT NULL,
  `visa_info` varchar(255) DEFAULT NULL,
  `popular_courses` text DEFAULT NULL,
  `is_active` tinyint(1) DEFAULT 1,
  `display_order` int(11) DEFAULT 0,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `countries`
--

INSERT INTO `countries` (`id`, `name`, `flag_url`, `image_url`, `route`, `description`, `cost_info`, `visa_info`, `popular_courses`, `is_active`, `display_order`, `created_at`) VALUES
(1, 'Australia', '🇦🇺', 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=800', '/destination/australia', '\"Australia Future Unlimited\" serves as a promise of excellence and global opportunity for overseas.', '20,000 - 45,000 AUD/year', 'Subclass 500 Student Visa', '[\"Business\",\" IT\",\" Engineering\",\" Nursing\"]', 1, 1, '2026-06-16 16:33:39'),
(2, 'United Kingdom', '🇬🇧', 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800', '/destination/uk', '\"Study UK: Discover You, Home to the most prestigious universities in the world.  When you study in the UK Great futures happen.', '9000 - 35,000 GBP/year', 'Student Route Visa', '[\"Business Management\",\" Finance\",\" Law\",\" Medicine\"]', 1, 2, '2026-06-16 16:33:39'),
(3, 'Canada', '🇨🇦', 'https://images.unsplash.com/photo-1517935706615-2717063c2225?w=800', '/destination/canada', '\"Your Home for Education, Your Launchpad to the World.\"', '15,000 - 35,000 CAD/year', 'Study Permit', '[\"Computer Science\",\" Engineering\",\" MBA\",\" Hospitality\"]', 1, 3, '2026-06-16 16:33:39'),
(4, 'United States', '🇺🇸', 'https://images.unsplash.com/photo-1508433957232-3107f5fd5995?w=800', '/destination/usa', 'World leader in higher education and research.', '8,000 - 60,000 USD/year', 'F-1 Student Visa', '[\"STEM\",\" Data Science\",\" Business\",\" Arts\"]', 1, 1, '2026-06-16 16:33:39'),
(5, 'Germany', '🇩🇪', 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800', '/destination/germany', 'Tuition-free public universities with strong programs.', 'No tuition (Public) / 11,208 EUR Blocked Account', 'Schengen National Visa', 'Automotive Engineering, Physics, Computer Science', 1, 5, '2026-06-16 16:33:39');

-- --------------------------------------------------------

--
-- Table structure for table `leads`
--

CREATE TABLE `leads` (
  `id` int(11) NOT NULL,
  `contact_id` int(11) DEFAULT NULL,
  `country_interest` varchar(50) DEFAULT NULL,
  `service_interest` varchar(50) DEFAULT NULL,
  `preferred_contact` varchar(50) DEFAULT NULL,
  `preferred_date` date DEFAULT NULL,
  `preferred_time` varchar(50) DEFAULT NULL,
  `status` varchar(20) DEFAULT 'new',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `services`
--

CREATE TABLE `services` (
  `id` int(11) NOT NULL,
  `title` varchar(100) NOT NULL,
  `icon` varchar(50) NOT NULL,
  `description` text NOT NULL,
  `display_order` int(11) DEFAULT 0,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `services`
--

INSERT INTO `services` (`id`, `title`, `icon`, `description`, `display_order`, `created_at`) VALUES
(1, 'Study Abroad', 'school', 'Comprehensive guidance from university selection to application and enrollment at top global institutions in Australia, UK, USA, and Canada.', 1, '2026-06-16 16:33:39'),
(2, 'Migration Services', 'public', 'Expert legal pathways for permanent residency, work permits, and family visas. Our certified agents ensure your application is watertight.', 2, '2026-06-16 16:33:39'),
(3, 'Visa Assistance', 'description', 'High-success rate documentation support and rigorous interview preparation sessions to maximize your chances of approval.', 3, '2026-06-16 16:33:39'),
(4, 'Test Preparation', 'quiz', 'Expert coaching for IELTS, TOEFL, PTE, GRE, GMAT, and SAT with proven score improvement strategies.', 4, '2026-06-16 16:33:39'),
(5, 'Career Counseling', 'work', 'Personalized career guidance to align your education with long-term professional goals worldwide.', 5, '2026-06-16 16:33:39'),
(6, 'Scholarship Guidance', 'emoji_events', 'Identify and apply for scholarships to reduce your financial burden and study at top institutions.', 6, '2026-06-16 16:33:39');

-- --------------------------------------------------------

--
-- Table structure for table `site_settings`
--

CREATE TABLE `site_settings` (
  `key_name` varchar(50) NOT NULL,
  `value_data` text NOT NULL,
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `site_settings`
--

INSERT INTO `site_settings` (`key_name`, `value_data`, `updated_at`) VALUES
('partner_universities', '500+', '2026-06-16 16:33:39'),
('students_placed', '15K+', '2026-06-16 16:33:39'),
('visa_success_rate', '98%', '2026-06-16 16:33:39'),
('years_experience', '12+', '2026-06-16 16:33:39');

-- --------------------------------------------------------

--
-- Table structure for table `testimonials`
--

CREATE TABLE `testimonials` (
  `id` int(11) NOT NULL,
  `student_name` varchar(100) NOT NULL,
  `photo_url` varchar(255) NOT NULL,
  `university` varchar(150) NOT NULL,
  `country` varchar(50) NOT NULL,
  `quote` text NOT NULL,
  `is_featured` tinyint(1) DEFAULT 0,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `testimonials`
--

INSERT INTO `testimonials` (`id`, `student_name`, `photo_url`, `university`, `country`, `quote`, `is_featured`, `created_at`) VALUES
(1, 'Rahim Ahmed', 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200', 'University of Melbourne', 'Australia', 'Head Edu Care made my dream of studying in Australia a reality. Their guidance was exceptional from start to finish!', 1, '2026-06-16 16:33:39'),
(2, 'Fatima Khan', 'https://images.unsplash.com/photo-1706256446485-58bedf9cbf97?w=200', 'University of Toronto', 'Canada', 'The team helped me secure a full scholarship at UofT. Their expertise is unmatched. Truly life-changing!', 1, '2026-06-16 16:33:39'),
(3, 'Sakib Hasan', 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200', 'Imperial College London', 'United Kingdom', 'From IELTS prep to visa approval, Head Edu Care handled everything professionally. Now at Imperial!', 1, '2026-06-16 16:33:39'),
(4, 'Nadia Islam', 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200', 'MIT', 'United States', 'I never thought I could get into MIT, but the counselors believed in me and guided me every step!', 1, '2026-06-16 16:33:39');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `created_at`) VALUES
(1, 'admin', '$2y$10$r2Q4zN2EAXhHRPEtEr/dBudCIiwfSAmUDmVrmRoAcdPnQ41qCpKA.', '2026-06-16 16:33:39');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `contacts`
--
ALTER TABLE `contacts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `countries`
--
ALTER TABLE `countries`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `leads`
--
ALTER TABLE `leads`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_leads_contact` (`contact_id`);

--
-- Indexes for table `services`
--
ALTER TABLE `services`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `site_settings`
--
ALTER TABLE `site_settings`
  ADD PRIMARY KEY (`key_name`);

--
-- Indexes for table `testimonials`
--
ALTER TABLE `testimonials`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `contacts`
--
ALTER TABLE `contacts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `countries`
--
ALTER TABLE `countries`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `leads`
--
ALTER TABLE `leads`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `services`
--
ALTER TABLE `services`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `testimonials`
--
ALTER TABLE `testimonials`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `leads`
--
ALTER TABLE `leads`
  ADD CONSTRAINT `fk_leads_contact` FOREIGN KEY (`contact_id`) REFERENCES `contacts` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
