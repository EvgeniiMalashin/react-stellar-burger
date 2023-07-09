import {
    newUserReg,
    login,
    tokenRefresh,
    logout,
    userGetInfo,
    userPatchInfo,
  } from "../../utils/useUser";
  import { setCookie } from "../../utils/cookie";
  
  export const NEW_USER_REQUEST = "NEW_USER_REQUEST";
  export const NEW_USER_OK = "NEW_USER_OK";
  export const NEW_USER_FAIL = "NEW_USER_FAIL";
  
  export const LOGIN_REQUEST = "LOGIN_REQUEST";
  export const LOGIN_OK = "LOGIN_OK";
  export const LOGIN_FAIL = "LOGIN_FAIL";
  
  export const TOKEN_REQUEST = "TOKEN_REQUEST";
  export const TOKEN_OK = "TOKEN_OK";
  export const TOKEN_FAIL = "TOKEN_FAIL";
  
  export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
  export const LOGOUT_OK = "LOGOUT_OK";
  export const LOGOUT_FAIL = "LOGOUT_FAIL";
  
  export const GET_USER_INFO_REQUEST = "GET_USER_INFO_REQUEST";
  export const GET_USER_INFO_OK = "GET_USER_INFO_OK";
  export const GET_USER_INFO_FAIL = "GET_USER_INFO_FAIL";
  
  export const PATCH_USER_INFO_REQUEST = "PATCH_USER_INFO_REQUEST";
  export const PATCH_USER_INFO_OK = "PATCH_USER_INFO_OK";
  export const PATCH_USER_INFO_FAIL = "PATCH_USER_INFO_FAIL";
  
  export const newUser = (email, password, name) => {
    return function (dispatch) {
      dispatch({
        type: NEW_USER_REQUEST,
        email: email,
        password: password,
        name: name,
      });
      newUserReg({ email, password, name })
        .then((res) => {
          dispatch({
            type: NEW_USER_OK,
            email: res.user.email,
            password: res.user.password,
            name: res.user.name,
            accessToken: res.accessToken,
            refreshToken: res.refreshToken,
          });
        })
        .catch(() =>
          dispatch({
            type: NEW_USER_FAIL,
          })
        );
    };
  };
  
  export const userLogin = (email, password) => {
    return function (dispatch) {
      dispatch({
        type: LOGIN_REQUEST,
        email: email,
        password: password,
      });
      login(email, password)
        .then((res) => {
          dispatch({
            type: LOGIN_OK,
            email: res.user.email,
            name: res.user.name,
            accessToken: res.accessToken,
            refreshToken: res.refreshToken,
          });
          localStorage.setItem("accessToken", res.accessToken);
          localStorage.setItem("refreshToken", res.refreshToken);
        })
        .catch(() => {
          dispatch({
            type: LOGIN_FAIL,
          });
          alert("Упс, вы ввели неправильный логин или пароль");
        });
    };
  };
  
  export const refreshToken = () => {
    return function (dispatch) {
      dispatch({
        type: TOKEN_REQUEST,
      });
      tokenRefresh()
        .then((res) => {
          const accessToken = res.accessToken.split("Bearer ")[1];
          setCookie("token", accessToken);
          localStorage.setItem("refreshToken", res.refreshToken);
          dispatch({
            type: TOKEN_OK,
            accessToken: res.accessToken,
            refreshToken: res.refreshToken,
          });
        })
        .catch(() =>
          dispatch({
            type: TOKEN_FAIL,
          })
        );
    };
  };
  
  export const userLogout = (token) => {
    return function (dispatch) {
      dispatch({
        type: LOGOUT_REQUEST,
      });
      logout(token)
        .then((res) => {
          if (res.success) {
            window.localStorage.removeItem("accessToken");
            window.localStorage.removeItem("refreshToken");
          }
          dispatch({
            type: LOGOUT_OK,
          });
        })
        .catch(() =>
          dispatch({
            type: LOGOUT_FAIL,
          })
        );
    };
  };
  
  export const getUser = (token) => {
    return function (dispatch) {
      dispatch({
        type: GET_USER_INFO_REQUEST,
        token: token,
      });
      userGetInfo(token)
        .then((res) => {
          dispatch({
            type: GET_USER_INFO_OK,
            email: res.user.email,
            name: res.user.name,
          });
        })
        .catch(() => dispatch({ type: GET_USER_INFO_FAIL }));
    };
  };
  
  export const patchUser = (email, name) => {
    return function (dispatch) {
      dispatch({
        type: PATCH_USER_INFO_REQUEST,
        email: email,
        name: name,
      });
      userPatchInfo(email, name)
        .then((res) => {
          dispatch({
            type: PATCH_USER_INFO_OK,
            email: res.user.email,
            name: res.user.name,
          });
        })
        .catch(() => dispatch({ type: PATCH_USER_INFO_FAIL }));
    };
  };
  