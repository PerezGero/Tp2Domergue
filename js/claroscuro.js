function cambiarColor() {

	const div = document.getElementById("claroscuro");

	// Verifica el color actual del div 
    if (div.style.backgroundColor === "rgba(130, 130, 130, 0.8)") {

        // Si es "gis scuro", cambia al color original

        div.style.backgroundColor = "rgba(255, 255, 255, 0.8)";
    } else {

        // Si no es "gris oscuro", cambia a este

        div.style.backgroundColor = "rgba(130, 130, 130, 0.8)";
    }
}
