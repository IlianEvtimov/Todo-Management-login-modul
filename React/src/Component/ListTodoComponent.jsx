import React, { useEffect, useState } from 'react'
import { getAllTodos, deleteTodo, completeTodo, inCompleteTodo } from '../Service/TodoService';
import { useNavigate } from 'react-router-dom';

const ListTodoComponent = () => {

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    listAllTodos();
  }, []);

  const navigate = useNavigate();

  function listAllTodos(){
    getAllTodos().then((Response) => {
      setTodos(Response.data);
    }).catch(Error => {
      console.log(Error);
    })
  }

  function addNewTodo(){
      navigate("/add-todo");
  }

  function updateTodo(todId){
    navigate(`/edit-todo/${todId}`);
  }
  
  function removeTodo(todId){
      deleteTodo(todId).then((response) => {
          listAllTodos();
          console.log("Todo deleted successfully.");
      }).catch(error => {
          console.log(error);
      })
  }

  function markCompleteTodo(todId){
      completeTodo(todId).then((response) => {
        listAllTodos();
      }).catch(error => {
          console.log(error);
      })
  }

  function markInCompleteTodo(todoid){
      inCompleteTodo(todoid).then((response) => {
          listAllTodos();
      }).catch(error => {
          console.log(error);
      })
  }

  return (
    <div className='container p-5 mb-5 bg-light text-dark rounded container-move'>

        <h2 className='text-center'>List of Tods</h2>
        <button className='btn btn-primary mb-2' onClick={addNewTodo}>Add Todo</button>
        <table className='table table-striped table-bordered'>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Todo Completed</th>
                    <th>Actions</th>
                    
                </tr>
            </thead>
            <tbody>
                {
                    todos.map(todo => 
                        <tr key={todo.id}>
                            <td>{todo.title}</td>
                            <td>{todo.description}</td>
                            <td>{todo.isCompleted ? 'YES' : 'NO'} </td>
                            {/* <td>
                                <button className='btn btn-info' onClick={() => updateEmployee(employee.id)}>Update</button>
                                <button className='btn btn-danger' onClick={() => removeEmployee(employee.id)}
                                    style={{marginLeft: '10px'}}
                                >Delete</button>
                            </td> */}
                            <td>
                              <button className='btn btn-info' onClick={() => updateTodo(todo.id)}>Update</button>
                              <button className='btn btn-danger' onClick={() => removeTodo(todo.id)}
                                    style={{marginLeft: '10px'}}
                              >Delete</button>
                              <button className='btn btn-success' onClick={() => markCompleteTodo(todo.id)}
                                    style={{marginLeft: '10px'}}
                              >Complete</button>
                              <button className='btn btn-warning' onClick={() => markInCompleteTodo(todo.id)}
                                    style={{marginLeft: '10px'}}
                              >inComplete</button>
                            </td>
                        </tr>)
                }
            </tbody>
        </table>
    </div>
  )
}

export default ListTodoComponent