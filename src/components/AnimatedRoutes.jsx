import React, {useEffect} from 'react'
import {Routes, Route, useLocation} from "react-router-dom"
import About from './about/About'
import Projects from './projects/Projects'
import Contact from './contact/contact'
import Header from './header/Header'
import { AnimatePresence } from 'framer-motion'
import ReactGA from 'react-ga';

const TRACKING_ID = 'G-3GM2TKFWG0';
ReactGA.initialize(TRACKING_ID);

function AnimatedRoutes() {
    const location = useLocation();
    useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search);
      }, []);
    return (
    <AnimatePresence>
        <Routes location={location} key={location.pathname}>
            <Route index element = {<Header />} />
            <Route path='about' element={<About />} />
            <Route path='projects' element={<Projects />} />
            <Route path='contact' element={<Contact />} />
        </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes