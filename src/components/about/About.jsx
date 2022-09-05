import React from 'react'
import './about.css'
import ME from '../../assets/me-about.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'


const About = () => {
  return (
    <section id="about">
      <h5>My Story</h5>
      <h2>About Me</h2>
      <div className = "container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image"></img>
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3+ Year Working</small>
            </article>
          </div>
          <div className="about__cards">
            <article className='about__card'>
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>300+ Clients Worldwide</small>
            </article>
          </div>
          <div className="about__cards">
            <article className='about__card'>
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>80+ Completed</small>
            </article>
          </div>

          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum, facere. Quo, reiciendis in possimus ipsum architecto recusandae laboriosam omnis 
            distinctio expedita dolores iste dolore officia, repellat animi, quidem odio libero?
          </p>

          <a href="#contact" class="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About