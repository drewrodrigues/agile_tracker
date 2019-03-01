export const HIDE_MODALS        = "HIDE_MODALS"
export const SHOW_PROJECT_MODAL = "SHOW_PROJECT_MODAL"

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