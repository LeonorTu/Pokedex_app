import { useState } from 'react'
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Pokedex from './pages/pokedex';
import Profile from './pages/profile';
import Login from './pages/login';
import Pokemon from './pages/pokemon';
import './index.css'

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Pokedex/>}/>
        <Route path="/Login" element={<Login />}/>
        <Route path="/Profile" element={<Profile/>}/>
      </Routes>
    </Router>
  )
}

export default App
