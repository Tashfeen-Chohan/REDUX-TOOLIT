import React from 'react'
import "./App.css"
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Create from './components/Create'
import Read from './components/Read'

const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Read/>}/>
        <Route path='/create' element={<Create/>}/>
      </Routes>
    </>
  )
}

export default App
