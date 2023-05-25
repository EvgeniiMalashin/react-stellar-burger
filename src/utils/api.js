const API = "https://norma.nomoreparties.space/api";

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}

export function request(endPoint, options) {
  const url = API + endPoint;
  return fetch(url, options).then(checkResponse)
}
