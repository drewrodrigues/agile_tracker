import * as APIUtil from '../utils/projectUtil'
import { checkAuth } from '../actions/errors/errorActions'

import { receiveStories } from '../actions/storyActions'
import { receiveWorkflows } from '../actions/workflowActions'

export const RECEIVE_PROJECT        = "RECEIVE_PROJECT"
export const RECEIVE_PROJECTS       = "RECEIVE_PROJECTS"
export const REMOVE_PROJECT         = "REMOVE_PROJECT"
export const RECEIVE_PROJECT_ERRORS = "RECEIVE_PROJECT_ERRORS"
export const CLEAR_ERRORS           = "CLEAR_ERRORS" // TODO: add to shared actions?

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

const receiveProjectErrors = errors => {
  return {
    type: RECEIVE_PROJECT_ERRORS,
    errors
  }
}

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  }
}

export const getProject = id => dispatch => {
  return APIUtil.getProject(id)
    .then(response => {
      dispatch(receiveProject(response.project))
      dispatch(receiveStories(response.stories))
      dispatch(receiveWorkflows(response.workflows))
    })
    .fail(errorResponse => dispatch(checkAuth(errorResponse)))
}

export const getProjects = () => dispatch => {
  return APIUtil.getProjects()
    .then(projects => dispatch(receiveProjects(projects)))
    .fail(errorResponse => dispatch(checkAuth(errorResponse)))
}

export const createProject = project => dispatch => {
  return APIUtil.createProject(project)
    .then(response => dispatch(receiveProject(response.project)))
    .fail(errors => {
      dispatch(receiveProjectErrors(errors.responseJSON))
      dispatch(checkAuth(errors))
    })
}

export const updateProject = project => dispatch => {
  return APIUtil.updateProject(project)
    .then(response => dispatch(receiveProject(response.project)))
    .fail(errors => {
      dispatch(receiveProjectErrors(errors.responseJSON))
      dispatch(checkAuth(errors))
    })
}

export const deleteProject = id => dispatch => {
  return APIUtil.deleteProject(id)
    .then(() => dispatch(removeProject(id)))
    .fail(errorResponse => dispatch(checkAuth(errorResponse)))
}