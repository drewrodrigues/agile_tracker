import { 
  SIGN_IN_USER,
  SIGN_OUT_USER
} from '../actions/sessionActions'

import { SIGN_UP_USER } from '../actions/userActions'

const sessionsReducer = (oldState = { id: null }, action) => {
  Object.freeze(oldState)
  let newState = Object.assign({}, oldState)

  switch (action.type) {
    case SIGN_IN_USER:
      return { id: Object.values(action.user)[0].id }
    case SIGN_UP_USER: // TODO: RECEIVE_CURRENT_USER
      return { id: Object.values(action.user)[0].id }
    case SIGN_OUT_USER:
      return { id: null }
    default:
      return oldState
  }
}

export default sessionsReducer