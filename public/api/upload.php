<?php
// ─────────────────────────────────────────────────────────────────────────────
// Image Upload + Auto-Resize Endpoint (Admin only)
// Accepts any image and resizes it to a uniform target resolution using PHP GD.
//   POST /api/upload.php?w=1920&h=1080   (multipart field: "image")
// Default target: 1920x1080 (16:9) — override with w/h query params.
// Returns: { "url": "https://.../uploads/<name>.jpg" }
// ─────────────────────────────────────────────────────────────────────────────

require_once __DIR__ . '/db.php';
require_once __DIR__ . '/auth_check.php';
require_auth();

header('Content-Type: application/json');

$method = $_SERVER['REQUEST_METHOD'];
if ($method !== 'POST') {
    http_response_code(405);
    echo json_encode(["error" => "Method not allowed"]);
    exit();
}

// ── Target resolution (default 1920x1080) ──────────────────────────────────
$targetW = isset($_GET['w']) ? max(1, intval($_GET['w'])) : 1920;
$targetH = isset($_GET['h']) ? max(1, intval($_GET['h'])) : 1080;

// ── Validate upload ─────────────────────────────────────────────────────────
if (!isset($_FILES['image']) || $_FILES['image']['error'] !== UPLOAD_ERR_OK) {
    http_response_code(400);
    echo json_encode(["error" => "No file uploaded"]);
    exit();
}

$file = $_FILES['image'];
if ($file['size'] > 15 * 1024 * 1024) { // 15 MB max
    http_response_code(413);
    echo json_encode(["error" => "File too large (max 15 MB)"]);
    exit();
}

$allowed = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];
$finfo = finfo_open(FILEINFO_MIME_TYPE);
$mime = finfo_file($finfo, $file['tmp_name']);
finfo_close($finfo);
if (!in_array($mime, $allowed)) {
    http_response_code(415);
    echo json_encode(["error" => "Unsupported file type. Use JPG, PNG, WEBP, or GIF."]);
    exit();
}

// ── Load source image via GD ────────────────────────────────────────────────
switch ($mime) {
    case 'image/jpeg': $src = @imagecreatefromjpeg($file['tmp_name']); break;
    case 'image/png':  $src = @imagecreatefrompng($file['tmp_name']);  break;
    case 'image/webp': $src = @imagecreatefromwebp($file['tmp_name']);  break;
    case 'image/gif':  $src = @imagecreatefromgif($file['tmp_name']);   break;
    default:           $src = false;
}
if (!$src) {
    http_response_code(400);
    echo json_encode(["error" => "Could not read image file"]);
    exit();
}

$srcW = imagesx($src);
$srcH = imagesy($src);

// ── Resize (cover-crop to exact target, keeps it uniform) ──────────────────
$dst = imagecreatetruecolor($targetW, $targetH);

// Preserve transparency for PNG/WEBP
if ($mime === 'image/png' || $mime === 'image/webp') {
    imagealphablending($dst, false);
    imagesavealpha($dst, true);
}

$scale = max($targetW / $srcW, $targetH / $srcH);
$cropW = (int)round($targetW / $scale);
$cropH = (int)round($targetH / $scale);
$cropX = (int)round(($srcW - $cropW) / 2);
$cropY = (int)round(($srcH - $cropH) / 2);

imagecopyresampled($dst, $src, 0, 0, max(0, $cropX), max(0, $cropY), $targetW, $targetH, $cropW, $cropH);

// ── Save to /uploads/ ───────────────────────────────────────────────────────
$uploadsDir = __DIR__ . '/../uploads';
if (!is_dir($uploadsDir)) {
    @mkdir($uploadsDir, 0755, true);
}

$name = uniqid('img_', true) . '.jpg';
$outPath = $uploadsDir . '/' . $name;

// Always output JPEG for uniform quality (transparency flattened to white)
$white = imagecreatetruecolor($targetW, $targetH);
$whiteFill = imagecolorallocate($white, 255, 255, 255);
imagefill($white, 0, 0, $whiteFill);
imagecopy($white, $dst, 0, 0, 0, 0, $targetW, $targetH);
$ok = imagejpeg($white, $outPath, 85);

imagedestroy($src);
imagedestroy($dst);
imagedestroy($white);

if (!$ok) {
    http_response_code(500);
    echo json_encode(["error" => "Failed to save resized image"]);
    exit();
}

$scheme = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off') ? 'https' : 'http';
$host = $_SERVER['HTTP_HOST'] ?? 'headeducare.com';
$url = $scheme . '://' . $host . '/uploads/' . $name;

echo json_encode([
    "url" => $url,
    "width" => $targetW,
    "height" => $targetH,
    "original_width" => $srcW,
    "original_height" => $srcH,
    "message" => "Image resized to {$targetW}x{$targetH}"
]);
