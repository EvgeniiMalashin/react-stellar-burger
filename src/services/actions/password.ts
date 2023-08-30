import { passwordReset, newPass } from "../../utils/useUser";
import { AppDispatch, AppThunk } from "../store";
export const FORGOT_PASSWORD_REQUEST: 'FORGOT_PASSWORD_REQUEST' = 'FORGOT_PASSWORD_REQUEST';
export const FORGOT_PASSWORD_SUCCESS: 'FORGOT_PASSWORD_SUCCESS' = 'FORGOT_PASSWORD_SUCCESS';
export const FORGOT_PASSWORD_ERROR: 'FORGOT_PASSWORD_ERROR' = 'FORGOT_PASSWORD_ERROR';
export const NEW_PASSWORD_REQUEST: 'NEW_PASSWORD_REQUEST' = 'NEW_PASSWORD_REQUEST';
export const NEW_PASSWORD_SUCCESS: 'NEW_PASSWORD_SUCCESS' = 'NEW_PASSWORD_SUCCESS';
export const NEW_PASSWORD_ERROR: 'NEW_PASSWORD_ERROR' = 'NEW_PASSWORD_ERROR';

export const resetPassword: AppThunk = (email: string) => {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: FORGOT_PASSWORD_REQUEST,
      email: email
    });
    passwordReset(email)
      .then((res) => {
        if (res.success) {
          dispatch({
            type: FORGOT_PASSWORD_SUCCESS,
          });
        }
      })
      .catch(() =>
        dispatch({
          type: FORGOT_PASSWORD_ERROR,
        })
      );
  };
};

export const newPassword: AppThunk = (password: string, token: string) => {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: NEW_PASSWORD_REQUEST,
      password: password,
      token: token
    });
    newPass(password, token)
      .then((res) => {
        dispatch({
          type: NEW_PASSWORD_SUCCESS,
        });
      })
      .catch(() =>
        dispatch({
          type: NEW_PASSWORD_ERROR,
        })
      );
  };
};

export const forgotPasswordRequest = (email: string) => {
  return {
      type: FORGOT_PASSWORD_REQUEST,
      email
  }
}

export const forgotPasswordSuccess = () => {
  return {
      type: FORGOT_PASSWORD_SUCCESS,
  }
}

export const forgotPasswordError = () => {
  return {
      type: FORGOT_PASSWORD_ERROR,
  }
}

export const newPasswordRequest = (password: string, token: string) => {
  return {
      type: NEW_PASSWORD_REQUEST,
      password,
      token
  }
}

export const newPasswordSuccess = () => {
  return {
      type: NEW_PASSWORD_SUCCESS,
  }
}

export const newPasswordError = () => {
  return {
      type: NEW_PASSWORD_ERROR,
  }
}




export const actionCreators = {
  forgotPasswordRequest,
  forgotPasswordSuccess,
  forgotPasswordError,
  newPasswordRequest,
  newPasswordSuccess,
  newPasswordError,
}
