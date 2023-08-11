package net.todo.service;

import net.todo.dto.TodoDto;

import java.util.List;

public interface TodoService {


    TodoDto addTodo(TodoDto todoDto);

    TodoDto getTodoById(Long todoId);

    List<TodoDto> getAllTodos();

    TodoDto updateTodo(Long todoId, TodoDto todoDto);

    void deleteTodo(Long todoId);
    TodoDto completeTodo(Long todoId);

    TodoDto inCompleteTodo(Long todoId);

}
