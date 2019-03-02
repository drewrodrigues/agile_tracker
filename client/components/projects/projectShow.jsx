import React, { Component } from 'react'
import AppNavbarContainer from '../shared/appNavbarContainer'
import WorkflowSidebarContainer from '../workflows/workflowSidebarContainer'
import WorkflowContainer from '../workflows/workflowContainer'

class ProjectShow extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.getProject(this.props.match.params.id)
  }

  render() {
    if (!this.props.project) return null

    return (
      <div className="project-show">
        <AppNavbarContainer style="project-show" title={ this.props.project.title }/>

        <section className="project-container">
          <WorkflowSidebarContainer />

          <section className="workflow-container">
            <WorkflowContainer 
              canAddStory={true}
              show={true}
              workflow="Icebox"
            />
            <WorkflowContainer 
              canAddStory={true}
              show={true}
              workflow="Backlog"
            />
            <WorkflowContainer 
              canAddStory={true}
              show={true}
              workflow="Current"
            />
            <WorkflowContainer 
              canAddStory={false}
              show={true}
              workflow="Done"
            />
          </section>
        </section>
      </div>
    )
  }
}

export default ProjectShow