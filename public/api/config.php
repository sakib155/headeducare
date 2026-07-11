<?php
// Database Configuration
// Update these values to match your cPanel MySQL Database configuration

define('DB_HOST', 'localhost');
define('DB_NAME', 'headeduc_headeducare');
define('DB_USER', 'headeduc');
define('DB_PASS', '[J:8J4pS0xzd9G');

// CORS & Common Headers
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE, PATCH");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Session configuration
ini_set('session.cookie_httponly', 1);
ini_set('session.use_only_cookies', 1);
// Uncomment the line below on your production server (if using HTTPS)
// ini_set('session.cookie_secure', 1);

session_start();
