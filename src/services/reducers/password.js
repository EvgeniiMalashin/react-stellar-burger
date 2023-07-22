import {
    FORGOT_PASSWORD_REQUEST,
    FORGOT_PASSWORD_SUCCESS,
    FORGOT_PASSWORD_ERROR,
    NEW_PASSWORD_REQUEST,
    NEW_PASSWORD_SUCCESS,
    NEW_PASSWORD_ERROR,
  } from "../actions/password";
  
  const initialState = {
    email: null,
    token: '',
    passRequest: false,
    passFail: false,
    newPassRequest: false,
    newPassFail: false,
  };
  
  export const passwordReducer = (state = initialState, action) => {
    switch (action.type) {
      case FORGOT_PASSWORD_REQUEST:
        return {
          ...state,
          email: action.email,
          passRequest: false,
          passFail: false,
        };
      case FORGOT_PASSWORD_SUCCESS:
        return {
          ...state,
          passRequest: true,
          passFail: false,
        };
      case FORGOT_PASSWORD_ERROR:
        return {
          ...state,
          passRequest: false,
          passFail: true,
        };
      
      case NEW_PASSWORD_REQUEST:
        return {
          ...state,
          password: action.password,
          token: action.token,
          newPassRequest: false,
          newPassFail: false,
        };
      case NEW_PASSWORD_SUCCESS:
        return {
          ...state,
          newPassRequest: true,
          newPassFail: false,
        };
      case NEW_PASSWORD_ERROR:
        return {
          ...state,
          newPassRequest: false,
          newPassFail: true,
        };
      default:
        return state;
    }
  };