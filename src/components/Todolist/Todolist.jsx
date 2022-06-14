import React from "react";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
import { connect } from "react-redux";
import { toggleTodoAction } from "../../redux/actions";
import Todo from "../Todo/Todo";

const TodoList = ({ todos, onTodoClick }) => {
  return (
    <div className="su-widget-content">
      <ul className="su-list su-todo-list">
        <CSSTransitionGroup
          transitionName="is-fade"
          transitionEnterTimeout={200}
          transitionLeaveTimeout={200}
        >
          {todos.map((todo) => (
            <Todo
              key={todo.index}
              {...todo}
              onClick={() => onTodoClick(todo.index)}
            />
          ))}
        </CSSTransitionGroup>
      </ul>
    </div>
  );
};
const getVisibleTodos = (todos, showAllTodos) => {
  if (showAllTodos) {
    return todos;
  } else {
    return todos.filter((t) => !t.completed);
  }
};

const mapTodoListStateToProps = (state) => {
  return {
    todos: getVisibleTodos(state.todos, state.showAllTodos),
  };
};

export default connect(mapTodoListStateToProps, {
  onTodoClick: toggleTodoAction,
})(TodoList);
