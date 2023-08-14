import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import FooterComponent from './Component/FooterComponent'
import HeaderComponent from './Component/HeaderComponent'
import ListTodoComponent from './Component/ListTodoComponent'
import TodoComponent from './Component/TodoComponent'
import RegisterComponent from './Component/RegisterComponent'
import LoginComponent from './Component/LoginComponent'
import { isUserLoggedIn } from './Service/AuthService'

function App() {
  
  // const isAuth = isUserLoggedIn();

  function AuthenticatedRoute({children}) {
    
    const isAuth = isUserLoggedIn(); 
    
    if(isAuth){
      return children;
    }

    return <Navigate to="/"></Navigate>
  }
  return (
    <>
      <BrowserRouter>

        <HeaderComponent />

        <Routes>

        {/* // http://localhost:5173 */}
        <Route path='/' element = { <LoginComponent /> } ></Route>

        {/* // http://localhost:5173/todos */}
        <Route path='/todos' element = { 
        <AuthenticatedRoute>
            <ListTodoComponent /> 
        </AuthenticatedRoute> 
        }></Route>
        
        {/* // http://localhost:5173/add-todo */}
        <Route path='/add-todo' element = { 
        <AuthenticatedRoute>
            <TodoComponent /> 
        </AuthenticatedRoute>
        }></Route>


        {/* // http://localhost:5173/edit-todo/id */}
        <Route path='/edit-todo/:id' element = { 
        <AuthenticatedRoute>
            <TodoComponent /> 
        </AuthenticatedRoute>  
        }></Route>

        {/* // http://localhost:5173/register */}
        <Route path='/register' element = { <RegisterComponent /> }></Route>

        {/* // http://localhost:5173/login */}
        <Route path='/login' element= { <LoginComponent />}></Route>
        
        </Routes>

        <br></br>
        <br></br>
        <br></br>
        <FooterComponent />

      </BrowserRouter>
    </>
  )
}

export default App
