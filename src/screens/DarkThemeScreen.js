import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact, faNodeJs, faGithub } from '@fortawesome/free-brands-svg-icons';
import { useNavigate } from 'react-router-dom';
import HashLinkObserver from 'react-hash-link';
import { FortuneTeller } from '../components/FortuneTeller';
import { Projects } from '../components/Projects';


export const DarkThemeScreen = () => {

    const navigate = useNavigate();

    const themeHandler =() => {
        navigate("/");
    }


    return(
    <div className='body'>
      <HashLinkObserver />
     <div className='content-wrap'>
        <header className='header'>
          <div className='header-section'>
          <menu>
            <li><a href="#about">about</a></li>
            <li><a href="#projects">projects</a></li>
            <li><a href="#contact">contact</a></li>
            <li><a href="https://Nic-Tmpl.github.io/Resume.pdf">resume</a></li>
          </menu>
          </div>
          <div className='name-section'>
          <h1 className="name">Nic Temple</h1>
          </div>
          <div className='header-section'>
          <ul>
            <li><a href="https://github.com/Nic-Tmpl"><FontAwesomeIcon icon={faGithub} /></a></li>
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
            <img src="img/tech-theme-personal.JPG" alt="headshot" />
            <div className="personal-info">
              <h1>ABOUT</h1>
              <p>Former piano performer and instructor, transitioning to software engineering since mid-2021. Started out with the K&R C
              programming book before moving on to a PERN stack.
              Previous professional experience stressed communication and self-starting, in addition to scheduling and managing projects 
              from start to finish. I enjoy working collaboratively and building relationships around shared goals. 
              I also enjoy working with complex problems, breaking them down to small pieces, and learning new skills and techniques. 
              Music studies taught me the importance of critical feedback in personal growth.</p>
              <p>I do still write music and play piano, in addition to writing prose. 
              I have a passion for literature, collecting vinyl records, and the occasional late-night dive into wikipedia.</p>
              <p>Some of my projects are below, in addition to the first script I wrote in JS - a dadaist fortune teller.</p>
              <h2>Tech Stack</h2>
              <ul className='tech-stack'>
                <li><FontAwesomeIcon icon={faHtml5} /></li>
                <li><FontAwesomeIcon icon={faCss3Alt} /></li>
                <li><FontAwesomeIcon icon={faJs} /></li>
                <li><FontAwesomeIcon icon={faReact} /></li>
                <li><FontAwesomeIcon icon={faNodeJs} /></li>
                <li>Express/PostGreSQL</li>
              </ul>
            </div>
        </div>
          <div id="projects">
            <Projects lightTheme={false} />
          </div>
          <FortuneTeller lightTheme={false} />
        </main>
        <footer className="footer">
          <div id="contact">
            <ul className="contact-info">
              <li><h2>CONTACT</h2></li>
              <li>Phone: (541) 601-2091</li>
              <li>Email: nictemplepiano@gmail.com</li>
            </ul>
          </div>
          <div className="socials">
            <a href="https://github.com/Nic-Tmpl"><FontAwesomeIcon icon={faGithub} /></a>
          </div>
        </footer>
    </div>
  </div>
  )
}