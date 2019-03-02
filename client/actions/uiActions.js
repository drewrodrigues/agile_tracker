export const HIDE_MODALS        = "HIDE_MODALS"
export const SHOW_PROJECT_MODAL = "SHOW_PROJECT_MODAL"
export const TOGGLE_ICEBOX      = "TOGGLE_ICEBOX"
export const TOGGLE_BACKLOG     = "TOGGLE_BACKLOG"
export const TOGGLE_CURRENT     = "TOGGLE_CURRENT"
export const TOGGLE_DONE        = "TOGGLE_DONE"
export const TOGGLE_WORKFLOW    = "TOGGLE_WORKFLOW"

export const hideModals = () => {
  return {
    type: HIDE_MODALS
  }
}

export const showProjectModal = data => {
  return {
    type: SHOW_PROJECT_MODAL,
    data
  }
}

export const toggleWorkflow = workflow => {
  return {
    type: TOGGLE_WORKFLOW,
    workflow
  }
}