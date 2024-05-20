let tareas = [];

// Primero agrego las funciones para las tareas

// Función para agregar una tarea
function agregarTarea(nombre) {
    //Validacíon pa que el nombre no esté vacío ni tenga espacio al principio o final
    // .trim() es un método que elimina los espacios en blanco al principio y al final de un string
    if (nombre.trim() === '') {
        alert("Error: El nombre de la tarea no puede estar vacío.");
        return;
    }
    // Agregar la tarea al array, el push agrega un elemnto al final del array
    tareas.push(nombre.trim());
    alert("Tarea agregada con exito.");
}

// Función para listar las tareas
function listarTareas() {
    let listaTareas = "Lista de tareas:\n";

    if (tareas.length === 0) { // length devuelve la cantidad de elementos en el array
        alert("No hay tareas.");
    } else {
        tareas.forEach((tarea, index) => { // forEach() metodo para iterar sobre cada tarea en el array
            listaTareas += `${index + 1}. ${tarea}\n`; // Imprimirá cada tarea junto con su número de índice mas uno
        })
        alert(listaTareas)
    }
}

// Función para editar una tarea
function editarTarea(nombreOriginal, nombreNuevo) {
    // Validar que ambos nombres no estén vacíos
    if (nombreOriginal.trim() === '' || nombreNuevo.trim() === '') {
        alert("Error: El nombre de la tarea no puede estar vacío.");
        return;
    }
    const index = tareas.indexOf(nombreOriginal); // indexOf() encuentra el índice de la tarea original en el array. Si no lo encuentra devuelve -1
    if (index === -1) {
        alert("Error: La tarea especidicada no se encontró en la lista");
    } else {
        // tareas[index] = nombreNuevo.trim(); // Reemplaza en la posición del index el nuevo nombre u otra opción:
        tareas.splice(index, 1, nombreNuevo.trim()); // splice sirve tanto para modificar como para eliminar elementos
        alert("Tarea editada con éxito.");
    }
}

// Función pa eliminar
function eliminarTarea(tareaAEliminar) {
//Validar que no esté vacío
if (tareaAEliminar.trim() === ''){
    alert("Error: El nombre no puede estar vacío.");
    return;
}

    const index = tareas.indexOf(tareaAEliminar);

    if (index === -1) {
        alert("Error: La tarea especificada no se encontró en la lista.");
    } else {
        tareas.splice(index, 1);
        alert("Tarea eliminada con éxito.");
    }
}

// Función principal, ventanita de opciones 
function opciones() {
    let opcion;
    do {
        opcion = parseInt(prompt("\nSeleccione una opción: \n1. Agregar tarea\n2. Listar tareas\n3. Editar tarea \n4. Eliminar tarea \n5. Salir"));

        switch (opcion) {
            case 1:
                let nuevaTarea = prompt("Ingrese el nombre de la nueva tarea:");
                agregarTarea(nuevaTarea);
                break;
            case 2:
                listarTareas();
                break;
            case 3:
                let tareaOriginal = prompt("Ingrese el nombre de la tarea original:");
                let nuevoNombre = prompt("Ingrese el nuevo nombre:");
                editarTarea(tareaOriginal, nuevoNombre);
                break;
            case 4:
                let tareaAEliminar = prompt("Ingrese el nombre de la tarea a eliminar:");
                eliminarTarea(tareaAEliminar);
                break;
            case 5:
                alert("Adiós.");
                break;
            default:
                alert("Opción no válida. Por favor, seleccione una opción válida.");
        }
    } while (opcion !== 5);
}

// Ejecuta la función principal para iniciar el programa
opciones();