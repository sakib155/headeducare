<?php
require_once __DIR__ . '/db.php';
require_once __DIR__ . '/auth_check.php';

header('Content-Type: application/json');

$method = $_SERVER['REQUEST_METHOD'];
$db = Database::getConnection();

if ($method === 'GET') {
    // Fetch testimonials
    $stmt = $db->query("SELECT * FROM testimonials ORDER BY id DESC");
    $testimonials = $stmt->fetchAll();
    
    foreach ($testimonials as &$t) {
        $t['is_featured'] = (bool)$t['is_featured'];
    }

    echo json_encode($testimonials);

} elseif ($method === 'POST') {
    // Add or Update testimonial
    require_auth();

    $input = json_decode(file_get_contents('php://input'), true);
    $id = isset($input['id']) ? intval($input['id']) : 0;
    $student_name = isset($input['student_name']) ? trim($input['student_name']) : '';
    $photo_url = isset($input['photo_url']) ? trim($input['photo_url']) : '';
    $university = isset($input['university']) ? trim($input['university']) : '';
    $country = isset($input['country']) ? trim($input['country']) : '';
    $quote = isset($input['quote']) ? trim($input['quote']) : '';
    $is_featured = isset($input['is_featured']) ? (int)$input['is_featured'] : 0;

    if (empty($student_name) || empty($photo_url) || empty($university) || empty($country) || empty($quote)) {
        http_response_code(400);
        echo json_encode(["error" => "Student name, photo URL, university, country, and quote are required fields"]);
        exit();
    }

    if ($id > 0) {
        // Update
        $stmt = $db->prepare("UPDATE testimonials SET student_name = ?, photo_url = ?, university = ?, country = ?, quote = ?, is_featured = ? WHERE id = ?");
        $stmt->execute([$student_name, $photo_url, $university, $country, $quote, $is_featured, $id]);
        echo json_encode(["message" => "Testimonial updated successfully", "id" => $id]);
    } else {
        // Create
        $stmt = $db->prepare("INSERT INTO testimonials (student_name, photo_url, university, country, quote, is_featured) VALUES (?, ?, ?, ?, ?, ?)");
        $stmt->execute([$student_name, $photo_url, $university, $country, $quote, $is_featured]);
        echo json_encode(["message" => "Testimonial created successfully", "id" => $db->lastInsertId()]);
    }

} elseif ($method === 'DELETE') {
    // Delete testimonial
    require_auth();

    $id = isset($_GET['id']) ? intval($_GET['id']) : 0;
    if (!$id) {
        http_response_code(400);
        echo json_encode(["error" => "Testimonial ID is required"]);
        exit();
    }

    $stmt = $db->prepare("DELETE FROM testimonials WHERE id = ?");
    $stmt->execute([$id]);
    echo json_encode(["message" => "Testimonial deleted successfully"]);

} else {
    http_response_code(405);
    echo json_encode(["error" => "Method not allowed"]);
}
