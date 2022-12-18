import { PRODUCT_GETPRODUCT, PRODUCT_SETPRODUCTS } from "../actions/product/actionType";

const initialState = {
  currentPage: 0,
  totalPages: 0,
  totalProduct: 0,
  products: [],
  product: {}
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_SETPRODUCTS:
      return {
        ...state,
        currentPage: action.payload.currentPage,
        totalPages: action.payload.totalPages,
        totalProduct: action.payload.totalProduct,
        products: action.payload.products,
      };
      break;

      case PRODUCT_GETPRODUCT:
      return {
        ...state,
        product: action.payload
      };
      break;

    default:
      return state;
      break;
  }
};
