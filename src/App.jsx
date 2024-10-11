import React, { useState } from 'react'
import {BrowserRouter as Router, Route,Routes,Link} from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Navbar from './components/Navbar/Navbar/Navbar'
import AppRoutes from './Routes/Routes'



function App() {
 
  return (
    <> 
    <Router>
      <Navbar />
      <AppRoutes />
    </Router>
    </>
  )
}

export default App
