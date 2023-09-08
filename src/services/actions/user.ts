import { newUserReg, login, tokenRefresh, logout, userGetInfo, userPatchInfo } from "../../utils/useUser";
import { setCookie } from "../../utils/cookie";
import { AppThunk } from "../store";

export const NEW_USER_REQUEST: 'NEW_USER_REQUEST' = 'NEW_USER_REQUEST';
export const NEW_USER_SUCCESS: 'NEW_USER_SUCCESS' = 'NEW_USER_SUCCESS';
export const NEW_USER_ERROR: 'NEW_USER_ERROR' = 'NEW_USER_ERROR';

export const LOGIN_REQUEST: 'LOGIN_REQUEST' = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS: 'LOGIN_SUCCESS' = 'LOGIN_SUCCESS';
export const LOGIN_ERROR: 'LOGIN_ERROR' = 'LOGIN_ERROR';

export const TOKEN_REQUEST: 'TOKEN_REQUEST' = 'TOKEN_REQUEST';
export const TOKEN_SUCCESS: 'TOKEN_SUCCESS' = 'TOKEN_SUCCESS';
export const TOKEN_ERROR: 'TOKEN_ERROR' = 'TOKEN_ERROR';

export const LOGOUT_REQUEST: 'LOGOUT_REQUEST' = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS: 'LOGOUT_SUCCESS' = 'LOGOUT_SUCCESS';
export const LOGOUT_ERROR: 'LOGOUT_ERROR' = 'LOGOUT_ERROR';

export const GET_USER_INFO_REQUEST: 'GET_USER_INFO_REQUEST' = 'GET_USER_INFO_REQUEST';
export const GET_USER_INFO_SUCCESS: 'GET_USER_INFO_SUCCESS' = 'GET_USER_INFO_SUCCESS';
export const GET_USER_INFO_ERROR: 'GET_USER_INFO_ERROR' = 'GET_USER_INFO_ERROR';

export const PATCH_USER_INFO_REQUEST: 'PATCH_USER_INFO_REQUEST' = 'PATCH_USER_INFO_REQUEST';
export const PATCH_USER_INFO_SUCCESS: 'PATCH_USER_INFO_SUCCESS' = 'PATCH_USER_INFO_SUCCESS';
export const PATCH_USER_INFO_ERROR: 'PATCH_USER_INFO_ERROR' = 'PATCH_USER_INFO_ERROR';

export const newUser: AppThunk = (email: string, password: string, name: string) => {
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
          type: NEW_USER_SUCCESS,
          email: res.user.email,
          password: res.user.password,
          name: res.user.name,
          accessToken: res.accessToken,
          refreshToken: res.refreshToken,
        });
      })
      .catch(() =>
        dispatch({
          type: NEW_USER_ERROR,
        })
      );
  };
};

export const userLogin: AppThunk = (email: string, password: string) => {
  return function (dispatch) {
    dispatch({
      type: LOGIN_REQUEST,
      email: email,
      password: password,
    });
    login(email, password)
      .then((res) => {
        dispatch({
          type: LOGIN_SUCCESS,
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
          type: LOGIN_ERROR,
        });
        alert("Вы ввели неправильный логин или пароль");
      });
  };
};

export const refreshToken: AppThunk = () => {
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
          type: TOKEN_SUCCESS,
          accessToken: res.accessToken,
          refreshToken: res.refreshToken,
        });
      })
      .catch(() =>
        dispatch({
          type: TOKEN_ERROR,
        })
      );
  };
};

export const userLogout: AppThunk = (token: string) => {
  return function (dispatch) {
    dispatch({
      type: LOGOUT_REQUEST,
      token: token,
    });
    logout()
      .then((res) => {
        if (res.success) {
          window.localStorage.removeItem("accessToken");
          window.localStorage.removeItem("refreshToken");
        }
        dispatch({
          type: LOGOUT_SUCCESS,
        });
      })
      .catch(() =>
        dispatch({
          type: LOGOUT_ERROR,
        })
      );
  };
};

export const getUser: AppThunk = (token: string) => {
  return function (dispatch) {
    dispatch({
      type: GET_USER_INFO_REQUEST,
      token: token,
    });
    userGetInfo()
      .then((res) => {
        dispatch({
          type: GET_USER_INFO_SUCCESS,
          email: res.user.email,
          name: res.user.name,
        });
      })
      .catch(() => dispatch({ type: GET_USER_INFO_ERROR }));
  };
};

export const patchUser: AppThunk = (email: string, name: string) => {
  return function (dispatch) {
    dispatch({
      type: PATCH_USER_INFO_REQUEST,
      email: email,
      name: name,
    });
    userPatchInfo(email, name, '')
      .then((res) => {
        dispatch({
          type: PATCH_USER_INFO_SUCCESS,
          email: res.user.email,
          name: res.user.name,
        });
      })
      .catch(() => dispatch({ type: PATCH_USER_INFO_ERROR }));
  };
};

export const newUserRequest = (email: string, name: string) => {
  return {
      type: NEW_USER_REQUEST, email, name
  }
}

export const newUserSuccess = () => {
  return {
      type: NEW_USER_SUCCESS,
  }
}

export const newUserError = () => {
  return {
      type: NEW_USER_ERROR,
  }
}

export const loginRequest = () => {
  return {
      type: LOGIN_REQUEST,
  }
}
export const loginSuccess = (email: string, name: string, accessToken: string, refreshToken: string) => {
  return {
      type: LOGIN_SUCCESS,
      email, name, accessToken, refreshToken
  }
}
export const loginError = () => {
  return {
      type: LOGIN_ERROR,
  }
}

export const tokenRequest = () => {
  return {
      type: TOKEN_REQUEST,
  }
}
export const tokenSuccess = (accessToken: string, refreshToken: string) => {
  return {
      type: TOKEN_SUCCESS, accessToken, refreshToken
  }
}
export const tokenError = () => {
  return {
      type: TOKEN_ERROR,
  }
}

export const logoutRequest = (token: string) => {
  return {
      type: LOGOUT_REQUEST, token
  }
}
export const logoutSuccess = () => {
  return {
      type: LOGOUT_SUCCESS,
  }
}
export const logoutError = () => {
  return {
      type: LOGOUT_ERROR,
  }
}

export const getUserInfoRequest = () => {
  return {
      type: GET_USER_INFO_REQUEST,
  }
}
export const getUserInfoSuccess = (email: string, name: string) => {
  return {
      type: GET_USER_INFO_SUCCESS,email,name
  }
}
export const getUserInfoError = () => {
  return {
      type: GET_USER_INFO_ERROR,
  }
}

export const patchUserInfoRequest = (email: string, name: string) => {
  return {
      type: PATCH_USER_INFO_REQUEST,email,name
  }
}
export const patchUserInfoSuccess = (email: string, name: string) => {
  return {
      type: PATCH_USER_INFO_SUCCESS,email,name
  }
}
export const patchUserInfoError = () => {
  return {
      type: PATCH_USER_INFO_ERROR,
  }
}

export const actionCreators = {
  loginRequest,
  loginSuccess,
  loginError,
  logoutRequest,
  logoutSuccess,
  logoutError,
  tokenRequest,
  tokenSuccess,
  tokenError,
  newUserRequest,
  newUserSuccess,
  newUserError,
  getUserInfoRequest,
  getUserInfoSuccess,
  getUserInfoError,
  patchUserInfoRequest,
  patchUserInfoSuccess,
  patchUserInfoError
}