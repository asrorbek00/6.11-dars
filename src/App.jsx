import React from 'react'
import { RouterProvider, createBrowserRouter, Router } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import Create from  "./pages/Create"
import Recipie from "./pages/Recipie"

function App() {

  const routes = createBrowserRouter([
    {
      path:"/",
      element:<MainLayout/>,
      children:[
        {
          index: true,
          element:<Home/>
        },
        {
          path:"create",
          element:<Create/>
        },
        {
          path:"recipie",
          element:<Recipie/>
        },
        {
          path:"recipie/:id",
          element: <Recipie/>
        }
      ]
    }
  ])
   return <RouterProvider router={routes}/>

  
}

export default App