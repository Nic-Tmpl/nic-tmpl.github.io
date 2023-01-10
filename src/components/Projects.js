import React, { useState } from 'react';
import { projectsObject } from '../utils/projectsObject';

export const Projects = () => {
//This will contain a scroll screen with each project and a short video of the project - need to work out hosting
//or put in public folder
    const [project, setProject] = useState(projectsObject[0]);
    const { id, name, video, description, live, repo } = project;
    
    const incrementer = () => {
        console.log(id);
        let next = id;
        next++;
        console.log(next);
        if (next <= 3) {
            setProject(projectsObject[next]);
        } else {
            setProject(projectsObject[0]);
        }
    }

    const decrementer = () => {
        console.log(id);
        let prev = id;
        prev--;
        console.log(prev);
        if (prev >= 0 ) {
            setProject(projectsObject[prev]);
        } else {
            setProject(projectsObject[3])
        }
    }

    return (
        <div className='projects-section'>
            <h1>Projects</h1>
            <div className='project-box'>
                <div className='video-box'>
                    <div className='btn-box-left'>
                        <button id="dec-btn" type="button" onClick={() => decrementer()}>Prev</button>
                    </div>
                    <div className='btn-box-right'>
                        <button id="inc-btn" type="button" onClick={() => incrementer()}>Next</button>
                    </div>
                </div>
            <div className='description'>
                <p>A bunch of description for the project...</p>
            </div>
            </div>
        </div>
    )
}


/*         <div className='projects-section'>
            <div className='project-box'>
                <div className='video-box'>
                    <video className='project-video' src={backgroundImg} alt='something relevant' />
                    <div className='btn-box-left'>
                        <button id="dec-btn" type="button" onClick={() => decrementer()}>Prev</button>
                    </div>
                    <div className='btn-box-right'>
                        <button id="inc-btn" type="button" onClick={() => incrementer()}>Next</button>
                    </div>
                </div>
            <div className='description'>
                <p>A bunch of description for the project...</p>
            </div>
            </div>
        </div>
        */
