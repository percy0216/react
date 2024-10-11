import React from 'react'
import {Routes,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import Home from '../pages/home'
import CreateProduct from '../pages/createproduct'
import ShowProduct from '../pages/ShowProduct'


const AppRoutes = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create' element={<CreateProduct />} />
        <Route path='/show' element={<ShowProduct />} />
    </Routes>
    </>
  )
}

export default AppRoutes