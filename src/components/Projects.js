import React, { useState } from 'react';
import { projectsObject } from '../utils/projectsObject';

export const Projects = ({ lightTheme }) => {
//This will contain a scroll screen with each project and a short video of the project - need to work out hosting
//or put in public folder
    const [project, setProject] = useState(projectsObject[0]);
    const { id, name, video, description, stack, live, repo } = project;
    
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
        <div className='projects-container'>
            <h1>Projects</h1>
                <div className='project-box'>
                    <h1>{name}</h1>
                    <h3>hover to play video</h3>
                    <video className='project-video' 
                    onMouseOver={event => event.target.play()} 
                    onMouseOut={event => event.target.pause()}
                    src={video} type='video/mp4' muted>
                    </video>
                    <div className='project-btn-box'>
                        <div className='border-wrap'>
                            <button type="button" onClick={() => decrementer()}>Prev</button>
                        </div>
                        <div className='border-wrap'>
                            <button type="button" onClick={() => incrementer()}>Next</button>
                        </div>
                    </div>
                <div className='description-box'>
                    {description}
                </div>
                <div className='stack-box'>
                   Tech Stack: {stack}
                </div>
                <div className='link-box'>
                    <div className='link-wrap'>
                        <a href={live}>Live Site</a>
                    </div>
                    <div className='link-wrap'>
                        <a href={repo}>Repo</a>
                    </div>
                </div>
            </div>
        </div>

    )
}
