import { SIGN_IN_USER, CLEAR_ERRORS } from '../../actions/sessionActions'
import { RECEIVE_SESSION_ERRORS } from '../../actions/errors/sessionErrorActions'

const sessionErrorsReducer = (oldState = [], action) => {
  Object.freeze(oldState)

  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      return action.errors
    case SIGN_IN_USER:
      return []
    case CLEAR_ERRORS:
      return []
    default:
      return oldState
  }
}

export default sessionErrorsReducer