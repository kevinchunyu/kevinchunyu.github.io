import React from 'react';
import './Projects.css';

function ProjectCard({ imgSrc, projectName, projectDescr, onClick }) {
  return (
    <div className='projectContainer' onClick={onClick}>
      <div className='projectContainerLeft'>
        <img id="kko" src={imgSrc} alt="project-card-img"></img>
      </div>
      <div className='projectContainerRight'>
        <h3>{projectName}</h3>
        <p>{projectDescr}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
