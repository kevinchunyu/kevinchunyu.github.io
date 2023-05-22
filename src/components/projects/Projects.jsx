import React from 'react'
import './Projects.css'
import Snorlax from '../../assets/snorlax.gif'
import LGBTQSPACE from '../../assets/lgbtqspaces.png'
import Plenum from '../../assets/plenum-og-logo-raster.jpg'
import Kko from '../../assets/kko.png'
import {motion as m} from 'framer-motion'

function Projects() {
  return (
    <>
      <m.section className="allProjectContainer"
        intial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
      >
        {/* one div is one project card*/}
        <div className='projectContainer'>
          <div className='projectContainerLeft'>
            <img id="kko" src={Kko} alt="kko logo"></img>
          </div>
          <a href="https://kevinchunyu.github.io/" target="_blank">
            <div className = 'projectContainerRight'>
              <h3>kevinkochunyu.github.io</h3>
              <p>My personal website</p>
            </div>
          </a>
        </div>
        <div className='projectContainer'>
          <div className='projectContainerLeft'>
            <img id="lgbtqspace" src={LGBTQSPACE} alt="lgbtqspaces project"></img>
          </div>
          <a href="https://lgbtqspaces.csde.washington.edu/" target="_blank">
            <div className = 'projectContainerRight'>
              <h3>Shifting LGBTQ+ Spaces</h3>
              <p>A geospatial platform mapping for LGBTQ+ friendly locations.</p>
            </div>
          </a>
        </div>
        <div className='projectContainer'>
          <div className='projectContainerLeft'>
            <img id="plenum" src={Plenum} alt="plenum logo"></img>
          </div>
          <a href="http://students.washington.edu/plenum/index.html" target="_blank">
            <div className = 'projectContainerRight'>
              <h3>Plenum</h3>
              <p>A website for Plenum (Department of Geography UW)</p>
            </div>
          </a>
        </div>
      </m.section>
    </>
  )
}

export default Projects