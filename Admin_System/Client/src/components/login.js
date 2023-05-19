import React from 'react'
import "./Styles/login.css"
import {useNavigate} from "react-router-dom"

function Login() {
  const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        navigate("/home")
    }
  return (
    <div className='form-container'>
        <form className='form' onSubmit={(e) => handleSubmit(e)}>
            <h4 className='login-header'>Restricted Login Page</h4>
            <input type="text" placeholder='Enter Username'></input>
            <input type="password" placeholder="Enter Password"></input>
            <button type='submit' className='login-btn'>Login</button>
        </form>
    </div>
  )
}

export default Login