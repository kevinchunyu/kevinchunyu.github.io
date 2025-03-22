import './Projects.css';
import React, { useState } from 'react';
import { motion as m } from 'framer-motion';

function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  
  // Project data structured as an array of objects
  const projectData = [
    {
      category: 'cybersecurity',
      categoryLabel: 'cybersecurity',
      projects: [
        {
          id: 'cybersecurity-methods',
          title: 'cybersec lab',
          description: 'explored metasploit, SQL Injection, XSS, and common OWASP Top 10 attacks and how to develop secure applications',
          tools: 'PHP, HTML, cybersecurity concepts, OWASP'
        },
        {
          id: 'threat-tracking',
          title: 'threat actor forum web scrapper',
          description: 'custom javascript school that scrapped hacktivist forums for member information',
          tools: 'python, OSINT techniques, threat intelligence, data processing'
        },
      ]
    },
    {
      category: 'web',
      categoryLabel: 'web development',
      projects: [
        {
          id: 'internet-weather',
          title: 'internet weather map (in progress...)',
          description: 'research project visualizing and analyzing global internet health metrics',
          tools: 'python, data visualization, network analysis'
        },
        {
          id: 'devsecops',
          title: 'devsecops tutorial platform (in progress...)',
          description: 'tutorial-based web platform teaching azure-based CI/CD concepts, containerization, and security testing',
          tools: 'azure, docker, ZAP, selenium, sonarqube'
        },
        {
          id: 'seattle-outage',
          title: 'seattle power outage visualization',
          description: 'interactive geospatial platform mapping outage data in relation to socioeconomic and health indicators',
          tools: 'javascript, html/css, maplibre GLJS, geospatial analysis',
          link: 'https://jakobzhao.github.io/scl/'
        },
        {
          id: 'lgbtq-spaces',
          title: 'lgbtq-spaces',
          description: 'interactive geospatial platform mapping for lgbtq-friendly spaces over time',
          tools: 'javascript, html/css, mapbox GLJS, node.js, express.js, postgresql, geospatial analysis',
          link: 'https://jakobzhao.github.io/vgi/#14/47.61497/-122.33502/0/60'
        },
        {
          id: 'it-onboarding',
          title: 'it onboarding system',
          description: 'full-stack web application streamlining IT onboarding processes for new employees',
          tools: 'node.js, express.js, MSSQL, REST APIs, jira integration'
        },
      ]
    },
    {
      category: 'data',
      categoryLabel: 'data science & machine learning',
      projects: [
        {
          id: 'algo-trading',
          title: 'algorithmic trading strategies',
          description: 'teaching assistant for CS7646, developing and evaluating machine learning models for financial markets',
          tools: 'python, machine learning, data structures, financial analysis',
          link: 'https://omscs.gatech.edu/cs-7646-machine-learning-trading'
        }
      ]
    }
  ];
  
  // Filter categories derived from the projectData
  const filterCategories = [
    { id: 'all', label: 'all projects' },
    ...projectData.map(category => ({
      id: category.category,
      label: category.categoryLabel
    }))
  ];

  const handleFilterClick = (categoryId) => {
    setActiveFilter(categoryId);
  };

  return (
    <m.section
      id="projects"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.25, duration: 0.5, ease: 'easeOut' }}
      exit={{ opacity: 0 }}
    >
      <h2>projects</h2>
      
      <div className="project-filter">
        {filterCategories.map(category => (
          <button 
            key={category.id}
            className={`filter-btn ${activeFilter === category.id ? 'active' : ''}`}
            onClick={() => handleFilterClick(category.id)}
          >
            {category.label}
          </button>
        ))}
      </div>

      {projectData.map(category => (
        (activeFilter === 'all' || activeFilter === category.category) && (
          <div className={`resume-section ${category.category}-section`} key={category.category}>
            <h3>{category.categoryLabel}</h3>
            <ul className="resume-list">
              {category.projects.map(project => (
                <li key={project.id}>
                  <span className="resume-item-title">
                    {project.title}
                    {project.link && (
                      <a 
                        href={project.link} 
                        className="project-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="link-icon">↗</span>
                      </a>
                    )}
                  </span>
                  <span className="resume-item-detail">{project.description}</span>
                  <div className="project-tools">{project.tools}</div>
                </li>
              ))}
            </ul>
          </div>
        )
      ))}
    </m.section>
  );
}

export default Projects;