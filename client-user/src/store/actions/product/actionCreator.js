import { PRODUCT_SETPRODUCTS } from "./actionType"

const baseUrl = 'http://localhost:3000'

export const fetchProducts = () => {
  return (dispatch, getState) => {
    return fetch(baseUrl + '/pub/products')
    .then(async (res) => {
      if(!res.ok) {
        const error = await res.json()
        throw new Error(error.message)
      } else {
        return res.json()
      }
    })
    .then((data) => {
      console.log(data);
      dispatch({
        type: PRODUCT_SETPRODUCTS,
        payload: data
      })
    })
  }
}