import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8080/api/todos";

export const getAllTodos = () => axios.get(REST_API_BASE_URL);

export const createTodo = (todo) => axios.post(REST_API_BASE_URL, todo);

export const getTodoById = (todoId) => axios.get(REST_API_BASE_URL + '/' + todoId); 

export const updateTodoById = (todoId, todo) => axios.put(REST_API_BASE_URL + '/' + todoId, todo);

export const deleteTodo = (todoId) => axios.delete(REST_API_BASE_URL + '/' + todoId);

export const completeTodo = (todoId) => axios.patch(REST_API_BASE_URL + '/' + todoId + '/complete');

export const inCompleteTodo = (todoId) => axios.patch(REST_API_BASE_URL + '/' + todoId + '/in-complete')