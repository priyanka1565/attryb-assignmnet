import React from 'react'
import { Routes, Route } from "react-router-dom";
import Login from '../pages/login/Login';
import SignupForm from '../pages/signup/Signup';
import Product from '../pages/Product/Product';


const AllRoutes = () => {
  return (
      <div>
          <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<SignupForm />} />
        <Route path='/product' element={<Product/> } />
        
          </Routes>
    </div>
  )
}

export default AllRoutes