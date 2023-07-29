import { request } from "./api";
import { accessToken } from "./constatnts";

export const passwordReset = async (email) => {
  return request('/password-reset', {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: email }),
  });
}

export const newPass = async (password, token) => {
  return request('/password-reset/reset', {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      password: password,
      token: token,
    }),
  });
}

export const newUserReg = async ({ email, password, name }) => {
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

export const login = async (email, password) => {
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
      Authorization: accessToken,
    },
  });
}

export const userPatchInfo = async (email, name, password) => {
  return request('/auth/user', {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: accessToken,
    },
    body: JSON.stringify({
      email: email,
      name: name,
      password: password,
    }),
  });
}
