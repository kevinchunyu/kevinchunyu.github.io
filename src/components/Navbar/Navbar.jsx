import React from 'react'
import {NavLink} from 'react-router-dom'
import './navbar.css'

function Navbar() {
  return (
    <nav>
        <div className='linkContainer'>
          <div className='linkDiv'>
            <NavLink to="/">Home</NavLink>
          </div>
          |
          <div className='linkDiv'>
            <NavLink to="/about">About</NavLink>
          </div>
          |
          <div className='linkDiv'>
            <NavLink to="/projects">Projects</NavLink>
          </div>
          |
          <div className='linkDiv'>
            <NavLink to="/contact">Contact</NavLink>
          </div>
        </div>
    </nav>
  )
}

export default Navbar