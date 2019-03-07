export const selectStoriesByWorkflowId = (state, id) => {
  const workflowId = parseInt(id)
  const selectedStories = []
  const stories = Object.values(state.entities.stories)
  stories.forEach(story => {
    if (story.workflow_id == workflowId) {
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

export const storiesByProjectAndWorkflowAndCount = (state, projectId, workflows) => {
  const counts = {}
  const stories = Object.values(state.entities.stories)
  workflows.forEach(workflow => {
    counts[workflow.title] = counts[workflow.title] || []
    stories.forEach(story => {
      if (story.workflow_id == workflow.id) {
        counts[workflow.title].push(story)
      }
    })
    counts[workflow.title] = counts[workflow.title].length
  })
  return counts
}

export const countPointsByWorkflowId = (state, workflowId) => {
  let count = 0
  Object.values(state.entities.stories).forEach(story => {
    if (story.workflow_id === workflowId) {
      count += story.points
    }
  })
  return count
}

export const selectProjectsSortedBy = (state, key) => {
  return Object.values(state.entities.projects).sort((a, b) =>  {
    if (a[key] < b[key]) {
      return -1
    } else if (a[key] > b[key]) {
      return 1
    } else {
      return 0
    }
  })
}