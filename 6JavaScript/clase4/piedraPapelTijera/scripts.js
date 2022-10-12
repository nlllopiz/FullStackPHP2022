//Pedir al usuario que elija 
/* 1-Piedra
2-Papel
3-Tijera
*/

let opcionUsuario = prompt("1-Piedra 2-Papel 3-Tijera");


//let opcionComputadora = 1;

let opcionComputadora = Math.floor(Math.random() * 3 + 1);


let ganoUsuario = 0 , ganoComputadors = 0;

//console.log(opcionComputadora);

if (opcionUsuario == opcionComputadora){
    document.write("<br>Empate");
} else {
    switch(opcionUsuario) {
        case "1":
            if(opcionComputadora == 2) {
                document.write("<br>Tu opción: " + opcionUsuario + "- Piedra");
                document.write("<br>Computadora: " + opcionComputadora + "- Papel");
                document.write("<br>Gana Computadora!");
                ganoComputadora++;
            } else {  //opcionComputadora == 3
                document.write("<br>Tu opción: " + opcionUsuario + "- Piedra");
                document.write("<br>Computadora: " + opcionComputadora + "- Tijera");
                document.write("<br>Ganaste!!!");
            }
            break;

        case "2":
            if(opcionComputadora == 1) {
                document.write("<br>Tu opción: " + opcionUsuario + "- Papel");
                document.write("<br>Computadora: " + opcionComputadora + "- Piedra");
                document.write("<br>Ganaste!!");
            } else {    //opcionComputadora == 3
                document.write("<br>Tu opción: " + opcionUsuario + "- Papel");
                document.write("<br>Computadora: " + opcionComputadora + "- Tijera");

                document.write("<br>Ganó Computadora");
            }
            break;
        case "3":
            if (opcionComputadora == 1) {
                document.write("<br>Tu opción: " + opcionUsuario + "- Tijera");
                document.write("<br>Computadora: " + opcionComputadora + "- Piedra");
                document.write("<br>Gana Computadora");
            } else {  //opcion Computadora == 2
                document.write("<br>Tu opción: " + opcionUsuario + "- Tijera");
                document.write("<br>Computadora: " + opcionComputadora + "- Papel");
                document.write("<br>Ganaste!!!");
            }
            break;

        default:
            document.write("<br> Opción Incorrecta");
    }
/*
    desea salir? (s/n)
    salir = 

while(salir = "n")
*/


}
