import React from 'react'
import Navbar from './Pages/Shared/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import LogIn from './Pages/LogIn/LogIn';


const App = () => {
  return (
    <div>
   <Navbar></Navbar>
   <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About/>} />
        <Route path="login" element={<LogIn/>} />
      </Routes>
    </div>
    
  )
}

export default App;