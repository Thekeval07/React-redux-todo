// File: actions.js

import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from './Action-types';

 const addTodo = (todo) => {
  return {
    type: ADD_TODO,
    payload: todo,
  };
};

export const deleteTodo = (todoId) => {
  return {
    type: DELETE_TODO,
    payload: todoId,
  };
};

export const updateTodo = (todoId, updatedTodo) => {
  return {
    type: UPDATE_TODO,
    payload: {
      todoId,
      updatedTodo,
    },
  };
};

export default addTodo
