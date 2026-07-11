<?php
require_once __DIR__ . '/db.php';
require_once __DIR__ . '/auth_check.php';

header('Content-Type: application/json');

$method = $_SERVER['REQUEST_METHOD'];
$db = Database::getConnection();

if ($method === 'GET') {
    // Fetch all active/ordered services
    $stmt = $db->query("SELECT * FROM services ORDER BY display_order ASC, id ASC");
    $services = $stmt->fetchAll();
    echo json_encode($services);

} elseif ($method === 'POST') {
    // Add or Update service
    require_auth();

    $input = json_decode(file_get_contents('php://input'), true);
    $id = isset($input['id']) ? intval($input['id']) : 0;
    $title = isset($input['title']) ? trim($input['title']) : '';
    $icon = isset($input['icon']) ? trim($input['icon']) : '';
    $description = isset($input['description']) ? trim($input['description']) : '';
    $display_order = isset($input['display_order']) ? intval($input['display_order']) : 0;

    if (empty($title) || empty($icon) || empty($description)) {
        http_response_code(400);
        echo json_encode(["error" => "Title, icon, and description are required fields"]);
        exit();
    }

    if ($id > 0) {
        // Update
        $stmt = $db->prepare("UPDATE services SET title = ?, icon = ?, description = ?, display_order = ? WHERE id = ?");
        $stmt->execute([$title, $icon, $description, $display_order, $id]);
        echo json_encode(["message" => "Service updated successfully", "id" => $id]);
    } else {
        // Create
        $stmt = $db->prepare("INSERT INTO services (title, icon, description, display_order) VALUES (?, ?, ?, ?)");
        $stmt->execute([$title, $icon, $description, $display_order]);
        echo json_encode(["message" => "Service created successfully", "id" => $db->lastInsertId()]);
    }

} elseif ($method === 'DELETE') {
    // Delete service
    require_auth();

    $id = isset($_GET['id']) ? intval($_GET['id']) : 0;
    if (!$id) {
        http_response_code(400);
        echo json_encode(["error" => "Service ID is required"]);
        exit();
    }

    $stmt = $db->prepare("DELETE FROM services WHERE id = ?");
    $stmt->execute([$id]);
    echo json_encode(["message" => "Service deleted successfully"]);

} else {
    http_response_code(405);
    echo json_encode(["error" => "Method not allowed"]);
}
