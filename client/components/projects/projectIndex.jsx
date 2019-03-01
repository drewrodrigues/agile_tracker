import React, { Component } from 'react'
import ProjectIndexItem from './projectIndexItem'
import AppNavbarContainer from '../shared/appNavbarContainer'

class ProjectIndex extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.getProjects()
  }

  render() {
    return (
      <div className="project-index">
        <AppNavbarContainer />

        <nav className="navbar-dashboard">
          <div className="container">
            <p className="navbar-dashboard-tab">Projects</p>
            <button className="navbar-dashboard-button">Create project</button>
          </div>
        </nav>

        <div className="container">
          
          <h4 className="projectIndex-myprojects">
            <i className="fa fa-archive"></i>
            <span>My Projects</span> | { this.props.projects.length }
          </h4>
          { this.props.projects.map(project => (
            <ProjectIndexItem 
              key={project.title} 
              project={project}
              deleteProject={this.props.deleteProject}
              showProjectFormModal />)
          )}
        </div>
      </div>
    )
  }
}

export default ProjectIndex