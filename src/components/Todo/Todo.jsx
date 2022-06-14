import React from "react";
import { connect } from "react-redux";

const Todo = ({ onClick, completed, text }) => (
  <li
    onClick={onClick}
    className={`su-todo-item ${completed ? "is-completed" : ""}`}
  >
    <span>{text}</span>
  </li>
);

export default Todo;
