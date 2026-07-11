<?php
require_once __DIR__ . '/config.php';

function require_auth() {
    if (!isset($_SESSION['user_id'])) {
        http_response_code(401);
        echo json_encode(["error" => "Unauthorized access. Please log in."]);
        exit();
    }
}
