<?php
header("Content-Type: application/json");
include("../config/db.php");

$data = json_decode(file_get_contents("php://input"), true);

$email    = $data['email'] ?? '';
$password = $data['password'] ?? '';

if (!$email || !$password) {
    echo json_encode([
        "success" => false,
        "message" => "Missing email or password"
    ]);
    exit;
}

/* Tìm user */
$sql = $conn->prepare(
    "SELECT id, name, password FROM users WHERE email = ?"
);
$sql->bind_param("s", $email);
$sql->execute();
$result = $sql->get_result();

if ($result->num_rows === 0) {
    echo json_encode([
        "success" => false,
        "message" => "Invalid email or password"
    ]);
    exit;
}

$user = $result->fetch_assoc();

/* So sánh mật khẩu */
if (!password_verify($password, $user['password'])) {
    echo json_encode([
        "success" => false,
        "message" => "Invalid email or password"
    ]);
    exit;
}

/* Login thành công */
echo json_encode([
    "success" => true,
    "message" => "Login successful",
    "user" => [
        "id" => $user['id'],
        "name" => $user['name'],
        "email" => $email
    ]
]);
