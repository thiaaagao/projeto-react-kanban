import "./styles.css";

import Navbar from "./components/Navbar/Navbar";
import TaskList from "./components/TaskList/TaskList";

const task = {
  id: 0,
  title: "Nova tarefa",
  state: "Pendente"
};

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <TaskList title={`Titulo`} />
        <TaskList title="Fazendo" />
        <TaskList title="Concluido" />
      </div>
    </div>
  );
}
