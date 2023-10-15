import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeContextProvider } from './contex/ThemeProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
    <ThemeContextProvider>
    <App />
    </ThemeContextProvider>
   
    <ToastContainer position='top-center'/>
    </>
  
)
