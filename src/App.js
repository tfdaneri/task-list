import Header from './components/Header';
import ListaTareas from './components/ListaTareas';
import Lista from './components/Tarea';

const tareas = [
  { id: 1, hecho: true, nombre: "Levantarme1", fecha: "1 de enero" },
  { id: 2, hecho: true, nombre: "Desayunar1", fecha: "1 de enero" },
  { id: 3, hecho: true, nombre: "Trabajar1", fecha: "1 de enero" },
  { id: 4, hecho: true, nombre: "Dormir1", fecha: "1 de enero" },
  { id: 5, hecho: false, nombre: "Morir1", fecha: "1 de enero" },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header title="Lista de Tareas" color="Green" />
      </header>
      <body>
        <ListaTareas />
        <Lista tareas={tareas} />
      </body>
    </div>
  );
}

export default App;
