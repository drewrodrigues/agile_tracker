import React, { Component } from 'react'
import ProjectIndexItem from './projectIndexItem'
import AppNavbarContainer from '../shared/appNavbarContainer'
import ProjectModalContainer from './projectModalContainer'

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
        <ProjectModalContainer />
        <AppNavbarContainer title="AgileTrack" />

        <nav className="navbar-dashboard">
          <div className="container">
            <p className="navbar-dashboard-tab">Projects</p>
            <button 
              className="navbar-dashboard-button"
              onClick={() => this.props.showModal({
                buttonText: "Create",
                data: { title: "" },
                title: "Create a new project"
              })}>
              Create project
            </button>
          </div>
        </nav>

        <div className="container">
          <h4 className="projectIndex-myprojects">
            <i className="fa fa-archive"></i>
            My Projects
          </h4>
          { this.props.projects.length === 0 ? 
            <div className="project-placeholder">
              <h4><i className='fa fa-plus-circle'></i>Looks like you have no projects, try creating one</h4>
              <button 
                className="navbar-dashboard-button"
                onClick={() => this.props.showModal({
                  buttonText: "Create",
                  data: { title: "" },
                  title: "Create a new project"
                })}>
                Create project
              </button>
            </div>
          : (<>
            { this.props.projects.map(project => (
              <ProjectIndexItem 
                key={project.title} 
                project={project}
                deleteProject={this.props.deleteProject}
                showModal={this.props.showModal} />)
            )}</>)}
        </div>
      </div>
    )
  }
}

export default ProjectIndex