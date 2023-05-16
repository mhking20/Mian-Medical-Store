import React from 'react'
import "./Styles/login.css"

function login() {
  return (
    <div className='login-form-container'>
        <form className='login-form'>
            <h1 className='login-header'>Restricted Login Page</h1>
            <input type="text" placeholder='Enter Username'></input>
            <input type="password" placeholder="Enter Password"></input>
            <button type='submit' className='login-btn'>Login</button>
        </form>
    </div>
  )
}

export default login