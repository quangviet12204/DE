<?php
header("Content-Type: application/json");
include("../config/db.php");

$data = json_decode(file_get_contents("php://input"), true);

$name     = $data['name'] ?? '';
$email    = $data['email'] ?? '';
$password = $data['password'] ?? '';

if (!$name || !$email || !$password) {
    echo json_encode([
        "success" => false,
        "message" => "Missing required fields"
    ]);
    exit;
}

/* Mã hóa mật khẩu */
$hashedPassword = password_hash($password, PASSWORD_BCRYPT);

/* Kiểm tra email tồn tại */
$check = $conn->prepare("SELECT id FROM users WHERE email = ?");
$check->bind_param("s", $email);
$check->execute();
$check->store_result();

if ($check->num_rows > 0) {
    echo json_encode([
        "success" => false,
        "message" => "Email already exists"
    ]);
    exit;
}

/* Insert user */
$sql = $conn->prepare(
    "INSERT INTO users (name, email, password) VALUES (?, ?, ?)"
);
$sql->bind_param("sss", $name, $email, $hashedPassword);

if ($sql->execute()) {
    echo json_encode([
        "success" => true,
        "message" => "Register successful"
    ]);
} else {
    echo json_encode([
        "success" => false,
        "message" => "Register failed"
    ]);
}
