import React, { Component } from 'react'
import { DragDropContext } from 'react-beautiful-dnd'

import AppNavbarContainer from '../shared/appNavbarContainer'
import WorkflowSidebarContainer from '../workflows/workflowSidebarContainer'
import WorkflowContainer from '../workflows/workflowContainer'


class ProjectShow extends Component {
  constructor(props) {
    super(props)
    this.onDragEnd = this.onDragEnd.bind(this)
  }

  componentDidMount() {
    this.props.getProject(this.props.match.params.id)
  }

  onDragEnd(e) {
    const { destination, source } = e
    console.log(e)
    if (
      destination.droppableId === source.droppableId &&
      destination.index       === source.index
    ) {
      return
    } else {
      // TODO: shift all items with position below my index, down to reflect backend
      this.props.updateStory({
        id: e.draggableId, 
        position: destination.index + 1,
        workflow_id: destination.droppableId
      })
    }
  }

  render() {
    if (!this.props.project) return null

    return (
      <div className="project-show">
        <AppNavbarContainer style="project-show" title={ this.props.project.title }/>

        <section className="project-container">
          <WorkflowSidebarContainer 
            projectId={ this.props.project.id }
            projectStories={ this.props.stories }
          />

          <DragDropContext onDragEnd={ this.onDragEnd } onDragUpdate={ this.onDragUpdate }>
            <section className="workflow-container">
              { this.props.workflows.map((workflow, index) => (
                <WorkflowContainer workflow={ workflow } key={ index }/>
              ))}
            </section>
          </DragDropContext>
        </section>
      </div>
    )
  }
}

export default ProjectShow