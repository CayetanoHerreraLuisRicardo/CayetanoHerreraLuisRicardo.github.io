function validarSesion() {
 //obteniendo el valor que se puso en el campo usuario del formulario
 var usuario = document.getElementById("usu").value;
 //la condición
 if (usuario.length == 0 || /^\s+$/.test(usuario)) {
     alert('Introdusca un usuario!');
     return false;
 }
 
 //obteniendo el valor que se puso en el campo contraseña del formulario
 var password = document.getElementById("con").value;
 //la condición
 if (password.length == 0 || /^\s+$/.test(password)) {
     alert('Introdusca una contraseña!');
     return false;
 }
 return true;
 }