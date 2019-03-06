import React, { Component } from 'react'

import AppNavbarContainer from '../shared/appNavbarContainer'
import WorkflowIndex from '../workflows/workflowIndex'

class ProjectShow extends Component {
  constructor(props) {
    super(props)
    this.state = { showSidebar: true }
    this.onDragEnd = this.onDragEnd.bind(this)
    this.toggleSidebar = this.toggleSidebar.bind(this)
  }

  componentDidMount() {
    this.props.getProject(this.props.match.params.id)
  }

  onDragEnd(e) {
    const { destination, source } = e
    console.log(e)
    if (!destination) {
      return
    } else if (
      destination.droppableId === source.droppableId &&
      destination.index       === source.index
    ) {
      return
    } else {
      this.props.updateStory({
        id: e.draggableId,
        position: destination.index,
        workflow_id: destination.droppableId,
        moved: true
      })
    }
  }

  toggleSidebar(e) {
    this.setState({ showSidebar: !this.state.showSidebar })
  }

  render() {
    if (!this.props.project) return null

    return (
      <div className="project-show">
        <AppNavbarContainer style="project-show" title={ this.props.project.title }/>

        <section className={`project-container sidebar-show-${this.state.showSidebar}`}>
          <WorkflowIndex
            toggleSidebar={ this.toggleSidebar }
            onDragEnd={ this.onDragEnd }
            onDragUpdate={ this.onDragUpdate }
            project={ this.props.project } 
            stories={ this.props.stories } 
            workflows={ this.props.workflows } />
        </section>
      </div>
    )
  }
}

export default ProjectShow