import React from 'react'
import ReactDOM from 'react-dom/client'
import Routing from './Routing.jsx'
import { BrowserRouter } from 'react-router-dom'
import "./index.css"


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
        <Routing />
    </BrowserRouter>
  </React.StrictMode>,
)
