export const selectStoriesByProjectId = (state, id) => {
  const projectId = parseInt(id)
  const stories = Object.values(state.entities.stories)
  const selectedStories = []
  stories.forEach(story => {
    if (story.project_id === projectId) {
      selectedStories.push(story)
    }
  })
  return selectedStories
}

export const selectStoriesByWorkflow = (stories, workflow) => {
  const selectedStories = []
  stories.forEach(story => {
    if (story.workflow === workflow) {
      selectedStories.push(story)
    }
  })
  return selectedStories
}