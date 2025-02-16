import React from 'react'
import { Routes, Route } from "react-router-dom";
import Blue from "../Blue/Blue";
import Red from "../Red/Red";
import Home from "../Home/home";

function Main() {
  return (
    <div id="main-section">
      <Routes>
       <Route path="/blue" element={<Blue/>} />
       <Route path="/red" element={<Red/>} />
       <Route path="/home" element={<Home/>} />  
      </Routes>
    </div>
  )
}

export default Main;