import './App.css';
import { FortuneTeller } from './components/FortuneTeller';
import { Projects } from './components/Projects';


function App() {
  return (
    <div className='body'>
      <div className='content-wrap'>
        <header className='header'>
          <menu>
            <li><a href="#about">about</a></li>
            <li><a href="#projects">projects</a></li>
            <li><a href="#contact">contact</a></li>
            <li><a href="#">resume</a></li>
          </menu>
          <div className="name">Nic Temple</div>
          <ul>
            <li>Git</li>
            <li><button type="button" id="theme-button">Change Theme</button></li>
          </ul>
        </header>
        <main>
          <div className="jumbo">
            <img src="img/tech-theme-jumbo.jpg" alt="neon city lights" />
          </div>
          <div id="about">
            <img src="img/tech-theme-personal.jpg" alt="headshot" />
            <div className="personal-info">
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
              <li>Contact:</li>
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
