import { useState } from 'react'
import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Pokedex from './pages/pokedex';
import Profile from './pages/profile';
import Login from './pages/login';
import Pokemon from './pages/pokemon';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

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