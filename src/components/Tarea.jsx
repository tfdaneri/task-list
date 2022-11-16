import React from "react";
import "../App.css";

const Lista = ({ tareas }) => (
    <ul>
        <table>
            <tr>
                <th>ID</th>
                <th>Fecha</th>
                <th>Tarea</th>
                <th>Estado</th>
            </tr>

            {tareas.map((tarea) => (
                <tr>
                    <td> {tarea.id}</td>
                    <td> {tarea.fecha}</td>
                    <td> {tarea.nombre}</td>
                    <td>
                        <input type="checkbox" />
                    </td>
                </tr>
            ))}
        </table>
    </ul>
);

export default Lista;