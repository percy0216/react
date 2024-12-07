import React, { useReducer, useState } from 'react'
import {BrowserRouter as Router, Route,Routes,Link} from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Navbar from './components/Navbar/Navbar/Navbar'
import AppRoutes from './Routes/Routes'
import { ItemsContext, ItemsReducer } from './context/itemsConstext'
import DBConexion from './components/conexionDB/db_conexion'


function App() {

  const initialState = []

  const [items, dispatch] = useReducer(ItemsReducer, initialState)
 
  return (
    <> 
    <Router>
      <ItemsContext.Provider value={{items,dispatch}}>
      <Navbar />
      <AppRoutes />
      </ItemsContext.Provider>
    </Router>
    
    </>
  )
}

export default App
