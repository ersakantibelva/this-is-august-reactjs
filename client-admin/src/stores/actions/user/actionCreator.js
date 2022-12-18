const baseUrl = 'https://h8-p3-c1-belva.foxhub.space'

export const addUser = (payload) => {
  return (dispatch, getState) => {
    return fetch(baseUrl + '/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        access_token: localStorage.access_token
      },
      body: JSON.stringify(payload)
    })
    .then(async (res) => {
      if(!res.ok) {
        const error = await res.json()
        throw new Error(error.message)
      } else {
        return res.json()
      }
    })
  }
}

export const loginUser = (payload) => {
  return (dispatch, getState) => {
    return fetch(baseUrl + `/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
    .then(async (res) => {
      if(!res.ok) {
        const error = await res.json()
        throw new Error(error.message)
      } else {
        return res.json()
      }
    })
  }
}