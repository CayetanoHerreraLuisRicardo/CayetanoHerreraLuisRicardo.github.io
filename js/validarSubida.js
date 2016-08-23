function validarSubida() {
 //obteniendo el valor que se puso en el campo usuario del formulario
 var titulo = document.getElementById("titulo").value;
 //la condición
 if (titulo.length == 0 || /^\s+$/.test(titulo)) {
     alert('Introduce el titulo de la imagen!');
     return false;
 }

 return true;
 }