import React from 'react'
import './header.css'
import Location from './location'
import {motion as m} from 'framer-motion'

const Header = () => {
  return (
    <m.header id="header"
      intial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{delay:0.25, duration: 0.5, ease: 'easeOut'}}
      exit = {{opacity: 0}}
    >
      <div className='container header__container'>
        <div>
          <h5>Hello I'm</h5>
          <h1>Kevin Ko</h1>
          <Location />
          <h5 className='text-light'>A Curious, Proficient Tinkerer :)</h5>
        </div>

      </div>
    </m.header>
  )
}

export default Header