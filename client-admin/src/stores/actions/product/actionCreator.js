import { PRODUCT_CHANGEFORMEDITIMAGE, PRODUCT_CHANGEINPUTADD, PRODUCT_GETPRODUCT, PRODUCT_SETPRODUCTS } from "./actionTypes"
const baseUrl = 'https://h8-p3-c1-belva.foxhub.space'

export const fetchProducts = () => {
  return (dispatch, getState) => {
    return fetch(baseUrl + '/products', {
      headers: {
        access_token: localStorage.access_token
      }
    })
    .then(async (res) => {
      if(!res.ok) {
        const error = await res.json()
        throw new Error(error.message)
      } else {
        return res.json()
      }
    })
    .then((data) => {
      dispatch({
        type: PRODUCT_SETPRODUCTS,
        payload: data
      })
    })
  }
}

export const fetchProductById = (id) => {
  return (dispatch, getState) => {
    return fetch(baseUrl + `/products/${id}`, {
      headers: {
        access_token: localStorage.access_token
      }
    })
    .then(async (res) => {
      if(!res.ok) {
        const error = await res.json()
        throw new Error(error.message)
      } else {
        return res.json()
      }
    })
    .then((data) => {
      return dispatch({
        type: PRODUCT_GETPRODUCT,
        payload: data
      })
    })
  }
}

export const addProduct = (payload) => {
  return (dispatch, getState) => {
    return fetch(baseUrl + '/products', {
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

export const editProduct = (id, payload) => {
  return (dispatch, getState) => {
    return fetch(baseUrl + `/products/${id}`, {
      method: 'PUT',
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

export const changeFormAddProduct = (payload) => {
  return {
    type: PRODUCT_CHANGEINPUTADD,
    payload
  }
}

export const changeFormEditImage = (payload) => {
  return {
    type: PRODUCT_CHANGEFORMEDITIMAGE,
    payload
  }
}

export const deleteProduct = (id) => {
  return (dispatch, getState) => {
    return fetch(baseUrl + `/products/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        access_token: localStorage.access_token
      }
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