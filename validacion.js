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
});

function show_cv() {
    var cv = document.getElementById("cv");
    var btn_cv = document.getElementById("btn_cv");
    var img = document.getElementById("arrow");

    if (cv.style.display == "none") {
        cv.style.display = "block";
        btn_cv.style.boxShadow = "inset 0px 0px 5px 3px rgba(0,0,0,0.75)"
        img.src = "assets/arrow_down.png"
    } else {
        cv.style.display = "none";
        btn_cv.style.background = "transparent";
        btn_cv.style.boxShadow = "none"
        img.src = "assets/arrow.png"
    }
};