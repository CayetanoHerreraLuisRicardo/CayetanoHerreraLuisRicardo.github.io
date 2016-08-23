function validarRegistro() {
 //obteniendo el valor que se puso en el campo usuario del formulario
 var usuario = document.getElementById("username").value;
 //la condición
 if (usuario.length == 0 || /^\s+$/.test(usuario)) {
     alert('Introdusca un usuario!');
     return false;
 }
 if (usuario.length <=6) {
     alert('El campo nombre debe ser mayor de 6 letras!');
     return false;
 }
 
 //obteniendo el valor que se puso en el campo email del formulario
 var email = document.getElementById("email").value;
 //la condición
 if (email.length == 0 || /^\s+$/.test(email)) {
     alert('Introdusca una email!');
     return false;
 }
//obteniendo el valor que se puso en el campo contraseña del formulario
 var contrasenia = document.getElementById("password").value;
 //la condición
 if (contrasenia.length == 0 || /^\s+$/.test(contrasenia)) {
     alert('Introdusca una contraseña!');
     return false;
 }
 
 if (contrasenia.length <=6 ) {
     alert('El la contraseña debe ser mayor de 6 letras!');
     return false;
 }
 return true;
 }