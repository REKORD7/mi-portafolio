//Validación en javascript de formulario

var nombre = document.getElementById("nombre");
var email = document.getElementById("email");
var asunto = document.getElementById("asunto");
var mensaje = document.getElementById("mensaje");
var error = document.getElementById("error");
error.style.color = "red";

var form = document.getElementById('formulario');
form.addEventListener('submit', function(event){
    
    event.preventDefault();
    var mensajesError = [];

    if(nombre.value === null || nombre.value === ''){
        if(mensajesError.length == 0){
            mensajesError.push('Favor de ingresar: nombre')
        }
    }

    if(email.value === null || email.value === ''){
        if(mensajesError.length  == 0){
            mensajesError.push('Favor de ingresar: email')
        }else{
            mensajesError.push('email')
        }
        
    }

    if(asunto.value === null || asunto.value === ''){
        if(mensajesError.length == 0){
            mensajesError.push('Favor de ingresar: asunto')
        }else{
            mensajesError.push('asunto')
        }
    }

    if(mensaje.value === null || mensaje.value === ''){
        if(mensajesError.length == 0){
            mensajesError.push('Favor de ingresar: mensaje')
        }else{
            mensajesError.push('mensaje')
        }
    }

    error.innerHTML = mensajesError.join(', ');
    enviarFormulario();
})