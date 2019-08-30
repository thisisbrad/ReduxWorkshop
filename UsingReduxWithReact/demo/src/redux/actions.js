import { UPDATE_TODO, UPDATE_USER } from './types';

const updateUser = update => ({ type: UPDATE_USER, payload: update });

const addTodo = newTodo => ({
  type: UPDATE_TODO,
  payload: newTodo
});
