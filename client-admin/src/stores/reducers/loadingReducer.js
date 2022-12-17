import { LOADING_SETLOADER, LOADING_UNSETLOADER } from "../actions/loading/actionTypes";

const initialState = {
  loading: false
}

export function loadingReducer(state = initialState, action) {
  switch (action.type) {
    case LOADING_SETLOADER:
      return {
       loading: true 
      }

    case LOADING_UNSETLOADER:
      return {
        loading: false 
       }
  
    default:
      return state
  }
}