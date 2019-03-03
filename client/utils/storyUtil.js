export const createStory = (projectId, story) => {
  return $.ajax({
    method: 'POST',
    url: `/api/projects/${projectId}/stories`,
    data: { story }
  })
}

export const updateStory = story => {
  return $.ajax({
    method: 'PUT',
    url: `/api/stories/${story.id}`,
    data: { story }
  })
}

export const deleteStory = id => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/stories/${id}`
  })
}