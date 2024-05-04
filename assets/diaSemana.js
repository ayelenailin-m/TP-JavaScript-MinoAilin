let nroDia = parseInt(prompt("Ingrese un número del 1 al 7 y le diré el día de la semmana que le corresponde."));
let dia;

switch (nroDia) {
    case 1:
        dia = "El día es Lunes.";
        break;
    case 2:
        dia ="El día es Martes.";
        break;
    case 3:
        dia = "El día es Miercoles.";
        break;
    case 4:
        dia= "El día es Jueves.";
        break;
    case 5:
        dia= "El día es Viernes.";
        break;
    case 6:
        dia= "El día es Sábado. ¡Que tengas un buen finde!";
        break;
    case 7:
        dia= "El día es Domingo. ¡Fin de la semana!";
        break;
    default:
        dia= "No es día válido. Por favor ingrese un día valido";
}

console.log(dia);