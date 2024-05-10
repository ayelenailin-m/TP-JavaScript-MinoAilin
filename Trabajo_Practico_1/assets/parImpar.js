
let numero = parseInt(prompt("Ingrese un número entero:"));

if (!isNaN(numero)) {

    if (numero % 2 === 0) {
        console.log("El número ingresado es par.");
    } else {
        console.log("El número ingresado es impar.");
    }
} else {
    console.log("No ingresaste un número entero válido.");
}
