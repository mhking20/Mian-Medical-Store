import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homelogo from "./components/homelogo";
import Home from "./components/home";

const router = createBrowserRouter([
  { path: "/", element: <Homelogo /> },
  {
    path: "home",
    element: <Home />,
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}
export default App;
