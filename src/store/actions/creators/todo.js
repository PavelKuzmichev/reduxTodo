import { ADD_TODO, TOGGLE_TODO, DELETE_TODO, SORT_TODO } from "../types/todo";

let nextTodoId = 0;

export const addTodo = (content) => ({
  type: ADD_TODO,
  payload: {
    id: ++nextTodoId,
    content,
  },
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: { id },
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: { id },
});
export const sortTodos = (sortedIds) => ({
  type: SORT_TODO,
  payload: {sortedIds},
})