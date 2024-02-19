import './Projects.css';
import StockBG from '../../assets/stock_bg.jpeg';
import LGBTQSPACE from '../../assets/lgbtqspaces.png';
import Plenum from '../../assets/plenum-og-logo-raster.jpg';
import Kko from '../../assets/kko.png';
import ProjectCard from './ProjectCard';
import { motion as m } from 'framer-motion';
import {Link} from 'react-router-dom'

// Projects.js

function Projects() {
  return (
    <m.section
        className="allProjectContainer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
    >
        <Link to="/projects/tradingStrategy">
          <ProjectCard
            imgSrc={StockBG}
            projectName="Trading Strategy Evaluation"
            projectDescr="Will I beat the market?"
          />
        </Link>

        <Link to="/projects/personalWebsite">
          <ProjectCard
            imgSrc={Kko}
            projectName="kevinkochunyu.github.io"
            projectDescr="My personal website"
          />
        </Link>

        <Link to="/projects/lgbtqspaces">
          <ProjectCard
            imgSrc={LGBTQSPACE}
            projectName="Shifting LGBTQ+ Spaces"
            projectDescr="A geospatial platform mapping for LGBTQ+ friendly locations"
          />
        </Link>

        <a href="https://students.washington.edu/plenum/" target="_blank">
          <ProjectCard
            imgSrc={Plenum}
            projectName="Plenum"
            projectDescr="A website for Plenum (Department of Geography UW)"
          />
        </a>
    </m.section>
  );
}

export default Projects;
