import React, { useRef } from 'react'
import axios from "axios"
import {useNavigate} from "react-router-dom"

function Productform() {
  
  let navigate = useNavigate()
  const el = useRef()
    const handleSubmit = async (e) => {
        e.preventDefault()
        let name = e.target.name.value
        let image = e.target.image.value
        let price = e.target.price.value
        let instock = e.target.instock.value
       try {
           el.current.classList.remove("collapse")
          await axios.post( "http://localhost:8000"   , {name , image , price , instock})
       } catch (error) {
        console.log(error);
       }
    }

    const handleClick = (e) => {
       if(e.target.textContent.includes("Add")){
         setTimeout(() => {
              navigate("/products")
              el.current.classList.add("collapse")
        },2000)
       }
    }
  return (
    <div className='form-container'>
        <form className='form' onSubmit={(e) => handleSubmit(e)}>
            <h1 className='form-header'>Add New Product</h1>
            <p className='alert collapse' ref={el}>New Product Added</p>
            <input placeholder='Enter Name' name='name' type="text"/>
            <input placeholder='Enter Image URL' name='image' type="text"/>
            <input placeholder="Enter Price" name='price' type="number"/>
            <input placeholder='Enter Total Items' name='instock' type="number"/>
            <button className='login-btn' onClick={(e) => handleClick(e)}>Add</button>
        </form>
    </div>
  )
}

export default Productform