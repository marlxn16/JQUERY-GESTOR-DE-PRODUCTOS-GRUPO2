var productos = [];
var id_contador = 1;
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
// Implementar funcion mostrar tabla con filtros y busqueda

// Evento Change - Filtro
$('#select_filtro').change(function() {
    mostrarTabla();
});

// Evento Keyup - Buscar
$('#txt_buscar').keyup(function() {
    mostrarTabla();
});

// Evento Change - Ordenar
$('#select_orden').change(function() {
    mostrarTabla();
});

// Funcion mostrar tabla
function mostrarTabla() {
    
    var filtro = $('#select_filtro').val();
    var buscar = $('#txt_buscar').val().toLowerCase();
    var orden = $('#select_orden').val();

    var lista = [];
    var i, j;

    // Filtrar productos
    for (i = 0; i < productos.length; i++) {
        
        var agregar = true;

        if (filtro !== 'Todos' && productos[i].categoria !== filtro) {
            agregar = false;
        }

        if (buscar !== '' && productos[i].nombre.toLowerCase().indexOf(buscar) === -1) {
            agregar = false;
        }

        if (agregar) {
            lista.push(productos[i]);
        }
    }

    // Ordenar ascendente
    if (orden === 'asc') {
        for (i = 0; i < lista.length - 1; i++) {
            for (j = 0; j < lista.length - i - 1; j++) {
                if (lista[j].precio > lista[j + 1].precio) {
                    var temp = lista[j];
                    lista[j] = lista[j + 1];
                    lista[j + 1] = temp;
                }
            }
        }
    }

    // Ordenar descendente
    if (orden === 'desc') {
        for (i = 0; i < lista.length - 1; i++) {
            for (j = 0; j < lista.length - i - 1; j++) {
                if (lista[j].precio < lista[j + 1].precio) {
                    var temp = lista[j];
                    lista[j] = lista[j + 1];
                    lista[j + 1] = temp;
                }
            }
        }
    }

    // Limpiar tabla
    $('#tabla_productos').empty();

    if (lista.length === 0) {
        $('#tabla_productos').html('<tr><td colspan="5" class="text-center">No hay productos</td></tr>');
        return;
    }

    // Mostrar productos
    for (i = 0; i < lista.length; i++) {
        var fila = '<tr>' +
                        '<td>' + lista[i].id + '</td>' +
                        '<td>' + lista[i].nombre + '</td>' +
                        '<td>$' + lista[i].precio.toFixed(2) + '</td>' +
                        '<td>' + lista[i].categoria + '</td>' +
                        '<td><button class="btn btn-danger btn-sm btn_eliminar" data-id="' + lista[i].id + '">Eliminar</button></td>' +
                   '</tr>';
        
        $('#tabla_productos').append(fila);
    }
}
// Implementar funcion para eliminar productos

// Evento Click 
$('#tabla_productos').on('click', '.btn_eliminar', function() {
    var id = parseInt($(this).data('id'));
    eliminarProducto(id);
});

// Funcion eliminar un producto
function eliminarProducto(id) {
    
    var i = 0;
    var encontrado = false;
    
    while (i < productos.length && !encontrado) {
        if (productos[i].id === id) {
            encontrado = true;
        } else {
            i++;
        }
    }

    if (encontrado) {
        productos.splice(i, 1);
        $('#alerta').html('<div class="alert alert-success mt-3">Producto eliminado</div>');
        mostrarTabla();
    }
}
// Implementar funcion calcular estadisticas

// Evento Click - Estadisticas
$('#btn_estadisticas').click(function() {
    calcularEstadisticas();
});

// Funcion calcular estadisticas
function calcularEstadisticas() {
    
    if (productos.length === 0) {
        $('#resultado_estadisticas').html('<div class="alert alert-info">No hay productos, agregue uno y vuelva a intentarlo</div>');
        return;
    }

    var total = productos.length;
    var suma = 0;
    var mas_caro = productos[0];
    var mas_barato = productos[0];
    var i;

    for (i = 0; i < productos.length; i++) {
        suma = suma + productos[i].precio;

        if (productos[i].precio > mas_caro.precio) {
            mas_caro = productos[i];
        }

        if (productos[i].precio < mas_barato.precio) {
            mas_barato = productos[i];
        }
    }

    var promedio = suma / total;

    var resultado = '<div class="card mb-4">' +
                        '<div class="card-body bg-success text-white">' +
                            '<h5>Estadisticas</h5>' +
                            '<div class="row text-center mt-3">' +
                                '<div class="col-md-3"><h3>' + total + '</h3><p>Total</p></div>' +
                                '<div class="col-md-3"><h3>$' + promedio.toFixed(2) + '</h3><p>Promedio</p></div>' +
                                '<div class="col-md-3"><h3>' + mas_caro.nombre + '</h3><p>Mas Caro</p></div>' +
                                '<div class="col-md-3"><h3>' + mas_barato.nombre + '</h3><p>Mas Barato</p></div>' +
                            '</div>' +
                        '</div>' +
                    '</div>';

    $('#resultado_estadisticas').html(resultado);
}