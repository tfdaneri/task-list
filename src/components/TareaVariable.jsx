import React, {useState} from "react";
import "../App.css";
import useModificarlista from '../hooks/useModificarlista';

function ListaVariable () {
    const {
      tareas,
      crearTarea,
      setTareas,
      eliminarTarea,
      actualizaTarea,
    } = useModificarlista();
  
    const [nombreTarea, setNombreTarea] = useState("");
    const cambiarNombre = (event) => {
      setNombreTarea(event.target.value);
  
      console.log("value is:", event.target.value);
    };
  
    const [fechaTarea, setFechaTarea] = useState("");
    const cambiarFecha = (event) => {
      setFechaTarea(event.target.value);
  
      console.log("value is:", event.target.value);
    };
  
    const [hechoTarea, setHechoTarea] = useState("");
    const cambiarEstado = (event) => {
      setHechoTarea(event.target.checked);
  
      console.log("value is:", event.target.checked);
    };
  
    const [idTarea, setIdTarea] = useState("");
    const cambiarID = (event) => {
      setIdTarea(event.target.value);
  
      console.log("value is:", event.target.value);
    };
    
    return (
        <>
            <table>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Fecha</th>
                    <th>Estado</th>
                    <th></th>
                    <th>Eliminar</th>
                </tr>
                {tareas.map(({id, nombre, fecha, hecho}) => (
                    <tr>
                        <td>{id}</td>
                        <td>{nombre}</td    >
                        <td>{fecha}</td>
                        <td>{hecho ? "Completado" : "Pendiente"}</td>
                        <td>
                            <input 
                                type="checkbox"
                                checked={hecho}
                                onClick={() => {
                                    setTareas(
                                        tareas.map((obj) => {
                                            if (obj.id == id) {
                                                return {
                                                    ...obj,
                                                    hecho: !hecho,
                                                };
                                            }

                                            return obj;
                                        })
                                    );
                                }}
                            />
                        </td>
                        <td key={id} onClick={() => eliminarTarea(id)}>
                                <p>eliminar</p>
                        </td>
                    </tr>
                ))}
            </table>
            <div className="form">
                <button onClick={() => crearTarea(nombreTarea, fechaTarea, hechoTarea)}>
                    Añadir Tarea
                </button>
                <button onClick={() => actualizaTarea(nombreTarea, fechaTarea, hechoTarea, idTarea)}>
                    Modificar Tarea
                </button>
                <input type={"text"} onChange={cambiarNombre} placeholder="Anotar tarea..." />
                <input type={"text"} value={fechaTarea} onChange={cambiarFecha} placeholder="Anotar plazo..."/>
                <input type={"text"} value={idTarea} onChange={cambiarID} placeholder="Indicar ID de tarea a modificar..." />
            </div>
        </>
    );
}

export default ListaVariable;