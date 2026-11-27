<?php
// ─────────────────────────────────────────────────────────────────────────────
// Shared IP/identity-based rate limiter (MySQL-backed, self-installing).
//   rate_limit_check($db, $endpoint, $maxHits, $windowSeconds, $identifier?)
// Returns true when the request is allowed, false when the limit is exceeded.
//
// - $identifier defaults to a SHA-256 hash of the client IP; pass a username
//   to tie the budget to the account instead of the address.
// - Fixed time windows keep the table small; rows older than 24h are purged
//   probabilistically (~1% of requests).
// - Fail-open by design: a limiter outage must never block legitimate traffic.
// ─────────────────────────────────────────────────────────────────────────────
require_once __DIR__ . '/db.php';

function rate_limit_check($db, $endpoint, $max, $windowSeconds, $identifier = null) {
    try {
        $who = hash('sha256', $identifier !== null ? $identifier : ($_SERVER['REMOTE_ADDR'] ?? '0.0.0.0'));
        $window = (int) floor(time() / max(1, (int) $windowSeconds));

        $db->prepare("CREATE TABLE IF NOT EXISTS rate_limits (
            id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
            endpoint VARCHAR(64) NOT NULL,
            who CHAR(64) NOT NULL,
            window_start INT UNSIGNED NOT NULL,
            hits INT UNSIGNED NOT NULL DEFAULT 1,
            UNIQUE KEY uniq_window (endpoint, who, window_start),
            KEY idx_cleanup (window_start)
        ) ENGINE=InnoDB")->execute();

        $stmt = $db->prepare("INSERT INTO rate_limits (endpoint, who, window_start, hits)
                              VALUES (?, ?, ?, 1)
                              ON DUPLICATE KEY UPDATE hits = hits + 1");
        $stmt->execute([$endpoint, $who, $window]);

        // ~1% of requests: purge windows older than 24 hours
        if (random_int(1, 100) === 1) {
            $db->prepare("DELETE FROM rate_limits WHERE window_start < ?")
               ->execute([(int) floor(time() - 86400)]);
        }

        $stmt = $db->prepare("SELECT hits FROM rate_limits WHERE endpoint = ? AND who = ? AND window_start = ?");
        $stmt->execute([$endpoint, $who, $window]);
        $row = $stmt->fetch();

        return ((int) ($row['hits'] ?? 0)) <= (int) $max;
    } catch (Exception $e) {
        return true;
    }
}
