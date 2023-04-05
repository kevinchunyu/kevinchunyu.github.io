import React from 'react'
import './contact.css'
import {motion as m} from 'framer-motion'

function contact() {
  return (
    <m.section id="contact"
      intial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
    >
      <div>
        <h2>Let's connect!</h2>
        <p>Whether you have a question, want to collaborate, or just want to say hello, I'd love you hear from you.
        </p>
        <p>Shoot me an email at <a href="mailto: kevin11@uw.edu" target="_blank">kevin11@uw.edu</a></p>
        <p>Or, connect with me via <a href="https://www.linkedin.com/in/kevinkochunyu/" target="_blank">LinkedIn!</a></p>
      </div>
    </m.section>
  )
}

export default contact