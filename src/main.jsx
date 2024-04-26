import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
// import Navbar from './Components/Navbar';
import Countries from './Components/Countries';
import Spain from './Countries/Spain';
import France from './Countries/France';
import Italy from './Countries/Italy';
import Netherlands from './Countries/Netherlands';
import England from './Countries/England';
import Switzerland from './Countries/Switzerland';
import AboutUs from './Pages/AboutUs';
import Contact from './Pages/Contact';
import ComingSoon from './Pages/ComingSoon';
import Queastion from './Pages/Queastion';
import OurTeam from './Pages/OurTeam';
import Home from './Components/Home';
import Root from './Components/Root/Root';
import NotFound from './Pages/NotFound';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/buy",
        element: <Countries></Countries>,
      },
      {
        path: "/spain",
        element: <Spain></Spain>,
      },
      {
        path: "/france",
        element: <France></France>,
      },
      {
        path: "/italy",
        element: <Italy></Italy>,
      },
      {
        path: "/netherlands",
        element: <Netherlands></Netherlands>,
      },
      {
        path: "/england",
        element: <England></England>,
      },
      {
        path: "/swizerland",
        element: <Switzerland></Switzerland>,
      },
      {
        path: "/ourteam",
        element: <OurTeam></OurTeam>,
      },
      {
        path: "/comingsoon",
        element: <ComingSoon></ComingSoon>,
      },
      {
        path: "/aboutus",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/f&Q",
        element: <Queastion></Queastion>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
