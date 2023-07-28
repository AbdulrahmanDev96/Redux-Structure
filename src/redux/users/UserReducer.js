import { FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_FAILURE } from './ActionTypes';


const initialState = {
  loading: false,
  users: [],
  error: ""
}

// status share with html
const reducer = (state = initialState , action) => {
  switch(action.type) {
    case FETCH_USER_REQUEST :
      return {
        ...state,
        loading: true,
      }
    case FETCH_USER_SUCCESS :
      return {
        loading: false,
        // el payload el bymsel el users el gaya men api
        users: action.payload,
        error: "",
      }
    case FETCH_USER_FAILURE :
      return {
        loading: false,
        users: [],
        error: action.payload,
      }
    default: 
      return state;
  }
}

export default reducer;