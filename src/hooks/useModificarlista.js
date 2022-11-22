import { useState } from "react";

const useModificarlista = () => {
    const[ tareas, setTareas] = useState([]);

    const crearTarea = (nombreTarea, fechaTarea, hechoTarea) => {
        const nuevaTarea = {
            id: tareas.length + 1 ,
            nombre: nombreTarea,
            fecha: fechaTarea,
            estado: hechoTarea,
            eliminar: "adios",
        };
        setTareas([...tareas, nuevaTarea]);
    };
    const eliminarTarea = (id) => {
        const nuevaTareas = tareas.filter((tarea) => tarea.id !== id);
        setTareas(nuevaTareas);
    };

    const actualizaTarea = (
        nombreTarea,
        fechaTarea,
        hechoTarea,
        idTarea
    ) => {
        const nuevaTarea = tareas.map((tarea) => {
            console.log(idTarea);
        
            if (parseInt(tarea.id) === parseInt(idTarea)) {
                return {
                    nombre: nombreTarea,
                    fecha: fechaTarea,
                    estado: hechoTarea,
                    id: idTarea,
                };
            }
            return tarea;
        });
        setTareas(nuevaTarea);
    };   

    return {
        tareas,
        crearTarea,
        setTareas,
        eliminarTarea,
        actualizaTarea,
    };
};

export default useModificarlista;