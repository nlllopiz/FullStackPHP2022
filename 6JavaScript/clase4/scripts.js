console.log("clase4 OK");

/*
    Una persona se puede jubilar:
        - Si es mujer y tiene 60 años o más VERDADERA
        O
        - Si es hombre y tiene 65 años o más
*/

/*
let genero;
let edad;

genero = prompt("Género? (m/f)");

edad = prompt("Cuántos años tenés?");

console.log(genero);
console.log(edad);
/*
if (genero == "f" && edad >= 60){
    document.write("Se puede Jubilar");
} else if(genero == "m" && edad >= 65){
    document.write("Se puede Jubilar");
} else {
    document.write("No se puede Jubilar");
}
*/
/*
if (genero == "f" && edad >= 60 || edad >= 65){
    document.write("Se puede Jubilar");
} else {
    document.write("No se puede Jubilar");
}
*/

//días de la semana

let numeroDia = prompt("Ingrese número del día de la semana");

switch (numeroDia) {
    case "1":
        document.write("Lunes");
        break;
    case "2":
        document.write("Martes");
        break;
    case "3":
        document.write("Miércoles");
        break;
    case "4":
        document.write("Jueves");
        break;
    case "5":
        document.write("Viernes");
        break;
    case "6":
        document.write("Sábado");
        break;
    case "7":
        document.write("Domingo");
        break;

    default:
        document.write("Opción incorrecta");

}


