import { SIGN_UP_USER } from '../../actions/userActions'

const usersReducer = (oldState = {}, action) => {
  Object.freeze(oldState)
  let newState = Object.assign({}, oldState)

  switch (action.type) {
    case SIGN_UP_USER:
      return Object.assign(newState, action.user)
    default:
      return oldState
  }
}

export default usersReducer