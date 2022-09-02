import React from 'react'
import Navbar from './Pages/Shared/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import LogIn from './Pages/LogIn/LogIn';
import Marketplace from './Pages/MarketPlace/Marketplace';


const App = () => {
  return (
    <div className='max-w-7xl mx-auto px-6'>
   <Navbar></Navbar>
   <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About/>} />
        <Route path="marketplace" element={<Marketplace/>} />
        <Route path="login" element={<LogIn/>} />
      </Routes>
    </div>
    
  )
}

export default App;