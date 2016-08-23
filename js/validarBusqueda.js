function validarBusqueda() {
 //obteniendo el valor que se puso en el campo usuario del formulario
 var busqueda = document.getElementById("busqueda").value;
 //la condición
 if (busqueda.length == 0 || /^\s+$/.test(busqueda)) {
     alert('Introdusca el titulo de la imagen a buscar!');
     return false;
 }

 return true;
 }