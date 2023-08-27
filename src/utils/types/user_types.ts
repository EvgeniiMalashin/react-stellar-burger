export enum UserTypes {
  NEW_USER_REQUEST = "NEW_USER_REQUEST",
  NEW_USER_OK = "NEW_USER_OK",
  NEW_USER_FAIL = "NEW_USER_FAIL",
  LOGIN_REQUEST = "LOGIN_REQUEST",
  LOGIN_OK = "LOGIN_OK",
  LOGIN_FAIL = "LOGIN_FAIL",
  TOKEN_REQUEST = "TOKEN_REQUEST",
  TOKEN_OK = "TOKEN_OK",
  TOKEN_FAIL = "TOKEN_FAIL",
  LOGOUT_REQUEST = "LOGOUT_REQUEST",
  LOGOUT_OK = "LOGOUT_OK",
  LOGOUT_FAIL = "LOGOUT_FAIL",
  PATCH_USER_INFO_FAIL = "PATCH_USER_INFO_FAIL",
  PATCH_USER_INFO_OK = "PATCH_USER_INFO_OK",
  PATCH_USER_INFO_REQUEST = "PATCH_USER_INFO_REQUEST",
  GET_USER_INFO_OK = "GET_USER_INFO_OK",
  GET_USER_INFO_FAIL = "GET_USER_INFO_FAIL",
  GET_USER_INFO_REQUEST = "GET_USER_INFO_REQUEST",
}

// new user

export interface INewUserReq {
  readonly type: UserTypes.NEW_USER_REQUEST;
  email: string;
  name: string;
}

export interface INewUserOk {
  readonly type: UserTypes.NEW_USER_OK;
}

export interface INewUserFail {
  readonly type: UserTypes.NEW_USER_FAIL;
}

// login

export interface ILoginReq {
  readonly type: UserTypes.LOGIN_REQUEST;
}

export interface ILoginOk {
  readonly type: UserTypes.LOGIN_OK;
  email: string;
  name: string;
  accessToken: string;
  refreshToken: string;
}

export interface ILoginFail {
  readonly type: UserTypes.LOGIN_FAIL;
}

// token

export interface ITokenReq {
  readonly type: UserTypes.TOKEN_REQUEST;
}

export interface ITokenOk {
  readonly type: UserTypes.TOKEN_OK;
  accessToken: string;
  refreshToken: string;
}

export interface ITokenFail {
  readonly type: UserTypes.TOKEN_FAIL;
}

// logout

export interface ILogoutReq {
  readonly type: UserTypes.LOGOUT_REQUEST;
  token: string
}

export interface ILogoutOk {
  readonly type: UserTypes.LOGOUT_OK;
}

export interface ILogoutFail {
  readonly type: UserTypes.LOGOUT_FAIL;
}

// patch user

export interface IPatchUserReq {
  readonly type: UserTypes.PATCH_USER_INFO_REQUEST;
  email: string;
  name: string;
}

export interface IPatchUserOk {
  readonly type: UserTypes.PATCH_USER_INFO_OK;
  email: string;
  name: string;
}

export interface IPatchUserFail {
  readonly type: UserTypes.PATCH_USER_INFO_FAIL;
}

// get user info

export interface IGetUserReq {
  readonly type: UserTypes.GET_USER_INFO_REQUEST;
}

export interface IGetUserOk {
  readonly type: UserTypes.GET_USER_INFO_OK;
  email: string;
  name: string;

}

export interface IGetUserFail {
  readonly type: UserTypes.GET_USER_INFO_FAIL;
}
