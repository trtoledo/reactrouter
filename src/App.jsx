import { useState } from 'react';
import { Link, Routes, Route } from "react-router-dom";
import Nav from './components/Nav';
import Home from './components/Home';
import Blue from './components/Blue';
import Red from './components/Red';
import Purple from './components/Purple';
import Green from './components/Green';
import './App.css';

function App() {


  return (
    <>
     <div id="container">
      <Nav />     
      <h2>Hello React Router!</h2>
      <div id="main-section">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/blue" element={<Blue />}/>
          <Route path="/red" element={<Red />}/>
          <Route path="/purple" element={<Purple />}/>
          <Route path="/green" element={<Green />}/>
        </Routes>
      </div>
    </div>
    </>
  )
}

export default App;
