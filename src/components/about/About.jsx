import React from 'react'
import './about.css'
import ME from '../../assets/me.JPG'

const About = () => {
  return (
    <section id="about" className="center-parent-div">
      <h5>My Journey</h5>
      <h2>About Me</h2>
      <div className = "container about__container">
        <div className="about__me">
            <img id= "me" src={ME} alt="About Image"></img>
        </div>
        <div className="about__content">
          <h4 className="text-light">Who am I and where I'm from</h4>
          <p className="about-me-p mb-1">
            I am a Master's student at the University of Washington, studying Information Management, with a focus in Data Science and User Experience.
            I obtained my Bachelors of both Data Science and Economics also at the University of Washington.
          </p>
          <p className="about-me-p">
            I was born in the United States, grew up in Indonesia, and had Taiwanese parents. Growing up, often, I felt like I was
            from everywhere but nowhere at the same time, sometimes seemingly distant from a particular culture but sometimes yet
            so close. Through multiple struggles, identity crises, and searching for what I want to do, I have landed here, aspiring
            to use code to make an impact in this world. :)
          </p>
        </div>
      </div>
    </section>
  )
}

export default About