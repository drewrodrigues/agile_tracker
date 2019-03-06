export const createStory = (workflowId, story) => {
  return $.ajax({
    method: 'POST',
    url: `/api/workflows/${workflowId}/stories`,
    data: { story }
  })
}

export const updateStory = story => {
  return $.ajax({
    method: 'PUT',
    url: `/api/stories/${story.id}`,
    data: { story },
    async: false // TODO: pull into a new action changePosition
  })
}

export const deleteStory = id => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/stories/${id}`
  })
}

export const nextStatusForStory = story => {
  return $.ajax({
    method: "POST",
    url: `/api/stories/${story.id}/next`
  })
}

export const rejectStory = story => {
  return $.ajax({
    method: "POST",
    url: `/api/stories/${story.id}/reject`
  })
}

export const acceptStory = story => {
  return $.ajax({
    method: "POST",
    url: `/api/stories/${story.id}/accept`
  })
}