import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import AppNavbarContainer from '../shared/appNavbarContainer'
import WorkflowIndex from '../workflows/workflowIndex'

class ProjectShow extends Component {
  constructor(props) {
    super(props)
    this.state = { showSidebar: true, loading: true }
    this.onDragEnd = this.onDragEnd.bind(this)
    this.toggleSidebar = this.toggleSidebar.bind(this)
  }

  componentDidMount() {
    this.props.getProject(this.props.match.params.id)
      .then(() => {
        setTimeout(() => {
          this.setState({ loading: false })
        }, 250)
      })
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
    let title = this.state.loading ? "Loading..." : this.props.project.title

    return (
      <div className="project-show">
        <AppNavbarContainer style="project-show" title={ title }/>

        { this.state.loading ? (
          <div className={`project-loading project-loading-${this.state.loading}`}>
            <div className="project-loading-content">
              <img src={ window.images.logoClear } />
              <p>One moment please...</p>
            </div>
          </div>
        ) : (
          <section className={`project-container sidebar-show-${this.state.showSidebar}`}>
            <WorkflowIndex
              toggleSidebar={ this.toggleSidebar }
              onDragEnd={ this.onDragEnd }
              onDragUpdate={ this.onDragUpdate }
              project={ this.props.project } 
              stories={ this.props.stories } 
              workflows={ this.props.workflows } />
          </section>
        )}

      </div>
    )
  }
}

export default ProjectShow