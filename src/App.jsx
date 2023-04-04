import Header from './components/header/Header'
import NavBar from './components/Navbar/Navbar'
import About from './components/about/About'
import Projects from './components/projects/Projects'
import Contact from './components/contact/contact'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import './index.css'

import React from 'react'

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route index element = {<Header />} />
        <Route path='about' element={<About />} />
        <Route path='projects' element={<Projects />} />
        <Route path='contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App