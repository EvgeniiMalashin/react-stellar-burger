import {
  NEW_USER_REQUEST,
  NEW_USER_SUCCESS,
  NEW_USER_ERROR,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  TOKEN_REQUEST,
  TOKEN_SUCCESS,
  TOKEN_ERROR,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_ERROR,
  PATCH_USER_INFO_REQUEST,
  PATCH_USER_INFO_SUCCESS,
  PATCH_USER_INFO_ERROR,
  GET_USER_INFO_REQUEST,
  GET_USER_INFO_SUCCESS,
  GET_USER_INFO_ERROR
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
    case NEW_USER_SUCCESS:
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
    case NEW_USER_ERROR:
      return {
        ...state,
        request: false,
        fail: true,
      };
    case LOGIN_SUCCESS:
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
    case LOGIN_ERROR:
      return {
        ...state,
        request: false,
        fail: true,
      };
    case TOKEN_SUCCESS:
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
    case TOKEN_ERROR:
      return {
        ...state,
        request: false,
        fail: true,
      };
    case LOGOUT_SUCCESS:
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
    case LOGOUT_ERROR:
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
    case GET_USER_INFO_SUCCESS:
      return {
        ...state,
        email: action.email,
        name: action.name,
        isLoggedIn: true,
        request: true,
        fail: false,
      };
    case GET_USER_INFO_ERROR:
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
    case PATCH_USER_INFO_SUCCESS:
      return {
        ...state,
        email: action.email,
        name: action.name,
        request: true,
        fail: false,
      };
    case PATCH_USER_INFO_ERROR:
      return {
        ...state,
        request: false,
        fail: true,
      };
    default:
      return state;
  }
};
