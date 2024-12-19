const productos = [
    {
        titulo: "Atención",
        precio: 14.000
    },
    {
        titulo: "Vacunación",
        precio: 20.000
    },
    {
        titulo: "Emergencia",
        precio: 18.000
    },
    {
        titulo: "Eutanasia",
        precio: 30.000
    }

];

//Carrito de compras

// Constante para el IVA
const IVA = 0.21;

// Inicializar el carrito al cargar la página
document.addEventListener('DOMContentLoaded', cargarCarrito);

let carrito = []; // Carrito de compras en memoria

function agregarAlCarrito(nombre, precio) {
    // Agregar elemento al carrito
    carrito.push({ nombre, precio });

    // Guardar carrito en localStorage (opcional, para persistencia)
    localStorage.setItem('carrito', JSON.stringify(carrito));

    // Actualizar la interfaz de usuario
    renderizarCarrito();
}

function renderizarCarrito() {
    const listaCarrito = document.getElementById('lista-carrito');
    const subtotalCarrito = document.getElementById('subtotal-carrito');
    const ivaCarrito = document.getElementById('iva-carrito');
    const totalCarrito = document.getElementById('total-carrito');

    // Limpiar lista anterior
    listaCarrito.innerHTML = '';

    // Calcular totales
    let subtotal = 0;
    carrito.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.nombre} - $${item.precio}`;
        listaCarrito.appendChild(li);
        subtotal += item.precio;
    });

    const iva = subtotal * IVA;
    const total = subtotal + iva;

    // Actualizar totales en la interfaz
    subtotalCarrito.textContent = subtotal.toFixed(2);
    ivaCarrito.textContent = iva.toFixed(2);
    totalCarrito.textContent = total.toFixed(2);

}

function vaciarCarrito() {
    carrito = []; // Limpiar el carrito en memoria
    localStorage.removeItem('carrito'); // Limpiar el carrito en localStorage
    renderizarCarrito();
}

function mostrarCheckout() {
    const modal = document.getElementById('checkout-modal');
    modal.style.display = 'flex';

    // Actualizar totales en el modal
    const subtotal = parseFloat(document.getElementById('subtotal-carrito').textContent);
    const iva = parseFloat(document.getElementById('iva-carrito').textContent);
    const total = parseFloat(document.getElementById('total-carrito').textContent);

    document.getElementById('modal-subtotal').textContent = subtotal.toFixed(2);
    document.getElementById('modal-iva').textContent = iva.toFixed(2);
    document.getElementById('modal-total').textContent = total.toFixed(2);
}

function realizarCompra() {
    alert('¡Compra realizada con éxito!');
    vaciarCarrito();
    cerrarCheckout();
}

function cerrarCheckout() {
    const modal = document.getElementById('checkout-modal');
    modal.style.display = 'none';
}

function cargarCarrito() {
    // Cargar carrito desde localStorage al inicio (opcional)
    const carritoAlmacenado = localStorage.getItem('carrito');
    if (carritoAlmacenado) {
        carrito = JSON.parse(carritoAlmacenado);
        renderizarCarrito();
    }
}