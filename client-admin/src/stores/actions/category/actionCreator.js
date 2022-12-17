import { CATEGORY_CHANGEINPUTEDIT, CATEGORY_GETCATEGORY, CATEGORY_SETCATEGORIES } from "./actionTypes"
const baseUrl = 'http://localhost:3000'

export const fetchCategories = () => {
  return (dispatch, getState) => {
    return fetch(baseUrl + '/categories', {
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
        type: CATEGORY_SETCATEGORIES,
        payload: data
      })
    })
  }
}

export const addCategory = (payload) => {
  return (dispatch, getState) => {
    return fetch(baseUrl + '/categories', {
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

export const fetchCategoryById = (id) => {
  return (dispatch, getState) => {
    return fetch(baseUrl + `/categories/${id}`, {
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
        type: CATEGORY_GETCATEGORY,
        payload: data
      })
    })
  }
}

export const changeFormEditCategory = (payload) => {
  return {
    type: CATEGORY_CHANGEINPUTEDIT,
    payload
  }
}

export const editCategory = (id, payload) => {
  return (dispatch, getState) => {
    return fetch(baseUrl + `/categories/${id}`, {
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

export const deleteCategory = (id) => {
  return (dispatch, getState) => {
    return fetch(baseUrl + `/categories/${id}`, {
      method: 'DELETE',
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
  }
}