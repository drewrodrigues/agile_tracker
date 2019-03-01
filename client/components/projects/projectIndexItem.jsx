import React from 'react'
import { Link } from 'react-router-dom'

const ProjectIndexItem = ({ project, deleteProject }) => {
  return (
    <div className="projectIndexItem">
      <header className="projectIndexItem-header">
        <Link to={`/projects/${project.id}`}><i className="fa fa-angle-double-right"></i> { project.title }</Link>

        <div className="projectIndexItem-header-buttons">
          <button 
            className="fa fa-edit"
            onClick={() => showProjectFormModal()}>
          </button>
          <button
            className="fa fa-trash"
            onClick={() => deleteProject(project.id)}>
          </button>
        </div>
      </header>
    </div>
  )
}

export default ProjectIndexItem