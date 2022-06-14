import React from "react";
import { connect } from "react-redux";
import ClearButton from "../ClearButton/ClearButton";
import FilterButton from "../FilterButton/FilterButton";
import { clearCompletedTodos } from "../../redux/actions";

const TodoFilters = ({ isEnabled, showAllTodos, clearCompletedTodos }) => (
  <div className={`su-widget-footer su-actions ${isEnabled ? "is-shown" : ""}`}>
    <FilterButton isEnabled={isEnabled}></FilterButton>
    <ClearButton isEnabled={isEnabled} onClick={clearCompletedTodos}>
      Clear done
    </ClearButton>
  </div>
);

const mapTodoFiltersStateProps = (state) => {
  return {
    isEnabled: state.todos.length > 0,
  };
};

export default connect(mapTodoFiltersStateProps, { clearCompletedTodos })(
  TodoFilters
);
