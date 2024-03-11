import './Projects.css';
import ProjectCard from './ProjectCard';
import React from 'react';
import { motion as m } from 'framer-motion';
import {Link} from 'react-router-dom'

// Projects.js
function Projects({projects}) {

  return (
    <m.section
        className="allProjectContainer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
    >
      <h1 class='projectTitle'>projects (more coming soon!)</h1>
        {projects.map(project => (
        <Link to={`/projects/${project._id}`} key={project._id}>
          <ProjectCard
            imgSrc={project.imgSrc} // AWS S3 LINK
            projectName={project.title} // 
            projectDescr={project.projectDescription} //
            projectCategory= {project.category}
            projectSkills = {project.skills}
          />
        </Link>
      ))}
    </m.section>
  );
}

export default Projects;
