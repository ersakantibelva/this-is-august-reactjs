import { CATEGORY_CHANGEINPUTEDIT, CATEGORY_GETCATEGORY, CATEGORY_SETCATEGORIES } from "./actionTypes"

export const fetchCategories = () => {
  return (dispatch, getState) => {
    fetch('http://localhost:3000/categories')
    .then((res) => {
      if(!res.ok) throw new Error ('Error')
      return res.json()
    })
    .then((data) => {
      dispatch({
        type: CATEGORY_SETCATEGORIES,
        payload: data
      })
    })
  }
}

export const addCategory = (payload) => {
  return (dispatch, getState) => {
    fetch('http://localhost:3000/categories', {
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
      console.log(data);
    })
  }
}

export const fetchCategoryById = (id) => {
  return (dispatch, getState) => {
    fetch(`http://localhost:3000/categories/${id}`)
    .then((res) => {
      if(!res.ok) throw new Error('Error')
      return res.json()
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
    fetch(`http://localhost:3000/categories/${id}`, {
      method: 'PUT',
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
      console.log(data);
    })
  }
}