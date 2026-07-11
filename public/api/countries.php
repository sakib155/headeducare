<?php
require_once __DIR__ . '/db.php';
require_once __DIR__ . '/auth_check.php';

header('Content-Type: application/json');

$method = $_SERVER['REQUEST_METHOD'];
$db = Database::getConnection();

if ($method === 'GET') {
    // Fetch all active/ordered countries
    $stmt = $db->query("SELECT * FROM countries ORDER BY display_order ASC, id ASC");
    $countries = $stmt->fetchAll();
    
    // Format popular_courses array
    foreach ($countries as &$c) {
        if (!empty($c['popular_courses'])) {
            $decoded = json_decode($c['popular_courses'], true);
            $c['popular_courses'] = is_array($decoded) ? $decoded : explode(',', $c['popular_courses']);
        } else {
            $c['popular_courses'] = [];
        }
        $c['is_active'] = (bool)$c['is_active'];
    }
    
    echo json_encode($countries);

} elseif ($method === 'POST') {
    // Add or Update country
    require_auth();

    $input = json_decode(file_get_contents('php://input'), true);
    $id = isset($input['id']) ? intval($input['id']) : 0;
    $name = isset($input['name']) ? trim($input['name']) : '';
    $flag_url = isset($input['flag_url']) ? trim($input['flag_url']) : '';
    $image_url = isset($input['image_url']) ? trim($input['image_url']) : '';
    $route = isset($input['route']) ? trim($input['route']) : '';
    $description = isset($input['description']) ? trim($input['description']) : '';
    $cost_info = isset($input['cost_info']) ? trim($input['cost_info']) : '';
    $visa_info = isset($input['visa_info']) ? trim($input['visa_info']) : '';
    
    // Handle popular courses list
    $popular_courses = '';
    if (isset($input['popular_courses'])) {
        if (is_array($input['popular_courses'])) {
            $popular_courses = json_encode($input['popular_courses']);
        } else {
            $popular_courses = json_encode(array_map('trim', explode(',', $input['popular_courses'])));
        }
    }

    $is_active = isset($input['is_active']) ? (int)$input['is_active'] : 1;
    $display_order = isset($input['display_order']) ? intval($input['display_order']) : 0;

    if (empty($name) || empty($flag_url) || empty($image_url) || empty($description) || empty($route)) {
        http_response_code(400);
        echo json_encode(["error" => "Name, flag, image, route, and description are required fields"]);
        exit();
    }

    if ($id > 0) {
        // Update
        $stmt = $db->prepare("UPDATE countries SET name = ?, flag_url = ?, image_url = ?, route = ?, description = ?, cost_info = ?, visa_info = ?, popular_courses = ?, is_active = ?, display_order = ? WHERE id = ?");
        $stmt->execute([$name, $flag_url, $image_url, $route, $description, $cost_info, $visa_info, $popular_courses, $is_active, $display_order, $id]);
        echo json_encode(["message" => "Country updated successfully", "id" => $id]);
    } else {
        // Create
        $stmt = $db->prepare("INSERT INTO countries (name, flag_url, image_url, route, description, cost_info, visa_info, popular_courses, is_active, display_order) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
        $stmt->execute([$name, $flag_url, $image_url, $route, $description, $cost_info, $visa_info, $popular_courses, $is_active, $display_order]);
        echo json_encode(["message" => "Country created successfully", "id" => $db->lastInsertId()]);
    }

} elseif ($method === 'DELETE') {
    // Delete country
    require_auth();

    $id = isset($_GET['id']) ? intval($_GET['id']) : 0;
    if (!$id) {
        http_response_code(400);
        echo json_encode(["error" => "Country ID is required"]);
        exit();
    }

    $stmt = $db->prepare("DELETE FROM countries WHERE id = ?");
    $stmt->execute([$id]);
    echo json_encode(["message" => "Country deleted successfully"]);

} else {
    http_response_code(405);
    echo json_encode(["error" => "Method not allowed"]);
}
