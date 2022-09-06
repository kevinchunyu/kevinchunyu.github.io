import React from 'react'
import './experience.css'

export const Experience = () => {
  return (
    <section id="experience" className="container">
        <h2>My Experiences</h2>
        <div id="experience-div-parent">
          <div className="experience-div">
            <p className="experience-title m-left">06/2022 - </p>
            <p className="experience-descr">TerraPower // IT Full Stack Development Intern</p>
          </div>
          <div className="experience-div">
            <p className="experience-title m-left">03/2021 - </p>
            <p className="experience-descr">HGIS Lab // Full Stack Development Research Assistant</p>
          </div>
          <div className="experience-div">
            <p className="experience-title m-left">09/2021 - 06/2022</p>
            <p className="experience-descr">INFO 201 - UW iSchool // Teaching Assistant</p>
          </div>
          <div className="experience-div">
            <p className="experience-title m-left">02/2021 - 06/2021</p>
            <p className="experience-descr">Plenum // Web Developer</p>
          </div>
          <div className="experience-div">
            <p className="experience-title m-left">10/2019 - 12/2020</p>
            <p className="experience-descr">UW Academic Technologies // Classroom Technician</p>
          </div>
        </div>
        <h2 className="mt-1">Knowledge Base</h2>
        <div>
          <p className="experience-title m-left">Programming Languages:</p>
          <p className="m-left experience-descr">JavaScript (Node.js, Express.js, React.js), Java, Python, R, HTML, CSS, SQL (MSSQL, PostgreSQL)</p>
        </div>
        <div>
          <p className="experience-title m-left">Development Tools:</p>
          <p className="m-left experience-descr">GitHub, Jira, Visual Studio Code, Jupyter Notebook</p>
        </div>
        <div>
          <p className="experience-title m-left">Database Management:</p>
          <p className="m-left experience-descr">Microsoft SQL Server, pgAdmin</p>
        </div>
        <h2 className="mt-1">Coursework</h2>
        <div className="experience-div">
          <p className="experience-title m-left">Computer Science</p>
          <p className="experience-descr">Data Structures & Algorithms, Machine Learning</p>
        </div>
        <div className="experience-div">
          <p className="experience-title m-left">Informatics</p>
          <p className="experience-descr">Data Visualization, Data Ethics, Database Management</p>
        </div>
        <div className="experience-div">
          <p className="experience-title m-left">Economics</p>
          <p className="experience-descr">Econometrics, Causal Inference, Portfolio Theory</p>
        </div>
        <div className="experience-div">
          <p className="experience-title m-left">Geographic Information Systems</p>
          <p className="experience-descr">Spatial Analysis, Mapping Methods</p>
        </div>
    </section>
  )
}

export default Experience