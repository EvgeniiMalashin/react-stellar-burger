const API = "https://norma.nomoreparties.space/api";

export function request(endPoint, options) {
  const url = API + endPoint;
  return fetch(url, options).then((res) => res.ok
    ? res.json()
    : Promise.reject(`Ошибка: ${res.status}`)
  )
}