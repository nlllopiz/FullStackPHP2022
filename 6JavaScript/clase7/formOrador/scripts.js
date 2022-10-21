console.log("Clase7 OK");


//validar formulario Orador
const InputNombre = document.getElementById("nombre");

const InputEmail = document.getElementById("email");

const pMensajeNombre = document.getElementById("mensajeNombre");

const pMensajeEmail = document.getElementById("mensajeEmail");

const botonEnviar = document.getElementById("enviar");

const expRegular = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/


function validarNombre() {
    if (InputNombre.value.length < 3) {
        pMensajeNombre.innerHTML = "Ingrese un nombre válido";
    }
    else {
        pMensajeNombre.innerHTML = "Nombre correcto!!";
    }
}

botonEnviar.addEventListener("click", validarNombre);

botonEnviar.addEventListener("click", validarEmail);

function validarEmail() {
    if (!expRegular.test(InputEmail.value)) {
        pMensajeEmail.innerHTML = "El email no es valido";
    }
    else {
        pMensajeEmail.innerHTML = "Email correcto";
    }
}