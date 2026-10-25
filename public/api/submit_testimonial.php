<?php
// ─────────────────────────────────────────────────────────────────────────────
// Public Testimonial Submission (no admin auth — used by the website form)
//   POST /api/submit_testimonial.php  (application/json)
//   fields: student_name, university, country, quote, photo_base64 (optional)
// Photos arrive as base64 data-URL, decoded + auto-resized to 400x400 (GD).
// Submitted reviews are inserted with is_featured=0 (pending admin approval).
// ─────────────────────────────────────────────────────────────────────────────

require_once __DIR__ . '/db.php';

header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["error" => "Method not allowed"]);
    exit();
}

$input = json_decode(file_get_contents('php://input'), true);
if (!is_array($input)) {
    $input = $_POST;
}

// ── Validate required fields ────────────────────────────────────────────────
$student_name = isset($input['student_name']) ? trim($input['student_name']) : '';
$university   = isset($input['university']) ? trim($input['university']) : '';
$country      = isset($input['country']) ? trim($input['country']) : '';
$quote        = isset($input['quote']) ? trim($input['quote']) : '';

if (empty($student_name) || empty($university) || empty($country) || empty($quote)) {
    http_response_code(400);
    echo json_encode(["error" => "Name, university, country, and review are required."]);
    exit();
}

if (mb_strlen($quote) > 1500) {
    http_response_code(400);
    echo json_encode(["error" => "Review is too long (max 1500 characters)."]);
    exit();
}

// ── Optional photo (base64 data-URL) → resize to 400x400 ────────────────────
$photo_url = '';
if (!empty($input['photo_base64'])) {
    $dataUrl = $input['photo_base64'];
    if (preg_match('/^data:image\/(jpeg|png|webp|gif);base64,(.+)$/i', $dataUrl, $m)) {
        $mime = 'image/' . strtolower($m['mime'] === 'jpeg' ? 'jpeg' : $m['mime']);
        $raw = base64_decode(str_replace(' ', '+', $m[2]));
        if ($raw === false || strlen($raw) > 15 * 1024 * 1024) {
            http_response_code(413);
            echo json_encode(["error" => "Photo too large (max 15 MB)."]);
            exit();
        }
        $tmpFile = tempnam(sys_get_temp_dir(), 'ts_');
        file_put_contents($tmpFile, $raw);

        switch ($mime) {
            case 'image/jpeg': $src = @imagecreatefromjpeg($tmpFile); break;
            case 'image/png':  $src = @imagecreatefrompng($tmpFile);  break;
            case 'image/webp': $src = @imagecreatefromwebp($tmpFile);  break;
            case 'image/gif':  $src = @imagecreatefromgif($tmpFile);   break;
            default:           $src = false;
        }
        unlink($tmpFile);

        if (!$src) {
            http_response_code(400);
            echo json_encode(["error" => "Could not read the photo file."]);
            exit();
        }

        $TARGET = 400;
        $srcW = imagesx($src);
        $srcH = imagesy($src);
        $dst = imagecreatetruecolor($TARGET, $TARGET);
        imagealphablending($dst, false);
        imagesavealpha($dst, true);

        $scale = max($TARGET / $srcW, $TARGET / $srcH);
        $cropW = (int)round($TARGET / $scale);
        $cropH = (int)round($TARGET / $scale);
        $cropX = (int)round(($srcW - $cropW) / 2);
        $cropY = (int)round(($srcH - $cropH) / 2);
        imagecopyresampled($dst, $src, 0, 0, max(0, $cropX), max(0, $cropY), $TARGET, $TARGET, $cropW, $cropH);

        $uploadsDir = __DIR__ . '/../uploads';
        if (!is_dir($uploadsDir)) @mkdir($uploadsDir, 0755, true);
        $name = 't_' . uniqid('', true) . '.jpg';
        $outPath = $uploadsDir . '/' . $name;

        $white = imagecreatetruecolor($TARGET, $TARGET);
        $whiteFill = imagecolorallocate($white, 255, 255, 255);
        imagefill($white, 0, 0, $whiteFill);
        imagecopy($white, $dst, 0, 0, 0, 0, $TARGET, $TARGET);
        $ok = imagejpeg($white, $outPath, 85);

        imagedestroy($src); imagedestroy($dst); imagedestroy($white);

        if (!$ok) {
            http_response_code(500);
            echo json_encode(["error" => "Failed to save the photo."]);
            exit();
        }
        $scheme = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off') ? 'https' : 'http';
        $host = $_SERVER['HTTP_HOST'] ?? 'headeducare.com';
        $photo_url = $scheme . '://' . $host . '/uploads/' . $name;
    }
}

// ── Insert (pending moderation: is_featured = 0) ────────────────────────────
try {
    $db = Database::getConnection();
    $stmt = $db->prepare(
        "INSERT INTO testimonials (student_name, photo_url, university, country, quote, is_featured) VALUES (?, ?, ?, ?, ?, 0)"
    );
    $stmt->execute([$student_name, $photo_url, $university, $country, $quote]);
    http_response_code(201);
    echo json_encode([
        "message" => "Testimonial submitted successfully. Thank you!",
        "id" => $db->lastInsertId(),
        "status" => "pending"
    ]);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(["error" => "Failed to save your review. Please try again."]);
}
