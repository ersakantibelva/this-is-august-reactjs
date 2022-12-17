import { productReducer } from "./reducers/productReducer";
import { combineReducers, applyMiddleware, legacy_createStore as createStore } from 'redux'
import thunk from 'redux-thunk'
import { categoryReducer } from "./reducers/categoryReducer";
import { loadingReducer } from "./reducers/loadingReducer";

const rootReducer = combineReducers({
  product: productReducer,
  category: categoryReducer,
  loading: loadingReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store