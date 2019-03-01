import {
  RECEIVE_PROJECT,
  RECEIVE_PROJECTS,
  REMOVE_PROJECT
} from '../../actions/projectActions'

const projectsReducer = (oldState = {}, action) => {
  Object.freeze(oldState)
  let newState = Object.assign({}, oldState)

  switch (action.type) {
    case RECEIVE_PROJECT:
      return Object.assign(newState, action.project)
    case RECEIVE_PROJECTS:
      return action.projects
    case REMOVE_PROJECT:
      delete newState[action.id]
      return newState
    default:
      return oldState
  }
}

export default projectsReducer