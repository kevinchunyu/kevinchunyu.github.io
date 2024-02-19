import React from 'react'
import './about.css'
import ME from '../../assets/me.jpg'
import {motion as m} from 'framer-motion'

const About = () => {
  return (
    <m.section id="about"
      intial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{delay: .25, duration: .5, ease: 'easeOut'}}
      exit={{opacity: 0}}
    >
      <h5>My Journey</h5>
      <h2>About Me</h2>
      <div className = "about__container">
        <div className="about__me">
            <img id= "me" src={ME} alt="About"></img>
        </div>
        <div className="about__content">
          <h3>Who am I and where I'm from</h3>
          <p className="about-me-p mb-1">
            I am both Master's student at the University of Washington, studying Information Management, and at Georgia Tech studying Computer Science.
            I obtained my Bachelors of both Data Science and Economics also at the University of Washington.
          </p>
          <p className="about-me-p mb-1">
            I am an aspiring software developer with a multicultural background, having grown up in Indonesia, in a Taiwanese family 
            and currently studying in America. I'm driven by a genuine passion for creating software that simplifies and enhances lives, 
            and I'm excited to leverage my unique perspective to build innovative solutions that make a positive impact!
          </p>
          <p className='about-me-p'>
            Outside of work, I enjoy playing & watching basketball, scuba diving, and travelling.
          </p>
        </div>
      </div>
    </m.section>
  )
}

export default About