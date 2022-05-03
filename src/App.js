import "./styles.css";

import Navbar from "./components/Navbar/Navbar";
import TaskList from "./components/TaskList/TaskList";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <TaskList title="Pendente" />
      <TaskList title="Em andamento" />
      <TaskList title="Concluido" />
    </div>
  );
}
