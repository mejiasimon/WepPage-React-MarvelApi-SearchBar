import React from 'react'
import ReactDOM from 'react-dom/client'
import { HOME } from './HOME/HOME'
import { BrowserRouter } from 'react-router-dom'
import { Rutas } from './Routes/Rutas'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Rutas></Rutas>
    </BrowserRouter>
  </React.StrictMode>
)
