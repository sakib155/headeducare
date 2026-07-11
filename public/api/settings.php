<?php
require_once __DIR__ . '/db.php';
require_once __DIR__ . '/auth_check.php';

header('Content-Type: application/json');

$method = $_SERVER['REQUEST_METHOD'];
$db = Database::getConnection();

if ($method === 'GET') {
    // Fetch all settings
    $stmt = $db->query("SELECT * FROM site_settings");
    $settings = $stmt->fetchAll();
    
    // Convert key-value array into a cleaner object: { key_name: value_data }
    $settingsMap = [];
    foreach ($settings as $s) {
        $settingsMap[$s['key_name']] = $s['value_data'];
    }
    
    echo json_encode($settingsMap);

} elseif ($method === 'POST') {
    // Bulk update settings
    require_auth();

    $input = json_decode(file_get_contents('php://input'), true);
    
    if (!is_array($input)) {
        http_response_code(400);
        echo json_encode(["error" => "Invalid settings payload. Must be a key-value object."]);
        exit();
    }

    $db->beginTransaction();
    try {
        $stmt = $db->prepare("INSERT INTO site_settings (key_name, value_data) VALUES (?, ?) 
                              ON DUPLICATE KEY UPDATE value_data = VALUES(value_data)");
        
        foreach ($input as $key => $value) {
            $stmt->execute([trim($key), trim($value)]);
        }
        
        $db->commit();
        echo json_encode(["message" => "Settings updated successfully"]);
    } catch (Exception $e) {
        $db->rollBack();
        http_response_code(500);
        echo json_encode(["error" => "Failed to update settings", "details" => $e->getMessage()]);
    }

} else {
    http_response_code(405);
    echo json_encode(["error" => "Method not allowed"]);
}
