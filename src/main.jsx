import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Home from '../pages/home.jsx'
import Settings from '../pages/settings.jsx'
import Statistics from '../pages/statistics.jsx'
import Security from '../pages/security.jsx'

const router = createBrowserRouter([

{
  element: <App/>,
  
  children: [
    {
      path: "/",
      element: <Home/>
    },
    {
      path : "/settings",
      element : <Settings/>
    },
    {
      path : "/statistics",
      element : <Statistics/>
    },
    {
      path : "/security",
      element : <Security/>
    }

  ],
}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>,
)
