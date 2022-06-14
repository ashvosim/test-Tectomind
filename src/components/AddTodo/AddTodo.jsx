import React from "react";
import { connect } from "react-redux";
import {
  addTodoAction,
  setFocusAddTodoAction,
  onChangeAddTodoAction,
} from "../../redux/actions";

const AddTodo = ({ isFilled, onSubmit, setFocus, onChange }) => {
  let input = null;

  return (
    <div className="su-form-wrapper">
      <form
        className={`su-form-add ${isFilled ? "is-filled" : ""}`}
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit(input.value);
          input.value = "";
          onChange(input.value.length > 0);
        }}
      >
        <input
          ref={(node) => {
            input = node;
          }}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          onChange={() => onChange(input.value.length > 0)}
          className="su-form-field su-field-todo"
          placeholder="What is next?"
        />
        <button type="submit" className="su-button su-btn-add">
          Add
        </button>
      </form>
    </div>
  );
};

const mapAddTodoStateProps = (state) => {
  return {
    isFilled: state.addTodo.isFilled,
  };
};

export default connect(mapAddTodoStateProps, {
  onSubmit: addTodoAction,
  setFocus: setFocusAddTodoAction,
  onChange: onChangeAddTodoAction,
})(AddTodo);
