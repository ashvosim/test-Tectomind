export const setFocusAddTodoAction = (focus) => {
  return {
    type: "SET_ADD_TODO_FOCUS",
    focus,
  };
};

export const onChangeAddTodoAction = (fill) => {
  return {
    type: "SET_ADD_TODO_FILL",
    fill,
  };
};

export const addTodoAction = (text) => {
  return {
    type: "ADD_TODO",
    id: Date.now(),
    text,
  };
};

export const toggleTodoAction = (id) => {
  return {
    type: "TOGGLE_TODO",
    id,
  };
};

export const setUiFilterAction = (filter) => {
  return {
    type: "SET_UI_FILTER",
    filter,
  };
};

export const showAllTodosAction = () => {
  return {
    type: "TOGGLE_SHOW_FILTER",
  };
};

export const clearCompletedTodos = () => {
  return {
    type: "REMOVE_COMPLETED_TODOS",
  };
};
