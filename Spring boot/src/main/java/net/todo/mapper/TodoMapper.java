package net.todo.mapper;

import net.todo.dto.TodoDto;
import net.todo.entity.Todo;

public class TodoMapper {

    public static TodoDto mapToTodoDto(Todo todo) {
        return new TodoDto(
                todo.getId(),
                todo.getTitle(),
                todo.getDescription(),
                todo.getIsCompleted()
        );
    }

    public static Todo mapToTodo(TodoDto todoDto) {
        return new Todo(
                todoDto.getId(),
                todoDto.getTitle(),
                todoDto.getDescription(),
                todoDto.getIsCompleted()
        );
    }
}
