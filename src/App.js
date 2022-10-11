import './App.css';
import Header from './components/Header';
import About from './components/About.js';
import Skills from './components/Skills.js';
import Projects from './components/Projects.js';
import Contact from './components/Contact.js';
import Footer from './components/Footer.js';


function App() {
  return (
    <div className="App">
      <Header/>
      <div className="heading">
        <hr className='opacity '/>
        <h1 className='opacity'>About Me</h1>
        <hr className='opacity'/>
      </div>
      <About/>
      <Skills/>
      <div className="heading">
        <hr className='reveal'/>
        <h1 className='reveal'>Projects</h1>
        <hr className='reveal'/>
      </div>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
