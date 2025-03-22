import React from 'react';
import './contact.css';
import { motion as m } from 'framer-motion';
import linkedin from '../contact/linkedin.png'
function Contact() {
  const socialLinks = [
    {
      id: 'linkedin',
      label: 'linkedin',
      url: 'https://www.linkedin.com/in/kevinkochunyu/',
      icon: linkedin
    },
  ];

  return (
    <m.section 
      id="contact"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="resume-section contact-content">
        <h2>let's connect</h2>
        <p className="contact-intro">
          whether you have a question, want to collaborate, or just want to say hello, i'd love to hear from you.
        </p>
        
        <div className="social-links">
          {socialLinks.map(link => (
            <a 
              key={link.id} 
              href={link.url} 
              className="social-link"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <img 
                src={link.icon} 
                alt={`${link.label} icon`} 
                className="social-icon-img" 
              />
              <span className="social-label">{link.label}</span>
            </a>
          ))}
        </div>
        
        <div className="contact-details">
          <div className="resume-item">
            <span className="resume-item-title">send me an email</span>
            <span className="resume-item-detail">
              <a href="mailto:kevin11@uw.edu">kevin11@uw.edu</a>
            </span>
          </div>
          
          <div className="resume-item">
            <span className="resume-item-title">based in</span>
            <span className="resume-item-detail">seattle, washington</span>
          </div>
          
          <div className="resume-item">
            <span className="resume-item-title">open to</span>
            <span className="resume-item-detail">full-time opportunities, freelance projects</span>
          </div>
        </div>
      </div>
    </m.section>
  );
}

export default Contact;