import React from 'react'
import "bootstrap/dist/css/bootstrap.css"
import Header from './components/layout/Header/Header'
import Home from './components/pages/Home'
import { Route, Routes } from 'react-router-dom'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import NotFound from './components/pages/NotFound'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App