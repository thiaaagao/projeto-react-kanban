import React, { useState } from "react";
import "./styles.css";

import Navbar from "./components/Navbar/Navbar";
import TaskList from "./components/TaskList/TaskList";

const task = {
  id: 0,
  title: "Nova atividade",
  state: "Pendente"
};
//constante da nova tarefa, declarando os atributos da tarefa

let idAcc = 0;
const gerarId = () =>{
  idAcc = idAcc + 1;
    return idAcc;
};
//Gerando e acumulando um novo id para cada tarefa

export default function App() {
  const [tasks, setTasks] = useState([]);
  // manipulação do estado de cada tarefa usando useState

  const addTask = (title, state) =>{
    console.log("Alou, to aqui app.js"); // Testando em console.log func
    const newTask = {
      id: gerarId(),
      title,
      state
    };
  //Função para criação de nova tarefa, passando o title e o state dentro da função
  
  
    setTasks((existingTasks) => {
      return[...existingTasks, newTask];
  //função que retorna o novo state das atividades, gerando +1 tarefa na lista
  //função encapsulada
    });
  };



  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <TaskList title="Pendente" onAddTask={addTask} tasks={tasks} />
      </div>
    </div>
  );
}
