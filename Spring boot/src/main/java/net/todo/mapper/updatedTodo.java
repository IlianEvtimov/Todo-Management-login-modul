package net.todo.mapper;

import net.todo.dto.TodoDto;
import net.todo.entity.Todo;

public class updatedTodo {

    public static Todo transferTodoDtoToTodo(Todo todo, TodoDto todoDto) {

        todo.setTitle(todoDto.getTitle());
        todo.setDescription(todoDto.getDescription());
        todo.setIsCompleted(todoDto.getIsCompleted());

        return todo;
    }
}
