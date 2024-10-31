// Array con las opciones de imágenes y textos
// utilizo las variables de un array para buscar la imagen que se requiera y un texto que la acompañe.
const opciones = [
    { imagen: "img/pintora.jpg", texto: "Texto para la imagen 1" },
    { imagen: "img/ginete.jpg", texto: "Texto para la imagen 2" },
    { imagen: "img/grafiteros.jpg", texto: "Texto para la imagen 3" },
    { imagen: "img/lanzador-flores.jpg", texto: "Texto para la imagen 4" },
    { imagen: "img/chica-globo.jpeg", texto: "Texto para la imagen 5" },
    { imagen: "img/chica-requisa.jpg", texto: "Texto para la imagen 6" },
    { imagen: "img/mucama.jpg", texto: "Texto para la imagen 7" },
    { imagen: "img/tirachinas.jpg", texto: "Texto para la imagen 8" },
    { imagen: "img/gatito-inglaterra.jpg", texto: "Texto para la imagen 9" },
    { imagen: "img/poli-beso.png", texto: "Texto para la imagen 10" }
];

// Función para mostrar una imagen y texto aleatorio
function mostrarAleatorio() {
    // Selecciona una variable aleatorio del array, tomando en cuanta el largo del array
    const aleatorio = Math.floor(Math.random() * opciones.length); 
    // Obtiene el objeto aleatorio del array y se lo atribuimos a la constante seleccion
    const seleccion = opciones[aleatorio]; 

    // Agarra los elementos del DOM con los ID imagenAleatoria y textoAleatorio para modificarlos con los que salieron del array
    const imagen = document.getElementById("imagenAleatoria");
    const texto = document.getElementById("textoAleatorio");

    // Actualiza la ruta de la imagen
    imagen.src = seleccion.imagen; 
    // Muestra la imagen aleatoria
    imagen.style.display = "block"; 
    // Actualiza el texto
    texto.textContent = seleccion.texto; 
}