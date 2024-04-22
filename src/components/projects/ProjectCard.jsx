import React from 'react';
import './Projects.css';

function ProjectCard({ projectName, projectDescr, projectCategory, projectSkills, onClick }) {
  return (
    <div className='projectContainer' onClick={onClick}>
      <div className='projectContainerRight'>
        <h3>{projectName}</h3>
        <p>{projectDescr}</p>
        {projectCategory.map((category, index) => (
          <p key={index} className="category">{category}</p>
        ))}
      </div>
    </div>
  );
}

export default ProjectCard;
