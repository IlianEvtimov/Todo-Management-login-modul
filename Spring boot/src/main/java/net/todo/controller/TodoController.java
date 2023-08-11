package net.todo.controller;


import lombok.AllArgsConstructor;
import net.todo.dto.TodoDto;
import net.todo.service.TodoService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("api/todos")
@AllArgsConstructor
public class TodoController {

    private TodoService todoService;

    // Build add Todo REST API
    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping
    public ResponseEntity<TodoDto> addTodo(@RequestBody TodoDto todoDto){
        TodoDto savedTodoDto = todoService.addTodo(todoDto);

        return new ResponseEntity<>(savedTodoDto, HttpStatus.CREATED);
    }

    // Build get Todo by Id REST API
    @PreAuthorize("hasAnyRole('ADMIN', 'USER')")
    @GetMapping("{id}")
    public ResponseEntity<TodoDto> getTodoById(@PathVariable("id") Long todoId){
        TodoDto todoDto = todoService.getTodoById(todoId);

        return ResponseEntity.ok(todoDto);

    }

    // Build get all Todos REST API
    @PreAuthorize("hasAnyRole('ADMIN', 'USER')")
    @GetMapping
    public ResponseEntity<List<TodoDto>> getAllTodos(){
        return ResponseEntity.ok(todoService.getAllTodos());
    }

    // Build update by id Todo REST API
    @PreAuthorize("hasRole('ADMIN')")
    @PutMapping("{id}")
    public ResponseEntity<TodoDto> updateTodo(@PathVariable("id") Long todoId, @RequestBody TodoDto todoDto){
        return ResponseEntity.ok(todoService.updateTodo(todoId, todoDto));
    }

    // Build delete by id Todo REST API
    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteTodo(@PathVariable("id") Long todoId){

        todoService.deleteTodo(todoId);

        return ResponseEntity.ok("Todo deleted successfully.");
    }

    // Build complete Todo REST API
    @PreAuthorize("hasAnyRole('ADMIN', 'USER')")
    @PatchMapping("{id}/complete")
    public ResponseEntity<TodoDto> completeTodo(@PathVariable("id") Long todoId){
        TodoDto todoDto = todoService.completeTodo(todoId);

        return ResponseEntity.ok(todoDto);
    }
    //    @PreAuthorize("permitAll()")
    // Build inComplete Todo REST API
//    @PreAuthorize("hasAnyRole('ADMIN', 'USER')")
    @PreAuthorize("hasAnyRole('ADMIN')")
    @PatchMapping("{id}/in-complete")
    public ResponseEntity<TodoDto> inCompleteTodo(@PathVariable("id") Long todoId){
        TodoDto todoDto = todoService.inCompleteTodo(todoId);

        return ResponseEntity.ok(todoDto);
    }
}
