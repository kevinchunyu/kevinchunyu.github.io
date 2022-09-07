import React from 'react'
import './header.css'
import Location from './location'
import Navigation from './navigation'

const Header = () => {
  return (
    <header id="header">
      <Navigation />
      <div className='container header__container'>
        <div>
          <h5>Hello I'm</h5>
          <h1>Kevin Ko</h1>
          <Location />
          <h5 className='text-light'>A Detail-oriented, Proficient Tinkerer :)</h5>
        </div>

      </div>
    </header>
  )
}

export default Header