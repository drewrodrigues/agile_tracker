import { 
  SIGN_IN_USER,
  SIGN_OUT_USER 
} from '../actions/sessionActions'

const sessionsReducer = (oldState = { id: null }, action) => {
  Object.freeze(oldState)
  let newState = Object.assign({}, oldState)

  switch (action.type) {
    case SIGN_IN_USER:
      return Object.assign(newState, action.session)
    case SIGN_OUT_USER:
      return { id: null }
    default:
      return oldState
  }
}

export default sessionsReducer