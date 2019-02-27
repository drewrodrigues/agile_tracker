import { SIGN_UP_USER } from '../../actions/userActions'
import { RECEIVE_USER_ERRORS } from '../../actions/errors/userErrorActions'

const userErrorsReducer = (oldState = [], action) => {
  Object.freeze(oldState)

  switch (action.type) {
    case RECEIVE_USER_ERRORS:
      return action.errors
    case SIGN_UP_USER:
      return []
    default:
      return oldState
  }
}

export default userErrorsReducer