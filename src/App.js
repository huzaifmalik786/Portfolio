import './App.css';
import { useRef } from 'react';
import Header from './components/Header';
import About from './components/About.js';
import Skills from './components/Skills.js';
import Projects from './components/Projects.js';
import Contact from './components/Contact.js';
import Footer from './components/Footer.js';
import 'atropos/css'


function App() {
  const about= useRef(null);
  const skills = useRef(null);
  const projects= useRef(null);
  const contact= useRef(null);

  return (
    <div className="App">
      <Header aboutref={about} skillref={skills} projectref={projects} contactref={contact}/>
      <div ref={about} className="heading">
        <hr className='opacity '/>
        <h1 className='opacity'>About Me</h1>
        <hr className='opacity'/>
      </div>
      <About/>
      <div ref={skills}>
        <Skills/>
      </div>
      <div ref={projects} className="heading">
        <hr className='reveal'/>
        <h1 className='reveal'>Projects</h1>
        <hr className='reveal'/>
      </div>
      <Projects/>
      <div ref={contact}>
        <Contact/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
