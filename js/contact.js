function enviarCorreo() {
      const email = document.getElementById("email").value;
      const subject = document.getElementById("subject").value;
      const message = document.getElementById("message").value;

      // Verificar si el correo contiene una arroba
      if (!email.includes("@")) {
        alert("Por favor, ingresa un correo válido.");
        return false;
      }

      // Confirmación de envío
      alert("El correo a sido enviado");
      return true;
    }