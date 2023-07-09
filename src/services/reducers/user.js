import {
    NEW_USER_REQUEST,
    NEW_USER_OK,
    NEW_USER_FAIL,
    LOGIN_REQUEST,
    LOGIN_OK,
    LOGIN_FAIL,
    TOKEN_REQUEST,
    TOKEN_OK,
    TOKEN_FAIL,
    LOGOUT_REQUEST,
    LOGOUT_OK,
    LOGOUT_FAIL,
    PATCH_USER_INFO_FAIL,
    PATCH_USER_INFO_OK,
    PATCH_USER_INFO_REQUEST,
    GET_USER_INFO_OK,
    GET_USER_INFO_FAIL,
    GET_USER_INFO_REQUEST,
  } from "../actions/user";
  
  const initialState = {
    email: "",
    name: "",
    token: "",
    accessToken: "",
    refreshToken: "",
    request: false,
    fail: false,
    isLoggedIn: false,
  };
  
  export const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case NEW_USER_OK:
        return {
          ...state,
          request: true,
          fail: false,
        };
      case NEW_USER_REQUEST:
        return {
          ...state,
          email: action.email,
          name: action.name,
          request: true,
          fail: false,
        };
      case NEW_USER_FAIL:
        return {
          ...state,
          request: false,
          fail: true,
        };
      case LOGIN_OK:
        return {
          ...state,
          email: action.email,
          name: action.name,
          accessToken: action.accessToken,
          refreshToken: action.refreshToken,
          isLoggedIn: true,
          request: true,
          fail: false,
        };
      case LOGIN_REQUEST:
        return {
          ...state,
          request: true,
          fail: false,
        };
      case LOGIN_FAIL:
        return {
          ...state,
          request: false,
          fail: true,
        };
      case TOKEN_OK:
        return {
          ...state,
          accessToken: action.accessToken,
          refreshToken: action.refreshToken,
          request: true,
          fail: false,
        };
      case TOKEN_REQUEST:
        return {
          ...state,
          request: true,
          fail: false,
        };
      case TOKEN_FAIL:
        return {
          ...state,
          request: false,
          fail: true,
        };
      case LOGOUT_OK:
        return {
          ...state,
          email: null,
          name: null,
          isLoggedIn: false,
          accessToken: null,
          refreshToken: null,
          request: true,
          fail: false,
        };
      case LOGOUT_REQUEST:
        return {
          ...state,
          token: action.token,
          request: true,
          fail: false,
        };
      case LOGOUT_FAIL:
        return {
          ...state,
          request: false,
          fail: true,
        };
      case GET_USER_INFO_REQUEST:
        return {
          ...state,
          request: true,
          fail: false,
        };
      case GET_USER_INFO_OK:
        return {
          ...state,
          email: action.email,
          name: action.name,
          isLoggedIn: true,
          request: true,
          fail: false,
        };
      case GET_USER_INFO_FAIL:
        return {
          ...state,
          request: false,
          fail: true,
        };
      case PATCH_USER_INFO_REQUEST:
        return {
          ...state,
          email: action.email,
          name: action.name,
          request: true,
          fail: false,
        };
      case PATCH_USER_INFO_OK:
        return {
          ...state,
          email: action.email,
          name: action.name,
          request: true,
          fail: false,
        };
      case PATCH_USER_INFO_FAIL:
        return {
          ...state,
          request: false,
          fail: true,
        };
      default:
        return state;
    }
  };
  