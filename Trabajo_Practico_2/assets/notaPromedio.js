let notaT1 = parseInt(prompt("Ingrese su nota del primer trimestre"));
let notaT2 = parseInt(prompt("Ingrese su nota del segundo trimestre"));
let notaT3 = parseInt(prompt("Ingrese su nota del tercer cuatrimestre"));

if (isNaN(notaT1) || isNaN(notaT2) || isNaN(notaT3)) {
    console.log("Valor inválido")
} 
if (notaT1 < 1 || notaT1 > 10 || notaT2 < 1 || notaT2 > 10 || notaT3 < 1 || notaT3 > 10) {
    console.log("Nota inválida. Por favor, ingrese valores entre 1 y 10.");
} else {

    let promedio = (notaT1 + notaT2 + notaT3) / 3;


    if (promedio >= 1 && promedio <= 3) {
        console.log("Nota insuficiente");
    } else if (promedio >= 4 && promedio <= 5) {
        console.log("Nota Regular");
    } else if (promedio >= 6 && promedio <= 7) {
        console.log("Nota Buena");
    } else if (promedio >= 8 && promedio <= 9) {
        console.log("Nota Muy Buena");
    } else if (promedio == 10) {
        console.log("Nota Sobresaliente");
    } else {
        console.log("Valor inválido Inválido");
    }

}

