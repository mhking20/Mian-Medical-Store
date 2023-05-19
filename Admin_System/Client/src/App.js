import React from 'react'
import {createBrowserRouter , RouterProvider} from "react-router-dom"
import Login from './components/login'
import Home from './components/home'
import Products from './components/products'
import Orders from './components/orders'
import Admins from './components/admins'
import Productform from './components/Productform'
import Adminform from './components/adminform'
import "./App.css"

function App() {

  const router = createBrowserRouter([
    {
      path : "/",
      element : <Login/>
    },
    {
      path : "/home",
      element : <Home/>
    },
    {
      path : "/products",
      element : <Products/>
    },
    {
      path : "/orders",
      element : <Orders/>
    },
    {
      path : "/admins",
      element : <Admins/>
    },
    {
      path : "/productform",
      element : <Productform/>
    },
    {
      path : "/adminform",
      element : <Adminform/>
    }
  ])
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App