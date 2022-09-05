import React from 'react'
import './header.css'
import Location from './location'


const Header = () => {
  return (
    <header>
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