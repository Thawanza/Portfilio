// Project.jsx

import React, { useState } from 'react'
import './Project.css'
import mywork_data from '../../assets/mywork_data'

function Project() {
  return (
    <div id='projets' className='projects'>
      <div className="project-title">
        <h1>Mes Projets</h1>
      </div>

      <div className="project-container">
        {mywork_data.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  )
}

function ProjectCard({ project }) {

  return (
    <div className="project-card">

      {/* Titre */}
      <h2>{project.w_name}</h2>

      {/* Technologies */}
      <span className="project-tech">
        {project.w_tech}
      </span>

      {/* Description */}


      <div className='project-desc'>
        {project.w_desc}
      </div>

      {/* Liens */}
      <div className="project-links">

        {/* GitHub si disponible */}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        )}

        {/* Demo si disponible */}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
          >
            Live Demo
          </a>
        )}

        {/* Si pas de GitHub */}
        {!project.github && (
          <span className="private-project">
            🔒 Projet Privé
          </span>
        )}



      </div>
    </div>
  )
}

export default Project