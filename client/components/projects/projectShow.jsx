import React, { Component } from 'react'

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
    this.handleHotkeys()
  }

  onDragEnd(e) {
    const { destination, source } = e
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
        workflow_id: destination.droppableId
      })
    }
  }

  handleHotkeys() {
    document.addEventListener('keydown', e => {
      if (e.altKey) {
        switch (e.code) {
          case "KeyH": // h
            this.toggleSidebar()
            break
          case "KeyI": // i : toggleIcebox
            this.props.toggleWorkflow("icebox")
            break
          case "KeyB": // b : toggleBacklog
            this.props.toggleWorkflow("backlog")
            break
          case "KeyC": // c : toggleCurrent
            this.props.toggleWorkflow("current")
            break
          case "KeyD": // d : toggleDone
            this.props.toggleWorkflow("done")
            break
        }
      }
    })
  }

  toggleSidebar() {
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