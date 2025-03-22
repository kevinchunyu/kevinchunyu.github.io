import React from 'react';
import './about.css';
import { motion as m } from 'framer-motion';

const About = () => {
  return (
    <m.section
      id="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.25, duration: 0.5, ease: 'easeOut' }}
      exit={{ opacity: 0 }}
    >
      <h2>about me</h2>
      <p>
        Hi! I'm Kevin Ko, and I'm set to graduate the University of Washington in June of 2025. 
        I've always been curious about how 
        things work—whether it's tech, people, or the world around me. I grew up speaking multiple languages, 
        bouncing between cultures, and eventually found my way into building maps. 
        From there, I dove into the world of full-stack development, transforming data into meaningful 
        visualizations and tools. 
        Over time, that curiosity led me deeper into cybersecurity, where I now explore how to build secure software. 
        <br/>
        <br/>
        Balancing a dual Master's program while contributing to multiple projects has taught me to be a 
        quick learner, a self-starter, and someone who takes ownership of delivering results under tight deadlines. 
        While I may not always be the smartest person in the room, I take pride in my strong work ethic, 
        persistence, and dedication to growth. I'm eager to learn from those around me and never hesitate
        to ask questions—because I believe the best ideas often come from collaboration and curiosity.
      </p>

      <div className="resume-section">
        <h3>education</h3>
        <ul className="resume-list">
          <li>
            <span className="resume-item-title">master of computer science (machine learning specialization)</span>
            <span className="resume-item-detail">georgia institute of technology, june 2025</span>
          </li>
          <li>
            <span className="resume-item-title">master of information management (data science & cybersecurity track)</span>
            <span className="resume-item-detail">university of washington, june 2025</span>
          </li>
          <li>
            <span className="resume-item-title">b.s. in economics & b.a. in geographical information systems</span>
            <span className="resume-item-detail">university of washington, december 2022</span>
          </li>
        </ul>
      </div>

      <div className="resume-section">
        <h3>skills</h3>
        <ul className="resume-list">
        <li>
          <span className="resume-item-title">programming languages</span>
          <span className="resume-item-detail">python, javascript, java, R, html/css</span>
        </li>
        <li>
          <span className="resume-item-title">web development</span>
          <span className="resume-item-detail">react.js, node.js, express.js, bootstrap, three.js</span>
        </li>
        <li>
          <span className="resume-item-title">databases</span>
          <span className="resume-item-detail">SQL, MSSQL, PostgreSQL, MongoDB</span>
        </li>
        <li>
          <span className="resume-item-title">devops & cloud</span>
          <span className="resume-item-detail">docker, git, jenkins, terraform, AWS EC2, Azure ECR</span>
        </li>
        <li>
          <span className="resume-item-title">fluently spoken languages</span>
          <span className="resume-item-detail">english, mandarin, taiwanese hokkien, bahasa indonesia</span>
        </li>
      </ul>
      </div>

      <div className="resume-section">
        <h3>other fun stuff</h3>
        <ul className="resume-list">
          <li>
            <span className="resume-item-title">scuba diving</span>
            <span className="resume-item-detail">PADI-certified Open Water Diver and Advanced Open Water Diver</span>
          </li>
          <li>
            <span className="resume-item-title">sports</span>
            <span className="resume-item-detail">basketball, swimming, fantasy sports, formula one, gym</span>
          </li>
        </ul>
      </div>
    </m.section>
  );
};

export default About;