let tareas = [];

// Función para agregar una tarea
function agregarTarea(nombre) {
    //Validacíon pa que el nombre no esté vacío ni tenga espacio al principio o final
    // .trim() es un método que elimina los espacios en blanco al principio y al final de un string
    if (nombre.trim() === '') {
        console.log("Error: El nombre de la tarea no puede estar vacío.");
        return;
    }
    // Agregar la tarea al array
    tareas.push(nombre.trim()); 
    console.log("Tarea agregada con exito.");
}

// Función para listar las tareas
function listarTareas() {
    console.log("Lista de tareas:");

    if (tareas.length === 0) {
        console.log("No hay tareas.");
    } else {
        tareas.forEach((tarea, index) => { // forEach() metodo para iterar sobre cada tarea en el array
            console.log(`${index + 1}. ${tarea}`); // Imprime cada tarea junto con su número de índice mas uno
        })
    }
}

// Función para editar una tarea
function editarTarea(nombreOriginal, nombreNuevo) {
    // Validar que ambos nombres no estén vacíos
    if (nombreOriginal.trim() === '' || nombreNuevo.trim() === '') {
        console.log("Error: El nombre de la tarea no puede estar vacío.");
        return;
    }
    const index = tareas.indexOf(nombreOriginal); // indexOf() encuentra el índice de la tarea original en el array. Si no lo encuentra devuelve -1
    if (index === -1) {
        console.log("Error: La tarea especidicada no se encontró en la lista");
    } else {
        tareas[index] = nombreNuevo.trim(); // Reemplaza en la posición del index el nuevo nombre 
        console.log("Tarea editada con éxito.");
    }
}

// Función pa eliminar
function eliminarTarea(nombre) {
    const index = tareas.indexOf(nombre);
    
    if (index === -1) {
        console.log("Error: La tarea especificada no se encontró en la lista.");
    } else {
        tareas.splice(index, 1);
        console.log("Tarea eliminada con éxito.");
    }
}

