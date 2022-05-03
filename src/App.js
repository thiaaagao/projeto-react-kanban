import "./styles.css";

import Navbar from "./components/Navbar/Navbar";
import TaskList from "./components/TaskList/TaskList";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <TaskList title={"Titulo"} />
        <TaskList title="Em andamento" />
        <TaskList title="Concluido" />
      </div>
    </div>
  );
}
