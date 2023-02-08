import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import About from './components/About'
import Footer from './components/Footer'
import Home from './components/Home'
import Nav from './components/Nav'
import Services from './components/Services'

function App() {
  

  return (
    <div className="app">
      <Nav />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
