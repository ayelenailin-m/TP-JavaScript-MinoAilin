
let precio = parseInt(prompt("Ingrese el precio del producto"));
let cantArticulos = parseInt(prompt("Ingrese la cantidad de articulos del producto"));

if (isNaN(precio) || isNaN(cantArticulos)){
    console.log("Valores inválidos")
} else if (precio >= 1 && cantArticulos >= 1) {

    let precioTotal = precio * cantArticulos;
    let descuento = precioTotal - ((precioTotal * 15) / 100);

    switch (true) {
        case cantArticulos >= 10 && precioTotal > 20000:
            console.log(`Usted aplica para el descuento del 15% su total es de: $ ${descuento}`);
            break;
        default:
            console.log(`Usted no aplica para el descuento su total es de $ ${precioTotal}`);
            break;
    }
} else {
    console.log("No ingresó valores válidos")
}
