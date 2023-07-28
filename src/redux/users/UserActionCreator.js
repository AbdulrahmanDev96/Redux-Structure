import {FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_FAILURE} from "./ActionTypes";
import axios from "axios";
// or use action as object
// import * as actions from './ActionType';

/* three Action Creator Method pass to dispatch */
export const fetchUserRequest = () => {
  return {
    type: FETCH_USER_REQUEST,
  };
};

// el parameter el rag3a men endpoint
export const fetchUserSuccess = (users) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: users,
  };
};

// hana el message el error el btege men endpoint
export const fetchUserFailure = (error) => {
  return {
    type: FETCH_USER_FAILURE,
    payload: error,
  };
};

// define action creator handle three action axios get data
export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUserRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        // reference le al data fe variable we 
        // 3malt dispatch le action bt3 el success we b3t el users
        const users = response.data;
        dispatch(fetchUserSuccess(users));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchUserFailure(errorMsg));
      });
  };
};
