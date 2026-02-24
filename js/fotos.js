// 1. Tu lista completa de imágenes (pueden ser URLs reales o rutas locales)
{
    const listaCompleta = [
    '../media/alojamiento/galeria/baño1.jpg',
    '../media/alojamiento/galeria/baño2.avif',
    '../media/alojamiento/galeria/baño3.avif',
    '../media/alojamiento/galeria/caballo1.jpg',
    '../media/alojamiento/galeria/caballos.jpg',
    '../media/alojamiento/galeria/caballos2.jpg',
    '../media/alojamiento/galeria/caballos3.jpg',
    '../media/alojamiento/galeria/caballos4.jpg',
    '../media/alojamiento/galeria/caballos5.jpg',
    '../media/alojamiento/galeria/fuera1.jpg',
    '../media/alojamiento/galeria/fuera2.jpg',
    '../media/alojamiento/galeria/fuera3.jpg',
    '../media/alojamiento/galeria/fuera4.jpg',
    '../media/alojamiento/galeria/fuera5.jpg',
    '../media/alojamiento/galeria/fuera6.jpg',
    '../media/alojamiento/galeria/fuera7.jpg',
    '../media/alojamiento/galeria/fuera8.jpg',
    '../media/alojamiento/galeria/fuera9.jpg',
    '../media/alojamiento/galeria/fuera10.jpg',
    '../media/alojamiento/galeria/fuera11.jpg',
    '../media/alojamiento/galeria/fuera12.jpg',
    '../media/alojamiento/galeria/habitación1.jpg',
    '../media/alojamiento/galeria/habitación2.avif',
    '../media/alojamiento/galeria/habitación3.avif',
    '../media/alojamiento/galeria/habitación4.avif',
    '../media/alojamiento/galeria/habitación5.jpg',
    '../media/alojamiento/galeria/habitación6.jpg',
    '../media/alojamiento/galeria/habitacion7.jpg',
    '../media/alojamiento/galeria/interior1.jpg',
    '../media/alojamiento/galeria/interior2.jpg',
    '../media/alojamiento/galeria/interior3.jpg',
    '../media/alojamiento/galeria/interior4.jpg',
    ];

    const mainImage = document.getElementById('princi');
    // Asumimos que tu contenedor de miniaturas en el HTML tiene la clase 'thumbnails-wrapper'
    const thumbnailsContainer = document.querySelector('.lista'); 

    let currentIndex = 0; // Índice de la imagen principal seleccionada
    const itemsVisibles = 7; // El tamaño de tu "ventana" de miniaturas

    // Función central que dibuja la galería cada vez que hay un cambio
    function renderGallery() {
    // 1. Actualizamos la imagen principal
    mainImage.src = listaCompleta[currentIndex];

    // 2. Calculamos el inicio de nuestra "ventana" de 7 imágenes.
    // Intentamos que la imagen activa quede en el centro siempre que sea posible.
    let start = currentIndex - Math.floor(itemsVisibles / 2);

    // Evitamos que la ventana se salga por el principio del array (índices negativos)
    if (start < 0) {
        start = 0;
    } 
    // Evitamos que la ventana se salga por el final del array
    else if (start > listaCompleta.length - itemsVisibles) {
        start = listaCompleta.length - itemsVisibles;
    }

    // 3. Extraemos nuestra "listaminiatura" (cortamos 7 elementos desde 'start')
    const listaMiniatura = listaCompleta.slice(start, start + itemsVisibles);

    // 4. Limpiamos el contenedor HTML para no acumular miniaturas viejas
    thumbnailsContainer.innerHTML = ''; 

    // 5. Generamos las nuevas 7 miniaturas
    listaMiniatura.forEach((src, indexRelativo) => {
        const indexReal = start + indexRelativo; // Calculamos su posición real en la lista completa
        
        // Creamos la etiqueta <img> desde JavaScript
        const img = document.createElement('img');
        img.src = src;
        img.className = 'miniatura';
        
        // Si esta miniatura es la que estamos viendo en grande, le ponemos la clase active
        if (indexReal === currentIndex) {
        img.classList.add('active');
        }
        
        // Le asignamos la función de clic a cada miniatura nueva
        img.onclick = () => {
        currentIndex = indexReal;
        renderGallery(); // Volvemos a dibujar
        };

        // La inyectamos en el HTML
        thumbnailsContainer.appendChild(img);
    });
    }

    // Funciones de los botones
    function nextImage() {
    currentIndex = (currentIndex + 1) % listaCompleta.length;
    renderGallery();
    }

    function prevImage() {
    currentIndex = (currentIndex - 1 + listaCompleta.length) % listaCompleta.length;
    renderGallery();
    }

    // Inicializamos la galería la primera vez que carga la página
    renderGallery();
}