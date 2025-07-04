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
import AllTouristSpot from './Nav/AllTouristSpot';
import AddSpot from './Nav/AddSpot';
import MyAdd from './Nav/MyAdd';
import Register from './Components/Register';
import LogIn from './Components/LogIn';
import Page from './Nav/Page';
import Ticket from './Pages/Ticket';
import SpotViewDetails from './Cared/SpotViewDetails';
import AddTouristSpotSection from './Pages/AddTouristSpotSection';
import TouristSpotSection from './Nav/TouristSpotSection';
import AuthProvider from './Components/AuthProvider';
// import ProtectedRoute from './Components/ProtectedRoute';
import Check from './Pages/Check';
import Update from './Components/Update';
import Details from './Cared/Details';
import ProtectedRoute from './Components/ProtectedRoute';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('https://euro-journey.vercel.app/alltouristspotsection'),
      },
      {
        path: "/alltouristspotsection",
        element: <AddTouristSpotSection></AddTouristSpotSection>,
      },
      {
        path: "/touristspotsection",
        element: <TouristSpotSection></TouristSpotSection>,
      },
      {
        path: "/countries",
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
        path: "/alltouristspot",
        loader: () => fetch('https://euro-journey.vercel.app/addspot'),
        element: <AllTouristSpot></AllTouristSpot>,
      },
      {
        path: "/addspot",
        element:
          <ProtectedRoute>
            <AddSpot></AddSpot>
          </ProtectedRoute>
        ,
      },
      {
        path: `allviewdetails/:id`,
        element:
          <SpotViewDetails></SpotViewDetails>
        ,
      },
      {
        path: `/details/:id`,
        element:
          <Details></Details>
        ,
      },
      {
        path: "/myadd/:userEmail",
        element:
          <MyAdd></MyAdd>
        ,
      },

      {
        path: "/page",
        element: <Page></Page>,
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
      {
        path: "/ticket",
        element: <Ticket></Ticket>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/check",
        element: <Check></Check>,
      },
      {
        path: "/update",
        element: <Update></Update>,
      },
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
