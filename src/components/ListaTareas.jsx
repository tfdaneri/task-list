import useState from "react";
import Tarea from "./Tarea";

const ListaTareas = () => {
    const [tarea, setTarea] = useState([
        { title: 'tarea 1', body: 'debes hacer esto', id: 1 },
        { title: 'tarea 2', body: 'debes hacer esto', id: 2 },
        { title: 'tarea 3', body: 'debes hacer esto', id: 3 },
    ]);

    return (
        <div className="tareas">
            <Tarea tareas={tarea} />
        </div>
    );
}

export default ListaTareas;