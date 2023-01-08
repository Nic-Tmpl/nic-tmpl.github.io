import { useState } from 'react';
import './App.css';
import { About } from './components/About';
import { FortuneTeller } from './components/FortuneTeller';
import { Jumbo } from './components/Jumbo';
import { Projects } from './components/Projects';


function App() {
const [theme, setTheme] = useState(false);

const themeHandler = () => {
  console.log('Theme changed');
  setTheme(!theme);
  
}

  return (
    <div className='body'>
      <div className='content-wrap'>
      <header className='header'>
          <div className='header-section'>
          <menu>
            <li><a href="#about">about</a></li>
            <li><a href="#projects">projects</a></li>
            <li><a href="#contact">contact</a></li>
            <li><a href="#">resume</a></li>
          </menu>
          </div>
          <div className='name-section'>
          <h1 className="name">Nic Temple</h1>
          </div>
          <div className='header-section'>
          <ul>
            <li>Git</li>
            <li className="border-wrap">
              <button type="button" id="theme-button" onClick={() => themeHandler()}>Change Theme</button>
            </li>
          </ul>
          </div>
        </header>
        <Jumbo theme={theme} />
        <About theme={theme} />
          <div id="projects">
            <Projects theme={theme} />
          </div>
          <FortuneTeller theme={theme} />
        <footer className="footer">
          <div id="contact">
            <ul className="contact-info">
              <li><h2>CONTACT</h2></li>
              <li>Phone:</li>
              <li>Email:</li>
            </ul>
          </div>
          <div className="socials">
            <p>GITHUB LINK</p>
          </div>
        </footer>
    </div>
  </div>
  );
}

export default App;
