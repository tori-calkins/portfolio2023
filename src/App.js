import React from 'react'
import './App.css'
import Home from './pages/Home'
import AboutMe from './pages/AboutMe'
import Projects from './pages/Projects'
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
    </Routes>
    <Footer/>
    </>
  )
}

export default App