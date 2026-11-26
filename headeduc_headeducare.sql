-- phpMyAdmin SQL Dump
-- version 5.2.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Nov 25, 2026 at 07:12 AM
-- Server version: 11.4.14-MariaDB
-- PHP Version: 8.4.28

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

--
-- Dumping data for table `contacts`
--

INSERT INTO `contacts` (`id`, `name`, `email`, `phone`, `message`, `source`, `created_at`) VALUES
(4, 'Ravee APAI', 'ravee@automationpartners.ai', '9868555', '', 'form', '2026-10-06 06:51:49'),
(10, 'Mujahid Alam', 'mujahidalam808@gmail.com', '+8801942762568', '', 'form', '2026-11-06 14:33:42');

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
(1, 'Australia', '🇦🇺', '/assets/Australia.jpeg', '/destination/australia', '\"Australia Future Unlimited\" serves as a promise of excellence and global opportunity for overseas.', '20,000 - 45,000 AUD/year', 'Subclass 500 Student Visa', '[\"Business\",\" IT\",\" Engineering\",\" Nursing\"]', 1, 1, '2026-06-16 16:33:39'),
(2, 'United Kingdom', '🇬🇧', '/assets/uk.jpeg', '/destination/uk', '\"Study UK: Discover You, Home to the most prestigious universities in the world.  When you study in the UK Great futures happen.', '9000 - 35,000 GBP/year', 'Student Route Visa', '[\"Business Management\",\" Finance\",\" Law\",\" Medicine\"]', 1, 2, '2026-06-16 16:33:39'),
(3, 'Canada', '🇨🇦', 'https://headeducare.com/uploads/img_6ad51bab9ef446.85638856.jpg', '/destination/canada', '\"Your Home for Education, Your Launchpad to the World.\"', '15,000 - 35,000 CAD/year', 'Study Permit', '[\"Computer Science\",\" Engineering\",\" MBA\",\" Hospitality\"]', 1, 3, '2026-06-16 16:33:39'),
(4, 'United States', '🇺🇸', 'https://headeducare.com/uploads/img_6ad51b998574c2.46901851.jpg', '/destination/usa', 'World leader in higher education and research.', '8,000 - 60,000 USD/year', 'F-1 Student Visa', '[\"STEM\",\" Data Science\",\" Business\",\" Arts\"]', 1, 1, '2026-06-16 16:33:39'),
(7, 'New Zealand', '🇳🇿', 'https://headeducare.com/uploads/img_6ad51c1a387d15.61704327.jpg', '/destination/new-zealand', 'New Zealand combines a high quality of life with an innovative education system ranked among the best globally. Students benefit from a Post-Study Work Visa of up to 3 years and a safe, welcoming environment.', 'NZD 22,000 – 40,000/year', 'Student Visa via Immigration New Zealand', '[]', 1, 10, '2026-10-05 17:13:40'),
(8, 'Ireland', '🇮🇪', 'https://headeducare.com/uploads/img_6ad51c26b57c97.60743785.jpg', '/destination/ireland', 'Ireland is the only English-speaking country in the Eurozone, making it a gateway to Europe\'s job market. It is home to global tech giants like Google, Meta, and Apple, offering outstanding placement and internship opportunities.', 'EUR 10,000 – 30,000/year', 'Irish Student Visa (C or D) via INIS', '[]', 1, 11, '2026-10-05 17:13:40'),
(9, 'South Korea', '🇰🇷', 'https://headeducare.com/uploads/img_6ad51c3c0c71f8.45634449.jpg', '/destination/korea', 'South Korea is rapidly emerging as a top Asian study destination, combining cutting-edge technology, K-culture influence, and globally ranked universities like KAIST, POSTECH, and Seoul National University. Generous government scholarships like KGSP make it highly affordable.', 'USD 2,500 – 6,000/year', 'Student Visa (D-2) via Korean Embassy/Consulate', '[]', 1, 12, '2026-10-05 17:13:40'),
(10, 'Malaysia', '🇲🇾', '/assets/malaysia.jpg', '/destination/malaysia', 'Malaysia is one of Asia\'s most affordable and diverse study destinations, offering globally recognised degrees through twinning programs with UK and Australian universities. With English as the medium of instruction and a low cost of living, it is ideal for budget-conscious international students.', 'USD 3,500 – 6,000/year', 'Student Pass via Immigration Department of Malaysia (iKad)', '[]', 1, 13, '2026-10-05 17:13:40'),
(11, 'Finland', '🇫🇮', 'https://headeducare.com/uploads/img_6ad4fa00ecb261.04811576.jpg', '/destination/finland', 'Finland is known for having one of the world\'s most successful education systems, pristine nature, and top-tier universities like University of Helsinki and Aalto University.', 'EUR 7,000 – 20,000/year', 'Student Residence Permit via Migri (Finnish Immigration Service)', '[]', 1, 14, '2026-10-05 17:13:40'),
(12, 'Belgium', '🇧🇪', 'https://headeducare.com/uploads/img_6ad4fa1304adf5.44261265.jpg', '/destination/belgium', 'Belgium, located in the heart of Europe, hosts highly ranked universities offering diverse English-taught programs and an international environment.', 'EUR 3,000 – 10,000/year', 'Belgian Student Visa (Type D) via Belgian Embassy', '[]', 1, 15, '2026-10-05 17:13:40'),
(13, 'Netherlands', '🇳🇱', 'https://headeducare.com/uploads/img_6ad51c89917636.79513931.jpg', '/destination/netherlands', 'The Netherlands was one of the first non-English-speaking countries to offer English-taught courses. It features top universities, excellent research facilities, and a highly international student body.', 'EUR 10,000 – 20,000/year', 'MVV Entry Visa and VVR Residence Permit via IND', '[]', 1, 16, '2026-10-05 17:13:40'),
(14, 'Hungary', '🇭🇺', 'https://headeducare.com/uploads/img_6ad51ca085bb93.98354916.jpg', '/destination/hungary', 'Hungary offers affordable tuition and living costs, making it a popular European destination. Home to centuries-old universities and a rich cultural heritage.', 'EUR 3,000 – 15,000/year', 'D-Type Student Visa via Hungarian Consulate', '[]', 1, 17, '2026-10-05 17:13:40'),
(15, 'Sweden', '🇸🇪', 'https://headeducare.com/uploads/img_6ad51cb3179f14.19979448.jpg', '/destination/sweden', 'Sweden is known for its innovative teaching methods, flat hierarchy, and sustainable approach. Home to world-class universities offering numerous English-taught programmes.', 'EUR 8,000 – 18,000/year', 'Residence Permit for Studies via Swedish Migration Agency', '[]', 1, 18, '2026-10-05 17:13:40'),
(16, 'Norway', '🇳🇴', 'https://headeducare.com/uploads/img_6ad51c6c7b00e4.92739571.jpg', '/destination/norway', 'Norway offers high-quality education with no tuition fees at public universities for all students. Known for its stunning nature, high standard of living, and strong economy.', 'No tuition fees (public universities): living costs ~NOK 120,000/year', 'Student Residence Permit via UDI (Norwegian Directorate of Immigration)', '[]', 1, 19, '2026-10-05 17:13:40'),
(19, 'Denmark', '🇩🇰', 'https://headeducare.com/uploads/img_6ad51c7bbc83e0.21567985.jpg', '/destination/denmark', 'Denmark is home to some of the world\'s leading universities, known for their high academic standards, innovative teaching methods, and strong research focus. Institutions such as the University of Copenhagen, Aarhus University, and the Technical University of Denmark (DTU) offer cutting-edge programs.', 'EUR 6,000 - 20,000/year', 'Student Residence Permit via SIRI', '[\"Business\",\"Engineering\",\"Life Sciences\",\"Social Sciences\"]', 1, 15, '2026-10-14 18:48:15');

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

--
-- Dumping data for table `leads`
--

INSERT INTO `leads` (`id`, `contact_id`, `country_interest`, `service_interest`, `preferred_contact`, `preferred_date`, `preferred_time`, `status`, `created_at`) VALUES
(5, 4, 'Australia', 'Study Abroad', NULL, NULL, NULL, 'completed', '2026-10-06 06:51:49'),
(11, 10, 'United States', 'Study Abroad', 'In-Person', '2026-11-07', '11:00 AM – 12:00 PM', 'new', '2026-11-06 14:33:42');

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
('partner_universities', '500+', '2026-10-14 12:01:37'),
('students_placed', '15K+', '2026-10-14 12:01:37'),
('visa_success_rate', '98%', '2026-10-14 12:01:37'),
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
(1, 'admin', '$2y$12$rwb5HZ0am/HGTc06Cz2DbOH8BgW.pSgrfNoK1uF/er3MLG7fo2Lja', '2026-06-16 16:33:39');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `countries`
--
ALTER TABLE `countries`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `leads`
--
ALTER TABLE `leads`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `services`
--
ALTER TABLE `services`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `testimonials`
--
ALTER TABLE `testimonials`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

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
