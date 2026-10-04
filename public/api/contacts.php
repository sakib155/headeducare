<?php
require_once __DIR__ . '/db.php';
require_once __DIR__ . '/auth_check.php';

header('Content-Type: application/json');

$method = $_SERVER['REQUEST_METHOD'];
$db = Database::getConnection();

if ($method === 'GET') {
    // Admin list of contacts with their linked lead (if any)
    require_auth();

    $stmt = $db->query("
        SELECT c.*, l.id AS lead_id, l.status AS lead_status
        FROM contacts c
        LEFT JOIN leads l ON l.contact_id = c.id
        ORDER BY c.created_at DESC
    ");
    $contacts = $stmt->fetchAll();

    echo json_encode($contacts);

} elseif ($method === 'POST') {
    // Admin manually adds a contact (creates contact + a 'new' lead automatically)
    require_auth();

    $input = json_decode(file_get_contents('php://input'), true);

    if (empty($input['name']) || empty($input['email']) || empty($input['phone'])) {
        http_response_code(400);
        echo json_encode(["error" => "Name, email, and phone are required fields."]);
        exit();
    }

    $name = trim($input['name']);
    $email = trim($input['email']);
    $phone = trim($input['phone']);
    $message = isset($input['message']) ? trim($input['message']) : null;
    $country_interest = isset($input['country_interest']) ? trim($input['country_interest']) : null;
    $service_interest = isset($input['service_interest']) ? trim($input['service_interest']) : null;

    $db->beginTransaction();
    try {
        $stmt = $db->prepare("INSERT INTO contacts (name, email, phone, message, source) VALUES (?, ?, ?, ?, 'manual')");
        $stmt->execute([$name, $email, $phone, $message]);
        $contactId = $db->lastInsertId();

        $stmt = $db->prepare("INSERT INTO leads (contact_id, country_interest, service_interest, status) VALUES (?, ?, ?, 'new')");
        $stmt->execute([$contactId, $country_interest, $service_interest]);
        $leadId = $db->lastInsertId();
        $db->commit();

        http_response_code(201);
        echo json_encode([
            "message" => "Contact added successfully",
            "contact_id" => $contactId,
            "lead_id" => $leadId
        ]);
    } catch (Exception $e) {
        $db->rollBack();
        http_response_code(500);
        echo json_encode(["error" => "Failed to add contact"]);
    }

} elseif ($method === 'DELETE') {
    // Admin delete contact (linked leads are removed by ON DELETE CASCADE)
    require_auth();

    $id = isset($_GET['id']) ? intval($_GET['id']) : 0;
    if (!$id) {
        http_response_code(400);
        echo json_encode(["error" => "Contact ID is required"]);
        exit();
    }

    $stmt = $db->prepare("DELETE FROM contacts WHERE id = ?");
    $stmt->execute([$id]);

    echo json_encode(["message" => "Contact deleted successfully"]);

} else {
    http_response_code(405);
    echo json_encode(["error" => "Method not allowed"]);
}
