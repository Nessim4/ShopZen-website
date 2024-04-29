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
?>