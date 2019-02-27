import * as APIUtil from '../utils/userUtil'
import { receiveUserErrors } from '../actions/errors/userErrorActions'

export const SIGN_UP_USER = "SIGN_UP_USER"

const signUpUser = user => {
  return {
    type: SIGN_UP_USER,
    user
  }
}

export const createUser = user => dispatch => {
  return APIUtil.createUser(user)
    .then(userResponse => dispatch(signUpUser(userResponse)))
    .fail(userErrorsResponse => dispatch(receiveUserErrors(userErrorsResponse.responseJSON)))
}

window.createUser = createUser