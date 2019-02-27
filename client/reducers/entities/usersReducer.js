import {
  RECEIVE_USER,
  REMOVE_USER
} from '../../actions/userActions'

const usersReducer = (oldState = {}, action) => {
  Object.freeze(oldState)
  let newState = Object.assign({}, oldState)

  switch (action.type) {
    case RECEIVE_USER:
      return Object.assign(newState, action.user)
    case REMOVE_USER:
      delete newState[action.id]
      return newState
    default:
      return oldState
  }
}

export default usersReducer