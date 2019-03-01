import { SIGN_UP_USER } from '../../actions/userActions'
import { SIGN_IN_USER } from '../../actions/sessionActions'

const usersReducer = (oldState = {}, action) => {
  Object.freeze(oldState)
  let newState = Object.assign({}, oldState)

  switch (action.type) {
    case SIGN_IN_USER:
      return Object.assign(newState, action.user)
    case SIGN_UP_USER:
      return Object.assign(newState, action.user)
    default:
      return oldState
  }
}

export default usersReducer