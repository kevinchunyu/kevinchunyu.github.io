import NavBar from './components/Navbar/Navbar'
import AnimatedRoutes from './components/AnimatedRoutes'
import { BrowserRouter} from "react-router-dom";
import './index.css'


import React from 'react'

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <AnimatedRoutes />
    </BrowserRouter>
  )
}

export default App