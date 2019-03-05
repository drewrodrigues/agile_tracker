export const RECEIVE_WORKFLOWS = "RECEIVE_WORKFLOWS"

export const receiveWorkflows = workflows => {
  return {
    type: RECEIVE_WORKFLOWS,
    workflows
  }
}