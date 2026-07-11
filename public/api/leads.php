<?php
require_once __DIR__ . '/db.php';
require_once __DIR__ . '/auth_check.php';

header('Content-Type: application/json');

$method = $_SERVER['REQUEST_METHOD'];
$db = Database::getConnection();

if ($method === 'POST') {
    // Check if updating lead status (requires admin auth)
    $action = isset($_GET['action']) ? $_GET['action'] : '';
    if ($action === 'update_status') {
        require_auth();
        $input = json_decode(file_get_contents('php://input'), true);
        $id = isset($input['id']) ? intval($input['id']) : 0;
        $status = isset($input['status']) ? trim($input['status']) : '';

        if (!$id || empty($status)) {
            http_response_code(400);
            echo json_encode(["error" => "Lead ID and status are required"]);
            exit();
        }

        $stmt = $db->prepare("UPDATE leads SET status = ? WHERE id = ?");
        $stmt->execute([$status, $id]);

        echo json_encode(["message" => "Lead status updated successfully"]);
        exit();
    }

    // Otherwise, create a new lead (public access)
    $input = json_decode(file_get_contents('php://input'), true);
    
    // Check required fields
    if (empty($input['name']) || empty($input['email']) || empty($input['phone'])) {
        http_response_code(400);
        echo json_encode(["error" => "Name, email, and phone are required fields."]);
        exit();
    }

    $name = trim($input['name']);
    $email = trim($input['email']);
    $phone = trim($input['phone']);
    $country_interest = isset($input['country_interest']) ? trim($input['country_interest']) : null;
    $service_interest = isset($input['service_interest']) ? trim($input['service_interest']) : null;
    $preferred_contact = isset($input['preferred_contact']) ? trim($input['preferred_contact']) : null;
    $preferred_date = !empty($input['preferred_date']) ? $input['preferred_date'] : null;
    $preferred_time = isset($input['preferred_time']) ? trim($input['preferred_time']) : null;
    $message = isset($input['message']) ? trim($input['message']) : null;

    $stmt = $db->prepare("INSERT INTO leads 
        (name, email, phone, country_interest, service_interest, preferred_contact, preferred_date, preferred_time, message, status) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, 'new')");
    
    $stmt->execute([
        $name, $email, $phone, $country_interest, $service_interest, 
        $preferred_contact, $preferred_date, $preferred_time, $message
    ]);

    http_response_code(201);
    echo json_encode(["message" => "Lead submitted successfully", "id" => $db->lastInsertId()]);

} elseif ($method === 'GET') {
    // Admin list of leads
    require_auth();

    $stmt = $db->query("SELECT * FROM leads ORDER BY created_at DESC");
    $leads = $stmt->fetchAll();

    echo json_encode($leads);

} elseif ($method === 'DELETE') {
    // Admin delete lead
    require_auth();

    $id = isset($_GET['id']) ? intval($_GET['id']) : 0;
    if (!$id) {
        http_response_code(400);
        echo json_encode(["error" => "Lead ID is required"]);
        exit();
    }

    $stmt = $db->prepare("DELETE FROM leads WHERE id = ?");
    $stmt->execute([$id]);

    echo json_encode(["message" => "Lead deleted successfully"]);

} else {
    http_response_code(405);
    echo json_encode(["error" => "Method not allowed"]);
}
