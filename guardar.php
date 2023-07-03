<?php
// Conexión a la base de datos (reemplaza los valores con los de tu configuración)
$servername = "localhost";
$username = "tu_usuario";
$password = "tu_contraseña";
$dbname = "nombre_de_la_base_de_datos";

// Obtener los datos del formulario
$usernameInput = $_POST['username'];
$passwordInput = $_POST['password'];

// Crear la conexión a la base de datos
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar la conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Insertar los datos en la base de datos
$sql = "INSERT INTO usuarios (username, password) VALUES ('$usernameInput', '$passwordInput')";

if ($conn->query($sql) === TRUE) {
    echo "Datos guardados correctamente";
} else {
    echo "Error al guardar los datos: " . $conn->error;
}

// Cerrar la conexión
$conn->close();
?>
