// Lista para almacenar los pedidos
let pedidos = [];

// Función para agregar un pedido
function agregarPedido(item) {
    pedidos.push(item);
    actualizarListaPedidos();
}

// Función para actualizar la lista de pedidos en la interfaz
function actualizarListaPedidos() {
    const pedidoLista = document.getElementById('pedido-lista');
    pedidoLista.innerHTML = ''; // Limpiar la lista antes de actualizar

    pedidos.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = item;
        pedidoLista.appendChild(li);
    });
}

// Función para confirmar el pedido
function confirmarPedido() {
    if (pedidos.length > 0) {
        alert('Pedido confirmado: ' + pedidos.join(', '));
        pedidos = []; // Limpiar los pedidos después de confirmar
        actualizarListaPedidos();
    } else {
        alert('No has agregado nada al pedido.');
    }
}
