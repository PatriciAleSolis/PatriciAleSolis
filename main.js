function acceder() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // Aquí puedes realizar la lógica de autenticación con los datos ingresados
    // Puedes hacer una comparación con valores fijos o enviar una solicitud al servidor para verificar los datos
  
    if (username === "usuario" && password === "contraseña") {
      alert("Inicio de sesión exitoso");
      // Aquí puedes redirigir al usuario a otra página o realizar otras acciones
    } else {
      alert("Credenciales inválidas. Por favor, inténtalo nuevamente.");
    }
  }
  


