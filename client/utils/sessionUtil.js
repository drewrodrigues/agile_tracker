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
