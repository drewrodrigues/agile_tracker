export const createUser = user => {
  return $.ajax({
    method: 'POST',
    url: `/api/users`,
    data: { user }
  })
}

// TODO: remove once done testing
window.createUser = createUser