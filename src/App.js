import React from 'react'
import Navbar from './Pages/Shared/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import LogIn from './Pages/LogIn/LogIn';
import Marketplace from './Pages/MarketPlace/Marketplace';
import Signup from './Pages/LogIn/signup';
import Create from './Pages/Create/Create';
import RequireAuth from './Pages/LogIn/RequireAuth';


const App = () => {
  return (
    <div className='max-w-7xl mx-auto px-6 '>
   <Navbar></Navbar>
   <Routes>
        <Route path="/" element={<Home />} />
        <Route path="create" element={<Create/>} />


        {/* <Route path="marketplace" element={<Marketplace/>} /> */}
        <Route path="marketplace" element={
        <RequireAuth>
          <Marketplace></Marketplace>
        </RequireAuth>} />

        <Route path="login" element={<LogIn/>} />
        <Route path="signup" element={<Signup/>} />
      </Routes>
    </div>
    
  )
}

export default App;