import NavBar from './components/Navbar/Navbar'
import AnimatedRoutes from './components/AnimatedRoutes'
import { BrowserRouter} from "react-router-dom";
import './index.css'
import ReactGA from 'react-ga4';
import React from 'react'

function App() {
  const TRACKING_ID = 'G-NBC6G4GPG1';
  ReactGA.initialize(TRACKING_ID);
  ReactGA.pageView(document.location.pathname);
  return (
    <BrowserRouter>
      <NavBar/>
      <AnimatedRoutes />
    </BrowserRouter>
  )
}

export default App