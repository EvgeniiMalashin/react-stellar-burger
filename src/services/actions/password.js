import { passwordReset, newPass } from "../../utils/useUser";
export const FORGOT_PASSWORD_REQUEST = "FORGOT_PASSWORD_REQUEST";
export const FORGOT_PASSWORD_SUCCESS = "FORGOT_PASSWORD_SUCCESS";
export const FORGOT_PASSWORD_ERROR = "FORGOT_PASSWORD_ERROR";
export const NEW_PASSWORD_REQUEST = "NEW_PASSWORD_REQUEST";
export const NEW_PASSWORD_SUCCESS = "NEW_PASSWORD_SUCCESS";
export const NEW_PASSWORD_ERROR = "NEW_PASSWORD_ERROR";

export const resetPassword = (email) => {
  return function (dispatch) {
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

export const newPassword = (password, token) => {
  return function (dispatch) {
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