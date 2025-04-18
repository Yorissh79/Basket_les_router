import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import Router from './router/Router'
// import { RouterProvider } from 'react-router-dom'
// import { routers } from './router/routers'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router/>
    {/* <RouterProvider router={routers}/> */}
  </StrictMode>,
)
