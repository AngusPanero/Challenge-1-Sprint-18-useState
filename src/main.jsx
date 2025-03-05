import { useState } from "react"
import React from 'react'
import ReactDOM from 'react-dom/client'
import { App, ChangeName } from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root2')).render(
  <React.StrictMode>
    <ChangeName />
  </React.StrictMode>,
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
