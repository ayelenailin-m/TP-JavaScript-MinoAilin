
let edad = prompt("Ingrese una edad");

if (edad>=0 && edad<=12){
    console.log("Es un niño");
} else if (edad>=13 && edad<=19){
    console.log("Es un adolecente");
} else if (edad>=20 && edad<=29){
    console.log("Es un joven");
} else if (edad>=30 && edad<=59){
    console.log("Es un adulto")
} else if (edad>= 60 && edad<=122){
    console.log("Es un adulto mayor");
} else {
    console.log("No es válido")
}