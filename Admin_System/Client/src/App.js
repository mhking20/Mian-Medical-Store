import React from 'react'
import {createBrowserRouter , RouterProvider} from "react-router-dom"
import Login from './components/login'
import Home from './components/home'
import Products from './components/products'
import Orders from './components/orders'
import Admins from './components/admins'
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
      path : "/Admins",
      element : <Admins/>
    }
  ])
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App