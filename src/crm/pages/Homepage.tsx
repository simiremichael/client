import React from 'react'
import DashBoard from './DashBoard';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Properties from './Properties';

function Homepage() {
  return (
    <div>
    {/* <BrowserRouter>
    <Routes>
    <Route path='/' element={<DashBoard />} />
    <Route path='/properties' element={<Properties />} />
    </Routes>
    </BrowserRouter> */}
    </div>
  )
}

export default Homepage