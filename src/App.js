import React from 'react'
import './App.css'
import Home from './pages/Home'
import Header from './components/Header'
import {Routes, Route} from 'react-router-dom'

const App = () => {
  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
    </>
  )
}

export default App