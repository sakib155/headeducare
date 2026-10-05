<?php
// Database Configuration
// Production cPanel MySQL configuration

define('DB_HOST', 'localhost');
define('DB_NAME', 'headeduc_headeducare');
define('DB_USER', 'headeduc');
define('DB_PASS', '[J:8J4pS0xzd9G');

// CORS & Common Headers — restricted to production origin only
$allowed_origin = 'https://headeducare.com';
if (isset($_SERVER['HTTP_ORIGIN'])) {
    $origin = $_SERVER['HTTP_ORIGIN'];
    if ($origin === $allowed_origin || $origin === 'https://www.headeducare.com') {
        header("Access-Control-Allow-Origin: " . $origin);
        header("Access-Control-Allow-Credentials: true");
    }
}
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE, PATCH");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Session configuration
ini_set('session.cookie_httponly', 1);
ini_set('session.use_only_cookies', 1);
ini_set('session.cookie_secure', 1);
ini_set('session.cookie_samesite', 'Strict');

session_start();