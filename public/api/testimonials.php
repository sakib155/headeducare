<?php
require_once __DIR__ . '/db.php';
require_once __DIR__ . '/auth_check.php';

header('Content-Type: application/json');

$method = $_SERVER['REQUEST_METHOD'];
$db = Database::getConnection();

// The rating column ships with migrate_testimonials_rating.sql. Probe it once
// per request so the endpoint keeps working before AND after the migration.
$hasRating = false;
try {
    $hasRating = (bool) $db->query("SHOW COLUMNS FROM testimonials LIKE 'rating'")->fetch();
} catch (Exception $e) {
    $hasRating = false;
}

if ($method === 'GET') {
    // Admin (authenticated session): full list incl. pending moderation.
    // Public visitors: approved (featured) reviews only.
    $is_admin = isset($_SESSION['user_id']);
    $stmt = $db->prepare($is_admin
        ? "SELECT * FROM testimonials ORDER BY id DESC"
        : "SELECT * FROM testimonials WHERE is_featured = 1 ORDER BY id DESC");
    $stmt->execute();
    $testimonials = $stmt->fetchAll();

    foreach ($testimonials as &$t) {
        $t['is_featured'] = (bool)$t['is_featured'];
        if ($hasRating) {
            $t['rating'] = (int)$t['rating'];
        }
    }

    echo json_encode($testimonials);

} elseif ($method === 'POST') {
    require_auth();

    $input = json_decode(file_get_contents('php://input'), true);
    $id = isset($input['id']) ? intval($input['id']) : 0;
    $is_featured = isset($input['is_featured']) ? (int)(bool)$input['is_featured'] : 0;

    // Lightweight publish/hide toggle: only id + is_featured provided
    if ($id > 0 && isset($input['is_featured']) && !isset($input['student_name'])) {
        $stmt = $db->prepare("UPDATE testimonials SET is_featured = ? WHERE id = ?");
        $stmt->execute([$is_featured, $id]);
        echo json_encode(["message" => $is_featured ? "Review published" : "Review hidden", "id" => $id, "is_featured" => (bool)$is_featured]);
        exit();
    }

    $student_name = isset($input['student_name']) ? trim($input['student_name']) : '';
    $photo_url = isset($input['photo_url']) ? trim($input['photo_url']) : '';
    $university = isset($input['university']) ? trim($input['university']) : '';
    $country = isset($input['country']) ? trim($input['country']) : '';
    $quote = isset($input['quote']) ? trim($input['quote']) : '';
    $rating = isset($input['rating']) ? max(1, min(5, intval($input['rating']))) : 5;

    if (empty($student_name) || empty($university) || empty($country) || empty($quote)) {
        http_response_code(400);
        echo json_encode(["error" => "Student name, university, country, and quote are required fields"]);
        exit();
    }

    if ($id > 0) {
        // Update
        if ($hasRating) {
            $stmt = $db->prepare("UPDATE testimonials SET student_name = ?, photo_url = ?, university = ?, country = ?, quote = ?, rating = ?, is_featured = ? WHERE id = ?");
            $stmt->execute([$student_name, $photo_url, $university, $country, $quote, $rating, $is_featured, $id]);
        } else {
            $stmt = $db->prepare("UPDATE testimonials SET student_name = ?, photo_url = ?, university = ?, country = ?, quote = ?, is_featured = ? WHERE id = ?");
            $stmt->execute([$student_name, $photo_url, $university, $country, $quote, $is_featured, $id]);
        }
        echo json_encode(["message" => "Testimonial updated successfully", "id" => $id]);
    } else {
        // Create
        if ($hasRating) {
            $stmt = $db->prepare("INSERT INTO testimonials (student_name, photo_url, university, country, quote, rating, is_featured) VALUES (?, ?, ?, ?, ?, ?, ?)");
            $stmt->execute([$student_name, $photo_url, $university, $country, $quote, $rating, $is_featured]);
        } else {
            $stmt = $db->prepare("INSERT INTO testimonials (student_name, photo_url, university, country, quote, is_featured) VALUES (?, ?, ?, ?, ?, ?)");
            $stmt->execute([$student_name, $photo_url, $university, $country, $quote, $is_featured]);
        }
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
