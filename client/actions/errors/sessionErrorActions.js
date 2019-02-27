export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS"

export const receiveSessionErrors = errors => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors
  }
}