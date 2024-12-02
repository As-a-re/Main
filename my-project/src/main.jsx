import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Home from './Home.jsx'
import Choruses from './Choruses.jsx'
import Player from './Player.jsx'
import Hymnals from './Hymnals.jsx'
import Login from './Login.jsx'
import Signup from './Sign up.jsx'
import Worship from './Worship.jsx'
import Praises from './Praises.jsx'

const router = createBrowserRouter([
  {
    path:"/",
  element:<App/>,
  },
  {
    path:"/Home",
  element:<Home/>,
  },
  {
    path:"/Choruses",
  element:<Choruses/>,
  },
  {
    path:"/Player",
  element:<Player/>,
  },
  {
    path:"/Hymnals",
    element:<Hymnals/>,
  },
  {
    path:"/Login",
    element:<Login/>,
  },
  {
    path:"/Sign up",
    element:<Signup/>,
  },
  {
    path:"/Worship",
    element:<Worship/>,
  },
  {
    path:"/Praises",
    element:<Praises/>,
  }

])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
