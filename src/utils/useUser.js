import { request } from "./api";

const baseURL = "https://norma.nomoreparties.space/api";
const baseAuthURL = "https://norma.nomoreparties.space/api/auth";

export const ingredientsURL = `${baseURL}/ingredients`;
export const orderURL = `${baseURL}/orders`;
export const passwordResetURL = `${baseURL}/password-reset`;
export const newUserURL = `${baseAuthURL}/register`;
export const newPassURL = `${passwordResetURL}/reset`;
export const loginURL = `${baseAuthURL}/login`;
export const logoutURL = `${baseAuthURL}/logout`;
export const tokenURL = `${baseAuthURL}/token`;
export const profileEndpointURL = `${baseAuthURL}/user`;


export const passwordReset = async (email) => {
    return request(passwordResetURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: email }),
    });
  };
  
  export const newPass = async (password, token) => {
    return request(newPassURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        password: password,
        token: token,
      }),
    });
  };
  
  //authorisation
  export const newUserReg = async ({ email, password, name }) => {
    return request(newUserURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        password: password,
        name: name,
      }),
    });
  };
  
  export const login = async (email, password) => {
    return request(loginURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
  };
  
  export const tokenRefresh = async () => {
    const refreshToken = localStorage.getItem("refreshToken");
    return request(tokenURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        token: refreshToken,
      }),
    });
  };
  
  export const logout = async () => {
    const refreshToken = localStorage.getItem("refreshToken");
    return request(logoutURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        token: refreshToken,
      }),
    });
  };
  
  export const userGetInfo = async () => {
    return request(profileEndpointURL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: window.localStorage.getItem("accessToken"),
      },
    });
  };
  
  export const userPatchInfo = async (email, name, password) => {
    return request(profileEndpointURL, {
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
  };
  