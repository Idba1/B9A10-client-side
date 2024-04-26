import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Navbar from './Components/Navbar';
import Countries from './Components/Countries';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar></Navbar>,
  },
  {
    path: "/buy",
    element: <Countries></Countries>,
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
