console.log("index1 OK");

let edad;

/*
    edad >= 18

    Puede ingresar
    No puede ingresar

    edad < 50

*/
edad = 0;

edad = prompt("Cuántos años tenés?");

console.log(typeof(edad));

if (edad >= 18 && edad < 50) {
    console.log("Puede ingresar");
}
else {  //si no
    console.log("NO PUEDE INGRESAR");
}





/*
    Una persona se puede jubilar:
        - Si es mujer y tiene 60 años o más VERDADERA
        O
        - Si es hombre y tiene 65 años o más
*/