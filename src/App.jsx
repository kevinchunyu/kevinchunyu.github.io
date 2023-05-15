import NavBar from './components/Navbar/Navbar'
import AnimatedRoutes from './components/AnimatedRoutes'
import { BrowserRouter} from "react-router-dom";
import './index.css'
import ReactGA from 'react-ga';
import React, {useEffect} from 'react'

const TRACKING_ID = 'G-R4HYR6HY9X';
ReactGA.initialize(TRACKING_ID);

function App() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <BrowserRouter>
      <NavBar/>
      <AnimatedRoutes />
    </BrowserRouter>
  )
}

export default App