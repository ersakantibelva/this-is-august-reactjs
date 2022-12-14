import { CATEGORY_SETCATEGORIES } from "../actions/category/actionTypes";

const initialState = {
  categories: []
}

export const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case CATEGORY_SETCATEGORIES:
      return { ...state, categories: action.payload }
      break;
  
    default:
      return state
      break;
  }
}