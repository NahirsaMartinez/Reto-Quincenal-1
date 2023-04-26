const inputNombre = document.querySelector("#entrada-nombre");
const inputEdad = document.querySelector("#entrada-edad");
const inputCorreo = document.querySelector("#entrada-correo");
const inputDni = document.querySelector ("#entrada-dni")
const pBienvenida = document.querySelector("#msj-bienvenida");

function mostrarmsj() {
    let nombreRecibido = inputNombre.value;
    let edadRecibido = inputEdad.value;
    let correoRecibido = inputCorreo.value;
    let dniRecibido = inputDni.value;
    pBienvenida.innerHTML = ("Hola " + nombreRecibido + "!" + "<br> Tu edad es :" + edadRecibido + "<br>" + "Tu correo es:" + correoRecibido + "<br> Tu DNI Es :" + dniRecibido);
}

if (edadRecibido >= 18) {
    
    
} else (edadRecibido <18) {
    
}