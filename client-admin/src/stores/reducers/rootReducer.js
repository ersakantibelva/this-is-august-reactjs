import { PRODUCT_SETPRODUCTS } from "../actions/actionTypes";

const initialState = {
  products: []
}

export function rootReducer(state = initialState, action) {
  switch (action.type) {
    case PRODUCT_SETPRODUCTS:
      return { ...state, products: action.payload }
      break;

    default:
      return state
  }
}