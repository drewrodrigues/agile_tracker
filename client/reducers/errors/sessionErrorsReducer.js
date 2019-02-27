import {
  RECEIVE_SESSION_ERRORS,
  REMOVE_SESSION_ERROR
} from '../../actions/sessionActions'

const sessionErrorsReducer = (oldState = [], action) => {
  Object.freeze(oldState)
  let newState = Object.assign({}, oldState)

  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      return action.sessionErrors
    case REMOVE_SESSION_ERROR:
      return []
    default:
      return oldState
  }
}

export default sessionErrorsReducer