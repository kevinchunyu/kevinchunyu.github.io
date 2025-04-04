import React from 'react'
import {NavLink} from 'react-router-dom'
import './navbar.css'

function Navbar() {
  return (
    <nav>
        <div className='linkContainer'>
          Kevin Ko | Software Engineer
        </div>
        <div className='linkContainer'>
          <div className='linkDiv'>
            <NavLink to="/">home</NavLink>
          </div>
          .
          <div className='linkDiv'>
            <NavLink to="/about">about</NavLink>
          </div>
          .
          <div className='linkDiv'>
            <NavLink to="/projects">projects</NavLink>
          </div>
          .
          <div className='linkDiv'>
            <a href='https://personalprofessionaldevelopment.s3.us-west-1.amazonaws.com/kkoresume.pdf' target='_blank'>resume</a>
          </div>
          .
          <div className='linkDiv'>
            <NavLink to="/contact">contact</NavLink>
          </div>
        </div>
    </nav>
  )
}

export default Navbar