import React from 'react'
import Home from './pages/Home'
import { BrowserRouter, createBrowserRouter, Router, RouterProvider } from 'react-router-dom'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Mainpage from './components/Mainpage'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Register from './pages/Register'
import PrivateRouting from './privaterouting/PrivateRouting'

const RouterLayout = () => {
  // console.log(createBrowserRouter());
  
  const routes = createBrowserRouter([
    {
      path:"/",
      element: <Mainpage/>,
      children: [
        {
          path:"/home",
          element:<Home/>
        },
        {
          path:"/about",
          element:<About/>
        },
        {
          path:"/projects",
          element:<Projects/>
        },
        {
          path: "/contact",
          element:<Contact/>
        },
        {
          path: "/register",
          element: <Register/>
        },
        {
          path: "/login",
          element: <Login/>
        },
        {
          path: "/dashboard",
          element: <PrivateRouting>
                  <Dashboard/>
          </PrivateRouting>
        }
      ]
    },
   
  ])
  return <RouterProvider router={routes}/>

  
}

export default RouterLayout