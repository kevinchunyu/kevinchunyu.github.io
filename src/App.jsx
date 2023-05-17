import NavBar from './components/Navbar/Navbar'
import AnimatedRoutes from './components/AnimatedRoutes'
import { BrowserRouter} from "react-router-dom";
import './index.css'
import ReactGA from 'react-ga4';
import React from 'react'
const TRACKING_ID = 'G-NBC6G4GPG1';

function App() {
  ReactGA.initialize(TRACKING_ID);
  ReactGA.send({hitType: "pageview", page: window.location.pathname});

   return (
    <BrowserRouter>
      <NavBar/>
      <AnimatedRoutes />
    </BrowserRouter>
  )
}

export default App