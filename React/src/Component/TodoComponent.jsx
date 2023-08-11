import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { createTodo, getTodoById, updateTodoById } from '../Service/TodoService';

const TodoComponent = () => {

    const {id} = useParams();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [isCompleted, setIsComplete] = useState();

    const navigate = useNavigate();

    useEffect(() => {
        if(id){
            getTodoById(id).then((respose) => {
                setTitle(respose.data.title);
                setDescription(respose.data.description);
                setIsComplete(respose.data.isCompleted); 
            }).catch(error => {
                console.log(error);
            })
        }
        
    }, [id])

    function pageTitle(){

        if(id){
            return <h2 className='text-center'>Update Todo</h2>
        }else{
            return <h2 className='text-center'>Add Todo</h2>
        }
    }

    function back(){
        navigate('/todos')
    }

    function saveorUpdateTodo(e){
        e.preventDefault();

        const todo = {title, description, isCompleted};

        console.log(todo);

        if(id){
            updateTodoById(id, todo).then((respose) => {
                console.log(respose.data);
            }).catch(error => {
                console.log(error())
            })
        } else {
            createTodo(todo).then((Response) => {
                console.log(Response.data);
            }).catch(error => {
                console.log(error())
            })
        }

        navigate('/todos');
    }

    return (
    <div className='container p-5 mb-5 bg-light text-dark rounded' style={{width : "800px"}}>

        <br /> <br />
        <div className='row'>
            <div className='card col-md-12'>
               {
                    pageTitle()
               }
                <div className='card-body'>
                    <form>
                        <div className='form-group mb-2'>
                            <label className='form-label'>Todo Title:</label>
                            <input
                                type='text'
                                placeholder='Enter Todo Title'
                                name='title'
                                value={title}
                                // className={`form-control ${ errors.firstName ? 'is-invalid': '' }`}
                                className='form-control'
                                onChange={(e) => setTitle(e.target.value)}
                            >
                            </input>
                            {/* { errors.firstName && <div className='invalid-feedback'> { errors.firstName} </div> } */}
                        </div>

                        <div className='form-group mb-2'>
                            <label className='form-label'>Todo Description:</label>
                            <input
                                type='text'
                                placeholder='Enter Todo Description'
                                name='description'
                                value={description}
                                className='form-control'
                                // className={`form-control ${ errors.lastName ? 'is-invalid': '' }`}
                                onChange={(e) => setDescription(e.target.value)}
                            >
                            </input>
                            {/* { errors.lastName && <div className='invalid-feedback'> { errors.lastName} </div> } */}
                        </div>

                        <div className='form-group mb-2'>
                            <label className='form-label'>Todo Complete:</label>
                            <select
                                value={isCompleted}
                                className='form-control'
                                // className={`form-control ${ errors.lastName ? 'is-invalid': '' }`}
                                onChange={(e) => setIsComplete(e.target.value)}
                                
                            >
                                <option value={"false"}>No</option>
                            
                                <option value={"true"}>Yes</option>
                            </select>
                            {/* { errors.lastName && <div className='invalid-feedback'> { errors.lastName} </div> } */}
                        </div>
                      
                            <button className='btn btn-success' onClick={(e) => saveorUpdateTodo(e)}>Submit</button>
                            <button className='btn btn-success float-end' type="button" onClick={back}>Back</button>
                       
                    </form>

                </div>
            </div>

        </div>

    </div>
  )
}

export default TodoComponent