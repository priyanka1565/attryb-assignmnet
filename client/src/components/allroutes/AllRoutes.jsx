import React from 'react'
import { Routes, Route } from "react-router-dom";
import Login from '../pages/login/Login';
import SignupForm from '../pages/signup/Signup';
import CarAdd from '../pages/Product/CarAdd';
import GetCar from '../pages/Product/GetCar';


const AllRoutes = () => {
  return (
      <div>
          <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<SignupForm />} />
        <Route path='/addcar' element={<CarAdd />} />
        <Route path='/getcar' element={<GetCar />} />
        
          </Routes>
    </div>
  )
}

export default AllRoutes