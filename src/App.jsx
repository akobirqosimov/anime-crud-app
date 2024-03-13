import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from "./pages/home/Home"
import Add from './pages/add/Add'
import Header from './components/header/Header'

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/add' element={<Add />} />
      </Routes>
    </div>
  )
}

export default App
