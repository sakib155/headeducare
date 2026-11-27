-- ═══════════════════════════════════════════════════════════════════════
-- Migration: add 1-5 star rating to testimonials
-- Run once in cPanel → phpMyAdmin → select `headeduc_headeducare` → Import.
-- Existing reviews default to 5 stars. Safe to run twice (column check).
-- ═══════════════════════════════════════════════════════════════════════

SET @has_rating = (SELECT COUNT(*) FROM information_schema.COLUMNS
                   WHERE TABLE_SCHEMA = DATABASE()
                     AND TABLE_NAME   = 'testimonials'
                     AND COLUMN_NAME  = 'rating');

SET @sql = IF(@has_rating = 0,
  'ALTER TABLE testimonials ADD COLUMN rating TINYINT UNSIGNED NOT NULL DEFAULT 5 AFTER quote',
  'SELECT ''rating column already exists'' AS note');

PREPARE stmt FROM @sql;
EXECUTE stmt;
DEALLOCATE PREPARE stmt;
