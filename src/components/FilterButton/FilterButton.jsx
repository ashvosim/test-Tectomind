import React from "react";
import { connect } from "react-redux";
import { showAllTodosAction } from "../../redux/actions";

const FilterButton = ({ isEnabled, showAllTodos, onClick }) => {
  return (
    <div className="su-action-filter">
      <button
        disabled={!isEnabled}
        className="su-button su-btn-filter"
        onClick={(e) => {
          e.preventDefault();
          onClick(showAllTodos);
        }}
      >
        {showAllTodos ? "Only Active" : "Show All"}
      </button>
    </div>
  );
};

const mapFilterButtonStateProps = (state) => {
  return {
    showAllTodos: state.showAllTodos,
  };
};

export default connect(mapFilterButtonStateProps, {
  onClick: showAllTodosAction,
})(FilterButton);
