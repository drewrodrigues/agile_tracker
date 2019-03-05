export const selectStoriesByWorkflowId = (state, id) => {
  const workflowId = parseInt(id)
  const selectedStories = []
  const stories = Object.values(state.entities.stories)
  stories.forEach(story => {
    if (story.workflow_id === workflowId) {
      selectedStories.push(story)
    }
  })
  return selectedStories.sort((a, b) => a.position - b.position)
}

export const selectWorkflowsByProjectId = (state, id) => {
  const projectId = parseInt(id)
  const workflows = Object.values(state.entities.workflows)
  const selectedWorkflows = []
  workflows.forEach(workflow => {
    if (workflow.project_id === projectId) {
      selectedWorkflows.push(workflow)
    }
  })
  return selectedWorkflows
}