import React, { useRef } from 'react'
import axios from "axios"
import {useNavigate} from "react-router-dom"

function Adminform() {
  
  let navigate = useNavigate()
  const el = useRef()
    const handleSubmit = async (e) => {
        e.preventDefault()
        let fullname = e.target.fullname.value
        let username = e.target.username.value
        let address = e.target.address.value
        let password = e.target.password.value
       try {
           el.current.classList.remove("collapse")
          await axios.post( "http://localhost:8000"   , {fullname , username , address , password})
       } catch (error) {
        console.log(error);
       }
    }

    const handleClick = (e) => {
       if(e.target.textContent.includes("Add")){
         setTimeout(() => {
              navigate("/admins")
              el.current.classList.add("collapse")
        },2000)
       }
    }
  return (
    <div className='form-container'>
        <form className='form' onSubmit={(e) => handleSubmit(e)}>
            <h1 className='form-header'>Add New Admin</h1>
            <p className='alert collapse' ref={el}>New Admin Added</p>
            <input placeholder='Enter Fullname' name='fullname' type="text"/>
            <input placeholder='Enter Username' name='username' type="text"/>
            <input placeholder="Enter Address" name='address' type="number"/>
            <input placeholder='Enter Password' name='password' type="password"/>
            <button className='login-btn' onClick={(e) => handleClick(e)}>Add</button>
        </form>
    </div>
  )
}

export default Adminform