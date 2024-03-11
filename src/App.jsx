import NavBar from './components/Navbar/Navbar'
import AnimatedRoutes from './components/AnimatedRoutes'
import { BrowserRouter} from "react-router-dom";
import './index.css'
import ReactGA from 'react-ga4';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TRACKING_ID = 'G-NBC6G4GPG1';

function App() {
  ReactGA.initialize(TRACKING_ID);
  ReactGA.send({hitType: "pageview", page: window.location.pathname});
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/projects/getAllProjects');
        setProjects(response.data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <BrowserRouter>
      <NavBar/>
      <AnimatedRoutes projects={projects}/>
    </BrowserRouter>
  )
}

export default App