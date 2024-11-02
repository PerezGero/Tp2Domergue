// Array con las opciones de imágenes y textos
// utilizo las variables de un array para buscar la imagen que se requiera y un texto que la acompañe.
const opciones = [
    { imagen: "img/pintora.jpg", texto: "Esta escena es una chica negra tapando una esvastica con una lata de aerosol, la niña mira sobre su hombro, mirando al espectador, a su vez, a su lado se escuentra una bolsa de dormir y un oso de peluche." },
    { imagen: "img/ginete.jpg", texto: "Esta alegoria de las sendas de quienes hoy buscan refugio en Europa representa la obra de 'Napoleon cruzando los alpes' Aludiendo a los Tuareg, un pueblo nomada africano." },
    { imagen: "img/grafiteros.jpg", texto: "Esta es una pieza pintada con aerosol que representa a dos niños, uno de pie sobre la espalda del otro, estirándose para agarrar una lata de pintura en aerosol, que está en un cartel que dice que el graffiti es un delito." },
    { imagen: "img/lanzador-flores.jpg", texto: "Una de las intervenciones mas conocidad de banksy, y una de sus primeras, se unica en Beit Sahour, Cisjordania, en el Muro de Cisjordania." },
    { imagen: "img/chica-globo.jpeg", texto: "Este mural mundialmente conocido, representa a una niña dejando ir un globo rojo en forma de corazón. Es una imagen archiconocida que, según una encuesta realizada en 2017 en Reino Unido, se trata de la obra de arte favorita de los británicos." },
    { imagen: "img/chica-requisa.jpg", texto: "Esta obra se encuentra en un muro en la ciudad de Belen, en Palestina, muestra de forma satitica el como los soldados sobre acosan a la poblacion de la ciudad." },
    { imagen: "img/mucama.jpg", texto: "En un muro de Bristol, pintó en técnica de stencil a una mucama que esconde la basura de un recogedor, detrás de un telón que devela el ladrillo de la pared donde está pintada, de verdad es asombroso tanto su trabajo y su misterio." },
    { imagen: "img/tirachinas.jpg", texto: "El artista callejero británico Banksy ha asumido la autoría de un mural que se sospechaba que fuera suyo en su ciudad natal, Bristol, en el oeste de Inglaterra, dedicado a San Valentín. La obra muestra a una niña pequeña con un tirachinas y una salpicadura de flores rojas." },
    { imagen: "img/gatito-inglaterra.jpg", texto: "Una de las primeras obras atribuida a banksy, se unica en Shoreditch, Reino Unido" },
    { imagen: "img/poli-beso.png", texto: "Banksy nos quiso transmitir un claro mensaje de que el amor debe prevalecer como única fuerza en la tierra. También, realza la idea de que el amor no se debe reprimir por ninguna autoridad en ninguna circunstancia." }
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