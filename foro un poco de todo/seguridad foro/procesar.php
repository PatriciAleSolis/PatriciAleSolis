<?php
$usuario = $_POST['usuario'];
$contrasena = $_POST['contrasena'];

// Verificar las credenciales (usuario y contraseña)
if ($usuario === 'admin' && $contrasena === 'password') {
  // Acceso concedido, redirigir a la sección de administradores
  header('Location: admin.php');
  exit();
} else {
  // Credenciales incorrectas, redirigir a una página de error o volver al formulario
  header('Location: error.php');
  exit();
}
?>
