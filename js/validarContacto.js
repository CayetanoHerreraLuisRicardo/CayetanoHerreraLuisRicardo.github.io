function validar() {
 //obteniendo el valor que se puso en el campo text del formulario
 var nombre = document.getElementById("name").value;
 //la condición
 if (nombre.length == 0 || /^\s+$/.test(nombre)) {
     alert(nombre.innerHTML);
	 nombre.focus();
     return false;
 }
 
 //obteniendo el valor que se puso en el campo text del formulario
 var email = document.getElementById("email").value;
 //la condición
 if (email.length == 0 || /^\s+$/.test(email)) {
     alert(email.innerHTML);
     return false;
 }

 //obteniendo el valor que se puso en el campo text del formulario
 var mensaje = document.getElementById("comments").value;
 //la condición
 if (mensaje.length == 0 || /^\s+$/.test(mensaje)) {
     alert(mensaje.innerHTML);
     return false;
 }
    
 //Validando el combo select
 var interes = document.getElementById("interes").value;
 if(interes == ""){
     alert(interes.innerHTML);
     return false;
 }

 return true;
 }