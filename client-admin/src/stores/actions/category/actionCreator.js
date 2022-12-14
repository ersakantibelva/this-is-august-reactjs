import { CATEGORY_SETCATEGORIES } from "./actionTypes"

export const fetchCategories = () => {
  return (dispatch, getState) => {
    fetch('http://localhost:3000/categories')
    .then((res) => {
      if(!res.ok) throw new Error ('Error')
      return res.json()
    })
    .then((data) => {
      console.log('data', data);
      dispatch({
        type: CATEGORY_SETCATEGORIES,
        payload: data
      })
    })
  }
}