import { RECEIVE_WORKFLOWS } from '../../actions/workflowActions'

const workflowsReducer = (oldState = {}, action) => {
  Object.freeze(oldState)
  let newState = Object.assign({}, oldState)

  switch (action.type) {
    case RECEIVE_WORKFLOWS:
      return Object.assign(newState, action.workflows)
    default:
      return oldState
  }
}

export default workflowsReducer