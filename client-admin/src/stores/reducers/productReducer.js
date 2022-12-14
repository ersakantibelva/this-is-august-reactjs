import { PRODUCT_SETPRODUCTS } from "../actions/product/actionTypes";

const initialState = {
  products: []
}

export function productReducer(state = initialState, action) {
  switch (action.type) {
    case PRODUCT_SETPRODUCTS:
      return { ...state, products: action.payload }
      break;

    default:
      return state
  }
}