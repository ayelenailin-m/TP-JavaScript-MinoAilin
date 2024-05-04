let nro1 = parseInt(prompt("Ingrese el primer número entero"));
let nro2 = parseInt(prompt("Ingrese el segundo número entero"));
let nro3 = parseInt(prompt("Ingrese el tercer número entero"));

if (!isNaN(nro1, nro2, nro3)) {
    if (nro1 === nro2 && nro2 === nro3){
        console.log("Los números ingresados son iguales. Por favor ingrese números diferentes.");
    } else if (nro1 === nro2 || nro1 === nro3 || nro2 === nro3){
        console.log("Dos de los números son iguales. Por favor ingrese números diferentes.")
    } else if (nro1 < nro2 && nro2 < nro3) {
        console.log("El orden ascendente es: " + nro1 + ", " + nro2 + ", " + nro3);
    } else if (nro3 < nro2 && nro2 < nro1){
        console.log("El orden ascendente es: " + nro3 + ", " + nro2 + ", " + nro1);
    } else if (nro2 < nro3 && nro3 < nro1){
        console.log("El orden ascendente es: " + nro2 + ", " + nro3 + ", " + nro1);
    } else if (nro3 < nro1 && nro1 < nro2){
        console.log("El orden ascendente es: " + nro3 + ", " + nro1 + ", " + nro2);
    } else if (nro1 < nro3 && nro3 < nro2){
        console.log("El orden ascendente es: " + nro1 + ", " + nro3 + ", " + nro2);
    } else if (nro2 < nro1 && nro1 < nro3){
        console.log("El orden ascendente es: " + nro2 + ", " + nro1 + ", " + nro3);
    } 
} else {
    console.log("No es un número entero válido"); 
}

