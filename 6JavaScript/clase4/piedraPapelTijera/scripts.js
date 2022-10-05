//Pedir al usuario que elija 
/* 1-Piedra
2-Papel
3-Tijera
*/

let opcionUsuario;

let opcionComputadora = Math.floor(Math.random() * 3 + 1);

console.log(opcionComputadora);
/*
if (opcionUsuario == opcionComputadora){
    empate
} else {
    switch(opcionUsuario) {
        case "1":
            if(opcionComputadora == 2) {
                Gano Computadora
            }
            else {
                Ganaste!!
            }
        case "2":
            if(opcionComputadora == 1) {
                Ganaste!!
            }
            else {
                Ganó Computadora
            }
    }

}
*/