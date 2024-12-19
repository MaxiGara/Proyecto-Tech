const productos = [
    {
        titulo: "Atención",
        descripcionCorta: "Asistencia médica a domicilio",
        descripcionLarga: "Asistencia médica en domicilio para garantizar el bienestar y tranquilidad del paciente sin salir de su zona de confort",
        imagen: "Atencion.jpg",
        precio: 14.000
    },
    {
        titulo: "Vacunación",
        descripcionCorta: "Vacunacion a domicilio",
        descripcionLarga: "La vacunación es uno de los aspectos mas importantes para garantizar una buena calidad de vida y evitar enfermedades infecciosas",
        imagen: "vacunacion.jpg",
        precio: 20.000
    },
    {
        titulo: "Emergencia",
        descripcionCorta: "En caso de emergencia",
        descripcionLarga: "Llegado a ocurrir algun accidente o siniestro, la atencion debe ser lo mas rápida posible",
        imagen: "emergencia.jpg",
        precio: 18.000
    },
    {
        titulo: "Eutanasia",
        descripcionCorta: "Eutanasia asistida en domicilio",
        descripcionLarga: "La eutanasia asistida es la última ayuda que se le puede brindar a un paciente terminal o con un cuadro irreversible que no le permita tener una vida sana o valerse por si mismo",
        imagen: "eutanasia.jpg",
        precio: 30.000
    }

];

// Función para crear una tarjeta de producto
function crearTarjeta(producto) {
    // Crear los elementos de la tarjeta
    const tarjeta = document.createElement('div');
    tarjeta.classList.add('col'); // Clase para Bootstrap
    const tarjetaContenido = document.createElement('div');
    tarjetaContenido.classList.add('card');
    const cuerpoTarjeta = document.createElement('div');
    cuerpoTarjeta.classList.add('card-body');

    // Agregar la imagen
    const imagen = document.createElement('img');
    imagen.src = `/Imagenes/${producto.imagen}`;
    imagen.alt = producto.titulo;
    imagen.classList.add('card-img-top'); // Clase para Bootstrap
    cuerpoTarjeta.appendChild(imagen);

    // Agregar el título
    const titulo = document.createElement('h5');
    titulo.classList.add('card-title');
    titulo.textContent = producto.titulo;
    cuerpoTarjeta.appendChild(titulo);

    // Agregar la descripción corta
    const descripcionCorta = document.createElement('p');
    descripcionCorta.classList.add('card-text');
    descripcionCorta.textContent = producto.descripcionCorta;
    cuerpoTarjeta.appendChild(descripcionCorta);

    // Agregar la descripción extendida (inicialmente oculta)
    const descripcionExtendida = document.createElement('p');
    descripcionExtendida.classList.add('card-text', 'descripcion-extendida');
    descripcionExtendida.textContent = producto.descripcionLarga;
    descripcionExtendida.style.display = 'none'; // Oculta inicialmente
    cuerpoTarjeta.appendChild(descripcionExtendida);

    // Agregar el botón para mostrar/ocultar la descripción
    const boton = document.createElement('button');
    boton.classList.add('btn', 'btn-primary');
    boton.textContent = 'Ver más';
    boton.setAttribute('aria-expanded', 'false');
    boton.addEventListener('click', () => {
        // Alterna la visibilidad de la descripción extendida
        descripcionExtendida.style.display = descripcionExtendida.style.display === 'none' ? 'block' : 'none';
        // Cambia el texto del botón
        boton.textContent = descripcionExtendida.style.display === 'none' ? 'Ver más' : 'Ver menos';
        // Actualiza el atributo aria-expanded para accesibilidad
        boton.setAttribute('aria-expanded', descripcionExtendida.style.display !== 'none');
    });
    cuerpoTarjeta.appendChild(boton);

    // Armar la tarjeta
    tarjetaContenido.appendChild(cuerpoTarjeta);
    tarjeta.appendChild(tarjetaContenido);
    return tarjeta;
}

// Obtener el contenedor donde se mostrarán las tarjetas
const contenedor = document.querySelector('.row');

// Limpiar el contenido existente del contenedor
contenedor.innerHTML = '';

// Crear y agregar las tarjetas al contenedor
productos.forEach(producto => {
    const nuevaTarjeta = crearTarjeta(producto);
    contenedor.appendChild(nuevaTarjeta);
});
