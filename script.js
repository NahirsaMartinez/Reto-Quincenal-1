//query.selectors//
const inputNombre = document.querySelector("#entrada-nombre");
const inputEdad = document.querySelector("#entrada-edad");
const inputCorreo = document.querySelector("#entrada-correo");
const inputDni = document.querySelector ("#entrada-dni")
const imgPortada = document.querySelector ("#img-portada")
const pBienvenida = document.querySelector("#msj-bienvenida");
const cuerpoPagina = document.querySelector ("body");

// Constantes informacion//
const EDAD_MAYOR = 18;

const IMG_PORTADA_1 ="https://pa1.narvii.com/6569/225c1a1633f78322478e231324eed44a9e1a76ac_00.gif";
const IMG_PORTADA_2 ="https://24.media.tumblr.com/245f521ebb6f18153490587f70492f4d/tumblr_mmm85kOfvj1s8f329o1_250.gif";

const IMG_TAM_1= "250px";
const IMG_TAM_2= "400px";

const COLOR_FONDO = "#0d1117";
const COLOR_TXT = "#e6edf3";
const COLOR_TXT_RESULTADO = "lime";
const TXT_FUENTE = "monospace";

//Modificaciones esteticas//
imgPortada.src = IMG_PORTADA_1;
imgPortada.style.width = IMG_TAM_1;

cuerpoPagina.style.backgroundColor= COLOR_FONDO;
cuerpoPagina.style.color = COLOR_TXT;

pBienvenida.style.fontFamily = TXT_FUENTE;
pBienvenida.style.color= COLOR_TXT_RESULTADO;


//funcion
function mostrarmsj() {
    let nombreRecibido = inputNombre.value;
    let edadRecibido = inputEdad.value;
    let correoRecibido = inputCorreo.value;
    let dniRecibido = inputDni.value;

    imgPortada.src = IMG_PORTADA_2;

    pBienvenida.innerHTML = ("Hola " + nombreRecibido + "!" + "<br> Tu edad es :" + edadRecibido + "<br>" + "Tu correo es:" + correoRecibido + "<br> Tu DNI Es :" + dniRecibido);
    if (edadRecibido >= EDAD_MAYOR) {
        pBienvenida.innerHTML += (" <br> Eres mayor de edad");
       
    } else {
        pBienvenida.innerHTML += (" <br> Eres menor de edad");
}

  }
