import React from 'react'
import "./App.css"
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Create from './components/Create'

const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Create/>}/>
      </Routes>
    </>
  )
}

export default App
