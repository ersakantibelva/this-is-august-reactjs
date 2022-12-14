import { PRODUCT_CHANGEINPUTADD, PRODUCT_DELETEPRODUCT, PRODUCT_GETPRODUCT, PRODUCT_SETPRODUCTS } from "../actions/product/actionTypes";

const initialState = {
  products: [],
  product: {
    name: '',
    description: '',
    price: 0,
    categoryId: '',
    mainImg: ''
  }
}

export function productReducer(state = initialState, action) {
  switch (action.type) {
    case PRODUCT_SETPRODUCTS:
      return { ...state, products: action.payload }
      break;

    case PRODUCT_GETPRODUCT:
    case PRODUCT_CHANGEINPUTADD:
      return {
        ...state,
        product: {
          ...state.product,
          name: action.payload.name,
          description: action.payload.description,
          price: action.payload.price,
          categoryId: action.payload.categoryId,
          mainImg: action.payload.mainImg
        }
      }
      break;

    // case PRODUCT_DELETEPRODUCT:
    //   return {  }
    //   break;

    default:
      return state
  }
}