export const getProjects = () => {
  return $.ajax({
    method: 'GET',
    url: `/api/projects`
  })
}

export const createProject = project => {
  return $.ajax({
    method: 'POST',
    url: `/api/projects`,
    data: { project }
  })
}

export const updateProject = project => {
  return $.ajax({
    method: 'PUT',
    url: `/api/projects/${project.id}`,
    data: { project }
  })
}

export const deleteProject = id => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/projects/${id}`
  })
}

// TODO: remove once done testing
window.getProjects   = getProjects
window.createProject = createProject
window.updateProject = updateProject
window.deleteProject = deleteProject