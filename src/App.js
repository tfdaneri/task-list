import Header from './components/Header';
import Lista from './components/Tarea';
import ListaVariable from './components/TareaVariable';

const tareas = [
  { id: 1, hecho: true, nombre: "Levantarme", fecha: "1 de enero" },
  { id: 2, hecho: true, nombre: "Desayunar", fecha: "1 de enero" },
  { id: 3, hecho: true, nombre: "Trabajar", fecha: "1 de enero" },
  { id: 4, hecho: true, nombre: "Dormir", fecha: "1 de enero" },
  { id: 5, hecho: false, nombre: "Morir", fecha: "1 de enero" },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header title="Lista de Tareas" color="Green" />
      </header>
      <body>
        <h2>Listado Modificable con Hooks:</h2>
        <ListaVariable />
      </body>
    </div>
  );
}

export default App;
