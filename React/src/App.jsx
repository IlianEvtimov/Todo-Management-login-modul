import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import FooterComponent from './Component/FooterComponent'
import HeaderComponent from './Component/HeaderComponent'
import ListTodoComponent from './Component/ListTodoComponent'
import TodoComponent from './Component/TodoComponent'
import RegisterComponent from './Component/RegisterComponent'

function App() {


  return (
    <>
      <BrowserRouter>

        <HeaderComponent />

        <Routes>

        {/* // http://localhost:5173 */}
        <Route path='/' element = { <ListTodoComponent /> } ></Route>

        {/* // http://localhost:5173/todos */}
        <Route path='/todos' element = { <ListTodoComponent /> } ></Route>
       
        {/* // http://localhost:5173/add-todo */}
        <Route path='/add-todo' element = { <TodoComponent /> }></Route>

        {/* // http://localhost:5173/edit-todo/id */}
        <Route path='/edit-todo/:id' element = { <TodoComponent /> }></Route>

        {/* // http://localhost:5173/register */}
        {/* <Route path='/register' element = { <RegisterComponent /> }></Route> */}

        <Route path='/register' element = { <RegisterComponent /> }></Route>

        
        </Routes>

        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <FooterComponent />

      </BrowserRouter>
    </>
  )
}

export default App
