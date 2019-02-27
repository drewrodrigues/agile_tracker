import {
  RECEIVE_SESSION,
  REMOVE_SESSION
} from '../actions/sessionActions'

const sessionsReducer = (oldState = {}, action) => {
  Object.freeze(oldState)
  let newState = Object.assign({}, oldState)

  switch (action.type) {
    case RECEIVE_SESSION:
      return Object.assign(newState, action.session)
    case REMOVE_SESSION:
      delete newState[action.id]
      return newState
    default:
      return oldState
  }
}

export default sessionsReducer