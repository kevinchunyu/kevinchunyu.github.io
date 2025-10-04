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
        Hi! I’m Kevin Ko — a recent University of Washington graduate, now a Software Engineer at AWS and 
        currently also pursuing my Master’s in Computer Science at Georgia Tech - Machine Learning Specialization.
        <br />
        <br />
        I’ve always been curious about how things work—whether in technology, people, or the world around me. 
        Growing up between different languages and cultures taught me how to adapt, and that same curiosity 
        led me to explore a wide range of paths: from building maps and coding full-stack apps, 
        to studying economics and
        <a href="https://en.wikipedia.org/wiki/Efficient-market_hypothesis" target="_blank">
        &nbsp;experimenting with trading for profit :) </a>
        <br />
        <br />
        Since starting my coding journey in 2018, I’ve built REST APIs, mapping tools, relational databases, and taught machine learning
        concepts as a Teaching Assistant. Balancing school, work, and projects has taught me to adapt quickly, 
        take ownership, and deliver results.
        <br />
        <br />
        Outside of the technical side, I value persistence, collaboration, and curiosity. 
        I may not always have the answers right away, but I’m al ays ready to learn, ask questions, and put in the work to grow.
        <br />
        <br />
        Welcome to my site! I’m glad you’re here! &#x1F44B;
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