export enum PasswordTypes {
  FORGOT_PASSWORD_REQUEST = "FORGOT_PASSWORD_REQUEST",
  FORGOT_PASSWORD_OK = "FORGOT_PASSWORD_OK",
  FORGOT_PASSWORD_FAIL = "FORGOT_PASSWORD_FAIL",
  NEW_PASSWORD_REQUEST = "NEW_PASSWORD_REQUEST",
  NEW_PASSWORD_OK = "NEW_PASSWORD_OK",
  NEW_PASSWORD_FAIL = "NEW_PASSWORD_FAIL",
}

// forgot password

export interface IForgotPassReq {
  readonly type: PasswordTypes.FORGOT_PASSWORD_REQUEST;
  email: string;
}

export interface IForgotPassOk {
  readonly type: PasswordTypes.FORGOT_PASSWORD_OK;
}

export interface IForgotPassFail {
  readonly type: PasswordTypes.FORGOT_PASSWORD_FAIL;
}

// new password

export interface INewPassReq {
  readonly type: PasswordTypes.NEW_PASSWORD_REQUEST;
  password: string;
  token: string;
}

export interface INewPassOk {
  readonly type: PasswordTypes.NEW_PASSWORD_OK;
}

export interface INewPassFail {
  readonly type: PasswordTypes.NEW_PASSWORD_FAIL;
}

