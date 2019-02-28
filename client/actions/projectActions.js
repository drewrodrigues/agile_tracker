import * as APIUtil from '../utils/projectUtil'

const RECEIVE_PROJECT  = "RECEIVE_PROJECT"
const RECEIVE_PROJECTS = "RECEIVE_PROJECTS"
const REMOVE_PROJECT   = "REMOVE_PROJECT"

const receiveProject = project => {
  return {
    type: RECEIVE_PROJECT,
    project
  }
}

const receiveProjects = projects => {
  return {
    type: RECEIVE_PROJECTS,
    projects
  }
}

const removeProject = id => {
  return {
    type: REMOVE_PROJECT,
    id
  }
}

export const getProject = id => dispatch => {
  return APIUtil.getProject(id)
    .then(project => dispatch(receiveProject(project)))
}

export const getProjects = () => dispatch => {
  return APIUtil.getProjects()
    .then(projects => dispatch(receiveProjects(projects)))
}

export const createProject = project => dispatch => {
  return APIUtil.createProject(project)
    .then(project => dispatch(receiveProject(project)))
    .fail(() => console.log('catch errors'))
}

export const updateProject = project => dispatch => {
  return APIUtil.updateProject(project)
    .then(project => dispatch(receiveProject(project)))

}

export const deleteProject = id => dispatch => {
  return APIUtil.deleteProject(id)
    .then(() => dispatch(removeProject(id)))
}