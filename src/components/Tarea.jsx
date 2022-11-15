import ListaTareas from "./ListaTareas";

const Tarea = (props) => {
    const tarea = props.tarea;

    console.log(props,tarea);

    return (
        <div className="tarea">
            {ListaTareas.map((tarea) => (
                <div className="preview-tarea" key={tarea.id}>
                    <h2>{ tarea.title }</h2>
                </div>
            ))}
        </div>
    );
}

export default Tarea;