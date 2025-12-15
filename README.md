Proyecto Gestor de Productos

En este proyecto se desarrolló un sistema de gestión de productos utilizando HTML, Bootstrap 5 y JavaScript con jQuery, implementando una interfaz dinámica y ordenada que permite registrar, visualizar y administrar productos de manera sencilla. El objetivo principal fue demostrar el dominio del manejo del DOM, la validación de datos ingresados por el usuario y la generación dinámica de contenido, aplicando lógica de programación básica en JavaScript y el uso de componentes visuales de Bootstrap.

Primero, se creó el archivo index.html, donde se construyó toda la estructura visual del sistema. Se utilizaron contenedores container, filas row y columnas col de Bootstrap 5 para organizar la interfaz en dos secciones principales: un formulario de registro de productos y una tabla para mostrar la lista de productos registrados. En el formulario se incluyeron campos para el nombre del producto, el precio y la categoría, junto con el botón Agregar producto, encargado de activar la lógica de registro. En la sección de la tabla se añadieron controles adicionales como el filtro por categoría, el buscador por nombre y el selector para ordenar los productos por precio.

Posteriormente, en el archivo main.js, se desarrolló la funcionalidad principal del sistema utilizando jQuery. Se capturaron los elementos del DOM y se validó el ingreso de datos mediante condicionales, mostrando mensajes de alerta cuando los campos estaban vacíos o no cumplían con los valores permitidos. Una vez validados los datos, el producto se agregó a un arreglo principal y la tabla se construyó de forma dinámica, mostrando para cada producto su identificador, nombre, precio, categoría y la acción correspondiente.

Además, se implementó el botón Ver estadísticas, el cual permite mostrar un resumen general de los productos registrados. A partir del arreglo principal, se calculan y presentan los resultados dentro del contenedor destinado a estadísticas, reforzando el uso de ciclos y el procesamiento de datos en JavaScript. Todo el contenido mostrado se genera dinámicamente sin necesidad de recargar la página, demostrando el uso correcto de jQuery para la manipulación del DOM.

<img width="1920" height="790" alt="{C47A00EF-0BAA-4242-8DE8-5B6239CFE482}" src="https://github.com/user-attachments/assets/881ddcfc-5321-4804-8e0c-c97fab8b60c6" />

<img width="1920" height="875" alt="{0A322A57-A0F5-4F7D-971F-3BC470CDD694}" src="https://github.com/user-attachments/assets/2d21dd8c-dd4a-480b-a007-d4930849abe2" />
