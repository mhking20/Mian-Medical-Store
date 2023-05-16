import React from 'react'
import {createBrowserRouter , RouterProvider} from "react-router-dom"
import Login from './components/login'
import Home from './components/home'

function App() {

  const router = createBrowserRouter([
    {
      path : "/",
      element : <Login/>
    },
    {
      path : "/home",
      element : <Home/>
    }
  ])
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App