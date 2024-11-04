function enviarCorreo() {
      // anclo los valores de los elementos email, subject y message a constantes con sus respectivos nombres
      const email = document.getElementById("email").value;
      const subject = document.getElementById("subject").value;
      const message = document.getElementById("message").value;

      // Verificar si el correo contiene una arroba mediante el ".includes()", utilizo el "!" para verificar si es true o false la respuesta.
      if (!email.includes("@")) {
        alert("Por favor, ingresa un correo válido.");
        return false;
      }

      // Confirmación de envío al precionar el boton de "enviarCorreo" con un alert de que el email fue enviado.
      alert("El correo a sido enviado");
      return true;
    }