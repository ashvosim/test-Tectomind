import { createStore } from "redux";
import todoAppReducer from "./todosReducer";

const defaultTodos = {
  todos: [
    { index: 1, text: "what's up", completed: false },
    { index: 2, text: "checked", completed: true },
  ],
};

function configureStore(state = defaultTodos) {
  return createStore(todoAppReducer, state);
}

export default configureStore;
