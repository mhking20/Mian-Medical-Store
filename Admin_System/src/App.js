import React from 'react'
import {createBrowserRouter , RouterProvider} from "react-router-dom"
import Login from './components/login'

function App() {

  const router = createBrowserRouter([
    {
      path : "/",
      element : <Login/>
    }
  ])
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App