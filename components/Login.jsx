import React from 'react'
import './Login.css';



function Login() {
  return (
    <div className='container'>
      <div className='box'>
        <div className='left'>
          <h1>Login</h1>
        <form >
          <input type="text" placeholder='Enter username' />
          <input type="text" placeholder='Enter Email' />
          <input type="text" placeholder='Enter Password' />
          <button>Login</button>
        </form>
        </div>
        <div className='right'>
          <h1>New here?</h1>
          <button>Sign Up</button>
        </div>
      </div>
    </div>
  )
}

export default Login
