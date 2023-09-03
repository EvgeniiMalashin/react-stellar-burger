import { request } from "./api";


export const passwordReset = async (email: string) => {
  return request('/password-reset', {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: email }),
  });
}

export const newPass = async (password: string, token: string) => {
  return request('/password-reset/reset', {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      password: password,
      token: token,
    }),
  });
}

interface IUserReg {
  email: string;
  password: string;
  name: string;
}

export const newUserReg = async ({ email, password, name }: IUserReg) => {
  return request('/auth/register', {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: email,
      password: password,
      name: name,
    }),
  });
}

export const login = async (email: string, password: string) => {
  return request('/auth/login', {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  });
}

export const tokenRefresh = async () => {
  const refreshToken = localStorage.getItem("refreshToken");
  return request('/auth/token', {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      token: refreshToken,
    }),
  });
}

export const logout = async () => {
  const refreshToken = localStorage.getItem("refreshToken");
  return request('/auth/logout', {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      token: refreshToken,
    }),
  });
}

export const userGetInfo = async () => {
  return request('/auth/user', {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: window.localStorage.getItem("accessToken"),
    },
  });
}

export const userPatchInfo = async (email: string, name: string, password: string) => {
  return request('/auth/user', {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: window.localStorage.getItem("accessToken"),
    },
    body: JSON.stringify({
      email: email,
      name: name,
      password: password,
    }),
  });
}
