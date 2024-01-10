import React from 'react'
import './App.css'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import {Routes, Route} from 'react-router-dom'

const App = () => {
  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App