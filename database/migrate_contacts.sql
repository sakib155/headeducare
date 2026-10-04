-- Migration: split legacy leads into contacts + leads
-- Run this once on databases that used the old single `leads` table.
-- Creates the contacts table, moves name/email/phone/message to it, and
-- links each lead to its contact via contact_id.

CREATE TABLE IF NOT EXISTS `contacts` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(100) NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `phone` VARCHAR(30) NOT NULL,
  `message` TEXT DEFAULT NULL,
  `source` VARCHAR(20) DEFAULT 'form',
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Copy existing lead people into contacts
INSERT INTO `contacts` (`name`, `email`, `phone`, `message`, `source`, `created_at`)
SELECT `name`, `email`, `phone`, `message`, 'form', `created_at` FROM `leads`;

-- Add contact_id to leads (idempotent)
SET @col_exists = (SELECT COUNT(*) FROM information_schema.COLUMNS
  WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = 'leads' AND COLUMN_NAME = 'contact_id');
SET @sql = IF(@col_exists = 0,
  'ALTER TABLE `leads` ADD COLUMN `contact_id` INT DEFAULT NULL AFTER `id`',
  'SELECT 1');
PREPARE stmt FROM @sql;
EXECUTE stmt;
DEALLOCATE PREPARE stmt;

-- Link leads to their contacts
UPDATE `leads` l
JOIN `contacts` c ON c.name = l.name AND c.email = l.email AND c.phone = l.phone
SET l.contact_id = c.id;

-- Drop the duplicated person columns from leads
ALTER TABLE `leads`
  DROP COLUMN `name`,
  DROP COLUMN `email`,
  DROP COLUMN `phone`,
  DROP COLUMN `message`;

-- Add FK (idempotent; ignores error if already present)
SET @fk_exists = (SELECT COUNT(*) FROM information_schema.TABLE_CONSTRAINTS
  WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = 'leads' AND CONSTRAINT_NAME = 'fk_leads_contact');
SET @sql2 = IF(@fk_exists = 0,
  'ALTER TABLE `leads` ADD CONSTRAINT `fk_leads_contact` FOREIGN KEY (`contact_id`) REFERENCES `contacts`(`id`) ON DELETE CASCADE',
  'SELECT 1');
PREPARE stmt2 FROM @sql2;
EXECUTE stmt2;
DEALLOCATE PREPARE stmt2;
