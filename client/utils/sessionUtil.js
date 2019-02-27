export const createSession = user => {
  return $.ajax({
    method: 'POST',
    url: `/api/session`,
    data: { user }
  })
}

export const deleteSession = id => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/session`
  })
}

// TODO: remove once done testing
window.getSession    = getSession
window.getSessions   = getSessions
window.createSession = createSession
window.updateSession = updateSession
window.deleteSession = deleteSession