import { combineReducers } from "redux";

const todo = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        index: action.id,
        text: action.text,
        completed: false,
      };
    case "TOGGLE_TODO":
      if (state.index !== action.id) {
        return state;
      }
      return {
        ...state,
        completed: !state.completed,
      };

    default:
      return state;
  }
};

const showAllTodos = (state = true, action) => {
  switch (action.type) {
    case "TOGGLE_SHOW_FILTER":
      let newState = !state;
      return newState;

    default:
      return state;
  }
};

const uiFilter = (state = "DEFAULT_COLOR", action) => {
  switch (action.type) {
    case "SET_UI_FILTER":
      return action.filter;

    default:
      return state;
  }
};

const addTodo = (state = { isFocused: false, isFilled: false }, action) => {
  switch (action.type) {
    case "SET_ADD_TODO_FOCUS":
      return {
        ...state,
        isFocused: action.focus,
      };
    case "SET_ADD_TODO_FILL":
      return {
        ...state,
        isFilled: action.fill,
      };
    default:
      return state;
  }
};

const todos = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, todo(undefined, action)];
    case "TOGGLE_TODO":
      return state.map((t) => todo(t, action));

    case "REMOVE_COMPLETED_TODOS":
      return state.filter((t) => !t.completed);

    default:
      return state;
  }
};

export default combineReducers({
  todos,
  addTodo,
  showAllTodos,
  uiFilter,
});
