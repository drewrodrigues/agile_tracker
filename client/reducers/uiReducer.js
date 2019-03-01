import {
  HIDE_MODALS,
  SHOW_PROJECT_MODAL
} from "../actions/uiActions";

const uiReducer = (oldState = {}, action) => {
  Object.freeze(oldState)

  switch (action.type) {
    case HIDE_MODALS:
      return {}
    case SHOW_PROJECT_MODAL:
      return { projectModal: action.data }
    default:
      return oldState
  }
}

export default uiReducer