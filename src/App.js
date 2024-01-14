import React from 'react'
import './App.css'
import Home from './pages/Home'
import AboutMe from './pages/AboutMe'
import Projects from './pages/Projects'
import ContactMe from './pages/ContactMe'
import Header from './components/Header'
import Footer from './components/Footer'
import {Routes, Route} from 'react-router-dom'

const App = () => {
  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/aboutme" element={<AboutMe/>}/>
      <Route path="/projects" element={<Projects/>}/>
      <Route path="/contactme" element={<ContactMe/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App