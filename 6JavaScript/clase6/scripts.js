console.log("clase6 OK");

function saludar(nombreAlumno, apellidoAlumno = '') {
    console.log("Hola " + nombreAlumno + " " + apellidoAlumno);
    console.log("Cómo estás?");
    console.log("Nos vemos!!");
}

saludar("Jessica", "Monja");

saludar("Juan");



function sumar(numero1, numero2){
    let sumafc;
    sumafc = numero1 + numero2;
    return sumafc;
}

console.log(numero1);

console.log(sumar(3,5));

var alumnos = ["Jessica", "Carlos", "Claudia", "Juan"];

function saludarAlumnos(arreglo){
    for(i=0; i<arreglo.length;i++) {
        console.log("Hola " + arreglo[i]);
    }
}

saludarAlumnos(alumnos);