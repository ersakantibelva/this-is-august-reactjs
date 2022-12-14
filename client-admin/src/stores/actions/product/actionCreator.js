import { PRODUCT_CHANGEINPUTADD, PRODUCT_GETPRODUCT, PRODUCT_SETPRODUCTS } from "./actionTypes"

export const fetchProducts = () => {
  return (dispatch, getState) => {
    fetch('http://localhost:3000/products?_expand=category')
    .then((res) => {
      if (!res.ok) throw new Error('Error')
      return res.json()
    })
    .then((data) => {
      dispatch({
        type: PRODUCT_SETPRODUCTS,
        payload: data
      })
    })
    .catch((err) => console.log(err))
  }
}

export const fetchProductById = (id) => {
  return (dispatch, getState) => {
    fetch(`http://localhost:3000/products/${id}`)
    .then((res) => {
      if (!res.ok) throw new Error('Error')
      return res.json()
    })
    .then((data) => {
      dispatch({
        type: PRODUCT_GETPRODUCT,
        payload: data
      })
    })
  }
}

export const addProduct = (payload) => {
  return (dispatch, getState) => {
    fetch('http://localhost:3000/products', {
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

export const editProduct = (id, payload) => {
  return (dispatch, getState) => {
    fetch(`http://localhost:3000/products/${id}_expand=category`, {
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

export const changeFormAddProduct = (payload) => {
  return {
    type: PRODUCT_CHANGEINPUTADD,
    payload
  }
}

export const deleteProduct = (id) => {
  return (dispatch, getState) => {
    fetch(`http://localhost:3000/products/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
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