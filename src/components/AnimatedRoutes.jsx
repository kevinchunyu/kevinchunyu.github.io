import React from 'react'
import {Routes, Route, useLocation} from "react-router-dom"
import About from './about/About'
import Projects from './projects/Projects'
import Contact from './contact/contact'
import Header from './header/Header'
import { AnimatePresence } from 'framer-motion'
import ReactGA from 'react-ga4'

const TRACKING_ID = 'G-NBC6G4GPG1';

function AnimatedRoutes() {
    const location = useLocation();
    ReactGA.initialize(TRACKING_ID);
    ReactGA.send({hitType: "pageview", page: window.location.pathname});
    return (
    <AnimatePresence>
        <Routes location={location} key={location.pathname}>
            <Route index element = {<Header />} />
            <Route path='about' element={<About />} />
            <Route path='projects' element={<Projects/>} />
            <Route path='contact' element={<Contact />} />
        </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes;