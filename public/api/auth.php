<?php
require_once __DIR__ . '/db.php';

header('Content-Type: application/json');

$method = $_SERVER['REQUEST_METHOD'];
$db = Database::getConnection();

// ── Brute-force protection: max 5 attempts per 15 minutes ───────────────────
$MAX_ATTEMPTS = 5;
$LOCKOUT_SECONDS = 900; // 15 minutes

function login_attempts_left() {
    global $MAX_ATTEMPTS, $LOCKOUT_SECONDS;
    if (!isset($_SESSION['login_attempts'])) {
        $_SESSION['login_attempts'] = 0;
        $_SESSION['login_attempt_time'] = time();
        return $MAX_ATTEMPTS;
    }
    $elapsed = time() - $_SESSION['login_attempt_time'];
    if ($elapsed > $LOCKOUT_SECONDS) {
        $_SESSION['login_attempts'] = 0;
        $_SESSION['login_attempt_time'] = time();
        return $MAX_ATTEMPTS;
    }
    return $MAX_ATTEMPTS - $_SESSION['login_attempts'];
}

if ($method === 'POST') {
    // Check if logging out
    $action = isset($_GET['action']) ? $_GET['action'] : '';
    if ($action === 'logout') {
        session_unset();
        session_destroy();
        echo json_encode(["message" => "Logged out successfully"]);
        exit();
    }

    // Lockout check before processing login
    $remaining = login_attempts_left();
    if ($remaining <= 0) {
        http_response_code(429);
        echo json_encode(["error" => "Too many failed attempts. Please try again in 15 minutes."]);
        exit();
    }

    // Process Login
    $input = json_decode(file_get_contents('php://input'), true);
    $username = isset($input['username']) ? trim($input['username']) : '';
    $password = isset($input['password']) ? $input['password'] : '';

    if (empty($username) || empty($password)) {
        http_response_code(400);
        echo json_encode(["error" => "Username and password are required"]);
        exit();
    }

    $stmt = $db->prepare("SELECT * FROM users WHERE username = ?");
    $stmt->execute([$username]);
    $user = $stmt->fetch();

    if ($user && password_verify($password, $user['password'])) {
        // Successful login — regenerate session ID to prevent fixation
        session_regenerate_id(true);
        $_SESSION['user_id'] = $user['id'];
        $_SESSION['username'] = $user['username'];
        // Reset attempt counters
        unset($_SESSION['login_attempts'], $_SESSION['login_attempt_time']);

        echo json_encode([
            "message" => "Login successful",
            "user" => [
                "id" => $user['id'],
                "username" => $user['username']
            ]
        ]);
    } else {
        // Failed attempt — increment counter
        if (!isset($_SESSION['login_attempts'])) {
            $_SESSION['login_attempts'] = 1;
            $_SESSION['login_attempt_time'] = time();
        } else {
            $_SESSION['login_attempts']++;
        }
        http_response_code(401);
        $left = login_attempts_left();
        echo json_encode([
            "error" => "Invalid credentials",
            "attempts_left" => max($left, 0)
        ]);
    }
} elseif ($method === 'GET') {
    // Verify session status
    if (isset($_SESSION['user_id'])) {
        echo json_encode([
            "authenticated" => true,
            "user" => [
                "id" => $_SESSION['user_id'],
                "username" => $_SESSION['username']
            ]
        ]);
    } else {
        echo json_encode(["authenticated" => false]);
    }
} else {
    http_response_code(405);
    echo json_encode(["error" => "Method not allowed"]);
}
