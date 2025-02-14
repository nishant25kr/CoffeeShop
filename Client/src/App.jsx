import React from 'react'
import Signup from '../Component/Signup'
import Navbar from '../Component/Navbar';
import Home from '../Component/Home';
import Login from '../Component/Login';
import About from '../Component/About'
import Products from '../Component/Products'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css'

export default function App() {
  return (
    <Router>
      <Navbar />
      <div>
        <Routes>
          <Route path="/register" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </div>
    </Router>
  )
}
