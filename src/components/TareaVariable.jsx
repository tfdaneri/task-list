import React, {useState} from "react";
import "../App.css";

const tareas = [
    { id: 1, hecho: true, nombre: "Levantarme", fecha: "1 de enero" },
    { id: 2, hecho: true, nombre: "Desayunar", fecha: "1 de enero" },
    { id: 3, hecho: true, nombre: "Trabajar", fecha: "1 de enero" },
    { id: 4, hecho: true, nombre: "Dormir", fecha: "1 de enero" },
    { id: 5, hecho: false, nombre: "Morir", fecha: "1 de enero" },
  ];

function ListaVariable () {
    const [list, setList] = useState(tareas);

    return (
        <>
            <table>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Fecha</th>
                    <th>Estado</th>
                    <th>Cambiar Estado</th>
                </tr>
                {list.map(({id, nombre, fecha, hecho}) => (
                    <tr>
                        <td>{id}</td>
                        <td>{nombre}</td>
                        <td>{fecha}</td>
                        <td>{hecho ? "Completado" : "Pendiente"}</td>
                        <td>
                            <input 
                                type="checkbox"
                                checked={hecho}
                                onClick={() => {
                                    setList(
                                        list.map((obj) => {
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
                    </tr>
                ))}
            </table>
        </>
    );
}

export default ListaVariable;