import { passwordReset, newPass } from "../../utils/useUser";
export const FORGOT_PASSWORD_REQUEST = "FORGOT_PASSWORD_REQUEST";
export const FORGOT_PASSWORD_OK = "FORGOT_PASSWORD_OK";
export const FORGOT_PASSWORD_FAIL = "FORGOT_PASSWORD_FAIL";
export const NEW_PASSWORD_REQUEST = "NEW_PASSWORD_REQUEST";
export const NEW_PASSWORD_OK = "NEW_PASSWORD_OK";
export const NEW_PASSWORD_FAIL = "NEW_PASSWORD_FAIL";

export const resetPassword = (email, history) => {
  return function (dispatch) {
    dispatch({
      type: FORGOT_PASSWORD_REQUEST,
      email: email
    });
    passwordReset(email)
      .then((res) => {
        if (res.success) {
          dispatch({
            type: FORGOT_PASSWORD_OK,
          });
        }
      })
      .catch(() =>
        dispatch({
          type: FORGOT_PASSWORD_FAIL,
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
          type: NEW_PASSWORD_OK,
        });
      })
      .catch(() =>
        dispatch({
          type: NEW_PASSWORD_FAIL,
        })
      );
  };
};
