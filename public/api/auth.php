<?php
require_once __DIR__ . '/db.php';

header('Content-Type: application/json');

$method = $_SERVER['REQUEST_METHOD'];
$db = Database::getConnection();

if ($method === 'POST') {
    // Check if logging out
    $action = isset($_GET['action']) ? $_GET['action'] : '';
    if ($action === 'logout') {
        session_unset();
        session_destroy();
        echo json_encode(["message" => "Logged out successfully"]);
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
        // Successful login
        $_SESSION['user_id'] = $user['id'];
        $_SESSION['username'] = $user['username'];
        
        echo json_encode([
            "message" => "Login successful",
            "user" => [
                "id" => $user['id'],
                "username" => $user['username']
            ]
        ]);
    } else {
        http_response_code(401);
        echo json_encode(["error" => "Invalid credentials"]);
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
