<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
// Database configuration
$servername = "localhost"; // Replace with your MySQL server hostname
$username = "root"; // Replace with your MySQL username
$password = "26638589"; // Replace with your MySQL password
$dbname = "users"; // Replace with your MySQL database name

// Create a connection to the MySQL database
$conn = new mysqli($servername, $username, $password, $dbname);

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
    // Function to add a user
function add_user($conn, $username, $email, $password) {
    // Escape special characters to prevent SQL injection
    $username = mysqli_real_escape_string($conn, $username);
    $email = mysqli_real_escape_string($conn, $email);
    $password = mysqli_real_escape_string($conn, $password);

    // Hash the password for security
    $hashed_password = password_hash($password, PASSWORD_DEFAULT);

    // SQL query to insert user into database
    $sql = "INSERT INTO users (username, email, password) VALUES ('$username', '$email', '$hashed_password')";

    if ($conn->query($sql) === TRUE) {
        return true; // User added successfully
    } else {
        return false; // Error adding user
    }
}

// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $username = $_POST["username"];
    $email = $_POST["email"];
    $password = $_POST["password"];

    // Call add_user function to add user to database
    if (add_user($conn, $username, $email, $password)) {
        echo "User added successfully";
    } else {
        echo "Error adding user";
    }
}

// Close connection
$conn->close();
?>
</body>
</html>