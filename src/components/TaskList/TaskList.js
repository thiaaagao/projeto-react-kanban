import React from "react"; // função useState (hook) importando { useState }
import "./tasklist.css";
import PropTypes from "prop-types";


export default function TaskList({ title, onAddTask }) {

  const addTask = () => {
      console.log("Alou, to aqui addtask"); // Testando em console.log func
      onAddTask("Nova atividade", "Pendente");

  }

  return (
    <div className="tasklist">
      <div className="title">{title}</div>
      <div className="content"></div>   
      <button onClick={addTask}>Adicionar Tarefa</button>
    </div>
  );
}


// Utilizando PropTypes;
TaskList.propTypes = {
  title: PropTypes.string.isRequired,
  onAddTask: PropTypes.func.isRequired
};
//Prop são passadas como parametros, definindo os tipos de parametros a serem passados
