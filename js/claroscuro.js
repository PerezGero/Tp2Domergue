function cambiarColor() {
    // anclo a una constante el get element by id de aquellos con id claroscuro
	const div = document.getElementById("claroscuro");

	// Verifica que el color actual del div sea el gris mas oscuro
    if (div.style.backgroundColor === "rgba(130, 130, 130, 0.8)") {

        // Si es gis oscuro, cambia al color original, sea gris claro

        div.style.backgroundColor = "rgba(255, 255, 255, 0.8)";
    } else {

        // Si no es gris oscuro, cambia a este mismo

        div.style.backgroundColor = "rgba(130, 130, 130, 0.8)";
    }
}
