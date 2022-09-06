import {React, Component} from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Contact from './components/contacts/Contact'
import ReactGA from 'react-ga';

class App extends Component {
  setGA = () =>  {
    ReactGA.initialize('G-R4HYR6HY9X');
    ReactGA.pageview(window.location.pathname);
  };
  componentDidMount() {
    this.setGA();
  }
  render() {
    return (
      <>
        <Header />
        <Nav />
        <About />
        <Experience />
        <Contact />
      </>
    );
  }
}

export default App