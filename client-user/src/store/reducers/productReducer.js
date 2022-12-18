import { PRODUCT_SETPRODUCTS } from "../actions/product/actionType";

const initialState = {
  currentPage: 0,
  totalPages: 0,
  totalProduct: 0,
  products: [],
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

    default:
      return state;
      break;
  }
};
