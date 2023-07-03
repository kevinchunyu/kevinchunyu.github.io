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
          <h3 className="text-light">Who am I and where I'm from</h3>
          <p className="about-me-p mb-1">
            I am both Master's student at the University of Washington, studying Information Management, and at Georgia Tech studying Computer Science.
            I obtained my Bachelors of both Data Science and Economics also at the University of Washington.
          </p>
          <p className="about-me-p mb-1">
            I was born in the United States, grew up in Indonesia, and had Taiwanese parents. Growing up, often, I felt like I was
            from everywhere but nowhere at the same time. Sometimes seemingly distant from a particular culture but sometimes yet
            so close. Through multiple struggles, identity crises, and searching for what I want to do, I have landed here, aspiring
            to use code to make an impact in this world. :)
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