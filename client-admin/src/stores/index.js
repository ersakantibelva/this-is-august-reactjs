import { productReducer } from "./reducers/productReducer";
import { combineReducers, applyMiddleware, legacy_createStore as createStore } from 'redux'
import thunk from 'redux-thunk'
import { categoryReducer } from "./reducers/categoryReducer";

const rootReducer = combineReducers({
  product: productReducer,
  category: categoryReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store