import React from 'react'
import './Project.css'
import { projects } from '../data'

const Project = () => {
  return (
    <div>
        <div className="project" id="projects">
            <h2>My Portfolio</h2>
            <div class="project-items">
                {projects.map(({image, title, text}) =>{
                    return(
                        
                            <div class="item">
                                <img src={image} alt='project-img'/>
                                <div class="info">
                                    <h4>{title}</h4>
                                    <p>{text}</p>
                                    <a href="#">View Project</a>
                                </div>
                            </div>
                       
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default Project