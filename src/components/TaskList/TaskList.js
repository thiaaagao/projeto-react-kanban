import React from "react"; // função useState (hook)
import "./tasklist.css";
import PropTypes from "prop-types";

export default function TaskList({ title }) {
  return (
    <div className="tasklist">
      <div className="title">{title}</div>
      <div className="content"></div>
    </div>
  );
}

// Utilizando PropTypes;
TaskList.propTypes = {
  title: PropTypes.string.isRequired
};
//Prop são passadas como parametros, definindo os tipos de parametros a serem passados
