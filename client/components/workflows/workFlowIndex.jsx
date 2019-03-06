import React from 'react'
import { DragDropContext } from 'react-beautiful-dnd'

import WorkflowSidebarContainer from './workflowSidebarContainer'
import WorkflowContainer from './workflowContainer'

const WorkflowIndex = ({ onDragEnd, onDragUpdate, project, stories, workflows }) => {
  return (<>
    <WorkflowSidebarContainer 
      projectId={ project.id }
      workflows={ workflows }
    />

    <DragDropContext onDragEnd={ onDragEnd } onDragUpdate={ onDragUpdate }>
      <section className="workflow-container">
        { workflows.map((workflow, index) => (
          <WorkflowContainer workflow={ workflow } key={ index }/>
        ))}
      </section>
    </DragDropContext>
  </>)
}

export default WorkflowIndex