console.log("Clase3 Ok");

//funciones para usar con strings

let nombre = prompt("Cuál es tu nombre?");
let numero1 = 35;
let numero2 = 58;

//console.log(nombre);

console.log(nombre);

document.write("Nombre: " + nombre + "<br>");



document.write("Tu nombre tiene " + nombre.length +" caracteres");

document.write("Tu nombre en MAYUSCULAS: " + nombre.toUpperCase() + "<br>");

document.write("Tu nombre en minusculas: " + nombre.toLowerCase());

document.write(nombre.repeat(5) + "<br>");

document.write(nombre.replace("o", "8"));

//Operadores
console.log(numero1 + numero2);
console.log(numero1 - numero2);
console.log(numero1 * numero2);
console.log(numero1 / numero2);
console.log(numero1 % 2); //numero / 2

numero1++;

console.log(numero1);

numero2--;

console.log(numero2);

numero1 = numero1 + 5 //41

console.log(numero1);

numero1 += 5; //numero1 = numero1 + 5  46

console.log(numero1);

numero2 -= 10;

console.log(numero2);

