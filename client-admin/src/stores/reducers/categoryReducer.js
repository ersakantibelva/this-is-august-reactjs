import { CATEGORY_CHANGEINPUTEDIT, CATEGORY_GETCATEGORY, CATEGORY_SETCATEGORIES } from "../actions/category/actionTypes";

const initialState = {
  categories: [],
  category: {
    name: ''
  }
}

export const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case CATEGORY_SETCATEGORIES:
      return { ...state, categories: action.payload }
      break;
    
    case CATEGORY_GETCATEGORY:
      return {
        ...state,
        category: action.payload[0]
      }
      break;
    case CATEGORY_CHANGEINPUTEDIT:
      return {
        ...state,
        category: {
          ...state.category,
          name: action.payload.name
        }
      }
      break;
  
    default:
      return state
      break;
  }
}