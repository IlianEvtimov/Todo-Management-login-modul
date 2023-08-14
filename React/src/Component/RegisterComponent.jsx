import React, { useState } from 'react'
import { BrowserRouter } from 'react-router-dom';
import { registerAPICall } from '../Service/AuthService';

const RegisterComponent = () => {
  
  const [name, setname] = useState('');
  const [username, setUsername] = useState('');
  const [email, setImail] = useState('');
  const [password, setPassword] = useState('');

  function handleRegistrationFrom(e){
    e.preventDefault();

    const register = {name, username, email, password};

    console.log(register);

    registerAPICall(register).then((response) => {
      console.log(response.data);
    }).catch(error => {
      console.log(error)
    })
  } 

  return (
    <div className='container'>
      <br></br>
      <div className='row'>
        <div className='col-md-6 offset-md-3'>
          <div className='card'>
            <div className='card-header'>
              <h2 className='text-center'>User Registration From</h2>
            </div>
            <div className='card-body'>
              <form>
                <div className='row mb-3'>
                  <label className='col-md-3 control-label'> Name </label>
                  <div className='col-md-9'>
                    <input
                      type='text'
                      name='name'
                      className='form-control'
                      placeholder='Enter name'
                      value={name}
                      onChange={(e) => setname(e.target.value)}
                    >
                    </input>
                  </div>
                </div>

                <div className='row mb-3'>
                  <label className='col-md-3 control-label'> Username </label>
                  <div className='col-md-9'>
                    <input
                      type='text'
                      name='username'
                      className='form-control'
                      placeholder='Enter username'
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    >
                    </input>
                  </div>
                </div>

                <div className='row mb-3'>
                  <label className='col-md-3 control-label'> Email </label>
                  <div className='col-md-9'>
                    <input
                      type='text'
                      name='email'
                      className='form-control'
                      placeholder='Enter email adrress'
                      value={email}
                      onChange={(e) => setImail(e.target.value)}
                    >
                    </input>
                  </div>
                </div>
                
                <div className='row mb-3'>
                  <label className='col-md-3 control-label'> Password </label>
                  <div className='col-md-9'>
                    <input
                      type='password'
                      name='password'
                      className='form-control'
                      placeholder='Enter password'
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    >
                    </input>
                  </div>
                </div>
                    
                <div className='form-group mb-3'>
                  <button className='btn btn-primary' onClick={ (e) => handleRegistrationFrom(e)}>Submit</button>
                </div>
              </form>

            </div>
          
          </div>    
        </div>
      </div>

    </div>
  )
}

export default RegisterComponent