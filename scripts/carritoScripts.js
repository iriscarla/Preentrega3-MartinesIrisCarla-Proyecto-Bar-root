//Carrito
const carritoPagina = document.querySelector('div#carritoContainer');


const carritoGuardado = JSON.parse(localStorage.getItem('carritoUsuario')) || [];
console.table (carritoGuardado);



function mostrarCarritoEnHTML() {
   carritoContainer.innerHTML = '';
    carritoGuardado.forEach((productoCarrito) => {
        const nombre = productoCarrito.nombre;
        const precio = productoCarrito.precio;
        const productoDiv = document.createElement('div');
        productoDiv.textContent = `${nombre} - ${precio} $`;
        carritoContainer.appendChild(productoDiv);
    });
}

// Llamada a la función al cargar la página
document.addEventListener('DOMContentLoaded', mostrarCarritoEnHTML);
