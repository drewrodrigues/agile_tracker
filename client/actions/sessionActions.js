import * as APIUtil from '../utils/sessionUtil'
import { receiveSessionErrors } from './errors/sessionErrorActions'

export const SIGN_IN_USER  = "SIGN_IN_USER"
export const SIGN_OUT_USER = "SIGN_OUT_USER"
export const CLEAR_ERRORS = "CLEAR_ERRORS"

const signInUser = user => {
  return {
    type: SIGN_IN_USER,
    user
  }
}

const signOutUser = () => {
  return {
    type: SIGN_OUT_USER
  }
}

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  }
}

export const createSession = user => dispatch => {
  return APIUtil.createSession(user)
    .then(userResponse => dispatch(signInUser(userResponse)))
    .fail(sessionErrorsResponse => dispatch(receiveSessionErrors(sessionErrorsResponse.responseJSON)))
}

export const deleteSession = () => dispatch => {
  return APIUtil.deleteSession()
    .then(() => dispatch(signOutUser()))
    .fail(() => dispatch(signOutUser()))
}

window.createSession = createSession
window.deleteSession = deleteSession