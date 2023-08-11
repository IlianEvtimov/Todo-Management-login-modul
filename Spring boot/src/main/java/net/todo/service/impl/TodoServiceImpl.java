package net.todo.service.impl;

import lombok.AllArgsConstructor;
import net.todo.dto.TodoDto;
import net.todo.entity.Todo;
import net.todo.exception.ResourceNotFoundException;
import net.todo.repository.TodoRepository;
import net.todo.service.TodoService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

import static net.todo.mapper.updatedTodo.transferTodoDtoToTodo;

@Service
@AllArgsConstructor
public class TodoServiceImpl implements TodoService {

    private TodoRepository todoRepository;
    private ModelMapper modelMapper;
    @Override
    public TodoDto addTodo(TodoDto todoDto) {

        // Convert TodoDto into Todo Jpa entity
//        Todo todo = TodoMapper.mapToTodo(todoDto);
        Todo todo = modelMapper.map(todoDto,  Todo.class);

        Todo savedTodo = todoRepository.save(todo);

        // Convert saved Todo Jpa entity object into TodoDto object and return it
//        return TodoMapper.mapToTodoDto(savedTodo);
        return modelMapper.map(savedTodo, TodoDto.class);
    }

    @Override
    public TodoDto getTodoById(Long todoId) {

        Todo todo = todoRepository.findById(todoId).orElseThrow(
                () -> new ResourceNotFoundException("Todo not found with id " + todoId)
        );

        return modelMapper.map(todo, TodoDto.class);
    }

    @Override
    public List<TodoDto> getAllTodos() {
        List<Todo> todos = todoRepository.findAll();

        return todos.stream().map(todo -> modelMapper.map(todo, TodoDto.class)).collect(Collectors.toList());
    }

    @Override
    public TodoDto updateTodo(Long todoId, TodoDto todoDto) {
        Todo todo = todoRepository.findById(todoId).orElseThrow(
                () -> new ResourceNotFoundException("Todo not found with id " + todoId));

//        todo.setTitle(todoDto.getTitle());
//        todo.setDescription(todoDto.getDescription());
//        todo.setIsCompleted(todoDto.getIsCompleted());

        return modelMapper.map(todoRepository.save(transferTodoDtoToTodo(todo, todoDto)), TodoDto.class);
    }

    @Override
    public void deleteTodo(Long todoId) {
        Todo todo = todoRepository.findById(todoId).orElseThrow(
                () -> new ResourceNotFoundException("Todo not found with id " + todoId));

        todoRepository.delete(todo);
    }

    @Override
    public TodoDto completeTodo(Long todoId) {

        Todo todo = todoRepository.findById(todoId).orElseThrow(
                () -> new ResourceNotFoundException("Todo not found with id " + todoId));

        todo.setIsCompleted(Boolean.TRUE);

        Todo updatedTodo = todoRepository.save(todo);

        return modelMapper.map(updatedTodo, TodoDto.class);
    }

    @Override
    public TodoDto inCompleteTodo(Long todoId) {

        Todo todo = todoRepository.findById(todoId).orElseThrow(
                () -> new ResourceNotFoundException("Todo not found with id " + todoId));

        todo.setIsCompleted(Boolean.FALSE);

        Todo updatedTodo = todoRepository.save(todo);

        return modelMapper.map(updatedTodo, TodoDto.class);
    }
}
