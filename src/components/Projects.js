import React, { useState } from 'react';

export const Projects = () => {
//This will contain a scroll screen with each project and a short video of the project - need to work out hosting
//or put in public folder
    const [project, setProject] = useState(0);
    
    const incrementer = () => {
        let next = project+1;
        project !== 3 ? setProject(next) : setProject(0);
        console.log(project);
    }

    const decrementer = () => {
        let prev = project-1;
        project !== 0 ? setProject(prev) : setProject(3);
        console.log(project);
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
