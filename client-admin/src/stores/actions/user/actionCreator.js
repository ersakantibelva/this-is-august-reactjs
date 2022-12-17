const baseUrl = 'http://localhost:3000'

export const addUser = (payload) => {
  return (dispatch, getState) => {
    fetch(baseUrl + '/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
    .then((res) => {
      if(!res.ok) throw new Error('Error')
      return res.json()
    })
    .then((data) => {
      console.log(data, `Success to add admin ${data.username}`);
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
    .then((res) => {
      if(!res.ok) throw new Error('Error')
      return res.json()
    })
  }
}