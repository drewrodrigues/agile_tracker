export const RECEIVE_USER_ERRORS = "RECEIVE_USER_ERRORS"

export const receiveUserErrors = errors => {
  return {
    type: RECEIVE_USER_ERRORS,
    errors
  }
}