import { 
  CLEAR_ERRORS,
  RECEIVE_PROJECT,
  RECEIVE_PROJECT_ERRORS
} from "../../actions/projectActions"

const projectErrorsReducer = (state = [], action) => {
  Object.freeze(state)

  switch (action.type) {
    case CLEAR_ERRORS:
      return []
    case RECEIVE_PROJECT:
      return []
    case RECEIVE_PROJECT_ERRORS:
      return action.errors
    default:
      return state
  }
}

export default projectErrorsReducer