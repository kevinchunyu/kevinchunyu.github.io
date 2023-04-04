import React from 'react'
import './Projects.css'
import Snorlax from '../../assets/snorlax.gif'
import LGBTQSPACE from '../../assets/lgbtqspaces.png'
import Plenum from '../../assets/plenum-og-logo-raster.jpg'
import Kko from '../../assets/kko.png'

function Projects() {
  return (
    <>
      <div className="allProjectContainer">
        {/* one div is one project card*/}
        <img id="snorlax" src={Snorlax} alt="snorlax gif"></img>
        <div className='projectContainer'>
          <div className='projectContainerLeft'>
            <img id="kko" src={Kko} alt="kko logo"></img>
          </div>
          <div className = 'projectContainerRight'>
            <h3>kevinkochunyu.github.io</h3>
            <p>My personal website</p>
          </div>
        </div>
        <div className='projectContainer'>
          <div className='projectContainerLeft'>
            <img id="lgbtqspace" src={LGBTQSPACE} alt="lgbtqspaces project"></img>
          </div>
          <div className = 'projectContainerRight'>
            <h3>Shifting LGBTQ+ Spaces</h3>
            <p>A geospatial platform mapping for LGBTQ+ friendly locations.</p>
          </div>
        </div>
        <div className='projectContainer'>
          <div className='projectContainerLeft'>
            <img id="plenum" src={Plenum} alt="plenum logo"></img>
          </div>
          <div className = 'projectContainerRight'>
            <h3>Plenum</h3>
            <p>A website for Plenum (Department of Geography UW)</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects