const inputInfo = document.querySelector ("#entrada-nombre");
const pBienvenida = document.querySelector ("#msj-bienvenida");


function mostrarmsj(){
    nombreRecibido = inputInfo.value;
    pBienvenida.innerHTML = ("Bienvenido/a "+ nombreRecibido+ "!");

}