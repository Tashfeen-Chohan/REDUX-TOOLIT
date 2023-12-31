import React from 'react'
import "./App.css"
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Create from './components/Create'
import Read from './components/Read'
import SinglePost from './components/SinglePost'
import UpdatePost from './components/UpdatePost'

const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Read/>}/>
        <Route path='/create' element={<Create/>}/>
        <Route path='/singlePost/:id' element={<SinglePost/>}/>
        <Route path='/editPost/:id' element={<UpdatePost/>}/>
      </Routes>
    </>
  )
}

export default App
