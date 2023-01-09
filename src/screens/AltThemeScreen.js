import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FortuneTeller } from '../components/FortuneTeller';
import { Projects } from '../components/Projects';


export const AltThemeScreen = () => {

    const navigate = useNavigate();

    const themeHandler = () => {
        navigate("/");
    }

    return (
      <div className='alt-body'>
        <div className='content-wrap'>
        <header className='alt-header'>
          <div className='header-section'>
          <menu>
            <li><a id="alt-link" href="#about">about</a></li>
            <li><a id="alt-link" href="#projects">projects</a></li>
            <li><a id="alt-link" href="#contact">contact</a></li>
            <li><a id="alt-link" href="#">resume</a></li>
          </menu>
          </div>
          <div className='name-section'>
          <h1 className="name">Nic Temple</h1>
          </div>
          <div className='header-section'>
          <ul>
            <li>Git</li>
            <li className="border-wrap">
              <button type="button" id="theme-button" onClick={() =>themeHandler()}>Change Theme</button>
            </li>
          </ul>
          </div>
        </header>
        <main>
        <div className="alt-jumbo">
          <img src="img/alt-pic.jpg" alt="alternate theme" />
        </div>
        <div id="about">
            <div className="personal-info">
              <h1>ABOUT</h1>
              Former piano performer and instructor, transitioning to software engineering since mid-2021. 
              Previous professional experience stressed communication and self-starting, in addition to scheduling and managing projects 
              from start to finish. I enjoy working collaboratively and building relationships around shared goals. 
              I enjoy working with complex problems, breaking them down to small pieces, and learning new skills and techniques. 
              Music studies taught me the importance of critical feedback in personal growth.

              I do still write music and play piano, in addition to writing prose. 
              I have a passion for literature, collecting vinyl records, and the occasional late-night dive into wikipedia.
              <h2>Tech Stack</h2>
            </div>
            <img src="img/tech-theme-personal.jpg" alt="headshot" />
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
  )
}