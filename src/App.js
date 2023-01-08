import './App.css';
import { FortuneTeller } from './components/FortuneTeller';
import { Projects } from './components/Projects';


function App() {


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
        <main>
        <div className="jumbo">
          <img src="img/tech-theme-jumbo.jpeg" alt="neon city lights" />
        </div>
        <div id="about">
            <img src="img/tech-theme-personal.jpg" alt="headshot" />
            <div className="personal-info">
              <h1>ABOUT</h1>
              A bunch of personal info goes here, with tech stack at bottom.
            </div>
        </div>
          <div id="projects">
            <Projects />
          </div>
          <FortuneTeller />
        </main>
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
