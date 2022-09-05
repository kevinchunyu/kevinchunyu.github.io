import React from 'react'
import './about.css'
import ME from '../../assets/stickman.png'

const About = () => {
  return (
    <section id="about" className="center-parent-div">
      <h5>My Journey</h5>
      <h2>About Me</h2>
      <div className = "container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image"></img>
          </div>
        </div>
        <div className="about__content">
          <h4 className="text-light">Who am I and where I'm from</h4>
          <p className="about-me-p mb-1">
            I am a graduating senior from the University of Washington - Seattle. Currently majoring in both Data Science and Economics
            and looking for data science and software development opportunities.
          </p>
          <p className="about-me-p">
            I was born in the United States, grew up in Indonesia, and had Taiwanese parents. Growing up, often, I felt like I was
            from everywhere but nowhere at the same time, sometimes seemingly distant from a particular culture but sometimes yet
            so close. Through multiple struggles, identity crises, and searching for what I want to do, I have landed here, aspiring
            to use code to make an impact in this world. :)
          </p>

          <p id="extra-p" className="about-me-p">
            To want to read more in-depth about my journey, take a quick scroll through the
            <a> blog section </a> of this site!
          </p>

        </div>
      </div>
    </section>
  )
}

export default About