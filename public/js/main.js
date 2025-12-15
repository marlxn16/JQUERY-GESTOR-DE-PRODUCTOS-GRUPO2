// Implementar funcion para agregar productos

// Evento Click 
$('#btn_agregar').click(function() {
    agregarProducto();
});

// Funcion para agregar un producto
function agregarProducto() {
    
    var nombre = $('#txt_nombre').val();
    var precio = parseFloat($('#txt_precio').val());
    var categoria = $('#select_categoria').val();

    // Validamos con alertas
    if (nombre === '' || isNaN(precio) || categoria === null) {
        $('#alerta').html('<div class="alert alert-warning mt-3">Complete todos los campos</div>');
        return;
    }

    if (precio <= 0) {
        $('#alerta').html('<div class="alert alert-warning mt-3">El precio debe ser mayor a 0</div>');
        return;
    }

    // se crea el objeto
    var producto = {
        id: id_contador,
        nombre: nombre,
        precio: precio,
        categoria: categoria
    };

    productos.push(producto);
    id_contador++;

    // Limpiamos
    $('#txt_nombre').val('');
    $('#txt_precio').val('');
    $('#select_categoria').val('');

    $('#alerta').html('<div class="alert alert-success mt-3">Producto agregado</div>');

    mostrarTabla();
}