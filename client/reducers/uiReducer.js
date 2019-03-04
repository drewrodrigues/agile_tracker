import {
  HIDE_MODALS,
  SHOW_PROJECT_MODAL,
  TOGGLE_WORKFLOW
} from "../actions/uiActions";

const uiReducer = (oldState = {}, action) => {
  Object.freeze(oldState)
  let newState = Object.assign({}, oldState)

  switch (action.type) {
    case HIDE_MODALS:
      delete newState['projectModal']
      return newState
    case SHOW_PROJECT_MODAL:
      return Object.assign(newState, { projectModal: action.data })
    case TOGGLE_WORKFLOW:
      if (newState[action.workflow]) {
        delete newState[action.workflow]
        return newState
      } else {
        return Object.assign(newState, { [action.workflow]: true })  
      }
    default:
      return oldState
  }
}

export default uiReducer