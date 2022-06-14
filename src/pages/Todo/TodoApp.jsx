import React from "react";
import { connect } from "react-redux";

import AddTodo from "../../components/AddTodo/AddTodo";
import TodoFilters from "../../components/TodoFilters/TodoFilters";
import Todolist from "../../components/Todolist/Todolist";

const TodoApp = ({ isFocused, isFilled }) => (
  <div className="su-widget">
    <div
      className={`su-widget-header ${isFocused || isFilled ? "is-shown" : ""}`}
    >
      <h3>Today</h3>
      <span className="su-date">March 03, 2017</span>
      <AddTodo />
    </div>
    <Todolist />
    <TodoFilters />
  </div>
);

const mapTodoAppStateProps = (state) => {
  return {
    isFocused: state.addTodo.isFocused || state.todos < 1,
    isFilled: state.addTodo.isFilled,
  };
};

export default connect(mapTodoAppStateProps)(TodoApp);
